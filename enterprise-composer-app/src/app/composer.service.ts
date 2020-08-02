/**
 * Title: Assignment 4.4
 * Author: Zachary Dahir
 * Date: 7-27-20
 * Description: composer.service.ts
 */

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class ComposerService {
  composers: Array<IComposer>;

//composer constructor
  constructor(){
    this.composers = [
      {
        composerId: 100, fullName: 'Claude Debussey', genre: 'Classical'
      },
      {
        composerId: 101, fullName: 'Ludovico Einaudi', genre: 'Contemporary'
      },
      {
        composerId: 102, fullName: 'Yann Tiersen', genre: 'Avant-garde'
      },
      {
        composerId: 103, fullName: 'Hans Zimmer', genre: 'Film-Score'
      },
      {
        composerId: 104, fullName: 'Fredric Chopin', genre: 'Classical'
      }
    ]
  }

  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  getComposer(composerId: number) {
    for (let composer of this.composers){
      if (composer.composerId === composerId){
        return composer;
      }
    }
  }

  filterComposers(name: string): Observable<IComposer[]> {
   return of(this.composers).pipe(map(composers =>
   composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)))
  }
}
