import { GroceryCard } from './../grocery-card/grocery-card';
import { Component, OnInit, computed, effect, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Grocery, GroceryService } from '../../services/grocery';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grocery-catalogue',
  imports: [CommonModule,GroceryCard, RouterModule,FormsModule],
  templateUrl: './grocery-catalogue.html',
  styleUrls: ['./grocery-catalogue.scss'],
  standalone:true
})

export class GroceryCatalogue {



  groceries: Signal<Grocery[]>;

  constructor(private groceryService: GroceryService){
    this.groceries = this.groceryService.groceries;
  }

  addGrocery(item : Omit<Grocery, 'id'>){
    this.groceryService.addGrocery(item);
  }

  removeGrocery(item : Grocery){
    this.groceryService.removeGrocery(item);

  }


newName = '';
newQuantity = 1;
newImage = '';


  onAdd() {
  this.addGrocery({

    name: this.newName,
    quantity: this.newQuantity,
    image: this.newImage
  });

  this.newName = '';
  this.newQuantity = 1;
  this.newImage = '';
}

}
