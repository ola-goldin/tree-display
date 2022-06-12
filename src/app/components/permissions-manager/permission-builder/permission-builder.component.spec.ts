import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionBuilderComponent } from './permission-builder.component';

describe('PermissionBuilderComponent', () => {
  let component: PermissionBuilderComponent;
  let fixture: ComponentFixture<PermissionBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermissionBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
