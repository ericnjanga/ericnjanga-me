import { Component, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { Skill } from 'src/app/projects/model/skill';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() title = '';
  @Input() info = '';

  // Don't sign a specific type to the child view 
  // (it will be casted as a "nativeElement" later in the code)
  @ViewChild('myDialog', { static: true }) myDialog: any;

  // tooltip positionning ...
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[3]);
  
  // scroll system
  @ViewChild('scrollable', { static: true }) scrollable: any; // scrollable area ..
  scrollValue = 0;  // scrol counter ..

  // Skills ---------------------------
  // Array of skills
  listOfSkills: Skill[] = [
    {
      title: 'Web Development',
      description: 'Versatility and proficiency at developing in both front-end and back-end technologies, aptitude at crafting intuitive user interfaces while seamlessly integrating them with robust server-side functionality, ensuring a cohesive and dynamic web application experience.',
      img: './../../../assets/img/img-ide.png',
    },
    {
      title: 'UI Design',
      description: 'Creation of visually appealing and user-friendly interfaces for websites and mobile applications. This involves understanding user behavior, optimizing layouts, choosing appropriate typography and color schemes, and implementing responsive design techniques for seamless experiences across different devices.',
      img: './../../../assets/img/img-ide.png',
    },
    {
      title: 'User Research',
      description: 'Understanding user behavior, needs, and motivations. This involves techniques such as interviews, surveys, usability testing, and analytics analysis. The insights gained from this process will inform the design and development process, ensuring products and experiences are tailored to user expectations and preferences.',
      img: './../../../assets/img/img-ide.png',
    },
    {
      title: 'Information Architecture',
      description: 'Organizing and structuring information within a system or website. This involves creating hierarchies, navigation schemes, and categorization methods that enable users to locate and interact with content in a logical and intuitive manner, enhancing usability and user experience.',
      img: './../../../assets/img/img-ide.png',
    },
    {
      title: 'Interaction Design',
      description: 'Designing meaningful and engaging interactions between users and digital products or services. This involves understanding user goals, creating intuitive interfaces, defining interactive behaviors, and ensuring seamless and satisfying user experiences through user-centered design principles.',
      img: './../../../assets/img/img-ide.png',
    },
  ];
  // Skills index
  currSkillInd = 0; // points toward the skill in the array that is currently on display

  // Skill on display
  skillOnDisplay!: Skill;

  updateSkillOnDisplay() {
    this.skillOnDisplay = this.listOfSkills[this.currSkillInd];
  }

  // Move pointer to the previous index (or the last index of the array)
  prevSkill(listOfSkills: Skill[]) {
    // Position the index on the last array's element if it exceeds the left boundary
    let ind = this.currSkillInd - 1;
    if(ind < 0) {
      ind = this.listOfSkills.length - 1;
    }

    // Update the index globally
    this.currSkillInd = ind;

    // Update stage display
    this.updateSkillOnDisplay();
  }

  // Move pointer to the next index (or the first index of the array)
  nextSkill(listOfSkills: Skill[]) {
    // Position the index on the first array's element if it exceeds the right boundary
    let ind = this.currSkillInd + 1;
    if(ind == listOfSkills.length) {
      ind = 0;
    }

    // Update the index globally
    this.currSkillInd = ind;

    // Update stage display
    this.updateSkillOnDisplay();
  }

  // Returns the class associated with the current slide
  // (usefull later for styling purpose)
  currSlide() {
    return `slide-${this.currSkillInd + 1}`;
  }





 

  openDialog() {
    this.myDialog.nativeElement.showModal();
  }

  closeDialog() {
    this.myDialog.nativeElement.close();
  }

  /**
   * Make the scrollable area scroll left or right
   * @param direction 
   */
  scroll(direction: number) {
    const container = this.scrollable.nativeElement;
    const step = 200;
    const scrollAmount = container.scrollLeft + (step * direction);
    container.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
    this.scrollValue += step * direction;
  }



  ngOnInit() {
    this.updateSkillOnDisplay();
  }
}
