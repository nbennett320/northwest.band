ls -1 *.jpg | xargs -n 1 bash -c 'convert -strip -interlace Plane -gaussian-blur 0.05 -quality 50% "$0" "${0%.*}.jpg"'
