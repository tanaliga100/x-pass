import{a as e,r as c,j as o,R as p,P as _,c as v,u as x}from"./index.693811f2.js";import{u as g,a as N}from"./api.af6f2d59.js";const F="_card_1kzig_1";var Q={card:F};const H=t=>e("div",{className:Q.card,children:t.children}),R="_validator_1c5wp_1";var b={validator:R};const A=()=>e("div",{className:b.Validator,children:e("p",{className:"centered",children:" Please Fill all the Fields"})}),w="_form_p4a23_1",y="_loading_p4a23_5",E="_control_p4a23_15",j="_actions_p4a23_43";var r={form:w,loading:y,control:E,actions:j};const I=t=>{const a=c.exports.useRef(),s=c.exports.useRef(),[d,n]=c.exports.useState(!1);function h(l){l.preventDefault();const i=a.current.value,u=s.current.value;return i&&u&&t.onAddQuote({author:i,text:u}),o("div",{children:[" ",e(A,{})]})}const m=()=>{n(!0)},f=()=>{n(!1)};return o(p.Fragment,{children:[e(_,{when:d,message:l=>"Are you sure you want to leave ?"}),e(H,{children:o("form",{onFocus:m,className:r.form,onSubmit:h,children:[t.isLoading&&e("div",{className:r.loading,children:e(v,{})}),o("div",{className:r.control,children:[e("label",{htmlFor:"author",children:"Author"}),e("input",{type:"text",id:"author",ref:a})]}),o("div",{className:r.control,children:[e("label",{htmlFor:"text",children:"Text"}),e("textarea",{id:"text",rows:"5",ref:s})]}),e("div",{className:r.actions,children:e("button",{onClick:f,className:"btn",children:"Add Quote"})})]})})]})},S=()=>{const{sendRequest:t,status:a}=g(N),s=x();return c.exports.useEffect(()=>{a==="completed"&&s.push("/quotes")},[a,s]),e(I,{isLoading:a==="pending",onAddQuote:n=>{t(n)}})};export{S as default};
