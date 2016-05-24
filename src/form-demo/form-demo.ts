export class FormDemo{
    
    signUp(): void{
        this.validateFirstName();
        this.validateLastName();
        this.validateEmail();
        this.validatePassword();
        this.validateConfPassword();
        if(this.firstName || this.lastNameErr || this.emailErr || this.passwordErr || this.confPasswordErr){
            //Submit the form
        }
        else{
            //Do not submit the form            
        }
    }
    
    validateFirstName(): void{
        if(this.firstName == ""){
            this.firstNameDiv = this.errorDiv;
            this.firstNameErr = true;
            this.firstNameLbl = "This field is required";
        }
        else{
            this.firstNameDiv = this.successDiv;
            this.firstNameErr = false;
            this.firstNameLbl = "";
        }
    }
    
    validateLastName(): void{
        if(this.lastName == ""){
            this.lastNameDiv = this.errorDiv;
            this.lastNameErr = true;
            this.lastNameLbl = "This field is required";
        }
        else{
            this.lastNameDiv = this.successDiv;
            this.lastNameErr = false;
            this.lastNameLbl = "";
        }
    }
    
    validateEmail(): void{
        if(this.email == ""){
            this.emailDiv = this.errorDiv;
            this.emailErr = true;
            this.emailLbl = "This field is required";
        }
        else{
            this.emailDiv = this.successDiv;
            this.emailErr = false;
            this.emailLbl = "";
        }
    }
    
    validatePassword(): void{
        if(this.password == ""){
            this.passwordDiv = this.errorDiv;
            this.passwordErr = true;
            this.passwordLbl = "This field is required";
        }
        else if(this.password.length < 6){
            this.passwordDiv = this.errorDiv;
            this.passwordErr = true;
            this.passwordLbl = "Your password is too short";
        }
        else if( (this.confPassword.length > 0) ){
            this.checkPasswords();
        }
        else{
            this.passwordDiv = this.successDiv;
            this.passwordErr = false;
            this.passwordLbl = "";    
        }
    }
    
    validateConfPassword(): void{
        if(this.confPassword == ""){
            this.confPasswordDiv = this.errorDiv;
            this.confPasswordLbl = "This field is required";
            this.confPasswordErr = true;
        }
        else if(this.confPassword.length < 6){
            this.confPasswordDiv = this.errorDiv;
            this.confPasswordLbl = "Your password is too short";
            this.confPasswordErr = true;
        }
        else if( (this.password.length > 0)  ){
            this.checkPasswords();
        }
        else{
            this.confPasswordDiv = this.successDiv;
            this.confPasswordErr = false;
            this.confPasswordLbl = "";
        }
    }
    
    private checkPasswords(): void{
        if(this.confPassword != this.password){
            this.passwordDiv = this.errorDiv;
            this.confPasswordDiv = this.errorDiv;
            this.confPasswordErr = true;
            this.confPasswordLbl = "Passwords do not match";
            this.passwordLbl = "";    
        }
        else{
            this.passwordDiv = this.successDiv;
            this.confPasswordDiv = this.successDiv;
            this.passwordErr = false;
            this.confPasswordErr = false;
            this.passwordLbl = "";
            this.confPasswordLbl = "";
        }
    }
    
    
    firstName: string = "";
    firstNamePlaceholder: string = "First Name";
    firstNameDiv: string = "form-group";
    firstNameErr: boolean = false;
    firstNameLbl: string = "";
    
    lastName: string = "";
    lastNamePlaceholder: string = "Last Name";
    lastNameDiv: string = "form-group";
    lastNameErr: boolean = false;
    lastNameLbl: string = "";
    
    email: string = "";
    emailPlaceholder: string = "Email";
    emailDiv: string = "form-group";
    emailErr: boolean = false;
    emailLbl: string = "";
    
    password: string = "";
    passwordPlaceholder: string = "Password";
    passwordDiv: string = "form-group";
    passwordErr: boolean = false;
    passwordLbl: string = "";    
    
    confPassword: string = "";
    confPasswordPlaceholder: string = "Confirm Password";
    confPasswordDiv: string = "form-group";
    confPasswordErr: boolean = false;
    confPasswordLbl: string = "";
    
    tosBox: boolean = false;
  
    
    private successDiv = "form-group has-success";
    private errorDiv = "form-group has-error";
}