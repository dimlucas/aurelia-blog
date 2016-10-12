var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-fetch-client', 'fetch'], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    var Users = (function () {
        function Users(http) {
            this.http = http;
            this.users = [];
            http.configure(function (config) {
                config.useStandardConfiguration().withBaseUrl("http://jsonplaceholder.typicode.com/");
            });
        }
        Users.prototype.activate = function () {
            var _this = this;
            this.http.fetch('users').then(function (response) { return response.json(); }).then(function (data) {
                _this.users = data;
                console.log(data);
            });
        };
        Users = __decorate([
            aurelia_framework_1.autoinject,
            aurelia_framework_1.useView('./multiple-views/list-view.html'), 
            __metadata('design:paramtypes', [(typeof (_a = typeof aurelia_fetch_client_1.HttpClient !== 'undefined' && aurelia_fetch_client_1.HttpClient) === 'function' && _a) || Object])
        ], Users);
        return Users;
        var _a;
    }());
    exports.Users = Users;
});
//# sourceMappingURL=users.js.map
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlwbGUtdmlld3MvdXNlcnMuanMiLCJzb3VyY2VSb290IjoiL3NyYyIsInNvdXJjZXMiOlsibXVsdGlwbGUtdmlld3MvdXNlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFPQTtRQUVJLGVBQW9CLElBQWdCO1lBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7WUFhcEMsVUFBSyxHQUFVLEVBQUUsQ0FBQztZQVpkLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO2dCQUNqQixNQUFNLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxXQUFXLENBQUMsc0NBQXNDLENBQUMsQ0FBQztZQUMxRixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCx3QkFBUSxHQUFSO1lBQUEsaUJBS0M7WUFKRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSTtnQkFDaEUsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBaEJMO1lBQUMsOEJBQVU7WUFFViwyQkFBTyxDQUFDLGlDQUFpQyxDQUFDOztpQkFBQTtRQWtCM0MsWUFBQzs7SUFBRCxDQUFDLEFBakJELElBaUJDO0lBakJZLGFBQUssUUFpQmpCLENBQUEifQ==
