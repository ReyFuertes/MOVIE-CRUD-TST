import { TestBed } from '@angular/core/testing';
import { MoviewViewComponent } from './movie-view.component';

describe('MoviewViewComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MoviewViewComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MoviewViewComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
