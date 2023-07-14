import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSelectionPageComponent } from './section-selection-page.component';

describe('SectionSelectionPageComponent', () => {
  let component: SectionSelectionPageComponent;
  let fixture: ComponentFixture<SectionSelectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSelectionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSelectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
