import { routes } from './../../app.routes';
import { Grocery, GroceryService } from './../../services/grocery';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-grocery-detail',
  imports: [],
  templateUrl: './grocery-detail.html',
  styleUrls: ['./grocery-detail.scss'],
  standalone: true
})
export class GroceryDetail implements OnInit {
  grocery!: Grocery;

  constructor(
    private route: ActivatedRoute,
    private groceryService: GroceryService,
    private router: Router
  ) {}

  ngOnInit() {

    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.grocery = this.groceryService.getGroceryByName(name)!;
    }
  }

  goBack(){
    this.router.navigate(['/']);
  }
}
