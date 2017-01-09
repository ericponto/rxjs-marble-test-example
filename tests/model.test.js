import {test} from "qunitjs";
import {model} from "../src/model";
import {TestScheduler} from "rxjs/Rx";

test("Test Model", (assert) => {
	// construct TestScheduler with deep equal assertion
	const testScheduler = new TestScheduler(assert.deepEqual.bind(assert));

	// mock streams
	const upMarbles   = "--x----x--x---";
	const downMarbles = "----x-------x-";
	const expected    = "a-b-a--b--c-b-";
	
	const expectedStateMap = {
		a: {count: 0},
		b: {count: 1},
		c: {count: 2},
	};

	// mock up$ and down$ events
	const up$   = testScheduler.createHotObservable(upMarbles);
	const down$ = testScheduler.createHotObservable(downMarbles);

	const state$ = model({up$, down$});

	// assertion
	testScheduler.expectObservable(state$).toBe(expected, expectedStateMap);

	// run tests
	testScheduler.flush();
});