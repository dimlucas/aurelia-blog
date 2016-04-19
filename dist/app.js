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
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});
//# sourceMappingURL=app.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMiLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUVBO1FBQUE7UUFpQkEsQ0FBQztRQWRDLDZCQUFlLEdBQWYsVUFBZ0IsTUFBMkIsRUFBRSxNQUFjO1lBQ3pELE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1A7b0JBQ0ksS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQztvQkFDekIsSUFBSSxFQUFFLFlBQVk7b0JBQ2xCLFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLEdBQUcsRUFBRSxLQUFLO29CQUNWLEtBQUssRUFBRSxTQUFTO2lCQUNuQjthQUNKLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7UUFDSCxVQUFDO0lBQUQsQ0FBQyxBQWpCRCxJQWlCQztJQWpCWSxXQUFHLE1BaUJmLENBQUEifQ==
