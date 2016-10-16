/* @flow */
declare module 'redux-observable' {
  declare class ActionsObservable<T> extends rxjs$Observable<T> {
    ofType(type: string): rxjs$Observable<T>;
  }
  declare type Epic = (action$: ActionsObservable<redux$Action>) => rxjs$Observable<redux$Action>;
}
