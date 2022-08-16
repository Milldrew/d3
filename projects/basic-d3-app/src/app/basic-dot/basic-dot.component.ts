import * as d3 from 'd3';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'div[basic-dot]',
  templateUrl: './basic-dot.component.html',

  styleUrls: ['./basic-dot.component.scss'],
})
export class BasicDotComponent {
  circleElement: d3.Selection<HTMLElement, any, any, any>;
  svgElement: d3.Selection<HTMLElement, any, any, any>;
  duration = 1000;
  mockDataOne = [30, 2, 100, 200, 1, 500];
  selectedElement: d3.Selection<HTMLElement, any, any, any>;
  constructor(private eleRef: ElementRef) {
    const containerEle: HTMLElement = this.eleRef.nativeElement;
    this.selectedElement = d3.select(containerEle);
    this.createDot();
    (async () => {
      await this.dotGrow(1).end();
      await this.dotGrow(2).end();
      await this.dotGrow(3).end();
      await this.dotGrow(4).end();
      await this.dotGrow(5).end();
    })();
    this.svgElement = d3.select('svg');
    this.circleElement = d3.select('circle');
    this.handleSvgSize();
    this.handleCircleColor();
  }
  handleCircleColor() {
    this.circleElement.attr('fill', () => '#afa');
    this.circleElement.attr('stroke', () => '#3d3');
  }
  handleSvgSize() {
    this.svgElement
      .attr('width', () => '1000px')
      .attr('height', () => '1000px')
      .attr('viewBox', () => '0 0 1000 1000');
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
    return this.selectedElement
      .select('circle')
      .datum(this.mockDataOne)
      .transition()
      .duration(this.duration)
      .attr('cy', this.prepareAttr(sizeIndex))
      .attr('cx', this.prepareAttr(sizeIndex))
      .attr('r', this.prepareAttr(sizeIndex));
  }
}
