import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Observable, map } from 'rxjs';
import { IMovie } from '../movie.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.scss']
})
export class MoviewViewComponent implements OnInit {
  public imgPath: string = environment.imagePath;
  public sortDirectionDates: any[] = [];
  public sortDirectionTitles: any[] = [];
  public selectedSortDate: any | undefined;
  public selectedSortTitle: any | undefined;
  public myWatchList: IMovie[] = [];
  public watchlistCount: number = 0;
  public moviesCount: number = 0;
  public selectedKind: 0 | 1 = 0;

  constructor(private router: Router, private movieService: MovieService) { }

  ngOnInit(): void {
    this.sortDirectionTitles = [
      { label: 'Sort by Title (Asc)', value: 'selectedSortTitleAsc' },
      { label: 'Sort by Title (Desc)', value: 'selectedSortTitleDesc' }
    ];
    this.sortDirectionDates = [
      { label: 'Sort by Date (Asc)', value: 'selectedSortDateAsc' },
      { label: 'Sort by Date (Desc)', value: 'selectedSortDateDesc' }
    ];
    const localSortByDate = localStorage.getItem('sortByDate');
    if (localSortByDate)
      this.selectedSortDate = JSON.parse(localSortByDate);
    const localSortByTitle = localStorage.getItem('sortByTitle');
    if (localSortByTitle)
      this.selectedSortTitle = JSON.parse(localSortByTitle);
    const myWatchList = localStorage.getItem('myWatchList');
    if (myWatchList) {
      this.myWatchList = JSON.parse(myWatchList);
      this.watchlistCount = this.myWatchList?.length;
    }
  }

  public gotoDetails(item: IMovie): void {
    this.router.navigateByUrl(`/details/${item.id}`);
  }

  public removeFromWatchList(item: IMovie): void {
    const myWatchList = localStorage.getItem('myWatchList');
    if (myWatchList) {
      this.myWatchList = JSON.parse(myWatchList);
      const indexToRemove = this.myWatchList?.findIndex(value => value.title === item?.title);
      if (indexToRemove >= -1) {
        this.myWatchList.splice(indexToRemove, 1);
        localStorage.setItem('myWatchList', JSON.stringify(this.myWatchList));
        this.watchlistCount = this.myWatchList?.length;
      }
    }
  }

  public onSelectSortDate(event: any): void {
    const { value } = event;
    if (value)
      localStorage.setItem('sortByDate', JSON.stringify(value));
  }

  public onSelectSortTitles(event: any): void {
    const { value } = event;
    if (value)
      localStorage.setItem('sortByTitle', JSON.stringify(value));
  }

  public get getMovies(): Observable<IMovie[]> {
    return this.movieService
      .getAll()
      .pipe(map(items => {
        if (this.selectedSortTitle.value === 'selectedSortTitleDesc' 
          && this.selectedSortDate.value === 'selectedSortDateDesc') {
          items.sort((a, b) => Date.parse(b.releasedDate) - Date.parse(a.releasedDate)
            || a.title.localeCompare(b.title));
        }
        if (this.selectedSortTitle.value === 'selectedSortTitleDesc' 
          && this.selectedSortDate.value === 'selectedSortDateAsc') {
          items.sort((a, b) => Date.parse(a.releasedDate) - Date.parse(b.releasedDate)
            || a.title.localeCompare(b.title));
        }
        if (this.selectedSortTitle.value === 'selectedSortTitleAsc' 
          && this.selectedSortDate.value === 'selectedSortDateAsc') {
          items.sort((a, b) => Date.parse(a.releasedDate) - Date.parse(b.releasedDate)
            || b.title.localeCompare(a.title));
        }
        if (this.selectedSortTitle.value === 'selectedSortTitleAsc' 
          && this.selectedSortDate.value === 'selectedSortDateDesc') {
          items.sort((a, b) => Date.parse(a.releasedDate) - Date.parse(b.releasedDate)
            || a.title.localeCompare(b.title));
        }
        const myWatchList = localStorage.getItem('myWatchList');
        if (myWatchList) {
          const localWatchList: IMovie[] = JSON.parse(myWatchList);
          items = items.filter(item => !localWatchList.find(local => local.title === item.title))
        }
        this.moviesCount = items?.length;
        return items;
    }))
  }
}
