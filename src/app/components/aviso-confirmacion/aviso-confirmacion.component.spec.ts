import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoConfirmacionComponent } from './aviso-confirmacion.component';

describe('AvisoConfirmacionComponent', () => {
  let component: AvisoConfirmacionComponent;
  let fixture: ComponentFixture<AvisoConfirmacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvisoConfirmacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvisoConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
