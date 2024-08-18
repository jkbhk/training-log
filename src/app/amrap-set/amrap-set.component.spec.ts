import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmrapSetComponent } from './amrap-set.component';

describe('AmrapSetComponent', () => {
  let component: AmrapSetComponent;
  let fixture: ComponentFixture<AmrapSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmrapSetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmrapSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
