#!/bin/bash
if [ "$#" -ne 1 ]; then
    echo "Missing version number. Usage: $0 VERSION_NUMBER" > &2
    exit 1
fi

rm js/land_page.min.js
~/Downloads/minify_2.5.0_darwin_amd64/minify -o js/land_page.min.js js

rm css/land_page.min.css
~/Downloads/minify_2.5.0_darwin_amd64/minify -o css/land_page.min.css css
