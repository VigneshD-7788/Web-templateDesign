import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login_email = "";
  login_password = "";
  error = "";


  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }
  loginApi(){
    let postArgs ={
      "email": this.login_email, 
      "password":this.login_password
}
  this.http.post("http://localhost:8080/studentLogin",postArgs)
  .subscribe((res:any)=>{
  sessionStorage.setItem("token",res["token"]);
  sessionStorage.setItem("student_id",res["student_id"]);

  console.log(res);
},
  error=>{
  console.log(error["error"]["message"]);
})
  this.route.navigateByUrl('home'); //will navigate to the home
    
  }

}
