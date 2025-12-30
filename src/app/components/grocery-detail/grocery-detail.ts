import { routes } from './../../app.routes';
import { Grocery, GroceryService } from './../../services/grocery';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);

    if (!isNaN(id)) {
      const found = this.groceryService.getGroceryById(id);
      if (found) {
        this.grocery = found;
        return;
      }
    }

    // fallback: invalid or missing item
    this.router.navigate(['/']);
  }


  goBack() {
    this.router.navigate(['/']);
  }
}
