import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { artworksLoadedSuccess, loadArtworks } from './artwork.actions';
import { ArtworkService } from './services/artwork.service';

@Injectable()
export class ArtworkEffects {
  loadArtworks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadArtworks),
      mergeMap(() =>
        this.artworkService.loadArtworks().pipe(
          map((artworks) => artworksLoadedSuccess({ artworks })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private artworkService: ArtworkService
  ) {}
}
