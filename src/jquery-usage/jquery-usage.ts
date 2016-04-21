import * as $ from 'jquery';

export class JqueryUsage{
    
    attached() {
        $.ajax('http://jsonplaceholder.typicode.com/users', {
            method: 'GET',
            dataType: 'jsonp',
            success: this.fetchSuccess,
            error: this.fetchFailure
        });
    }
    
    fetchSuccess(response): void{
        this.users = response;
        for(let user of this.users){
            $('#users-table').find('tbody')
                         .append($('<tr>')
                                .append('<td>' + user.name + '</td>')
                                .append('<td>' + user.username + '</td>')
                                .append('<td>' + user.email + '</td>')
                                .append('<td>' + user.website + '</td>'));
        }
    }
    
    fetchFailure(response): void{
        console.log("Fetch Failed: " + response);
    }
    
    users: any[] = [];    
}