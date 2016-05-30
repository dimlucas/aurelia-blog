import {autoinject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {UsersService} from '../services/UsersService';

//We use Dependency Injection to inject the UsersService class and an event aggregator
@autoinject
export class EventDemo{
    
    constructor(private usersService: UsersService, private ea: EventAggregator){
        
    }    
    
    //When navigating to this screen fetch all users to populate the dropdown
    activate(){
        this.refresh();
    }
    
    refresh(): void{
        this.usersService.users().then(data => {
            this.users = data;
            this.selectedUser = this.users[0];
            this.userChanged();
        });
    }
    
    userChanged(): void{
        let payload = { id: this.selectedUser.id }
        this.ea.publish(this.userChangedEvent, payload);
    }
    
    get selectedUser(): any{
        return this._selectedUser;
    }
    
    //We use a setter because we want to implement some extra logic every time the value changes
    set selectedUser(value) {
        this._selectedUser = value;
        this.userChanged();
    }
    
    private _selectedUser: any;
    users: any[];
    userChangedEvent: string = "UserChangedEvent";
}