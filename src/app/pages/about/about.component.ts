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
    linkedIn: 'https://www.linkedin.com/in/steve-costa-32790b2/',
  };

  testimonialList: Testimonial[] = [
    {
      name: 'Dana Salman',
      title: 'Senior Marketing Leader | Full Lifecycle Marketing',
      text: 'Eric has been an integral part of launching our partner portal - babyTEL University. His development skills, communication and openness to solving problems are great assets that make him a valuable team member. Eric would be a great addition to any team.',
      img: 'https://media.licdn.com/dms/image/D5603AQEwVLkL89OWoQ/profile-displayphoto-shrink_800_800/0/1669824402926?e=2147483647&v=beta&t=Yt7UIleNw54BY3p25p8Ifyv9zBlqvP896-HAEBRtqaY',
      linkedIn: 'https://www.linkedin.com/in/danasalman/',
    },
    {
      name: 'Vincent Garrigues',
      title: 'Communication Management',
      text: 'Within the framework of the Web development of MEROE Global, we found with Eric Njanga competence, listening, creativity and vision. His sensitive and intelligent approach allowed us to design a new project perfectly suited to site users and prospects. A fine connoisseur of the entire technical chain, Eric is the right person to embrace a complex project, transform it, give it allure and meaning. UX dynamite in the www engine. I highly recommend his talents.',
      img: 'https://pbs.twimg.com/profile_images/1606413440985272322/0OSLp9oO_400x400.jpg',
      linkedIn: 'https://www.linkedin.com/in/vincent-garrigues-communication/',
    },
    {
      name: 'Rajeev RamtuholRajeev Ramtuhol',
      title: 'Senior Software Developer (Web, Backend, iOS)',
      text: 'Eric has demonstrated exceptional skill in converting mock-ups to a fully featured, interactive, & app-feel Wordpress website. He provided technical and functional recommendations for ever-evolving requirements. His skills spanned frontend and backend development (PHP). Looking deeply at his code, it\'s clear he can *think* in jQuery/Javascript, DOM, PHP and is a LAMP expert. He keeps up-to-date on the latest web technologies and techniques and makes recommendations accordingly. He\'s easy to get along with and highly recommended.',
      img: './../../../assets/img/unknown-person.png',
      linkedIn: 'https://www.linkedin.com/in/ramtu/',
    },
    {
      name: 'Steve Costa',
      title: 'Software Development Manager at Loblaw Digital',
      text: 'I had the pleasure of being Eric\'s direct manager during his time at Espresso. Eric is incredibly dedicated to his work and unwavering in his focus - he is always in pursuit of perfect code. He\'s adept at working in many frameworks and in all aspects of web programming. And aside from his work skills, Eric\'s positivity and terrific attitude contribute greatly to any team that he\'s on.',
      img: 'https://media.licdn.com/dms/image/C4E03AQFk5rH9H2q2dw/profile-displayphoto-shrink_800_800/0/1516267516818?e=1689206400&v=beta&t=Ka4zQf0Pt5alncp0_LuF3QpXD6Hc14XkmGU9Baq93x4',
      linkedIn: 'https://www.linkedin.com/in/steve-costa-32790b2/',
    },
  ];

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

  ericQuote: Testimonial = 
  {
    name: 'Eric Njanga',
    title: 'Their generous advice, nurturing feedback and honest critique gave me the direction, the challenge and the push my  certifications couldn’t.',
    text: '...',
    img: './../../assets/img/mentor 2.png',
    linkedIn: '',
  };

  ngOnInit() {
    // Set the scroll position to 0,0 when the component is initialized. 
    window.scrollTo(0, 0);

    // Set page title
    this.titleService.setTitle('Eric Njanga | About');
  }

  decorationNumber(index: number): number {
    return index + 1;
  }
  

  constructor(private titleService: Title) {

  }
}
