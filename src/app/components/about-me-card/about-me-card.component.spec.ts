import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeCardComponent } from './about-me-card.component';

describe('AboutMeCardComponent', () => {
  let component: AboutMeCardComponent;
  let fixture: ComponentFixture<AboutMeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutMeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
