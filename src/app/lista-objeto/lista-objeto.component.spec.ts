import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaObjetoComponent } from './lista-objeto.component';

describe('ListaObjetoComponent', () => {
  let component: ListaObjetoComponent;
  let fixture: ComponentFixture<ListaObjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaObjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaObjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
