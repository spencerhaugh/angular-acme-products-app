import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ProductService } from "../services/product.service";
import { Product } from "./Product";

@Component({
    selector: 'pm-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Product List';
    displayImages: boolean = false;
    imageWidth: number = 50;
    imageMargin: number = 2;
    errorMsg: string = '';
    sub!: Subscription;

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
        this.sub = this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error: error => this.errorMsg = error
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
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