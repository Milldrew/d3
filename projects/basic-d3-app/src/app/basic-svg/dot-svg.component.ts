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

  count = 0;
  constructor(private eleRef: ElementRef) {
    const containerEle: HTMLElement = this.eleRef.nativeElement;
    this.parentMostElement = d3.select(containerEle);
    this.addSvgElement();
    this.addViewBoxToSvg();
    this.appendViewViewBox();
    this.appendViewViewBox();
    this.appendViewViewBox();
    this.appendViewViewBox();
    this.appendViewViewBox();
  }

  addSvgElement() {
    this.svgElement = this.parentMostElement.append('svg');
  }

  addViewBoxToSvg() {
    console.log(this.svgElement);
    this.svgElement.attr('viewBox', () => '0 0 40 40');
  }

  appendViewViewBox() {
    this.count += 1;
    this.svgElement.append('p').text(this.count);
  }

  ngOnChanges() {}
}
