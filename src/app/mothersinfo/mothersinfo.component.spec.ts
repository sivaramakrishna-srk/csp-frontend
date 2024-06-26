import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MothersinfoComponent } from './mothersinfo.component';

describe('MothersinfoComponent', () => {
  let component: MothersinfoComponent;
  let fixture: ComponentFixture<MothersinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MothersinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MothersinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
