import{j as o,a as e,L as l,u as m,b as g,r as u,c as p,R as _}from"./index.aa60ebbd.js";import{u as f,g as b}from"./api.dbf9d2e0.js";const q="_noquotes_123mr_1";var N={noquotes:q};const Q=()=>o("div",{className:N.noquotes,children:[e("p",{children:"No quotes found!"}),e(l,{className:"btn",to:"/new-quote",children:"Add a Quote"})]}),x="_item_1blpu_1",v="_btn_1blpu_15";var L={item:x,btn:v};const S=t=>o("li",{className:L.item,children:[o("figure",{children:[e("blockquote",{children:e("p",{children:t.text})}),e("figcaption",{children:t.author})]}),e(l,{className:"btn",to:`/quotes/${t.id}`,children:"View Fullscreen"})]}),y="_list_g1r3q_1",A="_sorting_g1r3q_7";var i={list:y,sorting:A};const F=(t,n)=>t.sort((s,r)=>n?s.id>r.id?1:-1:s.id<r.id?1:-1),R=t=>{const n=m(),s=g(),c=new URLSearchParams(s.search).get("sort")==="asc",d=F(t.quotes,c),h=()=>{n.push({pathname:s.pathname,search:`?sort=${c?"desc":"asc"}`})};return o(u.exports.Fragment,{children:[e("div",{className:i.sorting,children:o("button",{onClick:h,children:["Sort ",c?"Descending":"Ascending"]})}),e("ul",{className:i.list,children:d.map(a=>e(S,{id:a.id,author:a.author,text:a.text},a.id))})]})},k=()=>{const{sendRequest:t,status:n,data:s,error:r}=f(b,!0);return u.exports.useEffect(()=>{t()},[t]),n==="pending"?e("div",{className:"centered",children:e(p,{})}):r?e("p",{className:"centered focused",children:r}):n==="completed"&&(!s||s.length===0)?e(Q,{}):e(_.Fragment,{children:e(R,{quotes:s})})};export{k as default};
