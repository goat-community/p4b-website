#!/bin/bash

rm -rf PDFs
mkdir PDFs

for filename in *.md; do
    # Convert path of images from absolute "/images" to relative "./static/images"
    sed 's/\/images/..\/..\/..\/..\/static\/images/' $filename > PDFs/${filename%.*}_pdf.md
    # Reduce header from #### to #
    sed -i 's/## / /' PDFs/${filename%.*}_pdf.md
done

