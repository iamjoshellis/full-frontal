# Full Frontal

A boilerplate for the front-end, built based on projects I've built and large sections pinched from elsewhere - including, but not limited to:

* [Sage](https://github.com/roots/sage)
* [html5bp](https://html5boilerplate.com/)
* [Responsive Typography With Sass Maps](https://www.smashingmagazine.com/2015/06/responsive-typography-with-sass-maps/)
* [Susy](http://susy.oddbird.net/)

## Requirements

| Prerequisite    | How to check | How to install
| --------------- | ------------ | ------------- |
| Node.js 0.12.x  | `node -v`    | [nodejs.org](http://nodejs.org/) |
| gulp >= 3.8.10  | `gulp -v`    | `npm install -g gulp` |
| Bower >= 1.3.12 | `bower -v`   | `npm install -g bower` |

## Features

* [gulp](http://gulpjs.com/) build script that compiles both Sass and Less, checks for JavaScript errors, optimizes images, and concatenates and minifies files
* [BrowserSync](http://www.browsersync.io/) for keeping multiple browsers and devices synchronized while testing, along with injecting updated CSS and JS into your browser while you're developing
* [Bower](http://bower.io/) for front-end package management
* [asset-builder](https://github.com/austinpray/asset-builder) for the JSON file based asset pipeline
* [wiredep](https://github.com/taptapship/wiredep) Automatically inject Sass and Less dependencies from Bower into the main stylesheet.
* [jshint-stylish](https://github.com/sindresorhus/jshint-stylish) Stylish reporter for JSHint. (Get told off when yo' JavaScript is sloppy!)
* [EditorConfig](http://editorconfig.org/) Maintain consistent coding styles between different editors and IDEs. (Enforce indent style, spaces or tabs etc.)

## Installation

From the command line:

1. Install [gulp](http://gulpjs.com) and [Bower](http://bower.io/) globally with `npm install -g gulp bower`
2. Navigate to the theme directory, then run `npm install`
3. Run `bower install`

You now have all the necessary dependencies to run the build process.

### Available gulp commands

* `gulp` — Compile and optimize the files in your assets directory
* `gulp watch` — Compile assets when file changes are made
* `gulp --production` — Compile assets for production (no source maps).

### Local Web Server

Need a local http server to try it out?

1. Install once with `npm install http-server -g`
2. Start with `http-server`

### Using BrowserSync

To use BrowserSync during `gulp watch` you need to update `devUrl` at the bottom of `assets/manifest.json` to reflect your local development hostname.

For example, if your local development URL is `http://project-name.dev` you would update the file to read:
```json
...
  "config": {
    "devUrl": "http://project-name.dev"
  }
...
```
The default is `http://127.0.0.1:8080` which should work with the default `http-server` address.

### Installing Dependencies with Bower

1. `bower install --save package-name` or add it to [`bower.json`](bower.json).
2. `gulp`

You're done! (Assuming the packages `bower.json` file is correctly set up).
More info - [Bower docs](https://bower.io/docs/api/).

## Contributing

Contributions are welcome from everyone. We have [contributing guidelines](CONTRIBUTING.md) to help you get started.
