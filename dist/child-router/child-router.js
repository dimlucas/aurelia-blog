define(["require", "exports"], function (require, exports) {
    "use strict";
    var ChildRouter = (function () {
        function ChildRouter() {
        }
        ChildRouter.prototype.configureRouter = function (config, router) {
            config.map([
                { route: ['', 'overview'], name: 'overview', moduleId: './overview', nav: true, title: 'Overview' },
                { route: 'page-a', name: 'page-a', moduleId: './page-a', nav: true, title: 'Page A' },
                { route: 'page-b', name: 'page-b', moduleId: './page-b', nav: true, title: 'Page B' },
                { route: 'page-c', name: 'page-c', moduleId: './page-c', nav: true, title: 'Page C' }
            ]);
            this.router = router;
        };
        return ChildRouter;
    }());
    exports.ChildRouter = ChildRouter;
});
//# sourceMappingURL=child-router.js.map
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpbGQtcm91dGVyL2NoaWxkLXJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIiwic291cmNlcyI6WyJjaGlsZC1yb3V0ZXIvY2hpbGQtcm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBRUE7UUFBQTtRQWNBLENBQUM7UUFaRyxxQ0FBZSxHQUFmLFVBQWdCLE1BQTJCLEVBQUUsTUFBYztZQUN2RCxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNQLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7Z0JBQ25HLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO2dCQUNyRixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtnQkFDckYsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7YUFDeEYsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDekIsQ0FBQztRQUlMLGtCQUFDO0lBQUQsQ0FBQyxBQWRELElBY0M7SUFkWSxtQkFBVyxjQWN2QixDQUFBIn0=
