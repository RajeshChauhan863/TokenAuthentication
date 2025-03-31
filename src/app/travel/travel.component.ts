import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {
 
  constructor() { }
  currentIndex: number = 0;
  ngOnInit(): void {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    const showSlide = (index: number) => {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
          slide.classList.add('active');
          dots[i].classList.add('active');
        }
      });
      const nextSlide = () => {
        this.currentIndex = (this.currentIndex + 1) % slides.length;
        showSlide(this.currentIndex);
      };
  
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          this.currentIndex = index;
          showSlide(this.currentIndex);
        });
      });
  
      setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }
  }


  
}
