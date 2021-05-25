import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AddUserComponent} from '../user/add-user/add-user.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public data: UserService,
    private matDialog: MatDialog,
  @Inject(MAT_DIALOG_DATA) public mdata: any,
  public fb: FormBuilder,
  public dialogRef:MatDialogRef<AddUserComponent>,
    
    ) { 
    
  }
  
  users : any ;
  public user ;
  ngOnInit(): void {
    this.user = this.data.getcurrentUser(); 
    console.log(this.data.currentuser);
    
       
    this.data.getAllusers().subscribe(

      (res)=>{
          this.data.list = res;
      },
      (err)=>{
        console.log(err);
        
      }


    );

  }
   ajout(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    this.matDialog.open(AddUserComponent, dialogConfig);
    this.data.choixmenu = "A";

}

delete(id){
  if (window.confirm('Are sure you want to delete this User ?')) {
  console.log(id);
  
  

  this.data.deleteUser(id).subscribe(


    (res)=>{
        this.ngOnInit();
    },
    (err)=>{
      console.log(err);
      
    }

  );
  
}
}
updateUser (item){
  console.log("in component modifier");
  this.data.choixmenu = "M";

  
 
  this.data.dataForm = this.fb.group(Object.assign({},item));
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width="50%";
  
  this.matDialog.open(AddUserComponent, dialogConfig);
}

}



