import * as d3 from 'd3';
import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

/**
 * @Description This is a Component class that selects any element with the directive basic-dot in it's element tag the lement that is selected will be used as a container for a d3 chart. The chart grows and shrinks as  a result of the value of the data that is passed into it and the assigned timeInterval in ms.
 * @Input timeInterval
 * @Input nameOfFigure: string;
 * @Input data: Object[] | SimpleChange;
 * @Input intervalInMs: number | SimpleChange;
 *
 *
 */
@Component({
  selector: 'div[basic-dot]',
  templateUrl: './basic-dot.component.html',

  styleUrls: ['./basic-dot.component.scss'],
})
export class BasicDotComponent implements OnChanges, OnInit {
  @Input()
  nameOfFigure: string;
  @Input()
  data: Object[] | SimpleChange;
  @Input()
  intervalInMs: number | SimpleChange;

  ngOnChanges(changes: SimpleChanges): void {
    this.nameOfFigure = changes['nameOfFigure'].currentValue;
  }
  ngAfterContentInit() {
    this.addChartTitle();
  }
  circleElement: d3.Selection<HTMLElement, any, any, any>;
  svgElement: d3.Selection<HTMLElement, any, any, any>;
  mockDataOne = [30, 2, 100, 200, 1, 500];
  selectedElement: d3.Selection<HTMLElement, any, any, any>;
  constructor(private eleRef: ElementRef) {
    const containerEle: HTMLElement = this.eleRef.nativeElement;
    this.selectedElement = d3.select(containerEle);
  }
  ngOnInit(): void {
    this.setupH2Element();
    this.createDot();
    (async () => {
      await this.dotGrow(1)?.end();
      await this.dotGrow(2)?.end();
      await this.dotGrow(3)?.end();
      await this.dotGrow(4)?.end();
      await this.dotGrow(5)?.end();
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
  setupH2Element() {
    this.selectedElement
      .append('h2')
      .style('background-color', 'orange')
      .style('text-align', 'center');
  }

  dotGrow(sizeIndex: number) {
    if (typeof this.intervalInMs === 'number') {
      return this.selectedElement
        .select('circle')
        .datum(this.mockDataOne)
        .transition()
        .duration(this.intervalInMs)
        .attr('cy', this.prepareAttr(sizeIndex))
        .attr('cx', this.prepareAttr(sizeIndex))
        .attr('r', this.prepareAttr(sizeIndex));
    }
  }
  addChartTitle() {
    const h2Element = d3.select('h2');
    h2Element.text(this.nameOfFigure || 'NO NAME FOUND');
  }
}
