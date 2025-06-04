import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  loading = true;

  // ActivatedRoute is a service in Angular that gives access to the information about the current route as URL, query params, route params and more.
  // snapshot is immutable representation of the route at the moment the component is created.
  // snapshot used to access route params immediately, instead of subscribing to changes.
  // useful for static routes (routes that don't change after the component is initialized)
  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // + is used to convert string to number and ! is to assert non null
    this.productService.getProductById(+id!).subscribe({
      next: res => {
          this.product = res,
          this.loading = false;
      },
      error: err => {
        console.error("Error Fetching Product by ID", err);
        this.loading = false;
      }
    });
  }
  
   addToCart() {
    this.cartService.addToCart(this.product);
    alert(`${this.product.title} added to cart!`);
   }

}
