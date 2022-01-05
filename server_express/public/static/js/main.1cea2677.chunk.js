(this["webpackJsonptodolist-react-app"]=this["webpackJsonptodolist-react-app"]||[]).push([[0],{23:function(e,t,n){e.exports=n(56)},34:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(8),r=n.n(c),l=n(4),i=n(9),u=n(21),s=n(22),d=(n(34),n(2)),h=n(3),p=n(6),f=n(5),m=n(7),v=n.n(m),O="http://localhost:4500/api/todos",E=(n(53),function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={todo:""},e.handleChange=function(t){e.setState({todo:t.target.value})},e.handleCreate=function(){var t=e.state.todo;e.props.addTodo({text:t,checked:!1}),e.setState({todo:""})},e.handleKeyPress=function(t){"Enter"===t.key&&e.handleCreate()},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state.todo,t=this.handleChange,n=this.handleKeyPress,a=this.handleCreate;return o.a.createElement("div",{className:"form"},o.a.createElement("input",{value:e,onChange:t,onKeyPress:n}),o.a.createElement("div",{className:"create-button",onClick:a},"\ucd94\uac00"))}}]),n}(a.Component)),b=Object(l.b)(null,{addTodo:function(e){return function(t){v.a.post(O,e).then((function(e){t({type:"ADD_TODO",payload:e.data})})).catch((function(e){throw console.error(e),e}))}}})(E),y=(n(54),function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).handleRemove=function(t){e.props.removeTodo(t)},e.handleToggle=function(t){e.props.toggleTodo(t)},e}return Object(h.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.checked!==e.checked}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.checked,a=e.id,c=this.handleRemove,r=this.handleToggle;return o.a.createElement("div",{className:"todo-item",onClick:function(){var e={id:a,text:t,checked:n};e.checked=!e.checked,r(e)}},o.a.createElement("div",{className:"remove",onClick:function(e){e.stopPropagation(),c(a)}},"\xd7"),o.a.createElement("div",{className:"todo-text ".concat(n&&"checked")},o.a.createElement("div",null,t)),n&&o.a.createElement("div",{className:"check-mark"},"\u2713"))}}]),n}(a.Component)),g=Object(l.b)(null,{removeTodo:function(e){return function(t){v.a.delete("".concat(O,"/").concat(e)).then((function(e){t({type:"REMOVE_TODO",payload:e.data})})).catch((function(e){throw console.log(e),e}))}},toggleTodo:function(e){return function(t){v.a.put("".concat(O,"/").concat(e.id),e).then((function(e){t({type:"TOGGLE_TODO",payload:e.data})})).catch((function(e){throw console.log(e),e}))}}})(y),k=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchTodos()}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.todos!==e.todos}},{key:"render",value:function(){var e=this.props.todos.map((function(e){var t=e.id,n=e.text,a=e.checked;return o.a.createElement(g,{id:t,text:n,checked:a,key:t})}));return o.a.createElement("div",null,e)}}]),n}(a.Component),T=Object(l.b)((function(e){return{todos:e.todos}}),{fetchTodos:function(){return function(e){v.a.get(O).then((function(t){e({type:"FETCH_TODOS",payload:t.data})})).catch((function(e){throw console.error(e),e}))}}})(k),j=(n(55),function(e){var t=e.form,n=e.children;return o.a.createElement("main",{className:"todo-list-template"},o.a.createElement("div",{className:"title"},"\uc624\ub298\uc758 \ud560 \uc77c (","\uc6b4\uc601\ubaa8\ub4dc",")"),o.a.createElement("section",{className:"form-wrapper"},t),o.a.createElement("section",{className:"todos-wrapper"},n))}),C=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(j,{form:o.a.createElement(b,null)},o.a.createElement("div",null,o.a.createElement(T,null))))}}]),n}(a.Component),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),c(e),r(e)}))},w={todos:[{id:0,text:"",checked:!1}]},N=Object(i.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_TODO":case"REMOVE_TODO":case"ADD_TODO":case"FETCH_TODOS":return Object.assign({},e,{todos:t.payload});default:return e}}),Object(s.composeWithDevTools)(Object(i.applyMiddleware)(u.a)));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.a,{store:N},o.a.createElement(C,null))),document.getElementById("root")),D()}},[[23,1,2]]]);
//# sourceMappingURL=main.1cea2677.chunk.js.map