import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyLoadersComponentComponent } from './heavy-loaders-component.component';

describe('HeavyLoadersComponentComponent', () => {
  let component: HeavyLoadersComponentComponent;
  let fixture: ComponentFixture<HeavyLoadersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeavyLoadersComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeavyLoadersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
