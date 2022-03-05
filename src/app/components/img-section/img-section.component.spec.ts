import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgSectionComponent } from './img-section.component';

describe('ImgSectionComponent', () => {
  let component: ImgSectionComponent;
  let fixture: ComponentFixture<ImgSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
