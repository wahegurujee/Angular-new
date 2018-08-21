import { TestBed, inject } from '@angular/core/testing';

import { Module4Service } from './module4.service';

describe('Module4Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Module4Service]
    });
  });

  it('should be created', inject([Module4Service], (service: Module4Service) => {
    expect(service).toBeTruthy();
  }));
});
