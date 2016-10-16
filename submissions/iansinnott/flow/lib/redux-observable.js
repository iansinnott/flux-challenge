/* @flow */
import Redux from 'redux';

declare module 'redux-observable' {
  declare class ActionsObservable<T> extends rxjs$Observable<T> {
    ofType(type: string): rxjs$Observable<T>;
  }
  declare type Epic<T> = (action$: ActionsObservable<T>) => rxjs$Observable<T>;
  declare function combineEpics<T>(...epics: Epic<T>[]): Epic<T>;
  declare interface EpicMiddleware<T> extends Redux.Middleware {
    replaceEpic(nextEpic: Epic<T>): void;
  }
  declare function createEpicMiddleware<T>(rootEpic: Epic<T>): EpicMiddleware<T>;
}
