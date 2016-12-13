import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/filter";

const clicks = Observable.fromEvent(document, "click");
const targetHasId = (id) => (e) => e.target.id === id;

export const events = () => ({
	up$: clicks.filter(targetHasId("up")),
	down$: clicks.filter(targetHasId("down")),
});