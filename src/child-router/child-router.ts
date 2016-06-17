import {Router, RouterConfiguration} from 'aurelia-router';

export class ChildRouter{

    configureRouter(config: RouterConfiguration, router: Router){
        config.map([
            { route: ['', 'overview'], name: 'overview', moduleId: './overview', nav: true, title: 'Overview' },
            { route: 'page-a', name: 'page-a', moduleId: './page-a', nav: true, title: 'Page A' },
            { route: 'page-b', name: 'page-b', moduleId: './page-b', nav: true, title: 'Page B' },
            { route: 'page-c', name: 'page-c', moduleId: './page-c', nav: true, title: 'Page C' }
        ]);
        this.router = router;
    }

    router: Router;

}