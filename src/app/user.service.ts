import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

  export class UserService {
 constructor( private http: HttpClient ) { }
 choixmenu : string  = 'A';
 profile : string = 'P';
 public list : any;
 public dataForm:  FormGroup;
 

 private url = "http://127.0.0.1:3000/";
 public currentuser : any ; 
 

 getAllusers(){
  return this.http.get(this.url + 'user/getallusers');
 }


 login(user :any){
  return this.http.post(this.url + 'user/login' , user);
  }
  isLoggedIn(){
    let token =localStorage.getItem('token');
    if(token){
      return true ;
    }else{
      return false;
    }
  }
 getuser(mail) {
  return this.http.get(this.url + 'user/getuserbymail/' + mail)
}
public getcurrentUser() {
  return JSON.parse(sessionStorage.getItem("user"));
}

ajoutUser(usr){
  console.log("in service");
  
    console.log(usr) ;

    return  this.http.post(this.url + 'user/ajoutuser' , usr );
}
deleteUser(id){

  return this.http.delete( this.url + 'user/deleteuser/' + id );

 }
 
 updateUser (user :any){
   return this.http.put(this.url +'user/updateuser/' + user._id , user);
 }
 updateprofile(user : any){
  return this.http.put(this.url +'user/updateprofile/' + user._id , user);
 }
  }
