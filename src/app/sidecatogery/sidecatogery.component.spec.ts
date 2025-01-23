import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidecatogeryComponent } from './sidecatogery.component';

describe('SidecatogeryComponent', () => {
  let component: SidecatogeryComponent;
  let fixture: ComponentFixture<SidecatogeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidecatogeryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidecatogeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
