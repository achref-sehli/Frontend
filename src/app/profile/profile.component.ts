import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UpdateProfileComponent} from '../profile/update-profile/update-profile.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user ;
  constructor(public data: UserService,
    private matDialog: MatDialog,
  @Inject(MAT_DIALOG_DATA) public mdata: any,
  public fb: FormBuilder,
  public dialogRef:MatDialogRef<UpdateProfileComponent>) { }

  ngOnInit(): void {
    this.user = this.data.getcurrentUser(); 
    
  }
  updateprofile (user){
    console.log("in upljndc");
    
  
    
    delete this.user.password;
    this.data.dataForm = this.fb.group(Object.assign({},this.user));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    dialogConfig.height="90%";
    this.matDialog.open(UpdateProfileComponent, dialogConfig);

  }
}
