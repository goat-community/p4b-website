#!/bin/bash

# Convert path of images from absolute "/images" to relative "./static/images"
sed 's/\/images/.\/static\/images/' content/de/tutorials/isochrone.md > content/de/tutorials/isochrone_pdf.md

sed -i 's/## / /' content/de/tutorials/isochrone_pdf.md

# Convert md to html
grip content/de/tutorials/isochrone_pdf.md --export isochrone.html

# Convert html to pdf
wkhtmltopdf isochrone.html isochrone.pdf
