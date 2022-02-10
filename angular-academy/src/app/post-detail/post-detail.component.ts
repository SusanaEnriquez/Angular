import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post:any[] = [];

  constructor(private ruta: ActivatedRoute, private _service:InfoService){ 
    this.ruta.params.subscribe(params=>{
      console.log(params['id'])
      this.post.push(_service.getOne(params['id']));
    })
  }
  
  ngOnInit(): void {
  }

}
