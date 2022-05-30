import { TestBed } from '@angular/core/testing';

import { EleitorService } from './eleitor.service';

describe('EleitorService', () => {
  let service: EleitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EleitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
