import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientaddComponent } from './clientadd.component';

describe('ClientaddComponent', () => {
  let component: ClientaddComponent;
  let fixture: ComponentFixture<ClientaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientaddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
