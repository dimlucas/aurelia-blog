import {autoinject} from 'aurelia-framework';
import {UsersService} from '../services/users-service';

@autoinject
export class Users{
    
    constructor(private usersService: UsersService){
        
    }
    
    activate(){
        this.usersService.users().then(data => {
            this.users = data;
            console.log("Users: ");
            console.log(this.users);
        });
    }
    
    //When user clicks on the 'Get Users' button, call the service and get the list of users
    getUsers(): void{
        
    }
    
    //When the user clicks on the 'Get User' button, call the service and pass it the user id
    getUser(): void{
        //We include a try/catch block because UsersService.user() returns an exception on invalid id
        try{
            
        }   
        catch(e){
                        
        }     
    }
    
    users: any[];
    userId: number; //To be bound to a numeric input    
}