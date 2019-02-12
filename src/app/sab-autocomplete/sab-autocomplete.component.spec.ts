import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SabAutocompleteComponent } from './sab-autocomplete.component';

describe('SabAutocompleteComponent', () => {
  let component: SabAutocompleteComponent;
  let fixture: ComponentFixture<SabAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SabAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SabAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
