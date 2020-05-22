
install:
	rm -rf ${PWD}/node_modules/*
	rm -rf ${PWD}/src/downloads/
	yarn install
	mkdir ${PWD}/src/downloads/
	mkdir ${PWD}/src/downloads/demos/
	mkdir ${PWD}/src/downloads/live/
	wget -P ${PWD}/downloads/demos/ https://1drv.ms/u/s!Am-cbELY15H5geokQmFR6klmlLi3yQ?e=CpsYbO
	wget -P ${PWD}/downloads/live/ https://1drv.ms/u/s!Am-cbELY15H5geojkly1Lj9Fj79ntw?e=eOQ2IW