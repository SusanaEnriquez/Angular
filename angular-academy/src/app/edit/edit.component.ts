import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(public _service: InfoService) { }
  data: any[] = [];

  ngOnInit(): void {
  }

  onSubmit(){
    // this._service.editPost(_info, id);
    // this._service.form.reset();
    // this._service.initializeFormGroup();
  }

}
