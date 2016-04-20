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
    var ViewInfo = (function () {
        function ViewInfo(userInfo) {
            this.userInfo = userInfo;
        }
        ViewInfo = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [user_info_1.UserInfo])
        ], ViewInfo);
        return ViewInfo;
    }());
    exports.ViewInfo = ViewInfo;
});
//# sourceMappingURL=view-info.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbmZvL3ZpZXctaW5mby5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIiwic291cmNlcyI6WyJ1c2VyLWluZm8vdmlldy1pbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBSUE7UUFFSSxrQkFBb0IsUUFBa0I7WUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUV0QyxDQUFDO1FBTEw7WUFBQyw4QkFBVTs7b0JBQUE7UUFPWCxlQUFDO0lBQUQsQ0FBQyxBQU5ELElBTUM7SUFOWSxnQkFBUSxXQU1wQixDQUFBIn0=
