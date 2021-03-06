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

  constructor(private route:Router,private http:HttpClient,private routerParams:ActivatedRoute) { }

  ngOnInit(): void {

    //get dynamic url param, which is configured in the app.routing.
    this.routerParams.params.subscribe(route_Params=>{
      console.log(route_Params);
    })
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
  .subscribe((res:any)=>{
  console.log(res);
  this.showAlert(res['message']);
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
  .subscribe((res:any)=>{
  console.log(res);
  this.showAlert(res['message']);
},
  error=>{
  console.log(error["error"]["message"]);
  this.error_message=error["error"]["message"];
})
    

  }
  profileImgUpdateApi(){
    let token:any= sessionStorage.getItem("token");
    let student_id:any=sessionStorage.getItem("student_id");
    let req_headers = new HttpHeaders(
      {
        //for ImageUploadingFile no need to send the content Type
    
    "student_id":student_id,//read the id from session storage
    "token":token//read the token from session storage
  }
    );
    let form = new FormData();//from javascript object for file upload
    form.append("file",this.profileImg);//append the select image in to the form object
    form.append("student_id",""+this.student_id);
    this.http.post("http://localhost:8080/uploadProfileImage",form,{headers:req_headers})
    .subscribe((res:any)=>{
      //alert("profile updated successfully")

      this.showAlert(res['message']);
      
    })
  }

}
