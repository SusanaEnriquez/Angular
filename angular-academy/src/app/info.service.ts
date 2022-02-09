import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  post: any[] = [
    { 
      title: 'The waves are high & beautiful',
      comments: 0,
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit litora diam non scelerisque, quisque netus nascetur semper platea leo sem tempus est lectus fermentum accumsan, dictumst venenatis consequat nam at vel arcu urna mi viverra. Arcu litora non sapien dis sollicitudin duis euismod, augue pulvinar metus est tortor nisi. Tempor taciti platea vulputate at integer tempus a placerat potenti arcu quisque, dignissim penatibus parturient hendrerit varius rhoncus suscipit tortor mus eleifend erat, felis dis nibh ridiculus vitae euismod feugiat ullamcorper blandit duis.',
      category: 'Travel'
      
    },
    {
      title: 'At the beach in winter',
      comments: 0,
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit litora diam non scelerisque, quisque netus nascetur semper platea leo sem tempus est lectus fermentum accumsan, dictumst venenatis consequat nam at vel arcu urna mi viverra. Arcu litora non sapien dis sollicitudin duis euismod, augue pulvinar metus est tortor nisi. Tempor taciti platea vulputate at integer tempus a placerat potenti arcu quisque, dignissim penatibus parturient hendrerit varius rhoncus suscipit tortor mus eleifend erat, felis dis nibh ridiculus vitae euismod feugiat ullamcorper blandit duis.',
      category: 'Lifestyle'
    },
    {
      title: 'At the beach in winter',
      comments: 0,
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit litora diam non scelerisque, quisque netus nascetur semper platea leo sem tempus est lectus fermentum accumsan, dictumst venenatis consequat nam at vel arcu urna mi viverra. Arcu litora non sapien dis sollicitudin duis euismod, augue pulvinar metus est tortor nisi. Tempor taciti platea vulputate at integer tempus a placerat potenti arcu quisque, dignissim penatibus parturient hendrerit varius rhoncus suscipit tortor mus eleifend erat, felis dis nibh ridiculus vitae euismod feugiat ullamcorper blandit duis.',
      category: 'Lifestyle'
    },
    { 
      title: 'The waves are high & beautiful',
      comments: 0,
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit litora diam non scelerisque, quisque netus nascetur semper platea leo sem tempus est lectus fermentum accumsan, dictumst venenatis consequat nam at vel arcu urna mi viverra. Arcu litora non sapien dis sollicitudin duis euismod, augue pulvinar metus est tortor nisi. Tempor taciti platea vulputate at integer tempus a placerat potenti arcu quisque, dignissim penatibus parturient hendrerit varius rhoncus suscipit tortor mus eleifend erat, felis dis nibh ridiculus vitae euismod feugiat ullamcorper blandit duis.',
      category: 'Travel'
      
    },
  ];

  constructor() {  console.log("funciona el servicio :)"); }

  getPost() {
    return this.post;
  }
}


// https://www.youtube.com/watch?v=2hdQ3KE7_As