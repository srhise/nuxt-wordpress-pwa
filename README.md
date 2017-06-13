
# wp-vue-ssr

> A vue.js server side rendered app that connects to Wordpress

# Example Deployment
https://wp-vue-ssr-ecosykhleo.now.sh 

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
