import { TestBed } from '@angular/core/testing';

import { MenuModeService } from './menu-mode.service';

describe('MenuModeService', () => {
  let service: MenuModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
