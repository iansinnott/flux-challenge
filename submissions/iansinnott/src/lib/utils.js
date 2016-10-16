/* @flow */
import { Observable } from 'rxjs';

export const createWebSocketObservable = (url: string) => {
  console.warn(`createWebSocketObservable('${url}') called`);
  return Observable.create((observer) => {
    const ws = new WebSocket(url);

    ws.onmessage = msg => observer.next(msg);
    ws.onerror = err => observer.error(err);
    ws.onclose = () => observer.complete();

    return () => ws.close();
  }).share();
};
