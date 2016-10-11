define(["require", "exports", '../enums/form-status-enum'], function (require, exports, form_status_enum_1) {
    "use strict";
    var EnumsViewEngineHooks = (function () {
        function EnumsViewEngineHooks() {
        }
        EnumsViewEngineHooks.prototype.beforeBind = function (view) {
            view.overrideContext.FormStatusEnum = form_status_enum_1.FormStatusEnum;
        };
        return EnumsViewEngineHooks;
    }());
    exports.EnumsViewEngineHooks = EnumsViewEngineHooks;
});
//# sourceMappingURL=enums-view-engine-hooks.js.map
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW51bXMtdmlldy1lbmdpbmUtaG9va3MvZW51bXMtdmlldy1lbmdpbmUtaG9va3MuanMiLCJzb3VyY2VSb290IjoiL3NyYyIsInNvdXJjZXMiOlsiZW51bXMtdmlldy1lbmdpbmUtaG9va3MvZW51bXMtdmlldy1lbmdpbmUtaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFNQTtRQUFBO1FBSUEsQ0FBQztRQUhHLHlDQUFVLEdBQVYsVUFBVyxJQUFJO1lBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEdBQUcsaUNBQWMsQ0FBQztRQUN6RCxDQUFDO1FBQ0wsMkJBQUM7SUFBRCxDQUFDLEFBSkQsSUFJQztJQUpZLDRCQUFvQix1QkFJaEMsQ0FBQSJ9
