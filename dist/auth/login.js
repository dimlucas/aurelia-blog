var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-fetch-client', 'aurelia-router', './session', 'fetch'], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1, aurelia_router_1, session_1) {
    "use strict";
    var Login = (function () {
        function Login(http, session, router) {
            this.http = http;
            this.session = session;
            this.router = router;
            this.username = "";
            this.password = "";
            http.configure(function (config) {
                config.useStandardConfiguration();
            });
        }
        Login.prototype.login = function () {
            var _this = this;
            if (!this.session.isLoggedIn) {
                if ((this.username.length > 0) && (this.password.length > 0)) {
                    this.http.fetch(this.session.authUrl, {
                        method: 'POST',
                        body: aurelia_fetch_client_1.json({ username: this.username, password: this.password })
                    }).then(function (response) { return response.json(); }).then(function (response) {
                        if (!response.error) {
                            _this.session.login(_this.username, response.token);
                        }
                        else {
                            console.log("Authorization Failed");
                            console.log(response);
                        }
                    });
                }
            }
        };
        Login = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient, session_1.Session, aurelia_router_1.Router])
        ], Login);
        return Login;
    }());
    exports.Login = Login;
});
//# sourceMappingURL=login.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC9sb2dpbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIiwic291cmNlcyI6WyJhdXRoL2xvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBT0E7UUFFSSxlQUFvQixJQUFnQixFQUFVLE9BQWdCLEVBQVUsTUFBYztZQUFsRSxTQUFJLEdBQUosSUFBSSxDQUFZO1lBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUztZQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7WUEwQnRGLGFBQVEsR0FBVyxFQUFFLENBQUM7WUFDdEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztZQTFCbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07Z0JBQ2pCLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELHFCQUFLLEdBQUw7WUFBQSxpQkFpQkM7WUFoQkcsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBLENBQUM7Z0JBQ3pCLEVBQUUsQ0FBQSxDQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUUsQ0FBQyxDQUFBLENBQUM7b0JBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO3dCQUNsQyxNQUFNLEVBQUUsTUFBTTt3QkFDZCxJQUFJLEVBQUUsMkJBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQ25FLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUTt3QkFDOUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQzs0QkFDaEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3RELENBQUM7d0JBQ0QsSUFBSSxDQUFBLENBQUM7NEJBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOzRCQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUMxQixDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQTFCTDtZQUFDLDhCQUFVOztpQkFBQTtRQStCWCxZQUFDO0lBQUQsQ0FBQyxBQTlCRCxJQThCQztJQTlCWSxhQUFLLFFBOEJqQixDQUFBIn0=
