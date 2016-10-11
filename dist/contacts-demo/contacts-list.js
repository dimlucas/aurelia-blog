var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-event-aggregator'], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1) {
    "use strict";
    var ContactsListCustomElement = (function () {
        function ContactsListCustomElement(eventAgg) {
            this.eventAgg = eventAgg;
            this.contactsList = new Array();
        }
        ContactsListCustomElement.prototype.attached = function () {
            var _this = this;
            this.eventAgg.subscribe(this.eventName, function (data) {
                var contact = data.contact;
                _this.contactsList.push(contact);
            });
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], ContactsListCustomElement.prototype, "eventName", void 0);
        ContactsListCustomElement = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_event_aggregator_1.EventAggregator])
        ], ContactsListCustomElement);
        return ContactsListCustomElement;
    }());
    exports.ContactsListCustomElement = ContactsListCustomElement;
});
//# sourceMappingURL=contacts-list.js.map
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMtZGVtby9jb250YWN0cy1saXN0LmpzIiwic291cmNlUm9vdCI6Ii9zcmMiLCJzb3VyY2VzIjpbImNvbnRhY3RzLWRlbW8vY29udGFjdHMtbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUtBO1FBRUksbUNBQW9CLFFBQXlCO1lBQXpCLGFBQVEsR0FBUixRQUFRLENBQWlCO1lBQ3pDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxLQUFLLEVBQVcsQ0FBQztRQUM3QyxDQUFDO1FBRUQsNENBQVEsR0FBUjtZQUFBLGlCQUtDO1lBSkcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFDLElBQUk7Z0JBQ3pDLElBQUksT0FBTyxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUdEO1lBQUMsNEJBQVE7O29FQUFBO1FBZmI7WUFBQyw4QkFBVTs7cUNBQUE7UUFnQlgsZ0NBQUM7SUFBRCxDQUFDLEFBZkQsSUFlQztJQWZZLGlDQUF5Qiw0QkFlckMsQ0FBQSJ9
