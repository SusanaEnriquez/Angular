import { Injectable } from '@angular/core';

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

  getPost() {
    return this.post;
  }

  getOne(i: number) {
    return this.post[i];
  }

  addPost(_info: any[]) {
    this.post.push(_info)
  }

  addComm(comment: string, i: number){
    this.post[i].comments.push(comment);       
  }

  // deletePost(name: string) {
  //   if (this.post.name == name)
  //     this.post[i]
  // }

  // editPost() {
    
  // }
}


// https://www.youtube.com/watch?v=2hdQ3KE7_As