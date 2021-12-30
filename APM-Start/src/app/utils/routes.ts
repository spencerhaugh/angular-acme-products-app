import { WelcomeComponent } from "../components/home/welcome.component";
import { ProductDetailComponent } from "../components/product-detail/product-detail.component";
import { ProductListComponent } from "../components/product-list/product-list.component";


export const routes: object[] = [
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
]