---
title: FAQs  
permalink: "/de/docs/faq/"
lang: de
sections:
- about
weight: 60
---


Hier finden Sie Antworten auf die am häufigsten gestellten Fragen zu GOAT.

### 1. Daten
#### Welche Daten sind in GOAT beinhaltet?

GOAT beinhaltet eine Vielzahl an Datensätzen, u.a. Bevölkerung, Gebäude, Verkehrsnetze (Fuß- und Radverkehr, ÖPVN, MIV), Fahrplandaten, Verwaltungsgrenzen, sowie Points-of-Interest zu den Themen Bildung, Gastronomie, Mobilität, Gesundheit, Service-Einrichtungen, Einkaufen und Freizeit. 

#### Woher kommen die Daten?

Eine gute Datengrundlage ist Grundvoraussetzung für jede Analyse. In GOAT sind verschiedene räumliche und nicht-räumliche Datensätze integriert. Die Daten stammen von u.a. von verschiedenen Open Data Portalen, dem Bundesamt für Kartografie und Geodäsie, den Landesvermessungsämtern, OpenStreetMap und dem Zensus. Außerdem werden punktuell eigene Erhebungen durchgeführt und bei Bedarf kommerzielle Daten hinzugekauft. Weitere Datensätze können flexibel integriert werden.

#### Wie oft werden die Daten in GOAT aktualisiert?

Wir stellen sicher, dass die Daten in unseren Anwendungen auf dem neuesten Stand sind, indem wir sie mindestens einmal jährlich aktualisieren. Bei Bedarf sind auch häufigere Aktualisierungen möglich, insbesondere bei sich schnell ändernden Points of Interest (POI) oder ÖV-Fahrplänen. 

#### Kann ich eigene Daten hochladen?

Ja, weitere Datensätze und Datenquellen können bei Bedarf flexibel integriert werden. GOAT unterstützt übliche Formate wie Shapefiles, GeoJSON und WMS Layer.

#### Wo werden meine Daten gespeichert?

Datensicherheit hat für uns höchste Priorität, deshalb werden alle Daten auf einem gesicherten Server in Deutschland DSGVO-konform gespeichert. 


Weitere Informationen zu den Daten finden Sie [hier](https://plan4better.de/docs/data/ "mehr Infos zu Daten").

### 2. Einsatzgebiete & Funktionen

#### Wofür setzen Kommunen oder Planungsbüros GOAT ein?

GOAT wird u.a. eingesetzt für die Erstellung von Nahmobilitätskonzepten, Nahverkehrsplanungen, Radverkehrskonzepten, Stadtentwicklungskonzepten und Einzelhandelskonzepten, oder zur Sicherung der Daseinsvorsorge. Meist wird die Software dabei als SaaS-Abo bezogen. Wir bieten jedoch auch Reports zur Beantwortung spezifischer Planungsfragen an. Einen konkreten Anwendungsfall finden Sie in unserem [Beispielreport](https://plan4better.de/reports/ "zum Beispielreport").

#### Ist GOAT ein Verkehrsmodell?

Nein, in GOAT kann keine Verkehrserzeugung, Umlegung oder Verkehrsmittelverlagerung modelliert werden. Stattdessen basieren unsere Analysen auf dem Ansatz der Erreichbarkeit. Dieser ermöglicht es, Stadtplanungskonzepte wie die "Stadt der kurzen Wege" oder die "15-Minuten-Stadt" umzusetzen. Demnach sollen allen Bewohner:innen einer Stadt die wichtigsten Einrichtungen in räumlicher Nähe zur Verfügung stehen. Dies ist die Grundvoraussetzung für die Wahl von aktiven Modi, wie Fuß- und Radverkehr. In Ergänzung dazu ist eine gute Erreichbarkeit mit dem ÖPNV essentiell, um auch weitere Wege mit nachhaltigen Verkehrsmitteln zu ermöglichen. 

Im Gegensatz zu Verkehrsmodellen, welche die Verkehrsströme abbilden, wird bei unseren Erreichbarkeitsanalysen aufgezeigt, wie gut die Bevölkerung potenziell verschiedene Ziele (z.B. Einkaufen, Bildung) mit nachhaltigen Verkehrsmitteln erreichen kann. Wir setzen somit beim Grundproblem und nicht bei den daraus resultierenden Verkehrsauswirkungen an.

#### Welche infrastrukturellen Eigenschaften werden beim Routing berücksichtigt?

Der Routing-Algorithmus ist eine Grundfunktion von GOAT, die für die Berechnung von Reisezeiten u.a. für die Isochronen und Heatmaps verwendet wird.

**Radverkehr:** Wir berücksichtigen die Auswirkungen von Steigungen und Oberflächenbeschaffenheit des Weges auf die Fahrgeschwindigkeit. Außerdem nehmen wir an Kreuzungen eine durchschnittliche Verzögerung an.

**Fußverkehr:** Aufgrund geringer Datenverfügbarkeit werden hier, außer der Wegeverfügbarkeit, standardmäßig keine infrastrukturellen Eigenschaften berücksichtigt.

**ÖPNV:** Das Routing erfolgt basierend auf den GTFS-Soll-Fahrplandaten und reagiert dynamisch auf das vom Nutzer ausgewählte Zeitfenster. 

**MIV:** Wir verwenden Reisegeschwindigkeiten auf Basis historischer Geschwindigkeitsprofile für Pkw an Werktagen.

Weitere Informationen zum Routing finden Sie [hier](https://doi.org/10.1016/j.jtrangeo.2021.103080 "Publikation mit Einblicken ins Routing"). 

#### Hört GOAT an den Stadtgrenzen auf oder sind auch über die Gebietsgrenze hinaus Daten integriert?

Nein, GOAT endet nicht an den Stadtgrenzen. Es sind auch über die Stadtgrenzen hinaus Daten integriert und wir führen alle Berechnungen bis zu 30 Minuten über die Grenzen hinaus durch, um Cut-Off-Effekte zu vermeiden. Somit werden z.B. auch Bevölkerung und Points-of-Interest in der Nachbargemeinde berücksichtigt.

#### Können Bebauungspläne in GOAT integriert werden?

Ja. Bestandteile aus der Bebauung und den Flächennutzungsdaten (POIs) von Bebauungsplänen können in gängigen Geo-Vektorformaten in GOAT integriert werden. Über ein Szenario kann z.B. analysiert werden, wie gut neue Bevölkerung Zugang zu wichtigen Zielen (z.B. Bildung) hat. 

### 3. SaaS-Abo

#### Was wird von uns als Kund:in benötigt, um GOAT zu  beziehen?

Uns stehen die notwendigen Daten bereits deutschlandweit, und teilweise darüber hinaus, zur Verfügung. Von Ihnen wird somit nichts konkretes benötigt.
Wenn Sie spezifische lokale Datensätze haben, die Sie gerne in GOAT verwenden möchten, besteht die Möglichkeit, diese ebenfalls zu integrieren.

#### Können die Analysen auch mit Bürger:innen geteilt werden?

Ja, die Analyseergebnisse können als Webkarte mit Externen, z.B. der Bürgerschaft geteilt werden. Außerdem können die Ergebnisse exportiert werden. 
Auch in der live Anwendung in Bürgerworkshops bietet GOAT ein hohes Potenzial, um Maßnahmenvorschläge zu modellieren und die Effekte dynamisch aufzuzeigen.

Als Ergänzung bieten wir die Anwendung [Map4Citizens](https://plan4better.de/posts/2023-01-02-map4citizensde/ "Was ist Map4Citizens?") an, welche die Daten und Analysen von GOAT in einem extra auf Bürger:innen abgestimmten Webtool vereinfacht darstellt. Map4Citizens dreht sich hierbei rund um die 15-Minuten-Stadt. Bürger:innen können u.a. ihre ideale 15-Minuten-Stadt entwerfen und analysieren, wie gut verschiedene Stadtgebiete ihre Bedürfnisse erfüllen. Außerdem können nachhaltige Mobilitätsangebote und Einrichtungen im Quartier erkundet werden.

#### Wie lange dauert die Bereitstellung?

Je nach gewünschtem Gebiet und Funktionalitäten, kann GOAT nach Vertragsabschluss sofort oder innerhalb weniger Wochen bereit gestellt werden.

#### Gibt es eine Demo Version?

Ja, Sie können sich für eine [30-tägige Demoversion](https://goat.plan4better.de/register "zur Demo anmelden") anmelden. Mit der Demoversion können Analysen für das Untersuchungsgebiet München durchgeführt werden.
Wir bieten auch die Erstellung von planungsfragen-spezifischen Reports an. [Hier](https://plan4better.de/reports/ "zum Beispielreport") erhalten Sie einen Einblick in unseren Beispielbericht. 

#### Was kostet ein GOAT-Abo?

Die Preise richten sich nach Einwohnerzahl des Untersuchungsgebiets, den gewünschten Funktionen und der Anzahl der Nutzer:innen. [Kontaktieren](https://plan4better.de/kontakt/ "Kontakt") Sie uns gerne, dann können wir Ihnen ein passendes Angebot unterbreiten.