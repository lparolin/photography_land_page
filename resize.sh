#!/bin/bash

declare -a dimension_array=("480" "800" "1200" "1500" "2000" "2500")

function get_base_name_of_file () {
    in_file_name=${1}
    file_name=${in_file_name##*/}
    base_file_name=${file_name%%.*}
    echo ${base_file_name}
}

function resize_webp () {
    in_file_name=${1}
    base_file_name=$(get_base_name_of_file ${in_file_name})

    echo "Converting ${in_file_name} to jpg"

    for i_dimension in "${dimension_array[@]}"
    do
        #echo "convert ${in_file_name} -quality 50 -resize ${i_dimension} -define webp:lossles=false ${base_file_name}_${i_dimension}_px.webp"
        convert ${in_file_name} -quality 50 -resize ${i_dimension} -define webp:lossles=false ${base_file_name}_${i_dimension}_px.webp
    done
}

function resize_jpg () {
    in_file_name=${1}
    base_file_name=$(get_base_name_of_file ${in_file_name})

    echo "Converting ${in_file_name} to jpg"

    for i_dimension in "${dimension_array[@]}"
    do
        convert ${1} -resize ${i_dimension} ${base_file_name}_${i_dimension}px.jpg
    done
}

for i_file in `find . -name "*.jpg"`; do resize_webp ${i_file} ;
done

for i_file in `find . -name "*.jpg"`; do resize_jpg $i_file ;
done
