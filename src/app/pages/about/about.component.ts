import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Testimonial } from 'src/app/projects/model/testimonial';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  heroQuote: Testimonial = {
    name: 'Steve Costa',
    title: 'Software Development Manager at Loblaws Digital',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis.',
    img: './../../../assets/img/sample 1.png',
    linkedIn: '',
  };

  testimonialList: Testimonial[] = [
    {
      name: 'consectetur adipisc',
      title: 'Head of User Experience',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis.',
      img: './../../../assets/img/sample 1.png',
      linkedIn: '',
    },
    {
      name: 'consectetur adipisc',
      title: 'Head of User Experience',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis.',
      img: './../../../assets/img/sample 1.png',
      linkedIn: '',
    },
    {
      name: 'consectetur adipisc',
      title: 'Head of User Experience',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis.',
      img: './../../../assets/img/sample 1.png',
      linkedIn: '',
    },
    {
      name: 'consectetur adipisc',
      title: 'Head of User Experience',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis.',
      img: './../../../assets/img/sample 1.png',
      linkedIn: '',
    },
  ];

  ngOnInit() {
    // Set the scroll position to 0,0 when the component is initialized. 
    window.scrollTo(0, 0);

    // Set page title
    this.titleService.setTitle('Eric Njanga | About');
  }
  

  constructor(private titleService: Title) {

  }
}
