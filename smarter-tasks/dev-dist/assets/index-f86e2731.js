import{r,f as j,j as e,R as v,_ as w}from"./index-5b7e78c2.js";import{a as N}from"./actions-2a13c71f.js";import{u as F,_ as o}from"./dialog-a900aeca.js";import{t as n}from"./transition-ba2ea7d2.js";import{E as M}from"./ErrorBoundary-41c5a4a5.js";import"./constants-a400ef56.js";const E=()=>{const{formState:{errors:s},register:t,handleSubmit:u}=F(),[c,i]=r.useState(!1),[a,m]=r.useState(null),b=j(),p=()=>{i(!0)},l=()=>{i(!1)},f=async x=>{const{password:h,name:g,email:y}=x,d=await N(b,{name:g,email:y,password:h});d.ok?i(!1):m(d.error)};return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:p,id:"new-member-btn",className:" rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",children:"New Member"}),e.jsx(n,{appear:!0,show:c,as:r.Fragment,children:e.jsxs(o,{as:"div",className:"relative z-10",onClose:l,children:[e.jsx(n.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),e.jsx("div",{className:"fixed inset-0 overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:e.jsx(n.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(o.Panel,{className:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",children:[e.jsx(o.Title,{id:"new-member-btn",as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:"Add new Member"}),e.jsx("div",{className:"mt-2",children:e.jsxs("form",{onSubmit:u(f),children:[a&&e.jsx("span",{children:a}),e.jsx("input",{type:"text",id:"name",placeholder:"Enter user name...",autoFocus:!0,...t("name",{required:!0}),className:`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${s.name?"border-red-500":""}`}),s.name&&e.jsx("span",{children:"This field is required"}),e.jsx("input",{id:"email",type:"email",placeholder:"Enter user email...",autoFocus:!0,...t("email",{required:!0}),className:`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${s.email?"border-red-500":""}`}),s.email&&e.jsx("span",{children:"This field is required"}),e.jsx("input",{type:"text",id:"password",placeholder:"Enter user password...",autoFocus:!0,...t("password",{required:!0}),className:`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${s.password?"border-red-500":""}`}),s.password&&e.jsx("span",{children:"This field is required"}),e.jsx("button",{type:"submit",id:"create-member-btn",className:"inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",children:"Submit"}),e.jsx("button",{type:"submit",onClick:l,className:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",children:"Cancel"})]})})]})})})})]})})]})},_=v.lazy(()=>w(()=>import("./MemberList-23b208d8.js"),["assets/MemberList-23b208d8.js","assets/index-5b7e78c2.js","assets/index-37c2939a.css","assets/actions-2a13c71f.js","assets/constants-a400ef56.js"])),L=()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h2",{className:"text-2xl font-medium tracking-tight",children:"Members"}),e.jsx(E,{})]}),e.jsx(M,{children:e.jsx(r.Suspense,{fallback:e.jsx("div",{className:"suspense-loading",children:"Loading..."}),children:e.jsx(_,{})})})]});export{L as default};
