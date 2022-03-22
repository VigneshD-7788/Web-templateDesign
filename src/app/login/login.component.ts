import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
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
  login_error_message="";


  constructor(private route:Router,private http:HttpClient) {
  
   }

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
  this.route.navigateByUrl('home'); //will navigate to the home

  console.log(res);
},
  error=>{
  console.log(error["error"]["message"]);
  this.login_error_message=error["error"]["message"];
})
    
  }
  loginSample(){
    sessionStorage.getItem("token");
    this.http.get("http://localhost:8080/sampleGradle")
    .subscribe((res:any)=>{
      console.log(res);
    })
  }
  
//   loginApi2(){
//     let postArgs ={
//       "email": this.login_email, 
//       "password":this.login_password
// }
//   this.http.post("http://localhost:8080/studentLogin",postArgs)
//   .subscribe(
//     next: (result: any) => {
//       console.log(result);
//       },
//       error: (err: any) => {
//       console.log(err);
//       },
//       complete: () => {
//       console.log('complete');
//       }
   
//   )
  

 
    
//   }

}
