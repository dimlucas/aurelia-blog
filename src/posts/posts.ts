import {autoinject} from 'aurelia-framework';
import {PostsService} from '../services/posts-service';
import {Post} from '../models/post';

@autoinject
export class Posts{
    constructor(private postsService: PostsService){
        
    }
    
    activate(){
       //Use the service to populate the posts array
       this.postsService.posts().then(data => {this.posts = data; console.log(this.posts)});
    }
    
    posts: Post[] = [];
}