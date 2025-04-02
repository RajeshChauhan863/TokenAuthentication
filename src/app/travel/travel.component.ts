import { Component, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef ,OnInit,ViewChild,Input} from '@angular/core';
import { NguCarousel,NguCarouselConfig} from '@ngu/carousel';
import { Observable, interval } from 'rxjs';
import { startWith, take, map } from 'rxjs/operators';
import { slider } from  '../slider.animation'
@Component({   
  selector: 'my-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss'],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelComponent implements OnInit {
  imgags = [
    '../../assets/Chanshal-Pass-1.jpg',
    '../../assets/Chanshal-Pass.jpg',
    '../../assets/the-chanshal.jpg',
    '../../assets/Chanshal-Pass.jpg'
  ];
  public carouselTileItems: Array<any> = [0, 1, 2, 3, 4, 5];
  public carouselTiles = {
    
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
  };
  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
    slide: 3,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };
  constructor(private _cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this._cdr.detectChanges();
  }

  ngOnInit() {
    this.carouselTileItems.forEach(el => {
      this.carouselTileLoad(el);
    });
  }

  public carouselTileLoad(j) {
    const len = this.carouselTiles[j].length;
    if (len <= 30) {
      for (let i = len; i < len + 15; i++) {
        this.carouselTiles[j].push(
          this.imgags[Math.floor(Math.random() * this.imgags.length)]
        );
      }
    }
  }
}