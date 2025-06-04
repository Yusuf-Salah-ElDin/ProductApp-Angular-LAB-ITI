import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product'; // 👈 adjust the relative path
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  products: any[] = [];
  categories: any[] = [];
  loading: boolean = true;

  // filter 
  titleFilter: string = "";
  priceFilter: number | null = null;
  selectedCategory: string = "";

  constructor(private productService: ProductService, 
    private cartService: CartService
  ) {}

  ngOnInit(): void {
      this.productService.getProducts().subscribe({
        next: (res) => {
          this.products = res.products;
          this.loading = false;
        },
        error: (err) => {
          console.error("error fetching products", err);
          this.loading = false;
        }
      });
      this.productService.getCategories().subscribe({
        next: (res) => {
          this.categories = res;
        },
        error: (err) => {
          console.error("Error Fetching Categories");
        }
      });
  }
  resetFilters(): void {
    this.titleFilter = "";
    this.priceFilter = null;
    this.selectedCategory = "";
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert(`${product.title} added to cart!`);
  }
  
}
