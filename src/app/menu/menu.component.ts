import { Component } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menu: MenuItem[] = [
    { name: 'Margherita Pizza', category: 'Pizza', price: 10.99 },
    { name: 'Pepperoni Pizza', category: 'Pizza', price: 12.99 },
    { name: 'Vegetarian Pizza', category: 'Pizza', price: 11.99 },
    { name: 'Hawaiian Pizza', category: 'Pizza', price: 13.99 },
    { name: 'Meat Lovers Pizza', category: 'Pizza', price: 14.99 },
    { name: 'BBQ Chicken Pizza', category: 'Pizza', price: 13.99 },
    { name: 'Buffalo Chicken Pizza', category: 'Pizza', price: 13.99 },
    { name: 'White Pizza', category: 'Pizza', price: 11.99 },
    { name: 'Pesto Pizza', category: 'Pizza', price: 12.99 },
    { name: 'Supreme Pizza', category: 'Pizza', price: 14.99 },
    { name: 'Caesar Salad', category: 'Salad', price: 6.99 },
    { name: 'Greek Salad', category: 'Salad', price: 7.99 },
    { name: 'Garden Salad', category: 'Salad', price: 6.49 },
    { name: 'Mozzarella Sticks', category: 'Appetizer', price: 8.49 },
    { name: 'Garlic Knots', category: 'Appetizer', price: 4.99 },
    { name: 'Bruschetta', category: 'Appetizer', price: 7.99 },
    { name: 'Fried Calamari', category: 'Appetizer', price: 9.99 },
    { name: 'Chicken Wings', category: 'Appetizer', price: 10.99 },
    { name: 'Lasagna', category: 'Main Course', price: 12.49 },
    { name: 'Spaghetti Bolognese', category: 'Main Course', price: 11.49 },
    { name: 'Fettuccine Alfredo', category: 'Main Course', price: 11.99 },
    { name: 'Eggplant Parmesan', category: 'Main Course', price: 10.99 },
    { name: 'Chicken Parmesan', category: 'Main Course', price: 12.99 },
    { name: 'Tiramisu', category: 'Dessert', price: 6.99 },
    { name: 'Cannoli', category: 'Dessert', price: 5.99 },
  ]

  categories: string[] = ['Appetizer', 'Pizza', 'Salad', 'Main Course', 'Dessert'];

  getByCategory(cat: string): MenuItem[] {
    return this.menu.filter(item => item.category === cat);
  }

  showByCategory = false;

  showWholeMenu(): void {
    this.showByCategory = false;
  }

  showCategoryMenu(): void {
    this.showByCategory = true;
  }
}



