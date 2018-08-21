import { TestBed, inject } from '@angular/core/testing';

import { EventBroadcasterService } from './event-broadcaster.service';

describe('EventBroadcasterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventBroadcasterService]
    });
  });

  it('should be created', inject([EventBroadcasterService], (service: EventBroadcasterService) => {
    expect(service).toBeTruthy();
  }));
});
