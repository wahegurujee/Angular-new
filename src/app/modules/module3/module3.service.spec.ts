import { TestBed, inject } from '@angular/core/testing';

import { Module3Service } from './module3.service';

describe('Module3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Module3Service]
    });
  });

  it('should be created', inject([Module3Service], (service: Module3Service) => {
    expect(service).toBeTruthy();
  }));
});
