define(["require", "exports"], function (require, exports) {
    "use strict";
    var StartPage = (function () {
        function StartPage() {
            this.firstName = "";
            this.lastName = "";
            this.firstNameLbl = "Your first name";
            this.lastNameLbl = "Your last name";
            this.welcomeMessage = "Welcome to Aurelia";
        }
        Object.defineProperty(StartPage.prototype, "fullName", {
            get: function () {
                return this.firstName + " " + this.lastName;
            },
            enumerable: true,
            configurable: true
        });
        return StartPage;
    }());
    exports.StartPage = StartPage;
});
//# sourceMappingURL=start-page.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtcGFnZS9zdGFydC1wYWdlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMiLCJzb3VyY2VzIjpbInN0YXJ0LXBhZ2Uvc3RhcnQtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUlBO1FBQUE7WUFXSSxjQUFTLEdBQVcsRUFBRSxDQUFDO1lBQ3ZCLGFBQVEsR0FBVyxFQUFFLENBQUM7WUFFdEIsaUJBQVksR0FBVyxpQkFBaUIsQ0FBQztZQUN6QyxnQkFBVyxHQUFXLGdCQUFnQixDQUFDO1lBQ3ZDLG1CQUFjLEdBQVcsb0JBQW9CLENBQUM7UUFDbEQsQ0FBQztRQVhHLHNCQUFJLCtCQUFRO2lCQUFaO2dCQUNJLE1BQU0sQ0FBSSxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxRQUFVLENBQUM7WUFDaEQsQ0FBQzs7O1dBQUE7UUFTTCxnQkFBQztJQUFELENBQUMsQUFqQkQsSUFpQkM7SUFqQlksaUJBQVMsWUFpQnJCLENBQUEifQ==
