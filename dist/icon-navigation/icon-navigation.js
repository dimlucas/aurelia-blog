define(["require", "exports"], function (require, exports) {
    "use strict";
    var IconNavigation = (function () {
        function IconNavigation() {
        }
        IconNavigation.prototype.configureRouter = function (routerConfig, router) {
            routerConfig.map([
                { route: ['', 'overview'], name: 'overview', moduleId: './overview', nav: true, title: 'Overview', settings: { iconClass: 'fa fa-database' } },
                { route: 'calendar', name: 'calendar', moduleId: './calendar', nav: true, title: 'Calendar', settings: { iconClass: 'fa fa-calendar' } },
                { route: 'documents', name: 'documents', moduleId: './documents', nav: true, title: 'Documents', settings: { iconClass: 'fa fa-briefcase' } },
                { route: 'settings', name: 'settings', moduleId: './settings', nav: true, title: 'Settings', settings: { iconClass: 'fa fa-cogs' } }
            ]);
            this.router = router;
        };
        return IconNavigation;
    }());
    exports.IconNavigation = IconNavigation;
});
//# sourceMappingURL=icon-navigation.js.map
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1uYXZpZ2F0aW9uL2ljb24tbmF2aWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIiwic291cmNlcyI6WyJpY29uLW5hdmlnYXRpb24vaWNvbi1uYXZpZ2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBRUE7UUFBQTtRQWNBLENBQUM7UUFaRyx3Q0FBZSxHQUFmLFVBQWdCLFlBQWlDLEVBQUUsTUFBYztZQUM3RCxZQUFZLENBQUMsR0FBRyxDQUFDO2dCQUNiLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLEVBQUU7Z0JBQzdJLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFO2dCQUN4SSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsRUFBRTtnQkFDN0ksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxFQUFFO2FBQ3ZJLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLENBQUM7UUFHTCxxQkFBQztJQUFELENBQUMsQUFkRCxJQWNDO0lBZFksc0JBQWMsaUJBYzFCLENBQUEifQ==
