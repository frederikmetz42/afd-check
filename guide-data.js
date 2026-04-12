const GUIDE_DATA = [
  {
    id: "migration",
    statement: "Die sind die Einzigen, die das Migrationsproblem ernst nehmen",
    shortLabel: "Migration",
    icon: "🔒",
    hook: "Du willst Politiker, die das Migrationsproblem wirklich lösen. Nicht nur darüber reden.",
    promise: "Die AfD verspricht Massenabschiebungen, geschlossene Grenzen, hartes Durchgreifen. Kein anderer traut sich das, sagen sie.",
    betrayal: "Im Bundestag hat die AfD gegen das Chancen-Aufenthaltsrecht gestimmt. Alle 66 Abgeordneten. Dieses Gesetz hätte die Abschiebung von Straftätern beschleunigt. Eigene Abschiebungsgesetze hat die AfD nie eingebracht. Nicht eins.",
    consequence: "Das Problem bleibt ungelöst. Genau das ist der Plan. Deine Frustration ist ihr Geschäftsmodell.",
    source: {
      text: "Abgeordnetenwatch: Abstimmung Chancen-Aufenthaltsrecht, 2022",
      url: "https://www.abgeordnetenwatch.de/bundestag/20/abstimmungen/chancen-aufenthaltsrecht"
    },
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
    source: {
      text: "Abgeordnetenwatch: Mindestlohn-Abstimmung 2022 + AfD Grundsatzprogramm Kapitel 10",
      url: "https://www.abgeordnetenwatch.de/bundestag/20/abstimmungen/mindestlohn-auf-12-euro"
    },
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
    source: {
      text: "Fraunhofer ISE Stromgestehungskosten 2024 + Abgeordnetenwatch EEG-Novelle 2022",
      url: "https://www.ise.fraunhofer.de/de/veroeffentlichungen/studien/studie-stromgestehungskosten-erneuerbare-energien.html"
    },
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
    consequence: "Sie bekämpfen nicht Korruption. Sie bekämpfen Transparenz.",
    source: {
      text: "Bundestagsverwaltung (Weidel) + Abgeordnetenwatch (Bystron) + ZDF heute (Krah)",
      url: "https://www.abgeordnetenwatch.de/recherchen/informationsfreiheit/geld-aus-russland-die-affaere-um-petr-bystron"
    },
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
    source: {
      text: "BKA Polizeiliche Kriminalstatistik 2024 + KFN Forschungsbericht 161",
      url: "https://www.bka.de/DE/AktuelleInformationen/StatistikenLagebilder/PolizeilicheKriminalstatistik/pks_node.html"
    },
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
    source: {
      text: "BGH Pressemitteilung 2025 + Bundesamt für Verfassungsschutz",
      url: "https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2025/2025168.html"
    },
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
    source: {
      text: "Destatis Außenhandel 2024 + Abgeordnetenwatch (Bystron) + ZDF heute (Krah)",
      url: "https://www.destatis.de/DE/Themen/Wirtschaft/Aussenhandel/_inhalt.html"
    },
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
    consequence: "Gender ist ihre billigste Ablenkung. Kostet nichts, mobilisiert zuverlässig. Hält dich wütend über etwas, das dein Leben nicht betrifft.",
    source: {
      text: "Bundesjustizamt 2023 + AfD Grundsatzprogramm",
      url: "https://icd.who.int/en"
    },
    pattern: "Kulturkampf statt Sachpolitik. Emotion statt Lösung.",
    question: "Was sind die drei Sachen, die dein Leben gerade am meisten belasten? Kommt Gendern da vor?"
  }
];
