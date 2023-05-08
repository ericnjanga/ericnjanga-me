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
}
