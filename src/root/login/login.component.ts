import { Component } from "@angular/core";

@Component({
    selector: 'root-login',
    templateUrl: './login.component.html'
})
export class LoginComponent{
    private username: string = '';
    private password: string = '';
    private rememberMe: boolean = false; 
    private isLoggedIn: boolean = false;

    authenticateUser(){
        console.log('authenticate');
        this.isLoggedIn = false;
        if(this.username && this.password){
            if(this.username ==='lion' && this.password === 'roar'){
                this.isLoggedIn = true;
            }
        }
    }
}