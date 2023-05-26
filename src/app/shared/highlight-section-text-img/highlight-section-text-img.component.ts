import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlight-section-text-img',
  templateUrl: './highlight-section-text-img.component.html',
  styleUrls: ['./highlight-section-text-img.component.scss']
})
export class HighlightSectionTextImgComponent {
  @Input() title = '';
  @Input() titleIcon = '';
  @Input() subTitle = '';
  @Input() stageImage = '';

} 
