import { Component } from '@angular/core';
import { Testimonial } from 'src/app/projects/model/testimonial';

@Component({
  selector: 'app-about-mentors',
  templateUrl: './about-mentors.component.html',
  styleUrls: ['./about-mentors.component.scss']
})
export class AboutMentorsComponent {


  ericQuote: Testimonial = 
  {
    name: 'Eric Njanga',
    title: 'Their generous advice, nurturing feedback and honest critique gave me the direction, the challenge and the push my  certifications couldn’t.',
    text: '...',
    img: './../../assets/img/mentor 2.png',
    linkedIn: '',
  };



  mentors: Testimonial[] = [
    {
      name: 'Dave Landis',
      title: 'UX Design & Research + Innovation Architect [Design Thinking & Design Sprint Facilitation]',
      text: '...',
      img: './../../assets/img/mentor 1.png',
      linkedIn: 'https://www.linkedin.com/in/dlandis/',
    },
    {
      name: 'Alexandr Barsuk',
      title: 'Head of User Experience. Previously @ Pacaso, Amazon Prime Video, SAP, XBOX, TiVo.',
      text: '...',
      img: './../../assets/img/mentor 2.png',
      linkedIn: 'https://www.linkedin.com/in/alexbarsuk/',
    },
  ];


  decorationNumber(index: number): number {
    return index + 1;
  }
}
