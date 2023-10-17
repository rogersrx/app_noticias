import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiapostergridComponent } from './noticiapostergrid.component';

describe('NoticiapostergridComponent', () => {
  let component: NoticiapostergridComponent;
  let fixture: ComponentFixture<NoticiapostergridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticiapostergridComponent]
    });
    fixture = TestBed.createComponent(NoticiapostergridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
