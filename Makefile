
install:
	rm -rf ${PWD}/node_modules/*
	rm -rf ${PWD}/src/assets/downloads/
	yarn install
	mkdir ${PWD}/src/assets/downloads/
	mkdir ${PWD}/src/assets/downloads/demos/
	mkdir ${PWD}/src/assets/downloads/live/
	wget -P ${PWD}/src/assets/downloads/demos/ https://1drv.ms/u/s!Am-cbELY15H5geokQmFR6klmlLi3yQ?e=CpsYbO
	wget -P ${PWD}/src/assets/downloads/live/ https://1drv.ms/u/s!Am-cbELY15H5geojkly1Lj9Fj79ntw?e=eOQ2IW
	mv src/server.config.example.js src/server.config.js
clean:
	rm -rf ${PWD}/node_modules/*
	rm -rf ${PWD}/src/assets/downloads/*