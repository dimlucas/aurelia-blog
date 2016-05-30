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
//# sourceMappingURL=users-service.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMvdXNlcnMtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIiwic291cmNlcyI6WyJzZXJ2aWNlcy91c2Vycy1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBS0E7UUFFSSxzQkFBb0IsSUFBZ0I7WUFGeEMsaUJBK0JDO1lBN0J1QixTQUFJLEdBQUosSUFBSSxDQUFZO1lBcUI1QixZQUFPLEdBQVcsc0NBQXNDLENBQUM7WUFHekQsa0JBQWEsR0FBVyxRQUFRLENBQUM7WUFHakMscUJBQWdCLEdBQVcsT0FBTyxDQUFDO1lBMUJ2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07Z0JBQ3RCLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEUsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQsNEJBQUssR0FBTDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUM7UUFDNUUsQ0FBQztRQUVELDJCQUFJLEdBQUosVUFBSyxFQUFFO1lBRUgsRUFBRSxDQUFBLENBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBRSxDQUFDLENBQUEsQ0FBQztnQkFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDO1lBQzlFLENBQUM7WUFDRCxJQUFJLENBQUEsQ0FBQztnQkFDRCxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLENBQUM7UUFDTCxDQUFDO1FBckJMO1lBQUMsOEJBQVU7O3dCQUFBO1FBZ0NYLG1CQUFDO0lBQUQsQ0FBQyxBQS9CRCxJQStCQztJQS9CWSxvQkFBWSxlQStCeEIsQ0FBQSJ9
