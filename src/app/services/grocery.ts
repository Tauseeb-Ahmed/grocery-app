import { Injectable, signal, Signal, WritableSignal } from '@angular/core';


export interface Grocery {
  id: number;
  name: string;
  quantity: number;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class GroceryService {

  private groceryListSignal: WritableSignal<Grocery[]> = signal([
    {
      id: 1,
      name: 'Apple',
      quantity: 5,
      image: 'https://plus.unsplash.com/premium_vector-1722200084794-9155e6c2a1c7?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      name: 'Banana',
      quantity: 8,
      image: 'https://plus.unsplash.com/premium_vector-1721988781361-710efe0b3dbd?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      name: 'Milk',
      quantity: 7,
      image: 'https://plus.unsplash.com/premium_vector-1725876628115-231ccfb7b253?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]);

  get groceries(): Signal<Grocery[]> {
    return this.groceryListSignal;
  }

  addGrocery(item: Omit<Grocery, 'id'>): void {
    const nextId = Math.max(...this.groceryListSignal().map(g => g.id), 0) + 1;
    this.groceryListSignal.update(list => [...list, { ...item, id: nextId }]);
  }

  removeGrocery(item: Grocery): void {
    this.groceryListSignal.update(list => list.filter(g => g.id !== item.id));
  }

  getGroceryById(id: number): Grocery | undefined {
    return this.groceryListSignal().find(g => g.id === id);
  }

}
