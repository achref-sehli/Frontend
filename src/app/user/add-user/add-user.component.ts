import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(public userService: UserService ,public fb: FormBuilder,
    private router : Router,
    @Inject(MAT_DIALOG_DATA)  public data,
    public dialogRef:MatDialogRef <AddUserComponent>,
    ) { }
    typeop ;
    isAdmin:boolean=false;
    submitted=false;

  ngOnInit(): void {
    this.userService.dataForm.addControl('password', new FormControl(''));
    if (this.userService.choixmenu == "A")
    {this.infoForm() 
      this.typeop="Ajout"}
    else {
      let form=this.data.dataForm;
  
      

    this.typeop="Modification"
      console.log(this.userService.dataForm.value);
      
    }
    console.log(this.userService.choixmenu);
    
  }
  infoForm() {
    this.userService.dataForm = this.fb.group({
        
        name: ['', [Validators.required, Validators.minLength(4)]],
        lastname:['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required ,Validators.email,Validators.minLength(10)]],
        phone: ['', [Validators.required, Validators.minLength(8)]],
        role: ['', [Validators.required ]],
        password: ['', [Validators.required, Validators.minLength(8)]],
       
    
        });
    }
    ResetForm() {
      this.userService.dataForm.reset();
  }
  onSubmit() {
    console.log(this.userService.dataForm.value);
    
    this.submitted = true;
    if(this.userService.dataForm.invalid){
      return;
 
     }
    if (this.userService.choixmenu == "A")
    {
      this.ajout();
    }
    else
    {
      
     this.update()
     
    }
 
}

ajout() {
  console.log(this.userService.dataForm.value);
  this.userService.ajoutUser(this.userService.dataForm.value).
  subscribe( data => {
    this.dialogRef.close();
    
    this.userService.getAllusers().subscribe(
      response =>{this.userService.list = response;}
     );
    this.router.navigate(['/users']);

  });
}
  update()
  {
    console.log(this.userService.dataForm.value);
    this.userService.updateUser(this.userService.dataForm.value).
    subscribe( data => {
      this.dialogRef.close();
     
     
      this.userService.getAllusers().subscribe(
        response =>{this.userService.list = response;}
      
        );
        
      this.router.navigate(['/users']);
    });
  }
   
  
    get f() { return this.userService.dataForm.controls; }

}
