// src/components/DRGCalculator.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function DRGCalculator() {
  const { t, i18n } = useTranslation();
  const [drgData,  setDrgData]  = useState([]);    // из drg-costs.json
  const [drgTexts, setDrgTexts] = useState({});    // из drg-texts.json
  const [query,    setQuery]    = useState('');    // что ввёл пользователь
  const [selected, setSelected] = useState(null);  // выбранный DRG-объект

  // остальные поля
  const [lbfw,        setLbfw]        = useState('1');
  const [days,        setDays]        = useState(3);
  const [nursingRate, setNursingRate] = useState(250);
  const [roomRate,    setRoomRate]    = useState(250);
  const [chiefRate,   setChiefRate]   = useState(1000);
  const [supplement,  setSupplement]  = useState(700);

  const [result, setResult] = useState(null);
  const [error,  setError]  = useState('');
  const [showSug, setShowSug] = useState(false);

  const ref = useRef();

  // загрузка JSON-ов
  useEffect(() => {
    Promise.all([
      fetch('/data/drg-costs.json').then(r => r.json()),
      fetch('/data/drg-texts.json').then(r => r.json()),
    ])
    .then(([costs, texts]) => {
      setDrgData(costs);
      setDrgTexts(texts);
    })
    .catch(console.error);
  }, []);

  // генерация списка подсказок на каждый ввод
  const suggestions = showSug && query
    ? drgData
        .filter(e => {
          const codeMatch = e.DRG.toLowerCase().includes(query.toLowerCase());
          const txt = (drgTexts[e.DRG]?.[i18n.language] || drgTexts[e.DRG]?.en || '').toLowerCase();
          const textMatch = txt.includes(query.toLowerCase());
          return codeMatch || textMatch;
        })
        
    : [];

  const handleSelect = drgEntry => {
    setSelected(drgEntry);
    setQuery(drgEntry.DRG);
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

    const bwr         = Number(selected.SUMME) || 1;
    const drgRevenue  = bwr * base;
    const nursingCost = nursingRate * stay;
    const roomCost    = roomRate * stay;
    const chiefCost   = chiefRate * stay;
    const suppCost    = Number(supplement);
    const total       = drgRevenue + nursingCost + roomCost + chiefCost + suppCost;

    setResult({ drgRevenue, nursingCost, roomCost, chiefCost, suppCost, total, stay });
  };

  // подписи breakdown (переводы берём из i18n)
  const breakdownLabels = {
    Nstat:       t('drgCalculator.breakdown.Nstat'),
    ITA:         t('drgCalculator.breakdown.ITA'),
    Dialyse:     t('drgCalculator.breakdown.Dialyse'),
    OP:          t('drgCalculator.breakdown.OP'),
    Anästh:      t('drgCalculator.breakdown.Anästh'),
    Kreissaal:   t('drgCalculator.breakdown.Kreissaal'),
    KardDiag:    t('drgCalculator.breakdown.KardDiag'),
    EndoskDiag:  t('drgCalculator.breakdown.EndoskDiag'),
    Radio:       t('drgCalculator.breakdown.Radio'),
    Labor:       t('drgCalculator.breakdown.Labor'),
    DiagBereich: t('drgCalculator.breakdown.DiagBereich'),
    TherBereich: t('drgCalculator.breakdown.TherBereich'),
    PatAufn:     t('drgCalculator.breakdown.PatAufn'),
  };

  return (
    <div className="p-4 bg-white rounded shadow max-w-md mx-auto">
      {/* Поиск DRG */}
<div className="relative mb-4" ref={ref}>
  <label className="block font-medium">{t('drgCalculator.codeLabel')}</label>
  <input
    className="w-full border p-2"
    placeholder={t('drgCalculator.codePlaceholder')}
    value={query}
    onChange={e => { setQuery(e.target.value); setShowSug(true); }}
    onFocus={() => setShowSug(true)}
  />
  {showSug && query && suggestions.length > 0 && (
    <ul className="absolute bg-white border w-full max-h-60 overflow-y-auto z-20">
      {suggestions.map(e => (
        <li key={e.DRG} className="p-1">
          <button
            className="w-full text-left p-2 hover:bg-gray-100"
            onClick={() => handleSelect(e)}
          >
            <span className="font-bold">{e.DRG}</span>
            {' — '}
            <span>
              {drgTexts[e.DRG]?.[i18n.language]
                || drgTexts[e.DRG]?.en
                || '-'}
            </span>
          </button>
        </li>
      ))}
    </ul>
  )}
</div>

      {/* Описание выбранного DRG */}
      {selected && (
        <p className="mb-4 text-sm text-gray-700 italic">
          {drgTexts[selected.DRG]?.[i18n.language] || drgTexts[selected.DRG]?.en}
        </p>
      )}

      {/* Остальные поля */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className="block font-medium">{t('drgCalculator.baseRateLabel')}</label>
          <input type="number" className="w-full border p-2" value={lbfw} onChange={e=>setLbfw(e.target.value)} />
        </div>
        <div>
          <label className="block font-medium">{t('drgCalculator.stayLabel')}</label>
          <input type="number" className="w-full border p-2" value={days} onChange={e=>setDays(e.target.value)} />
        </div>
        <div>
          <label className="block font-medium">{t('drgCalculator.nursingLabel')}</label>
          <input type="number" className="w-full border p-2" value={nursingRate} onChange={e=>setNursingRate(e.target.value)} />
        </div>
        <div>
          <label className="block font-medium">{t('drgCalculator.roomLabel')}</label>
          <input type="number" className="w-full border p-2" value={roomRate} onChange={e=>setRoomRate(e.target.value)} />
        </div>
        <div>
          <label className="block font-medium">{t('drgCalculator.chiefLabel')}</label>
          <input type="number" className="w-full border p-2" value={chiefRate} onChange={e=>setChiefRate(e.target.value)} />
        </div>
        <div>
          <label className="block font-medium">{t('drgCalculator.supplementLabel')}</label>
          <input type="number" className="w-full border p-2" value={supplement} onChange={e=>setSupplement(e.target.value)} />
        </div>
      </div>

      <button onClick={calculate} className="w-full bg-blue-600 text-white py-2 rounded">
        {t('drgCalculator.calculate')}
      </button>
      {error && <p className="mt-2 text-red-600">{error}</p>}

      {result && (
        <div className="mt-4 space-y-2">
          <h4 className="font-semibold">
            {t('drgCalculator.costForDays', { count: result.stay })}
          </h4>
          <ul className="list-disc list-inside text-sm">
            {/* DRG‐Revenue + детализация breakdown */}
            <li>
              <strong>{t('drgCalculator.drgRevenue')}:</strong> €{result.drgRevenue.toFixed(2)}
              <ul className="list-disc list-inside text-xs text-gray-600 mt-1">
                {Object.entries(selected.breakdown).map(([k,v]) => (
                  <li key={k}>
                    {breakdownLabels[k]}: €{(v * Number(lbfw)).toFixed(2)}
                  </li>
                ))}
              </ul>
            </li>
            <li>{t('drgCalculator.nursing')}: €{result.nursingCost.toFixed(2)}</li>
            <li>{t('drgCalculator.room')}: €{result.roomCost.toFixed(2)}</li>
            <li>{t('drgCalculator.chief')}: €{result.chiefCost.toFixed(2)}</li>
            <li>{t('drgCalculator.supplement')}: €{result.suppCost.toFixed(2)}</li>
          </ul>
          <p className="font-bold mt-2">
            {t('drgCalculator.totalCost')}: €{result.total.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}