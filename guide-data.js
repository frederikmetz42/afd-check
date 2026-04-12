const GUIDE_DATA = [
  {
    id: "migration",
    statement: "Die sind die Einzigen, die das Migrationsproblem ernst nehmen",
    shortLabel: "Migration",
    icon: "🔒",
    hook: "Du willst Politiker, die das Migrationsproblem wirklich lösen. Nicht nur darüber reden.",
    promise: "Die AfD verspricht Massenabschiebungen, geschlossene Grenzen, hartes Durchgreifen. Kein anderer traut sich das, sagen sie.",
    betrayal: "Das Chancen-Aufenthaltsrecht gab Geduldeten nach 5 Jahren eine Aufenthaltserlaubnis. Bedingung: Arbeit, Sprache, keine Straftaten. Weniger Geduldete, mehr Ordnung im System. Die AfD hat geschlossen dagegen gestimmt. Alle 66 Abgeordneten. Obwohl sie ständig über zu viele Geduldete klagen. Eigene Gesetzentwürfe zur Abschiebung? Kein einziger.",
    consequence: "Weniger Geduldete wäre ein Ergebnis. Aber Ergebnisse bringen keine Stimmen. Schau dir an, was sie einbringen. Nicht was sie versprechen.",
    sources: [
      {
        text: "Abgeordnetenwatch: Namentliche Abstimmung Chancen-Aufenthaltsrecht, 02.12.2022",
        url: "https://www.abgeordnetenwatch.de/bundestag/20/abstimmungen/chancen-aufenthaltsrecht"
      },
      {
        text: "Bundestag: Einführung des Chancen-Aufenthaltsrechts (Debatte und Beschluss)",
        url: "https://www.bundestag.de/dokumente/textarchiv/2022/kw48-de-chancen-aufenthaltsrecht-923118"
      },
      {
        text: "Bundestag Drucksache 20/3717: Gesetzentwurf Chancen-Aufenthaltsrecht",
        url: "https://dserver.bundestag.de/btd/20/037/2003717.pdf"
      }
    ],
    pattern: "Sie blockieren Lösungen für Probleme, über die sie am lautesten klagen.",
    question: "Weißt du, wie die AfD bei Migrations-Gesetzen im Bundestag abstimmt? Mich hat das überrascht."
  },
  {
    id: "establishment",
    statement: "Die stehen für den kleinen Mann und gegen die Eliten",
    shortLabel: "Eliten",
    icon: "💶",
    hook: "Du willst mehr Geld am Ende des Monats. Das ist kein politisches Statement, das ist Alltag.",
    promise: "Die AfD sagt: Wir kämpfen für die kleinen Leute. Gegen die da oben. Für dich.",
    betrayal: "Die AfD hat gegen die Mindestlohnerhöhung auf 12 Euro gestimmt. Alle 75 dagegen. Sie lehnt die Vermögensteuer ab. Die trifft nur Vermögen über 2 Millionen. Sie will die Erbschaftsteuer abschaffen. Davon profitiert das oberste Prozent.",
    consequence: "Laut ZEW-Studie spart ein Ehepaar mit 40.000 Euro Jahreseinkommen durch die AfD-Steuerpläne nichts. Ein Ehepaar mit 180.000 Euro spart 19.190 Euro. Je reicher, desto mehr Entlastung.",
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
    betrayal: "Solar kostet heute 4,7 Cent pro Kilowattstunde. Kohle kostet 11 bis 15 Cent. Solar ist halb so teuer. Die AfD hat gegen den Ausbau erneuerbarer Energien gestimmt. Eigene Energiegesetze hat sie nie eingebracht.",
    consequence: "Ihr Plan bedeutet teureren Strom, nicht billigeren. Du würdest mehr zahlen.",
    sources: [
      {
        text: "Fraunhofer ISE: Stromgestehungskosten erneuerbare Energien, 2024",
        url: "https://www.ise.fraunhofer.de/de/veroeffentlichungen/studien/studie-stromgestehungskosten-erneuerbare-energien.html"
      },
      {
        text: "Abgeordnetenwatch: Abstimmung Erneuerbare-Energien-Gesetz (EEG)",
        url: "https://www.abgeordnetenwatch.de/bundestag/19/abstimmungen/erneuerbare-energien-gesetz-eeg"
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
    betrayal: "Alice Weidel: 396.000 Euro Strafe für illegale Spenden aus der Schweiz. Petr Bystron: Ermittlungen wegen russischem Geld über Voice of Europe. Maximilian Krahs Mitarbeiter: verurteilt als chinesischer Spion im EU-Parlament. Die AfD hat 2023 gegen die Verschärfung des Lobbyregistergesetzes gestimmt.",
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
        text: "Bundestag: Lobbyregistergesetz Verschärfung 2023 (Debatte und Beschluss)",
        url: "https://www.bundestag.de/dokumente/textarchiv/2023/kw42-de-lobbyregister-971428"
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
    betrayal: "Die Überrepräsentation von Nichtdeutschen in der Kriminalstatistik ist real. Die Tatverdächtigenbelastungszahl liegt bei 5.091 pro 100.000 (Deutsche: 1.878). Das sind die BKA-Zahlen. Gleichzeitig zeigt die Kriminologie: Alter, Geschlecht und Aufenthaltsstatus erklären den Großteil. Junge Männer ohne sicheren Status sind häufiger tatverdächtig, egal woher sie kommen. Seit 2016 sinkt die Kriminalität bei Zuwanderern deutlich. Die AfD hat gegen Gesetze gestimmt, die genau diese Ursachen angehen: Integration, Aufenthaltsstatus, Sprachkurse.",
    consequence: "Die Zahlen sind echt. Die Frage ist, ob du eine Partei willst, die sie erklärt und anpackt, oder eine, die sie nur wiederholt.",
    sources: [
      {
        text: "BKA: Polizeiliche Kriminalstatistik 2024, Tatverdächtige nach Nationalität",
        url: "https://www.bka.de/DE/AktuelleInformationen/StatistikenLagebilder/PolizeilicheKriminalstatistik/PKS2024/PKSTabellen/BundTVNationalitaet/bundTVNationalitaet.html"
      },
      {
        text: "BKA: PKS 2024 Ausgewählte Zahlen im Überblick (BMI)",
        url: "https://www.bmi.bund.de/SharedDocs/downloads/DE/publikationen/themen/sicherheit/BMI25028_pks-2024.pdf"
      },
      {
        text: "KFN Forschungsbericht 161: Kriminalität von Zuwanderern",
        url: "https://kfn.de/publikationen/kfn-forschungsberichte/"
      },
      {
        text: "Mediendienst Integration: Migration und Kriminalität (Einordnung PKS)",
        url: "https://mediendienst-integration.de/news/migration-und-kriminalitaet/"
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
    betrayal: "Ihr Spitzenmann Höcke wurde verurteilt. Für eine SA-Parole. Zweimal. Der BGH hat es im August 2025 rechtskräftig bestätigt (3 StR 484/24). Gauland nannte die Nazi-Zeit einen Vogelschiss. Drei Landesverbände sind vom Verfassungsschutz als gesichert rechtsextrem eingestuft.",
    consequence: "Sie haben Patriotismus nicht neu definiert. Sie haben Extremismus dahinter versteckt.",
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
        text: "ZDF: Höcke-Urteil wegen NS-Parole rechtskräftig",
        url: "https://www.zdfheute.de/politik/deutschland/bjoern-hoecke-afd-urteil-ns-parole-bgh-100.html"
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
    betrayal: "54 Prozent der deutschen Exporte gehen in die EU. Der Brexit hat gezeigt, was ein Austritt kostet. Und was machen AfD-Abgeordnete im EU-Parlament? Bystron nimmt russisches Geld über Voice of Europe. Krahs Mitarbeiter spioniert für China.",
    consequence: "Ihre Version von Souveränität heißt: abhängig von Putin und Xi statt von demokratischen Partnern.",
    sources: [
      {
        text: "Destatis: Außenhandel zwischen den EU-Staaten 2024",
        url: "https://www.destatis.de/Europa/DE/Thema/Aussenhandel/EU_Handelspartner_Deutschland.html"
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
  },
  {
    id: "rente",
    statement: "Die AfD kümmert sich um unsere Rente",
    shortLabel: "Rente",
    icon: "🏦",
    hook: "Du fragst dich, ob deine Rente reichen wird. Nach 40 Jahren Arbeit sollte das nicht unsicher sein.",
    promise: "Die AfD sagt: Wir schützen die deutsche Rente. Wir kämpfen für deine Altersvorsorge.",
    betrayal: "Im Dezember 2025 hat der Bundestag das Rentenpaket beschlossen. Rentenniveau bei 48 Prozent stabilisiert. Die AfD hat geschlossen dagegen gestimmt. Alle 140 Abgeordneten. Im Grundsatzprogramm will die AfD die Rente um Kapitaldeckung erweitern. Das heißt: Teile deiner Rente sollen an der Börse angelegt werden. Wer wenig verdient, kann wenig anlegen. Wer schlecht anlegt, verliert.",
    consequence: "Sie stimmen gegen Rentenstabilisierung heute und versprechen ein Börsenmodell für morgen. Für wen ist das sicherer?",
    sources: [
      {
        text: "Bundestag: Beschluss Rentenpaket, 05.12.2025 (318 dafür, 225 dagegen)",
        url: "https://www.bundestag.de/dokumente/textarchiv/2025/kw49-de-rentenpaket-1128720"
      },
      {
        text: "AfD Wahlprogramm: Rente und Soziales",
        url: "https://www.afd.de/wahlprogramm-rente-soziales/"
      },
      {
        text: "AfD-Fraktion: Eckpunktepapier Alterssicherung",
        url: "https://afdbundestag.de/eckpunktepapier-alterssicherung/"
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
    betrayal: "Die AfD hat 2019 gegen bessere Pflegelöhne gestimmt. Das Pflegelöhneverbesserungsgesetz sollte verbindliche Mindestlöhne in der Pflege ermöglichen. Die AfD nannte es einen Eingriff in die Marktwirtschaft. Beim Pflegepersonal-Stärkungsgesetz 2018 hat sie sich enthalten. Beim Pflegekompetenzgesetz 2025 hat sie dagegen gestimmt. Eigene Pflegegesetze? Keine.",
    consequence: "Pflegekräfte kündigen wegen schlechter Bezahlung. Die AfD stimmt gegen jedes Gesetz, das daran etwas ändert.",
    sources: [
      {
        text: "Bundestag: Gesetz für bessere Löhne in der Pflege (AfD dagegen), 24.10.2019",
        url: "https://www.bundestag.de/webarchiv/textarchiv/2019/kw43-de-pflegeloehneverbesserungsgesetz-663300"
      },
      {
        text: "Bundestag: Pflegepersonal-Stärkungsgesetz (AfD Enthaltung), 09.11.2018",
        url: "https://www.bundestag.de/webarchiv/textarchiv/2018/kw45-de-pflegepersonalstaerkungsgesetz-575082"
      },
      {
        text: "Bundestag: Pflegekompetenzgesetz und Sparpaket (AfD dagegen), 06.11.2025",
        url: "https://www.bundestag.de/dokumente/textarchiv/2025/kw45-de-pflege-1116730"
      },
      {
        text: "AfD-Fraktion: Grundsatzthesen zur Pflege",
        url: "https://afdbundestag.de/afd-grundsatzthesen-zur-pflege/"
      }
    ],
    pattern: "Probleme benennen, aber gegen jede Lösung stimmen.",
    question: "Kennst du jemanden in der Pflege? Was würde sich für diese Person ändern, wenn Pflegelöhne steigen?"
  }
];
