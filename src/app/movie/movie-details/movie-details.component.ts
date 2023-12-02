import { Component, OnInit } from '@angular/core';
import { IMovie } from '../movie.model';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { MovieService } from '../movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  public imgPath: string = environment.imagePath;
  public myWatchList: IMovie[] = [];
  public item: IMovie | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    if (id) {
      this.movieService.getById(id)
      .pipe(take(1))
      .subscribe(item => this.item = item);
    } else {
      this.onBack();
    }
  }

  public addToWatchList(item: IMovie): void {
    const myWatchList = localStorage.getItem('myWatchList');
    if (myWatchList) {
      this.myWatchList = [];
      this.myWatchList = JSON.parse(myWatchList);
    }
    const exist = this.myWatchList.find(watchItem => watchItem.title === item.title);
    if (!exist) {
      this.myWatchList.push(item);
    }
    if (myWatchList?.length !== this.addToWatchList.length) {
      localStorage.setItem('myWatchList', JSON.stringify(this.myWatchList));
    }
    this.onBack();
  }

  public onWatchList(item: IMovie): boolean {
    const myWatchList = localStorage.getItem('myWatchList');
    if (myWatchList) {
      this.myWatchList = [];
      this.myWatchList = JSON.parse(myWatchList);
      const exist = this.myWatchList.find(watchItem => watchItem.title === item.title);
      if (exist) {
        return true;
      }
    }
    return false;
  }

  public onBack(): void {
    this.router.navigateByUrl('/');
  }
}
