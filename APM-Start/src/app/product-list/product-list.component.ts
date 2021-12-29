import { Component } from "@angular/core";
import { Product } from "./Product";

@Component({
    selector: 'pm-product-list',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent {
    pageTitle: string = 'Product List';
    displayImages: boolean = false;
    listFilter: string = 'cart'
    imageWidth: number = 50;
    imageMargin: number = 2;
    products: Product[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2021",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "assets/images/leaf_rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
        }
    ]

    toggleImage(): void {
        this.displayImages = !this.displayImages
    }
}