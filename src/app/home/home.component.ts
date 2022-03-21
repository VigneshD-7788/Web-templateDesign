import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stdlist:any;
  studentId:any;
  constructor(private http:HttpClient,private route:Router) {
    this.studentId = sessionStorage.getItem("student_id");
    this.studentList();
   }

  ngOnInit(): void {
  }
  navigateToEdit(){
    this.route.navigateByUrl('studentupdate/'+this.studentId);
  }
  studentList(){
    let token:any= sessionStorage.getItem("token");
    let student_id:any=sessionStorage.getItem("student_id");
    let headers = new HttpHeaders(
      {
    "Content-Type":"application/json",
    "student_id":student_id,//read the id from session storage
    "token":token//read the token from session storage
  }
    );
    this.http.get("http://localhost:8080/getStudents",{headers:headers})
    .subscribe((res:any)=>{
      this.stdlist = res;
      console.log(res);
    })

  }

}
