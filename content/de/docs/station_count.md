---
title: Durchschnittliche Anzahl Abfahrten Öffentlicher Verkehr (pro Stunde)
permalink: "/docs/station_count/"
sections:
- technical
weight: 50

---

#### Definition

Dieser Indikator zeigt je Haltestelle die durchschnittliche Anzahl der ÖPNV-Abfahrten pro Stunde für ein ausgewähltes Zeitintervall an. Die Ergebnisse werden in Kreisdiagrammen visualisiert. Die Größe des Kreisdiagramms stellt die Anzahl der Abfahrten dar: je größer das Kreisdiagramm, desto mehr Abfahrten. Die Farben repräsentieren die Verkehrsmittel (z.B. Bus, U-Bahn).

Dieser Indikator dient als Grundlage für die [ÖV Güteklassen](/docs/oev_gueteklasse/ "Dokumentation zu den ÖV-Güteklassen"), kann aber auch allein als einfaches Maß für das ÖV-Angebot auf Haltestellen-Ebene verwendet werden. Er gibt einen Überblick über die Abfahrten einer Haltestelle in einem bestimmten Zeitfenster und liefert damit einen hilfreichen Überblick über das ÖPNV-Angebot in einer Stadt. Damit findet der Indikator oft Verwendung in Schwachstellenanalysen von Nahverkehrsplänen (siehe u.a. [Leitlinie zur Nahverkehrsplanung in Bayern](https://www.demografie-leitfaden-bayern.de/fileadmin/user_upload/demografie-leitfaden/dokumente/LEITLINIE98.pdf "Leitlinie zur Nahverkehrsplanung in Bayern")).

![Durchschnittliche Anzahl Abfahrten Öffentlicher Verkehr](/images/docs/station_count/station_count_indicator_de.webp "Durchschnittliche Anzahl Abfahrten Öffentlicher Verkehr")

_Abbildung 1: GOAT Interface - Durchschnittliche Anzahl Abfahrten Öffentlicher Verkehr_

#### Welche Planungsfragen können beantwortet werden?
- Welche Haltestellen in der Stadt dienen als Hauptknotenpunkte?
- Welche Haltestellen haben im Vergleich zu anderen eine niedrige Bedienungshäufigkeit?
- Wie variiert das ÖPNV-Angebot je nach Wochentag oder Tageszeit?
  
#### Berechnung

Ähnlich wie bei den ÖV-Güteklassen wird dieser Indikator auf Basis der GTFS-Daten berechnet. Basierend auf dem gewählten Tag und Zeitfenster wird die durchschnittliche Anzahl der Abfahrten pro Stunde (unabhängig von der Richtung) berechnet.

#### Referenzen

Shkurti, Majk (2022). [Spatio-temporal public transport accessibility analysis and benchmarking in an interactive WebGIS](https://www.researchgate.net/publication/365790691_Spatio-temporal_public_transport_accessibility_analysis_and_benchmarking_in_an_interactive_WebGIS)
