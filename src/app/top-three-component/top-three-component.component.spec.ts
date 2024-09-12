import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopThreeComponentComponent } from './top-three-component.component';

describe('TopThreeComponentComponent', () => {
  let component: TopThreeComponentComponent;
  let fixture: ComponentFixture<TopThreeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopThreeComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopThreeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
