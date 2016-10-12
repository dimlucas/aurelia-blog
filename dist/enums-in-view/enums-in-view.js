define(["require", "exports", '../enums/form-status-enum'], function (require, exports, form_status_enum_1) {
    "use strict";
    var TestEnums = (function () {
        function TestEnums() {
            this.status = form_status_enum_1.FormStatusEnum.Ok;
        }
        TestEnums.prototype.statusOkClicked = function () {
            this.status = form_status_enum_1.FormStatusEnum.Ok;
        };
        TestEnums.prototype.statusWarningClicked = function () {
            this.status = form_status_enum_1.FormStatusEnum.Warning;
        };
        TestEnums.prototype.statusErrorClicked = function () {
            this.status = form_status_enum_1.FormStatusEnum.Error;
        };
        return TestEnums;
    }());
    exports.TestEnums = TestEnums;
});
//# sourceMappingURL=enums-in-view.js.map
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW51bXMtaW4tdmlldy9lbnVtcy1pbi12aWV3LmpzIiwic291cmNlUm9vdCI6Ii9zcmMiLCJzb3VyY2VzIjpbImVudW1zLWluLXZpZXcvZW51bXMtaW4tdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUVBO1FBQUE7WUFFSSxXQUFNLEdBQW1CLGlDQUFjLENBQUMsRUFBRSxDQUFDO1FBYy9DLENBQUM7UUFaRyxtQ0FBZSxHQUFmO1lBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxpQ0FBYyxDQUFDLEVBQUUsQ0FBQztRQUNwQyxDQUFDO1FBRUQsd0NBQW9CLEdBQXBCO1lBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxpQ0FBYyxDQUFDLE9BQU8sQ0FBQztRQUN6QyxDQUFDO1FBRUQsc0NBQWtCLEdBQWxCO1lBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxpQ0FBYyxDQUFDLEtBQUssQ0FBQztRQUN2QyxDQUFDO1FBRUwsZ0JBQUM7SUFBRCxDQUFDLEFBaEJELElBZ0JDO0lBaEJZLGlCQUFTLFlBZ0JyQixDQUFBIn0=
