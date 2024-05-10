import { Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ReviewsComponent } from './reviews/reviews.component';

export const routes: Routes = [
    { path: '', redirectTo: '/main-menu', pathMatch: 'full'},
    {path: 'main-menu', component: MainMenuComponent},
    {path: 'catalogue', component: CatalogueComponent},
    {path: 'configurator', component: ConfiguratorComponent},
    {path: 'reviews', component: ReviewsComponent},
    {path: 'contacts', component: ContactsComponent},
];
