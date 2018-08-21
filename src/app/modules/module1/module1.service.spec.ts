import { TestBed, inject } from '@angular/core/testing';

import { Module1Service } from './module1.service';

describe('Module1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Module1Service]
    });
  });

  it('should be created', inject([Module1Service], (service: Module1Service) => {
    expect(service).toBeTruthy();
  }));
});
