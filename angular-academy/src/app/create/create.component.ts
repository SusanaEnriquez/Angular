import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public _service: InfoService) { }
  data: any[] = [];
  ngOnInit(): void {
  }

  onSubmit(){
    this._service.addPost(this._service.form.value);
    this._service.form.reset();
    // this._service.initializeFormGroup();
  }

}
