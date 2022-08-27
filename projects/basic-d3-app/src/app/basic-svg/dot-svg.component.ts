import * as d3 from 'd3';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { BasicDotComponent } from '../basic-dot/basic-dot.component';

@Component({
  selector: '[basic-svg]',
  templateUrl: './dot-svg.component.html',
  styleUrls: ['./dot-svg.component.scss'],
})
export class BasicSvgComponent {
  parentMostElement: d3.Selection<HTMLElement, any, any, any>;
  svgElement: d3.Selection<SVGSVGElement, any, any, any>;

  constructor(private eleRef: ElementRef) {
    const containerEle: HTMLElement = this.eleRef.nativeElement;
    this.parentMostElement = d3.select(containerEle);
    this.addSvgElement();
    this.addViewBoxToSvg();
  }

  addSvgElement() {
    this.svgElement = this.parentMostElement.append('svg');
  }

  addViewBoxToSvg() {
    console.log(this.svgElement);
    this.svgElement.attr('viewBox', () => '0 0 40 40');
  }

  sizeAddColorToSvg() {}

  addResponsiveSizing() {}

  ngOnChanges() {}
}
