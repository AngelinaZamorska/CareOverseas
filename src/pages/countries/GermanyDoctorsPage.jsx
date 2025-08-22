// src/pages/countries/GermanyDoctorsPage.jsx
import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { Search, Filter, Building2, MapPin, Stethoscope, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// ⬇️ Переезд данных: без папки data. Один файл фактов на страну:
// src/doctors/germany.json
import de from '@/pages/doctors/germany.json';

const byText = (a, b) => String(a || '').localeCompare(String(b || ''));

export default function GermanyDoctorsPage() {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();

  const [q, setQ] = useState('');
  const [deptId, setDeptId] = useState('');
  const [clinicId, setClinicId] = useState('');
  const [cityId, setCityId] = useState('');
  const [sort, setSort] = useState('name'); // name | clinic | city

  // готовим списки для фильтров на основе справочников
  const deptOptions = useMemo(() => de.departments.map(d => ({ id: d.id, label: t(`dict.dept.${d.id}.name`) })), [i18n.language]);
  const clinicOptions = useMemo(() => de.clinics.map(c => ({ id: c.id, label: t(`dict.clinic.${c.id}.name`) })), [i18n.language]);
  const cityOptions = useMemo(() => de.cities.map(c => ({ id: c.id, label: t(`dict.city.${c.id}.name`) })), [i18n.language]);

  const labelOf = (id, kind) => {
    if (!id) return '';
    return t(`dict.${kind}.${id}.name`);
  };

  const filtered = useMemo(() => {
    const norm = (s) => (s || '').toLowerCase();
    return de.doctors
      .filter(d => !deptId || d.deptId === deptId)
      .filter(d => !clinicId || d.clinicId === clinicId)
      .filter(d => !cityId || d.cityId === cityId)
      .filter(d => {
        if (!q) return true;
        const hay = [
          d.name,
          labelOf(d.deptId, 'dept'),
          labelOf(d.clinicId, 'clinic'),
          labelOf(d.cityId, 'city'),
          (d.keywords || []).join(' '),
        ].join(' ').toLowerCase();
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

      <header className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold">{t('country.germany.title')}</h1>
          <p className="opacity-90 mt-2">{t('country.germany.subtitle')}</p>
        </div>
      </header>

      {/* Controls */}
      <section className="bg-white py-6 shadow-sm border-b">
        <div className="container mx-auto px-6 grid md:grid-cols-5 gap-4 items-end">
          <div className="md:col-span-2 flex items-center gap-2 border rounded-xl px-3 py-2">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder={t('country.germany.searchPlaceholder')}
              className="w-full outline-none bg-transparent"
            />
            {q && (
              <button className="text-gray-400 hover:text-gray-600" onClick={() => setQ('')} aria-label={t('country.germany.clear')}>
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <select value={deptId} onChange={e => setDeptId(e.target.value)} className="border rounded-xl px-3 py-2">
            <option value="">{t('country.germany.filter.department')}</option>
            {deptOptions.map(o => <option key={o.id} value={o.id}>{o.label}</option>)}
          </select>

          <select value={clinicId} onChange={e => setClinicId(e.target.value)} className="border rounded-xl px-3 py-2">
            <option value="">{t('country.germany.filter.clinic')}</option>
            {clinicOptions.map(o => <option key={o.id} value={o.id}>{o.label}</option>)}
          </select>

          <select value={cityId} onChange={e => setCityId(e.target.value)} className="border rounded-xl px-3 py-2">
            <option value="">{t('country.germany.filter.city')}</option>
            {cityOptions.map(o => <option key={o.id} value={o.id}>{o.label}</option>)}
          </select>
        </div>

        <div className="container mx-auto px-6 mt-3 flex items-center gap-3 text-sm">
          <Filter className="h-4 w-4 text-gray-500" />
          <span className="text-gray-600">{t('country.germany.sortBy')}</span>
          <div className="flex gap-2">
            {['name','clinic','city'].map(key => (
              <Button key={key} size="sm" variant={sort===key?undefined:'outline'} onClick={()=>setSort(key)} className="rounded-full">
                {t(`country.germany.sort.${key}`)}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-8">
        <div className="container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(doc => {
            const titleKey = `people.doctors.${doc.id}.title`;
            const bioKey = `people.doctors.${doc.id}.bio`;
            const title = t(titleKey);
            const bio = t(bioKey);
            const hasTitle = title !== titleKey;
            const hasBio = bio !== bioKey;

            return (
              <article key={doc.id} className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{doc.name}</h3>
                    {hasTitle && <p className="text-sm text-gray-600">{title}</p>}
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-sm text-gray-700">
                  <div className="flex items-center gap-2"><Stethoscope className="h-4 w-4" /><span>{labelOf(doc.deptId, 'dept')}</span></div>
                  <div className="flex items-center gap-2"><Building2 className="h-4 w-4" /><span>{labelOf(doc.clinicId, 'clinic')}</span></div>
                  <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /><span>{labelOf(doc.cityId, 'city')}</span></div>
                </div>

                {hasBio && <p className="mt-4 text-gray-700 text-sm leading-relaxed">{bio}</p>}

                {/* без внешних ссылок; ведём к форме контактов */}
                <div className="mt-5">
                  <Button asChild variant="outline" className="rounded-full">
                    <a href={`/${lang}#contact`}>{t('country.germany.contactCta')}</a>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="container mx-auto px-6 text-center text-gray-600">
            {t('country.germany.empty')}
          </div>
        )}
      </section>

      <section className="py-10 border-t">
        <div className="container mx-auto px-6 flex flex-wrap items-center gap-4">
          <Link to={`/${lang}`} className="text-blue-600 hover:underline">{t('country.germany.backHome')}</Link>
          <span className="text-gray-400">·</span>
          <Button asChild>
            <Link to={`/${lang}#contact`}>{t('country.germany.contactCta')}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
