import { Component, Input } from '@angular/core';
import { Category } from '../../projects/model/category';
import { Tool } from 'src/app/projects/model/project';

@Component({
  selector: 'app-title-caption',
  templateUrl: './title-caption.component.html',
  styleUrls: ['./title-caption.component.scss']
})
export class TitleCaptionComponent {
  @Input() items: Category[] | Tool[] = [];




  enumCategories(list: Category[] | Tool[]): string {
    if (list.length === 0) {
      return '';
    } else if (list.length === 1) {
      return list[0].title;
    } else if (list.length === 2) {
      return `${list[0].title} and ${list[1].title}`;
    } else {
      const titles = list.map((category) => category.title);
      const lastTitle = titles.pop();
      const titlesJoined = titles.join(', ');
      return `${titlesJoined}, and ${lastTitle}`;
    }
  }
}
