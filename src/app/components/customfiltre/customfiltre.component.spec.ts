import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomfiltreComponent } from './customfiltre.component';

describe('CustomfiltreComponent', () => {
  let component: CustomfiltreComponent;
  let fixture: ComponentFixture<CustomfiltreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomfiltreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomfiltreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
