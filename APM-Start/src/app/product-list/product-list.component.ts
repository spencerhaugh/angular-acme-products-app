import { Component, OnInit } from "@angular/core";
import { ProductService } from "../services/product.service";
import { Product } from "./Product";

@Component({
    selector: 'pm-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    displayImages: boolean = false;
    imageWidth: number = 50;
    imageMargin: number = 2;

    constructor(private productService: ProductService) {}

    private _listFilter: string = ''

    get listFilter(): string {
        return this._listFilter
    }

    set listFilter(value: string) {
        this._listFilter = value;
        console.log('Setter: ', value)
        this.filteredProducts = this.performFilter(value)
    }

    filteredProducts: Product[] = [];

    products: Product[] = [];

    ngOnInit(): void {
        console.log("ngOnInit");
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    }

    toggleImage(): void {
        this.displayImages = !this.displayImages
    }

    performFilter(filterBy: string): Product[] {
        filterBy = filterBy.toLowerCase();
        return this.products.filter(
            (product: Product) => 
                product.productName.toLowerCase().includes(filterBy)
            );
    }

    onRatingClicked(rating: string, product: Product): void {
        this.pageTitle = `${product.productName}: ${rating}`;
    }
}