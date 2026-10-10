import { useMemo, useState } from 'react';
import { ArrowRight, Search, Sprout, ShieldCheck, Landmark, MapPinned, FileText } from 'lucide-react';
import Header from './Header';
import SchemeCard from './SchemeCard';
import SchemeDetails from './SchemeDetails';
import { schemes } from './schemes';
import { states } from './states';
import { copy } from './translations';
import type { Language, Scheme } from './types';

type BrowseMode = 'state' | 'central';
type Category = 'all' | Scheme['category'];

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [mode, setMode] = useState<BrowseMode>('state');
  const [state, setState] = useState('');
  const [category, setCategory] = useState<Category>('all');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Scheme | null>(null);
  const t = copy[language];
  const isTe = language === 'te';

  const visible = useMemo(() => schemes.filter((scheme) => {
    const inScope = mode === 'central'
      ? scheme.scope === 'central'
      : Boolean(state) && (scheme.scope === 'central' || (scheme.scope === 'state' && scheme.states.includes(state)));
    const inCategory = category === 'all' || scheme.category === category;
    const q = search.trim().toLocaleLowerCase();
    const inSearch = !q || [scheme.name.en, scheme.name.te, scheme.summary.en, scheme.summary.te]
      .some((value) => value.toLocaleLowerCase().includes(q));
    return inScope && inCategory && inSearch;
  }), [mode, state, category, search]);

  const switchMode = (next: BrowseMode) => {
    setMode(next);
    setSearch('');
    setCategory('all');
    setSelected(null);
  };

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: isTe ? 'అన్ని వర్గాలు' : 'All categories' },
    { value: 'agriculture', label: t.catAgriculture },
    { value: 'banking', label: t.catBanking },
    { value: 'business', label: t.catBusiness },
    { value: 'education', label: t.catEducation },
    { value: 'health', label: t.catHealth },
    { value: 'housing', label: t.catHousing },
    { value: 'employment', label: t.catEmployment },
    { value: 'social', label: t.catSocial },
    { value: 'transport', label: t.catTransport },
    { value: 'utilities', label: t.catUtilities },
    { value: 'women', label: t.catWomen },
    { value: 'sports', label: t.catSports },
    { value: 'tourism', label: t.catTourism },
    { value: 'science', label: t.catScience },
    { value: 'justice', label: t.catJustice },
  ];

  return <div className={isTe ? 'app telugu' : 'app'}>
    <Header language={language} onLanguageChange={setLanguage} />
    {selected ? <SchemeDetails scheme={selected} language={language} onBack={() => setSelected(null)} /> : <>
      <main>
        <section className="welcome">
          <div className="welcome-copy">
            <span className="eyebrow"><Sprout size={15} /> SCHEME DIRECTORY · INDIA</span>
            <h1>{isTe ? 'మీకు అందుబాటులో ఉన్న ప్రభుత్వ పథకాలను కనుగొనండి' : 'Find government schemes made for you.'}</h1>
            <p>{isTe ? 'ముందుగా రాష్ట్ర లేదా కేంద్ర ప్రభుత్వ పథకాలను ఎంచుకోండి. అధికారిక వివరాలను దరఖాస్తు ముందు నిర్ధారించండి.' : 'Explore state and central government support in one simple directory. Check official details before applying.'}</p>
            <div className="welcome-note"><ShieldCheck size={17}/>{isTe ? 'అధికారిక వెబ్‌సైట్‌లో అర్హత, గడువులను నిర్ధారించండి' : 'Always verify eligibility and deadlines on the official website.'}</div>
          </div>
          <div className="welcome-art" aria-hidden="true"><div className="art-circle"><Landmark size={68}/></div><div className="art-leaf"><Sprout size={38}/></div><span className="art-caption">Support for every step</span></div>
        </section>

        <section className="catalogue" id="schemes">
          <div className="catalogue-heading">
            <div><span className="eyebrow">{isTe ? 'పథకాల జాబితా' : 'THE SCHEME DIRECTORY'}</span><h2>{isTe ? 'ఎక్కడి నుంచి ప్రారంభించాలి?' : 'Where would you like to start?'}</h2><p>{isTe ? 'మీకు సరిపోయే ప్రభుత్వాన్ని ఎంచుకోండి.' : 'Choose a government level to see the right list.'}</p></div>
          </div>

          <div className="mode-tabs" role="tablist" aria-label="Government level">
            <button type="button" role="tab" aria-selected={mode === 'state'} className={mode === 'state' ? 'mode-tab active' : 'mode-tab'} onClick={() => switchMode('state')}><MapPinned size={20}/><span><strong>{isTe ? 'రాష్ట్ర ప్రభుత్వ పథకాలు' : 'State Government'}</strong><small>{isTe ? 'మీ రాష్ట్రాన్ని ఎంచుకోండి' : 'Choose your state'}</small></span></button>
            <button type="button" role="tab" aria-selected={mode === 'central'} className={mode === 'central' ? 'mode-tab active' : 'mode-tab'} onClick={() => switchMode('central')}><Landmark size={20}/><span><strong>{isTe ? 'కేంద్ర ప్రభుత్వ పథకాలు' : 'Central Government'}</strong><small>{isTe ? 'దేశవ్యాప్తంగా వర్తించే పథకాలు' : 'Schemes from the Union Government'}</small></span></button>
          </div>

          {mode === 'state' && <div className="state-picker">
            <label htmlFor="state-picker">{isTe ? 'మీ రాష్ట్రం లేదా కేంద్రపాలిత ప్రాంతం' : 'Select your state or Union Territory'}</label>
            <select id="state-picker" value={state} onChange={(event) => { setState(event.target.value); setSearch(''); setCategory('all'); }}>
              <option value="">{isTe ? '— రాష్ట్రాన్ని ఎంచుకోండి —' : '— Choose a state —'}</option>
              {states.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
            {!state && <p className="field-hint">{isTe ? 'పథకాలను చూడటానికి ముందుగా రాష్ట్రాన్ని ఎంచుకోండి.' : 'Select a state first. We will not show a mixed list of schemes.'}</p>}
          </div>}

          <div className="filter-row">
            <label className="search-control"><Search size={18}/><input value={search} disabled={mode === 'state' && !state} onChange={(event) => setSearch(event.target.value)} placeholder={isTe ? 'పథకం పేరు లేదా విషయం వెతకండి' : 'Search by scheme name or keyword'} /></label>
            <select aria-label="Filter by category" value={category} disabled={mode === 'state' && !state} onChange={(event) => setCategory(event.target.value as Category)}>{categories.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select>
          </div>

          {mode === 'state' && !state ? <div className="empty-panel"><div className="empty-icon"><MapPinned size={27}/></div><h3>{isTe ? 'మీ రాష్ట్రాన్ని ఎంచుకోండి' : 'Your state schemes start here'}</h3><p>{isTe ? 'పై జాబితా నుంచి మీ రాష్ట్రాన్ని ఎంచుకున్న తర్వాత, ఆ రాష్ట్రానికి సంబంధించిన పథకాలు మాత్రమే కనిపిస్తాయి.' : 'Choose a state above to see only schemes assigned to that state. Or switch to the Central Government tab to browse national schemes.'}</p><button className="official-button" onClick={() => switchMode('central')}>{isTe ? 'కేంద్ర పథకాలను చూడండి' : 'Browse Central Government schemes'} <ArrowRight size={17}/></button></div>
          : visible.length > 0 ? <><div className="results-line"><span>{isTe ? 'కనిపిస్తున్న పథకాలు' : 'Schemes listed'}</span><strong>{visible.length}</strong><span className="results-context">{mode === 'central' ? (isTe ? 'కేంద్ర ప్రభుత్వం' : 'Central Government') : state}</span></div><div className="scheme-grid">{visible.map((scheme) => <SchemeCard key={scheme.id} scheme={scheme} language={language} onOpen={setSelected}/>)}</div></>
          : <div className="empty-panel"><div className="empty-icon"><Search size={27}/></div><h3>{isTe ? 'పథకాలు కనబడలేదు' : 'No schemes found for this selection'}</h3><p>{mode === 'state' ? (isTe ? 'ఈ రాష్ట్రానికి ఇంకా పథకాలు జోడించలేదు. అధికారిక వనరును చూడండి.' : 'There are no state schemes in this catalogue for the selected state yet. Check the official directory for a complete listing.') : (isTe ? 'వేరే పదంతో వెతకండి.' : 'Try another keyword or clear the category filter.')}</p>{mode === 'state' && <a className="official-button" href="https://www.myscheme.gov.in/" target="_blank" rel="noreferrer">{isTe ? 'అధికారిక పథకాల జాబితా' : 'Visit official scheme directory'} <ArrowRight size={17}/></a>}</div>}

          <div className="catalogue-footer"><FileText size={18}/><p>{isTe ? 'ఈ జాబితా సమాచార సహాయార్థం మాత్రమే. అర్హత, పత్రాలు, దరఖాస్తు గడువులు అధికారిక ప్రభుత్వ పోర్టల్‌లో నిర్ధారించండి.' : 'This directory is informational. Confirm current eligibility, documents and application dates with the official government portal.'}</p><a href="https://www.myscheme.gov.in/" target="_blank" rel="noreferrer">{isTe ? 'myScheme అధికారిక పోర్టల్' : 'Official myScheme portal'} <ArrowRight size={15}/></a></div>
        </section>
      </main>
      <footer className="site-footer"><a className="footer-brand" href="#top">SchemePath</a><span>{isTe ? 'ప్రభుత్వ పథకాలను సులభంగా కనుగొనండి' : 'A simpler way to find government support.'}</span><span>© {new Date().getFullYear()} SchemePath</span></footer>
    </>}
  </div>;
}
