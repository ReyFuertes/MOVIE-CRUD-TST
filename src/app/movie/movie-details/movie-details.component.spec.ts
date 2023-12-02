import { TestBed } from '@angular/core/testing';
import { MovieDetailsComponent } from './movie-details.component';

describe('MovieDetailsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MovieDetailsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MovieDetailsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
