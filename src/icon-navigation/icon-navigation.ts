import {Router, RouterConfiguration} from 'aurelia-router';

export class IconNavigation{
    
    configureRouter(routerConfig: RouterConfiguration, router: Router){
        routerConfig.map([
            { route: ['','overview'], name: 'overview', moduleId: './overview', nav: true, title: 'Overview', settings: { iconClass: 'fa fa-database' } },
            { route: 'calendar', name: 'calendar', moduleId: './calendar', nav: true, title: 'Calendar', settings: { iconClass: 'fa fa-calendar' } },
            { route: 'documents', name: 'documents', moduleId: './documents', nav: true, title: 'Documents', settings: { iconClass: 'fa fa-briefcase' } },
            { route: 'settings', name: 'settings', moduleId: './settings', nav: true, title: 'Settings', settings: { iconClass: 'fa fa-cogs' } }
        ]);

        this.router = router;
    }

    router: Router;    
}