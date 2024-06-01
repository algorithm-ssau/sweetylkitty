import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Импортируем CommonModule
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CategoryCatalogueComponent } from './category-catalogue/category-catalogue.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryCatalogueComponent,
    CatalogueComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
