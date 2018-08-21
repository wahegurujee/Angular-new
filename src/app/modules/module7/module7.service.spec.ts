import { TestBed, inject } from '@angular/core/testing';

import { Module7Service } from './module7.service';

describe('Module7Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Module7Service]
    });
  });

  it('should be created', inject([Module7Service], (service: Module7Service) => {
    expect(service).toBeTruthy();
  }));
});
