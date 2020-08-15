(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, description, author, version, license, homepage, private, keywords, repository, bugs, contributors, scripts, husky, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"codytolene-github-io\",\"description\":\"Cody Tolene's Personal Angular Website\",\"author\":\"Cody Tolene\",\"version\":\"1.0.0\",\"license\":\"AGPL-3.0\",\"homepage\":\"https://www.codytolene.com\",\"private\":true,\"keywords\":[\"Cody\",\"Tolene\",\"Personal\",\"Website\"],\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/CodyTolene/codytolene.github.io.git\"},\"bugs\":{\"url\":\"https://github.com/CodyTolene/codytolene.github.io/issues\"},\"contributors\":[\"Cody Tolene (https://www.codytolene.com)\"],\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve --open\",\"build\":\"ng build\",\"build:prod\":\"ng build --prod\",\"test\":\"ng test\",\"test:silent\":\"ng test --watch=false\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\",\"pwa\":\"http-server -p 8080 -c-1 docs\",\"prettier\":\"prettier --write e2e/src/**/*.{ts,js,css,scss,html} src/**/*.{ts,js,css,scss,html}\"},\"husky\":{\"hooks\":{\"pre-commit\":\"npm run prettier --staged && ng lint && npm run test:silent\",\"pre-push\":\"ng build --aot true\"}},\"dependencies\":{\"@angular/animations\":\"~10.0.9\",\"@angular/common\":\"~10.0.9\",\"@angular/compiler\":\"~10.0.9\",\"@angular/core\":\"~10.0.9\",\"@angular/forms\":\"~10.0.9\",\"@angular/localize\":\"~10.0.9\",\"@angular/material\":\"^10.1.3\",\"@angular/platform-browser\":\"~10.0.9\",\"@angular/platform-browser-dynamic\":\"~10.0.9\",\"@angular/pwa\":\"^0.1001.0-next.5\",\"@angular/router\":\"~10.0.9\",\"@angular/service-worker\":\"~10.0.9\",\"@ng-bootstrap/ng-bootstrap\":\"^7.0.0\",\"bootstrap\":\"^4.5.0\",\"component\":\"^1.1.0\",\"rxjs\":\"~6.5.5\",\"tslib\":\"^2.0.0\",\"zone.js\":\"~0.10.3\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.1000.6\",\"@angular/cli\":\"~10.0.6\",\"@angular/compiler-cli\":\"~10.0.9\",\"@types/jasmine\":\"~3.5.0\",\"@types/jasminewd2\":\"~2.0.3\",\"@types/node\":\"^12.11.1\",\"codelyzer\":\"^6.0.0\",\"http-server\":\"^0.12.3\",\"jasmine-core\":\"~3.5.0\",\"jasmine-spec-reporter\":\"~5.0.0\",\"husky\":\"^4.2.5\",\"karma\":\"~5.0.0\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage-istanbul-reporter\":\"~3.0.2\",\"karma-jasmine\":\"~3.3.0\",\"karma-jasmine-html-reporter\":\"^1.5.0\",\"prettier\":\"2.0.5\",\"protractor\":\"~7.0.0\",\"ts-node\":\"~8.3.0\",\"tslint\":\"~6.1.0\",\"tslint-config-prettier\":\"^1.18.0\",\"typescript\":\"~3.9.5\"}}");

/***/ }),

/***/ "./src/core/core-routes.module.ts":
/*!****************************************!*\
  !*** ./src/core/core-routes.module.ts ***!
  \****************************************/
/*! exports provided: CoreRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutesModule", function() { return CoreRoutesModule; });
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.component */ "./src/core/core.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        children: [
            {
                loadChildren: () => __webpack_require__.e(/*! import() | pages-index-index-module */ "pages-index-index-module").then(__webpack_require__.bind(null, /*! ../pages/index/index.module */ "./src/pages/index/index.module.ts")).then((module) => module.IndexModule),
                path: '',
            },
            {
                loadChildren: () => __webpack_require__.e(/*! import() | pages-privacy-policy-privacy-policy-module */ "pages-privacy-policy-privacy-policy-module").then(__webpack_require__.bind(null, /*! ../pages/privacy-policy/privacy-policy.module */ "./src/pages/privacy-policy/privacy-policy.module.ts")).then((module) => module.PrivacyPolicyModule),
                path: 'privacy-policy',
            },
        ],
        component: _core_component__WEBPACK_IMPORTED_MODULE_0__["CoreComponent"],
        path: '',
    },
    {
        loadChildren: () => __webpack_require__.e(/*! import() | pages-not-found-not-found-module */ "pages-not-found-not-found-module").then(__webpack_require__.bind(null, /*! ../pages/not-found/not-found.module */ "./src/pages/not-found/not-found.module.ts")).then((module) => module.NotFoundModule),
        path: '404',
    },
    {
        path: '**',
        redirectTo: '404',
    },
];
class CoreRoutesModule {
}
CoreRoutesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CoreRoutesModule });
CoreRoutesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CoreRoutesModule_Factory(t) { return new (t || CoreRoutesModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreRoutesModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CoreRoutesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/core/core.component.ts":
/*!************************************!*\
  !*** ./src/core/core.component.ts ***!
  \************************************/
/*! exports provided: CoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreComponent", function() { return CoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class CoreComponent {
}
CoreComponent.ɵfac = function CoreComponent_Factory(t) { return new (t || CoreComponent)(); };
CoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoreComponent, selectors: [["app-core"]], decls: 1, vars: 0, template: function CoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-core',
                template: `<router-outlet></router-outlet>`,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/core/core.module.ts":
/*!*********************************!*\
  !*** ./src/core/core.module.ts ***!
  \*********************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_routes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core-routes.module */ "./src/core/core-routes.module.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core.component */ "./src/core/core.component.ts");









class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CoreModule, bootstrap: [_core_component__WEBPACK_IMPORTED_MODULE_6__["CoreComponent"]] });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _core_routes_module__WEBPACK_IMPORTED_MODULE_2__["CoreRoutesModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production,
            }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_core_component__WEBPACK_IMPORTED_MODULE_6__["CoreComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _core_routes_module__WEBPACK_IMPORTED_MODULE_2__["CoreRoutesModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                bootstrap: [_core_component__WEBPACK_IMPORTED_MODULE_6__["CoreComponent"]],
                declarations: [_core_component__WEBPACK_IMPORTED_MODULE_6__["CoreComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _core_routes_module__WEBPACK_IMPORTED_MODULE_2__["CoreRoutesModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"].register('ngsw-worker.js', {
                        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production,
                    }),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    version: __webpack_require__(/*! ../../package.json */ "./package.json").version + '-dev',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/core.module */ "./src/core/core.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\codya\OneDrive\Desktop\Repositories\codytolene.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map