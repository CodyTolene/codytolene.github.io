# Cody Tolene's Personal Website ([View](https://www.codytolene.com))
### About
This website repo was specifically designed to work with GitHub Pages using a wide variety of software stacks and resources. Using the NPM & Gulp tasks I've set up within, I compile the application code from the corresponding root folders into the sites "www" folder to be consumed by the web application. These compilations consist of both development and production builds. The development builds output ".dev" files for site testing and debugging while the production builds output ".min" files for final release.



## Workspace Setup
Install [Node.js](https://nodejs.org/en/) and run the following at project root:
```
npm install
```



## Compile SCSS/JS Global Files (npm)
Compile all files within "styles/\*\*/\*.scss" into "www/styles/\*\*/\*.<min/dev>.css".

Compile all files within "scripts/\*\*/\*.js" into "www/scripts/\*\*/\*.<min/dev>.js".
#### Single Builds
Run the following to initiate a single **development** build:
```
npm run dev
```
Run the following to initiate a single **production** build:
```
npm run prd
```
#### Auto-Compile Builds
Run the following to initiate an auto-compiled **development** build with a **watch**:
```
npm run devac
```
Run the following to initiate an auto-compiled **production** build with a **watch**:
```
npm run prdac
```



## Compile Angular (v7.2.0) using Angular CLI (v7.3.8)
Compile all files within "angular" to "www/angular/dist".

Run the following to initiate an auto-compiled **development** build with a **watch**:
```
npm run ngdev
```
Run the following to initiate a single **production** build:
```
npm run ngprd
```



## Important Notes
- When testing the site using development builds, you will have to update the ".html" file(s) JavaScript and CSS imports to be ".dev" instead of ".min". Ignore vendor folder files, they are static.
- I recommend using VS Code over Visual Studio for this repo's workspace.
- If you're using VS Code, install the extension "Live Server" to spin-up of the site; very useful for quick builds.
- You are welcome to use this repo/site code for setting up your own GitHub Pages website. Happy coding!

## Resources & Technologies Used
- [Angular](https://angular.io/) (v7.2.0)
- [Angular CLI](https://cli.angular.io/) (v7.3.8)
- [Bootstrap](https://getbootstrap.com/) (v4.3.1)
- [Fastly](https://www.fastly.com/)
- [Font Awesome](https://fontawesome.com/)
- [GitHub Pages](https://pages.github.com/)
- [Google Analytics](https://analytics.google.com/analytics/web/)
- [Google Fonts](https://fonts.google.com/)
- [Google Tag Manager](https://tagmanager.google.com/)
- [Gulp.js](https://gulpjs.com/)
- [JavaScript](https://www.javascript.com/)
- [jQuery](https://jquery.com/) (v3.4.0)
- [Node.js](https://nodejs.org/en/)
- [Ruby](https://www.ruby-lang.org/en/)
- [Ruby on Rails](https://rubyonrails.org/)
- [Sass](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Varnish](http://varnish-cache.org/)
- [Webpack](https://webpack.js.org/)
- [Zone.js](https://github.com/angular/zone.js/)
