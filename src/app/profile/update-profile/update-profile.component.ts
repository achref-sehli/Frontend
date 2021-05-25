import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef , MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(public userService: UserService ,public fb: FormBuilder,
    private router : Router,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA)  public data,
    public dialogRef:MatDialogRef <UpdateProfileComponent>,) { }
   public formvalid ; 
    submitted=false;
    public user ;

  ngOnInit(): void {
    console.log("in update profile");
    
    this.userService.dataForm.addControl('nwpd', new FormControl(''));
    this.userService.dataForm.addControl('nwpd2', new FormControl(''));

   
    
  }
  onSubmit() {
    console.log(this.userService.dataForm.value);
    
    this.submitted = true;
    if(this.userService.dataForm.invalid || (this.userService.dataForm.value.nwpd !=this.userService.dataForm.value.nwpd2 )){
      this.formvalid=false ; 
      return;
 
      
     
    }
    this.update()

 
}
update()
  {
    console.log(this.userService.dataForm.value);
    this.userService.updateprofile(this.userService.dataForm.value).
    subscribe( data => {
      console.log("in ......");
      
      this.dialogRef.close();
       localStorage.removeItem('token');
       sessionStorage.removeItem('user'); 
  
    this.router.navigate(['/login'])
    
    });
  }
   
  
    get f() { return this.userService.dataForm.controls; }
       

}


