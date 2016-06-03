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
        Users.prototype.activate = function () {
            var _this = this;
            this.usersService.users().then(function (data) {
                _this.users = data;
                console.log("Users: ");
                console.log(_this.users);
            });
        };
        Users.prototype.getUsers = function () {
        };
        Users.prototype.getUser = function () {
            try {
            }
            catch (e) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMvdXNlcnMuanMiLCJzb3VyY2VSb290IjoiL3NyYyIsInNvdXJjZXMiOlsidXNlcnMvdXNlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFJQTtRQUVJLGVBQW9CLFlBQTBCO1lBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRTlDLENBQUM7UUFFRCx3QkFBUSxHQUFSO1lBQUEsaUJBTUM7WUFMRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUk7Z0JBQy9CLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFHRCx3QkFBUSxHQUFSO1FBRUEsQ0FBQztRQUdELHVCQUFPLEdBQVA7WUFFSSxJQUFHLENBQUM7WUFFSixDQUNBO1lBQUEsS0FBSyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUVULENBQUM7UUFDTCxDQUFDO1FBN0JMO1lBQUMsOEJBQVU7O2lCQUFBO1FBaUNYLFlBQUM7SUFBRCxDQUFDLEFBaENELElBZ0NDO0lBaENZLGFBQUssUUFnQ2pCLENBQUEifQ==
