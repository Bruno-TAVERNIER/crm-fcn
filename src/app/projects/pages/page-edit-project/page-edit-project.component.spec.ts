import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditProjectComponent } from './page-edit-project.component';

describe('PageEditProjectComponent', () => {
  let component: PageEditProjectComponent;
  let fixture: ComponentFixture<PageEditProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEditProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
