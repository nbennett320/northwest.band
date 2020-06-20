install:
	if command -v yarn ; then
		echo "yarn installed, installing dependencies"
		yarn install
	else
		echo "yarn not found, installing yarn"
		curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
		echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
		echo "yarn installed, installing dependencies"
		yarn install
	if -d ${PWD}/src/assets/downloads/ ; then
		echo "found downloads, cleaning directory"
		rm -rf ${PWD}/src/assets/downloads/*
	fi
	mkdir ${PWD}/src/assets/downloads/
	mkdir ${PWD}/src/assets/downloads/demos/
	mkdir ${PWD}/src/assets/downloads/live/
	echo "getting downloads"
	wget -P ${PWD}/src/assets/downloads/demos/ https://1drv.ms/u/s!Am-cbELY15H5geokQmFR6klmlLi3yQ?e=CpsYbO
	wget -P ${PWD}/src/assets/downloads/live/ https://1drv.ms/u/s!Am-cbELY15H5geojkly1Lj9Fj79ntw?e=eOQ2IW
	mv src/server.config.example.js src/server.config.js
clean:
	echo "removing node modules"
	rm -rf ${PWD}/node_modules/*
	echo "removing downloads"
	rm -rf ${PWD}/src/assets/downloads/*
	echo "removing build files"
	rm -rf ${PWD}/build
	echo "removing cached files"
	rm -rf ${PWD}/public/static
	rm public/precache* public/asset-manifest.json public/404.html