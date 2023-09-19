import { Injectable } from '@angular/core';
import { Character } from './structures/character';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterDataService {
  private characterData: Character = new Character;
  private characterSubject: Subject<Character> = new Subject<Character>();
  character$: Observable<Character> = this.characterSubject.asObservable();
  private nodeClickedSubject = new Subject<any>();
  nodeClicked$ = this.nodeClickedSubject.asObservable();

  setCharacterData(data: Character) {
    this.characterData = structuredClone(data);
    this.characterSubject.next(this.characterData);
  }

  getCharacterData(): Character {
    return this.characterData;
  }

  nodeClicked(type: string, description: string) {
    this.nodeClickedSubject.next({type: type, desc: description});
  }
}
