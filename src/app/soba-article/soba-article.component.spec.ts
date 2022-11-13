import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SobaArticleComponent} from './soba-article.component';

describe('SobaArticleComponent', () => {
  let component: SobaArticleComponent;
  let fixture: ComponentFixture<SobaArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SobaArticleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SobaArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
