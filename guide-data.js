const GUIDE_DATA = [
  {
    id: "migration",
    statement: "Die sind die Einzigen, die das Migrationsproblem ernst nehmen",
    shortLabel: "Migration",
    icon: "🔒",
    hook: "Du willst Politiker, die das Migrationsproblem wirklich lösen. Nicht nur darüber reden.",
    promise: "Die AfD verspricht Massenabschiebungen, geschlossene Grenzen, hartes Durchgreifen. Kein anderer traut sich das, sagen sie.",
    patternSummary: "Die AfD stimmt für Härte, aber gegen Ordnung. Verschärfung ja, Lösung nein.",
    evidence: [
      {
        vote: "Chancen-Aufenthaltsrecht",
        year: 2022,
        description: "Bleiberecht für integrierte Geduldete mit Arbeit und Sprachkenntnissen.",
        afd: "Alle 66 dagegen.",
        others: "SPD, Grüne, FDP dafür (371 Ja).",
        url: "https://www.abgeordnetenwatch.de/bundestag/20/abstimmungen/chancen-aufenthaltsrecht"
      },
      {
        vote: "Rückführungsverbesserungsgesetz",
        year: 2024,
        description: "Erleichterte Abschiebungen mit mehr Befugnissen für Behörden.",
        afd: "Dagegen gestimmt.",
        others: "SPD, Grüne, FDP dafür.",
        url: "https://www.bundestag.de/dokumente/textarchiv/2024/kw03-de-rueckfuehrung-986284"
      },
      {
        vote: "Sicherheitspaket nach Solingen",
        year: 2024,
        description: "Schärfere Asylregeln und erweiterte Messerverbotszonen.",
        afd: "Dagegen gestimmt.",
        others: "SPD, Grüne, FDP dafür (357 Ja).",
        url: "https://www.bundestag.de/dokumente/textarchiv/2024/kw42-de-drittstaatenangehoerige-1023860"
      },
      {
        vote: "Zustrombegrenzungsgesetz",
        year: 2025,
        description: "Begrenzung der Migration durch strengere Aufenthaltsregeln. Hier hat die AfD dafür gestimmt.",
        afd: "Dafür gestimmt (zusammen mit CDU/CSU).",
        others: "SPD, Grüne dagegen. Historischer Bruch der Brandmauer.",
        url: "https://www.bundestag.de/dokumente/textarchiv/2025/kw05-de-zustrombegrenzung-1030892"
      }
    ],
    counterArgument: {
      text: "Wir haben beim Zustrombegrenzungsgesetz dafür gestimmt. Das zeigt: Wir stimmen zu, wenn ein Gesetz wirklich etwas bringt. Die Ampel-Gesetze waren Symbolpolitik.",
      source: "AfD-Fraktion, Stellungnahme Zustrombegrenzungsgesetz, Februar 2025",
      url: "https://afdbundestag.de/gottfried-curio-geplantes-chancen-aufenthaltsrecht-belohnt-illegale-migration/"
    },
    rebuttal: "Stimmt. Beim Zustrombegrenzungsgesetz hat die AfD dafür gestimmt. Reine Verschärfung, das können sie. Aber gegen Integration, Rückführung und Sicherheitspaket gleichzeitig. Verschärfung ohne Ordnung erzeugt mehr Geduldete mit weniger Rechten. Also genau das Chaos, über das die AfD dann klagt.",
    consequence: "Wer nur zumacht, aber keine Wege schafft, bekommt nicht weniger Menschen. Sondern mehr Menschen ohne Status. Die dann bleiben, ohne Arbeitserlaubnis.",
    sources: [
      {
        text: "Abgeordnetenwatch: Namentliche Abstimmung Chancen-Aufenthaltsrecht, 02.12.2022",
        url: "https://www.abgeordnetenwatch.de/bundestag/20/abstimmungen/chancen-aufenthaltsrecht"
      },
      {
        text: "Bundestag: Rückführungsverbesserungsgesetz, 18.01.2024",
        url: "https://www.bundestag.de/dokumente/textarchiv/2024/kw03-de-rueckfuehrung-986284"
      },
      {
        text: "Bundestag: Sicherheitspaket nach Solingen, 18.10.2024",
        url: "https://www.bundestag.de/dokumente/textarchiv/2024/kw42-de-drittstaatenangehoerige-1023860"
      },
      {
        text: "Bundestag: Zustrombegrenzungsgesetz, 29.01.2025",
        url: "https://www.bundestag.de/dokumente/textarchiv/2025/kw05-de-zustrombegrenzung-1030892"
      }
    ],
    pattern: "Sie stimmen für das, was hart aussieht. Gegen das, was Ordnung schafft.",
    question: "Wusstest du, dass die AfD beim Zustrombegrenzungsgesetz dafür gestimmt hat, aber gegen Rückführung und Integration? Was sagt das über ihren Plan?"
  },
  {
    id: "establishment",
    statement: "Die stehen für den kleinen Mann und gegen die Eliten",
    shortLabel: "Eliten",
    icon: "💶",
    hook: "Du willst mehr Geld am Ende des Monats. Das ist kein politisches Statement, das ist Alltag.",
    promise: "Die AfD sagt: Wir kämpfen für die kleinen Leute. Gegen die da oben. Für dich.",
    patternSummary: "Die AfD stimmt gegen Mindestlohn und Bürgergeld, will aber die Erbschaftsteuer abschaffen.",
    evidence: [
      {
        vote: "Mindestlohnerhöhung auf 12 Euro",
        year: 2022,
        description: "Anhebung des Mindestlohns von 9,82 auf 12 Euro pro Stunde.",
        afd: "Alle 75 dagegen.",
        others: "SPD, Grüne, FDP dafür (399 Ja).",
        url: "https://www.abgeordnetenwatch.de/bundestag/20/abstimmungen/anhebung-des-mindestlohns-fuer-minijobs"
      },
      {
        vote: "Bürgergeld",
        year: 2022,
        description: "Ersetzte Hartz IV durch höhere Regelsätze und weniger Sanktionen.",
        afd: "Geschlossen dagegen.",
        others: "SPD, Grüne, FDP dafür (385 Ja).",
        url: "https://www.abgeordnetenwatch.de/bundestag/20/abstimmungen/einfuehrung-des-buergergeldes"
      },
      {
        vote: "Abschaffung der Erbschaftsteuer (AfD-Antrag)",
        year: 2026,
        description: "Komplette Streichung der Erbschaft- und Schenkungsteuer.",
        afd: "Eigener Antrag, einzige Befürworter.",
        others: "SPD, CDU/CSU, Grüne, FDP, Linke alle dagegen.",
        url: "https://www.bundestag.de/dokumente/textarchiv/2026/kw05-de-erbschaftsteuer-1137006"
      }
    ],
    counterArgument: {
      text: "Die Mindestlohnkommission soll über den Mindestlohn entscheiden, nicht der Koalitionsvertrag. Die Erbschaftsteuer bedroht Familienbesitz durch gestiegene Immobilienpreise.",
      source: "AfD-Fraktion, Bundestag 2022",
      url: "https://afdbundestag.de/juergen-pohl-der-kompromiss-beim-mindestlohn-ist-weder-fisch-noch-fleisch/"
    },
    rebuttal: "90% der Erbschaften liegen unter dem Freibetrag und zahlen nichts. Laut ZEW-Studie spart ein Ehepaar mit 40.000 Euro durch AfD-Steuerpläne nichts. Mit 180.000 Euro: 19.190 Euro.",
    consequence: "Laut ZEW spart, wer wenig verdient, nichts. Je reicher, desto mehr Entlastung. Das ist kein Plan für den kleinen Mann.",
    sources: [
      {
        text: "Abgeordnetenwatch: Namentliche Abstimmung Mindestlohn auf 12 Euro, 2022",
        url: "https://www.abgeordnetenwatch.de/bundestag/20/abstimmungen/anhebung-des-mindestlohns-fuer-minijobs"
      },
      {
        text: "AfD Grundsatzprogramm: Kapitel Steuern und Finanzen",
        url: "https://www.afd.de/grundsatzprogramm/"
      },
      {
        text: "ZEW: Verteilungswirkungen der Steuerpläne zur Bundestagswahl 2025",
        url: "https://www.zew.de/en/press/latest-press-releases/who-would-benefit-from-the-parties-relief-plans"
      }
    ],
    pattern: "Die Entlastung fließt nach oben. Immer.",
    question: "Wie viel würdest du persönlich sparen, wenn die AfD-Steuerpläne kommen? Hast du dir das mal ausgerechnet?"
  },
  {
    id: "energy",
    statement: "Die Energiepolitik der anderen Parteien ist gescheitert",
    shortLabel: "Energie",
    icon: "⚡",
    hook: "Du ärgerst dich über hohe Strompreise. Zurecht. Das ist ein echtes Problem.",
    promise: "Die AfD sagt: Zurück zu Kohle und Kernkraft. Dann wird Strom wieder billig.",
    patternSummary: "Die AfD stimmt gegen Solar und Wind, obwohl beides billiger ist als Kohle und Atom.",
    evidence: [
      {
        vote: "EEG-Novelle",
        year: 2022,
        description: "Beschleunigte den Ausbau erneuerbarer Energien.",
        afd: "Geschlossen dagegen.",
        others: "SPD, Grüne, FDP dafür.",
        url: "https://www.abgeordnetenwatch.de/bundestag/19/abstimmungen/erneuerbare-energien-gesetz-eeg"
      },
      {
        vote: "Solarpaket I",
        year: 2024,
        description: "Vereinfachte Balkonkraftwerke und beschleunigte Solarausbau.",
        afd: "Geschlossen dagegen.",
        others: "SPD, Grüne, FDP dafür (384 Ja).",
        url: "https://www.bundestag.de/parlament/plenum/abstimmung/abstimmung?id=914"
      },
      {
        vote: "Klimaschutzfolgenbereinigungsgesetz (AfD-Entwurf)",
        year: 2025,
        description: "23 Klimagesetze aufheben, Austritt aus Pariser Abkommen.",
        afd: "Eigener Entwurf (131 Ja).",
        others: "443 dagegen. Alle anderen Fraktionen geschlossen.",
        url: "https://www.bundestag.de/dokumente/textarchiv/2025/kw46-de-klimaschutzfolgen-1123122"
      }
    ],
    counterArgument: {
      text: "Erneuerbare haben trotz Subventionen keine Wettbewerbsfähigkeit erreicht. Die Energiewende ist gescheitert. Deutschland braucht Grundlastkraftwerke für sichere Versorgung.",
      source: "AfD-Fraktion, Arbeitskreis Klimaschutz und Energie",
      url: "https://afdbundestag.de/arbeitskreise/klimaschutzundenergie/"
    },
    rebuttal: "Fraunhofer ISE: Solar kostet 4 bis 5 Cent pro kWh, Kohle 11 bis 15, neue AKW 10 bis 18. Die AfD will die teurere Option.",
    consequence: "Ihr Plan bedeutet teureren Strom. Du würdest mehr zahlen, nicht weniger.",
    sources: [
      {
        text: "Fraunhofer ISE: Stromgestehungskosten erneuerbare Energien, 2024",
        url: "https://www.ise.fraunhofer.de/de/veroeffentlichungen/studien/studie-stromgestehungskosten-erneuerbare-energien.html"
      },
      {
        text: "Bundestag: Solarpaket I, 26.04.2024",
        url: "https://www.bundestag.de/parlament/plenum/abstimmung/abstimmung?id=914"
      },
      {
        text: "Bundestag: Klimaschutzfolgenbereinigungsgesetz, 13.11.2025",
        url: "https://www.bundestag.de/dokumente/textarchiv/2025/kw46-de-klimaschutzfolgen-1123122"
      }
    ],
    pattern: "Sie versprechen günstige Energie und kämpfen für die teurere Option.",
    question: "Was ist dir bei Energie wichtiger: dass der Strom billig ist, oder dass er aus einer bestimmten Quelle kommt?"
  },
  {
    id: "corruption",
    statement: "Die anderen Parteien sind alle gleich korrupt",
    shortLabel: "Korruption",
    icon: "🏛️",
    hook: "Du hast die Nase voll von korrupten Politikern. Wer hat das nicht.",
    promise: "Die AfD sagt: Null Toleranz bei Korruption. Wir räumen auf.",
    patternSummary: "Die AfD stimmt gegen jedes Transparenzgesetz und kassiert gleichzeitig Auslandsgeld.",
    evidence: [
      {
        vote: "Lobbyregister-Verschärfung",
        year: 2023,
        description: "Strengere Regeln für Lobbyisten im Bundestag.",
        afd: "Dagegen gestimmt.",
        others: "SPD, Grüne, FDP dafür.",
        url: "https://www.bundestag.de/dokumente/textarchiv/2023/kw42-de-lobbyregister-971428"
      },
      {
        vote: "Hinweisgeberschutzgesetz (Whistleblower-Schutz)",
        year: 2023,
        description: "Schützte Whistleblower in Unternehmen und Behörden vor Repressalien.",
        afd: "Geschlossen dagegen.",
        others: "SPD, Grüne, FDP dafür.",
        url: "https://www.bundestag.de/dokumente/textarchiv/2023/kw11-de-hinweisgeber-937542"
      },
      {
        vote: "Strafbarkeit unzulässiger Interessenvertretung",
        year: 2024,
        description: "Verschärfte Strafbarkeit von Abgeordnetenbestechung.",
        afd: "Dagegen gestimmt.",
        others: "Koalitionsfraktionen dafür.",
        url: "https://www.bundestag.de/dokumente/textarchiv/2024/kw17-de-lobbyismus-999782"
      }
    ],
    counterArgument: {
      text: "Die Koalitionsvorschläge gehen nicht weit genug. Die AfD hat einen eigenen Entwurf mit legislativem Fußabdruck eingebracht, der alle Lobbykontakte dokumentiert.",
      source: "AfD-Fraktion, Lobbyregister-Debatte 2023",
      url: "https://www.bundestag.de/presse/hib/kurzmeldungen-972716"
    },
    rebuttal: "Eigener Entwurf ohne Mehrheit. Gleichzeitig gegen jede Verschärfung gestimmt, die durchkommt. Dazu: Weidel (396.000 Euro Strafe), Bystron (russisches Geld), Krah-Mitarbeiter (China-Spion).",
    consequence: "Die AfD stimmt gegen Transparenzgesetze und kassiert gleichzeitig Geld aus dem Ausland.",
    sources: [
      {
        text: "Abgeordnetenwatch: Geld aus Russland, die Affäre um Petr Bystron",
        url: "https://www.abgeordnetenwatch.de/recherchen/informationsfreiheit/geld-aus-russland-die-affaere-um-petr-bystron"
      },
      {
        text: "Bundestag: Parteienfinanzierung, Strafzahlung Weidel-Spende (396.000 Euro)",
        url: "https://www.bundestag.de/parlament/praesidium/parteienfinanzierung"
      },
      {
        text: "ZDF: Krah-Mitarbeiter wegen Spionage für China verurteilt",
        url: "https://www.zdf.de/nachrichten/politik/ausland/krah-mitarbeiter-spionage-china-urteil-100.html"
      },
      {
        text: "Bundestag: Hinweisgeberschutzgesetz, 11.05.2023",
        url: "https://www.bundestag.de/dokumente/textarchiv/2023/kw11-de-hinweisgeber-937542"
      }
    ],
    pattern: "Gegen Transparenz stimmen und gleichzeitig Auslandsgeld kassieren.",
    question: "Wie wichtig ist es dir, dass Politiker offenlegen, wer ihnen Geld gibt? Gilt das für alle Parteien gleich?"
  },
  {
    id: "security",
    statement: "Wir brauchen mehr Sicherheit und härtere Strafen",
    shortLabel: "Sicherheit",
    icon: "🛡️",
    hook: "Du willst dich sicher fühlen. In deiner Stadt, in deiner Nachbarschaft. Das ist dein Recht.",
    promise: "Die AfD sagt: Mehr Polizei, härtere Strafen, konsequent abschieben.",
    patternSummary: "Die AfD stimmt gegen jedes Sicherheitsgesetz und nennt alles zu wenig.",
    evidence: [
      {
        vote: "Sicherheitspaket nach Solingen",
        year: 2024,
        description: "Erweiterte Befugnisse bei Waffenverboten und biometrischer Überwachung.",
        afd: "Dagegen gestimmt. Nannte es eine Luftnummer.",
        others: "SPD, Grüne, FDP dafür (357 Ja).",
        url: "https://www.bundestag.de/dokumente/textarchiv/2024/kw42-de-drittstaatenangehoerige-1023860"
      },
      {
        vote: "Rückführungsverbesserungsgesetz",
        year: 2024,
        description: "Längere Abschiebehaft und erweiterte Befugnisse für Behörden.",
        afd: "Dagegen. Bernd Baumann: nur winzige Mikro-Änderungen.",
        others: "SPD, Grüne, FDP dafür.",
        url: "https://www.bundestag.de/dokumente/textarchiv/2024/kw03-de-rueckfuehrung-986284"
      },
      {
        vote: "Bundespolizeigesetz-Modernisierung",
        year: 2025,
        description: "Erweiterte Befugnisse der Bundespolizei bei Überwachung und Abschiebehaft.",
        afd: "Enthaltung. Kritisierte zu strenge Voraussetzungen.",
        others: "Koalition dafür.",
        url: "https://www.bundestag.de/dokumente/textarchiv/2025/kw51-de-bundespolizei-1129174"
      }
    ],
    counterArgument: {
      text: "Alles Luftnummern. Die Maßnahmen sind völlig unzureichend. Deutschland braucht komplette Grenzsicherung mit sofortiger Zurückweisung aller illegalen Migranten.",
      source: "Martin Hess, innenpolitischer Sprecher AfD-Fraktion",
      url: "https://afdbundestag.de/martin-hess-sicherheitspaket-der-ampel-entpuppt-sich-als-luftnummer/"
    },
    rebuttal: "Jede Verbesserung ablehnen und nur Maximalforderungen stellen ergibt null umgesetzte Maßnahmen. Eigene Anträge haben nie eine Mehrheit, weil die AfD keine Kompromisse eingeht.",
    consequence: "Die Zahlen sind echt. Die Frage ist, ob du eine Partei willst, die anpackt, oder eine, die nur wiederholt.",
    sources: [
      {
        text: "BKA: Polizeiliche Kriminalstatistik 2024, Tatverdächtige nach Nationalität",
        url: "https://www.bka.de/DE/AktuelleInformationen/StatistikenLagebilder/PolizeilicheKriminalstatistik/PKS2024/PKSTabellen/BundTVNationalitaet/bundTVNationalitaet.html"
      },
      {
        text: "Bundestag: Sicherheitspaket nach Solingen, 18.10.2024",
        url: "https://www.bundestag.de/dokumente/textarchiv/2024/kw42-de-drittstaatenangehoerige-1023860"
      },
      {
        text: "Bundestag: Rückführungsverbesserungsgesetz, 18.01.2024",
        url: "https://www.bundestag.de/dokumente/textarchiv/2024/kw03-de-rueckfuehrung-986284"
      }
    ],
    pattern: "Angst mobilisiert Stimmen. Ursachen bekämpfen löst das Problem.",
    question: "Fühlst du dich unsicherer als früher? Mich interessiert, ob das bei dir an bestimmten Sachen liegt."
  },
  {
    id: "patriotism",
    statement: "Man wird ja als Patriot sofort in die rechte Ecke gestellt",
    shortLabel: "Patriotismus",
    icon: "🇩🇪",
    hook: "Du willst stolz auf dein Land sein. Ohne dass jemand dich gleich Nazi nennt. Kann man verstehen.",
    promise: "Die AfD sagt: Wir sind die echten Patrioten. Alle anderen schämen sich für Deutschland.",
    patternSummary: "Teile der Linken haben ein Patriotismus-Problem. Die AfD hat ein Extremismus-Problem. Beides ist real.",
    evidence: [
      {
        vote: "Höcke: SA-Parole (BGH-Urteil)",
        year: 2025,
        description: "BGH bestätigte die Verurteilung wegen Verwendung einer SA-Parole.",
        afd: "Höcke bleibt Landesvorsitzender Thüringen.",
        others: "Rechtskräftig, keine Revision möglich (3 StR 484/24).",
        url: "https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2025/2025168.html"
      },
      {
        vote: "Verfassungsschutz: Gesamtpartei gesichert rechtsextrem",
        year: 2025,
        description: "BfV stufte die gesamte AfD als gesichert rechtsextremistische Bestrebung ein.",
        afd: "Klagt dagegen (VG Köln).",
        others: "Einstufung basiert auf über 1.000 Seiten Gutachten.",
        url: "https://www.verfassungsschutz.de/DE/themen/rechtsextremismus/rechtsextremismus_node.html"
      },
      {
        vote: "Correctiv: Geheimtreffen Potsdam (Remigration)",
        year: 2024,
        description: "AfD-Politiker trafen sich mit Rechtsextremen. Thema: Remigration auch für deutsche Staatsbürger.",
        afd: "Distanzierte sich teilweise. Nutzt Remigration seitdem in Wahlwerbung.",
        others: "Millionen-Demonstrationen in über 70 Städten.",
        url: "https://correctiv.org/aktuelles/neue-rechte/2024/01/10/geheimplan-remigration-vertreibung-afd-rechtsextreme-november-treffen/"
      }
    ],
    counterArgument: {
      text: "Die anderen Parteien hassen Deutschland. Robert Habeck schrieb 2010: 'Vaterlandsliebe fand ich stets zum Kotzen.' Claudia Roth stand neben einem Banner 'Deutschland, du mieses Stück Scheiße.' Die Linke lehnt nationale Symbole ab. Wir sind die Einzigen, die stolz auf ihr Land sind.",
      source: "AfD-Bundesvorstand, diverse Stellungnahmen. Habeck-Zitat aus seinem Buch 'Patriotismus: Ein Plädoyer' (2010), in dem er anschließend beschreibt, wie er gelernt hat, Patriotismus positiv zu sehen.",
      url: "https://correctiv.org/aktuelles/neue-rechte/2026/01/10/zwei-jahre-nach-der-potsdam-recherche-von-angeblichen-deportationsluegen-bis-zum-moeglichen-afd-verbotsverfahren/"
    },
    rebuttal: "Die Habeck- und Roth-Zitate sind real. Teile der deutschen Linken haben ein echtes Problem mit Patriotismus. Das stimmt. Aber die Frage ist nicht: Habeck oder Höcke. Die Frage ist: Welche Art von Stolz willst du? Stolz auf Deutschland und SA-Parolen schließen sich aus. Man kann sein Land lieben, ohne den Holocaust als Vogelschiss zu bezeichnen. 1.000 Seiten Verfassungsschutz-Gutachten sind keine Kampagne.",
    consequence: "Du willst stolz auf Deutschland sein. Das ist fair. Aber bist du stolz auf ein Deutschland, in dem ein Parteiführer für SA-Parolen verurteilt wird? Oder auf ein Deutschland, das aus seiner Geschichte gelernt hat?",
    sources: [
      {
        text: "BGH Pressemitteilung 168/2025: Höcke-Verurteilung wegen SA-Parole rechtskräftig",
        url: "https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2025/2025168.html"
      },
      {
        text: "Bundesamt für Verfassungsschutz: Rechtsextremismus",
        url: "https://www.verfassungsschutz.de/DE/themen/rechtsextremismus/rechtsextremismus_node.html"
      },
      {
        text: "Correctiv: Geheimplan Remigration, Recherche vom 10.01.2024",
        url: "https://correctiv.org/aktuelles/neue-rechte/2024/01/10/geheimplan-remigration-vertreibung-afd-rechtsextreme-november-treffen/"
      }
    ],
    pattern: "Stolz auf Deutschland und Extremismus sind nicht dasselbe. Die AfD vermischt beides.",
    question: "Du willst eine Partei, die stolz auf Deutschland ist. Aber auf welches Deutschland? Eins mit SA-Parolen? Oder eins, das aus seiner Geschichte gelernt hat?"
  },
  {
    id: "eu",
    statement: "Die EU bestimmt zu viel über Deutschland",
    shortLabel: "EU",
    icon: "🌍",
    hook: "Du ärgerst dich über EU-Bürokratie. Zu viele Regeln, zu wenig Mitsprache. Geht vielen so.",
    promise: "Die AfD will den Dexit. Oder zumindest eine radikale EU-Reform. Zurück zur nationalen Souveränität.",
    patternSummary: "Die AfD stimmt gegen EU-Freihandel, EU-Kooperation und EU-Mindestlohn gleichzeitig.",
    evidence: [
      {
        vote: "NextGenerationEU (Corona-Wiederaufbaufonds)",
        year: 2021,
        description: "EU-Wiederaufbaufonds über 750 Milliarden Euro nach Corona.",
        afd: "Geschlossen dagegen.",
        others: "CDU/CSU, SPD, Grüne, FDP dafür (478 Ja).",
        url: "https://www.bundestag.de/dokumente/textarchiv/2021/kw12-de-eu-eigenmittel-826488"
      },
      {
        vote: "CETA (Freihandel EU-Kanada)",
        year: 2022,
        description: "Ratifizierung des Freihandelsabkommens mit Kanada.",
        afd: "Geschlossen dagegen.",
        others: "SPD, Grüne, FDP, CDU/CSU dafür.",
        url: "https://www.bundestag.de/dokumente/textarchiv/2022/kw48-de-ceta-923086"
      },
      {
        vote: "EU-Mindestlohnrichtlinie",
        year: 2024,
        description: "EU-Richtlinie für angemessene Mindestlöhne in allen Mitgliedstaaten.",
        afd: "Hielt die Richtlinie für rechtswidrig.",
        others: "Im EU-Parlament mit breiter Mehrheit angenommen.",
        url: "https://afdbundestag.de/eugh-urteil-zur-mindestlohnrichtlinie-bestaetigt-auffassung-der-afd-fraktion/"
      }
    ],
    counterArgument: {
      text: "Die EU ist nicht reformierbar. Wenn nötig, müssen die Menschen entscheiden, ähnlich wie bei Großbritannien. Die EU-Mindestlohnrichtlinie ist ein rechtswidriger Eingriff in nationale Souveränität.",
      source: "Alice Weidel, AfD-Grundsatzprogramm",
      url: "https://www.afd.de/wahlprogramm/"
    },
    rebuttal: "Der Brexit hat Großbritannien laut OBR dauerhaft 4% BIP gekostet. Gegen Freihandel UND Kooperation, aber keine Alternative für den EU-Binnenmarkt (54% der deutschen Exporte).",
    consequence: "Ihre Souveränität heißt: abhängig von Putin und Xi statt von demokratischen Partnern.",
    sources: [
      {
        text: "Destatis: Außenhandel zwischen den EU-Staaten 2024",
        url: "https://www.destatis.de/Europa/DE/Thema/Aussenhandel/EU_Handelspartner_Deutschland.html"
      },
      {
        text: "Bundestag: CETA-Ratifizierung, 01.12.2022",
        url: "https://www.bundestag.de/dokumente/textarchiv/2022/kw48-de-ceta-923086"
      },
      {
        text: "Bundestag: EU-Eigenmittelbeschluss, 25.03.2021",
        url: "https://www.bundestag.de/dokumente/textarchiv/2021/kw12-de-eu-eigenmittel-826488"
      }
    ],
    pattern: "Souveränität predigen und von autoritären Regimen kassieren.",
    question: "Wenn ein SPD-Abgeordneter Geld aus China nehmen würde, was würdest du sagen? Und wenn es ein AfD-Abgeordneter ist?"
  },
  {
    id: "gender",
    statement: "Der Gender-Wahnsinn geht zu weit",
    shortLabel: "Gender",
    icon: "👨‍👩‍👧",
    hook: "Du findest Gendern nervig. Das geht vielen so. Auch Leuten, die nicht rechts sind.",
    promise: "Die AfD will Gendern verbieten. Schluss mit dem Gender-Wahnsinn, sagen sie.",
    patternSummary: "Die AfD investiert massiv Redezeit in 0,005% Betroffene und hat null eigene Sozialgesetze.",
    evidence: [
      {
        vote: "Selbstbestimmungsgesetz",
        year: 2024,
        description: "Geschlechtseintrag per Standesamt ändern statt per Gericht und Gutachten.",
        afd: "Geschlossen dagegen.",
        others: "SPD, Grüne, FDP dafür (372 Ja).",
        url: "https://www.abgeordnetenwatch.de/bundestag/20/abstimmungen/selbstbestimmungsgesetz"
      },
      {
        vote: "Abschaffung Frauenquoten (AfD-Antrag)",
        year: 2020,
        description: "AfD beantragte die Streichung der Frauenquote in Aufsichtsräten.",
        afd: "Eigener Antrag.",
        others: "Alle anderen Fraktionen dagegen.",
        url: "https://www.bundestag.de/dokumente/textarchiv/2020/kw38-de-gleichstellung-791798"
      },
      {
        vote: "Bundesstiftung Gleichstellung",
        year: 2021,
        description: "Gründung einer Stiftung zur Förderung der Gleichstellung.",
        afd: "Geschlossen dagegen.",
        others: "CDU/CSU und SPD dafür.",
        url: "https://www.bundestag.de/dokumente/textarchiv/2021/kw15-de-bundesstiftung-gleichstellung-830888"
      }
    ],
    counterArgument: {
      text: "Gleichstellung ist ein ideologischer Begriff. Wir fordern Gleichberechtigung (gleiche Rechte), nicht Gleichstellung (gleiche Ergebnisse). Biologische Realitäten dürfen nicht geleugnet werden.",
      source: "AfD-Fraktion, Antrag Gleichberechtigung sicherstellen",
      url: "https://afdbundestag.de/gleichberechtigung-sicherstellen-gleichstellung-beenden/"
    },
    rebuttal: "0,005% der Bevölkerung ändern ihren Geschlechtseintrag. Kein eigener Gesetzentwurf zu Pflege, Rente oder Wohnen, der eine Mehrheit fand.",
    consequence: "Gender ist ihre billigste Ablenkung. Kostet nichts, mobilisiert zuverlässig. Frag dich, wie oft Gendern dein Leben wirklich beeinflusst hat.",
    sources: [
      {
        text: "Abgeordnetenwatch: Abstimmung Selbstbestimmungsgesetz, 12.04.2024",
        url: "https://www.abgeordnetenwatch.de/bundestag/20/abstimmungen/selbstbestimmungsgesetz"
      },
      {
        text: "Bundesjustizamt: Änderungen Geschlechtseintrag nach SBGG, 2024",
        url: "https://www.bundesjustizamt.de/DE/Themen/Buergerdienste/SBGG/SBGG_node.html"
      },
      {
        text: "AfD Grundsatzprogramm: Kapitel Familie und Gender",
        url: "https://www.afd.de/grundsatzprogramm/"
      }
    ],
    pattern: "Kulturkampf statt Sachpolitik. Emotion statt Lösung.",
    question: "Was sind die drei Sachen, die dein Leben gerade am meisten belasten? Kommt Gendern da vor?"
  },
  {
    id: "rente",
    statement: "Die AfD kümmert sich um unsere Rente",
    shortLabel: "Rente",
    icon: "🏦",
    hook: "Du fragst dich, ob deine Rente reichen wird. Nach 40 Jahren Arbeit sollte das nicht unsicher sein.",
    promise: "Die AfD sagt: Wir schützen die deutsche Rente. Wir kämpfen für deine Altersvorsorge.",
    patternSummary: "Die AfD hat gegen Grundrente und Rentenniveau-Stabilisierung gestimmt, beides für Geringverdiener.",
    evidence: [
      {
        vote: "Grundrente",
        year: 2020,
        description: "Aufstockung für Geringverdiener mit mindestens 33 Jahren Beiträgen.",
        afd: "Dagegen gestimmt.",
        others: "CDU/CSU und SPD dafür.",
        url: "https://www.bundestag.de/webarchiv/textarchiv/2020/kw27-de-grundrente-703572"
      },
      {
        vote: "Rentenpaket (48% Rentenniveau)",
        year: 2025,
        description: "Stabilisierte das Rentenniveau bei 48 Prozent.",
        afd: "Alle 140 dagegen.",
        others: "318 dafür, 225 dagegen.",
        url: "https://www.bundestag.de/dokumente/textarchiv/2025/kw49-de-rentenpaket-1128720"
      },
      {
        vote: "Bürgergeld (betrifft Aufstocker-Rentner)",
        year: 2022,
        description: "Höhere Grundsicherung, auch für Rentner mit Aufstockungsbedarf.",
        afd: "Geschlossen dagegen.",
        others: "SPD, Grüne, FDP dafür.",
        url: "https://www.abgeordnetenwatch.de/bundestag/20/abstimmungen/einfuehrung-des-buergergeldes"
      }
    ],
    counterArgument: {
      text: "Die Grundrente ist nicht zielgenau, zu teuer und weitgehend wirkungslos. Die Mindestlohnkommission, nicht der Koalitionsvertrag, soll über solche Fragen entscheiden.",
      source: "Ulrike Schielke-Ziesing, rentenpolitische Sprecherin AfD-Fraktion",
      url: "https://afdbundestag.de/schielke-ziesing-afd-fraktion-lehnt-wirkungslose-grundrente-ab/"
    },
    rebuttal: "Gegen Grundrente UND Rentenniveau-Stabilisierung gestimmt. Das sind die zwei Maßnahmen, die Geringverdienern helfen. Die AfD-Alternative (Kapitaldeckung) nützt vor allem Besserverdienern.",
    consequence: "Sie stimmen gegen Rentenstabilisierung heute und versprechen ein Börsenmodell für morgen. Für wen ist das sicherer?",
    sources: [
      {
        text: "Bundestag: Beschluss Rentenpaket, 05.12.2025 (318 dafür, 225 dagegen)",
        url: "https://www.bundestag.de/dokumente/textarchiv/2025/kw49-de-rentenpaket-1128720"
      },
      {
        text: "Bundestag: Grundrente, 02.07.2020",
        url: "https://www.bundestag.de/webarchiv/textarchiv/2020/kw27-de-grundrente-703572"
      },
      {
        text: "DGB Faktencheck: Wohin will die AfD mit der Rente?",
        url: "https://bw.dgb.de/dgb-bw-fileadmin/dateien/Dokumente/Sonstige/Wohin_will_die_AfD_mit_der_Rente-_Zu_Risiken_und_Nebenwirkungen_fragen_Sie_den_Arzt_oder_Apotheker_%E2%80%93_oder_direkt_Ihre_Gewerkschaft.pdf"
      }
    ],
    pattern: "Gegen Stabilisierung stimmen und Risiko als Reform verkaufen.",
    question: "Weißt du, wie die AfD beim Rentenpaket abgestimmt hat? Und was sie stattdessen vorschlägt?"
  },
  {
    id: "pflege",
    statement: "Im Gesundheitssystem läuft alles schief",
    shortLabel: "Pflege",
    icon: "🏥",
    hook: "Du wartest ewig auf einen Arzttermin. Pflegekräfte sind am Limit. Das merkst du selbst.",
    promise: "Die AfD sagt: Wir bringen das Gesundheitssystem in Ordnung. Pflege muss sich wieder lohnen.",
    patternSummary: "Die AfD hat gegen jedes Pflegegesetz seit 7 Jahren gestimmt. Eigene Vorschläge: null.",
    evidence: [
      {
        vote: "Pflegereform (PUEG)",
        year: 2023,
        description: "Erhöhte Pflegegeld und verbesserte Pflegeunterstützungsgeld.",
        afd: "Dagegen gestimmt.",
        others: "SPD, Grüne, FDP dafür (377 Ja).",
        url: "https://www.abgeordnetenwatch.de/bundestag/20/abstimmungen/pflegereform"
      },
      {
        vote: "Pflegekompetenzgesetz",
        year: 2025,
        description: "Mehr Befugnisse für Pflegefachkräfte und weniger Bürokratie.",
        afd: "Dagegen gestimmt.",
        others: "CDU/CSU und SPD dafür.",
        url: "https://www.bundestag.de/dokumente/textarchiv/2025/kw45-de-pflege-1116730"
      },
      {
        vote: "Pflegepersonal-Stärkungsgesetz",
        year: 2018,
        description: "Mehr Stellen und bessere Bedingungen in der Pflege.",
        afd: "Enthaltung.",
        others: "CDU/CSU und SPD dafür.",
        url: "https://www.bundestag.de/webarchiv/textarchiv/2018/kw45-de-pflegepersonalstaerkungsgesetz-575082"
      }
    ],
    counterArgument: {
      text: "Die Gesetze sind unausgereift. Mehr Kompetenz für Pflegekräfte ist richtig, aber der Entwurf regelt viele Details nicht. Die Kompetenzen müssen exakt definiert werden.",
      source: "Joachim Bloch, AfD-Fraktion",
      url: "https://www.bundestag.de/dokumente/textarchiv/2025/kw37-de-pflegekompetenzgesetz-1099328"
    },
    rebuttal: "Gegen jedes Pflegegesetz seit 7 Jahren. Immer unausgereift, immer dagegen. Eigene mehrheitsfähige Vorschläge: null.",
    consequence: "Pflegekräfte kündigen wegen schlechter Bezahlung. Die AfD stimmt gegen jedes Gesetz, das daran etwas ändert.",
    sources: [
      {
        text: "Bundestag: Pflegereform PUEG, 26.05.2023",
        url: "https://www.abgeordnetenwatch.de/bundestag/20/abstimmungen/pflegereform"
      },
      {
        text: "Bundestag: Pflegekompetenzgesetz, 06.11.2025",
        url: "https://www.bundestag.de/dokumente/textarchiv/2025/kw45-de-pflege-1116730"
      },
      {
        text: "Bundestag: Pflegepersonal-Stärkungsgesetz, 09.11.2018",
        url: "https://www.bundestag.de/webarchiv/textarchiv/2018/kw45-de-pflegepersonalstaerkungsgesetz-575082"
      }
    ],
    pattern: "Probleme benennen, aber gegen jede Lösung stimmen.",
    question: "Kennst du jemanden in der Pflege? Was würde sich für diese Person ändern, wenn Pflegelöhne steigen?"
  }
];
