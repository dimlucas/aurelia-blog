export class Contact{
    
    constructor(firstName, lastName, email, phone){
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._phone = phone;
    }
    
    get firstName(): string {
        return this._firstName;
    }
    
    get lastName(): string{
        return this._lastName;
    }
    
    get email(): string {
        return this._email;
    }
    
    get phone(): string {
        return this._phone;
    }
    
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _phone: string;
}