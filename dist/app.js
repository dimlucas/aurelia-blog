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
                { route: 'view-info', name: 'view-info', moduleId: './user-info/view-info', nav: false, title: 'View Personal Information' },
                { route: 'set-info', name: 'set-info', moduleId: './user-info/set-info', nav: false, title: 'Update Personal Information' },
                { route: 'dialog-demo', name: 'dialog-demo', moduleId: './dialog-demo/dialog-demo', nav: true, title: 'Dialog Demo' },
                { route: 'html-demo', name: 'html-demo', moduleId: './html-only-demo/html-only-demo', nav: true, title: 'HTML Only Elements' },
                { route: 'contacts-demo', name: 'contacts-demo', moduleId: './contacts-demo/contacts-demo', nav: true, title: 'Contacts Demo' },
                { route: 'jquery-usage', name: 'jquery-usage', moduleId: './jquery-usage/jquery-usage', nav: true, title: 'jQuery' },
                { route: 'users', name: 'users', moduleId: './multiple-views/users', nav: true, title: 'Users(Multi Views)' },
                { route: 'form-demo', name: 'form-demo', moduleId: './form-demo/form-demo', nav: true, title: 'Form Demo' },
                { route: 'form-inputs', name: 'form-inputs', moduleId: './form-inputs/form-inputs', nav: true, title: 'More Form Inputs' },
                { route: 'event-demo', name: 'event-demo', moduleId: './event-demo/event-demo', nav: true, title: 'Events Demo' },
                { route: 'users-management', name: 'users', moduleId: 'users/users', nav: true, title: 'Users Management' }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});
//# sourceMappingURL=app.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMiLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUdBO1FBQUE7UUFpQ0EsQ0FBQztRQTlCQyw2QkFBZSxHQUFmLFVBQWdCLE1BQTJCLEVBQUUsTUFBYztZQUN6RCxNQUFNLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUV6QixNQUFNLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSw0QkFBYSxDQUFDLENBQUM7WUFFbkQsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDUDtvQkFDSSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDO29CQUN6QixJQUFJLEVBQUUsWUFBWTtvQkFDbEIsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsR0FBRyxFQUFFLEtBQUs7b0JBQ1YsS0FBSyxFQUFFLFNBQVM7aUJBQ25CO2dCQUNELEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFO2dCQUM1RixFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtnQkFDdEYsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLDJCQUEyQixFQUFFO2dCQUM1SCxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsNkJBQTZCLEVBQUU7Z0JBQzNILEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUU7Z0JBQ3JILEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxpQ0FBaUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRTtnQkFDOUgsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLCtCQUErQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRTtnQkFDL0gsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLDZCQUE2QixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtnQkFDcEgsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixFQUFFO2dCQUM3RyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFO2dCQUMzRyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsMkJBQTJCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUU7Z0JBQzFILEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSx5QkFBeUIsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUU7Z0JBQ2pILEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRTthQUM5RyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixDQUFDO1FBQ0gsVUFBQztJQUFELENBQUMsQUFqQ0QsSUFpQ0M7SUFqQ1ksV0FBRyxNQWlDZixDQUFBIn0=
