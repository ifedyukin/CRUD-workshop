webpackJsonp([0],{15:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Post=void 0;var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),a=n(4),i=n(31);n(88);t.Post=function(e){var t=(e.id,e.title),n=e.createdAt,r=e.url,l=e.body,u=(e.type,e.full),s=void 0!==u&&u;return o.default.createElement("div",{className:"post"},s?o.default.createElement("h2",{className:"post-title"},t):o.default.createElement(a.Link,{to:""+r},o.default.createElement("h2",{className:"post-title"},t)),o.default.createElement("span",{className:"post-date"},(0,i.convertDate)(n)),o.default.createElement("div",{className:"post-text",dangerouslySetInnerHTML:{__html:l}}))}},16:function(e,t,n){t=e.exports=n(17)(!1),t.push([e.i,".post{padding:25px}.post-date{color:gray;font-size:14px}.post-title{color:#000;text-decoration:underline}.post-text img{max-width:80%;max-height:500px;margin-left:10%}",""])},20:function(e,t,n){t=e.exports=n(17)(!1),t.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i,900,900i|Ubuntu:300,300i,400,400i,500,500i,700,700i&subset=cyrillic);",""]),t.push([e.i,"body{margin:0;padding:0;font-family:Ubuntu,sans-serif;background:#fff}h2{-webkit-margin-before:0;-webkit-margin-after:0}section{width:100%;max-width:1000px;margin:0 auto}header{display:flex;justify-content:space-between;border-bottom:1px solid #000;padding:25px}.title{font-weight:700;font-size:25px;font-family:Playfair Display,serif}.title a{color:#000;text-decoration:none}.subtitle{color:gray}.main{padding-top:25px}.main img{width:100%}.login-container{width:400px;margin:50px auto}.login-error{color:red}.login-form input{width:75%;text-align:center;margin:5px auto;display:block;padding:5px}.panel-container{width:600px;margin:auto}.panel-container__post{display:flex;border-bottom:1px dashed grey}.panel-container__post .post{width:80%}.panel-container__buttons{display:flex;flex-direction:column;justify-content:center}.panel-container__buttons a{color:#000;text-decoration:underline;cursor:pointer}.post-edit{display:flex;justify-content:center}.post-edit label{display:flex;justify-content:space-between;margin:7px 0}.post-edit input[type=submit]{float:right;margin-top:7px;background:#fff;border-radius:0;color:#000;cursor:pointer}.post-edit__title{width:409px;margin:7px 0}.post-edit__title input{width:350px}.post-edit__url{width:412px;margin:7px 0}.post-edit__url input{width:350px}.post-edit__preview{display:block;float:right;margin:0!important}.post-edit__preview input{margin-left:5px}.post-edit__previewBlock{width:820px;border:1px dashed grey;padding:0}.panel-container__newPost{margin-top:20px;display:block;position:fixed;left:72px;padding:7px;border:1px dashed grey;text-decoration:none;color:#000}@media screen and (max-width:660px){.header-links,.header-links a,header{display:block}.main{padding-top:0}}",""])},31:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.convertDate=function(e){var t=new Date(e);return t.getDate()+"-"+(t.getMonth()+1)+"-"+t.getFullYear()},t.sortByDate=function(e){return e.sort(function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)})}},32:function(e,t,n){n(33),n(36),e.exports=n(46)},46:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),a=r(o),i=n(48),l=r(i),u=n(56),s=n(4);n(95),n(96),l.default.render(a.default.createElement(s.BrowserRouter,null,a.default.createElement(u.App,null)),document.getElementById("root"))},56:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=r(s),f=n(7),p=r(f),d=n(4),h=n(86),m=n(87),b=n(90),y=n(91),v=n(92),g=n(94),_=n(31),w=new p.default;t.App=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.updatePosts=function(){fetch("http://localhost:3030/api/posts").then(function(e){return e.json()}).then(function(t){return e.setState({posts:t})})},e.onLogin=function(){return e.forceUpdate()},e.state={title:"React blog",subtitle:"My personal blog",img:"/images/image.jpg",posts:[]},e}return i(t,e),u(t,[{key:"componentDidMount",value:function(){this.updatePosts()}},{key:"render",value:function(){var e=this,t=this.state,n=t.title,r=t.subtitle,o=t.img,a=t.posts,i=w.get("token");return c.default.createElement("section",null,c.default.createElement(h.Header,{title:n,subtitle:r}),c.default.createElement(d.Switch,null,c.default.createElement(d.Route,{exact:!0,path:"/",render:function(){return c.default.createElement(v.MainPage,{posts:(0,_.sortByDate)(a),img:o})}}),c.default.createElement(d.Route,{exact:!0,path:"/admin",render:i?function(){return c.default.createElement(b.Panel,{update:e.updatePosts})}:function(){return c.default.createElement(y.Login,{onLogin:e.onLogin})}}),c.default.createElement(d.Route,{exact:!0,path:"/edit",render:i?function(t){return c.default.createElement(g.Edit,l({},t,{update:e.updatePosts}))}:function(){return c.default.createElement(y.Login,{onLogin:e.onLogin})}}),c.default.createElement(d.Route,{path:"/edit/:url",render:i?function(t){return c.default.createElement(g.Edit,l({},t,{update:e.updatePosts}))}:function(){return c.default.createElement(y.Login,{onLogin:e.onLogin})}}),c.default.createElement(d.Route,{path:"/:url",render:function(e){return c.default.createElement(m.PostPage,e)}}),c.default.createElement(d.Route,{path:"*",render:function(){return c.default.createElement(v.MainPage,{posts:(0,_.sortByDate)(a),img:o})}})))}}]),t}(c.default.Component)},86:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),a=n(4);t.Header=function(e){var t=e.title,n=e.subtitle;return o.default.createElement("header",null,o.default.createElement("div",{className:"header-titles"},t?o.default.createElement("div",{className:"title"},o.default.createElement(a.Link,{to:"/"},t)):null,n?o.default.createElement("div",{className:"subtitle"},n):null))}},87:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.PostPage=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(u),c=n(15);t.PostPage=function(e){function t(){var e,n,a,i;r(this,t);for(var l=arguments.length,u=Array(l),s=0;s<l;s++)u[s]=arguments[s];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.state={},i=n,o(a,i)}return a(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.url;fetch("http://localhost:3030/api/posts/"+t).then(function(t){if(404!==t.status)return t.json();e.setState({error:404})}).then(function(t){return e.setState(function(){return t||null})})}},{key:"render",value:function(){return this.state.error?s.default.createElement("p",null,"404"):s.default.createElement(c.Post,i({full:!0},this.state))}}]),t}(s.default.Component)},88:function(e,t,n){var r=n(16);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0};o.transform=void 0;var a=n(18)(r,o);r.locals&&(e.exports=r.locals),r.locals||e.hot.accept(16,function(){var t=n(16);"string"==typeof t&&(t=[[e.i,t,""]]),a(t)}),e.hot.dispose(function(){a()})},90:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Panel=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=r(u),c=n(15),f=n(7),p=r(f),d=n(4),h=new p.default;t.Panel=function(e){function t(){var e,n,r,i;o(this,t);for(var l=arguments.length,u=Array(l),s=0;s<l;s++)u[s]=arguments[s];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.state={posts:[]},i=n,a(r,i)}return i(t,e),l(t,[{key:"componentDidMount",value:function(){this.loadPosts()}},{key:"loadPosts",value:function(){var e=this;fetch("http://localhost:3030/api/posts").then(function(e){return e.json()}).then(function(t){return e.setState({posts:t})})}},{key:"onDelete",value:function(e){var t=this;fetch("http://localhost:3030/api/posts/"+e,{method:"DELETE",headers:{Authorization:h.get("token")}}).then(function(){t.loadPosts()}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this,t=this.state.posts;return s.default.createElement("div",{className:"panel-container"},s.default.createElement(d.Link,{to:"/edit",className:"panel-container__newPost"},"New post"),t.map(function(t){return s.default.createElement("div",{key:t._id,className:"panel-container__post"},s.default.createElement(c.Post,t),s.default.createElement("div",{className:"panel-container__buttons"},s.default.createElement(d.Link,{to:"/edit/"+t.url},"Edit"),s.default.createElement("a",{onClick:function(){return e.onDelete(t._id)}},"Delete")))}))}}]),t}(s.default.Component)},91:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Login=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=r(s),f=n(7),p=r(f),d=new p.default;t.Login=function(e){function t(){a(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.onSubmit=function(t){t.preventDefault();var n=e.state,r=n.login,o=n.password;fetch("http://localhost:3030/api/signin",{headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",body:"login="+r+"&password="+o}).then(function(e){return e.json()}).then(function(t){"string"==typeof t&&(d.set("token",t,{path:"/"}),e.props.onLogin())}).catch(function(){return e.setState({error:!0})})},e.onChange=function(t,n){e.setState(o({},t,n.target.value))},e.state={login:"",password:"",error:!1},e}return l(t,e),u(t,[{key:"render",value:function(){var e=this.state,t=e.login,n=e.password,r=e.error;return c.default.createElement("div",{className:"login-container"},c.default.createElement("form",{onSubmit:this.onSubmit,className:"login-form"},r?c.default.createElement("span",{className:"login-error"},"Incorrect login/password!"):null,c.default.createElement("input",{type:"text",placeholder:"Login",value:t,onChange:this.onChange.bind(null,"login")}),c.default.createElement("input",{type:"password",placeholder:"Password",value:n,onChange:this.onChange.bind(null,"password")}),c.default.createElement("input",{type:"submit",value:"Log In"})))}}]),t}(c.default.Component)},92:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MainPage=void 0;var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),a=n(93);t.MainPage=function(e){var t=e.img,n=e.posts;return o.default.createElement("div",{className:"main"},o.default.createElement("img",{src:t,alt:"logo"}),o.default.createElement(a.PostsList,{posts:n}))}},93:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PostsList=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(o),i=n(15);t.PostsList=function(e){return e.posts.map(function(e){return a.default.createElement(i.Post,r({key:e._id},e))})}},94:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Edit=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=r(s),f=n(7),p=r(f),d=n(4),h=new p.default;t.Edit=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.onTogglePreview=function(t){var n=t.target,r=n.checked;e.setState({isPreview:r})},e.getPreview=function(){return{__html:e.state.body}},e.state={_id:"",title:"",body:"",url:"",published:!1,isPreview:!1},e.onPublish=e.onPublish.bind(e),e}return i(t,e),u(t,[{key:"fetchPostData",value:function(e){var t=this;fetch("http://localhost:3030/api/posts/"+e.toString()).then(function(e){if(404!==e.status)return e.json();window.location.assign("/")}).then(function(e){return t.setState(l({},e))}).catch(function(){return t.setState({error:404})})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.url;e&&this.fetchPostData(e)}},{key:"createPost",value:function(){var e=this;fetch("http://localhost:3030/api/posts",{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:h.get("token")},method:"POST",body:"title="+this.state.title+"&body="+this.state.body+"&url="+this.state.url}).then(function(e){return e.json()}).then(function(t){e.props.update(),e.setState({published:!0})})}},{key:"updatePost",value:function(){var e=this;fetch("http://localhost:3030/api/posts/"+this.state._id,{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:h.get("token")},method:"PATCH",body:"title="+this.state.title+"&body="+this.state.body+"&url="+this.state.url}).then(function(e){return e.json()}).then(function(t){e.props.update(),e.setState({published:!0})})}},{key:"onPublish",value:function(e){e.preventDefault(),this.props.match.params.url?this.updatePost():this.createPost()}},{key:"render",value:function(){var e=this;return c.default.createElement("div",{className:"post-edit"},this.state.published?c.default.createElement(d.Redirect,{to:"/"+this.state.url,push:!0}):null,c.default.createElement("form",{onSubmit:this.onPublish},c.default.createElement("input",{type:"submit",value:"Publish"}),c.default.createElement("label",{className:"post-edit__title"},"Title: ",c.default.createElement("input",{onChange:function(t){var n=t.target;return e.setState({title:n.value})},value:this.state.title,type:"text",required:!0}),c.default.createElement("br",null)),c.default.createElement("label",{className:"post-edit__preview"},"Preview: ",c.default.createElement("input",{type:"checkbox",onChange:this.onTogglePreview,checked:this.state.isPreview})),c.default.createElement("label",{className:"post-edit__url"},"URL: ",c.default.createElement("input",{onChange:function(t){var n=t.target;return e.setState({url:n.value})},value:this.state.url,type:"text",required:!0}),c.default.createElement("br",null)),c.default.createElement("label",null,"Body: ",c.default.createElement("br",null),this.state.isPreview?c.default.createElement("div",{className:"post-edit__previewBlock",dangerouslySetInnerHTML:this.getPreview()}):c.default.createElement("textarea",{required:!0,value:this.state.body,onChange:function(t){var n=t.target;return e.setState({body:n.value})},cols:"100",rows:"10"}))))}}]),t}(c.default.Component)},96:function(e,t,n){var r=n(20);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0};o.transform=void 0;var a=n(18)(r,o);r.locals&&(e.exports=r.locals),r.locals||e.hot.accept(20,function(){var t=n(20);"string"==typeof t&&(t=[[e.i,t,""]]),a(t)}),e.hot.dispose(function(){a()})}},[32]);