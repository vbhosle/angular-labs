import { Component } from "@angular/core";
import { CanComponentDeactivate } from "../services/can-deactivate-guard.service";

@Component({
    selector: 'root-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements CanComponentDeactivate{
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

    canDeactivate(){
        return confirm('Do you want to leave the login page?');
    }
}