import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetoCreateComponent } from './objeto-create.component';

describe('ObjetoCreateComponent', () => {
  let component: ObjetoCreateComponent;
  let fixture: ComponentFixture<ObjetoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
