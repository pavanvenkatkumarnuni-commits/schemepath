import {Languages} from 'lucide-react';
import type {Language} from './types';
import {copy} from './translations';

function SchemePathMark(){return <svg className="brand-symbol" viewBox="0 0 48 48" role="img" aria-label="SchemePath symbol">
  <defs><linearGradient id="spRoad" x1="5" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse"><stop stopColor="#ffb72b"/><stop offset=".43" stopColor="#18c7b2"/><stop offset="1" stopColor="#3154bd"/></linearGradient><linearGradient id="spDome" x1="16" y1="2" x2="30" y2="17" gradientUnits="userSpaceOnUse"><stop stopColor="#55f0d1"/><stop offset="1" stopColor="#087b88"/></linearGradient></defs>
  <path d="M8 13C8 7.8 12.1 4 18 4h7c5.8 0 8.5 3.2 8.5 7.2 0 4.6-4.2 6.8-10.5 6.8H17c-4.5 0-7 2-7 5.2 0 3.5 3.1 5.5 8 5.5h8.5c6.3 0 10.5 2.7 10.5 7.2S33 43 27.5 43H14" fill="none" stroke="url(#spRoad)" strokeWidth="7" strokeLinecap="round"/>
  <path d="M12 23.5c6.4-3.7 13.5-3.8 20.5-1.1" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="2.7 3.2"/>
  <path d="M17 13V9.5c0-4 3.1-6.8 6.8-6.8s6.8 2.8 6.8 6.8V13" fill="url(#spDome)" stroke="#0d5c76" strokeWidth="1.2"/>
  <path d="M15.2 13h17.2M18.5 13v4.5m5.3-4.5v4.5m5.3-4.5v4.5M14.7 18h18.1" fill="none" stroke="#f7fffe" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M23.8 2.5V.8" stroke="#0b536e" strokeWidth="1.5" strokeLinecap="round"/><path d="M24 1.2h5.8l-1.8 2-4-0.2" fill="#ff9f32"/>
  <path d="M30 36c3.5-5.2 7.6-5.9 10.2-5.7-.4 4.6-3.5 9.2-9.5 10.2" fill="#29b875"/><path d="M30.8 39.8l5.6-6.2" stroke="#e7fff5" strokeWidth="1.1" strokeLinecap="round"/>
</svg>}
export default function Header({language,onLanguageChange,largeText,onToggleText}:{language:Language;onLanguageChange:(v:Language)=>void;largeText:boolean;onToggleText:()=>void}){const t=copy[language];return <header className="site-header"><a className="brand" href="#home" aria-label="SchemePath home"><span className="brand-mark"><SchemePathMark/></span><span><strong>Scheme<span className="brand-path">Path</span></strong><small>GOVERNMENT SUPPORT, MADE CLEAR</small></span></a><nav className="desktop-nav"><a href="#schemes">{t.navExplore}</a><a href="#how-it-works">{t.navHow}</a><a href="#about">{t.navAbout}</a></nav><div className="header-actions"><button type="button" className="text-size-toggle" onClick={onToggleText} aria-pressed={largeText} aria-label={language==='en'?'Toggle larger text':'పెద్ద అక్షరాలను మార్చండి'}>{largeText ? 'A−' : 'A+'}</button><Languages size={17}/><button className="language-toggle" onClick={()=>onLanguageChange(language==='en'?'te':'en')}>{language==='en'?'తెలుగు':'English'}</button></div></header>}
