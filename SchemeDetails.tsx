import { useState } from 'react';
import { ArrowLeft, ExternalLink, FileCheck2, ListChecks, ShieldAlert, Printer } from 'lucide-react';
import type { Language, Scheme } from './types';
import { copy } from './translations';

export default function SchemeDetails({scheme,language,onBack}:{scheme:Scheme;language:Language;onBack:()=>void}) {
  const t = copy[language];
  const isTe = language === 'te';
  const [checkedDocuments, setCheckedDocuments] = useState<string[]>([]);
  return <section className="details-page">
    <button className="back-button" onClick={onBack}><ArrowLeft size={17}/>{t.back}</button>
    <div className="details-heading"><span className="eyebrow">{scheme.scope==='central'?t.central:`${t.state} · ${scheme.states.join(', ')}`}</span><h1>{scheme.name[language]}</h1><p>{scheme.summary[language]}</p></div>
    <div className={scheme.verificationStatus === 'verified' ? 'notice verified-notice' : 'notice warning'} role="status">
      <ShieldAlert size={20}/><div><strong>{scheme.verificationStatus === 'verified' ? (isTe ? 'మూలం పరిశీలించబడింది' : 'Official details checked') : t.review}</strong>
      <p>{scheme.verificationStatus === 'verified' ? (isTe ? `చివరిగా పరిశీలించిన తేదీ: ${scheme.lastVerified ?? 'తేదీ నమోదు కాలేదు'}` : `Last checked: ${scheme.lastVerified ?? 'date not recorded'}`) : (isTe ? 'ఈ వివరాలు ఇంకా సంపాదకీయ ధృవీకరణలో ఉన్నాయి. ఆధారపడే ముందు అర్హత, పత్రాలు, ప్రయోజనాలు, చివరి తేదీలను అధికారిక శాఖతో నిర్ధారించండి.' : 'This listing is awaiting editorial verification. Confirm current eligibility, documents, benefits, and deadlines with the official department before relying on it.')}</p></div>
    </div>
    <div className="details-grid">
      <section className="detail-panel"><h2><ListChecks size={20}/>{t.eligibility}</h2><ul>{scheme.eligibility[language].map(x=><li key={x}>{x}</li>)}</ul></section>
      <section className="detail-panel checklist-panel">
        <div className="panel-title-row"><h2><FileCheck2 size={20}/>{t.documents}</h2><button type="button" className="print-button" onClick={() => window.print()}><Printer size={15}/>{isTe ? 'ముద్రించండి / PDF' : 'Print / Save PDF'}</button></div>
        <p className="checklist-hint">{isTe ? 'ఇవి సిద్ధం చేసుకునే సూచనలు మాత్రమే. అన్ని పత్రాలు ప్రతి దరఖాస్తుకు తప్పనిసరి కావు; అధికారిక జాబితాను నిర్ధారించండి.' : 'Preparation checklist only. Not every item is mandatory for every applicant; confirm the official list.'}</p>
        <ul className="document-checklist">{scheme.documents[language].map(x=><li key={x}><label><input type="checkbox" checked={checkedDocuments.includes(x)} onChange={e=>setCheckedDocuments(old=>e.target.checked?[...old,x]:old.filter(item=>item!==x))}/><span>{x}</span></label></li>)}</ul>
        <p className="checklist-progress" aria-live="polite">{checkedDocuments.length} / {scheme.documents[language].length} {isTe ? 'పత్రాలు సిద్ధం' : 'items checked'}</p>
      </section>
      <section className="detail-panel wide application-guide"><h2><ListChecks size={20}/>{isTe ? 'దరఖాస్తు విధానం — దశలవారీగా' : 'How to apply — step by step'}</h2>
        <p className="guide-intro">{isTe ? 'పథకం వివరాలను చదివి, అధికారిక మార్గంలోనే దరఖాస్తు చేయండి.' : 'Use these steps as a starting point and follow the latest instructions from the official scheme authority.'}</p>
        <ol className="application-steps">{scheme.steps[language].map((x,i)=><li key={x}><span className="step-number" aria-hidden="true">{i+1}</span><span>{x}</span></li>)}</ol>
        <a className="button button-primary official-link" href={scheme.officialUrl} target="_blank" rel="noreferrer">{t.official}<ExternalLink size={17}/></a>
        <p className="guide-safety">{isTe ? 'వ్యక్తిగత వివరాలు, ఆధార్ నంబర్, బ్యాంకు సమాచారం లేదా OTPలను SchemePathలో నమోదు చేయవద్దు.' : 'Never enter Aadhaar numbers, bank details, or OTPs on SchemePath. Use only the official government channel for applications.'}</p>
      </section>
    </div>
    <p className="source-footnote">{isTe ? 'SchemePath స్వతంత్ర సమాచార మార్గదర్శి మాత్రమే; ఇది ప్రభుత్వ సేవ లేదా తుది అర్హత నిర్ణయం కాదు.' : 'SchemePath is an independent information guide, not a government service or final eligibility decision.'}</p>
  </section>;
}
