import * as d3 from 'd3';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'div[basic-dot]',
  templateUrl: './basic-dot.component.html',

  styleUrls: ['./basic-dot.component.scss'],
})
export class BasicDotComponent {
  mockDataOne = [30, 2, 100];
  selectedElement: d3.Selection<HTMLElement, any, any, any>;
  constructor(private eleRef: ElementRef) {
    const containerEle: HTMLElement = this.eleRef.nativeElement;
    this.selectedElement = d3.select(containerEle);
    this.createDot();
    this.dotGrow();
  }
  prepareAttr(dataIndex: number) {
    const setAttr: d3.ValueFn<any, any, any> = (data, index, element) => {
      return data[dataIndex];
    };
    return setAttr;
  }
  createDot() {
    this.selectedElement
      .append('svg')
      .append('circle')
      .datum(this.mockDataOne)
      .attr('cy', this.prepareAttr(0))
      .attr('cx', this.prepareAttr(0))
      .attr('r', this.prepareAttr(0));
  }

  dotGrow(sizeIndex: number) {
    this.selectedElement
      .select('circle')
      .datum(this.mockDataOne)
      .transition()
      .duration(4000)
      .attr('cy', this.prepareAttr(sizeIndex))
      .attr('cx', this.prepareAttr(sizeIndex))
      .attr('r', this.prepareAttr(sizeIndex));
  }
}
