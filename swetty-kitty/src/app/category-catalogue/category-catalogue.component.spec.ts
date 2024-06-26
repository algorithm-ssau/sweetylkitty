import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCatalogueComponent } from './category-catalogue.component';

describe('CategoryCatalogueComponent', () => {
  let component: CategoryCatalogueComponent;
  let fixture: ComponentFixture<CategoryCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryCatalogueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
