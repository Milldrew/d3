import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSvgComponent } from './dot-svg.component';

describe('DotSvgComponent', () => {
  let component: BasicSvgComponent;
  let fixture: ComponentFixture<BasicSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicSvgComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
