---
title: Upload of custom POI-data
permalink: "/de/tutorials/data_upload/"
weight: 70
sections:
- training
description: Step-by-step tutorial for uploading POI data

---
![POIs in GOAT](/images/tutorials/Tutorial_banners/data_upload_banner.webp "POIs in GOAT")

#### Description of the feature
In GOAT, a dataset with a variety of Points-of-Interest (POIs) is already provided by default. If you wish to integrate further POI data sets into GOAT, you can do so via the "Upload" function. In this tutorial you can see how to create your own POI layer by using QGIS and integrate it in GOAT. 

#### Step-by-step guideline for creating your own Points-of-Interest data set

1. You can create your own point data from QGIS and upload it to GOAT. For this, you must create a new geopackage layer from the windows shown in the figure. It is recommended to use the GeoPackage layer because it can then be easily exported as a shapefile.

<img src="\images\tutorials\Data_upload\qgis_data_upload10_en.webp" alt="Data Upload" style="max-height:400px;"/>

2. After specifying where to save the file and its name, you can add the column names you want to be in the attribute table of the dataset from the new field section.

<img src="\images\tutorials\Data_upload\qgis_data_upload2_en.webp" alt="Data Upload" style="max-height:400px;"/>

3. To add point data to your dataset, make sure you activated the "editing mode". 

<img src="\images\tutorials\Data_upload\qgis_data_upload3_en.webp" alt="Data Upload" style="max-height:400px;"/>

4. After enabling this mode, you can add new points from "add point feature".

<img src="\images\tutorials\Data_upload\qgis_data_upload4_en.webp" alt="Data Upload" style="max-height:400px;"/>

5. Now you can create the point by zooming in and clicking on the point you want to add to the map.

<img src="\images\tutorials\Data_upload\qgis_data_upload6_en.webp" alt="Data Upload" style="max-height:400px;"/>

6. After adding your point data, fill in its properties(category, name, street, zipcode etc.). Once you click "OK", the point will be added.

<img src="\images\tutorials\Data_upload\qgis_data_upload5_en.webp" alt="Data Upload" style="max-height:400px;"/>

7. After you finish adding your points, you can access & edit your points from the attribute table.

<img src="\images\tutorials\Data_upload\qgis_data_upload7_en.webp" alt="Data Upload" style="max-height:400px;"/>

8. As a result you can export the point data that you created as a shapefile or GeoJSON. Right click on the layer and select "Save Feature As". 

<img src="\images\tutorials\Data_upload\qgis_data_upload8_en.webp" alt="Data Upload" style="max-height:400px;"/>

9. To export as a shapefile, select the shapefile option in the "format" section and click "OK".

<img src="\images\tutorials\Data_upload\qgis_data_upload9_en.webp" alt="Data Upload" style="max-height:400px;"/>

10. To export as a GeoJSON, select the GeoJSON option in the "format" section and click "OK".

<img src="\images\tutorials\Data_upload\qgis_data_upload10_en.webp" alt="Data Upload" style="max-height:400px;"/>

#### Step-by-step guideline for uploading your own Point of Interest data set to GOAT

1. Click on "User Data Upload" in the right menu. 

<img src="/images/tutorials/Data_upload/user-data-upload_en.webp" alt="Data Upload" style="max-height:400px;"/>
   
2. Prepare the POI data as a GeoJSON file. Templates for this are available in the interface. If you want to upload multiple POI categories (e.g. youth centres, bikesharing stations), then create a separate file for each category (i.e. in this example a GeoJSON file with the youth centres and a GeoJSON with the bikesharing stations).

3. Click on the "plus" symbol.

<img src="/images/tutorials/Data_upload/plus_en.webp" alt="Datenupload" style="max-height:400px;"/>

4. Select the POI category of the dataset. You can either choose one of the predefined categories or create your own.

<img src="/images/tutorials/Data_upload/poi_category_en.webp" alt="Select POI category" style="max-height:200px;"/>

<img src="/images/tutorials/Data_upload/data_upload1_en.webp" alt="Select POI category" style="max-height:200px;"/>


5. Click on "Browse your files".
   
<img src="/images/tutorials/Data_upload/browse_files_en.webp" alt="Upload file" style="max-height:200px;"/>

6. Select the file from your local folder and upload it. 

<img src="/images/tutorials/Data_upload/select_file.webp" alt="Datei auswählen" style="max-height:300px;"/>

7. The uploaded data set is now listed in your file manager and can be activated via the slider. 

<img src="/images/tutorials/Data_upload/file_manager_en.webp" alt="Data manager" style="max-height:300px;"/>

8. Switch to the menu "Filter Thematic Data", there your new data set is marked with a green dot. By clicking the checkbox, the layer is loaded into the map and you can see your uploaded data. 

<img src="/images/tutorials/Data_upload/thematic_filter_en.webp" alt="Filter thematic data" style="max-height:400px;"/>
