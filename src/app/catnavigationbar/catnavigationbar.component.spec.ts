import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatnavigationbarComponent } from './catnavigationbar.component';

describe('CatnavigationbarComponent', () => {
  let component: CatnavigationbarComponent;
  let fixture: ComponentFixture<CatnavigationbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatnavigationbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatnavigationbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
