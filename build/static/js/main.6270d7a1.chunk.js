(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(39),r=a.n(o),i=a(40),s=a(41),l=a(43),m=a(42),u=(a(49),a(66),a(67),a(68),a(102),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).addPage=function(){n.setState({count:n.state.count+1})},n.previousPage=function(){n.setState({count:1===n.state.count?1:n.state.count-1})},n.state={count:1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e={roomName:"JitsiMeetAPIExample1",width:500,height:600,parentNode:document.querySelector("#meet")};window.JitsiMeetExternalAPI=window.JitsiMeetExternalAPI||window.exports.JitsiMeetExternalAPI;var t=new window.JitsiMeetExternalAPI("meet.jit.si",e).getIFrame();console.log("iframe",t);var a=t.contentWindow.document.querySelector(".watermark");console.log("element",a)}},{key:"componentDidUpdate",value:function(){console.log("hi")}},{key:"render",value:function(){this.state.count;var e=c.a.createRef(),t=this.state.count;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"some-page-wrapper"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"column"},c.a.createElement("div",{className:"blue-column",id:"meet"})),c.a.createElement("div",{className:"column"},c.a.createElement("div",{className:"green-column",ref:e}),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"pagecontainer"},c.a.createElement("button",{className:"add",onClick:this.addPage},"Next Page")),c.a.createElement("div",{className:"pagecontainer"},c.a.createElement("button",{className:"pre",onClick:this.previousPage},"Previous Page")),c.a.createElement("div",{className:"pagecontainer"},t))))))}}]),a}(c.a.Component));r.a.render(c.a.createElement(u,null),document.getElementById("root"))},44:function(e,t,a){e.exports=a(105)},66:function(e,t,a){},99:function(e,t){}},[[44,1,2]]]);
//# sourceMappingURL=main.6270d7a1.chunk.js.map