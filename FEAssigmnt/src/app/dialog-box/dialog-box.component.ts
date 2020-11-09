import { Component, OnInit } from '@angular/core';
import {profileService} from '../services/profileService';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  constructor(public profileService: profileService) { }

  ngOnInit(): void {
  }
  deleteProfile()
  {
    this.profileService.refershProfileDelete.emit("true");
  }
}
