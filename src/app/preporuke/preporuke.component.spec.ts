import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreporukeComponent } from './preporuke.component';

describe('PreporukeComponent', () => {
  let component: PreporukeComponent;
  let fixture: ComponentFixture<PreporukeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreporukeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreporukeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
