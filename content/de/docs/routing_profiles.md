---
title: Routing Profile
permalink: "/de/docs/routing_profiles/"
lang: de
sections:
- technical
weight: 80

---
Da GOAT auf aktive Mobilität ausgelegt ist, sind Straßen, die nur für Autos ausgelegt sind (z. B. Autobahnen) standardmäßig vom Routingnetz ausgeschlossen.  
 Dies kann zusätzlich bei der Einrichtung der Applikation angepasst werden. Abhängig von der Datengenauigkeit im Untersuchungsgebiet und dem Zweck der GOAT-Version stehen unterschiedliche Routingprofile zur Verfügung.  
   
 Beim Einrichten einer eigenen GOAT-Version können die verfügbaren Routing-Profile und die entsprechenden Standardgeschwindigkeiten in den Konfigurationsdateien beim Einrichten von GOAT angepasst werden. Die Geschwindigkeit kann zudem direkt in der Benutzeroberfläche eingestellt werden.

#### Fußverkehr

<b>Standard</b>

Standard-Routing-Profil für Fußgänger, das alle zu Fuß erreichbaren Wege berücksichtigt.

Voreingestellte Geschwindigkeit: 5km/h

<b>Ältere Menschen</b>

Wie das Standard-Routing-Profil, jedoch mit einer reduzierten Gehgeschwindigkeit von 3 km/h.

#### Radverkehr

<b>Standard</b>

Standard-Routenprofil für den Radverkehr, das alle mit dem Fahrrad befahrbaren Wege berücksichtigt.

Voreingestellte Geschwindigkeit: 15km/h

Je nach Oberfläche, Glätte und Neigung der verschiedenen Straßenabschnitte wird die Fahrgeschwindigkeit entsprechend angepasst.

<b>Pedelec</b>

Wie das Standard-Routing-Profil, jedoch mit einer erhöhten Fahrgeschwindigkeit von 23 km/h.

Bei Pedelecs werden Steigungen mit einer geringeren Impedanz berücksichtigt als bei Standard-Fahrrädern.

#### Rollstuhl

Die Rollstuhlroutenführung orientiert sich an der Gehroutenführung, berücksichtigt allerdings lediglich barrierefreie Wege und Ziele. Treppen, unbefestigte Wege und Wege mit hohen Steigungen sind von der Trassenführung ausgenommen. Nicht barrierefreie POIs werden mit grauen Icons visualisiert und gelten bei Auswahl des Rollstuhl-Routenprofils als nicht zugänglich.

Über den Layer «Wheelchair Usability» (zu finden in den Street Level Quality-Layern) können die Bedingungen hinsichtlich der Barrierefreiheit der Wege dargestellt werden.

Dieses Routingprofil hilft, Schwachstellen im barrierefreien Netz einer Stadt zu finden. Die Bedeutung einer barrierefreien Infrastruktur gewinnt vor dem Hintergrund des demografischen Wandels in vielen Gesellschaften immer mehr an Bedeutung. Zudem ist ein hoher Prozentsatz der Bevölkerung vorübergehend in ihrer Mobilität eingeschränkt (z. B. durch Schieben eines Kinderwagens oder das Tragen von schwerem Gepäck). All diese Menschen und Bedürfnisse müssen bei der Planung der Infrastruktur für aktive Mobilität berücksichtigt werden.