import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddManagerComponent } from './page-add-manager.component';

describe('PageAddManagerComponent', () => {
  let component: PageAddManagerComponent;
  let fixture: ComponentFixture<PageAddManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAddManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
