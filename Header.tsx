import {Languages} from 'lucide-react';
import type {Language} from './types';
import {copy} from './translations';

function SchemePathMark(){return <svg className="brand-symbol" viewBox="0 0 44 44" aria-hidden="true">
  <defs><linearGradient id="spCore" x1="7" y1="4" x2="37" y2="40" gradientUnits="userSpaceOnUse"><stop stopColor="#75F2D0"/><stop offset=".48" stopColor="#42B9D5"/><stop offset="1" stopColor="#8B7BFF"/></linearGradient></defs>
  <path d="M31.8 9.4C28.9 6.6 25.3 5 21 5 12.5 5 7 10.1 7 16.3c0 5.9 4.3 8.6 12.2 10.2l5.3 1.1c4.5.9 6.6 2.2 6.6 4.8 0 3.1-3.4 5.2-8.5 5.2-4.4 0-8.4-1.8-11.7-5.2" fill="none" stroke="url(#spCore)" strokeWidth="7.5" strokeLinecap="round"/>
  <path d="M12.2 11.4 7.5 6.7M32 32.4l4.7 4.7" stroke="#f7fffe" strokeWidth="2.2" strokeLinecap="round" opacity=".92"/>
  <circle cx="33.8" cy="10.2" r="4.1" fill="#FFBE62"/><circle cx="10.2" cy="34" r="3.2" fill="#6BE2B3"/>
</svg>}
export default function Header({language,onLanguageChange,largeText,onToggleText}:{language:Language;onLanguageChange:(v:Language)=>void;largeText:boolean;onToggleText:()=>void}){const t=copy[language];return <header className="site-header"><a className="brand" href="#home" aria-label="SchemePath home"><span className="brand-mark"><SchemePathMark/></span><span><strong>Scheme<span className="brand-path">Path</span></strong><small>GOVERNMENT SUPPORT, MADE CLEAR</small></span></a><nav className="desktop-nav"><a href="#schemes">{t.navExplore}</a><a href="#how-it-works">{t.navHow}</a><a href="#about">{t.navAbout}</a></nav><div className="header-actions"><button type="button" className="text-size-toggle" onClick={onToggleText} aria-pressed={largeText} aria-label={language==='en'?'Toggle larger text':'పెద్ద అక్షరాలను మార్చండి'}>{largeText ? 'A−' : 'A+'}</button><Languages size={17}/><button className="language-toggle" onClick={()=>onLanguageChange(language==='en'?'te':'en')}>{language==='en'?'తెలుగు':'English'}</button></div></header>}
