import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Inject } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { FormBuilder, FormGroup, ValidatorFn, ValidationErrors } from '@angular/forms';
import { profileModel } from '../entities/profileModel';
import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA} from "@angular/material/dialog";
import {profileService} from '../services/profileService';


@Component({
  selector: 'app-profileaddedit',
  templateUrl: './profileaddedit.component.html',
  styleUrls: ['./profileaddedit.component.css']
})
export class ProfileaddeditComponent implements OnInit {

  profileFormGroup: FormGroup;
  profileModel:profileModel;
  editProfile:boolean=false;

  constructor(  private _formBuilder: FormBuilder,private http: HttpClient,
                @Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<ProfileaddeditComponent>,
                public profileService: profileService
                
              ) {

    this.profileModel=new profileModel();
   }

  ngOnInit() {

    this.initFormGroup();
    this.updateProfile();
  }

  initFormGroup() {
 
    this.profileFormGroup = this._formBuilder.group({
      
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      dob: ['', [Validators.pattern(/^[0-9]{4}[\/][0-9]{2}[\/][0-9]{2}$/)]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.minLength(5)]],
    
    });
 
  }

  async submit(profiledta)
  {
    if (this.profileFormGroup.invalid) {
      return;
    }
    else{
            if(this.editProfile==true)
              { 
                  let url = 'https://localhost:44389/api/UserProfile/UpdateProfile/';
                  this.http.put(url + this.data, profiledta).subscribe(data => {
                  if(data="Sucess Updated"){ this.profileService.refershProfileUpdate.emit("true");}
                  else{ this.profileService.refershProfileUpdate.emit("not true");}
               });}

     else{
       debugger
      this.http.post<any>('https://localhost:44389/api/UserProfile/postUserProfile',profiledta).subscribe(data => { 
        if(data.dob){ this.profileService.refershProfileUpdate.emit("true");}
        else{ this.profileService.refershProfileUpdate.emit("not true");} 
    })}
    this.dialogRef.close();
  }
}

  updateProfile()
  {
    if(this.data)
    {
      this.editProfile=true;
      let url="https://localhost:44389/api/UserProfile/getByprofileId/"
      this.http.get<any>(url+this.data).subscribe(data => {
       this.profileModel=data;
       this.profileModel=this.profileModel[0];          
       });
    }
  }

  close() {
    this.dialogRef.close();
  }
}
