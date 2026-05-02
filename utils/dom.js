// utils/dom.js
export const $ = (sel, ctx = document) => ctx.querySelector(sel);
export const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
export const on = (el, ev, fn, opts) => el.addEventListener(ev, fn, opts);

export function createElement(tag, attrs = {}, ...children) {
  const el = Object.assign(document.createElement(tag), attrs);
  el.append(...children);
  return el;
}
