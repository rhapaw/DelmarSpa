import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivershipComponent } from './receivership.component';

describe('ReceivershipComponent', () => {
  let component: ReceivershipComponent;
  let fixture: ComponentFixture<ReceivershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
