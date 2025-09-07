// src/pages/countries/GermanyDoctorsPage.jsx (ideal, safe fallbacks, robust filters)
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

// Data (keep your existing path)
import de from '@/pages/doctors/germany.json';

const byText = (a, b) => String(a || '').localeCompare(String(b || ''));

// Humanize fallback for ids like "helios-berlin-buch" → "Helios Berlin Buch"
const humanize = (id = '') =>
  id
    .replace(/[._-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (m) => m.toUpperCase());

const initials = (name = '') =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('');

const StatPill = ({ icon, value, label, accent }) => (
  <div className="inline-flex items-center gap-2 rounded-2xl px-3 py-2 bg-white/8 ring-1 ring-white/15 backdrop-blur-sm">
    <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-white shadow ${accent}`}>
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

  // Safe translation with graceful fallback to humanized id
  const labelOf = (id, kind) => {
    if (!id) return '';
    const key = `dict.${kind}.${id}.name`;
    const val = t(key);
    return val === key ? humanize(id) : val;
  };

  const deptOptions = useMemo(() =>
    (de.departments || []).map((d) => ({ id: d.id, label: labelOf(d.id, 'dept') })).sort((a,b)=>byText(a.label,b.label))
  , [i18n.language]);

  const clinicOptions = useMemo(() =>
    (de.clinics || []).map((c) => ({ id: c.id, label: labelOf(c.id, 'clinic') })).sort((a,b)=>byText(a.label,b.label))
  , [i18n.language]);

  const cityOptions = useMemo(() =>
    (de.cities || []).map((c) => ({ id: c.id, label: labelOf(c.id, 'city') })).sort((a,b)=>byText(a.label,b.label))
  , [i18n.language]);

  const stats = useMemo(() => ({
    doctors: de.doctors?.length || 0,
    clinics: de.clinics?.length || 0,
    cities: de.cities?.length || 0,
    depts: de.departments?.length || 0,
  }), []);

  const filtered = useMemo(() => {
    const norm = (s) => (s || '').toLowerCase();
    return (de.doctors || [])
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

      {/* HERO */}
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

      {/* STICKY FILTERS */}
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

      {/* WHY ME */}
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
        <div className="container mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-16 border rounded-2xl bg-gray-50">
              <p className="text-lg text-gray-700 font-semibold">{t('country.germany.empty')}</p>
              <p className="text-sm text-gray-500 mt-1">{t('country.germany.emptyHint')}</p>
              <div className="mt-6">
                <Link to={`/${lang}`} className="text-sm text-blue-600 hover:underline">
                  {t('country.germany.backHome')}
                </Link>
              </div>
            </div>
          ) : (
            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((d) => (
                <li key={d.id} className="group">
                  <article className="h-full rounded-2xl border bg-white p-5 shadow-sm hover:shadow transition">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br from-slate-200 to-slate-100 grid place-items-center text-slate-700 font-semibold">
                        {initials(d.name)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 leading-tight">{d.name}</h3>
                        <p className="text-sm text-slate-600">
                          {t(`people.doctors.${d.id}.title`, {
                            defaultValue: `Specialist in ${labelOf(d.deptId, 'dept')}`,
                          })}
                        </p>
                      </div>
                    </div>

                    <dl className="mt-4 grid grid-cols-[auto,1fr] gap-x-2 gap-y-1 text-sm">
                      <dt className="text-slate-500">{t('country.germany.filter.department')}</dt>
                      <dd className="text-slate-800">{labelOf(d.deptId, 'dept')}</dd>
                      <dt className="text-slate-500">{t('country.germany.filter.clinic')}</dt>
                      <dd className="text-slate-800">{labelOf(d.clinicId, 'clinic')}</dd>
                      <dt className="text-slate-500">{t('country.germany.filter.city')}</dt>
                      <dd className="text-slate-800">{labelOf(d.cityId, 'city')}</dd>
                    </dl>

                    <p className="mt-3 text-sm text-slate-600">
                      {t(`people.doctors.${d.id}.bio`, {
                        defaultValue: `${labelOf(d.deptId, 'dept')} at ${labelOf(d.clinicId, 'clinic')}${d.cityId ? `, ${labelOf(d.cityId, 'city')}` : ''}.`,
                      })}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Pitch / CTA */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl border bg-gradient-to-br from-white to-gray-50 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
                  {t('country.germany.pitch.title')}
                </h3>
                <p className="text-slate-600 mt-1 max-w-2xl">
                  {t('country.germany.pitch.subtitle')}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-700">
                  {[t('country.germany.pitch.badge1'), t('country.germany.pitch.badge2'), t('country.germany.pitch.badge3')].map((b, i) => (
                    <span key={i} className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {b}
                    </span>
                  ))}
                </div>
              </div>
              <Button className="rounded-full h-11 px-6">
                {t('country.germany.pitch.cta')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
