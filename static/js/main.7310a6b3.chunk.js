(this["webpackJsonpsorting-visualizer-2"]=this["webpackJsonpsorting-visualizer-2"]||[]).push([[0],{44:function(t,e,a){},54:function(t,e,a){t.exports=a(67)},60:function(t,e,a){},61:function(t,e,a){},62:function(t,e,a){},66:function(t,e,a){},67:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(13),i=a.n(o),s=(a(59),a(60),a(16)),c=a(17),l=a(19),u=a(18),h=(a(61),a(48)),g=a(72),m=a(51),d=(a(44),a(73)),f=a(74),b=a(75);a(62),n.Component;var p=function t(e,a,n,r,o){if(a!==n){var i=Math.floor((a+n)/2);t(r,a,i,e,o),t(r,i+1,n,e,o),v(e,a,i,n,r,o)}},v=function(t,e,a,n,r,o){for(var i=e,s=e,c=a+1;s<=a&&c<=n;)r[s]<=r[c]?(t[i]=r[s],o.push(["compare",i,s,"rgba(30, 165, 251,0.95)"]),o.push(["replace",i,r[s]]),o.push(["compare",i,s,"rgba(116, 208, 241,0.8)"]),i++,s++):(t[i]=r[c],o.push(["compare",i,c,"rgba(30, 165, 251,0.95)"]),o.push(["replace",i,r[c]]),o.push(["compare",i,c,"rgba(116, 208, 241,0.8)"]),i++,c++);for(;s<=a;)t[i]=r[s],o.push(["replace",i,r[s]]),i++,s++;for(;c<=n;)t[i]=r[c],o.push(["replace",i,r[c]]),i++,c++},k="rgba(166, 255, 241, 0.8)",y="rgba(250, 128, 114, 0.9)";function C(t){var e=t.length,a=Array();return function t(e,a,n,r){if(n-a<=0)return null;var o=Math.floor((n+1-a)*Math.random()+a),i=function(t,e,a,n,r){var o=a-1;S(t,e,n),r.push(["highlight",e,n,y]),r.push(["swap",e,n,k]),r.push(["highlight",e,n,"rgba(116, 208, 241,0.8)"]);for(var i=t[n],s=a;s<n;s++)t[s]<i&&(o++,S(t,o,s),r.push(["highlight",o,s,y]),r.push(["swap",o,s,k]),r.push(["highlight",o,s,"rgba(116, 208, 241,0.8)"]));return S(t,o+1,n),r.push(["highlight",o+1,n,y]),r.push(["swap",o+1,n,k]),r.push(["highlight",o+1,n,"rgba(116, 208, 241,0.8)"]),o+1}(e,o,a,n,r);i>a&&t(e,a,i-1,r);i<n&&t(e,i+1,n,r)}(t,0,e-1,a),a}function S(t,e,a){var n=t[e];t[e]=t[a],t[a]=n}var A=-1,E=-1,w=!1,N=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(t){var n;Object(s.a)(this,a),(n=e.call(this,t)).generateArray=function(){w||(n.setState({List:[]}),setTimeout((function(){for(var t=[],e=0;e<n.state.size;e++){var a=Math.floor(270*Math.random()+270);t.push(a)}n.setState({List:t})}),100))},n.handleSizeChange=function(t){w||(n.setState({List:[]}),setTimeout((function(){n.setState({size:t,animationSpeed:7e4/Math.pow(t,2)}),n.generateArray()}),100))},n.createBar=function(t,e){return r.a.createElement("div",{className:"array-bar",style:{height:t},key:e,draggable:"true",onDragStart:function(){n.handleDrag(e)},onDragOver:function(){n.handleDrop(e)},onDragEnd:n.handleEndDrag})},n.handleEndDrag=function(){var t=n.state.List,e=t[A];t[A]=t[E],t[E]=e,n.setState({List:t})},n.handleDrag=function(t){A=t,document.addEventListener("dragenter",(function(t){"array-bar"==t.target.className&&(t.target.style.border="7px dotted rgba(30, 210, 130,1)")})),document.addEventListener("dragleave",(function(t){"array-bar"==t.target.className&&(t.target.style.border="")}))},n.handleDrop=function(t){E=t},n.bubbleSort=function(){if(!w){w=!0;var t=n.state.List;Animation=function(t){for(var e=t.length,a=0,n=!0,r=[];n;){n=!1;for(var o=1;o<e-a;o++)if(t[o]<t[o-1]){n=!0;var i=t[o];t[o]=t[o-1],t[o-1]=i,r.push([o,o-1,"rgba(255,60,60,0.8)"]),r.push([o,o-1,"swap","rgba(50, 230, 150,0.8)"]),r.push([o,o-1,"rgba(116, 208, 241,0.8)"])}else r.push([o,o-1,"rgba(50, 230, 150,0.8)"]),r.push([o,o-1,"rgba(116, 208, 241,0.8)"]);a++}return r}(t);for(var e=function(t){var e=document.getElementsByClassName("array-bar"),a=Animation[t][0],r=Animation[t][1],o=e[a].style,i=e[r].style;"swap"===Animation[t][2]?setTimeout((function(){var e=o.height;o.height=i.height,i.height=e,o.backgroundColor=Animation[t][3],i.backgroundColor=Animation[t][3],t===Animation.length-1&&(w=!1)}),t*n.state.animationSpeed):setTimeout((function(){o.backgroundColor=Animation[t][2],i.backgroundColor=Animation[t][2],t===Animation.length-1&&(w=!1)}),t*n.state.animationSpeed)},a=0;a<Animation.length;a++)e(a)}},n.insertionSort=function(){if(!w){w=!0;var t=n.state.List;Animation=function(t){for(var e=t.length,a=[],n=1;n<e;n++){var r=n;for(a.push([r,"highlight","rgba(30, 165, 251,0.95)"]);r>0&&t[r]<t[r-1];){a.push([r,r-1,"rgba(250, 128, 114,0.9)"]),a.push([r,r-1,"swap","rgba(50, 230, 150,0.8)"]),a.push([r,r-1,"rgba(116, 208, 241,0.8)"]);var o=t[r];t[r]=t[r-1],t[r-1]=o,r--}a.push([n,"highlight","rgba(116, 208, 241,0.8)"])}return a}(t);for(var e=function(t){var e=document.getElementsByClassName("array-bar");if("highlight"===Animation[t][1]){var a=e[Animation[t][0]].style;setTimeout((function(){a.backgroundColor=Animation[t][2],t===Animation.length-1&&(w=!1)}),t*n.state.animationSpeed)}else{var r=Animation[t][0],o=Animation[t][1],i=e[r].style,s=e[o].style;"swap"===Animation[t][2]?setTimeout((function(){var e=i.height;i.height=s.height,s.height=e,i.backgroundColor=Animation[t][3],s.backgroundColor=Animation[t][3],t===Animation.length-1&&(w=!1)}),t*n.state.animationSpeed):setTimeout((function(){i.backgroundColor=Animation[t][2],s.backgroundColor=Animation[t][2],t===Animation.length-1&&(w=!1)}),t*n.state.animationSpeed)}},a=0;a<Animation.length;a++)e(a)}},n.mergeSort=function(){if(!w){w=!0;for(var t=function(t){var e=t.length;if(e<=1)return[];var a=[],n=t.slice();return p(t,0,e-1,n,a),a}(n.state.List),e=function(e){var a=document.getElementsByClassName("array-bar");if("replace"===t[e][0]){var r=t[e][1],o=t[e][2],i=a[r].style;setTimeout((function(){i.height="".concat(o,"px"),e===t.length-1&&(w=!1)}),(e+1)*n.state.animationSpeed*2)}else{var s=t[e][1],c=t[e][2],l=a[s].style,u=a[c].style;setTimeout((function(){l.backgroundColor=t[e][3],u.backgroundColor=t[e][3],e===t.length-1&&(w=!1)}),(e+1)*n.state.animationSpeed*2)}},a=0;a<t.length;a++)e(a)}},n.quickSort=function(){w||function(){w=!0;var t=n.state.List;console.log(t);for(var e=C(t),a=function(t){var a=document.getElementsByClassName("array-bar"),r=e[t][1],o=e[t][2],i=a[r].style,s=a[o].style;"highlight"==e[t][0]?setTimeout((function(){i.backgroundColor=e[t][3],s.backgroundColor=e[t][3],t===e.length-1&&(w=!1)}),t*n.state.animationSpeed):setTimeout((function(){var a=i.height;i.height=s.height,s.height=a,i.backgroundColor=e[t][3],s.backgroundColor=e[t][3],t===e.length-1&&(w=!1)}),t*n.state.animationSpeed)},r=0;r<e.length;r++)a(r)}()},n.bubbleRef=r.a.createRef(),n.insertionRef=r.a.createRef();for(var o=[],i=0;i<50;i++){var c=Math.floor(270*Math.random()+270);o.push(c)}return n.state={List:o,size:50,possibleSize:[6,10,30,50,100,200],animationSpeed:7e4/Math.pow(50,2),idx1:-1,idx2:-1,inProgress:!1},n}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(t,e){e.size!==this.state.size&&this.generateArray()}},{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"style-btn-group  btn-group"},r.a.createElement(h.a,{className:"button-generate",onClick:this.generateArray},"Generate a new array!"),r.a.createElement(h.a,{className:"button-sort",onClick:this.bubbleSort},"BubbleSort !"),r.a.createElement(h.a,{className:"button-sort",onClick:this.insertionSort},"InsertionSort !"),r.a.createElement(h.a,{className:"button-sort",onClick:this.mergeSort},"MergeSort !"),r.a.createElement(h.a,{className:"button-sort",onClick:this.quickSort},"QuickSort !"),r.a.createElement(g.a,{className:"button-color-2",size:"lg",variant:"info",title:" Select the array size "},this.state.possibleSize.map((function(e,a){return r.a.createElement(m.a.Item,{key:a,onClick:function(){t.handleSizeChange(e)}},e," items")})))),r.a.createElement("div",{className:"array-container"},this.state.List.map((function(e,a){return t.createBar(e,a)}))))}}]),a}(n.Component),z=(a(66),function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).handleChange=function(){n.props.modeFunction(),n.setState({isChecked:!n.state.isChecked})},n.state={isChecked:!1},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"switch-container"},r.a.createElement("label",null,r.a.createElement("input",{checked:this.state.isChecked,onChange:this.handleChange,className:"switch",type:"checkbox"}),r.a.createElement("div",null,r.a.createElement("div",null))))}}]),a}(n.Component)),L="rgba(240,240,240,0.95)",M=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={backgroundColor:L},t.getDarkMode=function(){t.state.backgroundColor===L?t.setState({backgroundColor:"rgba(40,40,50,0.95)"}):t.setState({backgroundColor:L})},t}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App",style:{backgroundColor:this.state.backgroundColor}},r.a.createElement("div",{className:"tool mb-0"},r.a.createElement("h1",{className:"myFont"}," Sorting Visualizer "),r.a.createElement(z,{modeFunction:this.getDarkMode})),r.a.createElement(N,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.7310a6b3.chunk.js.map