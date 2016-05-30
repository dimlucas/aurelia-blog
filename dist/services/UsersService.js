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
    var UsersService = (function () {
        function UsersService(http) {
            var _this = this;
            this.http = http;
            this.baseUrl = "http://jsonplaceholder.typicode.com/";
            this.singleUserUrl = "users/";
            this.multipleUsersUrl = "users";
            this.http.configure(function (config) {
                config.useStandardConfiguration().withBaseUrl(_this.baseUrl);
            });
        }
        UsersService.prototype.users = function () {
            return this.http.fetch(this.multipleUsersUrl).then(function (data) { return data.json(); });
        };
        UsersService.prototype.user = function (id) {
            if (!isNaN(id) && (!isNaN(parseInt(id))) && (id > 0)) {
                return this.http.fetch(this.singleUserUrl + id).then(function (data) { return data.json(); });
            }
            else {
                throw new Error("Invalid user id: " + id);
            }
        };
        UsersService = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient])
        ], UsersService);
        return UsersService;
    }());
    exports.UsersService = UsersService;
});
//# sourceMappingURL=UsersService.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMvVXNlcnNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMiLCJzb3VyY2VzIjpbInNlcnZpY2VzL1VzZXJzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUtBO1FBRUksc0JBQW9CLElBQWdCO1lBRnhDLGlCQStCQztZQTdCdUIsU0FBSSxHQUFKLElBQUksQ0FBWTtZQXFCNUIsWUFBTyxHQUFXLHNDQUFzQyxDQUFDO1lBR3pELGtCQUFhLEdBQVcsUUFBUSxDQUFDO1lBR2pDLHFCQUFnQixHQUFXLE9BQU8sQ0FBQztZQTFCdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO2dCQUN0QixNQUFNLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hFLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELDRCQUFLLEdBQUw7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDO1FBQzVFLENBQUM7UUFFRCwyQkFBSSxHQUFKLFVBQUssRUFBRTtZQUVILEVBQUUsQ0FBQSxDQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUUsQ0FBQyxDQUFBLENBQUM7Z0JBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQztZQUM5RSxDQUFDO1lBQ0QsSUFBSSxDQUFBLENBQUM7Z0JBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUM5QyxDQUFDO1FBQ0wsQ0FBQztRQXJCTDtZQUFDLDhCQUFVOzt3QkFBQTtRQWdDWCxtQkFBQztJQUFELENBQUMsQUEvQkQsSUErQkM7SUEvQlksb0JBQVksZUErQnhCLENBQUEifQ==
