var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', '../services/users-service', 'aurelia-event-aggregator'], function (require, exports, aurelia_framework_1, users_service_1, aurelia_event_aggregator_1) {
    "use strict";
    var UserDetailsCustomElement = (function () {
        function UserDetailsCustomElement(usersService, ea) {
            this.usersService = usersService;
            this.ea = ea;
        }
        UserDetailsCustomElement.prototype.bind = function () {
            var _this = this;
            this.ea.subscribe(this.userChangedEvent, function (payload) {
                _this.fetchUser(payload.id);
            });
        };
        UserDetailsCustomElement.prototype.fetchUser = function (id) {
            var _this = this;
            this.usersService.user(id).then(function (data) {
                _this.user = data;
            });
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UserDetailsCustomElement.prototype, "userChangedEvent", void 0);
        UserDetailsCustomElement = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [users_service_1.UsersService, aurelia_event_aggregator_1.EventAggregator])
        ], UserDetailsCustomElement);
        return UserDetailsCustomElement;
    }());
    exports.UserDetailsCustomElement = UserDetailsCustomElement;
});
//# sourceMappingURL=user-details.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZGVtby91c2VyLWRldGFpbHMuanMiLCJzb3VyY2VSb290IjoiL3NyYyIsInNvdXJjZXMiOlsiZXZlbnQtZGVtby91c2VyLWRldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFLQTtRQUVJLGtDQUFvQixZQUEwQixFQUFVLEVBQW1CO1lBQXZELGlCQUFZLEdBQVosWUFBWSxDQUFjO1lBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBaUI7UUFFM0UsQ0FBQztRQUVELHVDQUFJLEdBQUo7WUFBQSxpQkFNQztZQUpHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxVQUFBLE9BQU87Z0JBRTVDLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELDRDQUFTLEdBQVQsVUFBVSxFQUFFO1lBQVosaUJBSUM7WUFIRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO2dCQUNoQyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNyQixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7UUFFRDtZQUFDLDRCQUFROzswRUFBQTtRQXJCYjtZQUFDLDhCQUFVOztvQ0FBQTtRQXVCWCwrQkFBQztJQUFELENBQUMsQUF0QkQsSUFzQkM7SUF0QlksZ0NBQXdCLDJCQXNCcEMsQ0FBQSJ9
