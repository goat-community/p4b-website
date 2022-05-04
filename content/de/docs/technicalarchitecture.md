---
title: Technical Architecture
permalink: "/de/docs/technicalarchitecture/"
lang: de
sections:
- about
weight: 30

---
#### Struktur und Umgebung

GOAT ist technisch gesehen eine WebGIS- Anwendung. Die Architektur von GOAT beinhaltet verschiedene Software, einschließlich einer Reihe von Bibliotheken und Programmiersprachen. Das effiziente Zusammenspiel von Software in GOAT wird durch die beliebte klassische Server-Client-Architektur des Web ermöglicht. Wie viele Anwendungen heutzutage verfügt GOAT über eine Datenbank, die eine effiziente Speicherung und Organisation von Informationen ermöglicht. Informationen können somit entsprechend abgerufen, verwaltet und aktualisiert werden.

Als Datenbank wird PostgreSQL und die räumliche Erweiterung PostGIS verwendet. Beide zusammen bilden den Kern der Anwendung.

Als Datenbank wird PostgreSQL und die räumliche Erweiterung PostGIS verwendet. Beide zusammen bilden den Kern der Anwendung.

![](/images/docs/about/libraries_used.webp)

Zusätzlich erlaubt die zugrunde liegende Datenbank mit Hilfe der Erweiterung pgRouting das Routing und die Berechnung der Isochronen. Die meisten räumlichen Operationen in GOAT werden in Spatial SQL mit der prozeduralen Programmiersprache Pl/pgSQL und Python als Pl/Python ausgeführt.  
Geoserver werden verwendet, um Geodaten mit dem Web zu teilen. Der Geoserver kommuniziert darüber hinaus direkt mit der Datenbank und stellt diese Daten dem Web zur Verfügung. Dies geschieht mit den standardisierten Diensten WFS, WFS-T und WMS. Der Geoserver läuft mit Tomcat in einem Docker Container.  
In Fällen, in denen eine stärker anpassbare Interaktion mit den Geodaten erforderlich ist, wird ein NodeJS-Server verwendet.

![](/images/docs/about/server_client_architecture.webp)

Im Front-End werden die Daten mit Hilfe der Openlayers- Bibliothek über den gebräuchlichen Webstack (HTML, CSS, JavaScript) abgerufen.  
Alle in GOAT verwendeten Software sind Open Source und haben eine große weltweite Akzeptanz und Reputation. Dieses Setup wurde ursprünglich auf einem Ubuntu Server 18. 04 Rechner getestet, aber das gleiche könnte auch auf anderen Linux-Distributionen verwendet werden, mit ein paar Anpassungen am Setup.  
Das Entwicklungs-Setup wird mit Hilfe einer VM, die von Vagrant gesteuert wird, für Entwicklungs-, Test- und lokale Nutzung konzipiert. Auf diese Weise kann GOAT mühelos auf jedem Betriebssystem installiert werden.

#### Daten

GOAT kann praktisch alle Arten von Daten nutzen, die aktuelle Datenbetriebstechnik konzentriert sich jedoch auf die Nutzung von OpenStreetMap (OSM) -Daten. OSM wurde als Hauptdatenquelle verwendet, da es die bekannteste offene Geodatenquelle ist. OSM ist zudem ein standardisiertes Datenschema mit allgegenwärtiger Verfügbarkeit. Das automatische Setup unterstützt bereits benutzerdefinierte Landnutzungs- und Bevölkerungsdaten, so dass andere Datentypen effektiv in die Datenbank eingefügt werden können.  
   
Für die Aufbereitung der Daten werden SQL- und Python-Skripte verwendet. Neben der Extraktion von POIS, Haltestellen des öffentlichen Verkehrs und Landnutzung ermöglicht das Setup auch die Disaggregation von Bevölkerungsdaten mit Hilfe von Verwaltungs-, Landnutzungs- und OSM-Daten. Während der Disaggregation kann GOAT Verwaltungsdaten in unterschiedlichen Auflösungen verarbeiten. Generell gilt: Je besser die OSM-Gebäudedaten und die Verwaltungsdaten sind, desto besser ist das Ergebnis der Disaggregation.  
OSM ist ein offener Geodatensatz, daher hängt die Qualität der Daten und Analysen von der Aktivität der lokalen OSM-Community ab. Dies befugt und lädt alle Personen und Organisationen ein, Tools wie GOAT einsetzen, um die lokalen OSM-Daten zu verbessern.