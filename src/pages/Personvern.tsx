import { Link } from "react-router-dom";

const Section = ({
  id,
  title,
  summary,
  children,
}: {
  id: string;
  title: string;
  summary: string;
  children: React.ReactNode;
}) => (
  <div id={id} style={{ marginBottom: 56 }}>
    <h2 style={{ fontSize: 20, fontWeight: 700, color: "#0f172a", marginBottom: 6 }}>{title}</h2>
    <div
      style={{
        background: "#f0f9ff",
        border: "1px solid #bae6fd",
        borderRadius: 10,
        padding: "12px 16px",
        marginBottom: 20,
        fontSize: 14,
        color: "#0369a1",
        lineHeight: 1.6,
      }}
    >
      <strong>Kort sagt:</strong> {summary}
    </div>
    <div style={{ fontSize: 15, color: "#475569", lineHeight: 1.8 }}>{children}</div>
  </div>
);

const toc = [
  { id: "hvem", label: "Hvem vi er" },
  { id: "hva", label: "Hva vi samler inn" },
  { id: "hvorfor", label: "Hvorfor vi behandler dataene" },
  { id: "gmail", label: "Gmail og Outlook" },
  { id: "ai", label: "Vår bruk av AI" },
  { id: "deling", label: "Hvem vi deler med" },
  { id: "lagring", label: "Hvor lenge vi lagrer" },
  { id: "sikkerhet", label: "Sikkerhet" },
  { id: "rettigheter", label: "Dine rettigheter" },
  { id: "cookies", label: "Cookies" },
  { id: "endringer", label: "Endringer" },
  { id: "kontakt", label: "Kontakt oss" },
];

export default function Personvern() {
  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh" }}>
      {/* Nav */}
      <header
        style={{
          background: "#fff",
          borderBottom: "1px solid #e2e8f0",
          padding: "16px 24px",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link to="/" style={{ fontWeight: 800, fontSize: 18, color: "#0f172a", textDecoration: "none" }}>
            NARA
          </Link>
          <a href="mailto:hei@naraflow.no" style={{ fontSize: 14, color: "#2563EB", textDecoration: "none" }}>
            hei@naraflow.no
          </a>
        </div>
      </header>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px 100px", display: "grid", gridTemplateColumns: "1fr 240px", gap: 64, alignItems: "start" }}>
        {/* Content */}
        <div>
          <p style={{ fontSize: 13, color: "#94a3b8", marginBottom: 12, fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Personvernerklæring
          </p>
          <h1 style={{ fontSize: 36, fontWeight: 800, color: "#0f172a", marginBottom: 12, lineHeight: 1.2 }}>
            Vi tar personvern på alvor
          </h1>
          <p style={{ fontSize: 16, color: "#64748b", marginBottom: 8, lineHeight: 1.7, maxWidth: 620 }}>
            NARA håndterer regnskapsdata og e-post på vegne av bedriftene våre. Det er et ansvar vi ikke tar lett på.
            Denne siden forklarer hva vi samler inn, hvorfor, og hvilke rettigheter du har — uten juridisk sjargong der det ikke trengs.
          </p>
          <p style={{ fontSize: 13, color: "#94a3b8", marginBottom: 56 }}>
            Sist oppdatert:{" "}
            {new Date().toLocaleDateString("no-NO", { day: "numeric", month: "long", year: "numeric" })}
            {" "}· NARA
          </p>

          <Section
            id="hvem"
            title="1. Hvem vi er"
            summary="Selskapet bak NARA er ansvarlig for personopplysningene vi behandler. Når du bruker tjenesten behandler vi data på vegne av deg som bedrift."
          >
            <p>
              NARA er under oppstart, og selskapet som vil drifte tjenesten er ikke formelt registrert som
              aksjeselskap ennå. Denne siden oppdateres med fullt organisasjonsnummer og selskapsnavn så snart
              registreringen er gjennomført. Frem til da er behandlingsansvarlig den fysiske personen som drifter NARA.
            </p>
            <p style={{ marginTop: 12 }}>
              Vi behandler opplysninger knyttet til brukerkontoer, innlogging og kontaktinformasjon.
              Når du laster opp eller kobler til fakturaer og e-post, behandler vi disse dataene som databehandler på vegne av deg — du bestemmer formålet.
            </p>
            <p style={{ marginTop: 12 }}>
              Vi inngår en databehandleravtale (DPA) med alle kunder. Ta kontakt på{" "}
              <a href="mailto:hei@naraflow.no" style={{ color: "#2563EB" }}>hei@naraflow.no</a> hvis du ønsker å gjennomgå den.
            </p>
          </Section>

          <Section
            id="hva"
            title="2. Hva vi samler inn"
            summary="Vi samler inn det vi trenger for å levere tjenesten — ikke mer. Vi selger aldri data til tredjeparter."
          >
            <p style={{ marginBottom: 16 }}>Vi behandler følgende kategorier av opplysninger:</p>

            {[
              {
                title: "Kontoopplysninger",
                desc: "Firmanavn, e-postadresse, organisasjonsnummer og passord. Passord lagres aldri i klartekst — kun som kryptert hash via Supabase Auth.",
              },
              {
                title: "Fakturaer og bilag",
                desc: "Innhold fra inngående fakturaer: leverandørnavn, beløp, MVA, datoer, kontonummer og vedlagte filer (PDF, bilder). Dette er kjernen i tjenesten.",
              },
              {
                title: "E-posttilgang",
                desc: "Når du kobler Gmail eller Outlook leser NARA innkommende e-post for å identifisere fakturaer. Vi leser kun e-poster med relevante vedlegg — aldri personlig korrespondanse.",
              },
              {
                title: "Bruksdata",
                desc: "Innloggingstidspunkt, IP-adresse og brukerhandlinger i appen. Brukes utelukkende for sikkerhet og feilsøking.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  borderLeft: "3px solid #2563EB",
                  paddingLeft: 16,
                  marginBottom: 20,
                }}
              >
                <p style={{ fontWeight: 600, color: "#0f172a", marginBottom: 4 }}>{item.title}</p>
                <p style={{ margin: 0 }}>{item.desc}</p>
              </div>
            ))}

            <p style={{ marginTop: 8, fontWeight: 600, color: "#0f172a" }}>
              Vi samler ikke inn sensitive personopplysninger (helse, politikk, religion e.l.).
            </p>
          </Section>

          <Section
            id="hvorfor"
            title="3. Hvorfor vi behandler dataene"
            summary="Vi har et klart rettslig grunnlag for all behandling — enten for å levere tjenesten, oppfylle lovpålagte krav, eller beskytte deg mot misbruk."
          >
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #e2e8f0" }}>
                  <th style={{ textAlign: "left", padding: "8px 16px 8px 0", color: "#64748b", fontWeight: 600 }}>Formål</th>
                  <th style={{ textAlign: "left", padding: "8px 0", color: "#64748b", fontWeight: 600 }}>Rettslig grunnlag</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Levere NARA-tjenesten (fakturahåndtering, AI-ekstraksjon, eksport)", "Kontraktsoppfyllelse — GDPR art. 6.1.b"],
                  ["Bokføring og MVA-rapportering", "Rettslig forpliktelse — GDPR art. 6.1.c (bokføringsloven § 13, mval.)"],
                  ["Sikkerhetslogging og feildeteksjon", "Berettiget interesse — GDPR art. 6.1.f"],
                  ["Utsending av transaksjonelle e-poster (velkomst, varsler)", "Kontraktsoppfyllelse — GDPR art. 6.1.b"],
                  ["Produktforbedring basert på anonymisert bruksstatistikk", "Berettiget interesse — GDPR art. 6.1.f"],
                ].map(([purpose, basis]) => (
                  <tr key={purpose} style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <td style={{ padding: "12px 16px 12px 0", color: "#0f172a" }}>{purpose}</td>
                    <td style={{ padding: "12px 0", color: "#475569", fontSize: 13 }}>{basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>

          <Section
            id="gmail"
            title="4. Gmail og Outlook — slik bruker vi e-posttilgangen"
            summary="Vi leser kun e-poster for å finne fakturaer. Ikke personlige meldinger. Du kan koble fra når som helst."
          >
            <p>
              Når du kobler Gmail eller Outlook til NARA, bruker vi tilgangen utelukkende til å:
            </p>
            <ul style={{ paddingLeft: 20, margin: "12px 0" }}>
              <li style={{ marginBottom: 8 }}>Identifisere e-poster som inneholder fakturaer, kvitteringer eller regnskapsdokumenter</li>
              <li style={{ marginBottom: 8 }}>Trekke ut strukturert data (beløp, leverandør, dato, MVA) fra disse dokumentene</li>
              <li style={{ marginBottom: 8 }}>Lagre det strukturerte resultatet i din NARA-konto</li>
            </ul>
            <p>
              Vi leser <strong>ikke</strong> personlig e-postkorrespondanse. Vi bruker <strong>ikke</strong> e-postinnhold til å trene AI-modeller.
              Vi selger <strong>ikke</strong> e-postdata til tredjeparter — noen gang.
            </p>
            <p style={{ marginTop: 16 }}>
              NARAs bruk av Google API-er følger{" "}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2563EB" }}
              >
                Googles retningslinjer for brukerdata (Limited Use Policy)
              </a>
              . Vi ber kun om tilgang vi faktisk trenger.
            </p>
            <p style={{ marginTop: 16 }}>
              Du kan koble fra Gmail eller Outlook når som helst under <strong>Innstillinger → E-posttilkobling</strong> i NARA-appen.
            </p>
          </Section>

          <Section
            id="ai"
            title="5. Vår bruk av AI"
            summary="Vi bruker GPT-4o til å lese og strukturere fakturainnhold. Dataene dine brukes aldri til å trene AI-modeller."
          >
            <p>
              NARA bruker OpenAI (GPT-4o) for å ekstrahere strukturert informasjon fra fakturaer — som leverandørnavn,
              beløp, MVA og forfallsdato. Dette er kjernen i det NARA gjør automatisk for deg.
            </p>
            <p style={{ marginTop: 12 }}>
              Vi har inngått databehandleravtale med OpenAI som eksplisitt forbyr bruk av kundenes data til å trene eller forbedre
              OpenAIs modeller. Fakturainnholdet ditt brukes kun til å produsere svaret i den aktuelle forespørselen.
            </p>
            <p style={{ marginTop: 12 }}>
              AI-forslagene i NARA (kategori, konto, MVA-sats) er anbefalinger — du godkjenner eller avviser dem.
              Ingen automatiske beslutninger med rettslig virkning tas uten menneskelig kontroll.
            </p>
          </Section>

          <Section
            id="deling"
            title="6. Hvem vi deler data med"
            summary="Vi deler kun med underleverandørene som er nødvendige for å drive tjenesten, under bindende databehandleravtaler."
          >
            <p style={{ marginBottom: 16 }}>Vi selger aldri personopplysninger. Vi deler kun med:</p>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #e2e8f0" }}>
                  <th style={{ textAlign: "left", padding: "8px 16px 8px 0", color: "#64748b", fontWeight: 600 }}>Leverandør</th>
                  <th style={{ textAlign: "left", padding: "8px 16px 8px 0", color: "#64748b", fontWeight: 600 }}>Formål</th>
                  <th style={{ textAlign: "left", padding: "8px 0", color: "#64748b", fontWeight: 600 }}>Land</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Supabase", "Database, autentisering og fillagring", "EU"],
                  ["OpenAI", "AI-ekstraksjon av fakturainnhold", "USA †"],
                  ["Postmark", "Transaksjons-e-post (velkomst, varsler)", "USA †"],
                  ["Vercel", "Hosting av nettside og app", "EU/USA †"],
                  ["Render", "Hosting av API", "EU/USA †"],
                  ["Fiken / Tripletex", "Eksport av bokføringsposter (kun ved aktivert integrasjon)", "Norge"],
                ].map(([name, purpose, country]) => (
                  <tr key={name} style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <td style={{ padding: "12px 16px 12px 0", color: "#0f172a", fontWeight: 500 }}>{name}</td>
                    <td style={{ padding: "12px 16px 12px 0", color: "#475569" }}>{purpose}</td>
                    <td style={{ padding: "12px 0", color: "#475569" }}>{country}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginTop: 12, fontSize: 13, color: "#94a3b8" }}>
              † Overføringer til USA skjer under EU-US Data Privacy Framework eller EUs standardkontraktklausuler (SCC).
            </p>
          </Section>

          <Section
            id="lagring"
            title="7. Hvor lenge lagrer vi dataene?"
            summary="Vi lagrer det vi trenger, så lenge vi trenger det — og sletter resten."
          >
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #e2e8f0" }}>
                  <th style={{ textAlign: "left", padding: "8px 16px 8px 0", color: "#64748b", fontWeight: 600 }}>Type data</th>
                  <th style={{ textAlign: "left", padding: "8px 0", color: "#64748b", fontWeight: 600 }}>Lagringstid</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Kontoopplysninger", "Så lenge du er aktiv kunde, deretter 30 dager"],
                  ["Fakturaer og bilag", "5 år etter regnskapsår (bokføringsloven § 13)"],
                  ["E-posttokens (Gmail/Outlook)", "Til du kobler fra eller sletter konto"],
                  ["Sikkerhetslogger (audit log)", "2 år"],
                  ["Bruksdata og feillogger", "12 måneder"],
                ].map(([type, duration]) => (
                  <tr key={type} style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <td style={{ padding: "12px 16px 12px 0", color: "#0f172a" }}>{type}</td>
                    <td style={{ padding: "12px 0", color: "#475569" }}>{duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginTop: 16 }}>
              Vil du slette kontoen din? Send en e-post til{" "}
              <a href="mailto:hei@naraflow.no" style={{ color: "#2563EB" }}>hei@naraflow.no</a>.
              Vi sletter alt innen 30 dager, med unntak av bokføringspliktig materiale.
            </p>
          </Section>

          <Section
            id="sikkerhet"
            title="8. Sikkerhet"
            summary="Vi bruker kryptering, tilgangskontroll og logging for å beskytte dataene dine."
          >
            <p style={{ marginBottom: 16 }}>Noen konkrete tiltak vi har på plass:</p>
            <ul style={{ paddingLeft: 20 }}>
              {[
                "All kommunikasjon er kryptert med TLS 1.2+",
                "OAuth-tokens krypteres med AES-256 i databasen",
                "Row Level Security (RLS) sikrer at hver bedrift kun ser sine egne data",
                "Alle handlinger logges i en uforanderlig audit log",
                "Brute-force-beskyttelse: kontoen låses etter 5 mislykkede innloggingsforsøk per 15 minutter",
                "Ved sikkerhetsbrudd varsler vi Datatilsynet innen 72 timer (GDPR art. 33) og berørte brukere uten unødig forsinkelse",
              ].map((item) => (
                <li key={item} style={{ marginBottom: 8 }}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section
            id="rettigheter"
            title="9. Dine rettigheter"
            summary="Du har full kontroll over egne data. Vi svarer på alle henvendelser innen 30 dager."
          >
            <p style={{ marginBottom: 16 }}>Som registrert hos NARA har du rett til å:</p>
            {[
              ["Innsyn (art. 15)", "Be om en kopi av alle opplysninger vi har om deg og bedriften din."],
              ["Retting (art. 16)", "Korrigere feil eller mangelfulle opplysninger — mye av dette kan du gjøre selv under Innstillinger i appen."],
              ["Sletting (art. 17)", "Be om sletting av kontoen og alle tilknyttede data. Merk at bokføringspliktig materiale må oppbevares i 5 år."],
              ["Dataportabilitet (art. 20)", "Eksportere alle fakturaer og regnskapsdata i maskinlesbart format (JSON/CSV)."],
              ["Innsigelse (art. 21)", "Protestere mot behandling basert på berettiget interesse — vi vurderer da om interessen overstiger dine."],
              ["Klage", "Sende klage til Datatilsynet (datatilsynet.no) hvis du mener vi bryter GDPR."],
            ].map(([right, desc]) => (
              <div key={right} style={{ borderLeft: "3px solid #e2e8f0", paddingLeft: 16, marginBottom: 20 }}>
                <p style={{ fontWeight: 600, color: "#0f172a", marginBottom: 4 }}>{right}</p>
                <p style={{ margin: 0 }}>{desc}</p>
              </div>
            ))}
            <p>
              Send alle henvendelser til{" "}
              <a href="mailto:hei@naraflow.no" style={{ color: "#2563EB" }}>hei@naraflow.no</a>.
              Vi svarer innen 30 dager.
            </p>
          </Section>

          <Section
            id="cookies"
            title="10. Cookies"
            summary="Vi bruker kun nødvendige cookies for innlogging. Ingen sporing, ingen reklame."
          >
            <p>
              NARA bruker én type informasjonskapsel: en autentiseringscookie som holder deg innlogget i appen.
              Denne er nødvendig for at tjenesten skal fungere og krever ikke samtykke.
            </p>
            <p style={{ marginTop: 12 }}>
              Vi bruker ikke tredjeparts sporings- eller reklamecookies. Vi deler ikke atferdsdata
              med annonseplattformer.
            </p>
          </Section>

          <Section
            id="endringer"
            title="11. Endringer i denne erklæringen"
            summary="Vi varsler deg på e-post minst 14 dager før vesentlige endringer trer i kraft."
          >
            <p>
              Vi oppdaterer denne erklæringen når tjenesten endrer seg eller regelverket krever det.
              Ved vesentlige endringer sender vi deg e-post med beskrivelse av hva som endres og hvorfor —
              minst 14 dager før endringen trer i kraft.
            </p>
            <p style={{ marginTop: 12 }}>
              Gjeldende versjon er alltid tilgjengelig på{" "}
              <a href="https://naraflow.no/personvern" style={{ color: "#2563EB" }}>naraflow.no/personvern</a>.
            </p>
          </Section>

          <Section
            id="kontakt"
            title="12. Kontakt oss"
            summary="Vi er tilgjengelige på e-post og svarer raskt."
          >
            <p>Har du spørsmål om personvern, ønsker å utøve dine rettigheter, eller vil gjennomgå databehandleravtalen?</p>
            <div
              style={{
                marginTop: 20,
                padding: "24px",
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: 12,
              }}
            >
              <p style={{ margin: "0 0 4px", fontWeight: 700, color: "#0f172a" }}>NARA</p>
              <a href="mailto:hei@naraflow.no" style={{ color: "#2563EB", fontSize: 14 }}>hei@naraflow.no</a>
            </div>
          </Section>
        </div>

        {/* Sidebar TOC */}
        <aside style={{ position: "sticky", top: 80 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: "#94a3b8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>
            Innhold
          </p>
          <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                style={{
                  fontSize: 13,
                  color: "#64748b",
                  textDecoration: "none",
                  padding: "6px 10px",
                  borderRadius: 6,
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "#f1f5f9")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "transparent")}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>
      </main>
    </div>
  );
}
