define(["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Aurelia';
            config.map([
                {
                    route: ['', 'start-page'],
                    name: 'start-page',
                    moduleId: './start-page/start-page',
                    nav: false,
                    title: 'Welcome'
                },
                { route: 'todos', name: 'todos', moduleId: './todos/todos', nav: true, title: 'To-Do List' },
                { route: 'login', name: 'login', moduleId: './auth/login', nav: true, title: 'Login' }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});
//# sourceMappingURL=app.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMiLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUVBO1FBQUE7UUFtQkEsQ0FBQztRQWhCQyw2QkFBZSxHQUFmLFVBQWdCLE1BQTJCLEVBQUUsTUFBYztZQUN6RCxNQUFNLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN6QixNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNQO29CQUNJLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxZQUFZLENBQUM7b0JBQ3pCLElBQUksRUFBRSxZQUFZO29CQUNsQixRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxHQUFHLEVBQUUsS0FBSztvQkFDVixLQUFLLEVBQUUsU0FBUztpQkFDbkI7Z0JBQ0QsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUU7Z0JBQzVGLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO2FBQ3pGLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7UUFDSCxVQUFDO0lBQUQsQ0FBQyxBQW5CRCxJQW1CQztJQW5CWSxXQUFHLE1BbUJmLENBQUEifQ==
