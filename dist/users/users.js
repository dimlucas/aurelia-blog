var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', '../services/users-service'], function (require, exports, aurelia_framework_1, users_service_1) {
    "use strict";
    var Users = (function () {
        function Users(usersService) {
            this.usersService = usersService;
        }
        Users.prototype.getUsers = function () {
            var _this = this;
            this.usersService.users().then(function (data) {
                _this.users = data;
                console.log(_this.users);
            });
        };
        Users.prototype.getUser = function () {
            try {
                this.usersService.user(this.userId).then(function (data) {
                    console.log(data);
                });
            }
            catch (e) {
                console.log("Error: ");
                console.log(e);
            }
        };
        Users = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [users_service_1.UsersService])
        ], Users);
        return Users;
    }());
    exports.Users = Users;
});
//# sourceMappingURL=users.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMvdXNlcnMuanMiLCJzb3VyY2VSb290IjoiL3NyYyIsInNvdXJjZXMiOlsidXNlcnMvdXNlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFJQTtRQUVJLGVBQW9CLFlBQTBCO1lBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRTlDLENBQUM7UUFHRCx3QkFBUSxHQUFSO1lBQUEsaUJBS0M7WUFKRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUk7Z0JBQy9CLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFHRCx1QkFBTyxHQUFQO1lBRUksSUFBRyxDQUFDO2dCQUNBLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUUsVUFBQyxJQUFJO29CQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QixDQUFDLENBQUUsQ0FBQztZQUNSLENBQ0E7WUFBQSxLQUFLLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsQ0FBQztRQUNMLENBQUM7UUEzQkw7WUFBQyw4QkFBVTs7aUJBQUE7UUErQlgsWUFBQztJQUFELENBQUMsQUE5QkQsSUE4QkM7SUE5QlksYUFBSyxRQThCakIsQ0FBQSJ9
