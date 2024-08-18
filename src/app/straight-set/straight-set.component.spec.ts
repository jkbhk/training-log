import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StraightSetComponent } from './straight-set.component';

describe('StraightSetComponent', () => {
  let component: StraightSetComponent;
  let fixture: ComponentFixture<StraightSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StraightSetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StraightSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
