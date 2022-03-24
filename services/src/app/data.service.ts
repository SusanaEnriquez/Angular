import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1: string[] = ["Adam Taylor", 'E234', 'at@abc.net']
  info2: string[] = ["Shawn Michael", 'E236', 'sm@abc.net']
  info3: string[] = ["Mark Fisher", 'E764', 'mf@abc.net']

  getInfo1():string[]{
    return this.info1
  }

  getInfo2():string[]{
    return this.info2
  }

  getInfo3():string[]{
    return this.info3
  }

  addInfo(info:any){
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
  }
  constructor() { }
}
