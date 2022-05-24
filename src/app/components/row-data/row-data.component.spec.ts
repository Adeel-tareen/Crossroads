import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowDataComponent } from './row-data.component';

describe('RowDataComponent', () => {
  let component: RowDataComponent;
  let fixture: ComponentFixture<RowDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
