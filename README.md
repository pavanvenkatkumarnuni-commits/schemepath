# SchemePath — full source starter

Bilingual (English/Telugu) React + TypeScript + Vite starter with state selection, district selectors for Andhra Pradesh and Telangana, search, category filters, central/state scope filters, scheme detail pages, document sections, application steps, and official links.

## Run locally
Requires Node.js 20+ recommended.
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Build
```bash
npm run build
npm run preview
```
The production website is generated in `dist/`.

## Important data integrity note
The three sample catalogue entries are clearly marked **placeholders** and are not real verified scheme listings. Before public launch, replace them in `src/data/schemes.ts` with real schemes and verify current geographic scope, eligibility, required documents, application steps, and URLs against official government sources. Only mark a scheme verified after checking all those fields; record the actual review date. Do not claim eligibility from state/district alone.

Starting points for verification:
- National scheme portal: https://www.myscheme.gov.in/
- Telangana Agriculture Department: https://agri.telangana.gov.in/
- Andhra Pradesh agriculture portal: https://apagrisnet.gov.in/

## Free hosting
Build with `npm run build`, then deploy `dist/` to a static host such as GitHub Pages or Vercel's free tier. Check current provider terms before launch.

## Privacy
No login or backend is required for this starter. Do not collect Aadhaar numbers, bank details, OTPs, or copies of sensitive documents.
