import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  post:any[] = [];

  constructor(private _service:InfoService, public dialog: MatDialog){ 
    this.post = _service.getPost()
  }

  ngOnInit(): void {
  }

  onCreate(){
    const dConfig = new MatDialogConfig();
    dConfig.disableClose = true;
    dConfig.autoFocus = true;
    dConfig.width = "550px";
    dConfig.maxWidth = "80vw";
    this.dialog.open(CreateComponent, dConfig);          
  }

  onEdit(_info: any[], id: number){
    const dConfig = new MatDialogConfig();
    dConfig.disableClose = true;
    dConfig.width = "550px";
    dConfig.maxWidth = "80vw";
    this.dialog.open(EditComponent, dConfig);    
  }

  onDelete(id: number){
    this._service.deletePost(id);
  }
}

function subscribe(arg0: (res: any) => void) {
  throw new Error('Function not implemented.');
}

