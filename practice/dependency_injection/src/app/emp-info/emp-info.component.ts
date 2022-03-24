import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers: [RecordsService]
})
export class EmpInfoComponent implements OnInit {
  infoReceived1: string[]=[];
  infoReceived2: string[]=[];
  infoReceived3: string[]=[];

  // Metods that get info from service, will recieve the data and add it to our array infoReceived#
  getInfoFromServiceClass1(){
    this.infoReceived2 = this.rservice.getInfo1()
  }

  getInfoFromServiceClass2(){
    this.infoReceived2 = this.rservice.getInfo2()
  }

  getInfoFromServiceClass3(){
    this.infoReceived2 = this.rservice.getInfo3()
  }

  // This object will help retrieve data from the service
  constructor(private rservice: RecordsService) { }

  ngOnInit(): void {
  }

}
