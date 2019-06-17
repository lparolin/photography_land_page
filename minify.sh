#!/bin/bash
rm js/land_page.min.js
~/Downloads/minify_2.5.0_darwin_amd64/minify -o js/land_page.min.js js

rm css/land_page.min.css
~/Downloads/minify_2.5.0_darwin_amd64/minify -o css/land_page.min.css css
