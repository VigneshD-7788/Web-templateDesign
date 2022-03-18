import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() menuName:any;
  isLogin :any;
  path:any;

  constructor(private http:HttpClient,private route:Router) {

    this.checkloginToken();
   }

  ngOnInit(): void {
  }

  checkloginToken(){
    let token = sessionStorage.getItem("token")
    console.log("token is"+token)
    if(token == "" || token == undefined){
      this.isLogin = false;
    }else{
      this.isLogin = true;
    }
    console.log(this.isLogin)
  }
  logoutApi(){
      // this.http.get("http://localhost:8080/studentLogout")
      sessionStorage.removeItem("student_id");
      sessionStorage.removeItem("token");
      this.route.navigateByUrl('login'); //will navigate to the login

  }

}
