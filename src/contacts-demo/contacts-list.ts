import {autoinject, bindable} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Contact} from './contact';

@autoinject
export class ContactsListCustomElement{
    
    constructor(private eventAgg: EventAggregator){
        this.contactsList = new Array<Contact>();
    }
    
    attached(){
        this.eventAgg.subscribe(this.eventName, (data) => {
            let contact:Contact = data.contact;
            this.contactsList.push(contact);
        });
    }
    
    contactsList: Contact[];
    @bindable eventName: string;
}