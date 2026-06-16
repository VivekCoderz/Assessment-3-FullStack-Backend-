// 1.
// oops true
// done
 
// 2.
// TypeError
 
// 3.
// inner
// caught 42
// outer
 
// 4.
// 2
 
// 5.
// bad
// fin
 
// 6.
// ReferenceError
 
// 7.
// fail 404 true
 
// 8.
// true
 
// 9.
// s s
// c p
 
// 10.
// TypeError: Cannot read properties of undefined (reading 'bar')
 
// 11.
// class ValidationError extends Error {
//     constructor(msg, field) {
//         super(msg); this.name = 'ValidationError'; this.field = field;
//     }
// }
// class NetworkError extends Error {
//     constructor(msg, statusCode) {
//         super(msg); this.name = 'NetworkError'; this.statusCode = statusCode;
//     }
// }
// class AuthError extends Error {
//     constructor(msg, userId) {
//         super(msg); this.name = 'AuthError'; this.userId = userId;
//     }
// }
// function handle(err) {
//     if (err instanceof ValidationError) console.log('Validation:', err.field, err.message);
//     else if (err instanceof NetworkError) console.log('Network:', err.statusCode, err.message);
//     else if (err instanceof AuthError) console.log('Auth:', err.userId, err.message);
//     else console.log('Unknown:', err.message);
// }
 
// 12.
// class DivisionByZeroError extends Error {
//     constructor() { super('Division by zero'); this.name = 'DivisionByZeroError'; }
// }
// function safeDiv(a, b) {
//     try {
//         if (b === 0) throw new DivisionByZeroError();
//         return a / b;
//     } catch (e) {
//         console.log(e.name + ':', e.message);
//         return null;
//     }
// }
 
// 13.
// class MaxRetriesError extends Error {
//     constructor(attempts) {
//         super(`Failed after ${attempts} attempts`);
//         this.name = 'MaxRetriesError';
//         this.attempts = attempts;
//     }
// }
// async function retry(fn, times) {
//     for (let i = 1; i <= times; i++) {
//         try { return await fn(); }
//         catch (e) {
//             console.log(`Attempt ${i} failed:`, e.message);
//             if (i === times) throw new MaxRetriesError(times);
//         }
//     }
// }
 
// 14.
// --- mathUtils.js ---
// export const add = (a, b) => a + b;
// export const sub = (a, b) => a - b;
// export const mul = (a, b) => a * b;
// export const div = (a, b) => {
//     if (b === 0) throw new Error('Division by zero');
//     return a / b;
// };
// --- main.js ---
// import { add, sub, mul, div } from './mathUtils.js';
// console.log(add(4,2), sub(4,2), mul(4,2), div(4,2));
 
// 15.
// --- logger.js ---
// function log(level, msg) {
//     console.log(`[${new Date().toISOString()}] [${level.toUpperCase()}] ${msg}`);
// }
// module.exports = { log };
// --- app.js ---
// const { log } = require('./logger');
// log('info', 'Server started');
 
// 16.
// class PluginNotFoundError extends Error {
//     constructor(name) {
//         super(`Plugin not found: ${name}`);
//         this.name = 'PluginNotFoundError';
//         this.pluginName = name;
//     }
// }
// async function loadPlugin(name) {
//     try {
//         return await import(`./plugins/${name}.js`);
//     } catch (e) {
//         throw new PluginNotFoundError(name);
//     }
// }
 
// 17.
// --- config.js ---
// const config = { env: process.env.NODE_ENV, port: process.env.PORT, dbUrl: process.env.DB_URL };
// for (const [k, v] of Object.entries(config)) {
//     if (!v) throw new Error(`Missing config: ${k}`);
// }
// export default config;
// --- main.js ---
// import config from './config.js';
// console.log(config.env, config.port, config.dbUrl);
 
// 18.
// function errorBoundary(fn) {
//     return async function (...args) {
//         try {
//             const result = await fn(...args);
//             return { ok: true, data: result };
//         } catch (e) {
//             return { ok: false, error: e.message };
//         }
//     };
// }
 
// 19.
// --- stringUtils.js ---
// export const capitalize = s => s[0].toUpperCase() + s.slice(1);
// --- arrayUtils.js ---
// export const uniq = arr => [...new Set(arr)];
// --- objectUtils.js ---
// export const pick = (obj, keys) => Object.fromEntries(keys.map(k => [k, obj[k]]));
// --- index.js ---
// export * from './stringUtils.js';
// export * from './arrayUtils.js';
// export * from './objectUtils.js';
// --- main.js ---
// import { capitalize, uniq, pick } from './index.js';
 
// 20.
// class TimeoutError extends Error {
//     constructor(ms) { super(`Timed out after ${ms}ms`); this.name = 'TimeoutError'; }
// }
// async function fetchWithTimeout(url, ms) {
//     const controller = new AbortController();
//     const timer = setTimeout(() => controller.abort(), ms);
//     try {
//         const res = await fetch(url, { signal: controller.signal });
//         clearTimeout(timer);
//         return res;
//     } catch (e) {
//         clearTimeout(timer);
//         if (e.name === 'AbortError') throw new TimeoutError(ms);
//         throw e;
//     }
// }
 
// 21.
// class EventEmitter {
//     constructor() { this._events = {}; }
//     on(event, cb) {
//         if (!this._events[event]) this._events[event] = [];
//         this._events[event].push(cb);
//     }
//     off(event, cb) {
//         this._events[event] = (this._events[event] || []).filter(fn => fn !== cb);
//     }
//     emit(event, ...args) {
//         for (const cb of [...(this._events[event] || [])]) {
//             try { cb(...args); } catch (e) { console.error('Listener error:', e.message); }
//         }
//     }
// }
 
// 22.
// function parseJSON(str) {
//     let result = null;
//     try { result = JSON.parse(str); }
//     catch (e) { console.error('Parse error:', e.message); }
//     finally { console.log('parseJSON finished'); }
//     return result;
// }
 
// 23.
// no
 
// 24.
// { value: 1, done: false }
// { value: 3, done: false }
// { value: 'done', done: true }
 
// 25.
// true true Error
 
// 26.
// child
// parent
 
// 27.
// &lt;b&gt;bold&lt;/b&gt;
 
// 28.
// stopPropagation  → event bubble hona band
// preventDefault   → browser default action band (submit, link)
// dono saath       → na bubble na default
 
// 29.
// [object Object]
 
// 30.
// 0
 
// 31.
// getElementById sirf ID se — faster
// querySelector CSS selector se — flexible
// Return value same (element ya null). Farq: querySelector complex selectors support karta hai.
 
// 32.
// fired
// fired
 
// 33.
// Type karne par → input fire hota hai
// Tab dabane par → change fire hota hai
 
// 34.
// e.target      → jis element pe click hua
// e.currentTarget → jis element pe listener hai
// Example: parent pe listener, child pe click → e.target=child, e.currentTarget=parent
 
// 35.
// Same tab reload → milega
// Naya tab       → nahi milega
 
// 36.
// const ul = document.querySelector('ul');
// ul.addEventListener('click', e => {
//     if (e.target.tagName === 'LI') console.log(e.target.textContent);
// });
 
// 37.
// const p = document.querySelector('p');
// p.textContent = 'Hello World';
// p.style.backgroundColor = 'lightblue';
 
// 38.
// function virtualDOM(config) {
//     const el = document.createElement(config.tag);
//     if (config.props) {
//         for (const [k, v] of Object.entries(config.props)) el.setAttribute(k, v);
//     }
//     if (config.text) el.textContent = config.text;
//     (config.children || []).forEach(child => el.appendChild(virtualDOM(child)));
//     return el;
// }
 
// 39.
// document.querySelector('form').addEventListener('submit', e => {
//     e.preventDefault();
//     const name = document.querySelector('#name');
//     const email = document.querySelector('#email');
//     if (!name.value.trim()) document.querySelector('#nameErr').textContent = 'Name required';
//     if (!/^\S+@\S+\.\S+$/.test(email.value)) document.querySelector('#emailErr').textContent = 'Invalid email';
// });
 
// 40.
// let dragEl = null;
// document.querySelectorAll('li').forEach(li => {
//     li.setAttribute('draggable', true);
//     li.addEventListener('dragstart', () => dragEl = li);
//     li.addEventListener('dragover', e => e.preventDefault());
//     li.addEventListener('drop', () => {
//         if (dragEl !== li) li.before(dragEl);
//         const order = [...document.querySelectorAll('li')].map(i => i.textContent);
//         localStorage.setItem('order', JSON.stringify(order));
//     });
// });
 
// 41.
// class LocalStorage {
//     get(key) { try { return JSON.parse(localStorage.getItem(key)); } catch { return null; } }
//     set(key, val, ttlSeconds) {
//         const item = { val, exp: ttlSeconds ? Date.now() + ttlSeconds * 1000 : null };
//         localStorage.setItem(key, JSON.stringify(item));
//     }
//     remove(key) { localStorage.removeItem(key); }
//     clear() { localStorage.clear(); }
// }
 
// 42.
// let sCount = Number(sessionStorage.getItem('s') || 0);
// let lCount = Number(localStorage.getItem('l') || 0);
// document.getElementById('s-btn').onclick = () => {
//     sessionStorage.setItem('s', ++sCount);
//     document.getElementById('s-val').textContent = sCount;
// };
// document.getElementById('l-btn').onclick = () => {
//     localStorage.setItem('l', ++lCount);
//     document.getElementById('l-val').textContent = lCount;
// };
 
// 43.
// const observer = new MutationObserver(mutations => {
//     for (const m of mutations) {
//         for (const node of m.addedNodes) {
//             if (node.nodeType === 1 && node.hasAttribute('data-track'))
//                 console.log('Tracked:', node.outerHTML);
//         }
//     }
// });
// observer.observe(document.body, { childList: true, subtree: true });
// // cleanup:
// observer.disconnect();
 
// 44.
// const images = ['img1.jpg','img2.jpg','img3.jpg'];
// let current = 0;
// const preview = document.getElementById('preview');
// images.forEach((src, i) => {
//     const img = document.createElement('img');
//     img.src = src;
//     img.onclick = () => { current = i; preview.src = src; };
//     document.getElementById('thumbs').appendChild(img);
// });
// document.getElementById('prev').onclick = () => { current=(current-1+images.length)%images.length; preview.src=images[current]; };
// document.getElementById('next').onclick = () => { current=(current+1)%images.length; preview.src=images[current]; };
// document.addEventListener('keydown', e => {
//     if (e.key==='ArrowLeft') document.getElementById('prev').click();
//     if (e.key==='ArrowRight') document.getElementById('next').click();
// });
 
// 45.
// function createPubSub() {
//     const events = {};
//     return {
//         subscribe(event, fn) {
//             if (!events[event]) events[event] = [];
//             events[event].push(fn);
//         },
//         unsubscribe(event, fn) {
//             events[event] = (events[event] || []).filter(f => f !== fn);
//         },
//         publish(event, data) {
//             (events[event] || []).forEach(fn => fn(data));
//         }
//     };
// }
 
// 46.
// function getSiblings(el) {
//     return [...el.parentNode.children].filter(c => c !== el);
// }
// function getAncestors(el) {
//     const result = [];
//     let cur = el.parentElement;
//     while (cur) { result.push(cur); cur = cur.parentElement; }
//     return result;
// }
// function getAllDescendants(el) {
//     const result = [];
//     function walk(node) {
//         for (const child of node.children) { result.push(child); walk(child); }
//     }
//     walk(el);
//     return result;
// }
 
// 47.
// function debounce(fn, ms) {
//     let timer;
//     return function (...args) { clearTimeout(timer); timer = setTimeout(() => fn(...args), ms); };
// }
// function throttle(fn, ms) {
//     let last = 0;
//     return function (...args) {
//         const now = Date.now();
//         if (now - last >= ms) { last = now; fn(...args); }
//     };
// }
// window.addEventListener('resize', debounce(() => console.log('resized'), 300));
// window.addEventListener('mousemove', throttle(() => console.log('moved'), 100));
 
// 48.
// const shortcuts = {};
// function addShortcut(key, fn) { shortcuts[key] = fn; }
// function removeShortcut(key) { delete shortcuts[key]; }
// document.addEventListener('keydown', e => {
//     const key = `${e.ctrlKey ? 'Ctrl+' : ''}${e.key}`;
//     if (shortcuts[key]) { e.preventDefault(); shortcuts[key](); }
// });
// addShortcut('Ctrl+s', () => console.log('Saved!'));
// addShortcut('Ctrl+z', () => console.log('Undo!'));
// addShortcut('Escape', () => console.log('Cancelled'));
 
// 49.
// const observer = new IntersectionObserver((entries, obs) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             const img = entry.target;
//             img.src = img.dataset.src;
//             img.classList.remove('blur');
//             obs.unobserve(img);
//         }
//     });
// });
// document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));
 
// 50.
// const data = [{ name:'Vivek', age:21, city:'Panipat' }];
// const table = document.createElement('table');
// const thead = document.createElement('thead');
// const headerRow = document.createElement('tr');
// ['name','age','city'].forEach(h => {
//     const th = document.createElement('th');
//     th.textContent = h;
//     headerRow.appendChild(th);
// });
// thead.appendChild(headerRow);
// table.appendChild(thead);
// const tbody = document.createElement('tbody');
// data.forEach(row => {
//     const tr = document.createElement('tr');
//     Object.values(row).forEach(val => {
//         const td = document.createElement('td');
//         td.textContent = val;
//         tr.appendChild(td);
//     });
//     tbody.appendChild(tr);
// });
// table.appendChild(tbody);
// document.body.appendChild(table);
 
// 51.
// ES Module (.mjs ya type="module") mein valid
// Normal script mein → SyntaxError
 
// 52.
// SyntaxError
 
// 53.
// HTTP 500   HttpError: HTTP 500
 
// 54.
// ESM: static, hoisted, live binding
// CJS: runtime, synchronous, snapshot copy
// ESM imports pehle resolve hote hain, CJS inline run hota hai
 
// 55.
// true true false
 
// 56.
// hi alert(1)
 
// 57.
// parent capture → child capture → child bubble → parent bubble
 
// 58.
// cloneNode(true)  → node + saare children copy, event listeners nahi
// cloneNode(false) → sirf node, no children, event listeners nahi
 
// 59.
// Option A: 100 reflows
// Option B: 1 reflow — DocumentFragment memory mein rehta hai, ek baar DOM mein jaata hai
 
// 60.
// el.style.color = 'red'            → JS se dynamic ek style set karna
// el.setAttribute('style','color:red') → poora style attribute replace karna
// el.classList.add('text-red')      → best practice, CSS class toggle karna
 
// 61.
// class PipelineError extends Error {
//     constructor(step, original) {
//         super(`Step ${step} failed: ${original.message}`);
//         this.name = 'PipelineError'; this.step = step;
//     }
// }
// function pipe(...fns) {
//     return async function(input) {
//         let result = input;
//         for (let i = 0; i < fns.length; i++) {
//             try { result = await fns[i](result); }
//             catch (e) { throw new PipelineError(i, e); }
//         }
//         return result;
//     };
// }
 
// 62.
// async function tryCatch(fn, fallback) {
//     try { return await fn(); }
//     catch (e) { return typeof fallback === 'function' ? fallback(e) : fallback; }
// }
 
// 63.
// --- config.js ---
// let instance = null;
// function getConfig() {
//     if (!instance) instance = { env: 'dev', port: 3000 };
//     return instance;
// }
// module.exports = { getConfig };
// --- test ---
// const a = getConfig(), b = getConfig();
// console.log(a === b); // true
 
// 64.
// --- utils.js ---
// export const add = (a, b) => a + b;
// export default function main() {}
// --- import ---
// import main, { add } from './utils.js';
 
// 65.
// class KeyNotFoundError extends Error {
//     constructor(key) { super(`Key not found: ${key}`); this.name = 'KeyNotFoundError'; }
// }
// class SafeMap {
//     constructor() { this._map = new Map(); }
//     get(key, def = undefined) { return this._map.has(key) ? this._map.get(key) : def; }
//     getOrThrow(key) {
//         if (!this._map.has(key)) throw new KeyNotFoundError(key);
//         return this._map.get(key);
//     }
//     has(key) { return this._map.has(key); }
//     set(key, val) { this._map.set(key, val); return this; }
//     delete(key) { return this._map.delete(key); }
// }
 
// 66.
// document.querySelectorAll('.accordion-header').forEach(h => {
//     h.addEventListener('click', () => {
//         document.querySelectorAll('.accordion-body').forEach(b => {
//             b.style.maxHeight = b === h.nextElementSibling && !b.style.maxHeight
//                 ? b.scrollHeight + 'px' : null;
//         });
//     });
// });
 
// 67.
// class Modal {
//     constructor({ title, content, onClose }) {
//         this.onClose = onClose;
//         this.el = document.createElement('div');
//         this.el.className = 'modal-backdrop';
//         this.el.innerHTML = `<div class="modal"><h2>${title}</h2><p>${content}</p><button class="close-btn">X</button></div>`;
//         document.body.appendChild(this.el);
//         this.el.querySelector('.close-btn').addEventListener('click', () => this.close());
//         this.el.addEventListener('click', e => { if (e.target === this.el) this.close(); });
//         this._key = e => { if (e.key === 'Escape') this.close(); };
//         document.addEventListener('keydown', this._key);
//     }
//     close() { this.el.remove(); document.removeEventListener('keydown', this._key); if (this.onClose) this.onClose(); }
// }
 
// 68.
// let page = 1;
// const io = new IntersectionObserver(async ([entry]) => {
//     if (!entry.isIntersecting) return;
//     document.getElementById('spinner').style.display = 'block';
//     const data = await fetch(`/api/items?page=${page++}`).then(r => r.json());
//     data.forEach(item => {
//         const div = document.createElement('div');
//         div.textContent = item.name;
//         document.getElementById('list').appendChild(div);
//     });
//     document.getElementById('spinner').style.display = 'none';
// }, { rootMargin: '150px' });
// io.observe(document.getElementById('sentinel'));
 
// 69.
// class Router {
//     constructor() { this._routes = {}; window.addEventListener('popstate', () => this._handle()); }
//     on(path, handler) { this._routes[path] = handler; }
//     navigate(path) { history.pushState(null, '', path); this._handle(); }
//     back() { history.back(); }
//     _handle() {
//         const path = location.pathname;
//         for (const route of Object.keys(this._routes)) {
//             const regex = new RegExp('^' + route.replace(/:\w+/g, '([^/]+)') + '$');
//             const match = path.match(regex);
//             if (match) {
//                 const keys = (route.match(/:\w+/g) || []).map(k => k.slice(1));
//                 const params = Object.fromEntries(keys.map((k, i) => [k, match[i+1]]));
//                 this._routes[route](params);
//                 return;
//             }
//         }
//     }
// }
 
// 70.
// function diff(oldV, newV, parent, index = 0) {
//     if (!oldV) { parent.appendChild(create(newV)); return; }
//     if (!newV) { parent.removeChild(parent.childNodes[index]); return; }
//     if (typeof newV === 'string') {
//         if (oldV !== newV) parent.childNodes[index].textContent = newV;
//         return;
//     }
//     if (oldV.tag !== newV.tag) { parent.replaceChild(create(newV), parent.childNodes[index]); return; }
//     const el = parent.childNodes[index];
//     const max = Math.max((oldV.children||[]).length, (newV.children||[]).length);
//     for (let i = 0; i < max; i++) diff((oldV.children||[])[i], (newV.children||[])[i], el, i);
// }
// function create(v) {
//     if (typeof v === 'string') return document.createTextNode(v);
//     const el = document.createElement(v.tag);
//     (v.children || []).forEach(c => el.appendChild(create(c)));
//     return el;
// }
 
// 71.
// class Result {
//     constructor(ok, value, error) { this._ok = ok; this._value = value; this._error = error; }
//     static ok(value) { return new Result(true, value, null); }
//     static err(error) { return new Result(false, null, error); }
//     isOk() { return this._ok; }
//     map(fn) { return this._ok ? Result.ok(fn(this._value)) : this; }
//     flatMap(fn) { return this._ok ? fn(this._value) : this; }
//     getOrElse(def) { return this._ok ? this._value : def; }
// }
 
// 72.
// Problem: a.js imports b.js, b.js imports a.js → circular
// a.js dekhta hai b.js ka partial export (undefined ho sakta hai)
// Fix: shared logic ko c.js mein nikalo, a aur b dono c se import karein
 
// 73.
// caught: sync
 
// 74.
// after click
 
// 75.
// const toast = (() => {
//     const container = document.createElement('div');
//     document.body.appendChild(container);
//     const colors = { success:'#4caf50', error:'#f44336', warning:'#ff9800' };
//     return {
//         show(msg, type = 'success', ms = 3000) {
//             const t = document.createElement('div');
//             t.style.background = colors[type];
//             t.textContent = msg;
//             const btn = document.createElement('button');
//             btn.textContent = 'x';
//             btn.onclick = () => t.remove();
//             t.appendChild(btn);
//             container.appendChild(t);
//             setTimeout(() => t.remove(), ms);
//         }
//     };
// })();
 
// 76.
// function analyzeCode(code) {
//     const tryCatch = (code.match(/try\s*{/g) || []).length;
//     const imports = (code.match(/^\s*import\s+/gm) || []).length;
//     const exports = (code.match(/^\s*export\s+/gm) || []).length;
//     console.log({ tryCatch, imports, exports });
// }
 
// 77.
// window.onerror = (message, src, line, col, error) => {
//     addToList({ type:'error', message, stack: error?.stack, timestamp: new Date().toISOString() });
// };
// window.addEventListener('unhandledrejection', e => {
//     addToList({ type:'unhandledrejection', message: e.reason?.message || e.reason, timestamp: new Date().toISOString() });
// });
// function addToList(entry) {
//     const li = document.createElement('li');
//     li.textContent = JSON.stringify(entry);
//     document.getElementById('error-list').appendChild(li);
// }
// document.getElementById('clear').onclick = () => { document.getElementById('error-list').innerHTML = ''; };
 
// 78.
// let todos = JSON.parse(localStorage.getItem('todos') || '[]');
// function save() { localStorage.setItem('todos', JSON.stringify(todos)); }
// function render(filter = 'all') {
//     const list = document.getElementById('list');
//     list.innerHTML = '';
//     todos.filter(t => filter === 'all' || (filter === 'done' ? t.done : !t.done))
//         .forEach((t, i) => {
//             const li = document.createElement('li');
//             li.innerHTML = `
//                 <span contenteditable="true" onblur="todos[${i}].text=this.textContent;save()">${t.text}</span>
//                 <input type="checkbox" ${t.done?'checked':''} onchange="todos[${i}].done=!todos[${i}].done;save();render()">
//                 <button onclick="todos.splice(${i},1);save();render()">Delete</button>`;
//             list.appendChild(li);
//         });
// }
// document.getElementById('add').onclick = () => {
//     const val = document.getElementById('input').value.trim();
//     if (val) { todos.push({ text:val, done:false }); save(); render(); }
// };
// render();
 
// 79.
// const panel = document.createElement('div');
// panel.style.cssText = 'position:fixed;top:10px;right:10px;background:#222;color:#fff;padding:10px;z-index:9999;pointer-events:none';
// document.body.appendChild(panel);
// let lastEl = null;
// document.addEventListener('mouseover', e => {
//     if (lastEl) lastEl.style.outline = '';
//     lastEl = e.target;
//     lastEl.style.outline = '2px solid red';
//     panel.innerHTML = `Tag: ${e.target.tagName}<br>ID: ${e.target.id||'-'}<br>Class: ${e.target.className||'-'}<br>Length: ${e.target.innerHTML.length}`;
// });
 
// 80.
// class PluginManager {
//     constructor() { this._plugins = {}; }
//     register(name, module) { this._plugins[name] = module; }
//     run(name, ...args) {
//         if (!this._plugins[name]) throw new Error(`Plugin not found: ${name}`);
//         return this._plugins[name](...args);
//     }
//     unregister(name) { delete this._plugins[name]; }
// }
 
// 81.
// class CustomEventTarget {
//     constructor() { this._listeners = {}; }
//     addEventListener(type, fn) {
//         if (!this._listeners[type]) this._listeners[type] = [];
//         this._listeners[type].push(fn);
//     }
//     removeEventListener(type, fn) {
//         this._listeners[type] = (this._listeners[type] || []).filter(f => f !== fn);
//     }
//     dispatchEvent(event) {
//         (this._listeners[event.type] || []).forEach(fn => fn(event));
//     }
// }
 
// 82.
// function debounce(fn, ms) {
//     let t; return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
// }
// const input = document.getElementById('search');
// const items = [...document.querySelectorAll('#list li')];
// input.addEventListener('input', debounce(e => {
//     const q = e.target.value.toLowerCase();
//     items.forEach(li => {
//         const text = li.dataset.text;
//         if (!text.toLowerCase().includes(q)) { li.style.display = 'none'; return; }
//         li.style.display = '';
//         li.innerHTML = text.replace(new RegExp(`(${q})`, 'gi'), '<mark>$1</mark>');
//     });
// }, 300));
 
// 83.
// function withErrorLogging(fn) {
//     return function (...args) {
//         try { return fn(...args); }
//         catch (e) {
//             console.log({ fnName: fn.name, args, error: e.message, timestamp: new Date().toISOString() });
//             throw e;
//         }
//     };
// }
 
// 84.
// (kuch nahi print hoga)
 
// 85.
// range caught
 
// 86.
// class SortableTable {
//     constructor(container, data) {
//         this.container = container; this.data = data; this.col = null; this.dir = 1; this.render();
//     }
//     render() {
//         const cols = Object.keys(this.data[0]);
//         const sorted = [...this.data].sort((a,b) => this.col ? (a[this.col]>b[this.col]?this.dir:-this.dir) : 0);
//         this.container.innerHTML = `<table>
//             <thead><tr>${cols.map(c=>`<th data-col="${c}">${c}${this.col===c?(this.dir===1?' ↑':' ↓'):''}</th>`).join('')}</tr></thead>
//             <tbody>${sorted.map(r=>`<tr>${cols.map(c=>`<td>${r[c]}</td>`).join('')}</tr>`).join('')}</tbody>
//         </table>`;
//         this.container.querySelectorAll('th').forEach(th => {
//             th.style.cursor = 'pointer';
//             th.addEventListener('click', () => {
//                 this.dir = this.col === th.dataset.col ? -this.dir : 1;
//                 this.col = th.dataset.col;
//                 this.render();
//             });
//         });
//     }
// }
 
// 87.
// document.getElementById('copy-btn').addEventListener('click', async () => {
//     const text = document.getElementById('copy-text').textContent;
//     try {
//         await navigator.clipboard.writeText(text);
//     } catch {
//         const ta = document.createElement('textarea');
//         ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
//     }
//     const btn = document.getElementById('copy-btn');
//     btn.textContent = 'Copied!';
//     setTimeout(() => btn.textContent = 'Copy to clipboard', 2000);
// });
 
// 88.
// class AsyncQueue {
//     constructor() { this._queue = []; this._running = false; this.errors = []; }
//     add(asyncFn) { this._queue.push(asyncFn); if (!this._running) this._run(); }
//     async _run() {
//         this._running = true;
//         while (this._queue.length > 0) {
//             try { await this._queue.shift()(); }
//             catch (e) { this.errors.push(e); }
//         }
//         this._running = false;
//     }
// }
 
// 89.
// Custom: msg
 
// 90.
// function debounce(fn, ms) { let t; return (...a) => { clearTimeout(t); t = setTimeout(()=>fn(...a), ms); }; }
// const inputs = document.querySelectorAll('form input, form textarea');
// inputs.forEach(input => {
//     const saved = localStorage.getItem('draft_' + input.name);
//     if (saved) input.value = saved;
// });
// const autoSave = debounce(() => {
//     inputs.forEach(i => localStorage.setItem('draft_' + i.name, i.value));
//     document.getElementById('status').textContent = 'Draft saved at ' + new Date().toLocaleTimeString();
// }, 1000);
// inputs.forEach(i => i.addEventListener('input', autoSave));
 
// 91.
// c loaded
// b loaded
// a loaded
// Dependency graph: a → b → c
 
// 92.
// let slide = Number(localStorage.getItem('slide') || 0);
// const slides = document.querySelectorAll('.slide');
// const dots = document.querySelectorAll('.dot');
// function showSlide(n) {
//     slides.forEach((s, i) => s.style.display = i === n ? 'block' : 'none');
//     dots.forEach((d, i) => d.classList.toggle('active', i === n));
//     localStorage.setItem('slide', n);
// }
// setInterval(() => { slide = (slide+1) % slides.length; showSlide(slide); }, 3000);
// document.getElementById('prev').onclick = () => { slide=(slide-1+slides.length)%slides.length; showSlide(slide); };
// document.getElementById('next').onclick = () => { slide=(slide+1)%slides.length; showSlide(slide); };
// document.addEventListener('keydown', e => {
//     if (e.key==='ArrowLeft') document.getElementById('prev').click();
//     if (e.key==='ArrowRight') document.getElementById('next').click();
// });
// dots.forEach((d, i) => d.onclick = () => { slide=i; showSlide(i); });
// showSlide(slide);
 
// 93.
// const ITEM_H = 40;
// const data = Array.from({ length: 10000 }, (_, i) => `Item ${i+1}`);
// const container = document.getElementById('vscroll');
// const inner = document.createElement('div');
// inner.style.cssText = `position:relative;height:${data.length * ITEM_H}px`;
// container.appendChild(inner);
// function render() {
//     const start = Math.floor(container.scrollTop / ITEM_H);
//     const count = Math.ceil(container.clientHeight / ITEM_H) + 2;
//     inner.innerHTML = '';
//     for (let i = start; i < Math.min(start+count, data.length); i++) {
//         const div = document.createElement('div');
//         div.style.cssText = `position:absolute;top:${i*ITEM_H}px;height:${ITEM_H}px;width:100%`;
//         div.textContent = data[i];
//         inner.appendChild(div);
//     }
// }
// container.addEventListener('scroll', render);
// render();
 
// 94.
// let count = 0;
// window.onerror = (msg) => {
//     count++;
//     document.getElementById('error-count').textContent = `Errors: ${count}`;
//     document.getElementById('error-msg').textContent = msg;
//     document.getElementById('error-panel').style.display = 'block';
// };
// document.getElementById('retry').onclick = () => {
//     document.getElementById('error-panel').style.display = 'none';
// };
 
// 95.
// const snapshots = [];
// setInterval(() => {
//     snapshots.push(document.body.outerHTML);
//     if (snapshots.length > 10) snapshots.shift();
// }, 5000);
// document.getElementById('undo').onclick = () => {
//     if (snapshots.length > 1) {
//         snapshots.pop();
//         document.open(); document.write(snapshots[snapshots.length-1]); document.close();
//     }
// };
 
// 96.
// class TypeMismatchError extends Error {
//     constructor(field, expected, actual) {
//         super(`'${field}': expected ${expected}, got ${actual}`);
//         this.name = 'TypeMismatchError';
//         this.field = field; this.expected = expected; this.actual = actual;
//     }
// }
// function typecheck(schema, data) {
//     for (const [field, type] of Object.entries(schema)) {
//         const val = data[field];
//         if (type.endsWith('[]')) {
//             const t = type.slice(0,-2);
//             if (!Array.isArray(val) || !val.every(v => typeof v === t))
//                 throw new TypeMismatchError(field, type, typeof val);
//         } else {
//             if (typeof val !== type) throw new TypeMismatchError(field, type, typeof val);
//         }
//     }
//     return true;
// }
 
// 97.
// const el = document.getElementById('box');
// const display = document.getElementById('dimensions');
// const ro = new ResizeObserver(entries => {
//     const { width, height } = entries[0].contentRect;
//     display.textContent = `${Math.round(width)} x ${Math.round(height)}px`;
// });
// ro.observe(el);
// const mo = new MutationObserver(() => { if (!document.contains(el)) ro.disconnect(); });
// mo.observe(document.body, { childList: true, subtree: true });
 
// 98.
// (empty string)
 
// 99.
// class Validator {
//     constructor() { this._rules = []; }
//     static string() { const v = new Validator(); v._type = 'string'; return v; }
//     minLength(n) { this._rules.push({ name:`minLength(${n})`, fn: v => v.length >= n }); return this; }
//     maxLength(n) { this._rules.push({ name:`maxLength(${n})`, fn: v => v.length <= n }); return this; }
//     matches(re) { this._rules.push({ name:`matches(${re})`, fn: v => re.test(v) }); return this; }
//     validate(value) {
//         if (this._type && typeof value !== this._type)
//             throw new Error(`Expected ${this._type}`);
//         for (const rule of this._rules) {
//             if (!rule.fn(value)) throw new Error(`Failed: ${rule.name}`);
//         }
//         return true;
//     }
// }
 
// 100. Final Boss — Vanilla JS Notes App
// 5 modules:
// storage.js   → get/set localStorage
// notes.js     → add, edit, delete, getAll
// tags.js      → getByTag, getAllTags
// search.js    → filterNotes, highlight, debounce
// app.js       → event delegation, error boundary, render
//
// --- storage.js ---
// export const get = key => JSON.parse(localStorage.getItem(key) || '[]');
// export const set = (key, val) => localStorage.setItem(key, JSON.stringify(val));
//
// --- notes.js ---
// import { get, set } from './storage.js';
// export const getAll = () => get('notes');
// export const add = note => { const notes = getAll(); notes.push(note); set('notes', notes); };
// export const remove = id => set('notes', getAll().filter(n => n.id !== id));
// export const update = (id, changes) => set('notes', getAll().map(n => n.id===id ? {...n,...changes} : n));
//
// --- tags.js ---
// export const getAllTags = notes => [...new Set(notes.flatMap(n => n.tags || []))];
// export const getByTag = (notes, tag) => notes.filter(n => (n.tags||[]).includes(tag));
//
// --- search.js ---
// export const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(()=>fn(...a), ms); }; };
// export const highlight = (text, q) => text.replace(new RegExp(`(${q})`, 'gi'), '<mark>$1</mark>');
// export const filter = (notes, q) => notes.filter(n => n.title.includes(q) || n.body.includes(q));
//
// --- app.js ---
// import { getAll, add, remove, update } from './notes.js';
// import { getAllTags, getByTag } from './tags.js';
// import { debounce, highlight, filter } from './search.js';
// window.onerror = msg => { document.getElementById('error').textContent = msg; };
// document.getElementById('list').addEventListener('click', e => {
//     if (e.target.matches('[data-delete]')) { remove(e.target.dataset.delete); render(); }
//     if (e.target.matches('[data-edit]')) openEditor(e.target.dataset.edit);
// });
// document.getElementById('search').addEventListener('input', debounce(e => {
//     render(filter(getAll(), e.target.value));
// }, 300));
// function render(notes = getAll()) {
//     document.getElementById('list').innerHTML = notes.map(n => `
//         <div><h3>${n.title}</h3><p>${n.body}</p>
//         <button data-delete="${n.id}">Delete</button>
//         <button data-edit="${n.id}">Edit</button></div>`).join('');
// }
// render();