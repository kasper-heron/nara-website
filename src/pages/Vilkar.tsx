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
  { id: "avtaleparter", label: "Avtaleparter" },
  { id: "tjenesten", label: "Hva tjenesten er" },
  { id: "konto", label: "Konto og tilgang" },
  { id: "priser", label: "Priser og betaling" },
  { id: "ansvar", label: "Ansvar og ansvarsbegrensning" },
  { id: "data", label: "Dine data" },
  { id: "oppsigelse", label: "Oppsigelse og sletting" },
  { id: "endringer", label: "Endringer i vilkårene" },
  { id: "lovvalg", label: "Lovvalg og tvister" },
  { id: "kontakt", label: "Kontakt oss" },
];

export default function Vilkar() {
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
            Vilkår for bruk
          </p>
          <h1 style={{ fontSize: 36, fontWeight: 800, color: "#0f172a", marginBottom: 12, lineHeight: 1.2 }}>
            Vilkår for bruk av NARA
          </h1>
          <p style={{ fontSize: 16, color: "#64748b", marginBottom: 8, lineHeight: 1.7, maxWidth: 620 }}>
            Disse vilkårene gjelder når du bruker NARA. Vi har forsøkt å skrive dem så klart som mulig —
            ta kontakt hvis noe er uklart.
          </p>
          <p style={{ fontSize: 13, color: "#94a3b8", marginBottom: 56 }}>
            Sist oppdatert:{" "}
            {new Date().toLocaleDateString("no-NO", { day: "numeric", month: "long", year: "numeric" })}
            {" "}· NARA
          </p>

          <Section
            id="avtaleparter"
            title="1. Avtaleparter"
            summary="Avtalen gjelder mellom deg (kunden) og selskapet som drifter NARA."
          >
            <p>
              Disse vilkårene er en avtale mellom <strong>NARA</strong>{" "}
              ("NARA", "vi") og bedriften som registrerer en konto og bruker tjenesten ("kunden", "du").
            </p>
            <p style={{ marginTop: 12 }}>
              Ved å registrere en konto eller bruke tjenesten bekrefter du at du har anledning til å binde
              bedriften din til disse vilkårene.
            </p>
          </Section>

          <Section
            id="tjenesten"
            title="2. Hva tjenesten er"
            summary="NARA er et pre-regnskapssystem som henter, leser og forbereder fakturaer for bokføring. Vi er ikke et regnskapsbyrå."
          >
            <p>
              NARA henter inngående fakturaer fra e-post og tilkoblede regnskapssystemer, ekstraherer
              fakturadata med AI, forslår kontering og MVA-behandling, og kan eksportere godkjente bilag
              til tredjeparts bokføringssystemer (f.eks. Fiken) eller som filformater for andre systemer.
            </p>
            <p style={{ marginTop: 12 }}>
              <strong>NARA er ikke en regnskapsfører eller revisor.</strong> AI-forslagene i tjenesten er
              veiledende — du eller din regnskapsfører er ansvarlig for å kontrollere og godkjenne all
              bokføring før den får regnskapsmessig eller skattemessig virkning.
            </p>
          </Section>

          <Section
            id="konto"
            title="3. Konto og tilgang"
            summary="Du er ansvarlig for å holde innloggingen din sikker, og for at informasjonen du gir oss er korrekt."
          >
            <ul style={{ paddingLeft: 20, margin: "12px 0" }}>
              <li style={{ marginBottom: 8 }}>Du må oppgi korrekt firmainformasjon ved registrering</li>
              <li style={{ marginBottom: 8 }}>Du er ansvarlig for aktivitet som skjer under din konto</li>
              <li style={{ marginBottom: 8 }}>Du må varsle oss umiddelbart ved mistanke om uautorisert tilgang</li>
              <li style={{ marginBottom: 8 }}>Vi kan suspendere kontoer ved mistanke om misbruk, svindel eller brudd på disse vilkårene</li>
            </ul>
          </Section>

          <Section
            id="priser"
            title="4. Priser og betaling"
            summary="Gjeldende priser finner du på naraflow.no/pricing. Vi varsler i god tid før prisendringer."
          >
            <p>
              Prisene som gjelder for din avtale er de som var publisert på{" "}
              <Link to="/pricing" style={{ color: "#2563EB" }}>naraflow.no/pricing</Link>{" "}
              på tidspunktet du registrerte deg, med mindre annet er avtalt skriftlig.
            </p>
            <p style={{ marginTop: 12 }}>
              Ved prisendringer varsler vi eksisterende kunder minst 30 dager i forveien. Endringen
              trer i kraft ved neste fakturaperiode etter varslingsfristen.
            </p>
          </Section>

          <Section
            id="ansvar"
            title="5. Ansvar og ansvarsbegrensning"
            summary="Vi gjør vårt beste for at AI-ekstraksjonen er nøyaktig, men du er ansvarlig for å kontrollere bilag før godkjenning."
          >
            <p>
              NARA leverer tjenesten "som den er". Vi tilstreber høy nøyaktighet i AI-basert
              dataekstraksjon, men kan ikke garantere at den er feilfri. Tjenesten inkluderer
              verifiseringsmekanismer (manuell gjennomgang, sanity-sjekker) nettopp for å fange opp avvik
              — men det endelige ansvaret for riktig bokføring ligger hos kunden eller kundens regnskapsfører.
            </p>
            <p style={{ marginTop: 12 }}>
              I den utstrekning loven tillater det, er NARAs samlede ansvar for direkte skader begrenset til
              det beløpet kunden har betalt for tjenesten i de siste 12 månedene. NARA er ikke ansvarlig for
              indirekte skader, tapt fortjeneste eller følgeskader.
            </p>
          </Section>

          <Section
            id="data"
            title="6. Dine data"
            summary="Du eier dine data. Vår behandling av dem er beskrevet i personvernerklæringen."
          >
            <p>
              Kunden eier alle data som lastes opp til eller behandles av NARA. NARA behandler disse
              dataene som databehandler på kundens vegne, i tråd med{" "}
              <Link to="/personvern" style={{ color: "#2563EB" }}>personvernerklæringen</Link>{" "}
              og gjeldende databehandleravtale.
            </p>
          </Section>

          <Section
            id="oppsigelse"
            title="7. Oppsigelse og sletting"
            summary="Du kan si opp avtalen når som helst. Vi sletter dine data innen 30 dager, med unntak av bokføringspliktig materiale."
          >
            <p>
              Du kan avslutte avtalen når som helst ved å kontakte oss på{" "}
              <a href="mailto:hei@naraflow.no" style={{ color: "#2563EB" }}>hei@naraflow.no</a>.
              Vi kan også avslutte avtalen ved vesentlig brudd på disse vilkårene, med 14 dagers skriftlig varsel
              med mindre bruddet krever umiddelbar handling.
            </p>
            <p style={{ marginTop: 12 }}>
              Ved oppsigelse slettes kontodataene dine innen 30 dager. Bokføringspliktig materiale
              oppbevares i henhold til bokføringsloven § 13 (5 år), uavhengig av oppsigelse.
            </p>
          </Section>

          <Section
            id="endringer"
            title="8. Endringer i vilkårene"
            summary="Vi varsler deg minst 14 dager før vesentlige endringer trer i kraft."
          >
            <p>
              Vi kan oppdatere disse vilkårene når tjenesten utvikler seg eller regelverket krever det.
              Ved vesentlige endringer varsler vi deg på e-post minst 14 dager før endringen trer i kraft.
              Fortsatt bruk av tjenesten etter denne fristen innebærer at du godtar de nye vilkårene.
            </p>
          </Section>

          <Section
            id="lovvalg"
            title="9. Lovvalg og tvister"
            summary="Norsk rett gjelder, og tvister søkes løst i minnelighet før de eventuelt bringes til norske domstoler."
          >
            <p>
              Disse vilkårene er underlagt norsk rett. Tvister knyttet til avtalen søkes først løst gjennom
              forhandlinger. Dersom det ikke fører til en løsning, kan tvisten bringes inn for de norske
              domstolene, med Oslo som rett verneting.
            </p>
          </Section>

          <Section
            id="kontakt"
            title="10. Kontakt oss"
            summary="Spørsmål om disse vilkårene? Ta kontakt på e-post."
          >
            <p>Har du spørsmål om vilkårene, eller ønsker å diskutere en konkret avtale?</p>
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
