import type { Scheme } from './types';

// These are clearly labelled development placeholders, not verified scheme records.
// Replace them only after official review.
export const schemes: Scheme[] = [
  {
    id: 'central-placeholder',
    name: { en: 'Central agriculture support — placeholder', te: 'కేంద్ర వ్యవసాయ సహాయం — నమూనా' },
    scope: 'central',
    states: [],
    summary: { en: 'Development placeholder, not a real scheme listing. Replace before launch.', te: 'అభివృద్ధి నమూనా మాత్రమే; నిజమైన పథకం కాదు. విడుదలకు ముందు మార్చాలి.' },
    eligibility: { en: ['Current eligibility has not been verified.'], te: ['ప్రస్తుత అర్హత ధృవీకరించబడలేదు.'] },
    documents: { en: ['Document requirements have not been verified.'], te: ['పత్రాల అవసరాలు ధృవీకరించబడలేదు.'] },
    steps: {
      en: ['Visit the national portal and find the current official scheme information.', 'Confirm application steps with the responsible department.'],
      te: ['జాతీయ పోర్టల్‌లో అధికారిక పథక సమాచారాన్ని చూడండి.', 'దరఖాస్తు విధానాన్ని సంబంధిత శాఖతో నిర్ధారించండి.']
    },
    officialUrl: 'https://www.myscheme.gov.in/',
    verificationStatus: 'needs-review',
    lastVerified: null,
    category: 'general'
  },
  {
    id: 'ap-placeholder',
    name: { en: 'Andhra Pradesh agriculture schemes — placeholder', te: 'ఆంధ్రప్రదేశ్ వ్యవసాయ పథకాలు — నమూనా' },
    scope: 'state',
    states: ['Andhra Pradesh'],
    summary: { en: 'Placeholder for a future verified state programme. Not a named scheme or eligibility proof.', te: 'భవిష్యత్తులో ధృవీకరించే రాష్ట్ర కార్యక్రమానికి నమూనా. నిజమైన పథకం లేదా అర్హత రుజువు కాదు.' },
    eligibility: { en: ['Specific eligibility conditions are not verified.'], te: ['నిర్దిష్ట అర్హత షరతులు ధృవీకరించబడలేదు.'] },
    documents: { en: ['Official document checklist has not been verified.'], te: ['అధికారిక పత్రాల జాబితా ధృవీకరించబడలేదు.'] },
    steps: {
      en: ['Visit the Andhra Pradesh agriculture department website.', 'Confirm current programme details and application procedure.'],
      te: ['ఆంధ్రప్రదేశ్ వ్యవసాయ శాఖ వెబ్‌సైట్‌ను సందర్శించండి.', 'ప్రస్తుత వివరాలు, దరఖాస్తు విధానాన్ని నిర్ధారించండి.']
    },
    officialUrl: 'https://apagrisnet.gov.in/',
    verificationStatus: 'needs-review',
    lastVerified: null,
    category: 'general'
  },
  {
    id: 'ts-placeholder',
    name: { en: 'Telangana agriculture schemes — placeholder', te: 'తెలంగాణ వ్యవసాయ పథకాలు — నమూనా' },
    scope: 'state',
    states: ['Telangana'],
    summary: { en: 'Placeholder for a future verified state programme. Not a named scheme or eligibility proof.', te: 'భవిష్యత్తులో ధృవీకరించే రాష్ట్ర కార్యక్రమానికి నమూనా. నిజమైన పథకం లేదా అర్హత రుజువు కాదు.' },
    eligibility: { en: ['Specific eligibility conditions are not verified.'], te: ['నిర్దిష్ట అర్హత షరతులు ధృవీకరించబడలేదు.'] },
    documents: { en: ['Official document checklist has not been verified.'], te: ['అధికారిక పత్రాల జాబితా ధృవీకరించబడలేదు.'] },
    steps: {
      en: ['Visit the Telangana agriculture department website.', 'Confirm current scheme details with the responsible department.'],
      te: ['తెలంగాణ వ్యవసాయ శాఖ వెబ్‌సైట్‌ను సందర్శించండి.', 'ప్రస్తుత పథకం వివరాలను సంబంధిత శాఖతో నిర్ధారించండి.']
    },
    officialUrl: 'https://agri.telangana.gov.in/',
    verificationStatus: 'needs-review',
    lastVerified: null,
    category: 'general'
  }
];
