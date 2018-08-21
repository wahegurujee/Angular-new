import { TestBed, inject } from '@angular/core/testing';

import { Module6Service } from './module6.service';

describe('Module6Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Module6Service]
    });
  });

  it('should be created', inject([Module6Service], (service: Module6Service) => {
    expect(service).toBeTruthy();
  }));
});
