import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-f1test1',
  templateUrl: './f1test1.component.html',
  styleUrls: ['./f1test1.component.css'],
})
export class F1test1Component implements OnInit, OnDestroy {
  id: number;
  testData = {
    103: {
      title: 'Lorem ipsum dolor',
      description: `In hac habitasse platea dictumst. Integer laoreet faucibus sem,
      et vulputate lacus. Donec feugiat leo ut massa accumsan, at volutpat sapien bibendum. `,
    },
    203: {
      title: 'purus ligula luctus justo',
      description: `Vivamus tempus lorem nec accumsan semper. Nullam sit amet dapibus turpis.
      Morbi molestie, nisi laoreet pretium tempor, purus ligula luctus justo, aliquam fermentum.`,
    },
    305: {
      title: 'Praesent viverra ',
      description: `Vestibulum condimentum erat tortor ut velit. In hac habitasse platea dictumst.
      Integer laoreet faucibus sem, et vulputate lacus. Donec feugiat leo ut massa accumsan.`,
    },
    506: {
      title: 'Nam congue',
      description: `Ante ut posuere tempus, felis elit lacinia justo, convallis egestas ipsum
      mauris id orci. Sed aliquam auctor lorem sed scelerisque. Praesent viverra vehicula convallis.`,
    },
  };
  sub;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack() {
    this.router.navigate(['/feature1']);
  }
}
