var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-dialog', '../user-info/user-info', './info-dialog'], function (require, exports, aurelia_framework_1, aurelia_dialog_1, user_info_1, info_dialog_1) {
    "use strict";
    var DialogDemo = (function () {
        function DialogDemo(userInfo, dialogService) {
            this.userInfo = userInfo;
            this.dialogService = dialogService;
        }
        DialogDemo.prototype.open = function () {
            this.dialogService.open({
                viewModel: info_dialog_1.InfoDialog,
                model: this.userInfo
            }).then(function (response) {
                if (response.wasCancelled) {
                    console.log("The information is invalid");
                }
                else {
                    console.log("The information is valid");
                }
            });
        };
        DialogDemo = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [user_info_1.UserInfo, aurelia_dialog_1.DialogService])
        ], DialogDemo);
        return DialogDemo;
    }());
    exports.DialogDemo = DialogDemo;
});
//# sourceMappingURL=dialog-demo.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWRlbW8vZGlhbG9nLWRlbW8uanMiLCJzb3VyY2VSb290IjoiL3NyYyIsInNvdXJjZXMiOlsiZGlhbG9nLWRlbW8vZGlhbG9nLWRlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFNQTtRQUNJLG9CQUFtQixRQUFrQixFQUFVLGFBQTRCO1lBQXhELGFBQVEsR0FBUixRQUFRLENBQVU7WUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUMzRSxDQUFDO1FBRUQseUJBQUksR0FBSjtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO2dCQUNwQixTQUFTLEVBQUUsd0JBQVU7Z0JBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUTthQUN2QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUTtnQkFDWixFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUEsQ0FBQztvQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDO2dCQUNELElBQUksQ0FBQSxDQUFDO29CQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztnQkFDNUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ1IsQ0FBQztRQWpCTDtZQUFDLDhCQUFVOztzQkFBQTtRQWtCWCxpQkFBQztJQUFELENBQUMsQUFqQkQsSUFpQkM7SUFqQlksa0JBQVUsYUFpQnRCLENBQUEifQ==
