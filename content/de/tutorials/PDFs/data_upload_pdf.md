---
title: Hochladen eigener POI-Daten
permalink: "/de/tutorials/data_upload/"
weight: 80
sections:
- training
description: Schritt-für-Schritt-Anleitung für das Hochladen eigener Point-of-Interest-Datensätze.

---
# Hochladen eigener POI-Daten
![POIs in GOAT](../../../../static/images/tutorials/Tutorial_banners/data_upload_banner.webp "POIs in GOAT")

## Beschreibung des Features
In GOAT wird standardmäßig bereits ein Datensatz mit einer Vielzahl an Points-of-Interest (POIs) bereitgestellt. Falls Sie weitere POI-Datensätze in GOAT integrieren möchten, können Sie dies über die Funktion "Hochladen" tun. In diesem Tutorial sehen Sie, wie Sie mit QGIS Ihren eigenen POI-Layer erstellen und in GOAT integrieren. 
## Anleitung zur Erstellung eines eigenen Point-of-Interest-Datensatzes

1. Sie können Ihren eigenen Punktdatensatz in QGIS erstellen und in GOAT hochladen. Dazu müssen Sie einen neuen GeoPackage-Layer aus den in der Abbildung gezeigten Fenstern erstellen. Es empfiehlt sich, den GeoPackage-Layer zu verwenden, da er sich leicht als Shapefile exportieren lässt.

<img src="../../../../static/images/tutorials/Data_upload/qgis_data_upload10_en.webp" alt="Data Upload" style="max-height:400px;"/>

2. Nachdem Sie den Speicherort und den Namen der Datei festgelegt haben, können Sie die Spaltennamen, die in der Attributtabelle des Datensatzes enthalten sein sollen, im Abschnitt "Neue Felder" hinzufügen.
   
<img src="../../../../static/images/tutorials/Data_upload/qgis_data_upload2_en.webp" alt="Data Upload" style="max-height:400px;"/>

3. Um Punktdaten zu Ihrer Tabelle hinzuzufügen, aktivieren Sie den "Bearbeitungsmodus". 

<img src="../../../../static/images/tutorials/Data_upload/qgis_data_upload3_en.webp" alt="Data Upload" style="max-height:400px;"/>

4. Nun können Sie neue Punkte über die Funktion "Punkt hinzufügen" hinzufügen.

<img src="../../../../static/images/tutorials/Data_upload/qgis_data_upload4_en.webp" alt="Data Upload" style="max-height:400px;"/>

5. Sie können einen Punkt erstellen, indem Sie in die Karte hineinzoomen und auf den entsprechenden Standort klicken.

<img src="../../../../static/images/tutorials/Data_upload/qgis_data_upload6_en.webp" alt="Data Upload" style="max-height:400px;"/>

6. Nachdem Sie Ihre Punktdaten hinzugefügt haben, geben Sie deren Attribute ein (Kategorie, Name, Straße, Postleitzahl usw.). Durch klicken auf "OK" bestätigen Sie ihre Eingabe.

<img src="../../../../static/images/tutorials/Data_upload/qgis_data_upload5_en.webp" alt="Data Upload" style="max-height:400px;"/>

7. Nachdem Sie Ihre Punkte hinzugefügt haben, können Sie über die Attributtabelle auf sie zugreifen und sie bearbeiten.

<img src="../../../../static/images/tutorials/Data_upload/qgis_data_upload7_en.webp" alt="Data Upload" style="max-height:400px;"/>

8. Sie können die Punktdaten, die Sie erstellt haben, als Shapefile oder GeoJSON exportieren. Klicken Sie dazu mit der rechten Maustaste auf den Layer und wählen Sie "Feature speichern unter". 

<img src="../../../../static/images/tutorials/Data_upload/qgis_data_upload8_en.webp" alt="Data Upload" style="max-height:400px;"/>

9. Um den Layer als Shapefile zu exportieren, wählen Sie im Bereich "Format" die Option "Shapefile" und klicken Sie auf "OK".

<img src="../../../../static/images/tutorials/Data_upload/qgis_data_upload9_en.webp" alt="Data Upload" style="max-height:400px;"/>

10. Um den Layer als GeoJSON zu exportieren, wählen Sie im Bereich "Format" die Option "GeoJSON" und klicken Sie auf "OK".

<img src="../../../../static/images/tutorials/Data_upload/qgis_data_upload10_en.webp" alt="Data Upload" style="max-height:400px;"/>

## Schritt-für-Schritt-Anleitung für das Hochladen eigener Point-of-Interest-Datensätze

1. Klicken Sie im rechten Menü auf „Daten hochladen“.  

<img src="../../../../static/images/tutorials/Data_upload/user-data-upload.webp" alt="Datenupload" style="max-height:400px;"/>

2. Bereiten Sie die POI Daten als GeoJSON- oder Shapefile-Datei vor. Im Interface stehen Ihnen Templates hierzu bereit. Falls Sie mehrere POI Kategorien (z.B. Jugendzentren, Bikesharing-Stationen) hochladen möchten, dann erstellen Sie je Kategorie eine eigene Datei (d.h. in diesem Beispiel eine GeoJSON Datei mit den Jugendzentren und eine GeoJSON Datei mit den Bikesharing-Stationen). 

3. Klicken Sie auf das Plus-Symbol.

<img src="../../../../static/images/tutorials/Data_upload/plus.webp" alt="Datenupload" style="max-height:400px;"/>

4. Wählen Sie die POI-Kategorie, des Datensatzes aus. Hierbei können Sie entweder eine der bereits vordefinierten Kategorien wählen oder eine eigene Kategorie anlegen. 

<img src="../../../../static/images/tutorials/Data_upload/poi_category.webp" alt="Auswählen der POI-Kategorie" style="max-height:200px;"/>

5. Klicken Sie auf "Datei auswählen"

<img src="../../../../static/images/tutorials/Data_upload/browse_files.webp" alt="Datei hochladen" style="max-height:205px;"/>

6. Wählen Sie die Datei aus ihrem lokalen Ordner aus und laden diese hoch. 

<img src="../../../../static/images/tutorials/Data_upload/select_file.webp" alt="Datei auswählen" style="max-height:300px;"/>

7. Der hochgeladene Datensatz ist nun in Ihrem Datei Manager aufgelistet und kann über den Slider aktiviert werden. 

<img src="../../../../static/images/tutorials/Data_upload/file_manager.webp" alt="Datei Manager" style="max-height:300px;"/>

8. Wechseln Sie in das Menü "Filter Thematische Daten", dort ist ihr neuer Datensatz mit einem grünen Punkt markiert. Indem Sie die Checkbox anklicken, wird der Layer in die Karte geladen und Sie können Ihre hochgeladenen Daten sehen. 

<img src="../../../../static/images/tutorials/Data_upload/thematic_filter.webp" alt="Filter Thematische Daten" style="max-height:400px;"/>
