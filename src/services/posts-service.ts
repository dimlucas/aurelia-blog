import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {Post} from '../models/post';
import {Comment} from '../models/comment';
import 'fetch';

@autoinject
export class PostsService{
    constructor(private http: HttpClient){
        this.http.configure(config => {
            config.useStandardConfiguration().withBaseUrl(this.baseUrl);
        });
    }
    
    posts(): Promise<Post[]>{
        return this.http.fetch(this.postsUrl).then(data => data.json());
    }
    
    post(id: number): Promise<Post>{
        return this.http.fetch(this.singlePostUrl + id).then(data => data.json());
    }
    
    comments(): Promise<Post[]>{
        return this.http.fetch(this.commentsUrl).then(data => data.json());
    }
    
    comment(id: number): Promise<Post[]> {
        return this.http.fetch(this.singleCommentUrl).then(data => data.json());
    }
    
    private baseUrl: string = "http://jsonplaceholder.typicode.com/";
    
    private postsUrl: string = "posts";
    
    private singlePostUrl: string = "posts/";
    
    private commentsUrl: string = "comments";
    
    private singleCommentUrl: string = "comments/";
}