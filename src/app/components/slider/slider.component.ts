import { Component, Input, OnInit } from '@angular/core';
import {Movies} from '../../model/movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() sliderConfig:any;
  @Input() movies:any
  @Input() title:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
