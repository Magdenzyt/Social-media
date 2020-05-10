import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit{
  today: number = Date.now();
  constructor() {}
  ngOnInit() {}
}