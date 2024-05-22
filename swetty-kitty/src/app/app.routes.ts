import { Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CategoryCatalogueComponent } from './category-catalogue/category-catalogue.component';
import { FormOrderComponent } from './form-order/form-order.component';

export const routes: Routes = [
    { path: '', redirectTo: '/main-menu', pathMatch: 'full'},
    {path: 'main-menu', component: MainMenuComponent},
    {path: 'catalogue', component: CatalogueComponent},
    {path: 'reviews', component: ReviewsComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'category-catalogue', component: CategoryCatalogueComponent},
    {path: 'form-order', component: FormOrderComponent}
];
