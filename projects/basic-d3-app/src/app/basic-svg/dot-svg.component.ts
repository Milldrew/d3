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

  viewCount = 0;
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

  /**
   *@Action1 -  This method appends a view its name to its respective number appended with the word view for example the first views id will be 1-view, the second views id will be 2-view.
   *@Action2 - This method will then dynamically set the view box using arguments that are passed in.
   *@description - The viewbox attributes respectively: min-x min-y width height
   */
  appendView(minX: string, minY: string, width: string, height: string) {
    this.viewCount += 1;
    this.svgElement
      .append('view')
      .attr('viewBox', () => `${minX} ${minY} ${width} ${height}`)
      .attr('id', `${this.viewCount}-view`);
  }

  ngOnChanges() {}
}
