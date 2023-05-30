---
title: Isochronen
permalink: /de/docs/isochrone/
lang: de
sections:
- technical
weight: 40
---

#### Definition

Eine Isochrone oder ein Einzugsgebiet ist ein Indikator, der aufzeigt, wie weit sich eine Person in einer bestimmten Zeit von einem ausgewählten Ort aus fortbewegen kann. Isochronen können von einem oder [mehreren Ausgangspunkten](../multi-isochrones "siehe Multi-Isochronen") für Modi wie Gehen, Radfahren, Auto oder den öffentlichen Verkehr berechnet werden. Je nach gewähltem Verkehrsmittel wird das entsprechende Routing-Netzwerk verwendet. Die Fortbewegungsgeschwindigkeit sowie die Reisezeit können vom Benutzer ausgewählt werden.

In GOAT werden die Isochronen dynamisch im Frontend auf der Grundlage eines Reisezeitrasters berechnet. Daher können Isochronen schnell und für verschiedene Reisezeiten on the fly angezeigt werden.


#### Routing-Modi

Je nach gewähltem Verkehrsmittel nutzt GOAT unterschiedliche Elemente des Straßennetzes. Um GOAT flexibel zu halten, können die Kategorien des Straßennetzes beim Einrichten des Planungswerkzeugs an den lokalen Kontext angepasst werden.

Abhängig von der Verfügbarkeit von Daten im Untersuchungsgebiet und dem Planungszweck sind verschiedene Routing-Profile verfügbar (Fußverkehr, Radverkehr, ÖPNV, MIV).



#### 1. Fußverkehr

Alle für den Fußverkehr geeigneten Wege werden berücksichtigt.

Standardgeschwindigkeit zu Fuß: 5km/h

<img src="\images\docs\technical_documentation\isochrone\walking_en.webp" alt="walking isochrone" style="max-height:85px;"/>

#### 2. Radverkehr

#### 2.1 Standard

Alle für den Radverkehr geeigneten Wege werden berücksichtigt.

Standard-Fahrgeschwindigkeit: 15km/h 

Je nach Oberfläche, Oberflächenbeschaffenheit und Steigung der verschiedenen Wegeabschnitte wird die Fahrgeschwindigkeit entsprechend angepasst.

<img src="\images\docs\technical_documentation\isochrone\standard_en.webp" alt="standard isochrone" style="max-height:88px;"/>

#### 2.2 Pedelec

Äquivalent zum Standard-Fahrradprofil, jedoch mit einer erhöhten Fahrgeschwindigkeit von 23 km/h. Außerdem werden hier die Steigungen mit einem geringeren Widerstand berücksichtigt als beim Standard-Fahrradprofil.

<img src="\images\docs\technical_documentation\isochrone\pedelec_en.webp" alt="pedelec isochrone" style="max-height:80px;"/>


#### 3. ÖPNV

In diesem Routing-Modus können die Nutzer die intermodale Erreichbarkeit mit dem öffentlichen Verkehr berechnen. Es können die folgenden Einstellungen im Nutzerinterface angepasst werden: 

- Wochentag (Montag bis Sonntag)
- Tageszeit (00:00 bis 24:00)
- Zugangsmodus (wie der Nutzer den Bahnhof erreicht, z.B. zu Fuß oder mit dem Fahrrad),
- Ausstiegsmodus (wie der Benutzer die Station verlässt, z.B. zu Fuß, mit dem Fahrrad) 
- Berücksichtigte ÖPNV-Modi (Straßenbahn, Eisenbahn, Bus oder Bahn)

<img src="\images\docs\technical_documentation\isochrone\transit_en.webp" alt="transit isochrone" style="max-height:300px;"/>


#### Welche Planungsfragen können beantwortet werden?

- Wie viele Points-of-Interest können mit öffentlichen Verkehrsmitteln innerhalb der gewählten Reisezeit erreicht werden?
- Wie viele Supermärkte können von einem bestimmten Punkt aus in 10 Minuten zu Fuß erreicht werden?
- Wie viele Personen können eine Haltestelle des öffentlichen Verkehrs innerhalb von 5 Minuten erreichen? 

#### Wie funktioniert die Berechnung? 
##### Routing-Algorithmus - Fuß- und Radverkehr:

Das Routing für den Fuß- und Radverkehr basiert auf einer eigenen Implementierung des weit verbreiteten Dijkstra-Algorithmus. In der Implementierung wird das Routing-Netzwerk dynamisch erstellt und ermöglicht so die Berechnung von Szenarien. 

Während das Routing-Netzwerk in der PostgreSQL/PostGIS-Datenbank gespeichert ist, wird das Routing in Python mit dem Just-in-Time-Compiler Numba durchgeführt.

##### Routing-Algorithmus - ÖPNV:

Da die Isochrone des öffentlichen Verkehrs eine Kombination verschiedener Datentypen (Gehwege, Radwege, Fahrpläne des ÖPNV usw.) erfordert, ist sie komplexer als die anderen Isochronen.

Die verwendeten Daten sind eine Kombination aus GTFS- und OSM-Daten durch die R5-Engine (Rapid Realistic Routing on Real-world and Reimagined networks). Die Routing-Ergebnisse werden mit der Bevölkerung und den POIs aus der GOAT-Datenbank verschnitten. R5 ist die Routing-Engine für Conveyal, ein webbasiertes System, das es den Benutzern ermöglicht, Verkehrsszenarien zu erstellen und sie im Hinblick auf die kumulativen Möglichkeiten und Erreichbarkeitsindikatoren zu bewerten. Die Abbildung unten zeigt die Rasterinterpolation mit Reisezeitkosten aus dem R5-System:

<img src="\images\docs\technical_documentation\isochrone\r5_en.webp" alt="Berechnung R5 Isochrone" style="max-height:350px;"/>

Infolgedessen enthält das Raster Informationen über die Erreichbarkeit aller Einrichtungen für jede Minute des Reisezeitfensters.

<img src="\images\docs\technical_documentation\isochrone\grid_en.webp" alt="r5 isochrone" style="max-height:150px;"/>

Die Auflösung der Gitterzellen hängt von den Web-Mercator-Zoomstufen ab. Dabei ist die Auflösung ein Kompromiss zwischen Leistung und Genauigkeit. Für Fußgänger/Radfahrer und öffentliche Verkehrsmittel werden unterschiedliche Zoomstufen verwendet. Um der Tatsache Rechnung zu tragen, dass das Gehen und Radfahren Analysen erfordert, die sich auf die lokale Ebene konzentrieren. Im Allgemeinen führen höhere Auflösungen zu hochauflösenden Ergebnissen, sind aber mit längeren Berechnungszeiten verbunden.

#### Visualisierung 

Die Isochrone selbst ist eine Form, die aus dem Routing-Gitter mit Hilfe des "Marching Square Contour Line Algorithm" abgeleitet wird, einem Computergrafik-Algorithmus, der zweidimensionale Konturlinien aus einer rechteckigen Anordnung von Werten erzeugt (de Queiroz Neto et al. 2016). Dieser Algorithmus wandelt das Gitter von einem 2D-Array in eine Form um, die visualisiert und analysiert werden kann. Eine Illustration der 2D-Bildverarbeitung ist in der Abbildung zu sehen.

<img src="\images\docs\technical_documentation\isochrone\wiki.webp" alt="Marching Square Algorithmus" style="max-height:350px;"/>


Wenn Sie detailliertere Beispiele für die Verwendung von Isochronen in GOAT sehen, oder selbst Berechnungen durchführen möchten, können Sie sich die [Tutorials](../../tutorials/isochrone/ "Tutorial zur Berechnnung von Isochronen") und die [Videos](../../videos/ "Zu den GOAT Videos") ansehen.


#### Referenzen

J. F. de Queiroz Neto, E. M. d. Santos, and C. A. Vidal. “MSKDE - Using
Marching Squares to Quickly Make High Quality Crime Hotspot Maps”. en.
In: 2016 29th SIBGRAPI Conference on Graphics, Patterns and Images (SIBGRAPI).
Sao Paulo, Brazil: IEEE, Oct. 2016, pp. 305–312. isbn: 978-1-5090-3568-7. doi:
10.1109/SIBGRAPI.2016.049. url: https://ieeexplore.ieee.org/document/
7813048/

https://fr.wikipedia.org/wiki/Marching_squares#/media/Fichier:Marching_Squares_Isoline.svg

Majk Shkurti, "Spatio-temporal public transport accessibility analysis and benchmarking in an interactive WebGIS", Sep 2022. url: https://www.researchgate.net/publication/365790691_Spatio-temporal_public_transport_accessibility_analysis_and_benchmarking_in_an_interactive_WebGIS

Matthew Wigginton Conway,Andrew Byrd,Marco Van Der Linden. "Evidence-Based Transit and Land Use Sketch Planning Using Interactive Accessibility Methods on Combined Schedule and Headway-Based Networks", 2017. url: https://journals.sagepub.com/doi/10.3141/2653-06
