import { WelcomeComponent } from "../components/home/welcome.component";
import { ProductDetailComponent } from "../components/products/product-detail/product-detail.component";
import { ProductListComponent } from "../components/products/product-list/product-list.component";
import { ProductDetailGuard } from "../guards/product-detail.guard";


export const routes: object[] = [
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
]

export const productRoutes: object[] = [
    { path: 'products', component: ProductListComponent },
    { 
        path: 'products/:id', 
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent 
    }
]