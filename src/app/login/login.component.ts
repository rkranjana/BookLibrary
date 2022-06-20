import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Login:FormGroup;
  Error:boolean=false;
  ErrorMessage="";
  constructor(private fb: FormBuilder) { 
    this.Login=this.fb.group({Userid:['',Validators.required],key:['',Validators.required]});
  }

  ngOnInit(): void {
  }

  FormSubmit(){
    alert("success");
  }
}
