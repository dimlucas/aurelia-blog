/** Demonstrates AJAX requests with aurelia-fetch-client */
import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@autoinject
export class Todos{
    constructor(private http: HttpClient){
        http.configure(config => {
            config.useStandardConfiguration().withBaseUrl(this.baseUrl);
        });
    }
    
    activate(){
        this.http.fetch(this.todosUrl).then(response => response.json()).then(todos => {
            console.log(todos);
            this.todos = todos;
        });
    }
    
    baseUrl: string = "http://jsonplaceholder.typicode.com/";
    todosUrl: string = "todos";
    todos: any[];
}