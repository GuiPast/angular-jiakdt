import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
    {path: '',redirectTo: 'home',pathMatch: 'full'},
    { path: 'home', component: ItemListComponent },
    { path: 'cart', component: OrderComponent },
    { path: 'item/:id', component: ItemEditComponent},
    { path: '**', component: PageNotFoundComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
