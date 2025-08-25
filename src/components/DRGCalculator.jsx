import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';

// ⬇️ Импортируем JSON прямо в бандл (без fetch)
import drgCosts from '@/data/drg-costs.json';
import drgTextsAll from '@/data/drg-texts.json';

export default function DRGCalculator() {
  const { t, i18n } = useTranslation();

  // Начальные значения оставляем такими же
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const [lbfw, setLbfw] = useState('1');
  const [days, setDays] = useState(3);
  const [nursingRate, setNursingRate] = useState(250);
  const [roomRate, setRoomRate] = useState(250);
  const [chiefRate, setChiefRate] = useState(1000);
  const [supplement, setSupplement] = useState(700);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [showSug, setShowSug] = useState(false);

  // Быстрый доступ к текстам на текущем языке
  const getTitle = (code) =>
    drgTextsAll?.[code]?.[i18n.language] || drgTextsAll?.[code]?.en || '';

  // Подсказки — только топ‑20 совпадений, чтобы не раздувать DOM
  const suggestions = useMemo(() => {
    if (!showSug || !query) return [];
    const q = query.toLowerCase();
    const filtered = drgCosts.filter((e) => {
      const txt = (getTitle(e.DRG) || '').toLowerCase();
      return e.DRG.toLowerCase().includes(q) || txt.includes(q);
    });
    return filtered.slice(0, 20);
  }, [showSug, query, i18n.language]);

  const handleSelect = (drg) => {
    setSelected(drg);
    setQuery(drg.DRG);
    setShowSug(false);
    setResult(null);
    setError('');
  };

  const calculate = () => {
    setError('');
    if (!selected) return setError(t('drgCalculator.errorSelectCode'));
    const stay = Math.max(Number(days), 3);
    const base = Number(lbfw);
    if (!base) return setError(t('drgCalculator.errorEnterBaseRate'));

    const bwr = Number(selected.SUMME) || 1;
    const drgRevenue = bwr * base;
    const nursingCost = Number(nursingRate) * stay;
    const roomCost = Number(roomRate) * stay;
    const chiefCost = Number(chiefRate) * stay;
    const suppCost = Number(supplement);

    const total = drgRevenue + nursingCost + roomCost + chiefCost + suppCost;
    setResult({ drgRevenue, nursingCost, roomCost, chiefCost, suppCost, total, stay });
  };

  const breakdownLabels = {
    Nstat: t('drgCalculator.breakdown.Nstat'),
    ITA: t('drgCalculator.breakdown.ITA'),
    Dialyse: t('drgCalculator.breakdown.Dialyse'),
    OP: t('drgCalculator.breakdown.OP'),
    Anästh: t('drgCalculator.breakdown.Anästh'),
    Kreissaal: t('drgCalculator.breakdown.Kreissaal'),
    KardDiag: t('drgCalculator.breakdown.KardDiag'),
    EndoskDiag: t('drgCalculator.breakdown.EndoskDiag'),
    Radio: t('drgCalculator.breakdown.Radio'),
    Labor: t('drgCalculator.breakdown.Labor'),
    DiagBereich: t('drgCalculator.breakdown.DiagBereich'),
    TherBereich: t('drgCalculator.breakdown.TherBereich'),
    PatAufn: t('drgCalculator.breakdown.PatAufn'),
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-xl mx-auto">
      {/* Search Box */}
      <div className="relative mb-6">
        <label className="block mb-2 font-medium text-gray-700">{t('drgCalculator.codeLabel')}</label>
        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
          <Search className="ml-3 text-gray-400" />
          <input
            type="text"
            className="w-full p-2 outline-none"
            placeholder={t('drgCalculator.codePlaceholder')}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowSug(true);
            }}
            onFocus={() => setShowSug(true)}
            aria-autocomplete="list"
            aria-expanded={showSug && !!query}
          />
        </div>
        {showSug && query && suggestions.length > 0 && (
          <ul
            className="absolute z-20 bg-white border border-gray-200 rounded-lg w-full mt-1 max-h-56 overflow-y-auto shadow-lg"
            role="listbox"
          >
            {suggestions.map((e) => (
              <li key={e.DRG} className="hover:bg-gray-100" role="option">
                <button className="w-full text-left px-4 py-2" onClick={() => handleSelect(e)}>
                  <span className="font-semibold">{e.DRG}</span> — {getTitle(e.DRG)}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Details & Inputs */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1">{t('drgCalculator.baseRateLabel')}</label>
          <input
            type="number"
            className="w-full border border-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            value={lbfw}
            onChange={(e) => setLbfw(e.target.value)}
            inputMode="decimal"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{t('drgCalculator.stayLabel')}</label>
          <input
            type="number"
            className="w-full border border-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            inputMode="numeric"
            min={3}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{t('drgCalculator.nursingLabel')}</label>
          <input
            type="number"
            className="w-full border border-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            value={nursingRate}
            onChange={(e) => setNursingRate(e.target.value)}
            inputMode="decimal"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{t('drgCalculator.roomLabel')}</label>
          <input
            type="number"
            className="w-full border border-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            value={roomRate}
            onChange={(e) => setRoomRate(e.target.value)}
            inputMode="decimal"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{t('drgCalculator.chiefLabel')}</label>
          <input
            type="number"
            className="w-full border border-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            value={chiefRate}
            onChange={(e) => setChiefRate(e.target.value)}
            inputMode="decimal"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{t('drgCalculator.supplementLabel')}</label>
          <input
            type="number"
            className="w-full border border-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            value={supplement}
            onChange={(e) => setSupplement(e.target.value)}
            inputMode="decimal"
          />
        </div>
      </div>

      {/* Calculate Button (без бесконечной анимации) */}
      <button
        onClick={calculate}
        className="w-full py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold rounded-lg shadow hover:from-blue-700 hover:to-green-600 transition mb-4"
      >
        {t('drgCalculator.calculate')}
      </button>
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}

      {/* Result Display */}
      {result && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3">
          <h4 className="text-lg font-semibold text-gray-800">
            {t('drgCalculator.costForDays', { count: result.stay })}
          </h4>
          <ul className="list-inside list-disc text-gray-700 space-y-1">
            <li>
              <strong>{t('drgCalculator.drgRevenue')}:</strong> €{result.drgRevenue.toFixed(2)}
            </li>
            {selected.breakdown &&
              Object.entries(selected.breakdown).map(([k, v]) => (
                <li key={k} className="pl-4 text-sm text-gray-600">
                  {breakdownLabels[k]}: €{(v * Number(lbfw)).toFixed(2)}
                </li>
              ))}
            <li>{t('drgCalculator.nursing')}: €{result.nursingCost.toFixed(2)}</li>
            <li>{t('drgCalculator.room')}: €{result.roomCost.toFixed(2)}</li>
            <li>{t('drgCalculator.chief')}: €{result.chiefCost.toFixed(2)}</li>
            <li>{t('drgCalculator.supplement')}: €{result.suppCost.toFixed(2)}</li>
          </ul>
          <p className="font-bold text-gray-900">
            {t('drgCalculator.totalCost')}: €{result.total.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}
