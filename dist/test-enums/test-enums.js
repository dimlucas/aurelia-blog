var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', '../enums/form-status-enum'], function (require, exports, aurelia_framework_1, form_status_enum_1) {
    "use strict";
    var TestEnums = (function () {
        function TestEnums() {
        }
        TestEnums.prototype.statusChanged = function (newValue, oldValue) {
            console.log("Status changed from " + oldValue + " to " + newValue);
        };
        TestEnums.prototype.statusOkClicked = function () {
            this.status = form_status_enum_1.FormStatusEnum.Ok;
        };
        TestEnums.prototype.statusWarningClicked = function () {
            this.status = form_status_enum_1.FormStatusEnum.Warning;
        };
        TestEnums.prototype.statusErrorClicked = function () {
            this.status = form_status_enum_1.FormStatusEnum.Error;
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Number)
        ], TestEnums.prototype, "status", void 0);
        return TestEnums;
    }());
    exports.TestEnums = TestEnums;
});
//# sourceMappingURL=test-enums.js.map
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1lbnVtcy90ZXN0LWVudW1zLmpzIiwic291cmNlUm9vdCI6Ii9zcmMiLCJzb3VyY2VzIjpbInRlc3QtZW51bXMvdGVzdC1lbnVtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUdBO1FBQUE7UUFvQkEsQ0FBQztRQWhCRyxpQ0FBYSxHQUFiLFVBQWMsUUFBUSxFQUFFLFFBQVE7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxRQUFRLEdBQUcsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7UUFFRCxtQ0FBZSxHQUFmO1lBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxpQ0FBYyxDQUFDLEVBQUUsQ0FBQztRQUNwQyxDQUFDO1FBRUQsd0NBQW9CLEdBQXBCO1lBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxpQ0FBYyxDQUFDLE9BQU8sQ0FBQztRQUN6QyxDQUFDO1FBRUQsc0NBQWtCLEdBQWxCO1lBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxpQ0FBYyxDQUFDLEtBQUssQ0FBQztRQUN2QyxDQUFDO1FBaEJEO1lBQUMsNEJBQVE7O2lEQUFBO1FBa0JiLGdCQUFDO0lBQUQsQ0FBQyxBQXBCRCxJQW9CQztJQXBCWSxpQkFBUyxZQW9CckIsQ0FBQSJ9
