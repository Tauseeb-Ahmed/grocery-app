import { Routes } from '@angular/router';
import { GroceryCatalogue } from './components/grocery-catalogue/grocery-catalogue';
import { GroceryDetail } from './components/grocery-detail/grocery-detail';


export const routes: Routes = [
    {path: '',component:GroceryCatalogue},
    {path: 'grocery/:name' , component : GroceryDetail}
];


