import {noView} from 'aurelia-framework';

@noView
export class Session{
    
    constructor(){
        
    }   
    
    //Logs user in by storing the JSON Web Token and the user's username
    login(username, token): void{
        this._username = username;
        this._jwt = token;
        this._isLoggedIn = true;
        localStorage.setItem('aurelia-blog-jwt', token);
    }
    
    //Logs the user out by emptying the session variables
    logout(): void{
        this._username = "";
        this._jwt = "";
        this._isLoggedIn = false;
    }
    
    //Public Getters
    get username(): string{
        return this._username;
    }
    
    get isLoggedIn(): boolean{
        return this._isLoggedIn;
    }
    
    get jwt(): string{
        return this.jwt;
    }
    
    //Public fields
    authUrl: string = "http://localhost/myapp/auth.php/";
    
    //Private fields
    private _username: string; 
    private _isLoggedIn: boolean = false;
    private _jwt: string;
}