var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-fetch-client', 'fetch'], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    var Todos = (function () {
        function Todos(http) {
            var _this = this;
            this.http = http;
            this.baseUrl = "http://jsonplaceholder.typicode.com/";
            this.todosUrl = "todos";
            http.configure(function (config) {
                config.useStandardConfiguration().withBaseUrl(_this.baseUrl);
            });
        }
        Todos.prototype.activate = function () {
            var _this = this;
            this.http.fetch(this.todosUrl).then(function (response) { return response.json(); }).then(function (todos) {
                console.log(todos);
                _this.todos = todos;
            });
        };
        Todos = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient])
        ], Todos);
        return Todos;
    }());
    exports.Todos = Todos;
});
//# sourceMappingURL=todos.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb3MvdG9kb3MuanMiLCJzb3VyY2VSb290IjoiL3NyYyIsInNvdXJjZXMiOlsidG9kb3MvdG9kb3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFNQTtRQUNJLGVBQW9CLElBQWdCO1lBRHhDLGlCQWlCQztZQWhCdUIsU0FBSSxHQUFKLElBQUksQ0FBWTtZQWFwQyxZQUFPLEdBQVcsc0NBQXNDLENBQUM7WUFDekQsYUFBUSxHQUFXLE9BQU8sQ0FBQztZQWJ2QixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtnQkFDakIsTUFBTSxDQUFDLHdCQUF3QixFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoRSxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCx3QkFBUSxHQUFSO1lBQUEsaUJBS0M7WUFKRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUs7Z0JBQ3ZFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQWJMO1lBQUMsOEJBQVU7O2lCQUFBO1FBa0JYLFlBQUM7SUFBRCxDQUFDLEFBakJELElBaUJDO0lBakJZLGFBQUssUUFpQmpCLENBQUEifQ==
