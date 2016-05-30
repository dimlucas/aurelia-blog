import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@autoinject
export class UsersService{
    
    constructor(private http: HttpClient){
        this.http.configure(config => {
            config.useStandardConfiguration().withBaseUrl(this.baseUrl);
        });
    }
    
    users(): Promise<any>{
        return this.http.fetch(this.multipleUsersUrl).then(data => data.json());    
    }
    
    user(id): Promise<any>{
        //Only continue if the supplied id is an integer greater than zero
        if( !isNaN(id) && (!isNaN(parseInt(id)))  && (id > 0) ){
            return this.http.fetch(this.singleUserUrl + id).then(data => data.json());
        }
        else{
            throw new Error("Invalid user id: " + id);
        }
    }
    
    //The base of url of all calls originating from this service
    private baseUrl: string = "http://jsonplaceholder.typicode.com/";
    
    //To be appended to the baseUrl when searching for an individual user
    private singleUserUrl: string = "users/";
    
    //To be appended to the baseUrl when requesting for all users
    private multipleUsersUrl: string = "users";
    
}