import {Router, RouterConfiguration} from 'aurelia-router'

export class App {
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
        { 
            route: ['', 'start-page'], //This page will be shown as the root or start page of our application ('') or on explicit navigation to '/start-page'
            name: 'start-page', //The name of the route will be used to generate URLs to the page or redirect to the page
            moduleId: './start-page/start-page', //This is the path to the module in the directory tree relative to app.ts
            nav: false,  //Specifies whether the page will be included in the navigation model (e.g. visible in the navigation bar) or not
            title: 'Welcome' //Optional title, will be displayed as part of the document's title
        },
        { route: 'todos', name: 'todos', moduleId: './todos/todos', nav: true, title: 'To-Do List' }
    ]);

    this.router = router;
  }
}
