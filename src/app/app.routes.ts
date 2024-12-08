import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';

export const routes: Routes = [
    {path:'',component : HomeComponent, title: 'home'},
    {path: 'list', component: ListComponent, title: 'list'},
];
