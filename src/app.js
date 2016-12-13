import {model} from "./model";
import {events} from "./events";
import {view, render} from "./view";

const actions$ = events();
const state$ = model(actions$);
const html$ =  view(state$);

html$.subscribe(render);