var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-dialog'], function (require, exports, aurelia_framework_1, aurelia_dialog_1) {
    "use strict";
    var InfoDialog = (function () {
        function InfoDialog(controller) {
            this.controller = controller;
        }
        InfoDialog.prototype.activate = function (model) {
            this.info = model;
        };
        InfoDialog.prototype.yes = function () {
            this.controller.ok(this.info);
        };
        InfoDialog.prototype.no = function () {
            this.controller.cancel();
        };
        InfoDialog = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_dialog_1.DialogController])
        ], InfoDialog);
        return InfoDialog;
    }());
    exports.InfoDialog = InfoDialog;
});
//# sourceMappingURL=info-dialog.js.map
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWRlbW8vaW5mby1kaWFsb2cuanMiLCJzb3VyY2VSb290IjoiL3NyYyIsInNvdXJjZXMiOlsiZGlhbG9nLWRlbW8vaW5mby1kaWFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFLQTtRQUVJLG9CQUFvQixVQUE0QjtZQUE1QixlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUVoRCxDQUFDO1FBR0QsNkJBQVEsR0FBUixVQUFTLEtBQUs7WUFDVixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDO1FBS0Qsd0JBQUcsR0FBSDtZQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBSUQsdUJBQUUsR0FBRjtZQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDN0IsQ0FBQztRQXZCTDtZQUFDLDhCQUFVOztzQkFBQTtRQTBCWCxpQkFBQztJQUFELENBQUMsQUF6QkQsSUF5QkM7SUF6Qlksa0JBQVUsYUF5QnRCLENBQUEifQ==
