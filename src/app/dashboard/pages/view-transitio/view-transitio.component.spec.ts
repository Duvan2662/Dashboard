import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransitioComponent } from './view-transitio.component';

describe('ViewTransitioComponent', () => {
  let component: ViewTransitioComponent;
  let fixture: ComponentFixture<ViewTransitioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTransitioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTransitioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
