const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", marginBottom: 12 }}>{title}</h2>
    <div style={{ fontSize: 15, color: "#475569", lineHeight: 1.75 }}>{children}</div>
  </div>
);

export default function Personvern() {
  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh" }}>
      {/* Nav */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "16px 24px" }}>
        <a href="https://naraflow.no" style={{ fontWeight: 800, fontSize: 18, color: "#0f172a", textDecoration: "none" }}>
          NARA
        </a>
      </header>

      <main style={{ maxWidth: 720, margin: "0 auto", padding: "60px 24px 80px" }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, color: "#0f172a", marginBottom: 8 }}>Personvernerklæring</h1>
        <p style={{ fontSize: 14, color: "#94a3b8", marginBottom: 48 }}>
          Sist oppdatert: {new Date().toLocaleDateString("no-NO", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <Section title="1. Behandlingsansvarlig">
          <p>
            NARA AS er behandlingsansvarlig for personopplysningene som behandles i NARA-tjenesten.
            Kontakt oss på <a href="mailto:hei@naraflow.no" style={{ color: "#2563EB" }}>hei@naraflow.no</a> ved spørsmål om personvern.
          </p>
        </Section>

        <Section title="2. Hvilke opplysninger vi samler inn">
          <p className="mb-3">Vi samler inn følgende kategorier av opplysninger:</p>
          <ul style={{ paddingLeft: 20, marginTop: 8 }}>
            <li style={{ marginBottom: 8 }}><strong>Kontoopplysninger:</strong> Navn på bedrift, e-postadresse, organisasjonsnummer og passord (kryptert via Supabase Auth).</li>
            <li style={{ marginBottom: 8 }}><strong>Fakturaer og bilag:</strong> Innhold fra inngående fakturaer, inkludert leverandørnavn, beløp, MVA, datoer og vedlagte PDF-filer.</li>
            <li style={{ marginBottom: 8 }}><strong>E-posttilgang (Gmail/Outlook):</strong> Når du kobler til Gmail eller Outlook, leser NARA e-poster som inneholder fakturaer og kvitteringer. Vi leser kun e-poster med vedlegg som identifiseres som regnskapsdokumenter — ikke personlig korrespondanse.</li>
            <li style={{ marginBottom: 8 }}><strong>Bruksdata:</strong> Innloggingstidspunkt, IP-adresse og brukerhandlinger for sikkerhetsformål (audit log).</li>
          </ul>
        </Section>

        <Section title="3. Hvorfor vi behandler opplysningene">
          <ul style={{ paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}><strong>Kontraktsoppfyllelse (GDPR art. 6.1.b):</strong> For å levere NARA-tjenesten — automatisk fakturahåndtering, kategorisering og eksport til regnskapssystem.</li>
            <li style={{ marginBottom: 8 }}><strong>Rettslig forpliktelse (art. 6.1.c):</strong> Bokføring og MVA-rapportering etter norsk bokføringslov og merverdiavgiftsloven.</li>
            <li style={{ marginBottom: 8 }}><strong>Berettiget interesse (art. 6.1.f):</strong> Sikkerhetslogging for å beskytte tjenesten og kundene mot misbruk.</li>
          </ul>
        </Section>

        <Section title="4. Gmail- og Outlook-tilgang">
          <p className="mb-3">
            Når du kobler Gmail eller Outlook til NARA, gir du oss tilgang til å lese e-post i innboksen din.
            Vi bruker denne tilgangen utelukkende til å:
          </p>
          <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
            <li style={{ marginBottom: 8 }}>Identifisere e-poster som inneholder fakturaer, kvitteringer eller andre regnskapsdokumenter</li>
            <li style={{ marginBottom: 8 }}>Trekke ut strukturert data (beløp, leverandør, dato, MVA) fra disse dokumentene via AI</li>
            <li style={{ marginBottom: 8 }}>Lagre det strukturerte resultatet i din NARA-konto</li>
          </ul>
          <p>
            Vi leser <strong>ikke</strong> personlig korrespondanse, og vi selger eller deler aldri e-postinnhold med tredjeparter.
            Du kan koble fra e-posttilgangen når som helst under Innstillinger i NARA-appen.
          </p>
          <p style={{ marginTop: 12 }}>
            NARAs bruk av Google API-er er i samsvar med{" "}
            <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" style={{ color: "#2563EB" }}>
              Googles retningslinjer for bruk av brukerdata
            </a>
            , inkludert kravene til begrenset bruk.
          </p>
        </Section>

        <Section title="5. Hvem vi deler opplysninger med">
          <p className="mb-3">Vi deler opplysninger med følgende underleverandører (databehandlere):</p>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #e2e8f0" }}>
                <th style={{ textAlign: "left", padding: "8px 12px 8px 0", color: "#64748b", fontWeight: 600 }}>Leverandør</th>
                <th style={{ textAlign: "left", padding: "8px 12px 8px 0", color: "#64748b", fontWeight: 600 }}>Formål</th>
                <th style={{ textAlign: "left", padding: "8px 0", color: "#64748b", fontWeight: 600 }}>Land</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Supabase", "Database og autentisering", "EU"],
                ["OpenAI", "AI-ekstraksjon av fakturainnhold", "USA*"],
                ["Postmark", "Utsending av e-post", "USA*"],
                ["Vercel", "Hosting av nettside og app", "EU/USA"],
                ["Render", "Hosting av API", "EU/USA"],
                ["Fiken / Tripletex", "Eksport av bokføringsposter (valgfritt)", "Norge"],
              ].map(([name, purpose, country]) => (
                <tr key={name} style={{ borderBottom: "1px solid #f1f5f9" }}>
                  <td style={{ padding: "10px 12px 10px 0", color: "#0f172a", fontWeight: 500 }}>{name}</td>
                  <td style={{ padding: "10px 12px 10px 0", color: "#475569" }}>{purpose}</td>
                  <td style={{ padding: "10px 0", color: "#475569" }}>{country}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ marginTop: 12, fontSize: 13, color: "#94a3b8" }}>
            * USA-baserte leverandører er underlagt EU-US Data Privacy Framework.
          </p>
        </Section>

        <Section title="6. Lagring og sletting">
          <ul style={{ paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}>Kontoopplysninger og fakturaer lagres så lenge du er kunde hos NARA.</li>
            <li style={{ marginBottom: 8 }}>Ved oppsigelse slettes alle personopplysninger innen 30 dager, med unntak av bokføringsdata som etter bokføringsloven § 13 skal oppbevares i 5 år.</li>
            <li style={{ marginBottom: 8 }}>Sikkerhetslogger (audit log) oppbevares i 2 år.</li>
          </ul>
        </Section>

        <Section title="7. Dine rettigheter">
          <p className="mb-3">Du har følgende rettigheter etter GDPR:</p>
          <ul style={{ paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}><strong>Innsyn (art. 15):</strong> Du kan be om en kopi av alle opplysninger vi har om deg.</li>
            <li style={{ marginBottom: 8 }}><strong>Retting (art. 16):</strong> Du kan korrigere feilaktige opplysninger under Innstillinger i appen.</li>
            <li style={{ marginBottom: 8 }}><strong>Sletting (art. 17):</strong> Du kan be om sletting av kontoen din ved å sende e-post til hei@naraflow.no.</li>
            <li style={{ marginBottom: 8 }}><strong>Dataportabilitet (art. 20):</strong> Du kan eksportere alle dine data i maskinlesbart format.</li>
            <li style={{ marginBottom: 8 }}><strong>Klage:</strong> Du kan klage til <a href="https://www.datatilsynet.no" target="_blank" rel="noopener noreferrer" style={{ color: "#2563EB" }}>Datatilsynet</a> hvis du mener vi behandler opplysningene dine i strid med GDPR.</li>
          </ul>
        </Section>

        <Section title="8. Informasjonskapsler (cookies)">
          <p>
            NARA bruker kun nødvendige informasjonskapsler for autentisering (innloggingssesjon).
            Vi bruker ikke sporings- eller markedsføringskapsler.
          </p>
        </Section>

        <Section title="9. Endringer i denne erklæringen">
          <p>
            Ved vesentlige endringer varsler vi deg på e-post minst 14 dager i forkant.
            Gjeldende versjon er alltid tilgjengelig på naraflow.no/personvern.
          </p>
        </Section>

        <div style={{ marginTop: 48, padding: "24px", background: "#f1f5f9", borderRadius: 12 }}>
          <p style={{ fontSize: 14, color: "#475569", margin: 0 }}>
            <strong style={{ color: "#0f172a" }}>Kontakt oss:</strong>{" "}
            <a href="mailto:hei@naraflow.no" style={{ color: "#2563EB" }}>hei@naraflow.no</a>
            {" "}· NARA AS · naraflow.no
          </p>
        </div>
      </main>
    </div>
  );
}
