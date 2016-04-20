import {autoinject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import {Router} from 'aurelia-router';
import {Session} from './session';
import 'fetch';

@autoinject
export class Login{
    
    constructor(private http: HttpClient, private session: Session, private router: Router){
        http.configure(config => {
            config.useStandardConfiguration();
        });
    }    
    
    login(): void{
        if(!this.session.isLoggedIn){
            if( (this.username.length > 0 ) && (this.password.length > 0) ){
                this.http.fetch(this.session.authUrl, {
                    method: 'POST',
                    body: json({ username: this.username, password: this.password })
                }).then(response => response.json()).then(response => {
                    if(!response.error){
                        this.session.login(this.username, response.token);
                    }
                    else{
                        console.log("Authorization Failed");
                        console.log(response);
                    }
                });
            }    
        }
    }
    
    
    username: string = "";
    password: string = "";
}