import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcontributionComponent } from './addcontribution.component';

describe('AddcontributionComponent', () => {
  let component: AddcontributionComponent;
  let fixture: ComponentFixture<AddcontributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcontributionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcontributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
