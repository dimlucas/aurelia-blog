var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-fetch-client', 'aurelia-router', './session', 'aurelia-auth', 'fetch'], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1, aurelia_router_1, session_1, aurelia_auth_1) {
    "use strict";
    var Login = (function () {
        function Login(http, session, router, auth) {
            this.http = http;
            this.session = session;
            this.router = router;
            this.auth = auth;
            this.username = "";
            this.password = "";
            http.configure(function (config) {
                config.useStandardConfiguration();
            });
        }
        Login.prototype.login = function () {
            this.auth.login(this.username, this.password).then(function (response) {
                console.log("Login response: ");
                console.log(response);
            }).catch(function (error) {
                console.log("Login Error: ");
                console.log(error);
            });
        };
        Login = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient, session_1.Session, aurelia_router_1.Router, aurelia_auth_1.AuthService])
        ], Login);
        return Login;
    }());
    exports.Login = Login;
});
//# sourceMappingURL=login.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC9sb2dpbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIiwic291cmNlcyI6WyJhdXRoL2xvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBUUE7UUFFSSxlQUFvQixJQUFnQixFQUFVLE9BQWdCLEVBQVUsTUFBYyxFQUFVLElBQWlCO1lBQTdGLFNBQUksR0FBSixJQUFJLENBQVk7WUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFTO1lBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtZQUFVLFNBQUksR0FBSixJQUFJLENBQWE7WUFtQ2pILGFBQVEsR0FBVyxFQUFFLENBQUM7WUFDdEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztZQW5DbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07Z0JBQ2pCLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELHFCQUFLLEdBQUw7WUFrQkksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUTtnQkFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUs7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQztRQUVQLENBQUM7UUFuQ0w7WUFBQyw4QkFBVTs7aUJBQUE7UUF3Q1gsWUFBQztJQUFELENBQUMsQUF2Q0QsSUF1Q0M7SUF2Q1ksYUFBSyxRQXVDakIsQ0FBQSJ9
