import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSerieCardComponent } from './search-serie-card.component';

describe('SearchSerieCardComponent', () => {
  let component: SearchSerieCardComponent;
  let fixture: ComponentFixture<SearchSerieCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchSerieCardComponent]
    });
    fixture = TestBed.createComponent(SearchSerieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
