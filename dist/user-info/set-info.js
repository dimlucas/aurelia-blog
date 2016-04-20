var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', './user-info'], function (require, exports, aurelia_framework_1, user_info_1) {
    "use strict";
    var SetInfo = (function () {
        function SetInfo(userInfo) {
            this.userInfo = userInfo;
        }
        SetInfo.prototype.save = function () {
            this.userInfo.firstName = this.firstName;
            this.userInfo.lastName = this.lastName;
            this.userInfo.email = this.email;
            this.userInfo.city = this.city;
            this.userInfo.country = this.country;
        };
        SetInfo = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [user_info_1.UserInfo])
        ], SetInfo);
        return SetInfo;
    }());
    exports.SetInfo = SetInfo;
});
//# sourceMappingURL=set-info.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbmZvL3NldC1pbmZvLmpzIiwic291cmNlUm9vdCI6Ii9zcmMiLCJzb3VyY2VzIjpbInVzZXItaW5mby9zZXQtaW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUlBO1FBRUksaUJBQW9CLFFBQWtCO1lBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFFdEMsQ0FBQztRQUVELHNCQUFJLEdBQUo7WUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDekMsQ0FBQztRQWJMO1lBQUMsOEJBQVU7O21CQUFBO1FBcUJYLGNBQUM7SUFBRCxDQUFDLEFBcEJELElBb0JDO0lBcEJZLGVBQU8sVUFvQm5CLENBQUEifQ==
