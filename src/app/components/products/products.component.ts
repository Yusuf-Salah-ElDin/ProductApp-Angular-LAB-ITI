import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  

  products = [
    {id: 1, title: 'Arabian Sword', stock: 25, category: 'Swords', price: 2000, image: 'arabian-sword.jpg'},
    {id: 1, title: 'Indian Sword', stock: 25, category: 'Swords', price: 1500, image: 'indian-sword.jpg'},
    {id: 1, title: 'Arabian Armour', stock: 25, category: 'Armours', price: 6000, image: 'arabian-armour.jpg'},
    {id: 1, title: 'Crusade Armour', stock: 25, category: 'Armours', price: 5800, image: 'crusade-armour.jpg'},
    {id: 1, title: 'Arabian Horse', stock: 25, category: 'Horses', price: 9000, image: 'arabian-horse.jpg'},
    {id: 1, title: 'Crusade Horse', stock: 25, category: 'Horses', price: 8500, image: 'crusade-horse.jpg'}
  ];

  categories: string[] = ['Swords', 'Armours', 'Horses'];

  filterValues = {
    category: '',
    title: '',
    maxPrice: null as number | null
  };

  displayValues = {
    category: '',
    title: '',
    maxPrice: null as number | null
  };

  updateFilterDisplay(): void {
    this.displayValues = { ...this.filterValues };
  }

}
