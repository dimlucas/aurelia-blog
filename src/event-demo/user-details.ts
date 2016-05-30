import {autoinject,bindable} from 'aurelia-framework';
import {UsersService} from '../services/users-service';
import {EventAggregator} from 'aurelia-event-aggregator';

@autoinject 
export class UserDetailsCustomElement{
    
    constructor(private usersService: UsersService, private ea: EventAggregator){
        
    }
      
    bind(){
        //Attach an event handler that will trigger every time the user changes
        this.ea.subscribe(this.userChangedEvent, payload => {
            //If the selected user has been changed, fetch the user's details from the service
            this.fetchUser(payload.id);
        });
    }
    
    fetchUser(id): void{
        this.usersService.user(id).then(data => {
            this.user = data;
        })
    }
    
    @bindable userChangedEvent: string;
    user: any;
}