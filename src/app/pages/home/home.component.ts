import { Component, OnInit } from '@angular/core';
import { MovieApiSerivceService } from 'src/app/service/movie-api-serivce.service';
import { Title,Meta } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: MovieApiSerivceService,private title:Title,private meta:Meta) {
    this.title.setTitle('Home - showtime');
    this.meta.updateTag({name:'description',content:'watch online movies'});
   }

  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieResult:any = [];
  adventureMovieResult:any = [];
  animationMovieResult:any = [];
  comedyMovieResult:any = [];
  documentaryMovieResult:any = [];
  scienceMovieResult:any = [];
  thrillerMovieResult:any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.ComedyMovies();
    this.documentaryMovie();
    this.ScienceFictionMovies();
    this.thrillerMovie();
  }


  // bannerdata
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    });
  }
trendingData(){
  this.service.trendingmoviesApiData().subscribe((result)=>{
    console.log(result,'trendingresult#');
    this,this.trendingMovieResult = result.results
  })
}
actionMovie(){
  this.service.fetchActionMovies().subscribe((result)=>{
    console.log(result,'actionMovie#');
    this,this.actionMovieResult = result.results
  })
}
adventureMovie(){
  this.service.fetchAdventureMovies().subscribe((result)=>{
    console.log(result,'adventureMovie#');
    this,this.adventureMovieResult = result.results
  })
}
animationMovie(){
  this.service.fetchAnimationMovies().subscribe((result)=>{
    console.log(result,'animationMovie#');
    this,this.animationMovieResult = result.results
  })
}
ComedyMovies(){
  this.service.fetchComedyMovies().subscribe((result)=>{
    console.log(result,'ComedyMovies#');
    this,this.comedyMovieResult = result.results
  })
}
documentaryMovie(){
  this.service.fetchDocumentaryMovie().subscribe((result)=>{
    console.log(result,'documentaryMovie#');
    this,this.documentaryMovieResult = result.results
  })
}
ScienceFictionMovies(){
  this.service.fetchScienceFictionMovies().subscribe((result)=>{
    console.log(result,'ScienceFictionMovies#');
    this,this.scienceMovieResult = result.results
  })
}
thrillerMovie(){
  this.service.fetchThrillerMovies().subscribe((result)=>{
    console.log(result,'thrillerMovie#');
    this,this.thrillerMovieResult = result.results
  })
}



}

