import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
  profileImg:any;
  old_password="";
  new_password="";
  confirm_password="";
  error_message="";
  name="";
  student_id=sessionStorage.getItem("student_id");

  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }
  showAlert(message:string){
    alert(message);//javascript method to show the dialog box
  }
  profileImgSelect(event:any){
    console.log(event.target.files[0]);
    this.profileImg = event.target.files[0]; //store the binary image details in a file.
  }
  profileNameUpdate(){
    let postName ={
      "student_id":this.student_id,
      "name": this.name
}
  this.http.post("http://localhost:8080/updateName",postName)
  .subscribe(res=>{
  console.log(res);
},
  error=>{
  console.log(error["error"]["message"]);
  this.error_message=error["error"]["message"];
})

  }
  profilePasswordUpdate(){
    let postArgs ={
      "student_id":this.student_id,
      "old_password":this.old_password,
      "new_password":this.new_password,
      "confirm_password":this.confirm_password
}
  this.http.post("http://localhost:8080/updatePassword",postArgs)
  .subscribe(res=>{
  console.log(res);
},
  error=>{
  console.log(error["error"]["message"]);
  this.error_message=error["error"]["message"];
})
    

  }
  profileImgUpdateApi(){
    let req_header = {};
    let form = new FormData();//from javascript object for file upload
    form.append("file",this.profileImg);//append the select image in to the form object
    form.append("student_id","1");
    this.http.post("http://localhost:8080/uploadProfileImage",form,{headers:req_header})
    .subscribe((res:any)=>{
      //alert("profile updated successfully")

      this.showAlert(res['message']);
      
    })
  }

}
