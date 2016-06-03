import {autoinject,bindable} from 'aurelia-framework';
import {UsersService} from '../services/users-service';
import {EventAggregator} from 'aurelia-event-aggregator';
import {SelectedUserChanged} from './selected-user-changed';

@autoinject 
export class UserDetailsCustomElement{
    
    constructor(private usersService: UsersService, private ea: EventAggregator){
        
    }
      
    bind(){
        //Attach an event handler that will trigger every time the user changes
        this.ea.subscribe(SelectedUserChanged, event => {
            //If the selected user has been changed, fetch the user's details from the service
            this.fetchUser(event.id);
        });
    }
    
    fetchUser(id): void{
        this.usersService.user(id).then(data => {
            this.user = data;
        })
    }
    
    user: any;
}