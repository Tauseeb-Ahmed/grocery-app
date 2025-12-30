import { Component ,EventEmitter,Input, Output } from '@angular/core';
import { Grocery } from '../../services/grocery';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-grocery-card',
  imports: [RouterModule],
  templateUrl: './grocery-card.html',
  styleUrls: ['./grocery-card.scss'],
  standalone:true
})
export class GroceryCard {

  @Input() grocery! : Grocery;
  @Output() removeGrocery = new EventEmitter<Grocery>();
}
