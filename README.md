## Cody Tolene's Personal Website ([View](https://www.codytolene.com))
Below I will explain how to compile this repository for your own GitHub Pages.


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
