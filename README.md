## Cody Tolene's Personal Website ([View](https://www.codytolene.com))

### Technologies Used
- [Angular](https://angular.io/) (v7.2.0)
- [Bootstrap](https://getbootstrap.com/) (v4.3.1)
- [Fastly](https://www.fastly.com/)
- [GitHub Pages](https://pages.github.com/)
- [Google Analytics](https://analytics.google.com/analytics/web/)
- [Google Tag Manager](https://tagmanager.google.com/)
- [jQuery](https://jquery.com/) (v3.4.0)
- [Ruby](https://www.ruby-lang.org/en/)
- [Ruby on Rails](https://rubyonrails.org/)
- [Varnish](http://varnish-cache.org/)
- [Webpack](https://webpack.js.org/)
- [Zone.js](https://github.com/angular/zone.js/)

### Getting Started
#### Web application build setup
Install [Node.js](https://nodejs.org/en/) and run the following at project root:
```
npm install
```

### Auto Compile SCSS/JS Global Files
#### Use NPM to auto-compile site assets (Gulp)
From 'development/scripts/\*\*/\*.js' to 'assets/scripts/global.min.js'.

From 'development/styles/\*\*/\*.scss' to 'assets/styles/global.min.css'.
```
npm run ac
```

### Angular (v7.2.0)
#### Use Angular CLI (v7.3.8) to compile the Angular application
From 'development/angular' to 'assets/angular/dist'.

For both production and development builds. Development build is auto compiled.
```
npm run ngdev
npm run ngprod
```
