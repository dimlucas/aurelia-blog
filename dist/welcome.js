define(["require", "exports"], function (require, exports) {
    "use strict";
    var Welcome = (function () {
        function Welcome() {
            this.heading = 'Welcome to the Aurelia Navigation App!';
            this.firstName = 'John';
            this.lastName = 'Doe';
            this.previousValue = this.fullName;
        }
        Object.defineProperty(Welcome.prototype, "fullName", {
            get: function () {
                return this.firstName + " " + this.lastName;
            },
            enumerable: true,
            configurable: true
        });
        Welcome.prototype.submit = function () {
            this.previousValue = this.fullName;
            alert("Welcome, " + this.fullName + "!");
        };
        Welcome.prototype.canDeactivate = function () {
            if (this.fullName !== this.previousValue) {
                return confirm('Are you sure you want to leave?');
            }
        };
        return Welcome;
    }());
    exports.Welcome = Welcome;
    var UpperValueConverter = (function () {
        function UpperValueConverter() {
        }
        UpperValueConverter.prototype.toView = function (value) {
            return value && value.toUpperCase();
        };
        return UpperValueConverter;
    }());
    exports.UpperValueConverter = UpperValueConverter;
});
//# sourceMappingURL=welcome.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIiwic291cmNlcyI6WyJ3ZWxjb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBRUE7UUFBQTtZQUNFLFlBQU8sR0FBRyx3Q0FBd0MsQ0FBQztZQUNuRCxjQUFTLEdBQUcsTUFBTSxDQUFDO1lBQ25CLGFBQVEsR0FBRyxLQUFLLENBQUM7WUFDakIsa0JBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBcUJoQyxDQUFDO1FBZEMsc0JBQUksNkJBQVE7aUJBQVo7Z0JBQ0UsTUFBTSxDQUFJLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLFFBQVUsQ0FBQztZQUM5QyxDQUFDOzs7V0FBQTtRQUVELHdCQUFNLEdBQU47WUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDbkMsS0FBSyxDQUFDLGNBQVksSUFBSSxDQUFDLFFBQVEsTUFBRyxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUVELCtCQUFhLEdBQWI7WUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxNQUFNLENBQUMsT0FBTyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7WUFDcEQsQ0FBQztRQUNILENBQUM7UUFDSCxjQUFDO0lBQUQsQ0FBQyxBQXpCRCxJQXlCQztJQXpCWSxlQUFPLFVBeUJuQixDQUFBO0lBRUQ7UUFBQTtRQUlBLENBQUM7UUFIQyxvQ0FBTSxHQUFOLFVBQU8sS0FBSztZQUNWLE1BQU0sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RDLENBQUM7UUFDSCwwQkFBQztJQUFELENBQUMsQUFKRCxJQUlDO0lBSlksMkJBQW1CLHNCQUkvQixDQUFBIn0=
