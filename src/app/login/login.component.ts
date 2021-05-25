import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
}) 

export class LoginComponent implements OnInit {

  constructor(private data : UserService, private router : Router) { }


  user ={
    email : '',
    password : ''
  }


  ngOnInit(): void {
    this.data.getAllusers().subscribe(
      (res)=>{
        this.data.list = res ;
      }
    )
  }
 tok :any;
  login(){
    this.data.login(this.user).subscribe(
      (res)=>{

       this.tok = res ; 
    
     
       this.data.getuser(this.user.email).subscribe(
        (res2)=>{
          
       sessionStorage.setItem("user", JSON.stringify(res2));   
        
        
        console.log(res2);
        })

       
        localStorage.setItem('token', this.tok.token);
        this.router.navigate(['']);

    
      },
      (err)=>{
        console.log(err);
        
      }

    )

  }

}
