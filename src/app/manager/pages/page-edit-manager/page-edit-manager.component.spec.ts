import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditManagerComponent } from './page-edit-manager.component';

describe('PageEditManagerComponent', () => {
  let component: PageEditManagerComponent;
  let fixture: ComponentFixture<PageEditManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEditManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
