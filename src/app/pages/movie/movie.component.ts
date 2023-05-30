import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieApiSerivceService } from 'src/app/service/movie-api-serivce.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent  implements OnInit  {
constructor( private service:MovieApiSerivceService, private router:ActivatedRoute   ) {}
getMovieDetailResult:any;
getMovieVideoResult:any;
getMovieCastResult:any;
ngOnInit(): void {
  let getparamId = this.router.snapshot.paramMap.get('id');
  console.log(getparamId,'getparamid#');
  this.getMovie(getparamId);
  this.getVideo(getparamId);
  this.getMovieCast(getparamId);
}
  getMovie(id:any){
this.service.getMovieDetails(id).subscribe((result)=>{
  console.log(result,'getmoviedetails#');
  this.getMovieDetailResult = result;
});
  }
 getVideo(id:any){
  this.service.getMovieVideo(id).subscribe((result)=>{
    console.log(result,'getMovieVideo#');
    result.results.forEach((element:any) => {
      if(element.type=="trailer"
      ){
        this.getMovieVideoResult = element.key;
      }
    });
    this.getMovieVideoResult = result;
  });
 }
getMovieCast(id:any){
  this.service.getMovieCast(id).subscribe((result)=>{
    console.log(result,'MovieCast#');
    this.getMovieCastResult = result.cast;
  })
}

}
