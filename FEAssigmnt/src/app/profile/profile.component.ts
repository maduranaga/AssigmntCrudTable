import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { profileModel } from '../entities/profileModel';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProfileaddeditComponent } from '../profileaddedit/profileaddedit.component';
import { FormGroup } from '@angular/forms';
import { profileService } from '../services/profileService';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { snackbarService } from '../services/snackbarService';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  profileModel: profileModel;
  errorMessage: any;
  id:any;
  profiledata: any[] = [];
  displayedColumns: string[] = ['FirstName', 'LastName', 'DOB', 'UserName', 'Password', 'Action Of Data'];
  constructor(private http: HttpClient, private matDialog: MatDialog, 
              public profileService: profileService, public dialog: MatDialog,
              public snackBar:snackbarService
              ) { }

  ngOnInit() {
    this.dtaprofile();
    this.subscribeloaddata();
  }

  subscribeloaddata() {
    this.profileService.refershProfileUpdate.subscribe(data => {
      if (data=="true") {
        this.snackBar.openSnackBar("SucessFully Updated","ok");
        this.dtaprofile();
      }
      else{this.snackBar.openSnackBar("Un SucessFully Updated","ok");}
    });

    this.profileService.refershProfileDelete.subscribe(data => {
      if (data) {
        this.deleteRefresh();
}});

    this.profileService.refershProfileAdd.subscribe(data => {
      if (data=="true") {
        this.snackBar.openSnackBar("SucessFully Added","ok");
        this.dtaprofile();
      }
      else{this.snackBar.openSnackBar("Un SucessFully Added","ok");}
    });
  }

  dtaprofile() {
    this.http.get<any>('https://localhost:44389/api/UserProfile/ListAll').subscribe(data => {
      this.profiledata = data;
    }); }

  openProfileAddedit() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(ProfileaddeditComponent, dialogConfig);
  }

  updateprofile(id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = id;
    this.matDialog.open(ProfileaddeditComponent, dialogConfig);
    this.dtaprofile();
  }

  deleteprofile(id) {
    this.dialog.open(DialogBoxComponent);
    this.id=id;
  }

  deleteRefresh() {
    let url = "https://localhost:44389/api/UserProfile/DeleteProfile/"
    this.http.delete(url + this.id).subscribe(data => {
      if(data=="Successfully deleted"){
      this.dtaprofile();
      this.snackBar.openSnackBar("SucessFully Deleted","ok");}
      else{
        this.snackBar.openSnackBar("Un SucessFully Deleted","ok");
      }
    });
  }
}
