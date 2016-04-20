var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    "use strict";
    var Session = (function () {
        function Session() {
            this.authUrl = "http://localhost/myapp/auth.php/";
            this._isLoggedIn = false;
        }
        Session.prototype.login = function (username, token) {
            this._username = username;
            this._jwt = token;
            this._isLoggedIn = true;
            localStorage.setItem('aurelia-blog-jwt', token);
        };
        Session.prototype.logout = function () {
            this._username = "";
            this._jwt = "";
            this._isLoggedIn = false;
        };
        Object.defineProperty(Session.prototype, "username", {
            get: function () {
                return this._username;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Session.prototype, "isLoggedIn", {
            get: function () {
                return this._isLoggedIn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Session.prototype, "jwt", {
            get: function () {
                return this.jwt;
            },
            enumerable: true,
            configurable: true
        });
        Session = __decorate([
            aurelia_framework_1.noView, 
            __metadata('design:paramtypes', [])
        ], Session);
        return Session;
    }());
    exports.Session = Session;
});
//# sourceMappingURL=session.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC9zZXNzaW9uLmpzIiwic291cmNlUm9vdCI6Ii9zcmMiLCJzb3VyY2VzIjpbImF1dGgvc2Vzc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUdBO1FBRUk7WUFpQ0EsWUFBTyxHQUFXLGtDQUFrQyxDQUFDO1lBSTdDLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBbkNyQyxDQUFDO1FBR0QsdUJBQUssR0FBTCxVQUFNLFFBQVEsRUFBRSxLQUFLO1lBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLFlBQVksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUdELHdCQUFNLEdBQU47WUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7UUFHRCxzQkFBSSw2QkFBUTtpQkFBWjtnQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDOzs7V0FBQTtRQUVELHNCQUFJLCtCQUFVO2lCQUFkO2dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzVCLENBQUM7OztXQUFBO1FBRUQsc0JBQUksd0JBQUc7aUJBQVA7Z0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDcEIsQ0FBQzs7O1dBQUE7UUFqQ0w7WUFBQywwQkFBTTs7bUJBQUE7UUEwQ1AsY0FBQztJQUFELENBQUMsQUF6Q0QsSUF5Q0M7SUF6Q1ksZUFBTyxVQXlDbkIsQ0FBQSJ9
