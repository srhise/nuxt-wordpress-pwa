
# wp-vue-ssr

> A vue.js server side rendered app that connects to Wordpress

<img width="1133" alt="screen shot 2017-06-13 at 7 09 23 pm" src="https://user-images.githubusercontent.com/914113/27108601-2a184758-506c-11e7-9b3a-828c2eb95dd9.png">


# Project URL
https://nuxtwp.now.sh

# Note on Deployment
Currently hits a WordPress site on a Laravel Forge server, working on moving to environment variable. Working on Readme and instructions on how to setup WP properly, but it works 100% out of the box besides need to setup CORS support. Uses the WP v2 APIs. See /api folder for more.

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
