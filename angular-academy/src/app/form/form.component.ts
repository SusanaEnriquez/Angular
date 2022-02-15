import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public _service: InfoService) { }

  // ELIMINAR SI NO SE USA
  cate = [
    { id:1, value: 'Travel'},
    { id:2, value: 'Lifestyle'},
    { id:3, value: 'Business'},
    { id:4, value: 'Vacation'},
    { id:5, value: 'Other'},
  ]
  // ELIMINAR SI NO SE USA

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this._service.form.value)
    this._service.addPost(this._service.form.value);
  }
}
