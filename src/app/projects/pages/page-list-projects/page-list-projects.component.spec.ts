import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListProjectsComponent } from './page-list-projects.component';

describe('PageListProjectsComponent', () => {
  let component: PageListProjectsComponent;
  let fixture: ComponentFixture<PageListProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
