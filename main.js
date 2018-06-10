(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#message {\n  display: flex;\n  font-size: 40px;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  /*height: 100%;*/\n}\n\n.button {\n  padding: 20px;\n  color: white;\n  font-size: 30px;\n  border-radius: 10px;\n  background: #0054A5;\n  border: 1px solid black;\n  margin: 20px;\n\n}\n\n.button:hover {\n  background: white;\n  color: black;\n\n}\n"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"message\">\n  {{message}}\n  <a routerLink=\"/logout\" class=\"button\">Logout</a>\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(user) {
        this.user = user;
        this.message = "Loading......";
    }
    AdminComponent.prototype.ngOnInit = function () {
        // this.user.getSomeData().subscribe(data => {
        //   this.message = data.message;
        // });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tr.even {\n  background: greenyellow;\n}\n\ntr.odd {\n  background: aqua;\n}\n\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!--<table>-->\n  <!--<tr>-->\n    <!--<td>S No.</td>-->\n    <!--<td>Name</td>-->\n    <!--<td>Is Online?</td>-->\n  <!--</tr>-->\n  <!--<tr *ngFor=\"let record of records; let i = index; let firstRecord = first; let lastRecord = last; let evenRecord = even; let oddRecord = odd\" [ngClass] = \"{odd: oddRecord, even: evenRecord, first: firstRecord, last: lastRecord}\">-->\n    <!--<td>{{i+1}}</td>-->\n    <!--<td>{{record.name}}</td>-->\n    <!--<td>{{record.online}}</td>-->\n  <!--</tr>-->\n<!--</table>-->\n\n<app-header></app-header>\n<router-outlet></router-outlet>\n<!--HELLO APP COMP-->\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {RecordsService} from "./records.service";
// function log(target, name, descriptor) {
//   // console.log(target, name, descriptor)
//   // Store the original function in a variable
//   const original = descriptor.value;
//   // do some manipulations with descriptor.value
//
//   // descriptor.value = function () {
//   //   console.log("This function was hacked!");
//   // };
//
//   // original;
//
//   descriptor.value = function (...args) {
//     console.log("Arguments", args, " were passed in this function");
//     const result = original.apply(this, args);
//     console.log("The result of the function is", result);
//
//     return result;
//   };
//
//   // return the descriptor
//   return descriptor;
//
//
// }
function log(className) {
    console.log(className);
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Arguments passed to this class's constructor are ", args);
        return new (className.bind.apply(className, [void 0].concat(args)))();
    };
}
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        // this.aSimpleMethod();
        // console.log("This statement was generated by the constructor", this.aSimpleMethod(5, 2));
        // records = {};
        // title = 'app';
        // myVariable = 'app';
        // myDisabledValue = false;
        // text = "Deez";
        this.records = [];
        // this.myDisabledValue = false;
        // setInterval(() => {
        //   this.myVariable = Math.random().toString();
        //   this.myDisabledValue = Math.random() > .5;
        // }, 500);
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.myFirstService.getData().subscribe(data => {
        //     this.records = data.obj
        // });
    };
    // @log
    AppComponent.prototype.aSimpleMethod = function (a, b) {
        // console.log("Hey there!")
        //
        return a * b;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
        // @log
        ,
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _records_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./records.service */ "./src/app/records.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hello_hello_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./hello/hello.component */ "./src/app/hello/hello.component.ts");
/* harmony import */ var _data_data_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./data/data.component */ "./src/app/data/data.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _new_company_form_new_company_form_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./new-company-form/new-company-form.component */ "./src/app/new-company-form/new-company-form.component.ts");
/* harmony import */ var _new_event_form_new_event_form_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./new-event-form/new-event-form.component */ "./src/app/new-event-form/new-event-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
                _hello_hello_component__WEBPACK_IMPORTED_MODULE_19__["HelloComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"],
                _data_data_component__WEBPACK_IMPORTED_MODULE_20__["DataComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_22__["AdminComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_24__["LogoutComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["DashboardComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_26__["RegisterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_27__["HeaderComponent"],
                _new_company_form_new_company_form_component__WEBPACK_IMPORTED_MODULE_28__["NewCompanyFormComponent"],
                _new_event_form_new_event_form_component__WEBPACK_IMPORTED_MODULE_29__["NewEventFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_store_reducers__WEBPACK_IMPORTED_MODULE_8__["reducers"], {}),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                    {
                        path: 'data',
                        component: _data_data_component__WEBPACK_IMPORTED_MODULE_20__["DataComponent"]
                    },
                    {
                        path: 'login',
                        component: _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"]
                    },
                    {
                        path: 'logout',
                        component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_24__["LogoutComponent"]
                    },
                    // {
                    //   path: 'admin',
                    //   component: AdminComponent,
                    //   canActivate: [AuthGuard]
                    // },
                    {
                        path: 'dashboard',
                        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["DashboardComponent"],
                        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]]
                    },
                    {
                        path: 'register',
                        component: _register_register_component__WEBPACK_IMPORTED_MODULE_26__["RegisterComponent"]
                    },
                    {
                        path: '',
                        component: _home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"]
                    },
                    {
                        path: 'newcompanyform',
                        component: _new_company_form_new_company_form_component__WEBPACK_IMPORTED_MODULE_28__["NewCompanyFormComponent"]
                    }
                ]),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"]
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"], _user_service__WEBPACK_IMPORTED_MODULE_17__["UserService"], _auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _records_service__WEBPACK_IMPORTED_MODULE_3__["RecordsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router, user) {
        this.auth = auth;
        this.router = router;
        this.user = user;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        // debugger;
        if (this.auth.isLoggedIn) {
            // We might be logged in
            // this.router.navigate(['login']);
            console.log("I AM LOGGED IN");
            return true;
        }
        // return this.auth.isLoggedIn;
        return this.user.isLoggedIn().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            console.log("authGuard Resp: " + res.success);
            if (res.success) {
                _this.auth.setLoggedIn(true);
                console.log("settingLog True");
                return true;
            }
            else {
                console.log("authGuard login redirect");
                _this.router.navigate(['login']);
                return false;
            }
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        // loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
        this.loggedInStatus = false;
    }
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            // return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
            return this.loggedInStatus;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.setLoggedIn = function (value) {
        this.loggedInStatus = value;
        // localStorage.setItem('loggedIn', 'true');
    };
    AuthService.prototype.getUserDetails = function (email, password) {
        // Post these details to API server return user info if correct
        return this.http.post('/api/login', {
            email: email,
            password: password
        });
    };
    AuthService.prototype.registerUser = function (email, password) {
        return this.http.post('/api/register', {
            email: email,
            password: password
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#message {\n  display: flex;\n  font-size: 40px;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  /*height: 100%;*/\n}\n\n.button {\n  padding: 20px;\n  color: white;\n  font-size: 30px;\n  border-radius: 10px;\n  background: #0054A5;\n  border: 1px solid black;\n  margin: 20px;\n\n}\n\n.button:hover {\n  background: white;\n  color: black;\n\n}\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"message\">\n    {{quote}} by {{email}}\n\n  <a routerLink=\"/logout\" class=\"button\">Logout</a>\n\n  <div id=\"controls\">\n    <input type=\"text\" value=\"{{quote}}\" id=\"myQuote\"/>\n    <input type=\"button\" value=\"Update Quote\" (click)=\"updateQuote($event)\"/>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(user, router) {
        this.user = user;
        this.router = router;
        this.quote = "Loading your personal quote";
        this.email = "Getting your email...";
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.getData().subscribe(function (data) {
            if (data.status) {
                _this.quote = data.quote;
                _this.email = data.email;
                console.log();
            }
            else {
                console.log("HITS LOG OUT");
                _this.router.navigate(['logout']);
            }
        });
    };
    DashboardComponent.prototype.updateQuote = function (event) {
        var value = event.target.parentNode.querySelector('#myQuote').value;
        this.user.updateQuote(value).subscribe(function (data) {
            if (data.success) {
                alert("Your quote was updated");
            }
            else {
                alert("There was an issue");
            }
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/data/data.component.css":
/*!*****************************************!*\
  !*** ./src/app/data/data.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/data/data.component.html":
/*!******************************************!*\
  !*** ./src/app/data/data.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\n  <tr>\n    <td>S No.</td>\n    <td>Name</td>\n    <td>Is Online?</td>\n  </tr>\n  <tr *ngFor=\"let record of records; let i = index; let firstRecord = first; let lastRecord = last; let evenRecord = even; let oddRecord = odd\" [ngClass] = \"{odd: oddRecord, even: evenRecord, first: firstRecord, last: lastRecord}\">\n    <td>{{i+1}}</td>\n    <td>{{record.name}}</td>\n    <td>{{record.online}}</td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/data/data.component.ts":
/*!****************************************!*\
  !*** ./src/app/data/data.component.ts ***!
  \****************************************/
/*! exports provided: DataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataComponent", function() { return DataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _records_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../records.service */ "./src/app/records.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataComponent = /** @class */ (function () {
    function DataComponent(myFirstService) {
        this.myFirstService = myFirstService;
        this.records = [];
    }
    DataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myFirstService.getData().subscribe(function (data) {
            _this.records = data.obj;
        });
    };
    DataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data',
            template: __webpack_require__(/*! ./data.component.html */ "./src/app/data/data.component.html"),
            styles: [__webpack_require__(/*! ./data.component.css */ "./src/app/data/data.component.css")]
        }),
        __metadata("design:paramtypes", [_records_service__WEBPACK_IMPORTED_MODULE_1__["RecordsService"]])
    ], DataComponent);
    return DataComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  padding: 20px;\n  text-align: center;\n  border-bottom: 1px solid #EEEEEE;\n  color: #EEEEEE;\n  background: #0054A5;\n}\n\n#links {\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\n  <h1>Supplier Management System</h1>\n  <div id=\"links\">\n    <a href=\"/dashboard\">{{greetMessage}}</a>\n    <a *ngIf=\"!logout\" routerLink=\"/logout\">Logout</a>\n    <a *ngIf=\"logout\" routerLink=\"/login\">Login</a>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(user) {
        this.user = user;
        this.greetMessage = "Loading...";
        this.logout = true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.getAllState().subscribe(function (state) {
            // console.log(state);
            _this.greetMessage = state.login ? "Hello" + state.user : "Guest";
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/hello/hello.component.css":
/*!*******************************************!*\
  !*** ./src/app/hello/hello.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hello/hello.component.html":
/*!********************************************!*\
  !*** ./src/app/hello/hello.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>This is a custom component</p>\n\n{{ myVar }}\n\n{{ bitwiseOR }}\n\n<!--{{ doSomeHeavyTask() }}-->\n"

/***/ }),

/***/ "./src/app/hello/hello.component.ts":
/*!******************************************!*\
  !*** ./src/app/hello/hello.component.ts ***!
  \******************************************/
/*! exports provided: HelloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloComponent", function() { return HelloComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelloComponent = /** @class */ (function () {
    function HelloComponent() {
        this.myVar = "Bin";
        this.bitwiseOR = 2 | 5;
        this.i = 0;
        this.someVar = Math.random();
    }
    HelloComponent.prototype.doSomeHeavyTask = function () {
        console.log("Called " + this.i++ + " times");
    };
    HelloComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.someVar = Math.random();
        }, 50);
    };
    HelloComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hello',
            template: __webpack_require__(/*! ./hello.component.html */ "./src/app/hello/hello.component.html"),
            styles: [__webpack_require__(/*! ./hello.component.css */ "./src/app/hello/hello.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelloComponent);
    return HelloComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n#buttons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 500px;\n}\n\n.button {\n  padding: 20px;\n  color: white;\n  font-size: 30px;\n  border-radius: 10px;\n  background: #0054A5;\n  border: 1px solid black;\n  margin: 20px;\n\n}\n\n.button:hover {\n  background: white;\n  color: black;\n\n}\n\n.image {\n  display: flex;\n  position: absolute;\n  justify-content: center;\n  align-items: center;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<nav class=\"navbar navbar-expand-lg navbar-light bg-primary\">-->\n  <!--<a class=\"navbar-brand\" href=\"#\">Supplier Management System</a>-->\n  <!--<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">-->\n    <!--<span class=\"navbar-toggler-icon\"></span>-->\n  <!--</button>-->\n\n  <!--<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">-->\n    <!--<ul class=\"navbar-nav mr-auto\">-->\n      <!--<li class=\"nav-item active\">-->\n        <!--<a class=\"nav-link\" href=\"#\">Companies <span class=\"sr-only\">(current)</span></a>-->\n      <!--</li>-->\n      <!--<li class=\"nav-item\">-->\n        <!--<a class=\"nav-link\" href=\"#\">Company Registration</a>-->\n      <!--</li>-->\n      <!--<li class=\"nav-item navbar-right\">-->\n          <!--<a class=\"nav-link\" href=\"#\">Logout</a>-->\n      <!--</li>-->\n      <!--<li class=\"nav-item dropdown\">-->\n        <!--<a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">-->\n          <!--Events-->\n        <!--</a>-->\n        <!--<div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">-->\n          <!--<a class=\"dropdown-item\" href=\"#\">Action</a>-->\n          <!--<a class=\"dropdown-item\" href=\"#\">Another action</a>-->\n          <!--<div class=\"dropdown-divider\"></div>-->\n          <!--<a class=\"dropdown-item\" href=\"#\">Something else here</a>-->\n        <!--</div>-->\n      <!--</li>-->\n      <!--<li class=\"nav-item\">-->\n        <!--<a class=\"nav-link disabled\" href=\"#\">Disabled</a>-->\n      <!--</li>-->\n    <!--</ul>-->\n\n  <!--</div>-->\n<!--</nav>-->\n\n\n<!--<nav class=\"navbar navbar-light\">-->\n  <!--<a class=\"navbar-brand\" href=\"#\">Supplier Management System</a>-->\n  <!--<div class=\"navbar-collapse\">-->\n    <!--<ul class=\"navbar-nav\" mr-auto>-->\n      <!--<li class=\"nav-item\">-->\n        <!--<a class=\"nav-link\" href=\"#/companies\">Companies</a>-->\n      <!--</li>-->\n      <!--<li class=\"nav-item\">-->\n        <!--<a class=\"nav-link\" href=\"#/companies\">Companies</a>-->\n      <!--</li>-->\n    <!--</ul>-->\n  <!--</div>-->\n<!--</nav>-->\n\n\n<!--<nav class=\"navbar navbar-dark bg-primary\" style=\"background-color: #f9f9f9;\">-->\n  <!--<a class=\"navbar-brand\" href=\"#\">Supplier Management System</a>-->\n  <!--<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">-->\n    <!--<span class=\"navbar-toggler-icon\"></span>-->\n  <!--</button>-->\n\n  <!--<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">-->\n    <!--<ul class=\"navbar-nav mr-auto\">-->\n      <!--<li class=\"nav-item active\">-->\n        <!--<a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>-->\n      <!--</li>-->\n      <!--<li class=\"nav-item\">-->\n        <!--<a class=\"nav-link\" href=\"#\">Link</a>-->\n      <!--</li>-->\n      <!--<li class=\"nav-item dropdown\">-->\n        <!--<a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">-->\n          <!--Dropdown-->\n        <!--</a>-->\n        <!--<div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">-->\n          <!--<a class=\"dropdown-item\" href=\"#\">Action</a>-->\n          <!--<a class=\"dropdown-item\" href=\"#\">Another action</a>-->\n          <!--<div class=\"dropdown-divider\"></div>-->\n          <!--<a class=\"dropdown-item\" href=\"#\">Something else here</a>-->\n        <!--</div>-->\n      <!--</li>-->\n      <!--<li class=\"nav-item\">-->\n        <!--<a class=\"nav-link disabled\" href=\"#\">Disabled</a>-->\n      <!--</li>-->\n    <!--</ul>-->\n    <!--<form class=\"form-inline my-2 my-lg-0\">-->\n      <!--<input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">-->\n      <!--<button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>-->\n    <!--</form>-->\n  <!--</div>-->\n<!--</nav>-->\n\n\n<!--<div class=\"container\">-->\n  <!--<footer>-->\n    <!--<center>Copyright 2015-2016</center>-->\n  <!--</footer>-->\n<!--</div>-->\n\n\n<!--<div class=\"row\">-->\n  <!--<div class=\"col\">-->\n    <!--<div ngbDropdown class=\"d-inline-block\">-->\n      <!--<button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Toggle dropdown</button>-->\n      <!--<div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">-->\n        <!--<button class=\"dropdown-item\">Action - 1</button>-->\n        <!--<button class=\"dropdown-item\">Another Action</button>-->\n        <!--<button class=\"dropdown-item\">Something else is here</button>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n  <!--<div class=\"col text-right\">-->\n    <!--<div ngbDropdown placement=\"top-right\" class=\"d-inline-block\">-->\n      <!--<button class=\"btn btn-outline-primary\" id=\"dropdownBasic2\" ngbDropdownToggle>Toggle dropup</button>-->\n      <!--<div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\">-->\n        <!--<button class=\"dropdown-item\">Action - 1</button>-->\n        <!--<button class=\"dropdown-item\">Another Action</button>-->\n        <!--<button class=\"dropdown-item\">Something else is here</button>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n<!--HOME TEST-->\n\n<!--<div class=\"navbar navbar-default navbar-fixed-top\">-->\n  <!--<div class=\"container\">-->\n    <!--<div class=\"navbar-header\">-->\n      <!--<a href=\"../\" class=\"navbar-brand\">Supplier Management System</a>-->\n      <!--<button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-main\">-->\n        <!--<span class=\"icon-bar\"></span>-->\n        <!--<span class=\"icon-bar\"></span>-->\n        <!--<span class=\"icon-bar\"></span>-->\n      <!--</button>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n<!--<br>-->\n<!--<br>-->\n<!--<br>-->\n<!--<br>-->\n<!--<div class=\"container\">-->\n<!--</div>-->\n<!--<div class=\"container\">-->\n  <!--<footer>-->\n    <!--<center>Copyright 2018-2019</center>-->\n  <!--</footer>-->\n<!--</div>-->\n\n\n  <!--<div class=\"image\">-->\n    <!--<img src=\"./assets/TL_Logo.png\">-->\n  <!--</div>-->\n  <div id=\"buttons\">\n\n    <a routerLink=\"/login\" class=\"button\">Login</a>\n    <a routerLink=\"/register\" class=\"button\">Register</a>\n    <a routerLink=\"/newcompanyform\" class=\"button\">Add Company</a>\n    <a routerLink=\"/neweventform\" class=\"button\">Add Event</a>\n\n    <a routerLink=\"/admin\" class=\"button\">Admin Page</a>\n    <a routerLink=\"/dashboard\" class=\"button\">Dashboard</a>\n  </div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  display: flex;\n  position: absolute;\n  width: 100%;\n  /*height: 100%;*/\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  background: #EEE;\n  border-radius: 20px;\n  max-width: 350px;\n}\n\ninput#username, input#password {\n  outline: 0;\n  font-size: 20px;\n  padding: 5px 10px;\n  margin: 5px;\n  min-width: 300px;\n}\n\nimg {\n  padding-bottom: 30px;\n}\n\ninput#submit:hover {\n  background: white;\n  color: black;\n\n}\n\nbutton#submit {\n  font-size: 20px;\n  margin: 20px;\n  padding: 5px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\nbutton#submit:hover {\n  background: #0054A5;\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"loginUser($event)\">\n  <img src=\"./assets/TL_Logo.png\">\n  <div class=\"container\">\n    <input type=\"text\" autocomplete=\"off\" placeholder=\"Username\" id=\"username\">\n    <input type=\"password\" autocomplete=\"off\" placeholder=\"Password\" id=\"password\">\n    <button type=\"submit\" id=\"submit\">Submit</button>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _store_actions_appActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/appActions */ "./src/app/store/actions/appActions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(Auth, router, user) {
        this.Auth = Auth;
        this.router = router;
        this.user = user;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var username = target.querySelector('#username').value;
        var password = target.querySelector('#password').value;
        this.Auth.getUserDetails(username, password).subscribe(function (data) {
            if (data.success) {
                // Redirect the person to /admin
                _this.router.navigate(['dashboard']);
                _this.Auth.setLoggedIn(true);
                _this.user.updateState({
                    action: _store_actions_appActions__WEBPACK_IMPORTED_MODULE_4__["ACTION_LOGIN"],
                    payload: username
                });
            }
            else {
                window.alert(data.message);
            }
        });
        console.log(username, password);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Logging you out!\n</p>\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(user, router, auth) {
        this.user = user;
        this.router = router;
        this.auth = auth;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.logout().subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['']);
                _this.auth.setLoggedIn(false);
            }
            else {
                window.alert('Some logout problem');
            }
        });
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/new-company-form/new-company-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/new-company-form/new-company-form.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-company-form/new-company-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/new-company-form/new-company-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  new-company-form works!!!!!\n</p>\n<div id=\"newCompanyForm\">\n  <form [formGroup]=\"myForm\">\n    Value: {{myForm.value | json}}\n    <hr>\n    <mat-form-field>\n      <input matInput placeholder=\"Company Name\" formControlName=\"companyName\">\n    </mat-form-field>\n\n    <div formGroupName=\"companyAddress\">\n      <mat-form-field>\n        <input matInput placeholder=\"Street 1\" formControlName=\"street1\">\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Street 2\" formControlName=\"street2\">\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"City\" formControlName=\"city\">\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-select placeholder=\"State\" formControlName=\"state\">\n          <mat-option *ngFor=\"let state of states\" [value]=\"state.label\">\n            {{state.value}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Zipcode\" formControlName=\"zipcode\">\n      </mat-form-field>\n\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/new-company-form/new-company-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/new-company-form/new-company-form.component.ts ***!
  \****************************************************************/
/*! exports provided: NewCompanyFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCompanyFormComponent", function() { return NewCompanyFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewCompanyFormComponent = /** @class */ (function () {
    function NewCompanyFormComponent(fb) {
        this.fb = fb;
        this.states = [
            { label: "AL", value: "AL" },
            { label: "AK", value: "AK" },
            { label: "AZ", value: "AZ" },
            { label: "AR", value: "AR" },
            { label: "CA", value: "CA" },
            { label: "CO", value: "CO" },
            { label: "CT", value: "CT" },
            { label: "DE", value: "DE" },
            { label: "FL", value: "FL" },
            { label: "GA", value: "GA" },
            { label: "HI", value: "HI" },
            { label: "ID", value: "ID" },
            { label: "IL", value: "IL" },
            { label: "IN", value: "IN" },
            { label: "IA", value: "IA" },
            { label: "KS", value: "KS" },
            { label: "KY", value: "KY" },
            { label: "LA", value: "LA" },
            { label: "ME", value: "ME" },
            { label: "MD", value: "MD" },
            { label: "MA", value: "MA" },
            { label: "MI", value: "MI" },
            { label: "MN", value: "MN" },
            { label: "MS", value: "MS" },
            { label: "MO", value: "MO" },
            { label: "MT", value: "MT" },
            { label: "NE", value: "NE" },
            { label: "NV", value: "NV" },
            { label: "NH", value: "NH" },
            { label: "NJ", value: "NJ" },
            { label: "NM", value: "NM" },
            { label: "NY", value: "NY" },
            { label: "NC", value: "NC" },
            { label: "ND", value: "ND" },
            { label: "OH", value: "OH" },
            { label: "OK", value: "OK" },
            { label: "OR", value: "OR" },
            { label: "PA", value: "PA" },
            { label: "RI", value: "RI" },
            { label: "SC", value: "SC" },
            { label: "SD", value: "SD" },
            { label: "TN", value: "TN" },
            { label: "TX", value: "TX" },
            { label: "UT", value: "UT" },
            { label: "VT", value: "VT" },
            { label: "VA", value: "VA" },
            { label: "WA", value: "WA" },
            { label: "WV", value: "WV" },
            { label: "WI", value: "WI" },
            { label: "WY", value: "WY" }
        ];
    }
    NewCompanyFormComponent.prototype.ngOnInit = function () {
        var companyAddress = this.fb.group({
            street1: ['',
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ],
            street2: '',
            city: ['',
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ],
            state: ['',
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ],
            zipcode: ['',
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(7),
            ]
        });
        this.myForm = this.fb.group({
            companyName: ['',
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ],
            companyAddress: companyAddress
        });
        this.myForm.valueChanges.subscribe(console.log);
    };
    Object.defineProperty(NewCompanyFormComponent.prototype, "stateOption", {
        get: function () {
            return this.myForm.get('');
        },
        enumerable: true,
        configurable: true
    });
    NewCompanyFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-company-form',
            template: __webpack_require__(/*! ./new-company-form.component.html */ "./src/app/new-company-form/new-company-form.component.html"),
            styles: [__webpack_require__(/*! ./new-company-form.component.css */ "./src/app/new-company-form/new-company-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], NewCompanyFormComponent);
    return NewCompanyFormComponent;
}());



/***/ }),

/***/ "./src/app/new-event-form/new-event-form.component.css":
/*!*************************************************************!*\
  !*** ./src/app/new-event-form/new-event-form.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-event-form/new-event-form.component.html":
/*!**************************************************************!*\
  !*** ./src/app/new-event-form/new-event-form.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  new-event-form works!\n</p>\n"

/***/ }),

/***/ "./src/app/new-event-form/new-event-form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/new-event-form/new-event-form.component.ts ***!
  \************************************************************/
/*! exports provided: NewEventFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEventFormComponent", function() { return NewEventFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewEventFormComponent = /** @class */ (function () {
    function NewEventFormComponent() {
    }
    NewEventFormComponent.prototype.ngOnInit = function () {
    };
    NewEventFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-event-form',
            template: __webpack_require__(/*! ./new-event-form.component.html */ "./src/app/new-event-form/new-event-form.component.html"),
            styles: [__webpack_require__(/*! ./new-event-form.component.css */ "./src/app/new-event-form/new-event-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewEventFormComponent);
    return NewEventFormComponent;
}());



/***/ }),

/***/ "./src/app/records.service.ts":
/*!************************************!*\
  !*** ./src/app/records.service.ts ***!
  \************************************/
/*! exports provided: RecordsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsService", function() { return RecordsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecordsService = /** @class */ (function () {
    function RecordsService(http) {
        this.http = http;
    }
    RecordsService.prototype.getData = function () {
        return this.http.get('http://localhost:1234/file.php');
        // .subscribe(data => {
        // console.log("We got ", data.obj);
        // });
    };
    RecordsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RecordsService);
    return RecordsService;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  display: flex;\n  position: absolute;\n  width: 100%;\n  /*height: 100%;*/\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  background: #EEE;\n  border-radius: 20px;\n  max-width: 350px;\n}\n\ninput#username, input#password, input#cpassword  {\n  outline: 0;\n  font-size: 20px;\n  padding: 5px 10px;\n  margin: 5px;\n  min-width: 300px;\n}\n\nimg {\n  padding-bottom: 30px;\n}\n\ninput#submit:hover {\n  background: white;\n  color: black;\n\n}\n\nbutton#submit {\n  font-size: 20px;\n  margin: 20px;\n  padding: 5px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\nbutton#submit:hover {\n  background: #0054A5;\n  color: white;\n}\n\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"registerUser($event)\">\n  <img src=\"./assets/TL_Logo.png\">\n  <div class=\"container\">\n    <h4>Register Company User</h4>\n    <input type=\"text\" autocomplete=\"off\" placeholder=\"Username\" id=\"username\">\n    <input type=\"password\" autocomplete=\"off\" placeholder=\"Password\" id=\"password\">\n    <input type=\"password\" autocomplete=\"off\" placeholder=\"Confirm Password\" id=\"cpassword\">\n\n    <button type=\"submit\" id=\"submit\">Submit</button>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerUser = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var errors = [];
        var email = target.querySelector('#username').value;
        var password = target.querySelector('#password').value;
        var cpassword = target.querySelector('#cpassword').value;
        if (password != cpassword) {
            window.alert("Passwords do not match!");
        }
        if (errors.length === 0) {
            this.auth.registerUser(email, password).subscribe(function (data) {
                console.log(data);
                if (data.success) {
                    _this.router.navigate(['dashboard']);
                }
            });
        }
        console.log(email, password);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/store/actions/appActions.ts":
/*!*********************************************!*\
  !*** ./src/app/store/actions/appActions.ts ***!
  \*********************************************/
/*! exports provided: ACTION_LOGOUT, ACTION_LOGIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_LOGOUT", function() { return ACTION_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_LOGIN", function() { return ACTION_LOGIN; });
var ACTION_LOGOUT = "LOGOUT";
var ACTION_LOGIN = "LOGIN";


/***/ }),

/***/ "./src/app/store/reducers/appReducer.ts":
/*!**********************************************!*\
  !*** ./src/app/store/reducers/appReducer.ts ***!
  \**********************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_appActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/appActions */ "./src/app/store/actions/appActions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    login: false,
    user: "test"
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_appActions__WEBPACK_IMPORTED_MODULE_0__["ACTION_LOGOUT"]:
            return __assign({}, state, { login: false, user: null });
        case _actions_appActions__WEBPACK_IMPORTED_MODULE_0__["ACTION_LOGIN"]:
            // console.log("YHEA");
            return __assign({}, state, { login: true, user: action.payload });
    }
    return state;
}


/***/ }),

/***/ "./src/app/store/reducers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _appReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appReducer */ "./src/app/store/reducers/appReducer.ts");
// YOURSTORE = {
//   userState: {
//
//   },
//   appState{
//
//   }
//
// }

var reducers = {
    appReducer: _appReducer__WEBPACK_IMPORTED_MODULE_0__["reducer"]
};


/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http, store) {
        this.http = http;
        this.store = store;
    }
    UserService.prototype.getData = function () {
        return this.http.get('/api/data');
    };
    UserService.prototype.isLoggedIn = function () {
        console.log("userServIsLoggedIn");
        return this.http.get('/api/isLoggedIn');
    };
    UserService.prototype.logout = function () {
        return this.http.get('/api/logout');
    };
    UserService.prototype.updateQuote = function (value) {
        return this.http.post('/api/quote', {
            value: value
        });
    };
    UserService.prototype.getAllState = function () {
        return this.store.select('appReducer');
    };
    UserService.prototype.updateState = function (obj) {
        // this.store.select('appReducer').dispatch({
        //   type: obj.action,
        //   payload: obj.payload
        // });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], UserService);
    return UserService;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/GWFreak01/Documents/Projects/tl-sms-revamp/tl-sms/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map