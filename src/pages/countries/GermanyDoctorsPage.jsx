// src/pages/countries/GermanyDoctorsPage.jsx
import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import {
  Search,
  Filter,
  Building2,
  MapPin,
  Stethoscope,
  X,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  User,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// данные (оставляем твой путь)
import de from '@/pages/doctors/germany.json';

const byText = (a, b) => String(a || '').localeCompare(String(b || ''));

const safeT = (t, key) => (t(key) === key ? '' : t(key));

const initials = (name = '') =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('');

// аккуратная «пилюля» статистики в немецкой стилистике (строго, сдержанно)
const StatPill = ({ icon, value, label, accent }) => (
  <div className="inline-flex items-center gap-2 rounded-2xl px-3 py-2 bg-white/8 ring-1 ring-white/15 backdrop-blur-sm">
    <span
      className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-white shadow ${accent}`}
    >
      {icon}
    </span>
    <span className="font-semibold">{value}</span>
    <span className="text-white/90">{label}</span>
  </div>
);

export default function GermanyDoctorsPage() {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const [q, setQ] = useState('');
  const [deptId, setDeptId] = useState('');
  const [clinicId, setClinicId] = useState('');
  const [cityId, setCityId] = useState('');
  const [sort, setSort] = useState('name'); // name | clinic | city

  const deptOptions = useMemo(
    () => de.departments.map((d) => ({ id: d.id, label: t(`dict.dept.${d.id}.name`) })),
    [i18n.language]
  );
  const clinicOptions = useMemo(
    () => de.clinics.map((c) => ({ id: c.id, label: t(`dict.clinic.${c.id}.name`) })),
    [i18n.language]
  );
  const cityOptions = useMemo(
    () => de.cities.map((c) => ({ id: c.id, label: t(`dict.city.${c.id}.name`) })),
    [i18n.language]
  );

  const labelOf = (id, kind) => (id ? t(`dict.${kind}.${id}.name`) : '');

  const stats = useMemo(() => {
    const doctors = de.doctors.length;
    const clinics = de.clinics.length;
    const cities = de.cities.length;
    const depts = de.departments.length;
    return { doctors, clinics, cities, depts };
  }, []);

  const filtered = useMemo(() => {
    const norm = (s) => (s || '').toLowerCase();
    return de.doctors
      .filter((d) => !deptId || d.deptId === deptId)
      .filter((d) => !clinicId || d.clinicId === clinicId)
      .filter((d) => !cityId || d.cityId === cityId)
      .filter((d) => {
        if (!q) return true;
        const hay = [
          d.name,
          labelOf(d.deptId, 'dept'),
          labelOf(d.clinicId, 'clinic'),
          labelOf(d.cityId, 'city'),
          (d.keywords || []).join(' '),
        ]
          .join(' ')
          .toLowerCase();
        return hay.includes(norm(q));
      })
      .sort((a, b) => {
        if (sort === 'name') return byText(a.name, b.name);
        if (sort === 'clinic') return byText(labelOf(a.clinicId, 'clinic'), labelOf(b.clinicId, 'clinic'));
        if (sort === 'city') return byText(labelOf(a.cityId, 'city'), labelOf(b.cityId, 'city'));
        return 0;
      });
  }, [q, deptId, clinicId, cityId, sort, i18n.language]);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{t('country.germany.metaTitle')}</title>
        <meta name="description" content={t('country.germany.metaDesc')} />
        <link rel="canonical" href={`https://careoverseas.space/${lang}/country/germany`} />
      </Helmet>

      {/* HERO — строгий немецкий стиль: тёмный фон, сдержанные акценты красного/золота */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-zinc-900 to-slate-800" />
        <div className="absolute -top-24 -right-16 w-80 h-80 rounded-full bg-red-500/15 blur-3xl" />
        <div className="absolute -bottom-28 -left-20 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="relative text-white min-h-[56vh] flex items-center">
          <div className="container mx-auto px-6 w-full">
            <nav className="mb-5 text-white/85 text-sm flex items-center justify-center gap-2">
              <Link
                to={`/${lang}`}
                className="rounded-full px-3 py-1 bg-white/10 hover:bg-white/16 transition"
              >
                {t('country.germany.breadcrumbHome', { defaultValue: 'Home' })}
              </Link>
              <span className="opacity-70">/</span>
              <span className="rounded-full px-3 py-1 bg-white/8">{t('country.germany.title')}</span>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-[42px] md:text-6xl font-extrabold tracking-tight leading-[1.04]">
                {t('country.germany.title')}
              </h1>
              <p className="mt-4 text-white/95 text-lg md:text-xl leading-relaxed">
                {t('country.germany.subtitle')}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <StatPill
                  icon={<User className="h-4 w-4" />}
                  value={stats.doctors}
                  label={t('country.germany.stats.doctorsLabel')}
                  accent="bg-gradient-to-b from-red-500 to-red-700"
                />
                <StatPill
                  icon={<Building2 className="h-4 w-4" />}
                  value={stats.clinics}
                  label={t('country.germany.stats.clinicsLabel')}
                  accent="bg-gradient-to-b from-slate-500 to-slate-700"
                />
                <StatPill
                  icon={<MapPin className="h-4 w-4" />}
                  value={stats.cities}
                  label={t('country.germany.stats.citiesLabel')}
                  accent="bg-gradient-to-b from-zinc-500 to-zinc-700"
                />
                <StatPill
                  icon={<Stethoscope className="h-4 w-4" />}
                  value={stats.depts}
                  label={t('country.germany.stats.departmentsLabel')}
                  accent="bg-gradient-to-b from-amber-400 to-amber-600"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* STICKY FILTERS — легкие, читаемые */}
      <section className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="container mx-auto px-6 py-4">
          <div className="grid md:grid-cols-5 gap-3 items-end">
            <div className="md:col-span-2 flex items-center gap-2 border rounded-xl px-3 py-2 bg-white">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t('country.germany.searchPlaceholder')}
                className="w-full outline-none bg-transparent"
              />
              {q && (
                <button
                  className="text-gray-400 hover:text-gray-600"
                  onClick={() => setQ('')}
                  aria-label={t('country.germany.clear')}
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <select
              value={deptId}
              onChange={(e) => setDeptId(e.target.value)}
              className="border rounded-xl px-3 py-2 bg-white"
            >
              <option value="">{t('country.germany.filter.department')}</option>
              {deptOptions.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.label}
                </option>
              ))}
            </select>

            <select
              value={clinicId}
              onChange={(e) => setClinicId(e.target.value)}
              className="border rounded-xl px-3 py-2 bg-white"
            >
              <option value="">{t('country.germany.filter.clinic')}</option>
              {clinicOptions.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.label}
                </option>
              ))}
            </select>

            <select
              value={cityId}
              onChange={(e) => setCityId(e.target.value)}
              className="border rounded-xl px-3 py-2 bg-white"
            >
              <option value="">{t('country.germany.filter.city')}</option>
              {cityOptions.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-3 flex items-center gap-3 text-sm">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-gray-600">{t('country.germany.sortBy')}</span>
            <div className="flex gap-1 p-1 bg-white border rounded-full">
              {['name', 'clinic', 'city'].map((key) => (
                <Button
                  key={key}
                  size="sm"
                  variant={sort === key ? undefined : 'outline'}
                  onClick={() => setSort(key)}
                  className={`rounded-full ${sort === key ? 'shadow-sm' : ''}`}
                >
                  {t(`country.germany.sort.${key}`)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY ME — компактные аргументы */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-4">
          {[
            {
              icon: <Sparkles className="h-5 w-5" />,
              title: t('country.germany.usp.expertsTitle'),
              desc: t('country.germany.usp.expertsDesc'),
            },
            {
              icon: <ShieldCheck className="h-5 w-5" />,
              title: t('country.germany.usp.safeTitle'),
              desc: t('country.germany.usp.safeDesc'),
            },
            {
              icon: <HeartHandshake className="h-5 w-5" />,
              title: t('country.germany.usp.careTitle'),
              desc: t('country.germany.usp.careDesc'),
            },
          ].map((u, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-5 rounded-2xl border bg-gray-50 hover:bg-gray-100 transition"
            >
              <div className="mt-1 text-slate-700">{u.icon}</div>
              <div>
                <h3 className="font-semibold text-slate-900">{u.title}</h3>
                <p className="text-sm text-slate-600">{u.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-8">
        <div className="container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((doc) => {
            const titleKey = `people.doctors.${doc.id}.title`;
            const bioKey = `people.doctors.${doc.id}.bio`;
            const title = t(titleKey);
            const bio = t(bioKey);
            const hasTitle = title !== titleKey;
            const hasBio = bio !== bioKey;

            return (
              <article
                key={doc.id}
                className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition group"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-b from-slate-900 to-slate-700 text-white flex items-center justify-center font-bold shadow-sm ring-1 ring-slate-300/30">
                    {initials(doc.name)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-gray-900 truncate">{doc.name}</h3>
                    {hasTitle && <p className="text-sm text-gray-600 truncate">{title}</p>}
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <Stethoscope className="h-4 w-4 text-red-600" />
                    <span className="line-clamp-1">{labelOf(doc.deptId, 'dept')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-slate-700" />
                    <span className="line-clamp-1">{labelOf(doc.clinicId, 'clinic')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-amber-600" />
                    <span>{labelOf(doc.cityId, 'city')}</span>
                  </div>
                </div>

                {hasBio && <p className="mt-4 text-gray-700 text-sm leading-relaxed">{bio}</p>}

                <div className="mt-5">
                  <Button asChild className="rounded-full w-full">
                    <a href={`/${lang}#contact`}>{t('country.germany.contactCta')}</a>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="container mx-auto px-6 text-center text-gray-600 py-16">
            <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <Search className="h-7 w-7 text-gray-400" />
            </div>
            <h4 className="text-lg font-semibold mb-2">{t('country.germany.empty')}</h4>
            <p className="text-sm text-gray-500">{safeT(t, 'country.germany.emptyHint')}</p>
          </div>
        )}
      </section>

      {/* FINAL CTA */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl p-6 md:p-8 border bg-gradient-to-br from-zinc-50 to-slate-50">
            <div className="absolute -top-16 -right-10 w-56 h-56 bg-amber-200/50 blur-3xl rounded-full" />
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                {t('country.germany.pitch.title')}
              </h3>
              <p className="mt-2 text-slate-700 max-w-2xl">{t('country.germany.pitch.subtitle')}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="px-3 py-1 rounded-full bg-white border text-slate-800 text-sm">
                  {t('country.germany.pitch.badge1')}
                </div>
                <div className="px-3 py-1 rounded-full bg-white border text-slate-800 text-sm">
                  {t('country.germany.pitch.badge2')}
                </div>
                <div className="px-3 py-1 rounded-full bg-white border text-slate-800 text-sm">
                  {t('country.germany.pitch.badge3')}
                </div>
              </div>
              <div className="mt-6">
                <Button asChild className="rounded-full">
                  <a href={`/${lang}#contact`}>{t('country.germany.pitch.cta')}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="py-10 border-t">
        <div className="container mx-auto px-6 flex flex-wrap items-center gap-4">
          <Link to={`/${lang}`} className="text-blue-600 hover:underline">
            {t('country.germany.backHome')}
          </Link>
          <span className="text-gray-400">·</span>
          <Button asChild variant="outline">
            <Link to={`/${lang}#contact`}>{t('country.germany.contactCta')}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
