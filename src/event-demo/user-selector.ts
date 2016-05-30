import {bindable} from 'aurelia-framework';

export class UserSelectorCustomElement{
    @bindable users: any[];
    @bindable selectedUser: any[];    
}