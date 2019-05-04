# Cody Tolene's Personal Website ([View](https://www.codytolene.com))
### About
This website repo was specifically designed to work with GitHub Pages using a wide variety of software stacks and resources. Using the NPM & Gulp tasks I've set up within, I compile the application code from the corresponding root folders into the sites "www" folder to be consumed by the web application. Mentioned compiles consist of automated development and production builds which output files for either site testing and debugging or final release.



## Workspace Setup
Install [Node.js](https://nodejs.org/en/) and run the following at project root using a CLI:
```
npm install
```



## Compile Site SCSS/JS Files (NPM/Gulp)
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



## Compile Site Angular (v7.2.0) using Angular CLI (v7.3.8)
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
- If you're using VS Code, install the extension "Live Server" to quickly spin-up up the site; very useful for rapid prototyping.
- You are welcome to use this repo/site code for setting up your own GitHub Pages website. Happy coding!



## Resources & Technologies Used
- [x] [Angular](https://angular.io/) (v7.2.0)
- [x] [Angular CLI](https://cli.angular.io/) (v7.3.8)
- [x] [Bootstrap](https://getbootstrap.com/) (v4.3.1)
- [x] [Cookie Consent](https://github.com/insites/cookieconsent)
- [x] [Fastly](https://www.fastly.com/)
- [x] [Font Awesome](https://fontawesome.com/)
- [x] [GitHub Pages](https://pages.github.com/)
- [x] [Google Analytics](https://analytics.google.com/analytics/web/)
- [x] [Google Fonts](https://fonts.google.com/)
- [x] [Google Tag Manager](https://tagmanager.google.com/)
- [x] [Gulp.js](https://gulpjs.com/)
- [x] [JavaScript](https://www.javascript.com/)
- [x] [jQuery](https://jquery.com/) (v3.4.0)
- [x] [Node.js](https://nodejs.org/en/)
- [ ] [React](https://reactjs.org/)
- [x] [Ruby](https://www.ruby-lang.org/en/)
- [x] [Ruby on Rails](https://rubyonrails.org/)
- [x] [Sass](https://sass-lang.com/)
- [x] [TypeScript](https://www.typescriptlang.org/)
- [x] [Varnish](http://varnish-cache.org/)
- [x] [Webpack](https://webpack.js.org/)
- [x] [Zone.js](https://github.com/angular/zone.js/)

## Special Thanks


