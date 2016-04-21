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
                { route: 'todos', name: 'todos', moduleId: './todos/todos', nav: true, title: 'To-Do List' },
                { route: 'login', name: 'login', moduleId: './auth/login', nav: true, title: 'Login' },
                { route: 'view-info', name: 'view-info', moduleId: './user-info/view-info', nav: true, title: 'View Personal Information' },
                { route: 'set-info', name: 'set-info', moduleId: './user-info/set-info', nav: true, title: 'Update Personal Information' },
                { route: 'dialog-demo', name: 'dialog-demo', moduleId: './dialog-demo/dialog-demo', nav: true, title: 'Dialog Demo' },
                { route: 'html-demo', name: 'html-demo', moduleId: './html-only-demo/html-only-demo', nav: true, title: 'HTML Only Elements' },
                { route: 'contacts-demo', name: 'contacts-demo', moduleId: './contacts-demo/contacts-demo', nav: true, title: 'Contacts Demo' }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});
//# sourceMappingURL=app.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMiLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUdBO1FBQUE7UUEyQkEsQ0FBQztRQXhCQyw2QkFBZSxHQUFmLFVBQWdCLE1BQTJCLEVBQUUsTUFBYztZQUN6RCxNQUFNLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUV6QixNQUFNLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSw0QkFBYSxDQUFDLENBQUM7WUFFbkQsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDUDtvQkFDSSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDO29CQUN6QixJQUFJLEVBQUUsWUFBWTtvQkFDbEIsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsR0FBRyxFQUFFLEtBQUs7b0JBQ1YsS0FBSyxFQUFFLFNBQVM7aUJBQ25CO2dCQUNELEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFO2dCQUM1RixFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtnQkFDdEYsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLDJCQUEyQixFQUFFO2dCQUMzSCxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsNkJBQTZCLEVBQUU7Z0JBQzFILEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUU7Z0JBQ3JILEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxpQ0FBaUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRTtnQkFDOUgsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLCtCQUErQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRTthQUNsSSxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixDQUFDO1FBQ0gsVUFBQztJQUFELENBQUMsQUEzQkQsSUEyQkM7SUEzQlksV0FBRyxNQTJCZixDQUFBIn0=
