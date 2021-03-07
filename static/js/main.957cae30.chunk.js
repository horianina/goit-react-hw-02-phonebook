(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{28:function(t,e,n){"use strict";n.r(e);var a,c,i,r,o,s,l=n(0),u=n(14),d=n.n(u),b=n(18),m=n(4),h=n(6),j=n(7),f=n(9),p=n(8),x=n(2),O=n(3),v=n(1),g=O.a.li(a||(a=Object(x.a)(["\n  padding-bottom: 10px;\n"]))),C=O.a.button(c||(c=Object(x.a)(["\n  border-style: solid;\n  border-width: 1px;\n  padding: 1px 7px 2px;\n  text-rendering: auto;\n  color: initial;\n  display: inline-block;\n  text-align: start;\n  margin: 5px;\n  border-radius: 5px;\n  &:hover {\n    background: #4a6dbb;\n  }\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 4px #cbd6ee;\n  }\n"]))),y=function(t){var e=t.contacts,n=t.onRemoveContact;return Object(v.jsx)("ul",{className:"list",children:e.map((function(t){return Object(v.jsxs)(g,{className:"item",children:[t.name+": "+t.number,Object(v.jsx)(C,{className:"button",type:"button",name:"delete",onClick:function(){return n(t.id)},children:"delete"})]},t.id)}))})},w=n(5),S=O.a.form(i||(i=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),k=O.a.label(r||(r=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n  width: 200px;\n"]))),A=O.a.button(o||(o=Object(x.a)(["\n  width: 100px;\n"]))),F=function(t){Object(f.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(w.a)({},a,c))},t.handleNameChange=function(e){t.setState({name:e.currentTarget.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(Object(m.a)({},t.state)),t.setState({name:"",number:""})},t}return Object(j.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(v.jsxs)(S,{onSubmit:this.handleSubmit,children:[Object(v.jsxs)(k,{children:["Name",Object(v.jsx)("input",{type:"text",name:"name",value:e,onChange:this.handleChange})]}),Object(v.jsxs)(k,{children:["Number",Object(v.jsx)("input",{type:"text",name:"number",value:n,onChange:this.handleChange})]}),Object(v.jsx)(A,{type:"submit",children:"Add contact"})]})}}]),n}(l.Component),N=n(30),R=O.a.div(s||(s=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n"])));function E(t){var e=t.value,n=t.onChangeFilter;return Object(v.jsxs)(R,{children:["Find contacts by name",Object(v.jsx)("input",{type:"text",value:e,onChange:function(t){return n(t.target.value)}})]})}var J=function(t){Object(f.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){if(t.state.contacts.map((function(t){return t.name})).includes(e.name))alert("".concat(e.name," is already in contacts"));else if(0===e.name.length)alert("Fields must be filled!");else{var n=Object(m.a)(Object(m.a)({},e),{},{id:Object(N.a)()});t.setState((function(t){return{contacts:[].concat(Object(b.a)(t.contacts),[n])}}))}},t.changeFilter=function(e){t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(j.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Phonebook"}),Object(v.jsx)(F,{onAddContact:this.addContact}),Object(v.jsx)("h2",{children:"Contacts"}),e.length>1&&Object(v.jsx)(E,{value:t,onChangeFilter:this.changeFilter}),e.length>0&&Object(v.jsx)(y,{contacts:e,onRemoveContact:this.removeContact})]})}}]),n}(l.Component);d.a.render(Object(v.jsx)(J,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.957cae30.chunk.js.map