(window["webpackJsonp_frontend-park"]=window["webpackJsonp_frontend-park"]||[]).push([["chunk-2d212b8a"],{aa2f:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-container"},[n("div",{attrs:{id:"webgl-output"}})])}],o=n("5a89"),i={components:{},props:{},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){this.init()},methods:{init:function(){var e=new o["Scene"],t=new o["PerspectiveCamera"](45,window.innerWidth/(window.innerHeight-60),.1,1e3);this.createAxes(e),this.createPlane(e),this.createCube(e),this.createSphere(e),this.createLight(e),this.createRenderer(e,t)},createRenderer:function(e,t){var n=new o["WebGLRenderer"];n.setClearColor(new o["Color"](0)),n.setSize(window.innerWidth,window.innerHeight-60),t.position.set(-50,50,50),t.lookAt(e.position),n.shadowMapEnabled=!0,document.getElementById("webgl-output").appendChild(n.domElement),n.render(e,t)},createLight:function(e){var t=new o["SpotLight"](16777215);t.position.set(10,40,40),t.castShadow=!0,e.add(t)},createAxes:function(e){var t=new o["AxesHelper"](20);e.add(t)},createPlane:function(e){var t=new o["PlaneGeometry"](100,100),n=new o["MeshLambertMaterial"]({color:11184810}),a=new o["Mesh"](t,n);a.rotation.x=-.5*Math.PI,a.position.set(0,0,0),a.receiveShadow=!0,e.add(a)},createCube:function(e){var t=new o["BoxGeometry"](4,4,4),n=new o["MeshLambertMaterial"]({color:16711680}),a=new o["Mesh"](t,n);a.position.set(5,5,5),a.castShadow=!0,e.add(a)},createSphere:function(e){var t=new o["SphereGeometry"](4,20,20),n=new o["MeshLambertMaterial"]({color:7829503}),a=new o["Mesh"](t,n);a.position.set(-15,5,10),a.castShadow=!0,e.add(a)}}},s=i,c=n("2877"),d=Object(c["a"])(s,a,r,!1,null,"635027dd",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d212b8a.cdd7906f.js.map