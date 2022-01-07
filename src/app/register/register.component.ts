import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { User } from '../user';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
    // 表單
    form: FormGroup;
    loading = false;
    submitted = false;
    constructor(
        private formBuilder: FormBuilder,
        private accountService: AccountService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    get f() {
        return this.form.controls;
    }

    onSubmit() {
        let registerUser: User = {
            firstName: "XXXXX",
            lastName: "XXXXX",
            userName: "XXXXX",
            password: "XXXXX"
        }
        //Register
        let regUser = this.accountService.register(registerUser).subscribe();

    }

}
