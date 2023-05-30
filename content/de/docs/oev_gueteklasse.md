---
title: ÖV Güteklassen
permalink: /de/docs/oev_gueteklasse/
lang: de
sections:
- technical
weight: 45
---

Die Erschließungsqualität ist ein entscheidender Indikator in der ÖV- und Raumplanung. So können Defizite in der Erschließung aufgezeigt und gut erschlossene Standorte als attraktive Entwicklungsgebiete identifiziert werden. Methodisch überlegen im Vergleich zu gängigen Einzugsradien ist der Ansatz der ÖV Güteklassen. Um die Attraktivität des ÖV-Angebotes in die Bewertung der Erschließungsqualität einfließen zu lassen, verwendet das Schweizer Bundesamt für Raumentwicklung ARE 2011 den Indikator der ÖV Güteklassen, seither gelten diese als wichtiges Instrument in formalen Planungsprozessen in der Schweiz. Zudem diente das Schweizer Vorbild als Inspiration für Anwendung in Österreich (u.a. Voralberg).  

Die bereits erfolgte Institutionalisierung des Indikators im deutschsprachigen Ausland, sowie die verständliche und gleichzeitig differenzierte Berechnungsmethodik sind wichtige Vorteile der ÖV Güteklassen. Für den Einsatz in GOAT wurde der Indikator auf die Verhältnisse in Deutschland angepasst. Gleichzeitig wurde der Berechnungzeitraum flexibilisiert, so kann der Indikator für beliebige Wochentage und Tageszeiten berechnet werden. In der Schweizer Version des Indikators wird die Berechnung der Güteklassen in der Regel für Abfahrten an Wochentage zwischen 6-20 Uhr durchgeführt. Im Folgenden wird die in GOAT implementierte Berechnungsmethodik genauer erläutert.  

![Klassifizierung Haltestellen](/images/docs/oev_gueteklasse/classification_stations_de.webp "Klassifizierung Stationen")

Die Berechnungen werden aus Basis von GTFS-Daten durchgeführt. Zunächst wird für jede Station die Anzahl der Abfahrten je ÖV-Verkehrsmittel (U-Bahn, Tram, Bus und Bahn) dynamisch berechnet. Die Summe der Abfahrten wird zur Berechnung des Taktes durch zwei geteilt, um die Hin- und Rückrichtung rauszurechnen. Im nächsten Schritt wird der durchschnittliche Takt für das ausgewählte Zeitintervall berechnet. Als Stationstyp wird im Falle der Bedienung durch mehrere Verkehrsmittel das höherwertige Angebot ausgewählt. So ist dieses beispielsweise im Falle von Bus und Bahn, die Bahn. Mithilfe der oben dargestellten Tabelle, sowie dem Stationstyp und dem Takt kann nun die Stationskategorie festgelegt werden. 

![Bestimmung ÖV Güteklassen](/images/docs/oev_gueteklasse/determination_oev_gueteklasse_de.webp "Bestimmung ÖV Güteklassen")

Im Folgenden werden für die entsprechende Stationskategorien Radien in der dargestellten Größe berechnet. So entstehen mehrere Radien, die zusammengeführt werden. Für sich überlappende Radien wird die höherwertige Güteklasse verwendet. 

# Referenzen

Bundesamt für Raumentwicklung ARE, 2022. [ÖV-Güteklassen Berechnungsmethodik ARE (Grundlagenbericht)](https://www.are.admin.ch/are/de/home/medien-und-publikationen/publikationen/verkehr/ov-guteklassen-berechnungsmethodik-are.html "zur Referenz").

metron, 2017. [Bedienungsqualität und Erschließungsgüte im Öffentlichen Verkehr](https://vorarlberg.at/documents/302033/472144/1-+Schlussbericht.pdf/81c5f0d7-a0f0-54c7-e951-462cd5cf2831?t=1616147848364 "zur Referenz").

Hiess, H., 2017. [Entwicklung eines Umsetzungskonzeptes für österreichweite ÖV-Güteklassen](https://www.oerok.gv.at/fileadmin/user_upload/Bilder/2.Reiter-Raum_u._Region/1.OEREK/OEREK_2011/PS_RO_Verkehr/OeV-G%C3%BCteklassen_Bericht_Final_2017-04-12.pdf "zur Referenz").
