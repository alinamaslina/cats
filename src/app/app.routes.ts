import { Routes } from '@angular/router';
import { CatCardComponent } from './cat-card/cat-card.component';
import { CatsListComponent } from './cats-list/cats-list.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';

//http://localhost:4200/ --> AppComponent
//http://localhost:4200/cat-profile --> CatCardComponent
//http://localhost:4200/cat-list --> CatCardComponent

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cat-profile',
    component: CatCardComponent,
  },
  {
    path: 'cat-list',
    component: CatsListComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
