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
    this.styleSvg();
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
  /**
   *@description This function sets the background color using the fill attribute. This function sets the text color using the stroke attribute
   *
   *
   */
  handleCircleColor() {
    this.circleElement.attr('fill', () => '#afa');
    this.circleElement.attr('stroke', () => '#3d3');
  }
  /**
   *@description This function sets the size of the svg element inside of the containing element.
   *
   *
   */
  handleSvgSize() {
    this.svgElement.attr('viewBox', () => '0 0 1000 1000');
  }
  /**
   *@description this function takes the data value out of the data and adds it to the attribute, it is a callback function
   *@todo this funciton needs to be renamed.
   */
  prepareAttr(dataIndex: number) {
    const setAttr: d3.ValueFn<any, any, any> = (data, index, element) => {
      return data[dataIndex];
    };
    return setAttr;
  }
  /**
   *@description this function creates the circle and sets all of the size and position attr
   *@todo this funciton needs to be renamed.
   */
  createDot() {
    this.selectedElement
      .append('svg')
      .append('circle')
      .datum(this.mockDataOne)
      .attr('cy', 500)
      .attr('cx', 500)
      .attr('r', this.prepareAttr(0));
  }
  /**
   *@description This function handles the title of the chart.
   *
   */
  setupH2Element() {
    this.selectedElement
      .append('h2')
      .style('text-align', 'center')
      .style('font-family', 'sans-serif');
  }

  dotGrow(sizeIndex: number) {
    if (typeof this.intervalInMs === 'number') {
      return this.selectedElement
        .select('circle')
        .datum(this.mockDataOne)
        .transition()
        .duration(this.intervalInMs)
        .attr('r', this.prepareAttr(sizeIndex));
    }
  }
  addChartTitle() {
    const h2Element = d3.select('h2');
    h2Element.text(this.nameOfFigure || 'NO NAME FOUND');
  }

  styleSvg() {
    console.log('hello form style svg');
    this.selectedElement.select('svg').attr('fill', '#adadad');
  }
}
