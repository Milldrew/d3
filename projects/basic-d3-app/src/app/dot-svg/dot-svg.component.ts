import * as d3 from 'd3';
import { Component, ElementRef, OnInit } from '@angular/core';
import { BasicDotComponent } from '../basic-dot/basic-dot.component';

@Component({
  selector: 'div[basic-svg]',
  templateUrl: './dot-svg.component.html',
  styleUrls: ['./dot-svg.component.scss'],
})
export class BasicSvgComponent extends BasicDotComponent {
  /*
  selectedElement: d3.Selection<HTMLElement, any, any, any>;
  constructor(private eleRef: ElementRef) {
    const containerEle: HTMLElement = this.eleRef.nativeElement;
    this.selectedElement = d3.select(containerEle);
  }
  */
}
