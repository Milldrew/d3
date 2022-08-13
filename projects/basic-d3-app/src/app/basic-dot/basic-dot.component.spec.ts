import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDotComponent } from './basic-dot.component';

describe('BasicDotComponent', () => {
  let component: BasicDotComponent;
  let fixture: ComponentFixture<BasicDotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicDotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
