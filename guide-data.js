const GUIDE_DATA = [
  {
    id: "migration",
    statement: "Die sind die Einzigen, die das Migrationsproblem ernst nehmen",
    shortLabel: "Migration",
    icon: "🔒",
    hook: "Du willst Politiker, die das Migrationsproblem wirklich lösen. Nicht nur darüber reden.",
    promise: "Die AfD verspricht Massenabschiebungen, geschlossene Grenzen, hartes Durchgreifen. Kein anderer traut sich das, sagen sie.",
    betrayal: "Im Bundestag hat die AfD gegen das Chancen-Aufenthaltsrecht gestimmt. Alle 66 Abgeordneten. Dieses Gesetz hätte die Abschiebung von Straftätern beschleunigt. Eigene Abschiebungsgesetze hat die AfD nie eingebracht. Nicht eins.",
    consequence: "Das Problem bleibt ungelöst. Und solange es ungelöst bleibt, bringt es Stimmen. Schau dir an, was sie tatsächlich einbringen. Nicht was sie versprechen.",
    sources: [
      {
        text: "Abgeordnetenwatch: Abstimmung Chancen-Aufenthaltsrecht, 2022",
        url: "https://www.abgeordnetenwatch.de/bundestag/20/abstimmungen/chancen-aufenthaltsrecht"
      },
      {
        text: "Bundestag Drucksache 20/3717: Entwurf Chancen-Aufenthaltsrecht",
        url: "https://dserver.bundestag.de/btd/20/037/2003717.pdf"
      },
      {
        text: "Bundestag: Alle Gesetzentwürfe der AfD-Fraktion (20. Legislatur)",
        url: "https://www.bundestag.de/ajax/filterlist/de/gesetze/gesetzgebungsvorhaben/866354-866354?fraktion=AfD&limit=10"
      }
    ],
    pattern: "Sie blockieren Lösungen, die sie selbst fordern. Gelöste Probleme bringen keine Stimmen.",
    question: "Weißt du, wie die AfD im Bundestag bei Abschiebe-Gesetzen abstimmt? Mich hat das überrascht."
  },
  {
    id: "establishment",
    statement: "Die stehen für den kleinen Mann und gegen die Eliten",
    shortLabel: "Eliten",
    icon: "💶",
    hook: "Du willst mehr Geld am Ende des Monats. Das ist kein politisches Statement, das ist Alltag.",
    promise: "Die AfD sagt: Wir kämpfen für die kleinen Leute. Gegen die da oben. Für dich.",
    betrayal: "Die AfD hat gegen die Mindestlohnerhöhung auf 12 Euro gestimmt. Alle 75 dagegen. Sie lehnt die Vermögensteuer ab. Die trifft nur Vermögen über 2 Millionen. Sie will die Erbschaftsteuer abschaffen. Davon profitiert das oberste Prozent.",
    consequence: "Ihr Steuertarif spart dir etwa 600 Euro im Jahr. Ein Spitzenverdiener spart 15.000 Euro. 25-mal mehr Ersparnis bei 5,5-mal mehr Gehalt.",
    sources: [
      {
        text: "Abgeordnetenwatch: Abstimmung Mindestlohn auf 12 Euro, 2022",
        url: "https://www.abgeordnetenwatch.de/bundestag/20/abstimmungen/mindestlohn-auf-12-euro"
      },
      {
        text: "AfD Grundsatzprogramm, Kapitel 10: Steuern und Finanzen",
        url: "https://www.afd.de/grundsatzprogramm/"
      },
      {
        text: "ZEW Mannheim: Steuerbelastung nach AfD-Steuertarif (Simulation)",
        url: "https://www.zew.de/presse/pressearchiv"
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
    betrayal: "Solar kostet heute 4,7 Cent pro Kilowattstunde. Kohle kostet 11 bis 15 Cent. Solar ist halb so teuer. Die AfD hat gegen den Ausbau erneuerbarer Energien gestimmt. Eigene Energiegesetze hat sie nie eingebracht.",
    consequence: "Ihr Plan bedeutet teureren Strom, nicht billigeren. Du würdest mehr zahlen.",
    sources: [
      {
        text: "Fraunhofer ISE: Stromgestehungskosten erneuerbare Energien, 2024",
        url: "https://www.ise.fraunhofer.de/de/veroeffentlichungen/studien/studie-stromgestehungskosten-erneuerbare-energien.html"
      },
      {
        text: "Abgeordnetenwatch: Abstimmung EEG-Novelle 2023",
        url: "https://www.abgeordnetenwatch.de/bundestag/20/abstimmungen"
      },
      {
        text: "Bundesnetzagentur: Monitoringbericht Energie 2024",
        url: "https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/Monitoringberichte/start.html"
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
    betrayal: "Alice Weidel: 396.000 Euro Strafe für illegale Spenden aus der Schweiz. Petr Bystron: Ermittlungen wegen russischem Geld. Maximilian Krahs Mitarbeiter: verurteilt als chinesischer Spion im EU-Parlament. Und die AfD hat gegen das Lobbyregister gestimmt.",
    consequence: "Die AfD stimmt gegen Transparenzgesetze und kassiert gleichzeitig Geld aus dem Ausland.",
    sources: [
      {
        text: "Abgeordnetenwatch: Geld aus Russland, die Affäre um Petr Bystron",
        url: "https://www.abgeordnetenwatch.de/recherchen/informationsfreiheit/geld-aus-russland-die-affaere-um-petr-bystron"
      },
      {
        text: "Bundestagsverwaltung: Strafzahlung Weidel-Spende (396.000 Euro)",
        url: "https://www.bundestag.de/parlament/praesidium/parteienfinanzierung"
      },
      {
        text: "ZDF heute: Krah-Mitarbeiter wegen Spionage für China verurteilt",
        url: "https://www.zdf.de/nachrichten/politik/ausland/krah-mitarbeiter-spionage-china-urteil-100.html"
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
    betrayal: "Deutschland hat weniger Straftaten als vor 8 Jahren. 5,2 Millionen statt 6,4 Millionen. Die Kriminalitätsrate bei Nichtdeutschen ist seit 2014 um 21 Prozent gesunken. Die Überrepräsentation bei bestimmten Delikten ist real. Die Kriminologie zeigt: Alter, Geschlecht und Aufenthaltsstatus erklären den Großteil. Nicht Herkunft.",
    consequence: "Die AfD stimmt gegen Gesetze, die genau diese Ursachen angehen würden. Sie brauchen die Angst, nicht die Lösung.",
    sources: [
      {
        text: "BKA: Polizeiliche Kriminalstatistik 2024",
        url: "https://www.bka.de/DE/AktuelleInformationen/StatistikenLagebilder/PolizeilicheKriminalstatistik/pks_node.html"
      },
      {
        text: "KFN Forschungsbericht 161: Kriminalität von Zuwanderern",
        url: "https://kfn.de/publikationen/kfn-forschungsberichte/"
      },
      {
        text: "Destatis: Straftaten und Tatverdächtige (Zeitreihe)",
        url: "https://www.destatis.de/DE/Themen/Staat/Justiz-Rechtspflege/_inhalt.html"
      }
    ],
    pattern: "Angst verkauft Stimmen. Sicherheit löst das Problem. Nur eins davon hilft der AfD.",
    question: "Fühlst du dich unsicherer als früher? Mich interessiert, ob das bei dir an bestimmten Sachen liegt."
  },
  {
    id: "patriotism",
    statement: "Man wird ja als Patriot sofort in die rechte Ecke gestellt",
    shortLabel: "Patriotismus",
    icon: "🇩🇪",
    hook: "Du willst stolz auf dein Land sein. Ohne dass jemand dich gleich Nazi nennt. Kann man verstehen.",
    promise: "Die AfD sagt: Wir sind die echten Patrioten. Alle anderen schämen sich für Deutschland.",
    betrayal: "Ihr Spitzenmann Höcke wurde verurteilt. Für eine SA-Parole. Zweimal. Der BGH hat es bestätigt. Gauland nannte die Nazi-Zeit einen Vogelschiss. Drei Landesverbände sind vom Verfassungsschutz als gesichert rechtsextrem eingestuft.",
    consequence: "Sie haben Patriotismus nicht neu definiert. Sie haben Extremismus dahinter versteckt.",
    sources: [
      {
        text: "BGH: Bestätigung Höcke-Verurteilung wegen SA-Parole, 2025",
        url: "https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2025/2025168.html"
      },
      {
        text: "Bundesamt für Verfassungsschutz: Einstufung AfD-Landesverbände",
        url: "https://www.verfassungsschutz.de/DE/themen/rechtsextremismus/rechtsextremismus_node.html"
      },
      {
        text: "Correctiv: Gauland-Zitat \"Vogelschiss\" im Kontext",
        url: "https://correctiv.org/faktencheck/"
      }
    ],
    pattern: "Patriotismus als Schutzschild für Positionen, die Gerichte als rechtsextrem einstufen.",
    question: "Wenn du an Deutschland denkst, worauf bist du stolz? Und vertritt die AfD genau das?"
  },
  {
    id: "eu",
    statement: "Die EU bestimmt zu viel über Deutschland",
    shortLabel: "EU",
    icon: "🌍",
    hook: "Du ärgerst dich über EU-Bürokratie. Zu viele Regeln, zu wenig Mitsprache. Geht vielen so.",
    promise: "Die AfD will den Dexit. Oder zumindest eine radikale EU-Reform. Zurück zur nationalen Souveränität.",
    betrayal: "60 Prozent der deutschen Exporte gehen in die EU. Der Brexit hat gezeigt, was ein Austritt kostet. Und was machen AfD-Abgeordnete im EU-Parlament? Bystron nimmt russisches Geld über Voice of Europe. Krahs Mitarbeiter spioniert für China.",
    consequence: "Ihre Version von Souveränität heißt: abhängig von Putin und Xi statt von demokratischen Partnern.",
    sources: [
      {
        text: "Destatis: Außenhandel, Haupthandelspartner 2024",
        url: "https://www.destatis.de/DE/Themen/Wirtschaft/Aussenhandel/_inhalt.html"
      },
      {
        text: "Abgeordnetenwatch: Bystron und Voice of Europe",
        url: "https://www.abgeordnetenwatch.de/recherchen/informationsfreiheit/geld-aus-russland-die-affaere-um-petr-bystron"
      },
      {
        text: "AfD Wahlprogramm: Kapitel Europa und Souveränität",
        url: "https://www.afd.de/wahlprogramm/"
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
    betrayal: "0,005 Prozent der Bevölkerung ändern ihren Geschlechtseintrag. Das ist der ganze Wahnsinn. Gleichzeitig hat die AfD keinen Plan für Mieten, Renten oder Pflege.",
    consequence: "Gender ist ihre billigste Ablenkung. Kostet nichts, mobilisiert zuverlässig. Frag dich, wie oft Gendern dein Leben wirklich beeinflusst hat.",
    sources: [
      {
        text: "Bundesjustizamt: Änderungen Geschlechtseintrag nach SBGG, 2024",
        url: "https://www.bundesjustizamt.de/DE/Themen/Buergerdienste/SBGG/SBGG_node.html"
      },
      {
        text: "AfD Grundsatzprogramm: Kapitel Familie und Gender",
        url: "https://www.afd.de/grundsatzprogramm/"
      },
      {
        text: "Destatis: Bevölkerungsstand Deutschland 2024",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/_inhalt.html"
      }
    ],
    pattern: "Kulturkampf statt Sachpolitik. Emotion statt Lösung.",
    question: "Was sind die drei Sachen, die dein Leben gerade am meisten belasten? Kommt Gendern da vor?"
  }
];
