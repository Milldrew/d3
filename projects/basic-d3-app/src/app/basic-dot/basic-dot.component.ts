import * as d3 from 'd3';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'div[basic-dot]',
  templateUrl: './basic-dot.component.html',
  styleUrls: ['./basic-dot.component.scss'],
})
export class BasicDotComponent {
  mockDataOne = [30, 2, 3];
  selectedElement: d3.Selection<HTMLElement, any, any, any>;
  constructor(private eleRef: ElementRef) {
    const containerEle: HTMLElement = this.eleRef.nativeElement;
    this.selectedElement = d3.select(containerEle);
    this.createDot();
  }

  createDot() {
    const setAttr: d3.ValueFn<any, any, any> = (data, index, element) => {
      return data[0];
    };

    this.selectedElement
      .append('svg')
      .append('circle')
      .datum(this.mockDataOne)
      .attr('cy', setAttr)
      .attr('cx', setAttr)
      .attr('r', setAttr);
  }
}
