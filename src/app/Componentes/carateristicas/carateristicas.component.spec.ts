import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarateristicasComponent } from './carateristicas.component';

describe('CarateristicasComponent', () => {
  let component: CarateristicasComponent;
  let fixture: ComponentFixture<CarateristicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarateristicasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarateristicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
