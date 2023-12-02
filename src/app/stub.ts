import { Observable, of } from "rxjs";
import { IMovie } from "./movie/movie.model";

export const moviesStudData: IMovie[] = [
  {
    id: '6eedd5ee-f782-4fb0-8136-b612a5a3834f',
    title: 'Tenet',
    description: `Armed with only one word, Tenet, and fighting for the survival of the entire world, a
          Protagonist journeys through a twilight world of international espionage on a mission that will unfold in
          something beyond real time.`,
    rating: 7.8,
    duration: '2h 30 min',
    genre: 'Action, Sci-Fi',
    releasedDate: '3 September 2020',
    trailerLink: 'https://www.youtube.com/watch?v=LdOM0x0XDMo',
    image: 'tenet.png'
  }, {
    id: '173cdd9e-8454-4ffa-b9cb-a2dab7898426',
    title: 'Spider-Man: Into the Spider-Verse',
    description: `Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spiderpowered individuals from other dimensions to stop a threat for all realities.`,
    rating: 8.4,
    duration: '1h 57min',
    genre: 'Action, Animation, Adventure',
    releasedDate: '14 December 2018',
    trailerLink: 'https://www.youtube.com/watch?v=tg52up16eq0',
    image: 'spider-man.png'
  },
  {
    id: 'b29c0d57-8cb4-4baa-ad89-a3294a040585',
    title: 'Knives Out',
    description: `A detective investigates the death of a patriarch of an eccentric, combative family. rating: 7.9`,
    duration: '2h 10min',
    genre: 'Comedy, Crime, Drama',
    releasedDate: '27 November 2019',
    trailerLink: 'https://www.youtube.com/watch?v=qGqiHJTsRkQ',
    image: 'knives-out.png'
  },
  {
    id: '2f623901-62f9-4952-b073-a4c6ae980c08',
    title: 'Guardians of the Galaxy',
    description: `A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to
  purge the universe.`,
    rating: 8.0,
    duration: '2h 1min',
    genre: 'Action, Adventure, Comedy',
    releasedDate: '1 August 2014',
    trailerLink: 'https://www.youtube.com/watch?v=d96cjJhvlMA',
    image: 'guardians-of-the-galaxy.png'
  },
  {
    id: '50efd1f4-71c6-4df0-862a-1ca46529dd3d',
    title: 'Avengers: Age of Ultron',
    description: `When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program
  called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron
  from enacting his terrible plan.`,
    rating: 7.3,
    duration: '2h 21min',
    genre: 'Action, Adventure, Sci-Fi',
    releasedDate: '1 May 2015',
    trailerLink: 'https://www.youtube.com/watch?v=tmeOjFno6Do ',
    image: 'avengers.png'
  }
];