/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ColorsetService } from './colorset.service';

describe('Service: Colorset', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorsetService]
    });
  });

  it('should ...', inject([ColorsetService], (service: ColorsetService) => {
    expect(service).toBeTruthy();
  }));
});
