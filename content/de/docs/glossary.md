---
title: Glossar   
permalink: "/de/docs/glossary/"
lang: de
sections:
- glossary
weight: 10
---




#### Aktive Mobilität
Aktive Mobilität bezieht sich auf Mobilitätsformen, die vom Menschen durch eigene Muskelkraft angetrieben werden, wie z.B. Gehen und Radfahren. Die Förderung der aktiven Mobilität ist ein wichtiger Bestandteil der nachhaltigen Verkehrswende, da sie die Autoabhängigkeit verringert und emissionsfrei ist. Aktive Mobilität hat auch viele soziale Vorteile, denn sie ist für alle kostenlos zugänglich, fördert die soziale Interaktion und ist gut für die Gesundheit, da sie unter anderem das Risiko von Übergewicht und Herz-Kreislauf-Erkrankungen senkt.
 
<p align="center">
<img src="/images/docs/technical_documentation/glossary/active_mobility_freepik.webp" alt="active_mobility" style="max-height:400px;"/>  
<p align="center">
<a href="http://www.freepik.com">Designed by pch.vector / Freepik</a>

#### Area of Interest (AOI)
Eine "Area of Interest" (AOI) ist eine geografische Fläche, die für eine bestimmte Studie oder Analyse von besonderem Interesse oder Bedeutung ist. Dabei kann es sich z.B. um eine Wasserfläche, einen Wald oder einen Park handeln. Die AOIs werden in der Regel durch Polygone definiert.

#### Digitales Planungswerkzeug
Ein digitales Planungswerkzeug ist ein Werkzeug zur Unterstützung von Planungs- und Entscheidungsprozessen in der Stadt- und Verkehrsplanung. Es nutzt Daten und Modelle, um Informationen zu verschiedenen Aspekten der Planung wie Flächennutzung, Verkehrsinrastruktur und Umweltauswirkungen bereitzustellen. Mit einem digitalen Planungswerkzeug können verschiedene Szenarien untersucht und die möglichen Auswirkungen bewertet werden.

#### Erreichbarkeit
Erreichbarkeit wurde erstmals 1959 als "das Potenzial an Interaktionsmöglichkeiten" definiert und bezieht sich auf die Einfachheit, mit der verschiedene Ziele von einem bestimmten Ort aus erreicht werden können ([Hansen, 1959](https://doi.org/10.1080/01944365908978307 "Zur Referenz")). Im Kontext von GIS und Stadtplanung bezieht es sich auf die Einfachheit, mit der Menschen wichtige Dienstleistungen wie Gesundheitseinrichtungen, Schulen oder Supermärkte erreichen können. 

Generell ist die Gewährleistung einer hohen Erreichbarkeit ein entscheidender Aspekt der Stadt- und Verkehrsplanung, da sie die Lebensqualität des Einzelnen und seine/ihre Mobilitätsentscheidungen maßgeblich beeinflusst. Erreichbarkeit kann durch verschiedene Indikatoren ausgedrückt werden, die darauf abzielen, die Erreichbarkeit auf verschiedenen räumlichen Ebenen und für verschiedene Verkehrsträger zu modellieren.

#### Erreichbarkeitsinstrument
Ein Erreichbarkeitsinstrument ist ein digitales Planungswerkzeug zur Berechnung und Analyse der Erreichbarkeit eines bestimmten Ortes oder einer Region. Es berücksichtigt Faktoren wie Mobilitätsoptionen, Entfernung und Reisezeit, um festzustellen, wie einfach die Menschen Zugang zu wichtigen Zielen des täglichen Bedarfs haben. Technisch basiert ein Erreichbarkeitsinstrument in der Regel auf GIS-Technologien, Routing-Algorithmen und verschiedenen Datenquellen.

#### Flächennutzung
Flächennutzung ist die Kategorisierung und Verwaltung von Landflächen entsprechend ihrer funktionalen Rolle. Dies umfasst eine Reihe von Nutzungen wie Wohnen, Gewerbe, Industrie, Natur und Freizeitflächen. Darüber hinaus umfasst die Flächennutzung auch Aspekte der Stadt- und Verkehrsplanung, da die Flächennutzung Faktoren wie die Bevölkerungsdichte, die Verteilung von Einrichtungen und die Verkehrsnachfrage maßgeblich beeinflusst. Folglich hat die Flächennutzung eine direkte Auswirkung auf die Erreichbarkeit.

<p align="center">
<img src="/images/docs/technical_documentation/glossary/landuse.webp" alt="Flächennutzung" style="max-height:300px;"/>  
<p align="center">

_Graphik: [Chatham House Sustainability Accelerator](https://accelerator.chathamhouse.org/article/land-use-challenges "Chatham House Sustainability Accelerator")_


#### H3-Gitter <img src="/images/docs/technical_documentation/glossary/H3_grid_logo.webp" alt="h3_grid_logo" style="max-height:80px;"/>  
Das H3-Gitter ist ein räumliches Indexierungssystem, das von Uber Technologies entwickelt wurde. Ziel ist es, die Erdoberfläche in ein hierarchisches Gitter aus hexagonalen Zellen zu unterteilen, um eine effizientere und genauere Darstellung und Analyse räumlicher Daten zu ermöglichen. Das H3-Gitter verwendet hexagonale Kacheln, die auf einem Ikosaeder basieren und eine hierarchische Struktur mit mehreren Auflösungsebenen schaffen. Die hexagonale Form ermöglicht eine äquidistante und konsistente räumliche Darstellung mit unterschiedlichen Auflösungen. 

Die Auflösung 10 (ca. 75m Kantenlänge) wird in GOAT für die Berechnung von Reisezeiten verwendet und die Auflösung 9 (ca. 200m Kantenlänge) oder höher für die Visualisierung von Heatmaps. Die Werte werden von der höheren zur niedrigeren Auflösung durch Mittelwertbildung aggregiert.
<p align="center">
<img src="/images/docs/technical_documentation/glossary/H3_grid.webp" alt="H3-Gitter von Uber" style="max-height:250px;center"/>  
<p align="center">

_Graphik: [Uber](https://eng.uber.com/h3/ "Uber H3-Gitter")_ 

#### Heatmap
Eine Heatmap ist eine grafische Visualisierungsform, die verschiedene Farben verwendet, um die unterschiedlichen Werte eines Datensatzes anzuzeigen. Dies ermöglicht ein schnelles Verständnis der dargestellten Daten. 

In GOAT verwenden wir unter anderem Heatmaps, um die lokale Erreichbarkeit (siehe [Heatmaps](/de/docs/heatmap/ "Dokumentation zu unseren Heatmap-Indikatoren")) von verschiedenen Einrichtungen wie Cafés, Restaurants oder Supermärkten zu analysieren. Die Heatmaps verwendeen eine Reihe von Farben, um verschiedene Erreichbarkeitswerte darzustellen. Diese Analysen geben Aufschluss über die Verteilung der Ziele und die verfügbare Verkehrsinfrastruktur.

#### Indikator
Ein Indikator ist ein Mittel zur quantitativen Analyse eines bestimmten Attributs oder einer bestimmten Thematik. Dies geschieht in der Regel nach einem standardisierten Verfahren, z.B. durch die Verwendung einer Formel. In der Planung können Indikatoren verwendet werden, um die aktuelle Situation zu bewerten, verschiedene Standorte miteinander zu vergleichen und die Fortschritte bei der Umsetzung bestimmter Ziele zu überwachen.

#### Isochrone
Eine Isochrone ist ein Indikator, der aufzeigt, wie weit sich Personen in einer bestimmten Reisezeit mit einer bestimmten Geschwindigkeit von einem ausgewählten Ort aus fortbewegen können. Isochronen können für jedes Verkehrsmittel berechnet werden, z.B. zu Fuß, mit dem Fahrrad, mit dem Auto oder mit öffentlichen Verkehrsmitteln. Je nach gewähltem Verkehrsmittel wird das entsprechende Verkehrsnetz verwendet.  

Weitere Informationen zur Isochronenberechnung finden Sie in unserer [Indikator-Dokumentation](/de/docs/isochrone/ "Isochronen-Dokumentation").

#### Konnektivität
Die Konnektivität bezieht sich auf den Grad der Vernetzung der Wege untereinander. Je höher die Dichte der Wege und Kreuzungen, desto höher die Konnektivität. Konnektivitätsbarrieren sind u.a. Flüsse, Eisenbahnlinien und Autobahnen.

Die Erreichbarkeit hängt direkt von der Konnektivität ab, denn sie ist entscheidend für die Reisezeit, um ein bestimmtes Ziel zu erreichen. Eine hohe Konnektivität ist besonders wichtig für aktive Verkehrsträger, da diese besonders empfindlich auf Umwege reagieren. Daher ist eine gute Konnektivität eine Grundvoraussetzung zur Förderung der nachhaltigen Mobilität und Gewährleistung der lokalen Erreichbarkeit von Dienstleistungen und Einrichtungen.


#### Lokale Erreichbarkeit
Die lokale Erreichbarkeit bezieht sich auf die Einfachheit, mit der Menschen Dienstleistungen und Einrichtungen in einem bestimmten Stadtteil oder Gebiet erreichen können ([Handy, 1992](http://www.jstor.org/stable/23288518 "Zur Referenz")). Sie bezieht sich in der Regel auf aktive Verkehrsmittel und kurze Entfernungen (vgl. Konzept "[Stadt der kurzen Wege](https://de.wikipedia.org/wiki/Stadt_der_kurzen_Wege "Was ist die Stadt der kurzen Wege?")"). 

#### Mikromobilität
Mikromobilität ist ein wachsender Trend im Stadtverkehr, der die Nutzung von kleinen, leichten Fahrzeugen wie E-Roller und Skateboards umfasst. Diese Verkehrsmittel bieten komfortable Mobilität für kurze Strecken, u.a. für die Überwindung der "letzten Meile".

<p align="center">
<img src="/images/docs/technical_documentation/glossary/micromobility_freepik.webp" alt="Mikromobilität" style="max-height:300px;"/>  
<p align="center">
<a href="http://www.freepik.com">Designed by pch.vector / Freepik</a>


#### Open Source <img src="/images/docs/technical_documentation/glossary/open_source.webp" alt="Open Source Entwicklung" style="max-height:60px;"/>  
Open Source bezieht sich auf Software oder andere Produkte, die der Öffentlichkeit zur Verfügung gestellt werden und deren Quellcode frei zugänglich und modifizierbar ist. Dies ermöglicht es Einzelpersonen und Organisationen, den Code nach Bedarf zu ändern und zu verbessern, ohne Einschränkungen bei der Nutzung oder Verbreitung.


#### Point of Interest (POI)
Ein "Point of Interest" (POI) bezieht sich auf einen bestimmten Standort oder ein punktuelles Objekt, das für eine Untersuchung oder Analyse von Bedeutung ist. Im Kontext von GOAT beziehen sich POIs hauptsächlich auf Einrichtungen des täglichen Bedarfs wie Supermärkte, Kindergärten oder Restaurants.

#### Quintil-Klassifizierung
Die Quintil-Klassifizierung ist eine in Geografischen Informationssystemen (GIS) häufig verwendete Methode zur Einteilung von Daten in gleichgroße Gruppen auf der Grundlage ihrer Werte. Diese Methode ist nützlich für die Visualisierung von Analyseergebnissen und zur Erkennung von Mustern.

In GIS wird die Quintil-Klassifizierung häufig zur Erstellung von Choropleth-Karten verwendet, d.h. von Karten, die verschiedene Werte einer Variablen farblich darstellen. Ein Beispiel hierfür ist eine Choroplethenkarte der Bevölkerungsdichte: die Karte wird in fünf farbcodierte Kategorien unterteilt, wobei jede Kategorie einen anderen Wertebereich der Bevölkerungsdichte darstellt. 

Die Erreichbarkeits-Heatmaps in GOAT verwenden eine Quintil-Klassifizierung, um die Erreichbarkeitswerte in "hoch" und "niedrig" zu klassifizieren. Für die Klassifizierung werden zunächst alle NULL-Werte auf "keine Erreichbarkeit" gesetzt und dann die Daten vom niedrigsten zum höchsten Wert sortiert. Die Daten werden in 6 gleich große Gruppen mit jeweils 20% der Gesamtdaten eingeteilt. Jeder Gruppe wird ein Rang zwischen 0 und 5 zugewiesen, wobei 0 der niedrigste Wert (keine Erreichbarkeit) und 5 der höchste Wert (sehr hohe Erreichbarkeit) ist.

<!--  #### Regional Accessibility
Regional accessibility refers to the ease with which people can access essential services across a larger region, such as a city or a county, usually with motorized modes, i.e. public transport and car. Based on panel data from the national travel survey, regional accessibility is determined by calculating the total number of residents who need access to and from a specific location within generally accepted travel times, such as 30 minutes by car and 45 minutes by public transportation for home-to-work travel and occasional shopping trips ([Straatemeier, 2008](https://doi.org/10.1016/j.tranpol.2007.10.002 "Visit Reference")).   

OR

Regional accessibility is a fundamental aspect of urban and regional planning. It involves the deliberate design and implementation of transportation networks and infrastructure to ensure convenient and efficient travel within and between regions. Effective planning considers factors such as road networks, public transportation systems, pedestrian-friendly design, and digital connectivity to enhance accessibility for all residents. By incorporating regional accessibility into planning concepts, communities can foster equitable access to employment, education, healthcare, and other essential services, ultimately improving the overall livability and sustainability of the region. -->

#### Routing <img src="/images/docs/technical_documentation/glossary/routing_logo.webp" alt="Routing" style="max-height:80px;"/>  
Routing ist der Prozess der Suche nach dem schnellsten oder kürzesten Weg von einem Ort zu einem anderen. Routing wird häufig in der Verkehrsplanung und in Navigationssystemen verwendet, um Menschen zu helfen, von Punkt A nach Punkt B zu gelangen, ist aber auch für Erreichbarkeitsanalysen von entscheidender Bedeutung.

#### Nachhaltigkeit <img src="/images/docs/technical_documentation/glossary/sustainability.webp" alt="Nachhaltigkeit" style="max-height:80px;"/>  
Nachhaltigkeit bedeutet, die Bedürfnisse der Gegenwart so zu befriedigen, dass die Möglichkeiten zukünftiger Generationen nicht eingeschränkt werden. Im Kontext der Stadt- und Regionalentwicklung bedeutet Nachhaltigkeit ein Gleichgewicht zwischen wirtschaftlichen, sozialen und ökologischen Faktoren, um lebenswerte und resiliente Räume zu schaffen. Dazu gehören die Verringerung von Emissionen, die Förderung aktiver Mobilität und die Erhaltung der natürlichen Ressourcen.

#### Verkehrsmittel
Das Verkehrsmittel bezieht sich auf die Art der Fortbewegung, die für eine bestimmte Reise oder Fahrt gewählt wird. Dies können z.B. Bus, Zug, U-Bahn, Fahrrad, zu Fuß oder Auto sein. Die Wahl des Verkehrsmittels kann erhebliche Auswirkungen auf Faktoren wie Reisezeit, Kosten und Umweltbelastung haben.


### Referenzen
Hansen, W.G. (1959). How accessibility shapes land use. Journal of the American Institute of Planners. 25, 73–76.
https://doi.org/10.1080/01944365908978307 

Handy, S. L. (1992). Regional Versus Local Accessibility: Neo-Traditional Development and its Implications for Non-work Travel. Built Environment (1978-), 18(4), 253–267. http://www.jstor.org/stable/23288518 

<!-- Straatemeier, T. (2008). How to plan for regional accessibility?. Transport Policy, 15(2), 127-137. 
https://doi.org/10.1016/j.tranpol.2007.10.002  -->
