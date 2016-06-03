import {Router, RouterConfiguration} from 'aurelia-router'
import {AuthorizeStep} from 'aurelia-auth';

export class App {
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    
    config.addPipelineStep('authorize', AuthorizeStep);
    
    config.map([
        { 
            route: ['', 'start-page'], //This page will be shown as the root or start page of our application ('') or on explicit navigation to '/start-page'
            name: 'start-page', //The name of the route will be used to generate URLs to the page or redirect to the page
            moduleId: './start-page/start-page', //This is the path to the module in the directory tree relative to app.ts
            nav: false,  //Specifies whether the page will be included in the navigation model (e.g. visible in the navigation bar) or not
            title: 'Welcome' //Optional title, will be displayed as part of the document's title
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
  }
}
