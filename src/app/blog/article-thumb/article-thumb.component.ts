import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-thumb',
  templateUrl: './article-thumb.component.html',
  styleUrls: ['./article-thumb.component.scss']
})
export class ArticleThumbComponent {
  @Input() title: string = '';
  @Input() link: string = '';
  @Input() img: string = '';
  @Input() text: string = '';
}
