import { TestBed, inject } from '@angular/core/testing';

import { Module2Service } from './module2.service';

describe('Module2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Module2Service]
    });
  });

  it('should be created', inject([Module2Service], (service: Module2Service) => {
    expect(service).toBeTruthy();
  }));
});
