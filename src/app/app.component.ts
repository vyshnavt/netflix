import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movies } from './model/movie';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  sticky:boolean=false
  subs:Subscription[]=[]
  popular:Movies|undefined
  trending:Movies|any
  topRated:Movies|undefined
  originals:Movies|undefined
  nowPlaying:Movies| undefined
  latest:Movies|undefined

  sliderConfig={
    slidesToShow:9,
    slidesToScroll:2,
    arrows:true,
    autoplay:false
  }

  @ViewChild('stickHeader') header:ElementRef|undefined;
  headerBGUrl:string|undefined;

  constructor(private movie:MoviesService){

  }

  ngOnInit(): void {
    this.subs.push(this.movie.getNowplaying().subscribe({next:data =>{this.nowPlaying=data;
      this.headerBGUrl=  'https://image.tmdb.org/t/p/original' +this.nowPlaying.results[0].backdrop_path}}));
    this.subs.push(this.movie.getTrending().subscribe({next:data =>this.trending=data}));
    this.subs.push(this.movie.getPopular().subscribe({next:data =>this.popular=data}));
    this.subs.push(this.movie.getTopRated().subscribe({next:data =>this.topRated=data}));
    this.subs.push(this.movie.getOriginals().subscribe({next:data =>this.originals=data}));
  }
  ngOnDestroy(): void {
    this.subs.map(s=> s.unsubscribe())
  }

  @HostListener('window:scroll',['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;

    if(windowScroll>= this.header?.nativeElement.offsetHeight){
      this.sticky=  true;
    }else{
      this.sticky= false;
    }
  }
}
