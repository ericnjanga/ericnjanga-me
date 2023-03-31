import { Component } from '@angular/core';
import { CATEGORY_DATABASE } from 'src/app/mocks/category-list';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent {
  categories: Category[];

  constructor() {
    this.categories = CATEGORY_DATABASE.filter(item => item.parentId === null);
  }
}
