import morphdom from "morphdom";
import "rxjs/add/operator/map";

const el = document.getElementById("app");

export const render = (html) =>
	morphdom(el, html, {childrenOnly: true});

const template = (state) => (
`<div>
	<button id="up">+</button>
	<button id="down">-</button>
	<output>${state.count}</output>
</div>`
);

export const view = (state$) => state$.map(template);