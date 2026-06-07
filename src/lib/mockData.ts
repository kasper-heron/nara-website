export const mockInvoices = [
  { invoice_date: "2025-01-15", supplier_customer: "Telenor AS", invoice_no: "INV-2025-001", category: "Telekommunikasjon", amount: 4850, vat_amount: 970, due_date: "2025-02-14", status: "processed", pdf_link: "#" },
  { invoice_date: "2025-01-22", supplier_customer: "Statoil Fuel & Retail", invoice_no: "4521", category: "Drivstoff", amount: 12400, vat_amount: 2480, due_date: "2025-02-21", status: "processed", pdf_link: "#" },
  { invoice_date: "2025-02-03", supplier_customer: "Bring AS", invoice_no: "BRG-8821", category: "Frakt", amount: 3200, vat_amount: 640, due_date: "2025-03-03", status: "needs_review", pdf_link: null },
  { invoice_date: "2025-02-18", supplier_customer: "Shell Norge AS", invoice_no: "SH-9920", category: "Drivstoff", amount: 8750, vat_amount: 1750, due_date: "2025-03-20", status: "processed", pdf_link: "#" },
  { invoice_date: "2025-03-01", supplier_customer: "Microsoft AS", invoice_no: "MS-2025-03", category: "Programvare", amount: 2100, vat_amount: 420, due_date: "2025-03-31", status: "processed", pdf_link: null },
  { invoice_date: "2025-03-15", supplier_customer: "Gjensidige Forsikring", invoice_no: "GF-44210", category: "Forsikring", amount: 6200, vat_amount: 0, due_date: "2025-04-15", status: "processed", pdf_link: "#" },
  { invoice_date: "2025-04-01", supplier_customer: "Telenor AS", invoice_no: "INV-2025-045", category: "Telekommunikasjon", amount: 4850, vat_amount: 970, due_date: "2025-05-01", status: "processed", pdf_link: "#" },
  { invoice_date: "2025-04-12", supplier_customer: "Circle K Norge", invoice_no: "CK-7781", category: "Drivstoff", amount: 9300, vat_amount: 1860, due_date: "2025-05-12", status: "needs_review", pdf_link: null },
  { invoice_date: "2025-05-05", supplier_customer: "Posten Norge AS", invoice_no: "PN-2025-112", category: "Frakt", amount: 1800, vat_amount: 360, due_date: "2025-06-05", status: "processed", pdf_link: "#" },
  { invoice_date: "2025-05-20", supplier_customer: "Visma AS", invoice_no: "VIS-8832", category: "Programvare", amount: 3450, vat_amount: 690, due_date: "2025-06-20", status: "processed", pdf_link: "#" },
];

export const mockUser = {
  customer_id: "BERG001",
  company_name: "Berg Transport AS",
  email: "post@bergtransport.no",
  name: "Erik Berg",
  token: "mock-jwt-token",
};

export const mockSummary = {
  total_paid: 56900,
  needs_review: 2,
  this_month: 5250,
  unique_suppliers: 8,
  monthly_spend: [
    { month: "Jan", amount: 17250 },
    { month: "Feb", amount: 11950 },
    { month: "Mar", amount: 8300 },
    { month: "Apr", amount: 14150 },
    { month: "Mai", amount: 5250 },
    { month: "Jun", amount: 0 },
    { month: "Jul", amount: 0 },
    { month: "Aug", amount: 0 },
    { month: "Sep", amount: 0 },
    { month: "Okt", amount: 0 },
    { month: "Nov", amount: 0 },
    { month: "Des", amount: 0 },
  ],
  category_spend: [
    { category: "Drivstoff", amount: 30450 },
    { category: "Telekommunikasjon", amount: 9700 },
    { category: "Forsikring", amount: 6200 },
    { category: "Programvare", amount: 5550 },
    { category: "Frakt", amount: 5000 },
  ],
};

export const starterMessages = [
  "Vis alle fakturaer fra 2025",
  "Hva har vi betalt til Telenor?",
  "Hvilke fakturaer mangler informasjon?",
  "Oppsummer kostnadene per kategori",
];

export const mockAIResponses: Record<string, string> = {
  "Vis alle fakturaer fra 2025": `Her er en oversikt over fakturaene dine for 2025:

**Totalt:** 56 900 NOK (10 fakturaer)

| Leverandør | Beløp | Status |
|---|---|---|
| Statoil | 12 400 kr | ✅ Behandlet |
| Circle K Norge | 9 300 kr | ⚠️ Trenger gjennomgang |
| Shell Norge | 8 750 kr | ✅ Behandlet |
| Gjensidige | 6 200 kr | ✅ Behandlet |
| Telenor (x2) | 9 700 kr | ✅ Behandlet |
| Visma | 3 450 kr | ✅ Behandlet |
| Bring AS | 3 200 kr | ⚠️ Trenger gjennomgang |
| Microsoft | 2 100 kr | ✅ Behandlet |
| Posten | 1 800 kr | ✅ Behandlet |

Vil du se mer detaljer om noen av disse?`,
  "Hva har vi betalt til Telenor?": `Dere har to fakturaer fra **Telenor AS** i 2025:

1. **INV-2025-001** – 4 850 kr (15. jan 2025) ✅ Behandlet
2. **INV-2025-045** – 4 850 kr (1. apr 2025) ✅ Behandlet

**Totalt betalt til Telenor: 9 700 kr**

Begge er kategorisert som *Telekommunikasjon*.`,
  "Hvilke fakturaer mangler informasjon?": `Det er **2 fakturaer** som trenger gjennomgang:

1. **Bring AS** (BRG-8821) – 3 200 kr
   - Mangler: PDF-vedlegg
   - Dato: 3. feb 2025

2. **Circle K Norge** (CK-7781) – 9 300 kr
   - Mangler: Kategori-verifisering
   - Dato: 12. apr 2025

Skal jeg sende en påminnelse til leverandørene?`,
  "Oppsummer kostnadene per kategori": `Her er en oppsummering av kostnader per kategori for 2025:

| Kategori | Beløp | Andel |
|---|---|---|
| 🚗 Drivstoff | 30 450 kr | 53,5% |
| 📱 Telekommunikasjon | 9 700 kr | 17,0% |
| 🛡️ Forsikring | 6 200 kr | 10,9% |
| 💻 Programvare | 5 550 kr | 9,8% |
| 📦 Frakt | 5 000 kr | 8,8% |

**Total: 56 900 kr**

Drivstoff er den klart største kostnadsposten. Vil du se en mer detaljert oversikt?`,
};
