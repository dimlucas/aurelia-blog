import {autoinject} from 'aurelia-framework';
import {UserInfo} from './user-info';

@autoinject
export class SetInfo{
    
    constructor(private userInfo: UserInfo){
        
    }    
    
    save(): void{
        this.userInfo.firstName = this.firstName;
        this.userInfo.lastName = this.lastName;
        this.userInfo.email = this.email;
        this.userInfo.city = this.city;
        this.userInfo.country = this.country;
    }
    
    firstName: string;
    lastName: string;
    email: string;
    city: string;
    country: string;
        
}