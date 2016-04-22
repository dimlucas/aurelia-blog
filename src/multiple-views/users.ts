import {autoinject, useView} from 'aurelia-framework'
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@autoinject
//@useView('./multiple-views/table-view.html')
@useView('./multiple-views/list-view.html')
export class Users{
    
    constructor(private http: HttpClient){
        http.configure(config => {
            config.useStandardConfiguration().withBaseUrl("http://jsonplaceholder.typicode.com/");
        });    
    }
    
    activate(){
        this.http.fetch('users').then(response => response.json()).then(data => {
            this.users = data;
            console.log(data);
        });
    }
    
    users: any[] = [];
    
}