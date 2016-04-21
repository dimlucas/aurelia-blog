var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-event-aggregator', './contact'], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, contact_1) {
    "use strict";
    var ContactFormCustomElement = (function () {
        function ContactFormCustomElement(eventAgg) {
            this.eventAgg = eventAgg;
            this.firstName = "";
            this.firstNameErr = false;
            this.firstNameDiv = "form-group";
            this.firstNameLbl = "This field is required";
            this.lastName = "";
            this.lastNameErr = false;
            this.lastNameDiv = "form-group";
            this.lastNameLbl = "This field is required";
            this.email = "";
            this.emailDiv = "form-group";
            this.emailErr = false;
            this.emailLbl = "This field is required";
            this.phone = "";
            this.phoneDiv = "form-group";
            this.phoneLbl = "This field is required";
            this.phoneErr = false;
        }
        ContactFormCustomElement.prototype.checkFirstName = function () {
            if (this.firstName == "") {
                this.firstNameErr = true;
                this.firstNameDiv = "form-group has-error";
                return true;
            }
            else {
                this.firstNameErr = false;
                this.firstNameDiv = "form-group has-success";
                return false;
            }
        };
        ContactFormCustomElement.prototype.checkLastName = function () {
            if (this.lastName == "") {
                this.lastNameErr = true;
                this.lastNameDiv = "form-group has-error";
                return true;
            }
            else {
                this.lastNameErr = false;
                this.lastNameDiv = "form-group has-success";
                return false;
            }
        };
        ContactFormCustomElement.prototype.checkEmail = function () {
            if (this.email == "") {
                this.emailErr = true;
                this.emailDiv = "form-group has-error";
                return true;
            }
            else {
                this.emailErr = false;
                this.emailDiv = "form-group has-success";
                return false;
            }
        };
        ContactFormCustomElement.prototype.checkPhone = function () {
            if (this.phone == "") {
                this.phoneErr = true;
                this.phoneDiv = "form-group has-error";
                this.phoneLbl = "This field is required";
                return true;
            }
            else if (this.phone.length < 10) {
                this.phoneLbl = "Invalid phone number";
                this.phoneErr = true;
                this.phoneDiv = "form-group has-error";
                return true;
            }
            else {
                this.phoneErr = false;
                this.phoneDiv = "form-group has-success";
                return false;
            }
        };
        ContactFormCustomElement.prototype.save = function () {
            if ((!this.checkFirstName()) && (!this.checkLastName()) && (!this.checkEmail()) && (!this.checkPhone())) {
                var contact = new contact_1.Contact(this.firstName, this.lastName, this.email, this.phone);
                this.eventAgg.publish(this.eventName, { contact: contact });
                this.clear();
            }
        };
        ContactFormCustomElement.prototype.clear = function () {
            this.firstName = this.lastName = this.email = this.phone = "";
            this.firstNameErr = this.lastNameErr = this.emailErr = this.phoneErr = false;
            this.firstNameDiv = this.lastNameDiv = this.emailDiv = this.phoneDiv = "form-group";
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], ContactFormCustomElement.prototype, "eventName", void 0);
        ContactFormCustomElement = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [aurelia_event_aggregator_1.EventAggregator])
        ], ContactFormCustomElement);
        return ContactFormCustomElement;
    }());
    exports.ContactFormCustomElement = ContactFormCustomElement;
});
//# sourceMappingURL=contact-form.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMtZGVtby9jb250YWN0LWZvcm0uanMiLCJzb3VyY2VSb290IjoiL3NyYyIsInNvdXJjZXMiOlsiY29udGFjdHMtZGVtby9jb250YWN0LWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFLQTtRQUVJLGtDQUFvQixRQUF5QjtZQUF6QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtZQTZFN0MsY0FBUyxHQUFXLEVBQUUsQ0FBQztZQUN2QixpQkFBWSxHQUFZLEtBQUssQ0FBQztZQUM5QixpQkFBWSxHQUFXLFlBQVksQ0FBQztZQUNwQyxpQkFBWSxHQUFXLHdCQUF3QixDQUFDO1lBRWhELGFBQVEsR0FBVyxFQUFFLENBQUM7WUFDdEIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7WUFDN0IsZ0JBQVcsR0FBVyxZQUFZLENBQUM7WUFDbkMsZ0JBQVcsR0FBVyx3QkFBd0IsQ0FBQztZQUUvQyxVQUFLLEdBQVcsRUFBRSxDQUFDO1lBQ25CLGFBQVEsR0FBVyxZQUFZLENBQUM7WUFDaEMsYUFBUSxHQUFZLEtBQUssQ0FBQztZQUMxQixhQUFRLEdBQVcsd0JBQXdCLENBQUM7WUFFNUMsVUFBSyxHQUFXLEVBQUUsQ0FBQztZQUNuQixhQUFRLEdBQVcsWUFBWSxDQUFDO1lBQ2hDLGFBQVEsR0FBVyx3QkFBd0IsQ0FBQztZQUM1QyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBN0YxQixDQUFDO1FBRUQsaURBQWMsR0FBZDtZQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQztnQkFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsc0JBQXNCLENBQUM7Z0JBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsQ0FBQztZQUNELElBQUksQ0FBQSxDQUFDO2dCQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixJQUFJ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
