/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContinateService } from './continate.service';

describe('Service: Continate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContinateService]
    });
  });

  it('should ...', inject([ContinateService], (service: ContinateService) => {
    expect(service).toBeTruthy();
  }));
});
