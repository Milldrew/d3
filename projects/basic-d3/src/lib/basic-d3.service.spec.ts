import { TestBed } from '@angular/core/testing';

import { BasicD3Service } from './basic-d3.service';

describe('BasicD3Service', () => {
  let service: BasicD3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicD3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
