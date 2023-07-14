import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiosPageComponent } from './audios-page.component';

describe('AudiosPageComponent', () => {
  let component: AudiosPageComponent;
  let fixture: ComponentFixture<AudiosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudiosPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudiosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
