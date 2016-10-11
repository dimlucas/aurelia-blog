define(["require", "exports"], function (require, exports) {
    "use strict";
    var FormDemo = (function () {
        function FormDemo() {
            this.firstName = "";
            this.firstNamePlaceholder = "First Name";
            this.firstNameDiv = "form-group";
            this.firstNameErr = false;
            this.firstNameLbl = "";
            this.lastName = "";
            this.lastNamePlaceholder = "Last Name";
            this.lastNameDiv = "form-group";
            this.lastNameErr = false;
            this.lastNameLbl = "";
            this.email = "";
            this.emailPlaceholder = "Email";
            this.emailDiv = "form-group";
            this.emailErr = false;
            this.emailLbl = "";
            this.password = "";
            this.passwordPlaceholder = "Password";
            this.passwordDiv = "form-group";
            this.passwordErr = false;
            this.passwordLbl = "";
            this.confPassword = "";
            this.confPasswordPlaceholder = "Confirm Password";
            this.confPasswordDiv = "form-group";
            this.confPasswordErr = false;
            this.confPasswordLbl = "";
            this.tosBox = false;
            this.successDiv = "form-group has-success";
            this.errorDiv = "form-group has-error";
        }
        FormDemo.prototype.signUp = function () {
            this.validateFirstName();
            this.validateLastName();
            this.validateEmail();
            this.validatePassword();
            this.validateConfPassword();
            if (this.firstName || this.lastNameErr || this.emailErr || this.passwordErr || this.confPasswordErr) {
            }
            else {
            }
        };
        FormDemo.prototype.validateFirstName = function () {
            if (this.firstName == "") {
                this.firstNameDiv = this.errorDiv;
                this.firstNameErr = true;
                this.firstNameLbl = "This field is required";
            }
            else {
                this.firstNameDiv = this.successDiv;
                this.firstNameErr = false;
                this.firstNameLbl = "";
            }
        };
        FormDemo.prototype.validateLastName = function () {
            if (this.lastName == "") {
                this.lastNameDiv = this.errorDiv;
                this.lastNameErr = true;
                this.lastNameLbl = "This field is required";
            }
            else {
                this.lastNameDiv = this.successDiv;
                this.lastNameErr = false;
                this.lastNameLbl = "";
            }
        };
        FormDemo.prototype.validateEmail = function () {
            if (this.email == "") {
                this.emailDiv = this.errorDiv;
                this.emailErr = true;
                this.emailLbl = "This field is required";
            }
            else {
                this.emailDiv = this.successDiv;
                this.emailErr = false;
                this.emailLbl = "";
            }
        };
        FormDemo.prototype.validatePassword = function () {
            if (this.password == "") {
                this.passwordDiv = this.errorDiv;
                this.passwordErr = true;
                this.passwordLbl = "This field is required";
            }
            else if (this.password.length < 6) {
                this.passwordDiv = this.errorDiv;
                this.passwordErr = true;
                this.passwordLbl = "Your password is too short";
            }
            else if ((this.confPassword.length > 0)) {
                this.checkPasswords();
            }
            else {
                this.passwordDiv = this.successDiv;
                this.passwordErr = false;
                this.passwordLbl = "";
            }
        };
        FormDemo.prototype.validateConfPassword = function () {
            if (this.confPassword == "") {
                this.confPasswordDiv = this.errorDiv;
                this.confPasswordLbl = "This field is required";
                this.confPasswordErr = true;
            }
            else if (this.confPassword.length < 6) {
                this.confPasswordDiv = this.errorDiv;
                this.confPasswordLbl = "Your password is too short";
                this.confPasswordErr = true;
            }
            else if ((this.password.length > 0)) {
                this.checkPasswords();
            }
            else {
                this.confPasswordDiv = this.successDiv;
                this.confPasswordErr = false;
                this.confPasswordLbl = "";
            }
        };
        FormDemo.prototype.checkPasswords = function () {
            if (this.confPassword != this.password) {
                this.passwordDiv = this.errorDiv;
                this.confPasswordDiv = this.errorDiv;
                this.confPasswordErr = true;
                this.confPasswordLbl = "Passwords do not match";
                this.passwordLbl = "";
            }
            else {
                this.passwordDiv = this.successDiv;
                this.confPasswordDiv = this.successDiv;
                this.passwordErr = false;
                this.confPasswordErr = false;
                this.passwordLbl = "";
                this.confPasswordLbl = "";
            }
        };
        return FormDemo;
    }());
    exports.FormDemo = FormDemo;
});
//# sourceMappingURL=form-demo.js.map
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1kZW1vL2Zvcm0tZGVtby5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIiwic291cmNlcyI6WyJmb3JtLWRlbW8vZm9ybS1kZW1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBQUE7UUFBQTtZQW9ISSxjQUFTLEdBQVcsRUFBRSxDQUFDO1lBQ3ZCLHlCQUFvQixHQUFXLFlBQVksQ0FBQztZQUM1QyxpQkFBWSxHQUFXLFlBQVksQ0FBQztZQUNwQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztZQUM5QixpQkFBWSxHQUFXLEVBQUUsQ0FBQztZQUUxQixhQUFRLEdBQVcsRUFBRSxDQUFDO1lBQ3RCLHdCQUFtQixHQUFXLFdBQVcsQ0FBQztZQUMxQyxnQkFBVyxHQUFXLFlBQVksQ0FBQztZQUNuQyxnQkFBVyxHQUFZLEtBQUssQ0FBQztZQUM3QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztZQUV6QixVQUFLLEdBQVcsRUFBRSxDQUFDO1lBQ25CLHFCQUFnQixHQUFXLE9BQU8sQ0FBQztZQUNuQyxhQUFRLEdBQVcsWUFBWSxDQUFDO1lBQ2hDLGFBQVEsR0FBWSxLQUFLLENBQUM7WUFDMUIsYUFBUSxHQUFXLEVBQUUsQ0FBQztZQUV0QixhQUFRLEdBQVcsRUFBRSxDQUFDO1lBQ3RCLHdCQUFtQixHQUFXLFVBQVUsQ0FBQztZQUN6QyxnQkFBVyxHQUFXLFlBQVksQ0FBQztZQUNuQyxnQkFBVyxHQUFZLEtBQUssQ0FBQztZQUM3QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztZQUV6QixpQkFBWSxHQUFXLEVBQUUsQ0FBQztZQUMxQiw0QkFBdUIsR0FBVyxrQkFBa0IsQ0FBQztZQUNyRCxvQkFBZSxHQUFXLFlBQVksQ0FBQztZQUN2QyxvQkFBZSxHQUFZLEtBQUssQ0FBQztZQUNqQyxvQkFBZSxHQUFXLEVBQUUsQ0FBQztZQUU3QixXQUFNLEdBQVksS0FBSyxDQUFDO1lBR2hCLGVBQVUsR0FBRyx3QkFBd0IsQ0FBQztZQUN0QyxhQUFRLEdBQUcsc0JBQXNCLENBQUM7UUFDOUMs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
