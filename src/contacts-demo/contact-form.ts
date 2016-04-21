import {autoinject, customElement, bindable} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Contact} from './contact';

@autoinject()
export class ContactFormCustomElement{
    
    constructor(private eventAgg: EventAggregator){
        
    }
    
    checkFirstName(): boolean{
        if(this.firstName == ""){
            this.firstNameErr = true;
            this.firstNameDiv = "form-group has-error";
            return true;
        }
        else{
            this.firstNameErr = false;
            this.firstNameDiv = "form-group has-success";
            return false;
        }
    }
    
    checkLastName(): boolean{
        if(this.lastName == ""){
            this.lastNameErr = true;
            this.lastNameDiv = "form-group has-error";
            return true;
        }
        else{
            this.lastNameErr = false;
            this.lastNameDiv = "form-group has-success";
            return false;
        }
    }
    
    checkEmail(): boolean{
        if(this.email == ""){
            this.emailErr = true;
            this.emailDiv = "form-group has-error";
            return true;
        }
        else{
            this.emailErr = false;
            this.emailDiv = "form-group has-success";
            return false;
        }
    }
    
    checkPhone(): boolean{
        if(this.phone == ""){
            this.phoneErr = true;
            this.phoneDiv = "form-group has-error";
            this.phoneLbl = "This field is required";
            return true;
        }
        else if(this.phone.length < 10){
            this.phoneLbl = "Invalid phone number";
            this.phoneErr = true;
            this.phoneDiv = "form-group has-error";
            return true;
        }
        else{
            this.phoneErr = false;
            this.phoneDiv = "form-group has-success";
            return false;
        }
    }

    save(): void{
        if( (!this.checkFirstName()) && (!this.checkLastName()) && (!this.checkEmail()) && (!this.checkPhone()) ){
            let contact = new Contact(this.firstName, this.lastName, this.email, this.phone);
            this.eventAgg.publish(this.eventName, { contact: contact });    
            this.clear();
        }
    }    
    
    clear(): void{
        this.firstName = this.lastName = this.email = this.phone = "";
        this.firstNameErr = this.lastNameErr = this.emailErr = this.phoneErr = false;
        this.firstNameDiv = this.lastNameDiv = this.emailDiv = this.phoneDiv = "form-group";
    }
    
    firstName: string = "";
    firstNameErr: boolean = false;
    firstNameDiv: string = "form-group";
    firstNameLbl: string = "This field is required";
    
    lastName: string = "";
    lastNameErr: boolean = false;
    lastNameDiv: string = "form-group";
    lastNameLbl: string = "This field is required";
    
    email: string = "";
    emailDiv: string = "form-group";
    emailErr: boolean = false;
    emailLbl: string = "This field is required";
    
    phone: string = "";
    phoneDiv: string = "form-group";
    phoneLbl: string = "This field is required";
    phoneErr: boolean = false;
    
    @bindable eventName: string;
}