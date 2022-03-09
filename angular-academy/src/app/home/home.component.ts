import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import { EditComponent } from '../edit/edit.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filter: string = "All";
  post:any[] = [];
  undo: any[] = [];

  constructor(private _service:InfoService, public dialog: MatDialog, private _snackBar: MatSnackBar){ 
    this.post = _service.getPost()
  }

  ngOnInit(): void {
  }

  onCreate(){
    this._service.initializeFormGroup();
    const dConfig = new MatDialogConfig();
    dConfig.disableClose = true;
    dConfig.autoFocus = true;
    dConfig.width = "550px";
    dConfig.maxWidth = "80vw";
    this.dialog.open(CreateComponent, dConfig);          
  }

  onEdit(_info: any[], id: number){
    this._service.popForm(_info);
    const dConfig = new MatDialogConfig();
    dConfig.disableClose = true;
    dConfig.width = "550px";
    dConfig.maxWidth = "80vw";
    dConfig.data = id;
    this.dialog.open(EditComponent, dConfig);  
    
  }

  // openSnackBar(message: string, action: string) {
  //   this._snackBar.open(message, action, {
  //     duration: 3000
  //   });
  // }

  openSnackBar() {
    this._snackBar.open('Deleted Post', '', {
      duration: 3000
    });
  }

 onDelete(id: number){
    this._service.deletePost(id);
      this.openSnackBar();
  }
}

function subscribe(arg0: (res: any) => void) {
  throw new Error('Function not implemented.');
}

