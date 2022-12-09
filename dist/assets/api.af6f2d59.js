var m=Object.defineProperty;var d=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var i=(o,t,e)=>t in o?m(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,a=(o,t)=>{for(var e in t||(t={}))p.call(t,e)&&i(o,e,t[e]);if(d)for(var e of d(t))f.call(t,e)&&i(o,e,t[e]);return o};import{r as l}from"./index.693811f2.js";function h(o,t){return t.type==="SEND"?{data:null,error:null,status:"pending"}:t.type==="SUCCESS"?{data:t.responseData,error:null,status:"completed"}:t.type==="ERROR"?{data:null,error:t.errorMessage,status:"completed"}:o}function g(o,t=!1){const[e,s]=l.exports.useReducer(h,{status:t?"pending":null,data:null,error:null}),n=l.exports.useCallback(async function(c){s({type:"SEND"});try{const u=await o(c);s({type:"SUCCESS",responseData:u})}catch(u){s({type:"ERROR",errorMessage:u.message||"Something went wrong!"})}},[o]);return a({sendRequest:n},e)}const r="https://react-quotes-2ee2f-default-rtdb.asia-southeast1.firebasedatabase.app/";async function S(){const o=await fetch(`${r}/quotes.json`),t=await o.json();if(!o.ok)throw new Error(t.message||"Could not fetch quotes.");const e=[];for(const s in t){const n=a({id:s},t[s]);e.push(n)}return e}async function C(o){const t=await fetch(`${r}/quotes/${o}.json`),e=await t.json();if(!t.ok)throw new Error(e.message||"Could not fetch quote.");return a({id:o},e)}async function j(o){const t=await fetch(`${r}/quotes.json`,{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}),e=await t.json();if(!t.ok)throw new Error(e.message||"Could not create quote.");return null}async function E(o){const t=await fetch(`${r}/comments/${o.quoteId}.json`,{method:"POST",body:JSON.stringify(o.commentData),headers:{"Content-Type":"application/json"}}),e=await t.json();if(!t.ok)throw new Error(e.message||"Could not add comment.");return{commentData:e.name}}async function R(o){const t=await fetch(`${r}/comments/${o}.json`),e=await t.json();if(!t.ok)throw new Error(e.message||"Could not get comments.");const s=[];for(const n in e){const c=a({id:n},e[n]);s.push(c)}return s}export{j as a,E as b,R as c,C as d,S as g,g as u};
