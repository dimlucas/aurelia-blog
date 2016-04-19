/** View Model for the start page module.
 * Welcome Page
 * Demonstrates Aurelia's basic binding
 */
export class StartPage{
    
    /**
     * This is a getter. It combines the user's first and last name
     * to produce their full name using string interpolation
     */
    get fullName(): string{
        return `${this.firstName} ${this.lastName}`;
    }
    
    //The user's first and last name. Will be bound to an HTML input control
    firstName: string = "";
    lastName: string = "";
    
    firstNameLbl: string = "Your first name";
    lastNameLbl: string = "Your last name";
    welcomeMessage: string = "Welcome to Aurelia";
}