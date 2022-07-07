import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListManagersComponent } from './page-list-managers.component';

describe('PageListManagersComponent', () => {
  let component: PageListManagersComponent;
  let fixture: ComponentFixture<PageListManagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListManagersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
