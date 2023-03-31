import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Project } from '../../model/project';
import { PROJECTS_DATABASE } from 'src/app/mocks/project-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  
  // Generate an array of random projects
  createDb() {
    let projects = PROJECTS_DATABASE;
    // const max = 200;

    // for (let i = 0; i < max; i++) {
    //   projects.push(this.getRandomData());
    // }

    return {projects}; // product endpoint
  }
  
  
  // getRandomData(): Project {
  //   return {
  //     id: 1,
  //     title: 'elited tristique augue vitae elit malesuada semper sapien', 
  //     excerpt: this.getRandomParagraphFraction(), 
  //     thumbnail: './../../../assets/img/3.png',
  //     dateCreated: this.getRandomDate().toLocaleDateString(),
  //     category: this.getRandomCategory(),
  //     subCategory: '',
  //     published: true,
  //     liveUrl: '',
  //   }
  // }

  getRandomCategory(): string {
    const arr = ['ux-design', 'ui-development'];
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  getRandomNumber(min: number, max: number): number {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }

  
  getRandomDate(): Date {
    const start = new Date(2015, 0, 1).getTime();
    const end = new Date(2022, 1, 1).getTime();
    const randomTime = start + Math.random() * (end - start);
    return new Date(randomTime);
  }
  
  /**
   * 
   * @returns generates a random fraction of a set paragraph each time it is called and ensures that the first word of the returned paragraph has a minimum length of 5 characters with no space
   */
  getRandomParagraphFraction(): string {
    const paragraph = 'Lorem ipsum dolor sit amet consectetur adipiscing elited tristique augue vitae elit malesuada semper sapien molestie integer dignissim a pellentesque molestie ipsum lorem vehicula urna eu euismod velit urna vel ipsum aliquam erat volutpat.';
    const length = 60; // this.getRandomNumber(60, paragraph.length);
    const possibleStartingIndexes = [];
    let startIndex = 0;
    while ((startIndex = paragraph.indexOf(' ', startIndex + 1)) > 0) {
      if (startIndex > 5) {
        const previousChar = paragraph.charAt(startIndex - 1);
        if (previousChar !== ' ') {
          possibleStartingIndexes.push(startIndex + 1);
        }
      }
    }

    const start = possibleStartingIndexes[Math.floor(Math.random() * possibleStartingIndexes.length)];
    return paragraph.substr(start, length);
  }

  constructor() { }
}
