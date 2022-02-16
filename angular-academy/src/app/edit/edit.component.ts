import { Component, Inject, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(public _service: InfoService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  i: any;

  ngOnInit(): void {
    console.log(this.data)
  }

  onSubmit(){
    console.log(this.data)
    this._service.editPost(this._service.form.value, this.data);
  }
}
