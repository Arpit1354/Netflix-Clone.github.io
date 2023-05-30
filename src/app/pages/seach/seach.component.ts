import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiSerivceService } from 'src/app/service/movie-api-serivce.service';


@Component({
  selector: 'app-seach',
  templateUrl: './seach.component.html',
  styleUrls: ['./seach.component.css']
})
export class SeachComponent implements OnInit {
  constructor(private service: MovieApiSerivceService) { }
  ngOnInit(): void {

  }
  searchResult:any;
  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  });
  submitForm() {
    console.log(this.searchForm.value, 'searchForm#')
    this.service.getsearchMovie(this.searchForm.value).subscribe((result) => {
      console.log(result, 'searchmovie##');
      this.searchResult = result.results;
    })
  }
}
