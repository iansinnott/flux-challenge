/* @flow */
import { Observable } from 'rxjs/Rx';

export const createWebSocketObservable = (url: string) => {
  return Observable.create((observer) => {
    const ws = new WebSocket(url);

    ws.onmessage = msg => observer.next(msg);
    ws.onerror = err => observer.error(err);
    ws.onclose = () => observer.complete();

    return () => ws.close();
  }).share();
};
