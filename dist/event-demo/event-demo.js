var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-event-aggregator', '../services/users-service', './selected-user-changed'], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, users_service_1, selected_user_changed_1) {
    "use strict";
    var EventDemo = (function () {
        function EventDemo(usersService, ea) {
            this.usersService = usersService;
            this.ea = ea;
            this.userChangedEvent = "UserChangedEvent";
        }
        EventDemo.prototype.activate = function () {
            this.refresh();
        };
        EventDemo.prototype.refresh = function () {
            var _this = this;
            this.usersService.users().then(function (data) {
                _this.users = data;
                _this.selectedUser = _this.users[0];
                _this.userChanged();
            });
        };
        EventDemo.prototype.userChanged = function () {
            var event = new selected_user_changed_1.SelectedUserChanged();
            event.id = this.selectedUser.id;
            this.ea.publish(event);
        };
        Object.defineProperty(EventDemo.prototype, "selectedUser", {
            get: function () {
                return this._selectedUser;
            },
            set: function (value) {
                this._selectedUser = value;
                this.userChanged();
            },
            enumerable: true,
            configurable: true
        });
        EventDemo = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [users_service_1.UsersService, aurelia_event_aggregator_1.EventAggregator])
        ], EventDemo);
        return EventDemo;
    }());
    exports.EventDemo = EventDemo;
});
//# sourceMappingURL=event-demo.js.map
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZGVtby9ldmVudC1kZW1vLmpzIiwic291cmNlUm9vdCI6Ii9zcmMiLCJzb3VyY2VzIjpbImV2ZW50LWRlbW8vZXZlbnQtZGVtby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQU9BO1FBRUksbUJBQW9CLFlBQTBCLEVBQVUsRUFBbUI7WUFBdkQsaUJBQVksR0FBWixZQUFZLENBQWM7WUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFpQjtZQW1DM0UscUJBQWdCLEdBQVcsa0JBQWtCLENBQUM7UUFqQzlDLENBQUM7UUFHRCw0QkFBUSxHQUFSO1lBQ0ksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLENBQUM7UUFFRCwyQkFBTyxHQUFQO1lBQUEsaUJBTUM7WUFMRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUk7Z0JBQy9CLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCwrQkFBVyxHQUFYO1lBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSwyQ0FBbUIsRUFBRSxDQUFDO1lBQ3RDLEtBQUssQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUVELHNCQUFJLG1DQUFZO2lCQUFoQjtnQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUM5QixDQUFDO2lCQUdELFVBQWlCLEtBQUs7Z0JBQ2xCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2dCQUMzQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdkIsQ0FBQzs7O1dBTkE7UUE1Qkw7WUFBQyw4QkFBVTs7cUJBQUE7UUF1Q1gsZ0JBQUM7SUFBRCxDQUFDLEFBdENELElBc0NDO0lBdENZLGlCQUFTLFlBc0NyQixDQUFBIn0=
