webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/age-result/age-result.component.css":
/***/ (function(module, exports) {

module.exports = "#picture{\r\n    padding: 20px;\r\n    display: block;\r\n    margin: 0 auto;\r\n    margin-top: 5px;\r\n    margin-bottom: 20px;\r\n    height: 292px;\r\n    -webkit-transfrom: scaleX(-1);\r\n    -webkit-transform: scaleX(-1);\r\n            transform: scaleX(-1);\r\n\r\n}\r\n\r\n#resultTextBlock {\r\n    width: 180px;\r\n    height: 60px;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; \r\n    font-size: 21px;\r\n    text-align: center;\r\n    line-height: 18px;\r\n    color:      #000000;\r\n    background-color:      #FFFFFF;\r\n    display: block;\r\n    margin: 0 auto;\r\n}"

/***/ }),

/***/ "./src/app/age-result/age-result.component.html":
/***/ (function(module, exports) {

module.exports = "<app-top-menu></app-top-menu>\r\n<img id=\"picture\" src=\"{{m_imgDataBASE64}}\">\r\n<p id=\"resultTextBlock\">\r\n  {{m_resultText}}"

/***/ }),

/***/ "./src/app/age-result/age-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgeResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("./src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgeResultComponent = /** @class */ (function () {
    function AgeResultComponent(AppService, Router) {
        this.AppService = AppService;
        this.Router = Router;
        this.m_ageGuess = 0;
    }
    AgeResultComponent.prototype.ngOnInit = function () {
        this.m_ageGuess = this.AppService.GetAgeGuess();
        this.m_imgDataBASE64 = this.AppService.GetBASE64();
        // console.log(this.m_imgDataBASE64);
        if (this.m_ageGuess <= 18) {
            this.m_resultText = "Wow - you look " + this.m_ageGuess + ". You're not even old enough to use this app.";
        }
        else if (this.m_ageGuess > 18 && this.m_ageGuess <= 35) {
            this.m_resultText = "Nice - " + this.m_ageGuess + ". In your prime.";
        }
        else if (this.m_ageGuess > 35 && this.m_ageGuess <= 55) {
            this.m_resultText = "You're really old - like " + this.m_ageGuess + " maybe?";
        }
        else if (this.m_ageGuess > 55) {
            this.m_resultText = this.m_ageGuess + ". Like at good bottle of wine you age with grace.";
        }
        else if (this.m_ageGuess == 0 || this.m_ageGuess == null) {
            this.m_resultText = "Hmm - something went wrong. Try again!";
        }
    };
    AgeResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-age-result',
            template: __webpack_require__("./src/app/age-result/age-result.component.html"),
            styles: [__webpack_require__("./src/app/age-result/age-result.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AgeResultComponent);
    return AgeResultComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__capture_image_capture_image_component__ = __webpack_require__("./src/app/capture-image/capture-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_image_process_image_component__ = __webpack_require__("./src/app/process-image/process-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splash_screen_splash_screen_component__ = __webpack_require__("./src/app/splash-screen/splash-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__age_result_age_result_component__ = __webpack_require__("./src/app/age-result/age-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_screen_main_screen_component__ = __webpack_require__("./src/app/main-screen/main-screen.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'take-picture', component: __WEBPACK_IMPORTED_MODULE_2__capture_image_capture_image_component__["a" /* CaptureImageComponent */] },
    { path: 'proces-picture', component: __WEBPACK_IMPORTED_MODULE_3__process_image_process_image_component__["a" /* ProcessImageComponent */] },
    { path: 'splash-screen', component: __WEBPACK_IMPORTED_MODULE_4__splash_screen_splash_screen_component__["a" /* SplashScreenComponent */] },
    { path: 'age-result', component: __WEBPACK_IMPORTED_MODULE_5__age_result_age_result_component__["a" /* AgeResultComponent */] },
    { path: 'main-screen', component: __WEBPACK_IMPORTED_MODULE_6__main_screen_main_screen_component__["a" /* MainScreenComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "    <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(Router) {
        this.Router = Router;
    }
    // ngOnInit() {
    //   this.Router.navigate(["/proces-picture"]);
    // }
    AppComponent.prototype.ngOnInit = function () {
        this.Router.navigate(["/splash-screen"]);
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.Router.navigate(["/main-screen"]);
        }, 3000);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__capture_image_capture_image_component__ = __webpack_require__("./src/app/capture-image/capture-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__process_image_process_image_component__ = __webpack_require__("./src/app/process-image/process-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__splash_screen_splash_screen_component__ = __webpack_require__("./src/app/splash-screen/splash-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__age_result_age_result_component__ = __webpack_require__("./src/app/age-result/age-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__top_menu_top_menu_component__ = __webpack_require__("./src/app/top-menu/top-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_screen_main_screen_component__ = __webpack_require__("./src/app/main-screen/main-screen.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__capture_image_capture_image_component__["a" /* CaptureImageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__process_image_process_image_component__["a" /* ProcessImageComponent */],
                __WEBPACK_IMPORTED_MODULE_9__splash_screen_splash_screen_component__["a" /* SplashScreenComponent */],
                __WEBPACK_IMPORTED_MODULE_10__age_result_age_result_component__["a" /* AgeResultComponent */],
                __WEBPACK_IMPORTED_MODULE_11__top_menu_top_menu_component__["a" /* TopMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_12__main_screen_main_screen_component__["a" /* MainScreenComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__app_service__["a" /* AppService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppService = /** @class */ (function () {
    function AppService() {
    }
    // m_Pictures: Picture[] = [];
    AppService.prototype.SaveBASE64 = function (_imgDataBASE64) {
        this.m_BASE64 = _imgDataBASE64;
    };
    AppService.prototype.GetBASE64 = function () {
        return this.m_BASE64;
    };
    AppService.prototype.SaveLocalPath = function (_imgPath) {
        this.m_ImgPath = _imgPath;
    };
    AppService.prototype.GetLocalPath = function () {
        return this.m_ImgPath;
    };
    AppService.prototype.SaveAge = function (_ageGuess) {
        this.m_Age = _ageGuess;
    };
    AppService.prototype.GetAgeGuess = function () {
        return this.m_Age;
    };
    AppService.prototype.MakeAndGetBlob = function () {
        var BASE64_MARKER = ';base64,';
        if (this.m_BASE64.indexOf(BASE64_MARKER) == -1) {
            var parts_1 = this.m_BASE64.split(',');
            var contentType_1 = parts_1[0].split(':')[1];
            var raw_1 = decodeURIComponent(parts_1[1]);
            return new Blob([raw_1], { type: contentType_1 });
        }
        var parts = this.m_BASE64.split(BASE64_MARKER);
        var contentType = parts[0].split(':')[1];
        var raw = window.atob(parts[1]);
        var rawLength = raw.length;
        var uInt8Array = new Uint8Array(rawLength);
        for (var i = 0; i < rawLength; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
        }
        return new Blob([uInt8Array], { type: contentType });
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AppService);
    return AppService;
}());

// interface Picture {
//   BASE64: string;
//   AGE: number;
// }


/***/ }),

/***/ "./src/app/capture-image/capture-image.component.css":
/***/ (function(module, exports) {

module.exports = "#video {\r\n    position: fixed;\r\n    top: 136px; \r\n    width: 100%; \r\n    padding: 20px;\r\n    display: block;\r\n    margin: 0 auto;\r\n    -webkit-transfrom: scaleX(-1);\r\n    -webkit-transform: scaleX(-1);\r\n            transform: scaleX(-1);\r\n}\r\n\r\n#canvas {\r\n    position: relative;\r\n    top: 50px; \r\n    width: 100%; \r\n    padding: 20px;\r\n    display: block;\r\n    margin: 0 auto;\r\n    height: 292px;\r\n}\r\n\r\n#btnPicture {\r\n    position: relative;\r\n    top: 100px; \r\n    width: 75px; \r\n    height: 75px;\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/capture-image/capture-image.component.html":
/***/ (function(module, exports) {

module.exports = "<app-top-menu></app-top-menu>\r\n<video #video autoplay id=\"video\"></video>\r\n<canvas #canvas id=\"canvas\"></canvas>\r\n<img id=\"btnPicture\" src=\"./assets/Images/Button.png\" (click)=\"TakePicture()\">"

/***/ }),

/***/ "./src/app/capture-image/capture-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaptureImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("./src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CaptureImageComponent = /** @class */ (function () {
    function CaptureImageComponent(AppService, Router) {
        this.AppService = AppService;
        this.Router = Router;
    }
    CaptureImageComponent.prototype.ngOnInit = function () {
    };
    CaptureImageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.m_video = this.m_video.nativeElement;
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (Stream) {
                _this.m_video.src = window.URL.createObjectURL(Stream);
                _this.m_video.play();
            }).catch(function (err) { console.log(err.name + ": " + err.message); });
        }
    };
    CaptureImageComponent.prototype.TakePicture = function () {
        var _this = this;
        this.ProcessImage(function (data) {
            _this.AppService.SaveBASE64(data);
            _this.Router.navigate(["/proces-picture"]);
        });
    };
    CaptureImageComponent.prototype.ProcessImage = function (_returnFunction) {
        var canvas = this.m_canvas.nativeElement;
        var context = canvas.getContext('2d');
        context.translate(300, 0);
        context.scale(-1, 1);
        var image = context.drawImage(this.m_video, 0, 0, 1024, 1024, 0, 0, 480, 320);
        var dataURL = canvas.toDataURL();
        _returnFunction(dataURL);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('video'),
        __metadata("design:type", Object)
    ], CaptureImageComponent.prototype, "m_video", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('canvas'),
        __metadata("design:type", Object)
    ], CaptureImageComponent.prototype, "m_canvas", void 0);
    CaptureImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-capture-image',
            template: __webpack_require__("./src/app/capture-image/capture-image.component.html"),
            styles: [__webpack_require__("./src/app/capture-image/capture-image.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], CaptureImageComponent);
    return CaptureImageComponent;
}());



/***/ }),

/***/ "./src/app/main-screen/main-screen.component.css":
/***/ (function(module, exports) {

module.exports = "#btnImg {\r\n    position: relative;\r\n    top: 100px;\r\n    width: 186px;\r\n    height: 180px;\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n\r\n#dareTextBlock {\r\n    width: 212px;\r\n    height: 82px;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; \r\n    font-size: 21px;\r\n    text-align: center;\r\n    line-height: 18px;\r\n    color:      #000000;\r\n    background-color:      #FFFFFF;\r\n    display: block;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    top: 120px; \r\n}"

/***/ }),

/***/ "./src/app/main-screen/main-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<app-top-menu></app-top-menu>\r\n<div id=\"main\">\r\n  <img id=\"btnImg\" src=\"./assets/Images/Camera_logo.png\" (click)=\"takePicture()\">\r\n  <p id=\"dareTextBlock\">\r\n    {{m_dareText}}\r\n  </p>\r\n</div>"

/***/ }),

/***/ "./src/app/main-screen/main-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("./src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainScreenComponent = /** @class */ (function () {
    function MainScreenComponent(AppService, Router, Zone) {
        this.AppService = AppService;
        this.Router = Router;
        this.Zone = Zone;
        this.m_dareText = "Dare you to press the camera and see how old we think you are";
    }
    MainScreenComponent.prototype.takePicture = function () {
        // this.Router.navigate(["/take-picture"]);
        if (device.platform == "Android") {
            // In order to make sure I can access the camera through the cordova pluging, I need to make sure the 'deviceready' event has triggered. 
            // That is why I've added an eventlistener here. 
            // Found it necessary to to use '.bind()' in order to maintain or carry the scope/context on to the callback function. 
            // The AppService and Router are available to the component class, and the context is lost in a callback function. 
            document.addEventListener("deviceready", this.openCamera.bind(this));
        }
        else if (device.platform == "browser") {
            this.Router.navigate(["/take-picture"]);
        }
    };
    MainScreenComponent.prototype.openCamera = function () {
        // When the native camera is active, this app is set "on-hold" by the device, and pushed to the background. 
        // Upon return to this app, I experienced some issues with the getting the router to navigate to the next component.
        // As far as I can tell and on the basis of research, it is because an uncaught error in this component. 
        // Whether it is caused by the native camera or the component, I don't know, but I think it must be an angular error, seeing as it keeps the angular router from moving on. 
        // Anyway - importing the NgZone angular module, and using the 'this.Zone.run()' method, I'm able to force it to run what-ever is inside that. 
        // This will then snap it out of what-ever-it-is-stock-(not)-doing, and force it through. 
        var _this = this;
        // This is also why I found it necessary to exclude the animation import from app.module.ts', because it is aparently in this module the the bug is?    
        // If i didn't exclude it, the router would not properly run the 'Destroy' life cycle hook, and remove the component from the DOM. 
        // Instead of removing or replacing the current component, it would simply add the next component to the DOM. 
        // And seeing as the next component would not be loaded properly, the 'ngOnInit()' and the other life cycle hook would not be triggered.  
        navigator.camera.getPicture(function (data) {
            _this.AppService.SaveBASE64("data:image/png;base64," + data);
            _this.Zone.run(function () {
                _this.Router.navigate(["/proces-picture"]);
            });
        }, function (error) {
            alert("Unable to obtain camera app: " + error);
        }, {
            sourceType: 1,
            quality: 100,
            destinationType: 0,
            allowEdit: false,
            correctOrientation: true
        });
    };
    MainScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-screen',
            template: __webpack_require__("./src/app/main-screen/main-screen.component.html"),
            styles: [__webpack_require__("./src/app/main-screen/main-screen.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]])
    ], MainScreenComponent);
    return MainScreenComponent;
}());



/***/ }),

/***/ "./src/app/process-image/process-image.component.css":
/***/ (function(module, exports) {

module.exports = "#picture{\r\n    padding: 20px;\r\n    display: block;\r\n    margin: 0 auto;\r\n    margin-top: 78px;\r\n    margin-bottom: 5px;\r\n    height: 292px;\r\n    -webkit-transfrom: scaleX(-1);\r\n    -webkit-transform: scaleX(-1);\r\n            transform: scaleX(-1);\r\n}\r\n\r\n#searchGif {\r\n    width: 100px;\r\n    height: 100px;\r\n    display: block;\r\n    margin: 0 auto;\r\n    margin-bottom:0px;\r\n}\r\n\r\n#processingTextBlock {\r\n    width: 180px;\r\n    height: 60px;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; \r\n    font-size: 21px;\r\n    text-align: center;\r\n    line-height: 18px;\r\n    color:      #000000;\r\n    background-color:      #FFFFFF;\r\n    display: block;\r\n    margin: 0 auto;\r\n}"

/***/ }),

/***/ "./src/app/process-image/process-image.component.html":
/***/ (function(module, exports) {

module.exports = "<img id=\"picture\" src=\"{{m_imgDataBASE64}}\">\r\n<img id=\"searchGif\" src=\"./assets/Images/Magnify-1s-200px.gif\">\r\n<p id=\"processingTextBlock\">\r\n  {{m_processingText}}\r\n</p>"

/***/ }),

/***/ "./src/app/process-image/process-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProcessImageComponent = /** @class */ (function () {
    function ProcessImageComponent(AppService, Router, http) {
        this.AppService = AppService;
        this.Router = Router;
        this.http = http;
        this.m_processingText = "Asking around..";
    }
    ProcessImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.m_imgDataBASE64 = this.AppService.GetBASE64();
        this.m_imgDataBlob = this.AppService.MakeAndGetBlob();
        this.CallObserver(this.m_imgDataBlob);
        setTimeout(function () {
            _this.Router.navigate(["/age-result"]);
        }, 5000);
    };
    ProcessImageComponent.prototype.CallObserver = function (_imgDataBlob) {
        var _this = this;
        this.GetDataFromAPI(_imgDataBlob)
            .subscribe(function (value) {
            console.log(value);
            _this.m_ageGuess = _this.FilterDataFromURL(value);
            _this.AppService.SaveAge(_this.m_ageGuess);
        }, function (error) { console.log(error); });
    };
    ProcessImageComponent.prototype.GetDataFromAPI = function (_imgDataBlob) {
        var url = "https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Tags,Faces";
        var httpHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]()
            .set('Content-Type', 'application/octet-stream')
            .set('ocp-apim-subscription-key', __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].visonConfig.apiKey);
        return this.http.post(url, _imgDataBlob, {
            headers: httpHeaders,
            responseType: 'json'
        });
    };
    ProcessImageComponent.prototype.FilterDataFromURL = function (_value) {
        return _value.faces[0].age;
    };
    ProcessImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-process-image',
            template: __webpack_require__("./src/app/process-image/process-image.component.html"),
            styles: [__webpack_require__("./src/app/process-image/process-image.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ProcessImageComponent);
    return ProcessImageComponent;
}());



/***/ }),

/***/ "./src/app/splash-screen/splash-screen.component.css":
/***/ (function(module, exports) {

module.exports = "#splash {\r\n    background: -webkit-gradient( linear, left top, left bottom, from(#689ACA), to(#6669C9));\r\n    background: linear-gradient( #689ACA, #6669C9);   \r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n#logo {\r\n    position: relative;\r\n    top: 140px;\r\n    width: 151px;\r\n    height: 200px;\r\n    -webkit-animation-name: dropdown;\r\n            animation-name: dropdown;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n\r\n@-webkit-keyframes dropdown {\r\n    from {top: -220px;}\r\n    to {top: 140px;}\r\n}\r\n\r\n@keyframes dropdown {\r\n    from {top: -220px;}\r\n    to {top: 140px;}\r\n}\r\n\r\n#loadingGif{\r\n    position: relative;\r\n    top: 220px;\r\n    width: 67px;\r\n    height: 73px;\r\n    display: block;\r\n    margin: 0 auto;\r\n    -webkit-animation-name: showLoading;\r\n            animation-name: showLoading; \r\n    -webkit-animation-delay: 2s; \r\n            animation-delay: 2s;\r\n    -webkit-animation-duration: 0.2s;\r\n            animation-duration: 0.2s;\r\n    -webkit-animation-fill-mode: both;\r\n            animation-fill-mode: both;\r\n}\r\n\r\n@-webkit-keyframes showLoading {\r\n    from {opacity: 0 }\r\n    to {opacity: 1  }\r\n}\r\n\r\n@keyframes showLoading {\r\n    from {opacity: 0 }\r\n    to {opacity: 1  }\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/splash-screen/splash-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"splash\" >\r\n  <img id=\"logo\" src=\"./assets/Images/PictureAge_logo.png\">\r\n  <img id=\"loadingGif\" src=\"./assets/Images/Dual Ring-1.5s-200px.gif\">\r\n</div>\r\n  \r\n  \r\n  \r\n"

/***/ }),

/***/ "./src/app/splash-screen/splash-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SplashScreenComponent = /** @class */ (function () {
    function SplashScreenComponent() {
    }
    SplashScreenComponent.prototype.ngOnInit = function () {
    };
    SplashScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-splash-screen',
            template: __webpack_require__("./src/app/splash-screen/splash-screen.component.html"),
            styles: [__webpack_require__("./src/app/splash-screen/splash-screen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SplashScreenComponent);
    return SplashScreenComponent;
}());



/***/ }),

/***/ "./src/app/top-menu/top-menu.component.css":
/***/ (function(module, exports) {

module.exports = "#topMenu {\r\n    height: 70px;\r\n    border-style: none;\r\n    border-bottom-style: solid;\r\n    border-bottom-color: black;\r\n    border-width: 3px; \r\n}\r\n\r\n#logoTextImg {\r\n    margin-left: 20px;\r\n    margin-top: 20px; \r\n    width: 180px;\r\n    height: 40px;\r\n}\r\n\r\n#btnMenuIcon{\r\n    width: 30px; \r\n    height: 25px;\r\n    margin-right: 20px; \r\n    margin-top: 22px;\r\n    float: right; \r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/top-menu/top-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"topMenu\">\r\n  <img id=\"logoTextImg\" src=\"./assets/Images/Logo_text.png\">\r\n  <img id=\"btnMenuIcon\" src=\"./assets/Images/menuLogo.png\">\r\n</div>"

/***/ }),

/***/ "./src/app/top-menu/top-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopMenuComponent = /** @class */ (function () {
    function TopMenuComponent() {
        this.isActive = false;
    }
    TopMenuComponent.prototype.ngOnInit = function () {
    };
    TopMenuComponent.prototype.onComponentEnable = function () {
        this.isActive = true;
    };
    TopMenuComponent.prototype.OnComponentDisable = function () {
        this.isActive = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TopMenuComponent.prototype, "isActive", void 0);
    TopMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-top-menu',
            template: __webpack_require__("./src/app/top-menu/top-menu.component.html"),
            styles: [__webpack_require__("./src/app/top-menu/top-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopMenuComponent);
    return TopMenuComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true,
    firebaseConfig: {
        apiKey: "AIzaSyBtsLkyoKbu4VRTA3VYYHpN2Pe9sSYqROI",
        authDomain: "pictureage-f438b.firebaseapp.com",
        databaseURL: "https://pictureage-f438b.firebaseio.com",
        projectId: "pictureage-f438b",
        storageBucket: "pictureage-f438b.appspot.com",
        messagingSenderId: "330143653742"
    },
    visonConfig: {
        apiKey: "c3bb908b46a74414ab0e91a488bdca07"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map