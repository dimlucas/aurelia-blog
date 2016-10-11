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
            this.firstName = this.userInfo.firstName;
            this.lastName = this.userInfo.lastName;
            this.email = this.userInfo.email;
            this.country = this.userInfo.country;
            this.city = this.userInfo.city;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbmZvL3NldC1pbmZvLmpzIiwic291cmNlUm9vdCI6Ii9zcmMiLCJzb3VyY2VzIjpbInVzZXItaW5mby9zZXQtaW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUlBO1FBRUksaUJBQW9CLFFBQWtCO1lBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7WUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztZQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ25DLENBQUM7UUFFRCxzQkFBSSxHQUFKO1lBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3pDLENBQUM7UUFqQkw7WUFBQyw4QkFBVTs7bUJBQUE7UUF5QlgsY0FBQztJQUFELENBQUMsQUF4QkQsSUF3QkM7SUF4QlksZUFBTyxVQXdCbkIsQ0FBQSJ9
