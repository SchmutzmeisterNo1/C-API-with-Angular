import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenUserDialogComponent } from './open-user-dialog.component';

describe('OpenUserDialogComponent', () => {
  let component: OpenUserDialogComponent;
  let fixture: ComponentFixture<OpenUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenUserDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
