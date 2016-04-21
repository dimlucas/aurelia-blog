define(["require", "exports", 'jquery'], function (require, exports, $) {
    "use strict";
    var JqueryUsage = (function () {
        function JqueryUsage() {
            this.users = [];
        }
        JqueryUsage.prototype.attached = function () {
            $.ajax('http://jsonplaceholder.typicode.com/users', {
                method: 'GET',
                dataType: 'jsonp',
                success: this.fetchSuccess,
                error: this.fetchFailure
            });
        };
        JqueryUsage.prototype.fetchSuccess = function (response) {
            this.users = response;
            for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
                var user = _a[_i];
                $('#users-table').find('tbody')
                    .append($('<tr>')
                    .append('<td>' + user.name + '</td>')
                    .append('<td>' + user.username + '</td>')
                    .append('<td>' + user.email + '</td>')
                    .append('<td>' + user.website + '</td>'));
            }
        };
        JqueryUsage.prototype.fetchFailure = function (response) {
            console.log("Fetch Failed: " + response);
        };
        return JqueryUsage;
    }());
    exports.JqueryUsage = JqueryUsage;
});
//# sourceMappingURL=jquery-usage.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianF1ZXJ5LXVzYWdlL2pxdWVyeS11c2FnZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIiwic291cmNlcyI6WyJqcXVlcnktdXNhZ2UvanF1ZXJ5LXVzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBRUE7UUFBQTtZQTJCSSxVQUFLLEdBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUM7UUExQkcsOEJBQVEsR0FBUjtZQUNJLENBQUMsQ0FBQyxJQUFJLENBQUMsMkNBQTJDLEVBQUU7Z0JBQ2hELE1BQU0sRUFBRSxLQUFLO2dCQUNiLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVk7Z0JBQzFCLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWTthQUMzQixDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQsa0NBQVksR0FBWixVQUFhLFFBQVE7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7WUFDdEIsR0FBRyxDQUFBLENBQWEsVUFBVSxFQUFWLEtBQUEsSUFBSSxDQUFDLEtBQUssRUFBVixjQUFVLEVBQVYsSUFBVSxDQUFDO2dCQUF2QixJQUFJLElBQUksU0FBQTtnQkFDUixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztxQkFDakIsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7cUJBQ1QsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztxQkFDcEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztxQkFDeEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztxQkFDckMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDakU7UUFDTCxDQUFDO1FBRUQsa0NBQVksR0FBWixVQUFhLFFBQVE7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBR0wsa0JBQUM7SUFBRCxDQUFDLEFBNUJELElBNEJDO0lBNUJZLG1CQUFXLGNBNEJ2QixDQUFBIn0=
