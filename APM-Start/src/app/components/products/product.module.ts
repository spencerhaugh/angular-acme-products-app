import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ConvertToSpacesPipe } from 'src/app/shared/convert-to-spaces.pipe';

import { productRoutes } from 'src/app/utils/routes';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    RouterModule.forChild(productRoutes),
    SharedModule
  ]
})
export class ProductModule { }
