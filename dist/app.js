define(["require", "exports", 'aurelia-auth'], function (require, exports, aurelia_auth_1) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Aurelia';
            config.addPipelineStep('authorize', aurelia_auth_1.AuthorizeStep);
            config.map([
                {
                    route: ['', 'start-page'],
                    name: 'start-page',
                    moduleId: './start-page/start-page',
                    nav: false,
                    title: 'Welcome'
                },
                { route: 'dialog-demo', name: 'dialog-demo', moduleId: './dialog-demo/dialog-demo', nav: true, title: 'Dialog Demo' },
                { route: 'html-demo', name: 'html-demo', moduleId: './html-only-demo/html-only-demo', nav: true, title: 'HTML Only Elements' },
                { route: 'users', name: 'users', moduleId: './multiple-views/users', nav: true, title: 'Users(Multi Views)' },
                { route: 'form-demo', name: 'form-demo', moduleId: './form-demo/form-demo', nav: true, title: 'Form Demo' },
                { route: 'form-inputs', name: 'form-inputs', moduleId: './form-inputs/form-inputs', nav: true, title: 'More Form Inputs' },
                { route: 'event-demo', name: 'event-demo', moduleId: './event-demo/event-demo', nav: true, title: 'Events Demo' },
                { route: 'users-management', name: 'users', moduleId: 'users/users', nav: true, title: 'Users Management' },
                { route: 'child-router', name: 'child-router', moduleId: './child-router/child-router', nav: true, title: 'Child Router' },
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});
//# sourceMappingURL=app.js.map
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMiLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUdBO1FBQUE7UUFtQ0EsQ0FBQztRQWhDQyw2QkFBZSxHQUFmLFVBQWdCLE1BQTJCLEVBQUUsTUFBYztZQUN6RCxNQUFNLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUV6QixNQUFNLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSw0QkFBYSxDQUFDLENBQUM7WUFFbkQsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDUDtvQkFDSSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDO29CQUN6QixJQUFJLEVBQUUsWUFBWTtvQkFDbEIsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsR0FBRyxFQUFFLEtBQUs7b0JBQ1YsS0FBSyxFQUFFLFNBQVM7aUJBQ25CO2dCQUtELEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUU7Z0JBQ3JILEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxpQ0FBaUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRTtnQkFHOUgsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixFQUFFO2dCQUM3RyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFO2dCQUMzRyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsMkJBQTJCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUU7Z0JBQzFILEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSx5QkFBeUIsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUU7Z0JBQ2pILEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRTtnQkFDM0csRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLDZCQUE2QixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRTthQUU3SCxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixDQUFDO1FBQ0gsVUFBQztJQUFELENBQUMsQUFuQ0QsSUFtQ0M7SUFuQ1ksV0FBRyxNQW1DZixDQUFBIn0=
