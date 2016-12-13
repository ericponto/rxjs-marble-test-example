import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/merge";
import "rxjs/add/operator/mapTo";
import "rxjs/add/operator/scan";
import "rxjs/add/operator/startWith";

export const model = ({up$, down$}) =>
	Observable.merge(
		up$.mapTo((state) => ({
			count: state.count + 1
		})),
		down$.mapTo((state) => ({
			count: state.count - 1
		})),
	)
	.startWith({count: 0})
	.scan((state, fn) => fn(state));