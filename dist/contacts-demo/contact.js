define(["require", "exports"], function (require, exports) {
    "use strict";
    var Contact = (function () {
        function Contact(firstName, lastName, email, phone) {
            this._firstName = firstName;
            this._lastName = lastName;
            this._email = email;
            this._phone = phone;
        }
        Object.defineProperty(Contact.prototype, "firstName", {
            get: function () {
                return this._firstName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Contact.prototype, "lastName", {
            get: function () {
                return this._lastName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Contact.prototype, "email", {
            get: function () {
                return this._email;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Contact.prototype, "phone", {
            get: function () {
                return this._phone;
            },
            enumerable: true,
            configurable: true
        });
        return Contact;
    }());
    exports.Contact = Contact;
});
//# sourceMappingURL=contact.js.map
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMtZGVtby9jb250YWN0LmpzIiwic291cmNlUm9vdCI6Ii9zcmMiLCJzb3VyY2VzIjpbImNvbnRhY3RzLWRlbW8vY29udGFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUFBO1FBRUksaUJBQVksU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSztZQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDO1FBRUQsc0JBQUksOEJBQVM7aUJBQWI7Z0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBSSw2QkFBUTtpQkFBWjtnQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDOzs7V0FBQTtRQUVELHNCQUFJLDBCQUFLO2lCQUFUO2dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3ZCLENBQUM7OztXQUFBO1FBRUQsc0JBQUksMEJBQUs7aUJBQVQ7Z0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDdkIsQ0FBQzs7O1dBQUE7UUFNTCxjQUFDO0lBQUQsQ0FBQyxBQTdCRCxJQTZCQztJQTdCWSxlQUFPLFVBNkJuQixDQUFBIn0=
