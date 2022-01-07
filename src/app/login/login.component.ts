import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Person } from '../person';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    // 表單
    form: FormGroup;

    loading: boolean = false;

    // 是否按了submit
    submitted: boolean = false;

    constructor(private accountService: AccountService) { }

    ngOnInit() {
        this.form = new FormGroup({
            username: new FormControl('', [Validators.required]), 
            password: new FormControl('', [Validators.required])
        });
    }

    // 取得表單controls
    get f() {
        return this.form.controls;
    }
    // 按下Submit
    onSubmit() {
        this.submitted = true;

        // this.loading = true;
        if (this.form.invalid) {
            // 表單驗證沒過
            return;
        }
        let loginName = this.f.username.value;
        let loginPwd = this.f.password.value;
        // 檢查登入
        this.accountService.login(loginName, loginPwd);
    }

}
