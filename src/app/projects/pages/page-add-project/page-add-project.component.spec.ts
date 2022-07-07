import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddProjectComponent } from './page-add-project.component';

describe('PageAddProjectComponent', () => {
  let component: PageAddProjectComponent;
  let fixture: ComponentFixture<PageAddProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAddProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
