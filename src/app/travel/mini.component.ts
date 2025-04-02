import { Component, Input, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { startWith, take, map } from 'rxjs/operators';
import { NguCarouselConfig } from '@ngu/carousel';
import { slider } from '../slider.animation'

@Component({
  selector: 'mini',
  templateUrl: 'mini.component.html',
  styleUrls: ['mini.component.scss'],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiniComponent implements OnInit {
  @Input() name: string;
  imgags = [
    '../../assets/Chanshal-Pass-1.jpg',
    '../../assets/Chanshal-Pass.jpg',
    '../../assets/the-chanshal.jpg',
    '../../assets/Chanshal-Pass.jpg'
  ];
  public carouselTileItems$: Observable<number[]>;
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 5, all: 0 },
    speed: 250,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    interval: { timing: 1500 },
    animation: 'lazy'
  };
  tempData: any[];
  
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.tempData = [];
    this.carouselTileItems$ = interval(500).pipe(
      startWith(-1),
      take(30),
      map(val => {
        const data = (this.tempData = [
          ...this.tempData,
          this.imgags[Math.floor(Math.random() * this.imgags.length)]
        ]);
        return data;
      })
    );
  }

}
