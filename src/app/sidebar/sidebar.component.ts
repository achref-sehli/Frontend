import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
 
  constructor(private router : Router , public data : UserService) { }
  public user ;
  ngOnInit(): void {

    this.user = this.data.getcurrentUser(); 
    
    
  }
  logout(){
    
    localStorage.removeItem('token');
    sessionStorage.removeItem('user'); 
  
    this.router.navigate(['/home'])

  }

}
