/** View Model for global site nav bar */
import {customElement, bindable} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@customElement('nav-bar')
export class NavBar{
    
    attached() {
        
    }
        
    @bindable router: Router;
}