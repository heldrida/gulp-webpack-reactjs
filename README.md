
	LMLD Reactjs Prototype
	======================

	A prototype, architecture and anim tests, related with the new lmld website, using gulp+webpack+webpack-dev-server

	Process:

		0) Initialised NPM package;
		1) Installed React and React DOM;
		2) Babel (The core, webpack loader and the react preset);
		3) Wrote the Webpack config file, that runs the entry js file through the defined loaders (babel and it's presets), outputs to the distribution path and finally runs the plugin `html webpack`, where it's `configuration parameters` injects the output into the body.
		4) Included BrowswerSync (using BS, so at the moment this doc was written there's no HMR Hot Module Reload support);

	References:

		> https://reactjsnews.com/bring-your-animations-to-life-with-physics
		> https://reactjsnews.com/an-angular-developers-first-react-app
		> https://github.com/kriasoft/react-starter-kit
		> https://github.com/wesbos/React-For-Beginners-Starter-Files
		> http://survivejs.com/webpack_react/developing_with_webpack/
		> http://eng.localytics.com/faster-sass-builds-with-webpack/
		> https://www.bensmithett.com/smarter-css-builds-with-webpack/
		> http://julienrenaux.fr/2015/03/30/introduction-to-webpack-with-practical-examples/
		> http://survivejs.com/webpack/developing-with-webpack/refreshing-css/
		> https://github.com/petehunt/react-howto
		> https://webpack.github.io/docs/stylesheets.html#separate-css-bundle
		> http://ihaveabackup.net/2015/08/17/sass-with-sourcemaps-webpack-and-live-reload/
		> http://jarstingstall.github.io/getting-started-with-webpack-part-4/
		> http://jmfurlott.com/setting-up-react-hot-loader/
		> http://www.jonathan-petitcolas.com/2016/01/23/webpack-html-plugin-in-a-nutshell.html