import { Injectable, Output, EventEmitter } from '@angular/core';
//Agregue para el forms
import { FormGroup, FormControl } from '@angular/forms';

//Agregue para el forms

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  post: any[] = [
    { 
      title: 'The waves are high & beautiful',
      comments: [
          'Lorem ipsum dolor sit amet consectetur adipiscing elit litora diam non sce',
      ],
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit litora diam non scelerisque, quisque netus nascetur semper platea leo sem tempus est lectus fermentum accumsan, dictumst venenatis consequat nam at vel arcu urna mi viverra. Arcu litora non sapien dis sollicitudin duis euismod, augue pulvinar metus est tortor nisi. Tempor taciti platea vulputate at integer tempus a placerat potenti arcu quisque, dignissim penatibus parturient hendrerit varius rhoncus suscipit tortor mus eleifend erat, felis dis nibh ridiculus vitae euismod feugiat ullamcorper blandit duis.',
      category: 'Travel',
      bg: "https://source.unsplash.com/weekly?nature"
      
    },
    {
      title: 'At the beach in winter',
      comments: [
          'Lorem ipsum dolor sit amet consectetur adipiscing elit litora diam non sce',
          'Lorem ipsum dolor sit amet consectetur adipiscing elit litora diam non sce',
      ],
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit litora diam non scelerisque, quisque netus nascetur semper platea leo sem tempus est lectus fermentum accumsan, dictumst venenatis consequat nam at vel arcu urna mi viverra. Arcu litora non sapien dis sollicitudin duis euismod, augue pulvinar metus est tortor nisi. Tempor taciti platea vulputate at integer tempus a placerat potenti arcu quisque, dignissim penatibus parturient hendrerit varius rhoncus suscipit tortor mus eleifend erat, felis dis nibh ridiculus vitae euismod feugiat ullamcorper blandit duis.',
      category: 'Lifestyle',
      bg: "https://source.unsplash.com/weekly?beach"
    },
    {
      title: 'The Edge of Nothing Lake',
      comments: [],
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit litora diam non scelerisque, quisque netus nascetur semper platea leo sem tempus est lectus fermentum accumsan, dictumst venenatis consequat nam at vel arcu urna mi viverra. Arcu litora non sapien dis sollicitudin duis euismod, augue pulvinar metus est tortor nisi. Tempor taciti platea vulputate at integer tempus a placerat potenti arcu quisque, dignissim penatibus parturient hendrerit varius rhoncus suscipit tortor mus eleifend erat, felis dis nibh ridiculus vitae euismod feugiat ullamcorper blandit duis.',
      category: 'Business',
      bg: "https://source.unsplash.com/random"
    },
    {
      title: 'Five Hundred Twenty',
      comments: [],
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit litora diam non scelerisque, quisque netus nascetur semper platea leo sem tempus est lectus fermentum accumsan, dictumst venenatis consequat nam at vel arcu urna mi viverra. Arcu litora non sapien dis sollicitudin duis euismod, augue pulvinar metus est tortor nisi. Tempor taciti platea vulputate at integer tempus a placerat potenti arcu quisque, dignissim penatibus parturient hendrerit varius rhoncus suscipit tortor mus eleifend erat, felis dis nibh ridiculus vitae euismod feugiat ullamcorper blandit duis.',
      category: 'Travel',
      bg: "https://source.unsplash.com/collection/540518/likes/"
    },
  ];
    

  constructor() {  console.log("funciona el servicio :)"); }

  //Agregue para el forms
  form: FormGroup = new FormGroup({
    // $key: new FormControl(null),
    title: new FormControl(""),
    comments: new FormControl([]),
    description: new FormControl(""),
    category: new FormControl(""),
    bg: new FormControl("https://source.unsplash.com/random")
  });

  initializeFormGroup(){
    this.form.setValue({
      title: "",
      comments: [],
      description: "",
      category: "",
      bg: "https://source.unsplash.com/random"
    });
  }
  //Agregue para el forms

  
  getPost() {
    return this.post;
  }

  getOne(i: number) {
    return this.post[i];
  }

  addPost(_info: any[]) {
    // this.post.push(_info)
    this.post.unshift(_info);
  }

  addComm(comment: string, i: number){
    this.post[i].comments.push(comment);       
  }

  deletePost(i: any) {
    // delete this.post[i];
    var removed  = this.post.splice(i,1)
    return removed

  }

  editPost(changes: any[], i: any){    
    this.post[i]=changes
  }

  popForm(infoPost: any[]){
    this.form.setValue(infoPost);
  }
}