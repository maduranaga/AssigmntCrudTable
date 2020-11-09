import { Injectable, Output, EventEmitter } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })
  
export class profileService{

   
    @Output() refershProfileUpdate: EventEmitter<any> = new EventEmitter<any>();
    @Output() refershProfileDelete: EventEmitter<any> = new EventEmitter<any>();
    @Output() refershProfileAdd: EventEmitter<any> = new EventEmitter<any>();


constructor(){}


}