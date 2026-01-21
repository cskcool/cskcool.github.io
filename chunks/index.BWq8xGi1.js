import{a as Q,R as qh}from"./index.D_ZN4cdT.js";/* empty css                      */var ko={exports:{}},yr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh;function x0(){if(Kh)return yr;Kh=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(i,s,r){var a=null;if(r!==void 0&&(a=""+r),s.key!==void 0&&(a=""+s.key),"key"in s){r={};for(var o in s)o!=="key"&&(r[o]=s[o])}else r=s;return s=r.ref,{$$typeof:n,type:i,key:a,ref:s!==void 0?s:null,props:r}}return yr.Fragment=t,yr.jsx=e,yr.jsxs=e,yr}var $h;function v0(){return $h||($h=1,ko.exports=x0()),ko.exports}var ft=v0();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Au="182",qs={ROTATE:0,DOLLY:1,PAN:2},Vs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},y0=0,Zh=1,S0=2,ja=1,M0=2,Dr=3,ti=0,rn=1,fi=2,pi=0,Ks=1,Jh=2,Qh=3,tf=4,T0=5,as=100,b0=101,E0=102,A0=103,w0=104,C0=200,R0=201,P0=202,D0=203,Wl=204,Xl=205,L0=206,I0=207,U0=208,N0=209,F0=210,O0=211,B0=212,V0=213,k0=214,jl=0,Yl=1,ql=2,er=3,Kl=4,$l=5,Zl=6,Jl=7,Vp=0,z0=1,H0=2,Kn=0,kp=1,zp=2,Hp=3,Gp=4,Wp=5,Xp=6,jp=7,Yp=300,vs=301,nr=302,Ql=303,tc=304,bo=306,ec=1e3,di=1001,nc=1002,Ve=1003,G0=1004,_a=1005,We=1006,zo=1007,ls=1008,_n=1009,qp=1010,Kp=1011,Wr=1012,wu=1013,ei=1014,jn=1015,_i=1016,Cu=1017,Ru=1018,Xr=1020,$p=35902,Zp=35899,Jp=1021,Qp=1022,kn=1023,xi=1026,cs=1027,tm=1028,Pu=1029,ir=1030,Du=1031,Lu=1033,Ya=33776,qa=33777,Ka=33778,$a=33779,ic=35840,sc=35841,rc=35842,ac=35843,oc=36196,lc=37492,cc=37496,uc=37488,hc=37489,fc=37490,dc=37491,pc=37808,mc=37809,gc=37810,_c=37811,xc=37812,vc=37813,yc=37814,Sc=37815,Mc=37816,Tc=37817,bc=37818,Ec=37819,Ac=37820,wc=37821,Cc=36492,Rc=36494,Pc=36495,Dc=36283,Lc=36284,Ic=36285,Uc=36286,W0=3200,X0=0,j0=1,Ii="",Cn="srgb",sr="srgb-linear",oo="linear",te="srgb",bs=7680,ef=519,Y0=512,q0=513,K0=514,Iu=515,$0=516,Z0=517,Uu=518,J0=519,nf=35044,sf="300 es",Yn=2e3,lo=2001;function em(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function co(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Q0(){const n=co("canvas");return n.style.display="block",n}const rf={};function af(...n){const t="THREE."+n.shift();console.log(t,...n)}function Dt(...n){const t="THREE."+n.shift();console.warn(t,...n)}function Kt(...n){const t="THREE."+n.shift();console.error(t,...n)}function jr(...n){const t=n.join(" ");t in rf||(rf[t]=!0,Dt(...n))}function tx(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}class Ss{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Za=Math.PI/180,Nc=180/Math.PI;function aa(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]).toLowerCase()}function zt(n,t,e){return Math.max(t,Math.min(e,n))}function ex(n,t){return(n%t+t)%t}function Ho(n,t,e){return(1-e)*n+e*t}function Sr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function en(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const nx={DEG2RAD:Za};class It{constructor(t=0,e=0){It.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ys{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[a+0],d=r[a+1],_=r[a+2],g=r[a+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o>=1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let m=l*f+c*d+u*_+h*g;m<0&&(f=-f,d=-d,_=-_,g=-g,m=-m);let p=1-o;if(m<.9995){const y=Math.acos(m),S=Math.sin(y);p=Math.sin(p*y)/S,o=Math.sin(o*y)/S,l=l*p+f*o,c=c*p+d*o,u=u*p+_*o,h=h*p+g*o}else{l=l*p+f*o,c=c*p+d*o,u=u*p+_*o,h=h*p+g*o;const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],f=r[a+1],d=r[a+2],_=r[a+3];return t[e]=o*_+u*h+l*d-c*f,t[e+1]=l*_+u*f+c*h-o*d,t[e+2]=c*_+u*d+o*f-l*h,t[e+3]=u*_-o*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),f=l(i/2),d=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>h){const d=2*Math.sqrt(1+i-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-i-h);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(zt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,e=0,i=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(of.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(of.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),h=2*(r*i-a*e);return this.x=e+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Go.copy(this).projectOnVector(t),this.sub(Go)}reflect(t){return this.sub(Go.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Go=new V,of=new ys;class Ft{constructor(t,e,i,s,r,a,o,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],_=i[8],g=s[0],m=s[3],p=s[6],y=s[1],S=s[4],T=s[7],M=s[2],A=s[5],w=s[8];return r[0]=a*g+o*y+l*M,r[3]=a*m+o*S+l*A,r[6]=a*p+o*T+l*w,r[1]=c*g+u*y+h*M,r[4]=c*m+u*S+h*A,r[7]=c*p+u*T+h*w,r[2]=f*g+d*y+_*M,r[5]=f*m+d*S+_*A,r[8]=f*p+d*T+_*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,_=e*h+i*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(s*c-u*i)*g,t[2]=(o*i-s*a)*g,t[3]=f*g,t[4]=(u*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=d*g,t[7]=(i*l-c*e)*g,t[8]=(a*e-i*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Wo.makeScale(t,e)),this}rotate(t){return this.premultiply(Wo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Wo=new Ft,lf=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cf=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ix(){const n={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===te&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(s.r=$s(s.r),s.g=$s(s.g),s.b=$s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ii?oo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return jr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return jr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[sr]:{primaries:t,whitePoint:i,transfer:oo,toXYZ:lf,fromXYZ:cf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:t,whitePoint:i,transfer:te,toXYZ:lf,fromXYZ:cf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),n}const jt=ix();function mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $s(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Es;class sx{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Es===void 0&&(Es=co("canvas")),Es.width=t.width,Es.height=t.height;const s=Es.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Es}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=co("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=mi(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(mi(e[i]/255)*255):e[i]=mi(e[i]);return{data:e,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rx=0;class Nu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=aa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xo(s[a].image)):r.push(Xo(s[a]))}else r=Xo(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Xo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}let ax=0;const jo=new V;class Je extends Ss{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,i=di,s=di,r=We,a=ls,o=kn,l=_n,c=Je.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=aa(),this.name="",this.source=new Nu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jo).x}get height(){return this.source.getSize(jo).y}get depth(){return this.source.getSize(jo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Dt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Dt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ec:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case nc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ec:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case nc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=Yp;Je.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,i=0,s=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,T=(d+1)/2,M=(p+1)/2,A=(u+f)/4,w=(h+g)/4,R=(_+m)/4;return S>T&&S>M?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=A/i,r=w/i):T>M?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=A/s,r=R/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=w/r,s=R/r),this.set(i,s,r,e),this}let y=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(h-g)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this.w=zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this.w=zt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ox extends Ss{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);const s={width:t,height:e,depth:i.depth},r=new Je(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Nu(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends ox{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class nm extends Je{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class lx extends Je{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oa{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Un):Un.fromBufferAttribute(r,a),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xa.copy(i.boundingBox)),xa.applyMatrix4(t.matrixWorld),this.union(xa)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mr),va.subVectors(this.max,Mr),As.subVectors(t.a,Mr),ws.subVectors(t.b,Mr),Cs.subVectors(t.c,Mr),Ei.subVectors(ws,As),Ai.subVectors(Cs,ws),Ki.subVectors(As,Cs);let e=[0,-Ei.z,Ei.y,0,-Ai.z,Ai.y,0,-Ki.z,Ki.y,Ei.z,0,-Ei.x,Ai.z,0,-Ai.x,Ki.z,0,-Ki.x,-Ei.y,Ei.x,0,-Ai.y,Ai.x,0,-Ki.y,Ki.x,0];return!Yo(e,As,ws,Cs,va)||(e=[1,0,0,0,1,0,0,0,1],!Yo(e,As,ws,Cs,va))?!1:(ya.crossVectors(Ei,Ai),e=[ya.x,ya.y,ya.z],Yo(e,As,ws,Cs,va))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ri=[new V,new V,new V,new V,new V,new V,new V,new V],Un=new V,xa=new oa,As=new V,ws=new V,Cs=new V,Ei=new V,Ai=new V,Ki=new V,Mr=new V,va=new V,ya=new V,$i=new V;function Yo(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){$i.fromArray(n,r);const o=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),l=t.dot($i),c=e.dot($i),u=i.dot($i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const cx=new oa,Tr=new V,qo=new V;class Fu{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):cx.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Tr.subVectors(t,this.center);const e=Tr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Tr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Tr.copy(t.center).add(qo)),this.expandByPoint(Tr.copy(t.center).sub(qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ai=new V,Ko=new V,Sa=new V,wi=new V,$o=new V,Ma=new V,Zo=new V;class im{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ko.copy(t).add(e).multiplyScalar(.5),Sa.copy(e).sub(t).normalize(),wi.copy(this.origin).sub(Ko);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Sa),o=wi.dot(this.direction),l=-wi.dot(Sa),c=wi.lengthSq(),u=Math.abs(1-a*a);let h,f,d,_;if(u>0)if(h=a*l-o,f=a*o-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ko).addScaledVector(Sa,f),d}intersectSphere(t,e){ai.subVectors(t.center,this.origin);const i=ai.dot(this.direction),s=ai.dot(ai)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,i,s,r){$o.subVectors(e,t),Ma.subVectors(i,t),Zo.crossVectors($o,Ma);let a=this.direction.dot(Zo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wi.subVectors(this.origin,t);const l=o*this.direction.dot(Ma.crossVectors(wi,Ma));if(l<0)return null;const c=o*this.direction.dot($o.cross(wi));if(c<0||l+c>a)return null;const u=-o*wi.dot(Zo);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Te{constructor(t,e,i,s,r,a,o,l,c,u,h,f,d,_,g,m){Te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,h,f,d,_,g,m)}set(t,e,i,s,r,a,o,l,c,u,h,f,d,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Te().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,s=1/Rs.setFromMatrixColumn(t,0).length(),r=1/Rs.setFromMatrixColumn(t,1).length(),a=1/Rs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*u,d=a*h,_=o*u,g=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+_*c,e[5]=f-g*c,e[9]=-o*l,e[2]=g-f*c,e[6]=_+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;e[0]=f+g*o,e[4]=_*o-d,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=d*o-_,e[6]=g+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;e[0]=f-g*o,e[4]=-a*h,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*u,e[9]=g-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,d=a*h,_=o*u,g=o*h;e[0]=l*u,e[4]=_*c-d,e[8]=f*c+g,e[1]=l*h,e[5]=g*c+f,e[9]=d*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=g-f*h,e[8]=_*h+d,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*h+_,e[10]=f-g*h}else if(t.order==="XZY"){const f=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+g,e[5]=a*u,e[9]=d*h-_,e[2]=_*h-d,e[6]=o*u,e[10]=g*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ux,t,hx)}lookAt(t,e,i){const s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ci.crossVectors(i,dn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ci.crossVectors(i,dn)),Ci.normalize(),Ta.crossVectors(dn,Ci),s[0]=Ci.x,s[4]=Ta.x,s[8]=dn.x,s[1]=Ci.y,s[5]=Ta.y,s[9]=dn.y,s[2]=Ci.z,s[6]=Ta.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],_=i[2],g=i[6],m=i[10],p=i[14],y=i[3],S=i[7],T=i[11],M=i[15],A=s[0],w=s[4],R=s[8],x=s[12],b=s[1],P=s[5],O=s[9],N=s[13],H=s[2],W=s[6],k=s[10],F=s[14],j=s[3],it=s[7],et=s[11],lt=s[15];return r[0]=a*A+o*b+l*H+c*j,r[4]=a*w+o*P+l*W+c*it,r[8]=a*R+o*O+l*k+c*et,r[12]=a*x+o*N+l*F+c*lt,r[1]=u*A+h*b+f*H+d*j,r[5]=u*w+h*P+f*W+d*it,r[9]=u*R+h*O+f*k+d*et,r[13]=u*x+h*N+f*F+d*lt,r[2]=_*A+g*b+m*H+p*j,r[6]=_*w+g*P+m*W+p*it,r[10]=_*R+g*O+m*k+p*et,r[14]=_*x+g*N+m*F+p*lt,r[3]=y*A+S*b+T*H+M*j,r[7]=y*w+S*P+T*W+M*it,r[11]=y*R+S*O+T*k+M*et,r[15]=y*x+S*N+T*F+M*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],_=t[3],g=t[7],m=t[11],p=t[15],y=l*d-c*f,S=o*d-c*h,T=o*f-l*h,M=a*d-c*u,A=a*f-l*u,w=a*h-o*u;return e*(g*y-m*S+p*T)-i*(_*y-m*M+p*A)+s*(_*S-g*M+p*w)-r*(_*T-g*A+m*w)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],_=t[12],g=t[13],m=t[14],p=t[15],y=h*m*c-g*f*c+g*l*d-o*m*d-h*l*p+o*f*p,S=_*f*c-u*m*c-_*l*d+a*m*d+u*l*p-a*f*p,T=u*g*c-_*h*c+_*o*d-a*g*d-u*o*p+a*h*p,M=_*h*l-u*g*l-_*o*f+a*g*f+u*o*m-a*h*m,A=e*y+i*S+s*T+r*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=y*w,t[1]=(g*f*r-h*m*r-g*s*d+i*m*d+h*s*p-i*f*p)*w,t[2]=(o*m*r-g*l*r+g*s*c-i*m*c-o*s*p+i*l*p)*w,t[3]=(h*l*r-o*f*r-h*s*c+i*f*c+o*s*d-i*l*d)*w,t[4]=S*w,t[5]=(u*m*r-_*f*r+_*s*d-e*m*d-u*s*p+e*f*p)*w,t[6]=(_*l*r-a*m*r-_*s*c+e*m*c+a*s*p-e*l*p)*w,t[7]=(a*f*r-u*l*r+u*s*c-e*f*c-a*s*d+e*l*d)*w,t[8]=T*w,t[9]=(_*h*r-u*g*r-_*i*d+e*g*d+u*i*p-e*h*p)*w,t[10]=(a*g*r-_*o*r+_*i*c-e*g*c-a*i*p+e*o*p)*w,t[11]=(u*o*r-a*h*r-u*i*c+e*h*c+a*i*d-e*o*d)*w,t[12]=M*w,t[13]=(u*g*s-_*h*s+_*i*f-e*g*f-u*i*m+e*h*m)*w,t[14]=(_*o*s-a*g*s-_*i*l+e*g*l+a*i*m-e*o*m)*w,t[15]=(a*h*s-u*o*s+u*i*l-e*h*l-a*i*f+e*o*f)*w,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,_=r*h,g=a*u,m=a*h,p=o*h,y=l*c,S=l*u,T=l*h,M=i.x,A=i.y,w=i.z;return s[0]=(1-(g+p))*M,s[1]=(d+T)*M,s[2]=(_-S)*M,s[3]=0,s[4]=(d-T)*A,s[5]=(1-(f+p))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(_+S)*w,s[9]=(m-y)*w,s[10]=(1-(f+g))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;if(t.x=s[12],t.y=s[13],t.z=s[14],this.determinant()===0)return i.set(1,1,1),e.identity(),this;let r=Rs.set(s[0],s[1],s[2]).length();const a=Rs.set(s[4],s[5],s[6]).length(),o=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),Nn.copy(this);const c=1/r,u=1/a,h=1/o;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=h,Nn.elements[9]*=h,Nn.elements[10]*=h,e.setFromRotationMatrix(Nn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Yn,l=!1){const c=this.elements,u=2*r/(e-t),h=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s);let _,g;if(l)_=r/(a-r),g=a*r/(a-r);else if(o===Yn)_=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===lo)_=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Yn,l=!1){const c=this.elements,u=2/(e-t),h=2/(i-s),f=-(e+t)/(e-t),d=-(i+s)/(i-s);let _,g;if(l)_=1/(a-r),g=a/(a-r);else if(o===Yn)_=-2/(a-r),g=-(a+r)/(a-r);else if(o===lo)_=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Rs=new V,Nn=new Te,ux=new V(0,0,0),hx=new V(1,1,1),Ci=new V,Ta=new V,dn=new V,uf=new Te,hf=new ys;class vi{constructor(t=0,e=0,i=0,s=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return uf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hf.setFromEuler(this),this.setFromQuaternion(hf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class sm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fx=0;const ff=new V,Ps=new ys,oi=new Te,ba=new V,br=new V,dx=new V,px=new ys,df=new V(1,0,0),pf=new V(0,1,0),mf=new V(0,0,1),gf={type:"added"},mx={type:"removed"},Ds={type:"childadded",child:null},Jo={type:"childremoved",child:null};class je extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=je.DEFAULT_UP.clone();const t=new V,e=new vi,i=new ys,s=new V(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Te},normalMatrix:{value:new Ft}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.premultiply(Ps),this}rotateX(t){return this.rotateOnAxis(df,t)}rotateY(t){return this.rotateOnAxis(pf,t)}rotateZ(t){return this.rotateOnAxis(mf,t)}translateOnAxis(t,e){return ff.copy(t).applyQuaternion(this.quaternion),this.position.add(ff.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(df,t)}translateY(t){return this.translateOnAxis(pf,t)}translateZ(t){return this.translateOnAxis(mf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ba.copy(t):ba.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(br,ba,this.up):oi.lookAt(ba,br,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(oi),this.quaternion.premultiply(Ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gf),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mx),Jo.child=t,this.dispatchEvent(Jo),Jo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gf),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,t,dx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,px,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}je.DEFAULT_UP=new V(0,1,0);je.DEFAULT_MATRIX_AUTO_UPDATE=!0;je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new V,li=new V,Qo=new V,ci=new V,Ls=new V,Is=new V,_f=new V,tl=new V,el=new V,nl=new V,il=new Se,sl=new Se,rl=new Se;class Vn{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Fn.subVectors(t,e),s.cross(Fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Fn.subVectors(s,e),li.subVectors(i,e),Qo.subVectors(t,e);const a=Fn.dot(Fn),o=Fn.dot(li),l=Fn.dot(Qo),c=li.dot(li),u=li.dot(Qo),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,_=(a*u-o*l)*f;return r.set(1-d-_,_,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return il.setScalar(0),sl.setScalar(0),rl.setScalar(0),il.fromBufferAttribute(t,e),sl.fromBufferAttribute(t,i),rl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(il,r.x),a.addScaledVector(sl,r.y),a.addScaledVector(rl,r.z),a}static isFrontFacing(t,e,i,s){return Fn.subVectors(i,e),li.subVectors(t,e),Fn.cross(li).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Fn.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Vn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;Ls.subVectors(s,i),Is.subVectors(r,i),tl.subVectors(t,i);const l=Ls.dot(tl),c=Is.dot(tl);if(l<=0&&c<=0)return e.copy(i);el.subVectors(t,s);const u=Ls.dot(el),h=Is.dot(el);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(Ls,a);nl.subVectors(t,r);const d=Ls.dot(nl),_=Is.dot(nl);if(_>=0&&d<=_)return e.copy(r);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(Is,o);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return _f.subVectors(r,s),o=(h-u)/(h-u+(d-_)),e.copy(s).addScaledVector(_f,o);const p=1/(m+g+f);return a=g*p,o=f*p,e.copy(i).addScaledVector(Ls,a).addScaledVector(Is,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const rm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function al(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class ee{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,jt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=jt.workingColorSpace){if(t=ex(t,1),e=zt(e,0,1),i=zt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=al(a,r,t+1/3),this.g=al(a,r,t),this.b=al(a,r,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,e=Cn){function i(r){r!==void 0&&parseFloat(r)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Dt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Cn){const i=rm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=$s(t.r),this.g=$s(t.g),this.b=$s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Cn){return jt.workingToColorSpace(He.copy(this),t),Math.round(zt(He.r*255,0,255))*65536+Math.round(zt(He.g*255,0,255))*256+Math.round(zt(He.b*255,0,255))}getHexString(t=Cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(He.copy(this),e);const i=He.r,s=He.g,r=He.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Cn){jt.workingToColorSpace(He.copy(this),t);const e=He.r,i=He.g,s=He.b;return t!==Cn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(Ea);const i=Ho(Ri.h,Ea.h,e),s=Ho(Ri.s,Ea.s,e),r=Ho(Ri.l,Ea.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new ee;ee.NAMES=rm;let gx=0;class Eo extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=aa(),this.name="",this.type="Material",this.blending=Ks,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wl,this.blendDst=Xl,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ef,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Dt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Dt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(i.blending=this.blending),this.side!==ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wl&&(i.blendSrc=this.blendSrc),this.blendDst!==Xl&&(i.blendDst=this.blendDst),this.blendEquation!==as&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ef&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class am extends Eo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Vp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new V,Aa=new It;let _x=0;class Zn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_x++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=nf,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Aa.fromBufferAttribute(this,e),Aa.applyMatrix3(t),this.setXY(e,Aa.x,Aa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Sr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=en(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Sr(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Sr(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Sr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Sr(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array),s=en(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array),s=en(s,this.array),r=en(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nf&&(t.usage=this.usage),t}}class om extends Zn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class lm extends Zn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class gi extends Zn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let xx=0;const En=new Te,ol=new je,Us=new V,pn=new oa,Er=new oa,Ne=new V;class bi extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=aa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(em(t)?lm:om)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ft().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,i){return En.makeTranslation(t,e,i),this.applyMatrix4(En),this}scale(t,e,i){return En.makeScale(t,e,i),this.applyMatrix4(En),this}lookAt(t){return ol.lookAt(t),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gi(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fu);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Er.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(pn.min,Er.min),pn.expandByPoint(Ne),Ne.addVectors(pn.max,Er.max),pn.expandByPoint(Ne)):(pn.expandByPoint(Er.min),pn.expandByPoint(Er.max))}pn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ne));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ne.fromBufferAttribute(o,c),l&&(Us.fromBufferAttribute(t,c),Ne.add(Us)),s=Math.max(s,i.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new V,l[R]=new V;const c=new V,u=new V,h=new V,f=new It,d=new It,_=new It,g=new V,m=new V;function p(R,x,b){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,x),h.fromBufferAttribute(i,b),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,x),_.fromBufferAttribute(r,b),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const P=1/(d.x*_.y-_.x*d.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(P),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(P),o[R].add(g),o[x].add(g),o[b].add(g),l[R].add(m),l[x].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,x=y.length;R<x;++R){const b=y[R],P=b.start,O=b.count;for(let N=P,H=P+O;N<H;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const S=new V,T=new V,M=new V,A=new V;function w(R){M.fromBufferAttribute(s,R),A.copy(M);const x=o[R];S.copy(x),S.sub(M.multiplyScalar(M.dot(x))).normalize(),T.crossVectors(A,x);const P=T.dot(l[R])<0?-1:1;a.setXYZW(R,S.x,S.y,S.z,P)}for(let R=0,x=y.length;R<x;++R){const b=y[R],P=b.start,O=b.count;for(let N=P,H=P+O;N<H;N+=3)w(t.getX(N+0)),w(t.getX(N+1)),w(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new V,r=new V,a=new V,o=new V,l=new V,c=new V,u=new V,h=new V;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new Zn(f,u,h)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new bi,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xf=new Te,Zi=new im,wa=new Fu,vf=new V,Ca=new V,Ra=new V,Pa=new V,ll=new V,Da=new V,yf=new V,La=new V;class ni extends je{constructor(t=new bi,e=new am){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Da.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(ll.fromBufferAttribute(h,t),a?Da.addScaledVector(ll,u):Da.addScaledVector(ll.sub(e),u))}e.add(Da)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(r),Zi.copy(t.ray).recast(t.near),!(wa.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(wa,vf)===null||Zi.origin.distanceToSquared(vf)>(t.far-t.near)**2))&&(xf.copy(r).invert(),Zi.copy(t.ray).applyMatrix4(xf),!(i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Zi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=a[m.materialIndex],y=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let T=y,M=S;T<M;T+=3){const A=o.getX(T),w=o.getX(T+1),R=o.getX(T+2);s=Ia(this,p,t,i,c,u,h,A,w,R),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const y=o.getX(m),S=o.getX(m+1),T=o.getX(m+2);s=Ia(this,a,t,i,c,u,h,y,S,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=a[m.materialIndex],y=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let T=y,M=S;T<M;T+=3){const A=T,w=T+1,R=T+2;s=Ia(this,p,t,i,c,u,h,A,w,R),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const y=m,S=m+1,T=m+2;s=Ia(this,a,t,i,c,u,h,y,S,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function vx(n,t,e,i,s,r,a,o){let l;if(t.side===rn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===ti,o),l===null)return null;La.copy(o),La.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(La);return c<e.near||c>e.far?null:{distance:c,point:La.clone(),object:n}}function Ia(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Ca),n.getVertexPosition(l,Ra),n.getVertexPosition(c,Pa);const u=vx(n,t,e,i,Ca,Ra,Pa,yf);if(u){const h=new V;Vn.getBarycoord(yf,Ca,Ra,Pa,h),s&&(u.uv=Vn.getInterpolatedAttribute(s,o,l,c,h,new It)),r&&(u.uv1=Vn.getInterpolatedAttribute(r,o,l,c,h,new It)),a&&(u.normal=Vn.getInterpolatedAttribute(a,o,l,c,h,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new V,materialIndex:0};Vn.getNormal(Ca,Ra,Pa,f.normal),u.face=f,u.barycoord=h}return u}class la extends bi{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,s,a,2),_("x","z","y",1,-1,t,i,-e,s,a,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new gi(c,3)),this.setAttribute("normal",new gi(u,3)),this.setAttribute("uv",new gi(h,2));function _(g,m,p,y,S,T,M,A,w,R,x){const b=T/w,P=M/R,O=T/2,N=M/2,H=A/2,W=w+1,k=R+1;let F=0,j=0;const it=new V;for(let et=0;et<k;et++){const lt=et*P-N;for(let Pt=0;Pt<W;Pt++){const Ut=Pt*b-O;it[g]=Ut*y,it[m]=lt*S,it[p]=H,c.push(it.x,it.y,it.z),it[g]=0,it[m]=0,it[p]=A>0?1:-1,u.push(it.x,it.y,it.z),h.push(Pt/w),h.push(1-et/R),F+=1}}for(let et=0;et<R;et++)for(let lt=0;lt<w;lt++){const Pt=f+lt+W*et,Ut=f+lt+W*(et+1),Gt=f+(lt+1)+W*(et+1),Wt=f+(lt+1)+W*et;l.push(Pt,Ut,Wt),l.push(Ut,Gt,Wt),j+=6}o.addGroup(d,j,x),d+=j,f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new la(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function rr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ke(n){const t={};for(let e=0;e<n.length;e++){const i=rr(n[e]);for(const s in i)t[s]=i[s]}return t}function yx(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function cm(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const Sx={clone:rr,merge:Ke};var Mx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Eo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mx,this.fragmentShader=Tx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rr(t.uniforms),this.uniformsGroups=yx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class um extends je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new V,Sf=new It,Mf=new It;class gn extends um{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Nc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Za*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Nc*2*Math.atan(Math.tan(Za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z)}getViewSize(t,e){return this.getViewBounds(t,Sf,Mf),e.subVectors(Mf,Sf)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Za*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ns=-90,Fs=1;class bx extends je{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gn(Ns,Fs,t,e);s.layers=this.layers,this.add(s);const r=new gn(Ns,Fs,t,e);r.layers=this.layers,this.add(r);const a=new gn(Ns,Fs,t,e);a.layers=this.layers,this.add(a);const o=new gn(Ns,Fs,t,e);o.layers=this.layers,this.add(o);const l=new gn(Ns,Fs,t,e);l.layers=this.layers,this.add(l);const c=new gn(Ns,Fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class hm extends Je{constructor(t=[],e=vs,i,s,r,a,o,l,c,u){super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fm extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new hm(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new la(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:pi});r.uniforms.tEquirect.value=e;const a=new ni(s,r),o=e.minFilter;return e.minFilter===ls&&(e.minFilter=We),new bx(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}class Ua extends je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ex={type:"move"};class cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ua,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ua,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ua,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ex)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ua;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Tf extends je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ax extends Je{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Ve,u=Ve,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ul=new V,wx=new V,Cx=new Ft;class Li{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ul.subVectors(i,e).cross(wx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ul),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Cx.getNormalMatrix(t),s=this.coplanarPoint(ul).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new Fu,Rx=new It(.5,.5),Na=new V;class Ou{constructor(t=new Li,e=new Li,i=new Li,s=new Li,r=new Li,a=new Li){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Yn,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],_=r[8],g=r[9],m=r[10],p=r[11],y=r[12],S=r[13],T=r[14],M=r[15];if(s[0].setComponents(c-a,d-u,p-_,M-y).normalize(),s[1].setComponents(c+a,d+u,p+_,M+y).normalize(),s[2].setComponents(c+o,d+h,p+g,M+S).normalize(),s[3].setComponents(c-o,d-h,p-g,M-S).normalize(),i)s[4].setComponents(l,f,m,T).normalize(),s[5].setComponents(c-l,d-f,p-m,M-T).normalize();else if(s[4].setComponents(c-l,d-f,p-m,M-T).normalize(),e===Yn)s[5].setComponents(c+l,d+f,p+m,M+T).normalize();else if(e===lo)s[5].setComponents(l,f,m,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(t){Ji.center.set(0,0,0);const e=Rx.distanceTo(t.center);return Ji.radius=.7071067811865476+e,Ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Na.x=s.normal.x>0?t.max.x:t.min.x,Na.y=s.normal.y>0?t.max.y:t.min.y,Na.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Na)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yr extends Je{constructor(t,e,i=ei,s,r,a,o=Ve,l=Ve,c,u=xi,h=1){if(u!==xi&&u!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:h};super(f,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Nu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Px extends Yr{constructor(t,e=ei,i=vs,s,r,a=Ve,o=Ve,l,c=xi){const u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,i,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class dm extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ca extends bi{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=t/o,f=e/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const y=p*f-a;for(let S=0;S<c;S++){const T=S*h-r;_.push(T,-y,0),g.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const S=y+c*p,T=y+c*(p+1),M=y+1+c*(p+1),A=y+1+c*p;d.push(S,T,A),d.push(T,M,A)}this.setIndex(d),this.setAttribute("position",new gi(_,3)),this.setAttribute("normal",new gi(g,3)),this.setAttribute("uv",new gi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ca(t.width,t.height,t.widthSegments,t.heightSegments)}}class Dx extends In{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Lx extends Eo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=W0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ix extends Eo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Bu extends je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const hl=new Te,bf=new V,Ef=new V;class pm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ou,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;bf.setFromMatrixPosition(t.matrixWorld),e.position.copy(bf),Ef.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ef),e.updateMatrixWorld(),hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ux extends pm{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}}class Nx extends Bu{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ux}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Ao extends um{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Fx extends pm{constructor(){super(new Ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ox extends Bu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.target=new je,this.shadow=new Fx}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Bx extends Bu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Vx extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class kx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class Af{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class zx extends Ss{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Dt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function wf(n,t,e,i){const s=Hx(i);switch(e){case Jp:return n*t;case tm:return n*t/s.components*s.byteLength;case Pu:return n*t/s.components*s.byteLength;case ir:return n*t*2/s.components*s.byteLength;case Du:return n*t*2/s.components*s.byteLength;case Qp:return n*t*3/s.components*s.byteLength;case kn:return n*t*4/s.components*s.byteLength;case Lu:return n*t*4/s.components*s.byteLength;case Ya:case qa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ka:case $a:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sc:case ac:return Math.max(n,16)*Math.max(t,8)/4;case ic:case rc:return Math.max(n,8)*Math.max(t,8)/2;case oc:case lc:case uc:case hc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case cc:case fc:case dc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case pc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case mc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case gc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case _c:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case xc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case vc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case yc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Sc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case bc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ec:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ac:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case wc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Cc:case Rc:case Pc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Dc:case Lc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ic:case Uc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Hx(n){switch(n){case _n:case qp:return{byteLength:1,components:1};case Wr:case Kp:case _i:return{byteLength:2,components:1};case Cu:case Ru:return{byteLength:2,components:4};case ei:case wu:case jn:return{byteLength:4,components:1};case $p:case Zp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Au}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Au);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mm(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Gx(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Wx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$x=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ev=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,av=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ov=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_v=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Tv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ev=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Av=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Fv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ov=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$v=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ty=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ey=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ny=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ry=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ay=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ly=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,py=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,my=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_y=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,My=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ty=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,by=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ey=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ay=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ry=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Py=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ly=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Iy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ny=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Oy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,By=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$y=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_S=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,SS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:Wx,alphahash_pars_fragment:Xx,alphamap_fragment:jx,alphamap_pars_fragment:Yx,alphatest_fragment:qx,alphatest_pars_fragment:Kx,aomap_fragment:$x,aomap_pars_fragment:Zx,batching_pars_vertex:Jx,batching_vertex:Qx,begin_vertex:tv,beginnormal_vertex:ev,bsdfs:nv,iridescence_fragment:iv,bumpmap_pars_fragment:sv,clipping_planes_fragment:rv,clipping_planes_pars_fragment:av,clipping_planes_pars_vertex:ov,clipping_planes_vertex:lv,color_fragment:cv,color_pars_fragment:uv,color_pars_vertex:hv,color_vertex:fv,common:dv,cube_uv_reflection_fragment:pv,defaultnormal_vertex:mv,displacementmap_pars_vertex:gv,displacementmap_vertex:_v,emissivemap_fragment:xv,emissivemap_pars_fragment:vv,colorspace_fragment:yv,colorspace_pars_fragment:Sv,envmap_fragment:Mv,envmap_common_pars_fragment:Tv,envmap_pars_fragment:bv,envmap_pars_vertex:Ev,envmap_physical_pars_fragment:Fv,envmap_vertex:Av,fog_vertex:wv,fog_pars_vertex:Cv,fog_fragment:Rv,fog_pars_fragment:Pv,gradientmap_pars_fragment:Dv,lightmap_pars_fragment:Lv,lights_lambert_fragment:Iv,lights_lambert_pars_fragment:Uv,lights_pars_begin:Nv,lights_toon_fragment:Ov,lights_toon_pars_fragment:Bv,lights_phong_fragment:Vv,lights_phong_pars_fragment:kv,lights_physical_fragment:zv,lights_physical_pars_fragment:Hv,lights_fragment_begin:Gv,lights_fragment_maps:Wv,lights_fragment_end:Xv,logdepthbuf_fragment:jv,logdepthbuf_pars_fragment:Yv,logdepthbuf_pars_vertex:qv,logdepthbuf_vertex:Kv,map_fragment:$v,map_pars_fragment:Zv,map_particle_fragment:Jv,map_particle_pars_fragment:Qv,metalnessmap_fragment:ty,metalnessmap_pars_fragment:ey,morphinstance_vertex:ny,morphcolor_vertex:iy,morphnormal_vertex:sy,morphtarget_pars_vertex:ry,morphtarget_vertex:ay,normal_fragment_begin:oy,normal_fragment_maps:ly,normal_pars_fragment:cy,normal_pars_vertex:uy,normal_vertex:hy,normalmap_pars_fragment:fy,clearcoat_normal_fragment_begin:dy,clearcoat_normal_fragment_maps:py,clearcoat_pars_fragment:my,iridescence_pars_fragment:gy,opaque_fragment:_y,packing:xy,premultiplied_alpha_fragment:vy,project_vertex:yy,dithering_fragment:Sy,dithering_pars_fragment:My,roughnessmap_fragment:Ty,roughnessmap_pars_fragment:by,shadowmap_pars_fragment:Ey,shadowmap_pars_vertex:Ay,shadowmap_vertex:wy,shadowmask_pars_fragment:Cy,skinbase_vertex:Ry,skinning_pars_vertex:Py,skinning_vertex:Dy,skinnormal_vertex:Ly,specularmap_fragment:Iy,specularmap_pars_fragment:Uy,tonemapping_fragment:Ny,tonemapping_pars_fragment:Fy,transmission_fragment:Oy,transmission_pars_fragment:By,uv_pars_fragment:Vy,uv_pars_vertex:ky,uv_vertex:zy,worldpos_vertex:Hy,background_vert:Gy,background_frag:Wy,backgroundCube_vert:Xy,backgroundCube_frag:jy,cube_vert:Yy,cube_frag:qy,depth_vert:Ky,depth_frag:$y,distance_vert:Zy,distance_frag:Jy,equirect_vert:Qy,equirect_frag:tS,linedashed_vert:eS,linedashed_frag:nS,meshbasic_vert:iS,meshbasic_frag:sS,meshlambert_vert:rS,meshlambert_frag:aS,meshmatcap_vert:oS,meshmatcap_frag:lS,meshnormal_vert:cS,meshnormal_frag:uS,meshphong_vert:hS,meshphong_frag:fS,meshphysical_vert:dS,meshphysical_frag:pS,meshtoon_vert:mS,meshtoon_frag:gS,points_vert:_S,points_frag:xS,shadow_vert:vS,shadow_frag:yS,sprite_vert:SS,sprite_frag:MS},ut={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Wn={basic:{uniforms:Ke([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Ke([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new ee(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Ke([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Ke([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Ke([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new ee(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Ke([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Ke([ut.points,ut.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Ke([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Ke([ut.common,ut.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Ke([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Ke([ut.sprite,ut.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distance:{uniforms:Ke([ut.common,ut.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distance_vert,fragmentShader:Ot.distance_frag},shadow:{uniforms:Ke([ut.lights,ut.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Wn.physical={uniforms:Ke([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const Fa={r:0,b:0,g:0},Qi=new vi,TS=new Te;function bS(n,t,e,i,s,r,a){const o=new ee(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function _(S){let T=S.isScene===!0?S.background:null;return T&&T.isTexture&&(T=(S.backgroundBlurriness>0?e:t).get(T)),T}function g(S){let T=!1;const M=_(S);M===null?p(o,l):M&&M.isColor&&(p(M,1),T=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,T){const M=_(T);M&&(M.isCubeTexture||M.mapping===bo)?(u===void 0&&(u=new ni(new la(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:rr(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Qi.copy(T.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(TS.makeRotationFromEuler(Qi)),u.material.toneMapped=jt.getTransfer(M.colorSpace)!==te,(h!==M||f!==M.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,d=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ni(new ca(2,2),new In({name:"BackgroundMaterial",uniforms:rr(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=jt.getTransfer(M.colorSpace)!==te,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,T){S.getRGB(Fa,cm(n)),i.buffers.color.setClear(Fa.r,Fa.g,Fa.b,T,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,T=1){o.set(S),l=T,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:g,addToRenderList:m,dispose:y}}function ES(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(b,P,O,N,H){let W=!1;const k=h(N,O,P);r!==k&&(r=k,c(r.object)),W=d(b,N,O,H),W&&_(b,N,O,H),H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,T(b,P,O,N),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function h(b,P,O){const N=O.wireframe===!0;let H=i[b.id];H===void 0&&(H={},i[b.id]=H);let W=H[P.id];W===void 0&&(W={},H[P.id]=W);let k=W[N];return k===void 0&&(k=f(l()),W[N]=k),k}function f(b){const P=[],O=[],N=[];for(let H=0;H<e;H++)P[H]=0,O[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:N,object:b,attributes:{},index:null}}function d(b,P,O,N){const H=r.attributes,W=P.attributes;let k=0;const F=O.getAttributes();for(const j in F)if(F[j].location>=0){const et=H[j];let lt=W[j];if(lt===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(lt=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(lt=b.instanceColor)),et===void 0||et.attribute!==lt||lt&&et.data!==lt.data)return!0;k++}return r.attributesNum!==k||r.index!==N}function _(b,P,O,N){const H={},W=P.attributes;let k=0;const F=O.getAttributes();for(const j in F)if(F[j].location>=0){let et=W[j];et===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(et=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(et=b.instanceColor));const lt={};lt.attribute=et,et&&et.data&&(lt.data=et.data),H[j]=lt,k++}r.attributes=H,r.attributesNum=k,r.index=N}function g(){const b=r.newAttributes;for(let P=0,O=b.length;P<O;P++)b[P]=0}function m(b){p(b,0)}function p(b,P){const O=r.newAttributes,N=r.enabledAttributes,H=r.attributeDivisors;O[b]=1,N[b]===0&&(n.enableVertexAttribArray(b),N[b]=1),H[b]!==P&&(n.vertexAttribDivisor(b,P),H[b]=P)}function y(){const b=r.newAttributes,P=r.enabledAttributes;for(let O=0,N=P.length;O<N;O++)P[O]!==b[O]&&(n.disableVertexAttribArray(O),P[O]=0)}function S(b,P,O,N,H,W,k){k===!0?n.vertexAttribIPointer(b,P,O,H,W):n.vertexAttribPointer(b,P,O,N,H,W)}function T(b,P,O,N){g();const H=N.attributes,W=O.getAttributes(),k=P.defaultAttributeValues;for(const F in W){const j=W[F];if(j.location>=0){let it=H[F];if(it===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(it=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(it=b.instanceColor)),it!==void 0){const et=it.normalized,lt=it.itemSize,Pt=t.get(it);if(Pt===void 0)continue;const Ut=Pt.buffer,Gt=Pt.type,Wt=Pt.bytesPerElement,q=Gt===n.INT||Gt===n.UNSIGNED_INT||it.gpuType===wu;if(it.isInterleavedBufferAttribute){const Z=it.data,gt=Z.stride,Nt=it.offset;if(Z.isInstancedInterleavedBuffer){for(let vt=0;vt<j.locationSize;vt++)p(j.location+vt,Z.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let vt=0;vt<j.locationSize;vt++)m(j.location+vt);n.bindBuffer(n.ARRAY_BUFFER,Ut);for(let vt=0;vt<j.locationSize;vt++)S(j.location+vt,lt/j.locationSize,Gt,et,gt*Wt,(Nt+lt/j.locationSize*vt)*Wt,q)}else{if(it.isInstancedBufferAttribute){for(let Z=0;Z<j.locationSize;Z++)p(j.location+Z,it.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Z=0;Z<j.locationSize;Z++)m(j.location+Z);n.bindBuffer(n.ARRAY_BUFFER,Ut);for(let Z=0;Z<j.locationSize;Z++)S(j.location+Z,lt/j.locationSize,Gt,et,lt*Wt,lt/j.locationSize*Z*Wt,q)}}else if(k!==void 0){const et=k[F];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(j.location,et);break;case 3:n.vertexAttrib3fv(j.location,et);break;case 4:n.vertexAttrib4fv(j.location,et);break;default:n.vertexAttrib1fv(j.location,et)}}}}y()}function M(){R();for(const b in i){const P=i[b];for(const O in P){const N=P[O];for(const H in N)u(N[H].object),delete N[H];delete P[O]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;const P=i[b.id];for(const O in P){const N=P[O];for(const H in N)u(N[H].object),delete N[H];delete P[O]}delete i[b.id]}function w(b){for(const P in i){const O=i[P];if(O[b.id]===void 0)continue;const N=O[b.id];for(const H in N)u(N[H].object),delete N[H];delete O[b.id]}}function R(){x(),a=!0,r!==s&&(r=s,c(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:x,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function AS(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];e.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*f[g];e.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function wS(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==kn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const R=w===_i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==_n&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==jn&&!R)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Dt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:T,maxSamples:M,samples:A}}function CS(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Li,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const y=r?0:i,S=y*4;let T=p.clippingState||null;l.value=T,T=u(_,f,S,d);for(let M=0;M!==S;++M)T[M]=e[M];p.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,T=d;S!==g;++S,T+=4)a.copy(h[S]).applyMatrix4(y,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function RS(n){let t=new WeakMap;function e(a,o){return o===Ql?a.mapping=vs:o===tc&&(a.mapping=nr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ql||o===tc)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new fm(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const Ui=4,Cf=[.125,.215,.35,.446,.526,.582],os=20,PS=256,Ar=new Ao,Rf=new ee;let fl=null,dl=0,pl=0,ml=!1;const DS=new V;class Pf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=DS}=r;fl=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=If(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(fl,dl,pl),this._renderer.xr.enabled=ml,t.scissorTest=!1,Os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vs||t.mapping===nr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fl=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:We,minFilter:We,generateMipmaps:!1,type:_i,format:kn,colorSpace:sr,depthBuffer:!1},s=Df(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Df(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=LS(r)),this._blurMaterial=US(r,t,e),this._ggxMaterial=IS(r,t,e)}return s}_compileMaterial(t){const e=new ni(new bi,t);this._renderer.compile(e,Ar)}_sceneToCubeUV(t,e,i,s,r){const l=new gn(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Rf),h.toneMapping=Kn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ni(new la,new am({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let p=!1;const y=t.background;y?y.isColor&&(m.color.copy(y),t.background=null,p=!0):(m.color.copy(Rf),p=!0);for(let S=0;S<6;S++){const T=S%3;T===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):T===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));const M=this._cubeSize;Os(s,T*M,S>2?M:0,M,M),h.setRenderTarget(s),p&&h.render(g,l),h.render(t,l)}h.toneMapping=d,h.autoClear=f,t.background=y}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===vs||t.mapping===nr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=If()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lf());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Os(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Ar)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:_}=this,g=this._sizeLods[i],m=3*g*(i>_-Ui?i-_+Ui:0),p=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=_-e,Os(r,m,p,3*g,2*g),s.setRenderTarget(r),s.render(o,Ar),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,Os(t,m,p,3*g,2*g),s.setRenderTarget(t),s.render(o,Ar)}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Kt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const f=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*os-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):os;m>os&&Dt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${os}`);const p=[];let y=0;for(let w=0;w<os;++w){const R=w/g,x=Math.exp(-R*R/2);p.push(x),w===0?y+=x:w<m&&(y+=2*x)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=_,f.mipInt.value=S-i;const T=this._sizeLods[s],M=3*T*(s>S-Ui?s-S+Ui:0),A=4*(this._cubeSize-T);Os(e,M,A,3*T,2*T),l.setRenderTarget(e),l.render(h,Ar)}}function LS(n){const t=[],e=[],i=[];let s=n;const r=n-Ui+1+Cf.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Ui?l=Cf[a-n+Ui-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,p=1,y=new Float32Array(g*_*d),S=new Float32Array(m*_*d),T=new Float32Array(p*_*d);for(let A=0;A<d;A++){const w=A%3*2/3-1,R=A>2?0:-1,x=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];y.set(x,g*_*A),S.set(f,m*_*A);const b=[A,A,A,A,A,A];T.set(b,p*_*A)}const M=new bi;M.setAttribute("position",new Zn(y,g)),M.setAttribute("uv",new Zn(S,m)),M.setAttribute("faceIndex",new Zn(T,p)),i.push(new ni(M,null)),s>Ui&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Df(n,t,e){const i=new $n(n,t,e);return i.texture.mapping=bo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Os(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function IS(n,t,e){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:PS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function US(n,t,e){const i=new Float32Array(os),s=new V(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Lf(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function If(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function wo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function NS(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ql||l===tc,u=l===vs||l===nr;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Pf(n)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Pf(n)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function FS(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&jr("WebGLRenderer: "+i+" extension not supported."),s}}}function OS(n,t,e,i){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)t.update(f[d],n.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const y=d.array;g=d.version;for(let S=0,T=y.length;S<T;S+=3){const M=y[S+0],A=y[S+1],w=y[S+2];f.push(M,A,A,w,w,M)}}else if(_!==void 0){const y=_.array;g=_.version;for(let S=0,T=y.length/3-1;S<T;S+=3){const M=S+0,A=S+1,w=S+2;f.push(M,A,A,w,w,M)}}else return;const m=new(em(f)?lm:om)(f,1);m.version=g;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function BS(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*a),e.update(d,i,1)}function c(f,d,_){_!==0&&(n.drawElementsInstanced(i,d,r,f*a,_),e.update(d,i,_))}function u(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,i,1)}function h(f,d,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,g,0,_);let p=0;for(let y=0;y<_;y++)p+=d[y]*g[y];e.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function VS(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Kt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function kS(n,t,e){const i=new WeakMap,s=new Se;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let x=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let S=0;d===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let T=o.attributes.position.count*S,M=1;T>t.maxTextureSize&&(M=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const A=new Float32Array(T*M*4*h),w=new nm(A,T,M,h);w.type=jn,w.needsUpdate=!0;const R=S*4;for(let b=0;b<h;b++){const P=m[b],O=p[b],N=y[b],H=T*M*4*b;for(let W=0;W<P.count;W++){const k=W*R;d===!0&&(s.fromBufferAttribute(P,W),A[H+k+0]=s.x,A[H+k+1]=s.y,A[H+k+2]=s.z,A[H+k+3]=0),_===!0&&(s.fromBufferAttribute(O,W),A[H+k+4]=s.x,A[H+k+5]=s.y,A[H+k+6]=s.z,A[H+k+7]=0),g===!0&&(s.fromBufferAttribute(N,W),A[H+k+8]=s.x,A[H+k+9]=s.y,A[H+k+10]=s.z,A[H+k+11]=N.itemSize===4?s.w:1)}}f={count:h,texture:w,size:new It(T,M)},i.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];const _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function zS(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const HS={[kp]:"LINEAR_TONE_MAPPING",[zp]:"REINHARD_TONE_MAPPING",[Hp]:"CINEON_TONE_MAPPING",[Gp]:"ACES_FILMIC_TONE_MAPPING",[Xp]:"AGX_TONE_MAPPING",[jp]:"NEUTRAL_TONE_MAPPING",[Wp]:"CUSTOM_TONE_MAPPING"};function GS(n,t,e,i,s){const r=new $n(t,e,{type:n,depthBuffer:i,stencilBuffer:s}),a=new $n(t,e,{type:_i,depthBuffer:!1,stencilBuffer:!1}),o=new bi;o.setAttribute("position",new gi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new gi([0,2,0,0,2,0],2));const l=new Dx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ni(o,l),u=new Ao(-1,1,1,-1,0,1);let h=null,f=null,d=!1,_,g=null,m=[],p=!1;this.setSize=function(y,S){r.setSize(y,S),a.setSize(y,S);for(let T=0;T<m.length;T++){const M=m[T];M.setSize&&M.setSize(y,S)}},this.setEffects=function(y){m=y,p=m.length>0&&m[0].isRenderPass===!0;const S=r.width,T=r.height;for(let M=0;M<m.length;M++){const A=m[M];A.setSize&&A.setSize(S,T)}},this.begin=function(y,S){if(d||y.toneMapping===Kn&&m.length===0)return!1;if(g=S,S!==null){const T=S.width,M=S.height;(r.width!==T||r.height!==M)&&this.setSize(T,M)}return p===!1&&y.setRenderTarget(r),_=y.toneMapping,y.toneMapping=Kn,!0},this.hasRenderPass=function(){return p},this.end=function(y,S){y.toneMapping=_,d=!0;let T=r,M=a;for(let A=0;A<m.length;A++){const w=m[A];if(w.enabled!==!1&&(w.render(y,M,T,S),w.needsSwap!==!1)){const R=T;T=M,M=R}}if(h!==y.outputColorSpace||f!==y.toneMapping){h=y.outputColorSpace,f=y.toneMapping,l.defines={},jt.getTransfer(h)===te&&(l.defines.SRGB_TRANSFER="");const A=HS[f];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(g),y.render(c,u),g=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const gm=new Je,Fc=new Yr(1,1),_m=new nm,xm=new lx,vm=new hm,Uf=[],Nf=[],Ff=new Float32Array(16),Of=new Float32Array(9),Bf=new Float32Array(4);function pr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Uf[s];if(r===void 0&&(r=new Float32Array(s),Uf[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Le(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ie(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Co(n,t){let e=Nf[t];e===void 0&&(e=new Int32Array(t),Nf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function WS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function XS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2fv(this.addr,t),Ie(e,t)}}function jS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;n.uniform3fv(this.addr,t),Ie(e,t)}}function YS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4fv(this.addr,t),Ie(e,t)}}function qS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,i))return;Bf.set(i),n.uniformMatrix2fv(this.addr,!1,Bf),Ie(e,i)}}function KS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,i))return;Of.set(i),n.uniformMatrix3fv(this.addr,!1,Of),Ie(e,i)}}function $S(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,i))return;Ff.set(i),n.uniformMatrix4fv(this.addr,!1,Ff),Ie(e,i)}}function ZS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function JS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2iv(this.addr,t),Ie(e,t)}}function QS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3iv(this.addr,t),Ie(e,t)}}function tM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4iv(this.addr,t),Ie(e,t)}}function eM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function nM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2uiv(this.addr,t),Ie(e,t)}}function iM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3uiv(this.addr,t),Ie(e,t)}}function sM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4uiv(this.addr,t),Ie(e,t)}}function rM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Fc.compareFunction=e.isReversedDepthBuffer()?Uu:Iu,r=Fc):r=gm,e.setTexture2D(t||r,s)}function aM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||xm,s)}function oM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||vm,s)}function lM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||_m,s)}function cM(n){switch(n){case 5126:return WS;case 35664:return XS;case 35665:return jS;case 35666:return YS;case 35674:return qS;case 35675:return KS;case 35676:return $S;case 5124:case 35670:return ZS;case 35667:case 35671:return JS;case 35668:case 35672:return QS;case 35669:case 35673:return tM;case 5125:return eM;case 36294:return nM;case 36295:return iM;case 36296:return sM;case 35678:case 36198:case 36298:case 36306:case 35682:return rM;case 35679:case 36299:case 36307:return aM;case 35680:case 36300:case 36308:case 36293:return oM;case 36289:case 36303:case 36311:case 36292:return lM}}function uM(n,t){n.uniform1fv(this.addr,t)}function hM(n,t){const e=pr(t,this.size,2);n.uniform2fv(this.addr,e)}function fM(n,t){const e=pr(t,this.size,3);n.uniform3fv(this.addr,e)}function dM(n,t){const e=pr(t,this.size,4);n.uniform4fv(this.addr,e)}function pM(n,t){const e=pr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function mM(n,t){const e=pr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function gM(n,t){const e=pr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function _M(n,t){n.uniform1iv(this.addr,t)}function xM(n,t){n.uniform2iv(this.addr,t)}function vM(n,t){n.uniform3iv(this.addr,t)}function yM(n,t){n.uniform4iv(this.addr,t)}function SM(n,t){n.uniform1uiv(this.addr,t)}function MM(n,t){n.uniform2uiv(this.addr,t)}function TM(n,t){n.uniform3uiv(this.addr,t)}function bM(n,t){n.uniform4uiv(this.addr,t)}function EM(n,t,e){const i=this.cache,s=t.length,r=Co(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Fc:a=gm;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function AM(n,t,e){const i=this.cache,s=t.length,r=Co(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||xm,r[a])}function wM(n,t,e){const i=this.cache,s=t.length,r=Co(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||vm,r[a])}function CM(n,t,e){const i=this.cache,s=t.length,r=Co(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||_m,r[a])}function RM(n){switch(n){case 5126:return uM;case 35664:return hM;case 35665:return fM;case 35666:return dM;case 35674:return pM;case 35675:return mM;case 35676:return gM;case 5124:case 35670:return _M;case 35667:case 35671:return xM;case 35668:case 35672:return vM;case 35669:case 35673:return yM;case 5125:return SM;case 36294:return MM;case 36295:return TM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return AM;case 35680:case 36300:case 36308:case 36293:return wM;case 36289:case 36303:case 36311:case 36292:return CM}}class PM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=cM(e.type)}}class DM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=RM(e.type)}}class LM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const gl=/(\w+)(\])?(\[|\.)?/g;function Vf(n,t){n.seq.push(t),n.map[t.id]=t}function IM(n,t,e){const i=n.name,s=i.length;for(gl.lastIndex=0;;){const r=gl.exec(i),a=gl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Vf(e,c===void 0?new PM(o,n,t):new DM(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new LM(o),Vf(e,h)),e=h}}}class Ja{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);IM(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function kf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const UM=37297;let NM=0;function FM(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const zf=new Ft;function OM(n){jt._getMatrix(zf,jt.workingColorSpace,n);const t=`mat3( ${zf.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(n)){case oo:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Hf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+FM(n.getShaderSource(t),o)}else return r}function BM(n,t){const e=OM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const VM={[kp]:"Linear",[zp]:"Reinhard",[Hp]:"Cineon",[Gp]:"ACESFilmic",[Xp]:"AgX",[jp]:"Neutral",[Wp]:"Custom"};function kM(n,t){const e=VM[t];return e===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Oa=new V;function zM(){jt.getLuminanceCoefficients(Oa);const n=Oa.x.toFixed(4),t=Oa.y.toFixed(4),e=Oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function GM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function WM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Lr(n){return n!==""}function Gf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const XM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oc(n){return n.replace(XM,YM)}const jM=new Map;function YM(n,t){let e=Ot[t];if(e===void 0){const i=jM.get(t);if(i!==void 0)e=Ot[i],Dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Oc(e)}const qM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xf(n){return n.replace(qM,KM)}function KM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jf(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const $M={[ja]:"SHADOWMAP_TYPE_PCF",[Dr]:"SHADOWMAP_TYPE_VSM"};function ZM(n){return $M[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const JM={[vs]:"ENVMAP_TYPE_CUBE",[nr]:"ENVMAP_TYPE_CUBE",[bo]:"ENVMAP_TYPE_CUBE_UV"};function QM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":JM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const tT={[nr]:"ENVMAP_MODE_REFRACTION"};function eT(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":tT[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const nT={[Vp]:"ENVMAP_BLENDING_MULTIPLY",[z0]:"ENVMAP_BLENDING_MIX",[H0]:"ENVMAP_BLENDING_ADD"};function iT(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":nT[n.combine]||"ENVMAP_BLENDING_NONE"}function sT(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function rT(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=ZM(e),c=QM(e),u=eT(e),h=iT(e),f=sT(e),d=HM(e),_=GM(r),g=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Lr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Lr).join(`
`),p.length>0&&(p+=`
`)):(m=[jf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),p=[jf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Kn?kM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,BM("linearToOutputTexel",e.outputColorSpace),zM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lr).join(`
`)),a=Oc(a),a=Gf(a,e),a=Wf(a,e),o=Oc(o),o=Gf(o,e),o=Wf(o,e),a=Xf(a),o=Xf(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===sf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=y+m+a,T=y+p+o,M=kf(s,s.VERTEX_SHADER,S),A=kf(s,s.FRAGMENT_SHADER,T);s.attachShader(g,M),s.attachShader(g,A),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(P){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(g)||"",N=s.getShaderInfoLog(M)||"",H=s.getShaderInfoLog(A)||"",W=O.trim(),k=N.trim(),F=H.trim();let j=!0,it=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,M,A);else{const et=Hf(s,M,"vertex"),lt=Hf(s,A,"fragment");Kt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+et+`
`+lt)}else W!==""?Dt("WebGLProgram: Program Info Log:",W):(k===""||F==="")&&(it=!1);it&&(P.diagnostics={runnable:j,programLog:W,vertexShader:{log:k,prefix:m},fragmentShader:{log:F,prefix:p}})}s.deleteShader(M),s.deleteShader(A),R=new Ja(s,g),x=WM(s,g)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let x;this.getAttributes=function(){return x===void 0&&w(this),x};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(g,UM)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=NM++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=A,this}let aT=0;class oT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new lT(t),e.set(t,i)),i}}class lT{constructor(t){this.id=aT++,this.code=t,this.usedTimes=0}}function cT(n,t,e,i,s,r,a){const o=new sm,l=new oT,c=new Set,u=[],h=new Map,f=s.logarithmicDepthBuffer;let d=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,b,P,O,N){const H=O.fog,W=N.geometry,k=x.isMeshStandardMaterial?O.environment:null,F=(x.isMeshStandardMaterial?e:t).get(x.envMap||k),j=F&&F.mapping===bo?F.image.height:null,it=_[x.type];x.precision!==null&&(d=s.getMaxPrecision(x.precision),d!==x.precision&&Dt("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const et=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,lt=et!==void 0?et.length:0;let Pt=0;W.morphAttributes.position!==void 0&&(Pt=1),W.morphAttributes.normal!==void 0&&(Pt=2),W.morphAttributes.color!==void 0&&(Pt=3);let Ut,Gt,Wt,q;if(it){const Jt=Wn[it];Ut=Jt.vertexShader,Gt=Jt.fragmentShader}else Ut=x.vertexShader,Gt=x.fragmentShader,l.update(x),Wt=l.getVertexShaderID(x),q=l.getFragmentShaderID(x);const Z=n.getRenderTarget(),gt=n.state.buffers.depth.getReversed(),Nt=N.isInstancedMesh===!0,vt=N.isBatchedMesh===!0,Yt=!!x.map,Ue=!!x.matcap,Xt=!!F,Zt=!!x.aoMap,se=!!x.lightMap,Bt=!!x.bumpMap,Ee=!!x.normalMap,D=!!x.displacementMap,Ae=!!x.emissiveMap,$t=!!x.metalnessMap,le=!!x.roughnessMap,St=x.anisotropy>0,C=x.clearcoat>0,v=x.dispersion>0,I=x.iridescence>0,Y=x.sheen>0,$=x.transmission>0,X=St&&!!x.anisotropyMap,Tt=C&&!!x.clearcoatMap,rt=C&&!!x.clearcoatNormalMap,yt=C&&!!x.clearcoatRoughnessMap,Rt=I&&!!x.iridescenceMap,tt=I&&!!x.iridescenceThicknessMap,ot=Y&&!!x.sheenColorMap,xt=Y&&!!x.sheenRoughnessMap,Mt=!!x.specularMap,at=!!x.specularColorMap,Vt=!!x.specularIntensityMap,L=$&&!!x.transmissionMap,dt=$&&!!x.thicknessMap,nt=!!x.gradientMap,pt=!!x.alphaMap,J=x.alphaTest>0,K=!!x.alphaHash,st=!!x.extensions;let Lt=Kn;x.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Lt=n.toneMapping);const ce={shaderID:it,shaderType:x.type,shaderName:x.name,vertexShader:Ut,fragmentShader:Gt,defines:x.defines,customVertexShaderID:Wt,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:vt,batchingColor:vt&&N._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&N.instanceColor!==null,instancingMorph:Nt&&N.morphTexture!==null,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:sr,alphaToCoverage:!!x.alphaToCoverage,map:Yt,matcap:Ue,envMap:Xt,envMapMode:Xt&&F.mapping,envMapCubeUVHeight:j,aoMap:Zt,lightMap:se,bumpMap:Bt,normalMap:Ee,displacementMap:D,emissiveMap:Ae,normalMapObjectSpace:Ee&&x.normalMapType===j0,normalMapTangentSpace:Ee&&x.normalMapType===X0,metalnessMap:$t,roughnessMap:le,anisotropy:St,anisotropyMap:X,clearcoat:C,clearcoatMap:Tt,clearcoatNormalMap:rt,clearcoatRoughnessMap:yt,dispersion:v,iridescence:I,iridescenceMap:Rt,iridescenceThicknessMap:tt,sheen:Y,sheenColorMap:ot,sheenRoughnessMap:xt,specularMap:Mt,specularColorMap:at,specularIntensityMap:Vt,transmission:$,transmissionMap:L,thicknessMap:dt,gradientMap:nt,opaque:x.transparent===!1&&x.blending===Ks&&x.alphaToCoverage===!1,alphaMap:pt,alphaTest:J,alphaHash:K,combine:x.combine,mapUv:Yt&&g(x.map.channel),aoMapUv:Zt&&g(x.aoMap.channel),lightMapUv:se&&g(x.lightMap.channel),bumpMapUv:Bt&&g(x.bumpMap.channel),normalMapUv:Ee&&g(x.normalMap.channel),displacementMapUv:D&&g(x.displacementMap.channel),emissiveMapUv:Ae&&g(x.emissiveMap.channel),metalnessMapUv:$t&&g(x.metalnessMap.channel),roughnessMapUv:le&&g(x.roughnessMap.channel),anisotropyMapUv:X&&g(x.anisotropyMap.channel),clearcoatMapUv:Tt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:rt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:xt&&g(x.sheenRoughnessMap.channel),specularMapUv:Mt&&g(x.specularMap.channel),specularColorMapUv:at&&g(x.specularColorMap.channel),specularIntensityMapUv:Vt&&g(x.specularIntensityMap.channel),transmissionMapUv:L&&g(x.transmissionMap.channel),thicknessMapUv:dt&&g(x.thicknessMap.channel),alphaMapUv:pt&&g(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ee||St),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(Yt||pt),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:gt,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:Pt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Yt&&x.map.isVideoTexture===!0&&jt.getTransfer(x.map.colorSpace)===te,decodeVideoTextureEmissive:Ae&&x.emissiveMap.isVideoTexture===!0&&jt.getTransfer(x.emissiveMap.colorSpace)===te,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===fi,flipSided:x.side===rn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:st&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&x.extensions.multiDraw===!0||vt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ce.vertexUv1s=c.has(1),ce.vertexUv2s=c.has(2),ce.vertexUv3s=c.has(3),c.clear(),ce}function p(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)b.push(P),b.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(y(b,x),S(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function y(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function S(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),x.push(o.mask)}function T(x){const b=_[x.type];let P;if(b){const O=Wn[b];P=Sx.clone(O.uniforms)}else P=x.uniforms;return P}function M(x,b){let P=h.get(b);return P!==void 0?++P.usedTimes:(P=new rT(n,b,x,r),u.push(P),h.set(b,P)),P}function A(x){if(--x.usedTimes===0){const b=u.indexOf(x);u[b]=u[u.length-1],u.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){l.remove(x)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:M,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:R}}function uT(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function hT(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Yf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function qf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h,f,d,_,g,m){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},n[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),t++,p}function o(h,f,d,_,g,m){const p=a(h,f,d,_,g,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(h,f,d,_,g,m){const p=a(h,f,d,_,g,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||hT),i.length>1&&i.sort(f||Yf),s.length>1&&s.sort(f||Yf)}function u(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function fT(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new qf,n.set(i,[a])):s>=r.length?(a=new qf,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function dT(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new ee};break;case"SpotLight":e={position:new V,direction:new V,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new V,halfWidth:new V,halfHeight:new V};break}return n[t.id]=e,e}}}function pT(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let mT=0;function gT(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function _T(n){const t=new dT,e=pT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const s=new V,r=new Te,a=new Te;function o(c){let u=0,h=0,f=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,y=0,S=0,T=0,M=0,A=0,w=0;c.sort(gT);for(let x=0,b=c.length;x<b;x++){const P=c[x],O=P.color,N=P.intensity,H=P.distance;let W=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ir?W=P.shadow.map.texture:W=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=O.r*N,h+=O.g*N,f+=O.b*N;else if(P.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(P.sh.coefficients[k],N);w++}else if(P.isDirectionalLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const F=P.shadow,j=e.get(P);j.shadowIntensity=F.intensity,j.shadowBias=F.bias,j.shadowNormalBias=F.normalBias,j.shadowRadius=F.radius,j.shadowMapSize=F.mapSize,i.directionalShadow[d]=j,i.directionalShadowMap[d]=W,i.directionalShadowMatrix[d]=P.shadow.matrix,y++}i.directional[d]=k,d++}else if(P.isSpotLight){const k=t.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(O).multiplyScalar(N),k.distance=H,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,i.spot[g]=k;const F=P.shadow;if(P.map&&(i.spotLightMap[M]=P.map,M++,F.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[g]=F.matrix,P.castShadow){const j=e.get(P);j.shadowIntensity=F.intensity,j.shadowBias=F.bias,j.shadowNormalBias=F.normalBias,j.shadowRadius=F.radius,j.shadowMapSize=F.mapSize,i.spotShadow[g]=j,i.spotShadowMap[g]=W,T++}g++}else if(P.isRectAreaLight){const k=t.get(P);k.color.copy(O).multiplyScalar(N),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=k,m++}else if(P.isPointLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const F=P.shadow,j=e.get(P);j.shadowIntensity=F.intensity,j.shadowBias=F.bias,j.shadowNormalBias=F.normalBias,j.shadowRadius=F.radius,j.shadowMapSize=F.mapSize,j.shadowCameraNear=F.camera.near,j.shadowCameraFar=F.camera.far,i.pointShadow[_]=j,i.pointShadowMap[_]=W,i.pointShadowMatrix[_]=P.shadow.matrix,S++}i.point[_]=k,_++}else if(P.isHemisphereLight){const k=t.get(P);k.skyColor.copy(P.color).multiplyScalar(N),k.groundColor.copy(P.groundColor).multiplyScalar(N),i.hemi[p]=k,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==d||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==y||R.numPointShadows!==S||R.numSpotShadows!==T||R.numSpotMaps!==M||R.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=T+M-A,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,R.directionalLength=d,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=y,R.numPointShadows=S,R.numSpotShadows=T,R.numSpotMaps=M,R.numLightProbes=w,i.version=mT++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const S=c[p];if(S.isDirectionalLight){const T=i.directional[h];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),h++}else if(S.isSpotLight){const T=i.spot[d];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const T=i.point[f];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const T=i.hemi[g];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Kf(n){const t=new _T(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function xT(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Kf(n),t.set(s,[o])):r>=a.length?(o=new Kf(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const vT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ST=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],MT=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],$f=new Te,wr=new V,_l=new V;function TT(n,t,e){let i=new Ou;const s=new It,r=new It,a=new Se,o=new Lx,l=new Ix,c={},u=e.maxTextureSize,h={[ti]:rn,[rn]:ti,[fi]:fi},f=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:vT,fragmentShader:yT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new bi;_.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ni(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ja;let p=this.type;this.render=function(A,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;A.type===M0&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=ja);const x=n.getRenderTarget(),b=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),O=n.state;O.setBlending(pi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const N=p!==this.type;N&&w.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(W=>W.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,W=A.length;H<W;H++){const k=A[H],F=k.shadow;if(F===void 0){Dt("WebGLShadowMap:",k,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const j=F.getFrameExtents();if(s.multiply(j),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,F.mapSize.y=r.y)),F.map===null||N===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Dr){if(k.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new $n(s.x,s.y,{format:ir,type:_i,minFilter:We,magFilter:We,generateMipmaps:!1}),F.map.texture.name=k.name+".shadowMap",F.map.depthTexture=new Yr(s.x,s.y,jn),F.map.depthTexture.name=k.name+".shadowMapDepth",F.map.depthTexture.format=xi,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ve,F.map.depthTexture.magFilter=Ve}else{k.isPointLight?(F.map=new fm(s.x),F.map.depthTexture=new Px(s.x,ei)):(F.map=new $n(s.x,s.y),F.map.depthTexture=new Yr(s.x,s.y,ei)),F.map.depthTexture.name=k.name+".shadowMap",F.map.depthTexture.format=xi;const et=n.state.buffers.depth.getReversed();this.type===ja?(F.map.depthTexture.compareFunction=et?Uu:Iu,F.map.depthTexture.minFilter=We,F.map.depthTexture.magFilter=We):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ve,F.map.depthTexture.magFilter=Ve)}F.camera.updateProjectionMatrix()}const it=F.map.isWebGLCubeRenderTarget?6:1;for(let et=0;et<it;et++){if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,et),n.clear();else{et===0&&(n.setRenderTarget(F.map),n.clear());const lt=F.getViewport(et);a.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),O.viewport(a)}if(k.isPointLight){const lt=F.camera,Pt=F.matrix,Ut=k.distance||lt.far;Ut!==lt.far&&(lt.far=Ut,lt.updateProjectionMatrix()),wr.setFromMatrixPosition(k.matrixWorld),lt.position.copy(wr),_l.copy(lt.position),_l.add(ST[et]),lt.up.copy(MT[et]),lt.lookAt(_l),lt.updateMatrixWorld(),Pt.makeTranslation(-wr.x,-wr.y,-wr.z),$f.multiplyMatrices(lt.projectionMatrix,lt.matrixWorldInverse),F._frustum.setFromProjectionMatrix($f,lt.coordinateSystem,lt.reversedDepth)}else F.updateMatrices(k);i=F.getFrustum(),T(w,R,F.camera,k,this.type)}F.isPointLightShadow!==!0&&this.type===Dr&&y(F,R),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(x,b,P)};function y(A,w){const R=t.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new $n(s.x,s.y,{format:ir,type:_i})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(w,null,R,f,g,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(w,null,R,d,g,null)}function S(A,w,R,x){let b=null;const P=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)b=P;else if(b=R.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const O=b.uuid,N=w.uuid;let H=c[O];H===void 0&&(H={},c[O]=H);let W=H[N];W===void 0&&(W=b.clone(),H[N]=W,w.addEventListener("dispose",M)),b=W}if(b.visible=w.visible,b.wireframe=w.wireframe,x===Dr?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:h[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const O=n.properties.get(b);O.light=R}return b}function T(A,w,R,x,b){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Dr)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const N=t.update(A),H=A.material;if(Array.isArray(H)){const W=N.groups;for(let k=0,F=W.length;k<F;k++){const j=W[k],it=H[j.materialIndex];if(it&&it.visible){const et=S(A,it,x,b);A.onBeforeShadow(n,A,w,R,N,et,j),n.renderBufferDirect(R,null,N,et,A,j),A.onAfterShadow(n,A,w,R,N,et,j)}}}else if(H.visible){const W=S(A,H,x,b);A.onBeforeShadow(n,A,w,R,N,W,null),n.renderBufferDirect(R,null,N,W,A,null),A.onAfterShadow(n,A,w,R,N,W,null)}}const O=A.children;for(let N=0,H=O.length;N<H;N++)T(O[N],w,R,x,b)}function M(A){A.target.removeEventListener("dispose",M);for(const R in c){const x=c[R],b=A.target.uuid;b in x&&(x[b].dispose(),delete x[b])}}}const bT={[jl]:Yl,[ql]:Zl,[Kl]:Jl,[er]:$l,[Yl]:jl,[Zl]:ql,[Jl]:Kl,[$l]:er};function ET(n,t){function e(){let L=!1;const dt=new Se;let nt=null;const pt=new Se(0,0,0,0);return{setMask:function(J){nt!==J&&!L&&(n.colorMask(J,J,J,J),nt=J)},setLocked:function(J){L=J},setClear:function(J,K,st,Lt,ce){ce===!0&&(J*=Lt,K*=Lt,st*=Lt),dt.set(J,K,st,Lt),pt.equals(dt)===!1&&(n.clearColor(J,K,st,Lt),pt.copy(dt))},reset:function(){L=!1,nt=null,pt.set(-1,0,0,0)}}}function i(){let L=!1,dt=!1,nt=null,pt=null,J=null;return{setReversed:function(K){if(dt!==K){const st=t.get("EXT_clip_control");K?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT),dt=K;const Lt=J;J=null,this.setClear(Lt)}},getReversed:function(){return dt},setTest:function(K){K?Z(n.DEPTH_TEST):gt(n.DEPTH_TEST)},setMask:function(K){nt!==K&&!L&&(n.depthMask(K),nt=K)},setFunc:function(K){if(dt&&(K=bT[K]),pt!==K){switch(K){case jl:n.depthFunc(n.NEVER);break;case Yl:n.depthFunc(n.ALWAYS);break;case ql:n.depthFunc(n.LESS);break;case er:n.depthFunc(n.LEQUAL);break;case Kl:n.depthFunc(n.EQUAL);break;case $l:n.depthFunc(n.GEQUAL);break;case Zl:n.depthFunc(n.GREATER);break;case Jl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pt=K}},setLocked:function(K){L=K},setClear:function(K){J!==K&&(dt&&(K=1-K),n.clearDepth(K),J=K)},reset:function(){L=!1,nt=null,pt=null,J=null,dt=!1}}}function s(){let L=!1,dt=null,nt=null,pt=null,J=null,K=null,st=null,Lt=null,ce=null;return{setTest:function(Jt){L||(Jt?Z(n.STENCIL_TEST):gt(n.STENCIL_TEST))},setMask:function(Jt){dt!==Jt&&!L&&(n.stencilMask(Jt),dt=Jt)},setFunc:function(Jt,zn,si){(nt!==Jt||pt!==zn||J!==si)&&(n.stencilFunc(Jt,zn,si),nt=Jt,pt=zn,J=si)},setOp:function(Jt,zn,si){(K!==Jt||st!==zn||Lt!==si)&&(n.stencilOp(Jt,zn,si),K=Jt,st=zn,Lt=si)},setLocked:function(Jt){L=Jt},setClear:function(Jt){ce!==Jt&&(n.clearStencil(Jt),ce=Jt)},reset:function(){L=!1,dt=null,nt=null,pt=null,J=null,K=null,st=null,Lt=null,ce=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,y=null,S=null,T=null,M=null,A=null,w=new ee(0,0,0),R=0,x=!1,b=null,P=null,O=null,N=null,H=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,F=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(j)[1]),k=F>=1):j.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),k=F>=2);let it=null,et={};const lt=n.getParameter(n.SCISSOR_BOX),Pt=n.getParameter(n.VIEWPORT),Ut=new Se().fromArray(lt),Gt=new Se().fromArray(Pt);function Wt(L,dt,nt,pt){const J=new Uint8Array(4),K=n.createTexture();n.bindTexture(L,K),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let st=0;st<nt;st++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,pt,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(dt+st,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return K}const q={};q[n.TEXTURE_2D]=Wt(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=Wt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=Wt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=Wt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(n.DEPTH_TEST),a.setFunc(er),Bt(!1),Ee(Zh),Z(n.CULL_FACE),Zt(pi);function Z(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function gt(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Nt(L,dt){return h[L]!==dt?(n.bindFramebuffer(L,dt),h[L]=dt,L===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=dt),L===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function vt(L,dt){let nt=d,pt=!1;if(L){nt=f.get(dt),nt===void 0&&(nt=[],f.set(dt,nt));const J=L.textures;if(nt.length!==J.length||nt[0]!==n.COLOR_ATTACHMENT0){for(let K=0,st=J.length;K<st;K++)nt[K]=n.COLOR_ATTACHMENT0+K;nt.length=J.length,pt=!0}}else nt[0]!==n.BACK&&(nt[0]=n.BACK,pt=!0);pt&&n.drawBuffers(nt)}function Yt(L){return _!==L?(n.useProgram(L),_=L,!0):!1}const Ue={[as]:n.FUNC_ADD,[b0]:n.FUNC_SUBTRACT,[E0]:n.FUNC_REVERSE_SUBTRACT};Ue[A0]=n.MIN,Ue[w0]=n.MAX;const Xt={[C0]:n.ZERO,[R0]:n.ONE,[P0]:n.SRC_COLOR,[Wl]:n.SRC_ALPHA,[F0]:n.SRC_ALPHA_SATURATE,[U0]:n.DST_COLOR,[L0]:n.DST_ALPHA,[D0]:n.ONE_MINUS_SRC_COLOR,[Xl]:n.ONE_MINUS_SRC_ALPHA,[N0]:n.ONE_MINUS_DST_COLOR,[I0]:n.ONE_MINUS_DST_ALPHA,[O0]:n.CONSTANT_COLOR,[B0]:n.ONE_MINUS_CONSTANT_COLOR,[V0]:n.CONSTANT_ALPHA,[k0]:n.ONE_MINUS_CONSTANT_ALPHA};function Zt(L,dt,nt,pt,J,K,st,Lt,ce,Jt){if(L===pi){g===!0&&(gt(n.BLEND),g=!1);return}if(g===!1&&(Z(n.BLEND),g=!0),L!==T0){if(L!==m||Jt!==x){if((p!==as||T!==as)&&(n.blendEquation(n.FUNC_ADD),p=as,T=as),Jt)switch(L){case Ks:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jh:n.blendFunc(n.ONE,n.ONE);break;case Qh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Kt("WebGLState: Invalid blending: ",L);break}else switch(L){case Ks:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Qh:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tf:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",L);break}y=null,S=null,M=null,A=null,w.set(0,0,0),R=0,m=L,x=Jt}return}J=J||dt,K=K||nt,st=st||pt,(dt!==p||J!==T)&&(n.blendEquationSeparate(Ue[dt],Ue[J]),p=dt,T=J),(nt!==y||pt!==S||K!==M||st!==A)&&(n.blendFuncSeparate(Xt[nt],Xt[pt],Xt[K],Xt[st]),y=nt,S=pt,M=K,A=st),(Lt.equals(w)===!1||ce!==R)&&(n.blendColor(Lt.r,Lt.g,Lt.b,ce),w.copy(Lt),R=ce),m=L,x=!1}function se(L,dt){L.side===fi?gt(n.CULL_FACE):Z(n.CULL_FACE);let nt=L.side===rn;dt&&(nt=!nt),Bt(nt),L.blending===Ks&&L.transparent===!1?Zt(pi):Zt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const pt=L.stencilWrite;o.setTest(pt),pt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ae(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):gt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(L){b!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),b=L)}function Ee(L){L!==y0?(Z(n.CULL_FACE),L!==P&&(L===Zh?n.cullFace(n.BACK):L===S0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):gt(n.CULL_FACE),P=L}function D(L){L!==O&&(k&&n.lineWidth(L),O=L)}function Ae(L,dt,nt){L?(Z(n.POLYGON_OFFSET_FILL),(N!==dt||H!==nt)&&(n.polygonOffset(dt,nt),N=dt,H=nt)):gt(n.POLYGON_OFFSET_FILL)}function $t(L){L?Z(n.SCISSOR_TEST):gt(n.SCISSOR_TEST)}function le(L){L===void 0&&(L=n.TEXTURE0+W-1),it!==L&&(n.activeTexture(L),it=L)}function St(L,dt,nt){nt===void 0&&(it===null?nt=n.TEXTURE0+W-1:nt=it);let pt=et[nt];pt===void 0&&(pt={type:void 0,texture:void 0},et[nt]=pt),(pt.type!==L||pt.texture!==dt)&&(it!==nt&&(n.activeTexture(nt),it=nt),n.bindTexture(L,dt||q[L]),pt.type=L,pt.texture=dt)}function C(){const L=et[it];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(L){Kt("WebGLState:",L)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(L){Kt("WebGLState:",L)}}function Y(){try{n.texSubImage2D(...arguments)}catch(L){Kt("WebGLState:",L)}}function $(){try{n.texSubImage3D(...arguments)}catch(L){Kt("WebGLState:",L)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Kt("WebGLState:",L)}}function Tt(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Kt("WebGLState:",L)}}function rt(){try{n.texStorage2D(...arguments)}catch(L){Kt("WebGLState:",L)}}function yt(){try{n.texStorage3D(...arguments)}catch(L){Kt("WebGLState:",L)}}function Rt(){try{n.texImage2D(...arguments)}catch(L){Kt("WebGLState:",L)}}function tt(){try{n.texImage3D(...arguments)}catch(L){Kt("WebGLState:",L)}}function ot(L){Ut.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Ut.copy(L))}function xt(L){Gt.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Gt.copy(L))}function Mt(L,dt){let nt=c.get(dt);nt===void 0&&(nt=new WeakMap,c.set(dt,nt));let pt=nt.get(L);pt===void 0&&(pt=n.getUniformBlockIndex(dt,L.name),nt.set(L,pt))}function at(L,dt){const pt=c.get(dt).get(L);l.get(dt)!==pt&&(n.uniformBlockBinding(dt,pt,L.__bindingPointIndex),l.set(dt,pt))}function Vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},it=null,et={},h={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,y=null,S=null,T=null,M=null,A=null,w=new ee(0,0,0),R=0,x=!1,b=null,P=null,O=null,N=null,H=null,Ut.set(0,0,n.canvas.width,n.canvas.height),Gt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:gt,bindFramebuffer:Nt,drawBuffers:vt,useProgram:Yt,setBlending:Zt,setMaterial:se,setFlipSided:Bt,setCullFace:Ee,setLineWidth:D,setPolygonOffset:Ae,setScissorTest:$t,activeTexture:le,bindTexture:St,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:I,texImage2D:Rt,texImage3D:tt,updateUBOMapping:Mt,uniformBlockBinding:at,texStorage2D:rt,texStorage3D:yt,texSubImage2D:Y,texSubImage3D:$,compressedTexSubImage2D:X,compressedTexSubImage3D:Tt,scissor:ot,viewport:xt,reset:Vt}}function AT(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,v){return d?new OffscreenCanvas(C,v):co("canvas")}function g(C,v,I){let Y=1;const $=St(C);if(($.width>I||$.height>I)&&(Y=I/Math.max($.width,$.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const X=Math.floor(Y*$.width),Tt=Math.floor(Y*$.height);h===void 0&&(h=_(X,Tt));const rt=v?_(X,Tt):h;return rt.width=X,rt.height=Tt,rt.getContext("2d").drawImage(C,0,0,X,Tt),Dt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+X+"x"+Tt+")."),rt}else return"data"in C&&Dt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(C,v,I,Y,$=!1){if(C!==null){if(n[C]!==void 0)return n[C];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let X=v;if(v===n.RED&&(I===n.FLOAT&&(X=n.R32F),I===n.HALF_FLOAT&&(X=n.R16F),I===n.UNSIGNED_BYTE&&(X=n.R8)),v===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.R8UI),I===n.UNSIGNED_SHORT&&(X=n.R16UI),I===n.UNSIGNED_INT&&(X=n.R32UI),I===n.BYTE&&(X=n.R8I),I===n.SHORT&&(X=n.R16I),I===n.INT&&(X=n.R32I)),v===n.RG&&(I===n.FLOAT&&(X=n.RG32F),I===n.HALF_FLOAT&&(X=n.RG16F),I===n.UNSIGNED_BYTE&&(X=n.RG8)),v===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.RG8UI),I===n.UNSIGNED_SHORT&&(X=n.RG16UI),I===n.UNSIGNED_INT&&(X=n.RG32UI),I===n.BYTE&&(X=n.RG8I),I===n.SHORT&&(X=n.RG16I),I===n.INT&&(X=n.RG32I)),v===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.RGB8UI),I===n.UNSIGNED_SHORT&&(X=n.RGB16UI),I===n.UNSIGNED_INT&&(X=n.RGB32UI),I===n.BYTE&&(X=n.RGB8I),I===n.SHORT&&(X=n.RGB16I),I===n.INT&&(X=n.RGB32I)),v===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),I===n.UNSIGNED_INT&&(X=n.RGBA32UI),I===n.BYTE&&(X=n.RGBA8I),I===n.SHORT&&(X=n.RGBA16I),I===n.INT&&(X=n.RGBA32I)),v===n.RGB&&(I===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),I===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),v===n.RGBA){const Tt=$?oo:jt.getTransfer(Y);I===n.FLOAT&&(X=n.RGBA32F),I===n.HALF_FLOAT&&(X=n.RGBA16F),I===n.UNSIGNED_BYTE&&(X=Tt===te?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function T(C,v){let I;return C?v===null||v===ei||v===Xr?I=n.DEPTH24_STENCIL8:v===jn?I=n.DEPTH32F_STENCIL8:v===Wr&&(I=n.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ei||v===Xr?I=n.DEPTH_COMPONENT24:v===jn?I=n.DEPTH_COMPONENT32F:v===Wr&&(I=n.DEPTH_COMPONENT16),I}function M(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ve&&C.minFilter!==We?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function A(C){const v=C.target;v.removeEventListener("dispose",A),R(v),v.isVideoTexture&&u.delete(v)}function w(C){const v=C.target;v.removeEventListener("dispose",w),b(v)}function R(C){const v=i.get(C);if(v.__webglInit===void 0)return;const I=C.source,Y=f.get(I);if(Y){const $=Y[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&x(C),Object.keys(Y).length===0&&f.delete(I)}i.remove(C)}function x(C){const v=i.get(C);n.deleteTexture(v.__webglTexture);const I=C.source,Y=f.get(I);delete Y[v.__cacheKey],a.memory.textures--}function b(C){const v=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let $=0;$<v.__webglFramebuffer[Y].length;$++)n.deleteFramebuffer(v.__webglFramebuffer[Y][$]);else n.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)n.deleteFramebuffer(v.__webglFramebuffer[Y]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const I=C.textures;for(let Y=0,$=I.length;Y<$;Y++){const X=i.get(I[Y]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(I[Y])}i.remove(C)}let P=0;function O(){P=0}function N(){const C=P;return C>=s.maxTextures&&Dt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function H(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function W(C,v){const I=i.get(C);if(C.isVideoTexture&&$t(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&I.__version!==C.version){const Y=C.image;if(Y===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{q(I,C,v);return}}else C.isExternalTexture&&(I.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+v)}function k(C,v){const I=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){q(I,C,v);return}else C.isExternalTexture&&(I.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+v)}function F(C,v){const I=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){q(I,C,v);return}e.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+v)}function j(C,v){const I=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&I.__version!==C.version){Z(I,C,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+v)}const it={[ec]:n.REPEAT,[di]:n.CLAMP_TO_EDGE,[nc]:n.MIRRORED_REPEAT},et={[Ve]:n.NEAREST,[G0]:n.NEAREST_MIPMAP_NEAREST,[_a]:n.NEAREST_MIPMAP_LINEAR,[We]:n.LINEAR,[zo]:n.LINEAR_MIPMAP_NEAREST,[ls]:n.LINEAR_MIPMAP_LINEAR},lt={[Y0]:n.NEVER,[J0]:n.ALWAYS,[q0]:n.LESS,[Iu]:n.LEQUAL,[K0]:n.EQUAL,[Uu]:n.GEQUAL,[$0]:n.GREATER,[Z0]:n.NOTEQUAL};function Pt(C,v){if(v.type===jn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===We||v.magFilter===zo||v.magFilter===_a||v.magFilter===ls||v.minFilter===We||v.minFilter===zo||v.minFilter===_a||v.minFilter===ls)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,it[v.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,it[v.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,it[v.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,et[v.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,et[v.minFilter]),v.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,lt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ve||v.minFilter!==_a&&v.minFilter!==ls||v.type===jn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const I=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ut(C,v){let I=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",A));const Y=v.source;let $=f.get(Y);$===void 0&&($={},f.set(Y,$));const X=H(v);if(X!==C.__cacheKey){$[X]===void 0&&($[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,I=!0),$[X].usedTimes++;const Tt=$[C.__cacheKey];Tt!==void 0&&($[C.__cacheKey].usedTimes--,Tt.usedTimes===0&&x(v)),C.__cacheKey=X,C.__webglTexture=$[X].texture}return I}function Gt(C,v,I){return Math.floor(Math.floor(C/I)/v)}function Wt(C,v,I,Y){const X=C.updateRanges;if(X.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,I,Y,v.data);else{X.sort((tt,ot)=>tt.start-ot.start);let Tt=0;for(let tt=1;tt<X.length;tt++){const ot=X[Tt],xt=X[tt],Mt=ot.start+ot.count,at=Gt(xt.start,v.width,4),Vt=Gt(ot.start,v.width,4);xt.start<=Mt+1&&at===Vt&&Gt(xt.start+xt.count-1,v.width,4)===at?ot.count=Math.max(ot.count,xt.start+xt.count-ot.start):(++Tt,X[Tt]=xt)}X.length=Tt+1;const rt=n.getParameter(n.UNPACK_ROW_LENGTH),yt=n.getParameter(n.UNPACK_SKIP_PIXELS),Rt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let tt=0,ot=X.length;tt<ot;tt++){const xt=X[tt],Mt=Math.floor(xt.start/4),at=Math.ceil(xt.count/4),Vt=Mt%v.width,L=Math.floor(Mt/v.width),dt=at,nt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Vt),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),e.texSubImage2D(n.TEXTURE_2D,0,Vt,L,dt,nt,I,Y,v.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,rt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,yt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Rt)}}function q(C,v,I){let Y=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=n.TEXTURE_3D);const $=Ut(C,v),X=v.source;e.bindTexture(Y,C.__webglTexture,n.TEXTURE0+I);const Tt=i.get(X);if(X.version!==Tt.__version||$===!0){e.activeTexture(n.TEXTURE0+I);const rt=jt.getPrimaries(jt.workingColorSpace),yt=v.colorSpace===Ii?null:jt.getPrimaries(v.colorSpace),Rt=v.colorSpace===Ii||rt===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let tt=g(v.image,!1,s.maxTextureSize);tt=le(v,tt);const ot=r.convert(v.format,v.colorSpace),xt=r.convert(v.type);let Mt=S(v.internalFormat,ot,xt,v.colorSpace,v.isVideoTexture);Pt(Y,v);let at;const Vt=v.mipmaps,L=v.isVideoTexture!==!0,dt=Tt.__version===void 0||$===!0,nt=X.dataReady,pt=M(v,tt);if(v.isDepthTexture)Mt=T(v.format===cs,v.type),dt&&(L?e.texStorage2D(n.TEXTURE_2D,1,Mt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,Mt,tt.width,tt.height,0,ot,xt,null));else if(v.isDataTexture)if(Vt.length>0){L&&dt&&e.texStorage2D(n.TEXTURE_2D,pt,Mt,Vt[0].width,Vt[0].height);for(let J=0,K=Vt.length;J<K;J++)at=Vt[J],L?nt&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,at.width,at.height,ot,xt,at.data):e.texImage2D(n.TEXTURE_2D,J,Mt,at.width,at.height,0,ot,xt,at.data);v.generateMipmaps=!1}else L?(dt&&e.texStorage2D(n.TEXTURE_2D,pt,Mt,tt.width,tt.height),nt&&Wt(v,tt,ot,xt)):e.texImage2D(n.TEXTURE_2D,0,Mt,tt.width,tt.height,0,ot,xt,tt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,pt,Mt,Vt[0].width,Vt[0].height,tt.depth);for(let J=0,K=Vt.length;J<K;J++)if(at=Vt[J],v.format!==kn)if(ot!==null)if(L){if(nt)if(v.layerUpdates.size>0){const st=wf(at.width,at.height,v.format,v.type);for(const Lt of v.layerUpdates){const ce=at.data.subarray(Lt*st/at.data.BYTES_PER_ELEMENT,(Lt+1)*st/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Lt,at.width,at.height,1,ot,ce)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,at.width,at.height,tt.depth,ot,at.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Mt,at.width,at.height,tt.depth,0,at.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?nt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,at.width,at.height,tt.depth,ot,xt,at.data):e.texImage3D(n.TEXTURE_2D_ARRAY,J,Mt,at.width,at.height,tt.depth,0,ot,xt,at.data)}else{L&&dt&&e.texStorage2D(n.TEXTURE_2D,pt,Mt,Vt[0].width,Vt[0].height);for(let J=0,K=Vt.length;J<K;J++)at=Vt[J],v.format!==kn?ot!==null?L?nt&&e.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,at.width,at.height,ot,at.data):e.compressedTexImage2D(n.TEXTURE_2D,J,Mt,at.width,at.height,0,at.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?nt&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,at.width,at.height,ot,xt,at.data):e.texImage2D(n.TEXTURE_2D,J,Mt,at.width,at.height,0,ot,xt,at.data)}else if(v.isDataArrayTexture)if(L){if(dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,pt,Mt,tt.width,tt.height,tt.depth),nt)if(v.layerUpdates.size>0){const J=wf(tt.width,tt.height,v.format,v.type);for(const K of v.layerUpdates){const st=tt.data.subarray(K*J/tt.data.BYTES_PER_ELEMENT,(K+1)*J/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,tt.width,tt.height,1,ot,xt,st)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ot,xt,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Mt,tt.width,tt.height,tt.depth,0,ot,xt,tt.data);else if(v.isData3DTexture)L?(dt&&e.texStorage3D(n.TEXTURE_3D,pt,Mt,tt.width,tt.height,tt.depth),nt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ot,xt,tt.data)):e.texImage3D(n.TEXTURE_3D,0,Mt,tt.width,tt.height,tt.depth,0,ot,xt,tt.data);else if(v.isFramebufferTexture){if(dt)if(L)e.texStorage2D(n.TEXTURE_2D,pt,Mt,tt.width,tt.height);else{let J=tt.width,K=tt.height;for(let st=0;st<pt;st++)e.texImage2D(n.TEXTURE_2D,st,Mt,J,K,0,ot,xt,null),J>>=1,K>>=1}}else if(Vt.length>0){if(L&&dt){const J=St(Vt[0]);e.texStorage2D(n.TEXTURE_2D,pt,Mt,J.width,J.height)}for(let J=0,K=Vt.length;J<K;J++)at=Vt[J],L?nt&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,ot,xt,at):e.texImage2D(n.TEXTURE_2D,J,Mt,ot,xt,at);v.generateMipmaps=!1}else if(L){if(dt){const J=St(tt);e.texStorage2D(n.TEXTURE_2D,pt,Mt,J.width,J.height)}nt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot,xt,tt)}else e.texImage2D(n.TEXTURE_2D,0,Mt,ot,xt,tt);m(v)&&p(Y),Tt.__version=X.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Z(C,v,I){if(v.image.length!==6)return;const Y=Ut(C,v),$=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+I);const X=i.get($);if($.version!==X.__version||Y===!0){e.activeTexture(n.TEXTURE0+I);const Tt=jt.getPrimaries(jt.workingColorSpace),rt=v.colorSpace===Ii?null:jt.getPrimaries(v.colorSpace),yt=v.colorSpace===Ii||Tt===rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Rt=v.isCompressedTexture||v.image[0].isCompressedTexture,tt=v.image[0]&&v.image[0].isDataTexture,ot=[];for(let K=0;K<6;K++)!Rt&&!tt?ot[K]=g(v.image[K],!0,s.maxCubemapSize):ot[K]=tt?v.image[K].image:v.image[K],ot[K]=le(v,ot[K]);const xt=ot[0],Mt=r.convert(v.format,v.colorSpace),at=r.convert(v.type),Vt=S(v.internalFormat,Mt,at,v.colorSpace),L=v.isVideoTexture!==!0,dt=X.__version===void 0||Y===!0,nt=$.dataReady;let pt=M(v,xt);Pt(n.TEXTURE_CUBE_MAP,v);let J;if(Rt){L&&dt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,Vt,xt.width,xt.height);for(let K=0;K<6;K++){J=ot[K].mipmaps;for(let st=0;st<J.length;st++){const Lt=J[st];v.format!==kn?Mt!==null?L?nt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,st,0,0,Lt.width,Lt.height,Mt,Lt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,st,Vt,Lt.width,Lt.height,0,Lt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,st,0,0,Lt.width,Lt.height,Mt,at,Lt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,st,Vt,Lt.width,Lt.height,0,Mt,at,Lt.data)}}}else{if(J=v.mipmaps,L&&dt){J.length>0&&pt++;const K=St(ot[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,Vt,K.width,K.height)}for(let K=0;K<6;K++)if(tt){L?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ot[K].width,ot[K].height,Mt,at,ot[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Vt,ot[K].width,ot[K].height,0,Mt,at,ot[K].data);for(let st=0;st<J.length;st++){const ce=J[st].image[K].image;L?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,st+1,0,0,ce.width,ce.height,Mt,at,ce.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,st+1,Vt,ce.width,ce.height,0,Mt,at,ce.data)}}else{L?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Mt,at,ot[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Vt,Mt,at,ot[K]);for(let st=0;st<J.length;st++){const Lt=J[st];L?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,st+1,0,0,Mt,at,Lt.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,st+1,Vt,Mt,at,Lt.image[K])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),X.__version=$.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function gt(C,v,I,Y,$,X){const Tt=r.convert(I.format,I.colorSpace),rt=r.convert(I.type),yt=S(I.internalFormat,Tt,rt,I.colorSpace),Rt=i.get(v),tt=i.get(I);if(tt.__renderTarget=v,!Rt.__hasExternalTextures){const ot=Math.max(1,v.width>>X),xt=Math.max(1,v.height>>X);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?e.texImage3D($,X,yt,ot,xt,v.depth,0,Tt,rt,null):e.texImage2D($,X,yt,ot,xt,0,Tt,rt,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Ae(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,$,tt.__webglTexture,0,D(v)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,$,tt.__webglTexture,X),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(C,v,I){if(n.bindRenderbuffer(n.RENDERBUFFER,C),v.depthBuffer){const Y=v.depthTexture,$=Y&&Y.isDepthTexture?Y.type:null,X=T(v.stencilBuffer,$),Tt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ae(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D(v),X,v.width,v.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,D(v),X,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,X,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Tt,n.RENDERBUFFER,C)}else{const Y=v.textures;for(let $=0;$<Y.length;$++){const X=Y[$],Tt=r.convert(X.format,X.colorSpace),rt=r.convert(X.type),yt=S(X.internalFormat,Tt,rt,X.colorSpace);Ae(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D(v),yt,v.width,v.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,D(v),yt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,yt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function vt(C,v,I){const Y=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(v.depthTexture);if($.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y){if($.__webglInit===void 0&&($.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),$.__webglTexture===void 0){$.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Pt(n.TEXTURE_CUBE_MAP,v.depthTexture);const Rt=r.convert(v.depthTexture.format),tt=r.convert(v.depthTexture.type);let ot;v.depthTexture.format===xi?ot=n.DEPTH_COMPONENT24:v.depthTexture.format===cs&&(ot=n.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ot,v.width,v.height,0,Rt,tt,null)}}else W(v.depthTexture,0);const X=$.__webglTexture,Tt=D(v),rt=Y?n.TEXTURE_CUBE_MAP_POSITIVE_X+I:n.TEXTURE_2D,yt=v.depthTexture.format===cs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===xi)Ae(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,yt,rt,X,0,Tt):n.framebufferTexture2D(n.FRAMEBUFFER,yt,rt,X,0);else if(v.depthTexture.format===cs)Ae(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,yt,rt,X,0,Tt):n.framebufferTexture2D(n.FRAMEBUFFER,yt,rt,X,0);else throw new Error("Unknown depthTexture format")}function Yt(C){const v=i.get(C),I=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",$)};Y.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=Y}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(I)for(let Y=0;Y<6;Y++)vt(v.__webglFramebuffer[Y],C,Y);else{const Y=C.texture.mipmaps;Y&&Y.length>0?vt(v.__webglFramebuffer[0],C,0):vt(v.__webglFramebuffer,C,0)}else if(I){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=n.createRenderbuffer(),Nt(v.__webglDepthbuffer[Y],C,!1);else{const $=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,X)}}else{const Y=C.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Nt(v.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,X)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(C,v,I){const Y=i.get(C);v!==void 0&&gt(Y.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Yt(C)}function Xt(C){const v=C.texture,I=i.get(C),Y=i.get(v);C.addEventListener("dispose",w);const $=C.textures,X=C.isWebGLCubeRenderTarget===!0,Tt=$.length>1;if(Tt||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=v.version,a.memory.textures++),X){I.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer[rt]=[];for(let yt=0;yt<v.mipmaps.length;yt++)I.__webglFramebuffer[rt][yt]=n.createFramebuffer()}else I.__webglFramebuffer[rt]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer=[];for(let rt=0;rt<v.mipmaps.length;rt++)I.__webglFramebuffer[rt]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(Tt)for(let rt=0,yt=$.length;rt<yt;rt++){const Rt=i.get($[rt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Ae(C)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let rt=0;rt<$.length;rt++){const yt=$[rt];I.__webglColorRenderbuffer[rt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[rt]);const Rt=r.convert(yt.format,yt.colorSpace),tt=r.convert(yt.type),ot=S(yt.internalFormat,Rt,tt,yt.colorSpace,C.isXRRenderTarget===!0),xt=D(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,ot,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,I.__webglColorRenderbuffer[rt])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),Nt(I.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Pt(n.TEXTURE_CUBE_MAP,v);for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0)for(let yt=0;yt<v.mipmaps.length;yt++)gt(I.__webglFramebuffer[rt][yt],C,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,yt);else gt(I.__webglFramebuffer[rt],C,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(v)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let rt=0,yt=$.length;rt<yt;rt++){const Rt=$[rt],tt=i.get(Rt);let ot=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ot=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,tt.__webglTexture),Pt(ot,Rt),gt(I.__webglFramebuffer,C,Rt,n.COLOR_ATTACHMENT0+rt,ot,0),m(Rt)&&p(ot)}e.unbindTexture()}else{let rt=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(rt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,Y.__webglTexture),Pt(rt,v),v.mipmaps&&v.mipmaps.length>0)for(let yt=0;yt<v.mipmaps.length;yt++)gt(I.__webglFramebuffer[yt],C,v,n.COLOR_ATTACHMENT0,rt,yt);else gt(I.__webglFramebuffer,C,v,n.COLOR_ATTACHMENT0,rt,0);m(v)&&p(rt),e.unbindTexture()}C.depthBuffer&&Yt(C)}function Zt(C){const v=C.textures;for(let I=0,Y=v.length;I<Y;I++){const $=v[I];if(m($)){const X=y(C),Tt=i.get($).__webglTexture;e.bindTexture(X,Tt),p(X),e.unbindTexture()}}}const se=[],Bt=[];function Ee(C){if(C.samples>0){if(Ae(C)===!1){const v=C.textures,I=C.width,Y=C.height;let $=n.COLOR_BUFFER_BIT;const X=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=i.get(C),rt=v.length>1;if(rt)for(let Rt=0;Rt<v.length;Rt++)e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);const yt=C.texture.mipmaps;yt&&yt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Rt=0;Rt<v.length;Rt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),rt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[Rt]);const tt=i.get(v[Rt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,tt,0)}n.blitFramebuffer(0,0,I,Y,0,0,I,Y,$,n.NEAREST),l===!0&&(se.length=0,Bt.length=0,se.push(n.COLOR_ATTACHMENT0+Rt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(se.push(X),Bt.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Bt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),rt)for(let Rt=0;Rt<v.length;Rt++){e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[Rt]);const tt=i.get(v[Rt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const v=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function D(C){return Math.min(s.maxSamples,C.samples)}function Ae(C){const v=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function $t(C){const v=a.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function le(C,v){const I=C.colorSpace,Y=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||I!==sr&&I!==Ii&&(jt.getTransfer(I)===te?(Y!==kn||$!==_n)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",I)),v}function St(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=O,this.setTexture2D=W,this.setTexture2DArray=k,this.setTexture3D=F,this.setTextureCube=j,this.rebindTextures=Ue,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function wT(n,t){function e(i,s=Ii){let r;const a=jt.getTransfer(s);if(i===_n)return n.UNSIGNED_BYTE;if(i===Cu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ru)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$p)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zp)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===qp)return n.BYTE;if(i===Kp)return n.SHORT;if(i===Wr)return n.UNSIGNED_SHORT;if(i===wu)return n.INT;if(i===ei)return n.UNSIGNED_INT;if(i===jn)return n.FLOAT;if(i===_i)return n.HALF_FLOAT;if(i===Jp)return n.ALPHA;if(i===Qp)return n.RGB;if(i===kn)return n.RGBA;if(i===xi)return n.DEPTH_COMPONENT;if(i===cs)return n.DEPTH_STENCIL;if(i===tm)return n.RED;if(i===Pu)return n.RED_INTEGER;if(i===ir)return n.RG;if(i===Du)return n.RG_INTEGER;if(i===Lu)return n.RGBA_INTEGER;if(i===Ya||i===qa||i===Ka||i===$a)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ya)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ya)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ic||i===sc||i===rc||i===ac)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ic)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===oc||i===lc||i===cc||i===uc||i===hc||i===fc||i===dc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===oc||i===lc)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===cc)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===uc)return r.COMPRESSED_R11_EAC;if(i===hc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===fc)return r.COMPRESSED_RG11_EAC;if(i===dc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===pc||i===mc||i===gc||i===_c||i===xc||i===vc||i===yc||i===Sc||i===Mc||i===Tc||i===bc||i===Ec||i===Ac||i===wc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===pc)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mc)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gc)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_c)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xc)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vc)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yc)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sc)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Mc)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tc)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bc)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ec)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ac)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wc)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cc||i===Rc||i===Pc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Cc)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dc||i===Lc||i===Ic||i===Uc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Dc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ic)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const CT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class PT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new dm(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new In({vertexShader:CT,fragmentShader:RT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ni(new ca(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DT extends Ss{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=typeof XRWebGLBinding<"u",m=new PT,p={},y=e.getContextAttributes();let S=null,T=null;const M=[],A=[],w=new It;let R=null;const x=new gn;x.viewport=new Se;const b=new gn;b.viewport=new Se;const P=[x,b],O=new Vx;let N=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=M[q];return Z===void 0&&(Z=new cl,M[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=M[q];return Z===void 0&&(Z=new cl,M[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=M[q];return Z===void 0&&(Z=new cl,M[q]=Z),Z.getHandSpace()};function W(q){const Z=A.indexOf(q.inputSource);if(Z===-1)return;const gt=M[Z];gt!==void 0&&(gt.update(q.inputSource,q.frame,c||a),gt.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",F);for(let q=0;q<M.length;q++){const Z=A[q];Z!==null&&(A[q]=null,M[q].disconnect(Z))}N=null,H=null,m.reset();for(const q in p)delete p[q];t.setRenderTarget(S),d=null,f=null,h=null,s=null,T=null,Wt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",k),s.addEventListener("inputsourceschange",F),y.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(w),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Nt=null,vt=null;y.depth&&(vt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=y.stencil?cs:xi,Nt=y.stencil?Xr:ei);const Yt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Yt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),T=new $n(f.textureWidth,f.textureHeight,{format:kn,type:_n,depthTexture:new Yr(f.textureWidth,f.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const gt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new $n(d.framebufferWidth,d.framebufferHeight,{format:kn,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Wt.setContext(s),Wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(q){for(let Z=0;Z<q.removed.length;Z++){const gt=q.removed[Z],Nt=A.indexOf(gt);Nt>=0&&(A[Nt]=null,M[Nt].disconnect(gt))}for(let Z=0;Z<q.added.length;Z++){const gt=q.added[Z];let Nt=A.indexOf(gt);if(Nt===-1){for(let Yt=0;Yt<M.length;Yt++)if(Yt>=A.length){A.push(gt),Nt=Yt;break}else if(A[Yt]===null){A[Yt]=gt,Nt=Yt;break}if(Nt===-1)break}const vt=M[Nt];vt&&vt.connect(gt)}}const j=new V,it=new V;function et(q,Z,gt){j.setFromMatrixPosition(Z.matrixWorld),it.setFromMatrixPosition(gt.matrixWorld);const Nt=j.distanceTo(it),vt=Z.projectionMatrix.elements,Yt=gt.projectionMatrix.elements,Ue=vt[14]/(vt[10]-1),Xt=vt[14]/(vt[10]+1),Zt=(vt[9]+1)/vt[5],se=(vt[9]-1)/vt[5],Bt=(vt[8]-1)/vt[0],Ee=(Yt[8]+1)/Yt[0],D=Ue*Bt,Ae=Ue*Ee,$t=Nt/(-Bt+Ee),le=$t*-Bt;if(Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(le),q.translateZ($t),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),vt[10]===-1)q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const St=Ue+$t,C=Xt+$t,v=D-le,I=Ae+(Nt-le),Y=Zt*Xt/C*St,$=se*Xt/C*St;q.projectionMatrix.makePerspective(v,I,Y,$,St,C),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function lt(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Z=q.near,gt=q.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(gt=m.depthFar)),O.near=b.near=x.near=Z,O.far=b.far=x.far=gt,(N!==O.near||H!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),N=O.near,H=O.far),O.layers.mask=q.layers.mask|6,x.layers.mask=O.layers.mask&3,b.layers.mask=O.layers.mask&5;const Nt=q.parent,vt=O.cameras;lt(O,Nt);for(let Yt=0;Yt<vt.length;Yt++)lt(vt[Yt],Nt);vt.length===2?et(O,x,b):O.projectionMatrix.copy(x.projectionMatrix),Pt(q,O,Nt)};function Pt(q,Z,gt){gt===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(gt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Nc*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(q){return p[q]};let Ut=null;function Gt(q,Z){if(u=Z.getViewerPose(c||a),_=Z,u!==null){const gt=u.views;d!==null&&(t.setRenderTargetFramebuffer(T,d.framebuffer),t.setRenderTarget(T));let Nt=!1;gt.length!==O.cameras.length&&(O.cameras.length=0,Nt=!0);for(let Xt=0;Xt<gt.length;Xt++){const Zt=gt[Xt];let se=null;if(d!==null)se=d.getViewport(Zt);else{const Ee=h.getViewSubImage(f,Zt);se=Ee.viewport,Xt===0&&(t.setRenderTargetTextures(T,Ee.colorTexture,Ee.depthStencilTexture),t.setRenderTarget(T))}let Bt=P[Xt];Bt===void 0&&(Bt=new gn,Bt.layers.enable(Xt),Bt.viewport=new Se,P[Xt]=Bt),Bt.matrix.fromArray(Zt.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(Zt.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(se.x,se.y,se.width,se.height),Xt===0&&(O.matrix.copy(Bt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Nt===!0&&O.cameras.push(Bt)}const vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){h=i.getBinding();const Xt=h.getDepthInformation(gt[0]);Xt&&Xt.isValid&&Xt.texture&&m.init(Xt,s.renderState)}if(vt&&vt.includes("camera-access")&&g){t.state.unbindTexture(),h=i.getBinding();for(let Xt=0;Xt<gt.length;Xt++){const Zt=gt[Xt].camera;if(Zt){let se=p[Zt];se||(se=new dm,p[Zt]=se);const Bt=h.getCameraImage(Zt);se.sourceTexture=Bt}}}}for(let gt=0;gt<M.length;gt++){const Nt=A[gt],vt=M[gt];Nt!==null&&vt!==void 0&&vt.update(Nt,Z,c||a)}Ut&&Ut(q,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),_=null}const Wt=new mm;Wt.setAnimationLoop(Gt),this.setAnimationLoop=function(q){Ut=q},this.dispose=function(){}}}const ts=new vi,LT=new Te;function IT(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,cm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,S,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,T)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),S=y.envMap,T=y.envMapRotation;S&&(m.envMap.value=S,ts.copy(T),ts.x*=-1,ts.y*=-1,ts.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),m.envMapRotation.value.setFromMatrix4(LT.makeRotationFromEuler(ts)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function UT(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const T=S.program;i.uniformBlockBinding(y,T)}function c(y,S){let T=s[y.id];T===void 0&&(_(y),T=u(y),s[y.id]=T,y.addEventListener("dispose",m));const M=S.program;i.updateUBOMapping(y,M);const A=t.render.frame;r[y.id]!==A&&(f(y),r[y.id]=A)}function u(y){const S=h();y.__bindingPointIndex=S;const T=n.createBuffer(),M=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,M,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,T),T}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const S=s[y.id],T=y.uniforms,M=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let A=0,w=T.length;A<w;A++){const R=Array.isArray(T[A])?T[A]:[T[A]];for(let x=0,b=R.length;x<b;x++){const P=R[x];if(d(P,A,x,M)===!0){const O=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let W=0;W<N.length;W++){const k=N[W],F=g(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,O+H,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,H),H+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,S,T,M){const A=y.value,w=S+"_"+T;if(M[w]===void 0)return typeof A=="number"||typeof A=="boolean"?M[w]=A:M[w]=A.clone(),!0;{const R=M[w];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return M[w]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function _(y){const S=y.uniforms;let T=0;const M=16;for(let w=0,R=S.length;w<R;w++){const x=Array.isArray(S[w])?S[w]:[S[w]];for(let b=0,P=x.length;b<P;b++){const O=x[b],N=Array.isArray(O.value)?O.value:[O.value];for(let H=0,W=N.length;H<W;H++){const k=N[H],F=g(k),j=T%M,it=j%F.boundary,et=j+it;T+=it,et!==0&&M-et<F.storage&&(T+=M-et),O.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=T,T+=F.storage}}}const A=T%M;return A>0&&(T+=M-A),y.__size=T,y.__cache={},this}function g(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Dt("WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}const NT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hn=null;function FT(){return Hn===null&&(Hn=new Ax(NT,16,16,ir,_i),Hn.name="DFG_LUT",Hn.minFilter=We,Hn.magFilter=We,Hn.wrapS=di,Hn.wrapT=di,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}class OT{constructor(t={}){const{canvas:e=Q0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=_n}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const g=d,m=new Set([Lu,Du,Pu]),p=new Set([_n,ei,Wr,Xr,Cu,Ru]),y=new Uint32Array(4),S=new Int32Array(4);let T=null,M=null;const A=[],w=[];let R=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let b=!1;this._outputColorSpace=Cn;let P=0,O=0,N=null,H=-1,W=null;const k=new Se,F=new Se;let j=null;const it=new ee(0);let et=0,lt=e.width,Pt=e.height,Ut=1,Gt=null,Wt=null;const q=new Se(0,0,lt,Pt),Z=new Se(0,0,lt,Pt);let gt=!1;const Nt=new Ou;let vt=!1,Yt=!1;const Ue=new Te,Xt=new V,Zt=new Se,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function Ee(){return N===null?Ut:1}let D=i;function Ae(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Au}`),e.addEventListener("webglcontextlost",Lt,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",Jt,!1),D===null){const U="webgl2";if(D=Ae(U,E),D===null)throw Ae(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Kt("WebGLRenderer: "+E.message),E}let $t,le,St,C,v,I,Y,$,X,Tt,rt,yt,Rt,tt,ot,xt,Mt,at,Vt,L,dt,nt,pt,J;function K(){$t=new FS(D),$t.init(),nt=new wT(D,$t),le=new wS(D,$t,t,nt),St=new ET(D,$t),le.reversedDepthBuffer&&f&&St.buffers.depth.setReversed(!0),C=new VS(D),v=new uT,I=new AT(D,$t,St,v,le,nt,C),Y=new RS(x),$=new NS(x),X=new Gx(D),pt=new ES(D,X),Tt=new OS(D,X,C,pt),rt=new zS(D,Tt,X,C),Vt=new kS(D,le,I),xt=new CS(v),yt=new cT(x,Y,$,$t,le,pt,xt),Rt=new IT(x,v),tt=new fT,ot=new xT($t),at=new bS(x,Y,$,St,rt,_,l),Mt=new TT(x,rt,le),J=new UT(D,C,le,St),L=new AS(D,$t,C),dt=new BS(D,$t,C),C.programs=yt.programs,x.capabilities=le,x.extensions=$t,x.properties=v,x.renderLists=tt,x.shadowMap=Mt,x.state=St,x.info=C}K(),g!==_n&&(R=new GS(g,e.width,e.height,s,r));const st=new DT(x,D);this.xr=st,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=$t.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=$t.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Ut},this.setPixelRatio=function(E){E!==void 0&&(Ut=E,this.setSize(lt,Pt,!1))},this.getSize=function(E){return E.set(lt,Pt)},this.setSize=function(E,U,G=!0){if(st.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=E,Pt=U,e.width=Math.floor(E*Ut),e.height=Math.floor(U*Ut),G===!0&&(e.style.width=E+"px",e.style.height=U+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(lt*Ut,Pt*Ut).floor()},this.setDrawingBufferSize=function(E,U,G){lt=E,Pt=U,Ut=G,e.width=Math.floor(E*G),e.height=Math.floor(U*G),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(g===_n){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(k)},this.getViewport=function(E){return E.copy(q)},this.setViewport=function(E,U,G,z){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,U,G,z),St.viewport(k.copy(q).multiplyScalar(Ut).round())},this.getScissor=function(E){return E.copy(Z)},this.setScissor=function(E,U,G,z){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,U,G,z),St.scissor(F.copy(Z).multiplyScalar(Ut).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(E){St.setScissorTest(gt=E)},this.setOpaqueSort=function(E){Gt=E},this.setTransparentSort=function(E){Wt=E},this.getClearColor=function(E){return E.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,G=!0){let z=0;if(E){let B=!1;if(N!==null){const ct=N.texture.format;B=m.has(ct)}if(B){const ct=N.texture.type,mt=p.has(ct),ht=at.getClearColor(),_t=at.getClearAlpha(),bt=ht.r,wt=ht.g,Et=ht.b;mt?(y[0]=bt,y[1]=wt,y[2]=Et,y[3]=_t,D.clearBufferuiv(D.COLOR,0,y)):(S[0]=bt,S[1]=wt,S[2]=Et,S[3]=_t,D.clearBufferiv(D.COLOR,0,S))}else z|=D.COLOR_BUFFER_BIT}U&&(z|=D.DEPTH_BUFFER_BIT),G&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Lt,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",Jt,!1),at.dispose(),tt.dispose(),ot.dispose(),v.dispose(),Y.dispose(),$.dispose(),rt.dispose(),pt.dispose(),J.dispose(),yt.dispose(),st.dispose(),st.removeEventListener("sessionstart",zh),st.removeEventListener("sessionend",Hh),Yi.stop()};function Lt(E){E.preventDefault(),af("WebGLRenderer: Context Lost."),b=!0}function ce(){af("WebGLRenderer: Context Restored."),b=!1;const E=C.autoReset,U=Mt.enabled,G=Mt.autoUpdate,z=Mt.needsUpdate,B=Mt.type;K(),C.autoReset=E,Mt.enabled=U,Mt.autoUpdate=G,Mt.needsUpdate=z,Mt.type=B}function Jt(E){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function zn(E){const U=E.target;U.removeEventListener("dispose",zn),si(U)}function si(E){u0(E),v.remove(E)}function u0(E){const U=v.get(E).programs;U!==void 0&&(U.forEach(function(G){yt.releaseProgram(G)}),E.isShaderMaterial&&yt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,G,z,B,ct){U===null&&(U=se);const mt=B.isMesh&&B.matrixWorld.determinant()<0,ht=f0(E,U,G,z,B);St.setMaterial(z,mt);let _t=G.index,bt=1;if(z.wireframe===!0){if(_t=Tt.getWireframeAttribute(G),_t===void 0)return;bt=2}const wt=G.drawRange,Et=G.attributes.position;let kt=wt.start*bt,ne=(wt.start+wt.count)*bt;ct!==null&&(kt=Math.max(kt,ct.start*bt),ne=Math.min(ne,(ct.start+ct.count)*bt)),_t!==null?(kt=Math.max(kt,0),ne=Math.min(ne,_t.count)):Et!=null&&(kt=Math.max(kt,0),ne=Math.min(ne,Et.count));const xe=ne-kt;if(xe<0||xe===1/0)return;pt.setup(B,z,ht,G,_t);let ve,re=L;if(_t!==null&&(ve=X.get(_t),re=dt,re.setIndex(ve)),B.isMesh)z.wireframe===!0?(St.setLineWidth(z.wireframeLinewidth*Ee()),re.setMode(D.LINES)):re.setMode(D.TRIANGLES);else if(B.isLine){let At=z.linewidth;At===void 0&&(At=1),St.setLineWidth(At*Ee()),B.isLineSegments?re.setMode(D.LINES):B.isLineLoop?re.setMode(D.LINE_LOOP):re.setMode(D.LINE_STRIP)}else B.isPoints?re.setMode(D.POINTS):B.isSprite&&re.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)jr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),re.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))re.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const At=B._multiDrawStarts,Qt=B._multiDrawCounts,qt=B._multiDrawCount,hn=_t?X.get(_t).bytesPerElement:1,Ts=v.get(z).currentProgram.getUniforms();for(let fn=0;fn<qt;fn++)Ts.setValue(D,"_gl_DrawID",fn),re.render(At[fn]/hn,Qt[fn])}else if(B.isInstancedMesh)re.renderInstances(kt,xe,B.count);else if(G.isInstancedBufferGeometry){const At=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Qt=Math.min(G.instanceCount,At);re.renderInstances(kt,xe,Qt)}else re.render(kt,xe)};function kh(E,U,G){E.transparent===!0&&E.side===fi&&E.forceSinglePass===!1?(E.side=rn,E.needsUpdate=!0,ga(E,U,G),E.side=ti,E.needsUpdate=!0,ga(E,U,G),E.side=fi):ga(E,U,G)}this.compile=function(E,U,G=null){G===null&&(G=E),M=ot.get(G),M.init(U),w.push(M),G.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(M.pushLight(B),B.castShadow&&M.pushShadow(B))}),E!==G&&E.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(M.pushLight(B),B.castShadow&&M.pushShadow(B))}),M.setupLights();const z=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ct=B.material;if(ct)if(Array.isArray(ct))for(let mt=0;mt<ct.length;mt++){const ht=ct[mt];kh(ht,G,B),z.add(ht)}else kh(ct,G,B),z.add(ct)}),M=w.pop(),z},this.compileAsync=function(E,U,G=null){const z=this.compile(E,U,G);return new Promise(B=>{function ct(){if(z.forEach(function(mt){v.get(mt).currentProgram.isReady()&&z.delete(mt)}),z.size===0){B(E);return}setTimeout(ct,10)}$t.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Oo=null;function h0(E){Oo&&Oo(E)}function zh(){Yi.stop()}function Hh(){Yi.start()}const Yi=new mm;Yi.setAnimationLoop(h0),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(E){Oo=E,st.setAnimationLoop(E),E===null?Yi.stop():Yi.start()},st.addEventListener("sessionstart",zh),st.addEventListener("sessionend",Hh),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;const G=st.enabled===!0&&st.isPresenting===!0,z=R!==null&&(N===null||G)&&R.begin(x,N);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(U),U=st.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,N),M=ot.get(E,w.length),M.init(U),w.push(M),Ue.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Nt.setFromProjectionMatrix(Ue,Yn,U.reversedDepth),Yt=this.localClippingEnabled,vt=xt.init(this.clippingPlanes,Yt),T=tt.get(E,A.length),T.init(),A.push(T),st.enabled===!0&&st.isPresenting===!0){const mt=x.xr.getDepthSensingMesh();mt!==null&&Bo(mt,U,-1/0,x.sortObjects)}Bo(E,U,0,x.sortObjects),T.finish(),x.sortObjects===!0&&T.sort(Gt,Wt),Bt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Bt&&at.addToRenderList(T,E),this.info.render.frame++,vt===!0&&xt.beginShadows();const B=M.state.shadowsArray;if(Mt.render(B,E,U),vt===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&R.hasRenderPass())===!1){const mt=T.opaque,ht=T.transmissive;if(M.setupLights(),U.isArrayCamera){const _t=U.cameras;if(ht.length>0)for(let bt=0,wt=_t.length;bt<wt;bt++){const Et=_t[bt];Wh(mt,ht,E,Et)}Bt&&at.render(E);for(let bt=0,wt=_t.length;bt<wt;bt++){const Et=_t[bt];Gh(T,E,Et,Et.viewport)}}else ht.length>0&&Wh(mt,ht,E,U),Bt&&at.render(E),Gh(T,E,U)}N!==null&&O===0&&(I.updateMultisampleRenderTarget(N),I.updateRenderTargetMipmap(N)),z&&R.end(x),E.isScene===!0&&E.onAfterRender(x,E,U),pt.resetDefaultState(),H=-1,W=null,w.pop(),w.length>0?(M=w[w.length-1],vt===!0&&xt.setGlobalState(x.clippingPlanes,M.state.camera)):M=null,A.pop(),A.length>0?T=A[A.length-1]:T=null};function Bo(E,U,G,z){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)M.pushLight(E),E.castShadow&&M.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Nt.intersectsSprite(E)){z&&Zt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ue);const mt=rt.update(E),ht=E.material;ht.visible&&T.push(E,mt,ht,G,Zt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Nt.intersectsObject(E))){const mt=rt.update(E),ht=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Zt.copy(E.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Zt.copy(mt.boundingSphere.center)),Zt.applyMatrix4(E.matrixWorld).applyMatrix4(Ue)),Array.isArray(ht)){const _t=mt.groups;for(let bt=0,wt=_t.length;bt<wt;bt++){const Et=_t[bt],kt=ht[Et.materialIndex];kt&&kt.visible&&T.push(E,mt,kt,G,Zt.z,Et)}}else ht.visible&&T.push(E,mt,ht,G,Zt.z,null)}}const ct=E.children;for(let mt=0,ht=ct.length;mt<ht;mt++)Bo(ct[mt],U,G,z)}function Gh(E,U,G,z){const{opaque:B,transmissive:ct,transparent:mt}=E;M.setupLightsView(G),vt===!0&&xt.setGlobalState(x.clippingPlanes,G),z&&St.viewport(k.copy(z)),B.length>0&&ma(B,U,G),ct.length>0&&ma(ct,U,G),mt.length>0&&ma(mt,U,G),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Wh(E,U,G,z){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[z.id]===void 0){const kt=$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[z.id]=new $n(1,1,{generateMipmaps:!0,type:kt?_i:_n,minFilter:ls,samples:le.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace})}const ct=M.state.transmissionRenderTarget[z.id],mt=z.viewport||k;ct.setSize(mt.z*x.transmissionResolutionScale,mt.w*x.transmissionResolutionScale);const ht=x.getRenderTarget(),_t=x.getActiveCubeFace(),bt=x.getActiveMipmapLevel();x.setRenderTarget(ct),x.getClearColor(it),et=x.getClearAlpha(),et<1&&x.setClearColor(16777215,.5),x.clear(),Bt&&at.render(G);const wt=x.toneMapping;x.toneMapping=Kn;const Et=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),M.setupLightsView(z),vt===!0&&xt.setGlobalState(x.clippingPlanes,z),ma(E,G,z),I.updateMultisampleRenderTarget(ct),I.updateRenderTargetMipmap(ct),$t.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let ne=0,xe=U.length;ne<xe;ne++){const ve=U[ne],{object:re,geometry:At,material:Qt,group:qt}=ve;if(Qt.side===fi&&re.layers.test(z.layers)){const hn=Qt.side;Qt.side=rn,Qt.needsUpdate=!0,Xh(re,G,z,At,Qt,qt),Qt.side=hn,Qt.needsUpdate=!0,kt=!0}}kt===!0&&(I.updateMultisampleRenderTarget(ct),I.updateRenderTargetMipmap(ct))}x.setRenderTarget(ht,_t,bt),x.setClearColor(it,et),Et!==void 0&&(z.viewport=Et),x.toneMapping=wt}function ma(E,U,G){const z=U.isScene===!0?U.overrideMaterial:null;for(let B=0,ct=E.length;B<ct;B++){const mt=E[B],{object:ht,geometry:_t,group:bt}=mt;let wt=mt.material;wt.allowOverride===!0&&z!==null&&(wt=z),ht.layers.test(G.layers)&&Xh(ht,U,G,_t,wt,bt)}}function Xh(E,U,G,z,B,ct){E.onBeforeRender(x,U,G,z,B,ct),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(x,U,G,z,E,ct),B.transparent===!0&&B.side===fi&&B.forceSinglePass===!1?(B.side=rn,B.needsUpdate=!0,x.renderBufferDirect(G,U,z,B,E,ct),B.side=ti,B.needsUpdate=!0,x.renderBufferDirect(G,U,z,B,E,ct),B.side=fi):x.renderBufferDirect(G,U,z,B,E,ct),E.onAfterRender(x,U,G,z,B,ct)}function ga(E,U,G){U.isScene!==!0&&(U=se);const z=v.get(E),B=M.state.lights,ct=M.state.shadowsArray,mt=B.state.version,ht=yt.getParameters(E,B.state,ct,U,G),_t=yt.getProgramCacheKey(ht);let bt=z.programs;z.environment=E.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(E.isMeshStandardMaterial?$:Y).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,bt===void 0&&(E.addEventListener("dispose",zn),bt=new Map,z.programs=bt);let wt=bt.get(_t);if(wt!==void 0){if(z.currentProgram===wt&&z.lightsStateVersion===mt)return Yh(E,ht),wt}else ht.uniforms=yt.getUniforms(E),E.onBeforeCompile(ht,x),wt=yt.acquireProgram(ht,_t),bt.set(_t,wt),z.uniforms=ht.uniforms;const Et=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Et.clippingPlanes=xt.uniform),Yh(E,ht),z.needsLights=p0(E),z.lightsStateVersion=mt,z.needsLights&&(Et.ambientLightColor.value=B.state.ambient,Et.lightProbe.value=B.state.probe,Et.directionalLights.value=B.state.directional,Et.directionalLightShadows.value=B.state.directionalShadow,Et.spotLights.value=B.state.spot,Et.spotLightShadows.value=B.state.spotShadow,Et.rectAreaLights.value=B.state.rectArea,Et.ltc_1.value=B.state.rectAreaLTC1,Et.ltc_2.value=B.state.rectAreaLTC2,Et.pointLights.value=B.state.point,Et.pointLightShadows.value=B.state.pointShadow,Et.hemisphereLights.value=B.state.hemi,Et.directionalShadowMap.value=B.state.directionalShadowMap,Et.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Et.spotShadowMap.value=B.state.spotShadowMap,Et.spotLightMatrix.value=B.state.spotLightMatrix,Et.spotLightMap.value=B.state.spotLightMap,Et.pointShadowMap.value=B.state.pointShadowMap,Et.pointShadowMatrix.value=B.state.pointShadowMatrix),z.currentProgram=wt,z.uniformsList=null,wt}function jh(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Ja.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Yh(E,U){const G=v.get(E);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function f0(E,U,G,z,B){U.isScene!==!0&&(U=se),I.resetTextureUnits();const ct=U.fog,mt=z.isMeshStandardMaterial?U.environment:null,ht=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:sr,_t=(z.isMeshStandardMaterial?$:Y).get(z.envMap||mt),bt=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,wt=!!G.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Et=!!G.morphAttributes.position,kt=!!G.morphAttributes.normal,ne=!!G.morphAttributes.color;let xe=Kn;z.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(xe=x.toneMapping);const ve=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,re=ve!==void 0?ve.length:0,At=v.get(z),Qt=M.state.lights;if(vt===!0&&(Yt===!0||E!==W)){const qe=E===W&&z.id===H;xt.setState(z,E,qe)}let qt=!1;z.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Qt.state.version||At.outputColorSpace!==ht||B.isBatchedMesh&&At.batching===!1||!B.isBatchedMesh&&At.batching===!0||B.isBatchedMesh&&At.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&At.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&At.instancing===!1||!B.isInstancedMesh&&At.instancing===!0||B.isSkinnedMesh&&At.skinning===!1||!B.isSkinnedMesh&&At.skinning===!0||B.isInstancedMesh&&At.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&At.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&At.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&At.instancingMorph===!1&&B.morphTexture!==null||At.envMap!==_t||z.fog===!0&&At.fog!==ct||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==xt.numPlanes||At.numIntersection!==xt.numIntersection)||At.vertexAlphas!==bt||At.vertexTangents!==wt||At.morphTargets!==Et||At.morphNormals!==kt||At.morphColors!==ne||At.toneMapping!==xe||At.morphTargetsCount!==re)&&(qt=!0):(qt=!0,At.__version=z.version);let hn=At.currentProgram;qt===!0&&(hn=ga(z,U,B));let Ts=!1,fn=!1,vr=!1;const ue=hn.getUniforms(),Qe=At.uniforms;if(St.useProgram(hn.program)&&(Ts=!0,fn=!0,vr=!0),z.id!==H&&(H=z.id,fn=!0),Ts||W!==E){St.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ue.setValue(D,"projectionMatrix",E.projectionMatrix),ue.setValue(D,"viewMatrix",E.matrixWorldInverse);const tn=ue.map.cameraPosition;tn!==void 0&&tn.setValue(D,Xt.setFromMatrixPosition(E.matrixWorld)),le.logarithmicDepthBuffer&&ue.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ue.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),W!==E&&(W=E,fn=!0,vr=!0)}if(At.needsLights&&(Qt.state.directionalShadowMap.length>0&&ue.setValue(D,"directionalShadowMap",Qt.state.directionalShadowMap,I),Qt.state.spotShadowMap.length>0&&ue.setValue(D,"spotShadowMap",Qt.state.spotShadowMap,I),Qt.state.pointShadowMap.length>0&&ue.setValue(D,"pointShadowMap",Qt.state.pointShadowMap,I)),B.isSkinnedMesh){ue.setOptional(D,B,"bindMatrix"),ue.setOptional(D,B,"bindMatrixInverse");const qe=B.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),ue.setValue(D,"boneTexture",qe.boneTexture,I))}B.isBatchedMesh&&(ue.setOptional(D,B,"batchingTexture"),ue.setValue(D,"batchingTexture",B._matricesTexture,I),ue.setOptional(D,B,"batchingIdTexture"),ue.setValue(D,"batchingIdTexture",B._indirectTexture,I),ue.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&ue.setValue(D,"batchingColorTexture",B._colorsTexture,I));const bn=G.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&Vt.update(B,G,hn),(fn||At.receiveShadow!==B.receiveShadow)&&(At.receiveShadow=B.receiveShadow,ue.setValue(D,"receiveShadow",B.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Qe.envMap.value=_t,Qe.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Qe.envMapIntensity.value=U.environmentIntensity),Qe.dfgLUT!==void 0&&(Qe.dfgLUT.value=FT()),fn&&(ue.setValue(D,"toneMappingExposure",x.toneMappingExposure),At.needsLights&&d0(Qe,vr),ct&&z.fog===!0&&Rt.refreshFogUniforms(Qe,ct),Rt.refreshMaterialUniforms(Qe,z,Ut,Pt,M.state.transmissionRenderTarget[E.id]),Ja.upload(D,jh(At),Qe,I)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ja.upload(D,jh(At),Qe,I),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ue.setValue(D,"center",B.center),ue.setValue(D,"modelViewMatrix",B.modelViewMatrix),ue.setValue(D,"normalMatrix",B.normalMatrix),ue.setValue(D,"modelMatrix",B.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const qe=z.uniformsGroups;for(let tn=0,Vo=qe.length;tn<Vo;tn++){const qi=qe[tn];J.update(qi,hn),J.bind(qi,hn)}}return hn}function d0(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function p0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,U,G){const z=v.get(E);z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),v.get(E.texture).__webglTexture=U,v.get(E.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:G,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const G=v.get(E);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0};const m0=D.createFramebuffer();this.setRenderTarget=function(E,U=0,G=0){N=E,P=U,O=G;let z=null,B=!1,ct=!1;if(E){const ht=v.get(E);if(ht.__useDefaultFramebuffer!==void 0){St.bindFramebuffer(D.FRAMEBUFFER,ht.__webglFramebuffer),k.copy(E.viewport),F.copy(E.scissor),j=E.scissorTest,St.viewport(k),St.scissor(F),St.setScissorTest(j),H=-1;return}else if(ht.__webglFramebuffer===void 0)I.setupRenderTarget(E);else if(ht.__hasExternalTextures)I.rebindTextures(E,v.get(E.texture).__webglTexture,v.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const wt=E.depthTexture;if(ht.__boundDepthTexture!==wt){if(wt!==null&&v.has(wt)&&(E.width!==wt.image.width||E.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(E)}}const _t=E.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(ct=!0);const bt=v.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(bt[U])?z=bt[U][G]:z=bt[U],B=!0):E.samples>0&&I.useMultisampledRTT(E)===!1?z=v.get(E).__webglMultisampledFramebuffer:Array.isArray(bt)?z=bt[G]:z=bt,k.copy(E.viewport),F.copy(E.scissor),j=E.scissorTest}else k.copy(q).multiplyScalar(Ut).floor(),F.copy(Z).multiplyScalar(Ut).floor(),j=gt;if(G!==0&&(z=m0),St.bindFramebuffer(D.FRAMEBUFFER,z)&&St.drawBuffers(E,z),St.viewport(k),St.scissor(F),St.setScissorTest(j),B){const ht=v.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,ht.__webglTexture,G)}else if(ct){const ht=U;for(let _t=0;_t<E.textures.length;_t++){const bt=v.get(E.textures[_t]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+_t,bt.__webglTexture,G,ht)}}else if(E!==null&&G!==0){const ht=v.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ht.__webglTexture,G)}H=-1},this.readRenderTargetPixels=function(E,U,G,z,B,ct,mt,ht=0){if(!(E&&E.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&mt!==void 0&&(_t=_t[mt]),_t){St.bindFramebuffer(D.FRAMEBUFFER,_t);try{const bt=E.textures[ht],wt=bt.format,Et=bt.type;if(!le.textureFormatReadable(wt)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(Et)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-z&&G>=0&&G<=E.height-B&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ht),D.readPixels(U,G,z,B,nt.convert(wt),nt.convert(Et),ct))}finally{const bt=N!==null?v.get(N).__webglFramebuffer:null;St.bindFramebuffer(D.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(E,U,G,z,B,ct,mt,ht=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&mt!==void 0&&(_t=_t[mt]),_t)if(U>=0&&U<=E.width-z&&G>=0&&G<=E.height-B){St.bindFramebuffer(D.FRAMEBUFFER,_t);const bt=E.textures[ht],wt=bt.format,Et=bt.type;if(!le.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const kt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,kt),D.bufferData(D.PIXEL_PACK_BUFFER,ct.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ht),D.readPixels(U,G,z,B,nt.convert(wt),nt.convert(Et),0);const ne=N!==null?v.get(N).__webglFramebuffer:null;St.bindFramebuffer(D.FRAMEBUFFER,ne);const xe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await tx(D,xe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,kt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ct),D.deleteBuffer(kt),D.deleteSync(xe),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,G=0){const z=Math.pow(2,-G),B=Math.floor(E.image.width*z),ct=Math.floor(E.image.height*z),mt=U!==null?U.x:0,ht=U!==null?U.y:0;I.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,mt,ht,B,ct),St.unbindTexture()};const g0=D.createFramebuffer(),_0=D.createFramebuffer();this.copyTextureToTexture=function(E,U,G=null,z=null,B=0,ct=null){ct===null&&(B!==0?(jr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=B,B=0):ct=0);let mt,ht,_t,bt,wt,Et,kt,ne,xe;const ve=E.isCompressedTexture?E.mipmaps[ct]:E.image;if(G!==null)mt=G.max.x-G.min.x,ht=G.max.y-G.min.y,_t=G.isBox3?G.max.z-G.min.z:1,bt=G.min.x,wt=G.min.y,Et=G.isBox3?G.min.z:0;else{const bn=Math.pow(2,-B);mt=Math.floor(ve.width*bn),ht=Math.floor(ve.height*bn),E.isDataArrayTexture?_t=ve.depth:E.isData3DTexture?_t=Math.floor(ve.depth*bn):_t=1,bt=0,wt=0,Et=0}z!==null?(kt=z.x,ne=z.y,xe=z.z):(kt=0,ne=0,xe=0);const re=nt.convert(U.format),At=nt.convert(U.type);let Qt;U.isData3DTexture?(I.setTexture3D(U,0),Qt=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(I.setTexture2DArray(U,0),Qt=D.TEXTURE_2D_ARRAY):(I.setTexture2D(U,0),Qt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const qt=D.getParameter(D.UNPACK_ROW_LENGTH),hn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ts=D.getParameter(D.UNPACK_SKIP_PIXELS),fn=D.getParameter(D.UNPACK_SKIP_ROWS),vr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ve.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ve.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,bt),D.pixelStorei(D.UNPACK_SKIP_ROWS,wt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Et);const ue=E.isDataArrayTexture||E.isData3DTexture,Qe=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const bn=v.get(E),qe=v.get(U),tn=v.get(bn.__renderTarget),Vo=v.get(qe.__renderTarget);St.bindFramebuffer(D.READ_FRAMEBUFFER,tn.__webglFramebuffer),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,Vo.__webglFramebuffer);for(let qi=0;qi<_t;qi++)ue&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,v.get(E).__webglTexture,B,Et+qi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,v.get(U).__webglTexture,ct,xe+qi)),D.blitFramebuffer(bt,wt,mt,ht,kt,ne,mt,ht,D.DEPTH_BUFFER_BIT,D.NEAREST);St.bindFramebuffer(D.READ_FRAMEBUFFER,null),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||E.isRenderTargetTexture||v.has(E)){const bn=v.get(E),qe=v.get(U);St.bindFramebuffer(D.READ_FRAMEBUFFER,g0),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,_0);for(let tn=0;tn<_t;tn++)ue?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bn.__webglTexture,B,Et+tn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,bn.__webglTexture,B),Qe?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qe.__webglTexture,ct,xe+tn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,qe.__webglTexture,ct),B!==0?D.blitFramebuffer(bt,wt,mt,ht,kt,ne,mt,ht,D.COLOR_BUFFER_BIT,D.NEAREST):Qe?D.copyTexSubImage3D(Qt,ct,kt,ne,xe+tn,bt,wt,mt,ht):D.copyTexSubImage2D(Qt,ct,kt,ne,bt,wt,mt,ht);St.bindFramebuffer(D.READ_FRAMEBUFFER,null),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Qe?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Qt,ct,kt,ne,xe,mt,ht,_t,re,At,ve.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Qt,ct,kt,ne,xe,mt,ht,_t,re,ve.data):D.texSubImage3D(Qt,ct,kt,ne,xe,mt,ht,_t,re,At,ve):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ct,kt,ne,mt,ht,re,At,ve.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ct,kt,ne,ve.width,ve.height,re,ve.data):D.texSubImage2D(D.TEXTURE_2D,ct,kt,ne,mt,ht,re,At,ve);D.pixelStorei(D.UNPACK_ROW_LENGTH,qt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,hn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ts),D.pixelStorei(D.UNPACK_SKIP_ROWS,fn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,vr),ct===0&&U.generateMipmaps&&D.generateMipmap(Qt),St.unbindTexture()},this.initRenderTarget=function(E){v.get(E).__webglFramebuffer===void 0&&I.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?I.setTextureCube(E,0):E.isData3DTexture?I.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?I.setTexture2DArray(E,0):I.setTexture2D(E,0),St.unbindTexture()},this.resetState=function(){P=0,O=0,N=null,St.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}const Zf={type:"change"},Vu={type:"start"},ym={type:"end"},Ba=new im,Jf=new Li,BT=Math.cos(70*nx.DEG2RAD),Pe=new V,nn=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xl=1e-6;class VT extends zx{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qs.ROTATE,MIDDLE:qs.DOLLY,RIGHT:qs.PAN},this.touches={ONE:Vs.ROTATE,TWO:Vs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new ys,this._lastTargetPosition=new V,this._quat=new ys().setFromUnitVectors(t.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Af,this._sphericalDelta=new Af,this._scale=1,this._panOffset=new V,this._rotateStart=new It,this._rotateEnd=new It,this._rotateDelta=new It,this._panStart=new It,this._panEnd=new It,this._panDelta=new It,this._dollyStart=new It,this._dollyEnd=new It,this._dollyDelta=new It,this._dollyDirection=new V,this._mouse=new It,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zT.bind(this),this._onPointerDown=kT.bind(this),this._onPointerUp=HT.bind(this),this._onContextMenu=KT.bind(this),this._onMouseWheel=XT.bind(this),this._onKeyDown=jT.bind(this),this._onTouchStart=YT.bind(this),this._onTouchMove=qT.bind(this),this._onMouseDown=GT.bind(this),this._onMouseMove=WT.bind(this),this._interceptControlDown=$T.bind(this),this._interceptControlUp=ZT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Zf),this.update(),this.state=ie.NONE}update(t=null){const e=this.object.position;Pe.copy(e).sub(this.target),Pe.applyQuaternion(this._quat),this._spherical.setFromVector3(Pe),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=nn:i>Math.PI&&(i-=nn),s<-Math.PI?s+=nn:s>Math.PI&&(s-=nn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Pe.setFromSpherical(this._spherical),Pe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Pe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Pe.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new V(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new V(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Pe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ba.origin.copy(this.object.position),Ba.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ba.direction))<BT?this.object.lookAt(this.target):(Jf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ba.intersectPlane(Jf,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>xl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xl||this._lastTargetPosition.distanceToSquared(this.target)>xl?(this.dispatchEvent(Zf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?nn/60*this.autoRotateSpeed*t:nn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Pe.setFromMatrixColumn(e,0),Pe.multiplyScalar(-t),this._panOffset.add(Pe)}_panUp(t,e){this.screenSpacePanning===!0?Pe.setFromMatrixColumn(e,1):(Pe.setFromMatrixColumn(e,0),Pe.crossVectors(this.object.up,Pe)),Pe.multiplyScalar(t),this._panOffset.add(Pe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Pe.copy(s).sub(this.target);let r=Pe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new It,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function kT(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function zT(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function HT(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ym),this.state=ie.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function GT(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case qs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ie.DOLLY;break;case qs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ie.ROTATE}break;case qs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Vu)}function WT(n){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function XT(n){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(n.preventDefault(),this.dispatchEvent(Vu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ym))}function jT(n){this.enabled!==!1&&this._handleKeyDown(n)}function YT(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Vs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ie.TOUCH_ROTATE;break;case Vs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case Vs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ie.TOUCH_DOLLY_PAN;break;case Vs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Vu)}function qT(n){switch(this._trackPointer(n),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ie.NONE}}function KT(n){this.enabled!==!1&&n.preventDefault()}function $T(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ZT(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const JT=({currentScene:n=1,backgroundShaders:t})=>{const e=Q.useRef(null),i=new kx,s=Q.useRef(null),r=Q.useRef(null),a=Q.useRef(null),o=Q.useRef(null),l=Q.useRef(null),c=Q.useRef(null),u=Q.useRef(null);Q.useRef([]);const h=Q.useRef(null),[f,d]=Q.useState(!1);Q.useEffect(()=>{if(!f||!c.current)return;(()=>{const m=new In({uniforms:{...t.uniforms,iTime:{value:l.current?l.current.uniforms.iTime.value:0}},vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:ti,depthWrite:!1}),p=c.current.children[0];if(p){const y=l.current?l.current.uniforms.iTime.value:0;p.material=m,l.current=m,l.current.uniforms.iTime.value=y}})()},[t,f]),Q.useEffect(()=>{f&&_(n)},[n,f]);const _=g=>{if(!(!r.current||!s.current)){switch(r.current,g){case 1:break;case 2:h.current="sayhi";break}o.current&&o.current.target.set(0,0,0)}};return Q.useEffect(()=>{const g=new Tf;s.current=g;const m=new gn(75,window.innerWidth/window.innerHeight,.1,1e3);m.position.z=5,r.current=m;const p=new OT({antialias:!0});p.setSize(window.innerWidth,window.innerHeight),a.current=p,e.current.appendChild(p.domElement);const y=new VT(m,p.domElement);y.enableDamping=!0,y.dampingFactor=.05,y.rotateSpeed=.5,y.screenSpacePanning=!1,y.minDistance=2,y.maxDistance=10,y.enableZoom=!1,o.current=y;const S=new Bx(16777215,5);g.add(S);const T=new Ox(16777215,5);T.position.set(0,5,5),g.add(T),d(!0);const M=new Nx(16777215,1,50);M.position.set(0,2,5),g.add(M);const A=new ca(2,2),w=new In({uniforms:t.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:ti,depthWrite:!1});l.current=w;const R=new Ao(-1,1,1,-1,0,1);u.current=R;const x=new Tf;c.current=x;const b=new ni(A,w);x.add(b);const P=H=>{const W=H.clientX/window.innerWidth*2-1,k=-(H.clientY/window.innerHeight)*2+1;y.target.x=W*.3,y.target.y=k*.3};window.addEventListener("mousemove",P);const O=()=>{requestAnimationFrame(O),l.current&&(l.current.uniforms.iTime.value+=.01),i.getDelta(),y.update(),p.autoClear=!1,p.clear(),p.render(x,R),p.render(g,m)};O();const N=()=>{p.setSize(window.innerWidth,window.innerHeight),m.aspect=window.innerWidth/window.innerHeight,m.updateProjectionMatrix()};return window.addEventListener("resize",N),()=>{e.current.removeChild(p.domElement),window.removeEventListener("resize",N),window.removeEventListener("mousemove",P)}},[]),ft.jsx("div",{ref:e,style:{width:"100vw",height:"100vh"}})},Sm=Q.createContext({});function Mm(n){var t,e,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var s=n.length;for(t=0;t<s;t++)n[t]&&(e=Mm(n[t]))&&(i&&(i+=" "),i+=e)}else for(e in n)n[e]&&(i&&(i+=" "),i+=e);return i}function QT(){for(var n,t,e=0,i="",s=arguments.length;e<s;e++)(n=arguments[e])&&(t=Mm(n))&&(i&&(i+=" "),i+=t);return i}const tb={aliceblue:"9ehhb",antiquewhite:"9sgk7",aqua:"1ekf",aquamarine:"4zsno",azure:"9eiv3",beige:"9lhp8",bisque:"9zg04",black:"0",blanchedalmond:"9zhe5",blue:"73",blueviolet:"5e31e",brown:"6g016",burlywood:"8ouiv",cadetblue:"3qba8",chartreuse:"4zshs",chocolate:"87k0u",coral:"9yvyo",cornflowerblue:"3xael",cornsilk:"9zjz0",crimson:"8l4xo",cyan:"1ekf",darkblue:"3v",darkcyan:"rkb",darkgoldenrod:"776yz",darkgray:"6mbhl",darkgreen:"jr4",darkgrey:"6mbhl",darkkhaki:"7ehkb",darkmagenta:"5f91n",darkolivegreen:"3bzfz",darkorange:"9yygw",darkorchid:"5z6x8",darkred:"5f8xs",darksalmon:"9441m",darkseagreen:"5lwgf",darkslateblue:"2th1n",darkslategray:"1ugcv",darkslategrey:"1ugcv",darkturquoise:"14up",darkviolet:"5rw7n",deeppink:"9yavn",deepskyblue:"11xb",dimgray:"442g9",dimgrey:"442g9",dodgerblue:"16xof",firebrick:"6y7tu",floralwhite:"9zkds",forestgreen:"1cisi",fuchsia:"9y70f",gainsboro:"8m8kc",ghostwhite:"9pq0v",goldenrod:"8j4f4",gold:"9zda8",gray:"50i2o",green:"pa8",greenyellow:"6senj",grey:"50i2o",honeydew:"9eiuo",hotpink:"9yrp0",indianred:"80gnw",indigo:"2xcoy",ivory:"9zldc",khaki:"9edu4",lavenderblush:"9ziet",lavender:"90c8q",lawngreen:"4vk74",lemonchiffon:"9zkct",lightblue:"6s73a",lightcoral:"9dtog",lightcyan:"8s1rz",lightgoldenrodyellow:"9sjiq",lightgray:"89jo3",lightgreen:"5nkwg",lightgrey:"89jo3",lightpink:"9z6wx",lightsalmon:"9z2ii",lightseagreen:"19xgq",lightskyblue:"5arju",lightslategray:"4nwk9",lightslategrey:"4nwk9",lightsteelblue:"6wau6",lightyellow:"9zlcw",lime:"1edc",limegreen:"1zcxe",linen:"9shk6",magenta:"9y70f",maroon:"4zsow",mediumaquamarine:"40eju",mediumblue:"5p",mediumorchid:"79qkz",mediumpurple:"5r3rv",mediumseagreen:"2d9ip",mediumslateblue:"4tcku",mediumspringgreen:"1di2",mediumturquoise:"2uabw",mediumvioletred:"7rn9h",midnightblue:"z980",mintcream:"9ljp6",mistyrose:"9zg0x",moccasin:"9zfzp",navajowhite:"9zest",navy:"3k",oldlace:"9wq92",olive:"50hz4",olivedrab:"472ub",orange:"9z3eo",orangered:"9ykg0",orchid:"8iu3a",palegoldenrod:"9bl4a",palegreen:"5yw0o",paleturquoise:"6v4ku",palevioletred:"8k8lv",papayawhip:"9zi6t",peachpuff:"9ze0p",peru:"80oqn",pink:"9z8wb",plum:"8nba5",powderblue:"6wgdi",purple:"4zssg",rebeccapurple:"3zk49",red:"9y6tc",rosybrown:"7cv4f",royalblue:"2jvtt",saddlebrown:"5fmkz",salmon:"9rvci",sandybrown:"9jn1c",seagreen:"1tdnb",seashell:"9zje6",sienna:"6973h",silver:"7ir40",skyblue:"5arjf",slateblue:"45e4t",slategray:"4e100",slategrey:"4e100",snow:"9zke2",springgreen:"1egv",steelblue:"2r1kk",tan:"87yx8",teal:"pds",thistle:"8ggk8",tomato:"9yqfb",turquoise:"2j4r4",violet:"9b10u",wheat:"9ld4j",white:"9zldr",whitesmoke:"9lhpx",yellow:"9zl6o",yellowgreen:"61fzm"},Fe=Math.round;function vl(n,t){const e=n.replace(/^[^(]*\((.*)/,"$1").replace(/\).*/,"").match(/\d*\.?\d+%?/g)||[],i=e.map(s=>parseFloat(s));for(let s=0;s<3;s+=1)i[s]=t(i[s]||0,e[s]||"",s);return e[3]?i[3]=e[3].includes("%")?i[3]/100:i[3]:i[3]=1,i}const Qf=(n,t,e)=>e===0?n:n/100;function Cr(n,t){const e=t||255;return n>e?e:n<0?0:n}class ks{isValid=!0;r=0;g=0;b=0;a=1;_h;_s;_l;_v;_max;_min;_brightness;constructor(t){function e(i){return i[0]in t&&i[1]in t&&i[2]in t}if(t)if(typeof t=="string"){let s=function(r){return i.startsWith(r)};const i=t.trim();if(/^#?[A-F\d]{3,8}$/i.test(i))this.fromHexString(i);else if(s("rgb"))this.fromRgbString(i);else if(s("hsl"))this.fromHslString(i);else if(s("hsv")||s("hsb"))this.fromHsvString(i);else{const r=tb[i.toLowerCase()];r&&this.fromHexString(parseInt(r,36).toString(16).padStart(6,"0"))}}else if(t instanceof ks)this.r=t.r,this.g=t.g,this.b=t.b,this.a=t.a,this._h=t._h,this._s=t._s,this._l=t._l,this._v=t._v;else if(e("rgb"))this.r=Cr(t.r),this.g=Cr(t.g),this.b=Cr(t.b),this.a=typeof t.a=="number"?Cr(t.a,1):1;else if(e("hsl"))this.fromHsl(t);else if(e("hsv"))this.fromHsv(t);else throw new Error("@ant-design/fast-color: unsupported input "+JSON.stringify(t))}setR(t){return this._sc("r",t)}setG(t){return this._sc("g",t)}setB(t){return this._sc("b",t)}setA(t){return this._sc("a",t,1)}setHue(t){const e=this.toHsv();return e.h=t,this._c(e)}getLuminance(){function t(r){const a=r/255;return a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4)}const e=t(this.r),i=t(this.g),s=t(this.b);return .2126*e+.7152*i+.0722*s}getHue(){if(typeof this._h>"u"){const t=this.getMax()-this.getMin();t===0?this._h=0:this._h=Fe(60*(this.r===this.getMax()?(this.g-this.b)/t+(this.g<this.b?6:0):this.g===this.getMax()?(this.b-this.r)/t+2:(this.r-this.g)/t+4))}return this._h}getSaturation(){if(typeof this._s>"u"){const t=this.getMax()-this.getMin();t===0?this._s=0:this._s=t/this.getMax()}return this._s}getLightness(){return typeof this._l>"u"&&(this._l=(this.getMax()+this.getMin())/510),this._l}getValue(){return typeof this._v>"u"&&(this._v=this.getMax()/255),this._v}getBrightness(){return typeof this._brightness>"u"&&(this._brightness=(this.r*299+this.g*587+this.b*114)/1e3),this._brightness}darken(t=10){const e=this.getHue(),i=this.getSaturation();let s=this.getLightness()-t/100;return s<0&&(s=0),this._c({h:e,s:i,l:s,a:this.a})}lighten(t=10){const e=this.getHue(),i=this.getSaturation();let s=this.getLightness()+t/100;return s>1&&(s=1),this._c({h:e,s:i,l:s,a:this.a})}mix(t,e=50){const i=this._c(t),s=e/100,r=o=>(i[o]-this[o])*s+this[o],a={r:Fe(r("r")),g:Fe(r("g")),b:Fe(r("b")),a:Fe(r("a")*100)/100};return this._c(a)}tint(t=10){return this.mix({r:255,g:255,b:255,a:1},t)}shade(t=10){return this.mix({r:0,g:0,b:0,a:1},t)}onBackground(t){const e=this._c(t),i=this.a+e.a*(1-this.a),s=r=>Fe((this[r]*this.a+e[r]*e.a*(1-this.a))/i);return this._c({r:s("r"),g:s("g"),b:s("b"),a:i})}isDark(){return this.getBrightness()<128}isLight(){return this.getBrightness()>=128}equals(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}clone(){return this._c(this)}toHexString(){let t="#";const e=(this.r||0).toString(16);t+=e.length===2?e:"0"+e;const i=(this.g||0).toString(16);t+=i.length===2?i:"0"+i;const s=(this.b||0).toString(16);if(t+=s.length===2?s:"0"+s,typeof this.a=="number"&&this.a>=0&&this.a<1){const r=Fe(this.a*255).toString(16);t+=r.length===2?r:"0"+r}return t}toHsl(){return{h:this.getHue(),s:this.getSaturation(),l:this.getLightness(),a:this.a}}toHslString(){const t=this.getHue(),e=Fe(this.getSaturation()*100),i=Fe(this.getLightness()*100);return this.a!==1?`hsla(${t},${e}%,${i}%,${this.a})`:`hsl(${t},${e}%,${i}%)`}toHsv(){return{h:this.getHue(),s:this.getSaturation(),v:this.getValue(),a:this.a}}toRgb(){return{r:this.r,g:this.g,b:this.b,a:this.a}}toRgbString(){return this.a!==1?`rgba(${this.r},${this.g},${this.b},${this.a})`:`rgb(${this.r},${this.g},${this.b})`}toString(){return this.toRgbString()}_sc(t,e,i){const s=this.clone();return s[t]=Cr(e,i),s}_c(t){return new this.constructor(t)}getMax(){return typeof this._max>"u"&&(this._max=Math.max(this.r,this.g,this.b)),this._max}getMin(){return typeof this._min>"u"&&(this._min=Math.min(this.r,this.g,this.b)),this._min}fromHexString(t){const e=t.replace("#","");function i(s,r){return parseInt(e[s]+e[r||s],16)}e.length<6?(this.r=i(0),this.g=i(1),this.b=i(2),this.a=e[3]?i(3)/255:1):(this.r=i(0,1),this.g=i(2,3),this.b=i(4,5),this.a=e[6]?i(6,7)/255:1)}fromHsl({h:t,s:e,l:i,a:s}){if(this._h=t%360,this._s=e,this._l=i,this.a=typeof s=="number"?s:1,e<=0){const f=Fe(i*255);this.r=f,this.g=f,this.b=f}let r=0,a=0,o=0;const l=t/60,c=(1-Math.abs(2*i-1))*e,u=c*(1-Math.abs(l%2-1));l>=0&&l<1?(r=c,a=u):l>=1&&l<2?(r=u,a=c):l>=2&&l<3?(a=c,o=u):l>=3&&l<4?(a=u,o=c):l>=4&&l<5?(r=u,o=c):l>=5&&l<6&&(r=c,o=u);const h=i-c/2;this.r=Fe((r+h)*255),this.g=Fe((a+h)*255),this.b=Fe((o+h)*255)}fromHsv({h:t,s:e,v:i,a:s}){this._h=t%360,this._s=e,this._v=i,this.a=typeof s=="number"?s:1;const r=Fe(i*255);if(this.r=r,this.g=r,this.b=r,e<=0)return;const a=t/60,o=Math.floor(a),l=a-o,c=Fe(i*(1-e)*255),u=Fe(i*(1-e*l)*255),h=Fe(i*(1-e*(1-l))*255);switch(o){case 0:this.g=h,this.b=c;break;case 1:this.r=u,this.b=c;break;case 2:this.r=c,this.b=h;break;case 3:this.r=c,this.g=u;break;case 4:this.r=h,this.g=c;break;case 5:default:this.g=c,this.b=u;break}}fromHsvString(t){const e=vl(t,Qf);this.fromHsv({h:e[0],s:e[1],v:e[2],a:e[3]})}fromHslString(t){const e=vl(t,Qf);this.fromHsl({h:e[0],s:e[1],l:e[2],a:e[3]})}fromRgbString(t){const e=vl(t,(i,s)=>s.includes("%")?Fe(i/100*255):i);this.r=e[0],this.g=e[1],this.b=e[2],this.a=e[3]}}const Va=2,td=.16,eb=.05,nb=.05,ib=.15,Tm=5,bm=4,sb=[{index:7,amount:15},{index:6,amount:25},{index:5,amount:30},{index:5,amount:45},{index:5,amount:65},{index:5,amount:85},{index:4,amount:90},{index:3,amount:95},{index:2,amount:97},{index:1,amount:98}];function ed(n,t,e){let i;return Math.round(n.h)>=60&&Math.round(n.h)<=240?i=e?Math.round(n.h)-Va*t:Math.round(n.h)+Va*t:i=e?Math.round(n.h)+Va*t:Math.round(n.h)-Va*t,i<0?i+=360:i>=360&&(i-=360),i}function nd(n,t,e){if(n.h===0&&n.s===0)return n.s;let i;return e?i=n.s-td*t:t===bm?i=n.s+td:i=n.s+eb*t,i>1&&(i=1),e&&t===Tm&&i>.1&&(i=.1),i<.06&&(i=.06),Math.round(i*100)/100}function id(n,t,e){let i;return e?i=n.v+nb*t:i=n.v-ib*t,i=Math.max(0,Math.min(1,i)),Math.round(i*100)/100}function rb(n,t={}){const e=[],i=new ks(n),s=i.toHsv();for(let r=Tm;r>0;r-=1){const a=new ks({h:ed(s,r,!0),s:nd(s,r,!0),v:id(s,r,!0)});e.push(a)}e.push(i);for(let r=1;r<=bm;r+=1){const a=new ks({h:ed(s,r),s:nd(s,r),v:id(s,r)});e.push(a)}return t.theme==="dark"?sb.map(({index:r,amount:a})=>new ks(t.backgroundColor||"#141414").mix(e[r],a).toHexString()):e.map(r=>r.toHexString())}const Bc=["#e6f4ff","#bae0ff","#91caff","#69b1ff","#4096ff","#1677ff","#0958d9","#003eb3","#002c8c","#001d66"];Bc.primary=Bc[5];function ab(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function ob(n,t){if(!n)return!1;if(n.contains)return n.contains(t);let e=t;for(;e;){if(e===n)return!0;e=e.parentNode}return!1}const sd="data-rc-order",rd="data-rc-priority",lb="rc-util-key",Vc=new Map;function Em({mark:n}={}){return n?n.startsWith("data-")?n:`data-${n}`:lb}function ku(n){return n.attachTo?n.attachTo:document.querySelector("head")||document.body}function cb(n){return n==="queue"?"prependQueue":n?"prepend":"append"}function zu(n){return Array.from((Vc.get(n)||n).children).filter(t=>t.tagName==="STYLE")}function Am(n,t={}){if(!ab())return null;const{csp:e,prepend:i,priority:s=0}=t,r=cb(i),a=r==="prependQueue",o=document.createElement("style");o.setAttribute(sd,r),a&&s&&o.setAttribute(rd,`${s}`),e?.nonce&&(o.nonce=e?.nonce),o.innerHTML=n;const l=ku(t),{firstChild:c}=l;if(i){if(a){const u=(t.styles||zu(l)).filter(h=>{if(!["prepend","prependQueue"].includes(h.getAttribute(sd)))return!1;const f=Number(h.getAttribute(rd)||0);return s>=f});if(u.length)return l.insertBefore(o,u[u.length-1].nextSibling),o}l.insertBefore(o,c)}else l.appendChild(o);return o}function ub(n,t={}){let{styles:e}=t;return e||=zu(ku(t)),e.find(i=>i.getAttribute(Em(t))===n)}function hb(n,t){const e=Vc.get(n);if(!e||!ob(document,e)){const i=Am("",t),{parentNode:s}=i;Vc.set(n,s),n.removeChild(i)}}function fb(n,t,e={}){const i=ku(e),s=zu(i),r={...e,styles:s};hb(i,r);const a=ub(t,r);if(a)return r.csp?.nonce&&a.nonce!==r.csp?.nonce&&(a.nonce=r.csp?.nonce),a.innerHTML!==n&&(a.innerHTML=n),a;const o=Am(n,r);return o.setAttribute(Em(r),t),o}function wm(n){return n?.getRootNode?.()}function db(n){return wm(n)instanceof ShadowRoot}function pb(n){return db(n)?wm(n):null}let kc={};const mb=n=>{};function gb(n,t){}function _b(n,t){}function xb(){kc={}}function Cm(n,t,e){!t&&!kc[e]&&(n(!1,e),kc[e]=!0)}function Ro(n,t){Cm(gb,n,t)}function vb(n,t){Cm(_b,n,t)}Ro.preMessage=mb;Ro.resetWarned=xb;Ro.noteOnce=vb;function yb(n){return n.replace(/-(.)/g,(t,e)=>e.toUpperCase())}function Sb(n,t){Ro(n,`[@ant-design/icons] ${t}`)}function ad(n){return typeof n=="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&(typeof n.icon=="object"||typeof n.icon=="function")}function od(n={}){return Object.keys(n).reduce((t,e)=>{const i=n[e];switch(e){case"class":t.className=i,delete t.class;break;default:delete t[e],t[yb(e)]=i}return t},{})}function zc(n,t,e){return e?qh.createElement(n.tag,{key:t,...od(n.attrs),...e},(n.children||[]).map((i,s)=>zc(i,`${t}-${n.tag}-${s}`))):qh.createElement(n.tag,{key:t,...od(n.attrs)},(n.children||[]).map((i,s)=>zc(i,`${t}-${n.tag}-${s}`)))}function Rm(n){return rb(n)[0]}function Pm(n){return n?Array.isArray(n)?n:[n]:[]}const Mb=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
  vertical-align: inherit;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,Tb=n=>{const{csp:t,prefixCls:e,layer:i}=Q.useContext(Sm);let s=Mb;e&&(s=s.replace(/anticon/g,e)),i&&(s=`@layer ${i} {
${s}
}`),Q.useEffect(()=>{const r=n.current,a=pb(r);fb(s,"@ant-design-icons",{prepend:!i,csp:t,attachTo:a})},[])},Fr={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function bb({primaryColor:n,secondaryColor:t}){Fr.primaryColor=n,Fr.secondaryColor=t||Rm(n),Fr.calculated=!!t}function Eb(){return{...Fr}}const mr=n=>{const{icon:t,className:e,onClick:i,style:s,primaryColor:r,secondaryColor:a,...o}=n,l=Q.useRef(null);let c=Fr;if(r&&(c={primaryColor:r,secondaryColor:a||Rm(r)}),Tb(l),Sb(ad(t),`icon should be icon definiton, but got ${t}`),!ad(t))return null;let u=t;return u&&typeof u.icon=="function"&&(u={...u,icon:u.icon(c.primaryColor,c.secondaryColor)}),zc(u.icon,`svg-${u.name}`,{className:e,onClick:i,style:s,"data-icon":u.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",...o,ref:l})};mr.displayName="IconReact";mr.getTwoToneColors=Eb;mr.setTwoToneColors=bb;function Dm(n){const[t,e]=Pm(n);return mr.setTwoToneColors({primaryColor:t,secondaryColor:e})}function Ab(){const n=mr.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor}function Hc(){return Hc=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},Hc.apply(this,arguments)}Dm(Bc.primary);const Hu=Q.forwardRef((n,t)=>{const{className:e,icon:i,spin:s,rotate:r,tabIndex:a,onClick:o,twoToneColor:l,...c}=n,{prefixCls:u="anticon",rootClassName:h}=Q.useContext(Sm),f=QT(h,u,{[`${u}-${i.name}`]:!!i.name,[`${u}-spin`]:!!s||i.name==="loading"},e);let d=a;d===void 0&&o&&(d=-1);const _=r?{msTransform:`rotate(${r}deg)`,transform:`rotate(${r}deg)`}:void 0,[g,m]=Pm(l);return Q.createElement("span",Hc({role:"img","aria-label":i.name},c,{ref:t,tabIndex:d,onClick:o,className:f}),Q.createElement(mr,{icon:i,primaryColor:g,secondaryColor:m,style:_}))});Hu.getTwoToneColor=Ab;Hu.setTwoToneColor=Dm;var wb={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]},name:"mail",theme:"outlined"};function Gc(){return Gc=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},Gc.apply(this,arguments)}const Cb=(n,t)=>Q.createElement(Hu,Gc({},n,{ref:t,icon:wb})),Lm=Q.forwardRef(Cb),Gu=Q.createContext({});function Wu(n){const t=Q.useRef(null);return t.current===null&&(t.current=n()),t.current}const Xu=typeof window<"u",Im=Xu?Q.useLayoutEffect:Q.useEffect,Po=Q.createContext(null);function ju(n,t){n.indexOf(t)===-1&&n.push(t)}function Yu(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}const yi=(n,t,e)=>e>t?t:e<n?n:e;let qu=()=>{};const Si={},Um=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function Nm(n){return typeof n=="object"&&n!==null}const Fm=n=>/^0[^.\s]+$/u.test(n);function Ku(n){let t;return()=>(t===void 0&&(t=n()),t)}const Ln=n=>n,Rb=(n,t)=>e=>t(n(e)),ua=(...n)=>n.reduce(Rb),qr=(n,t,e)=>{const i=t-n;return i===0?1:(e-n)/i};class $u{constructor(){this.subscriptions=[]}add(t){return ju(this.subscriptions,t),()=>Yu(this.subscriptions,t)}notify(t,e,i){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](t,e,i);else for(let r=0;r<s;r++){const a=this.subscriptions[r];a&&a(t,e,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Jn=n=>n*1e3,Rn=n=>n/1e3;function Om(n,t){return t?n*(1e3/t):0}const Bm=(n,t,e)=>(((1-3*e+3*t)*n+(3*e-6*t))*n+3*t)*n,Pb=1e-7,Db=12;function Lb(n,t,e,i,s){let r,a,o=0;do a=t+(e-t)/2,r=Bm(a,i,s)-n,r>0?e=a:t=a;while(Math.abs(r)>Pb&&++o<Db);return a}function ha(n,t,e,i){if(n===t&&e===i)return Ln;const s=r=>Lb(r,0,1,n,e);return r=>r===0||r===1?r:Bm(s(r),t,i)}const Vm=n=>t=>t<=.5?n(2*t)/2:(2-n(2*(1-t)))/2,km=n=>t=>1-n(1-t),zm=ha(.33,1.53,.69,.99),Zu=km(zm),Hm=Vm(Zu),Gm=n=>(n*=2)<1?.5*Zu(n):.5*(2-Math.pow(2,-10*(n-1))),Ju=n=>1-Math.sin(Math.acos(n)),Wm=km(Ju),Xm=Vm(Ju),Ib=ha(.42,0,1,1),Ub=ha(0,0,.58,1),jm=ha(.42,0,.58,1),Nb=n=>Array.isArray(n)&&typeof n[0]!="number",Ym=n=>Array.isArray(n)&&typeof n[0]=="number",Fb={linear:Ln,easeIn:Ib,easeInOut:jm,easeOut:Ub,circIn:Ju,circInOut:Xm,circOut:Wm,backIn:Zu,backInOut:Hm,backOut:zm,anticipate:Gm},Ob=n=>typeof n=="string",ld=n=>{if(Ym(n)){qu(n.length===4);const[t,e,i,s]=n;return ha(t,e,i,s)}else if(Ob(n))return Fb[n];return n},ka=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Bb(n,t){let e=new Set,i=new Set,s=!1,r=!1;const a=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function l(u){a.has(u)&&(c.schedule(u),n()),u(o)}const c={schedule:(u,h=!1,f=!1)=>{const _=f&&s?e:i;return h&&a.add(u),_.has(u)||_.add(u),u},cancel:u=>{i.delete(u),a.delete(u)},process:u=>{if(o=u,s){r=!0;return}s=!0,[e,i]=[i,e],e.forEach(l),e.clear(),s=!1,r&&(r=!1,c.process(u))}};return c}const Vb=40;function qm(n,t){let e=!1,i=!0;const s={delta:0,timestamp:0,isProcessing:!1},r=()=>e=!0,a=ka.reduce((S,T)=>(S[T]=Bb(r),S),{}),{setup:o,read:l,resolveKeyframes:c,preUpdate:u,update:h,preRender:f,render:d,postRender:_}=a,g=()=>{const S=Si.useManualTiming?s.timestamp:performance.now();e=!1,Si.useManualTiming||(s.delta=i?1e3/60:Math.max(Math.min(S-s.timestamp,Vb),1)),s.timestamp=S,s.isProcessing=!0,o.process(s),l.process(s),c.process(s),u.process(s),h.process(s),f.process(s),d.process(s),_.process(s),s.isProcessing=!1,e&&t&&(i=!1,n(g))},m=()=>{e=!0,i=!0,s.isProcessing||n(g)};return{schedule:ka.reduce((S,T)=>{const M=a[T];return S[T]=(A,w=!1,R=!1)=>(e||m(),M.schedule(A,w,R)),S},{}),cancel:S=>{for(let T=0;T<ka.length;T++)a[ka[T]].cancel(S)},state:s,steps:a}}const{schedule:de,cancel:ki,state:Be,steps:yl}=qm(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ln,!0);let Qa;function kb(){Qa=void 0}const sn={now:()=>(Qa===void 0&&sn.set(Be.isProcessing||Si.useManualTiming?Be.timestamp:performance.now()),Qa),set:n=>{Qa=n,queueMicrotask(kb)}},Km=n=>t=>typeof t=="string"&&t.startsWith(n),$m=Km("--"),zb=Km("var(--"),Qu=n=>zb(n)?Hb.test(n.split("/*")[0].trim()):!1,Hb=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,gr={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Kr={...gr,transform:n=>yi(0,1,n)},za={...gr,default:1},Or=n=>Math.round(n*1e5)/1e5,th=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Gb(n){return n==null}const Wb=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,eh=(n,t)=>e=>!!(typeof e=="string"&&Wb.test(e)&&e.startsWith(n)||t&&!Gb(e)&&Object.prototype.hasOwnProperty.call(e,t)),Zm=(n,t,e)=>i=>{if(typeof i!="string")return i;const[s,r,a,o]=i.match(th);return{[n]:parseFloat(s),[t]:parseFloat(r),[e]:parseFloat(a),alpha:o!==void 0?parseFloat(o):1}},Xb=n=>yi(0,255,n),Sl={...gr,transform:n=>Math.round(Xb(n))},us={test:eh("rgb","red"),parse:Zm("red","green","blue"),transform:({red:n,green:t,blue:e,alpha:i=1})=>"rgba("+Sl.transform(n)+", "+Sl.transform(t)+", "+Sl.transform(e)+", "+Or(Kr.transform(i))+")"};function jb(n){let t="",e="",i="",s="";return n.length>5?(t=n.substring(1,3),e=n.substring(3,5),i=n.substring(5,7),s=n.substring(7,9)):(t=n.substring(1,2),e=n.substring(2,3),i=n.substring(3,4),s=n.substring(4,5),t+=t,e+=e,i+=i,s+=s),{red:parseInt(t,16),green:parseInt(e,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const Wc={test:eh("#"),parse:jb,transform:us.transform},fa=n=>({test:t=>typeof t=="string"&&t.endsWith(n)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${n}`}),Di=fa("deg"),Qn=fa("%"),Ct=fa("px"),Yb=fa("vh"),qb=fa("vw"),cd={...Qn,parse:n=>Qn.parse(n)/100,transform:n=>Qn.transform(n*100)},zs={test:eh("hsl","hue"),parse:Zm("hue","saturation","lightness"),transform:({hue:n,saturation:t,lightness:e,alpha:i=1})=>"hsla("+Math.round(n)+", "+Qn.transform(Or(t))+", "+Qn.transform(Or(e))+", "+Or(Kr.transform(i))+")"},Ce={test:n=>us.test(n)||Wc.test(n)||zs.test(n),parse:n=>us.test(n)?us.parse(n):zs.test(n)?zs.parse(n):Wc.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?us.transform(n):zs.transform(n),getAnimatableNone:n=>{const t=Ce.parse(n);return t.alpha=0,Ce.transform(t)}},Kb=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function $b(n){return isNaN(n)&&typeof n=="string"&&(n.match(th)?.length||0)+(n.match(Kb)?.length||0)>0}const Jm="number",Qm="color",Zb="var",Jb="var(",ud="${}",Qb=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function $r(n){const t=n.toString(),e=[],i={color:[],number:[],var:[]},s=[];let r=0;const o=t.replace(Qb,l=>(Ce.test(l)?(i.color.push(r),s.push(Qm),e.push(Ce.parse(l))):l.startsWith(Jb)?(i.var.push(r),s.push(Zb),e.push(l)):(i.number.push(r),s.push(Jm),e.push(parseFloat(l))),++r,ud)).split(ud);return{values:e,split:o,indexes:i,types:s}}function tg(n){return $r(n).values}function eg(n){const{split:t,types:e}=$r(n),i=t.length;return s=>{let r="";for(let a=0;a<i;a++)if(r+=t[a],s[a]!==void 0){const o=e[a];o===Jm?r+=Or(s[a]):o===Qm?r+=Ce.transform(s[a]):r+=s[a]}return r}}const tE=n=>typeof n=="number"?0:Ce.test(n)?Ce.getAnimatableNone(n):n;function eE(n){const t=tg(n);return eg(n)(t.map(tE))}const zi={test:$b,parse:tg,createTransformer:eg,getAnimatableNone:eE};function Ml(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*(2/3-e)*6:n}function nE({hue:n,saturation:t,lightness:e,alpha:i}){n/=360,t/=100,e/=100;let s=0,r=0,a=0;if(!t)s=r=a=e;else{const o=e<.5?e*(1+t):e+t-e*t,l=2*e-o;s=Ml(l,o,n+1/3),r=Ml(l,o,n),a=Ml(l,o,n-1/3)}return{red:Math.round(s*255),green:Math.round(r*255),blue:Math.round(a*255),alpha:i}}function uo(n,t){return e=>e>0?t:n}const ge=(n,t,e)=>n+(t-n)*e,Tl=(n,t,e)=>{const i=n*n,s=e*(t*t-i)+i;return s<0?0:Math.sqrt(s)},iE=[Wc,us,zs],sE=n=>iE.find(t=>t.test(n));function hd(n){const t=sE(n);if(!t)return!1;let e=t.parse(n);return t===zs&&(e=nE(e)),e}const fd=(n,t)=>{const e=hd(n),i=hd(t);if(!e||!i)return uo(n,t);const s={...e};return r=>(s.red=Tl(e.red,i.red,r),s.green=Tl(e.green,i.green,r),s.blue=Tl(e.blue,i.blue,r),s.alpha=ge(e.alpha,i.alpha,r),us.transform(s))},Xc=new Set(["none","hidden"]);function rE(n,t){return Xc.has(n)?e=>e<=0?n:t:e=>e>=1?t:n}function aE(n,t){return e=>ge(n,t,e)}function nh(n){return typeof n=="number"?aE:typeof n=="string"?Qu(n)?uo:Ce.test(n)?fd:cE:Array.isArray(n)?ng:typeof n=="object"?Ce.test(n)?fd:oE:uo}function ng(n,t){const e=[...n],i=e.length,s=n.map((r,a)=>nh(r)(r,t[a]));return r=>{for(let a=0;a<i;a++)e[a]=s[a](r);return e}}function oE(n,t){const e={...n,...t},i={};for(const s in e)n[s]!==void 0&&t[s]!==void 0&&(i[s]=nh(n[s])(n[s],t[s]));return s=>{for(const r in i)e[r]=i[r](s);return e}}function lE(n,t){const e=[],i={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const r=t.types[s],a=n.indexes[r][i[r]],o=n.values[a]??0;e[s]=o,i[r]++}return e}const cE=(n,t)=>{const e=zi.createTransformer(t),i=$r(n),s=$r(t);return i.indexes.var.length===s.indexes.var.length&&i.indexes.color.length===s.indexes.color.length&&i.indexes.number.length>=s.indexes.number.length?Xc.has(n)&&!s.values.length||Xc.has(t)&&!i.values.length?rE(n,t):ua(ng(lE(i,s),s.values),e):uo(n,t)};function ig(n,t,e){return typeof n=="number"&&typeof t=="number"&&typeof e=="number"?ge(n,t,e):nh(n)(n,t)}const uE=n=>{const t=({timestamp:e})=>n(e);return{start:(e=!0)=>de.update(t,e),stop:()=>ki(t),now:()=>Be.isProcessing?Be.timestamp:sn.now()}},sg=(n,t,e=10)=>{let i="";const s=Math.max(Math.round(t/e),2);for(let r=0;r<s;r++)i+=Math.round(n(r/(s-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},ho=2e4;function ih(n){let t=0;const e=50;let i=n.next(t);for(;!i.done&&t<ho;)t+=e,i=n.next(t);return t>=ho?1/0:t}function hE(n,t=100,e){const i=e({...n,keyframes:[0,t]}),s=Math.min(ih(i),ho);return{type:"keyframes",ease:r=>i.next(s*r).value/t,duration:Rn(s)}}const fE=5;function rg(n,t,e){const i=Math.max(t-fE,0);return Om(e-n(i),t-i)}const ye={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},bl=.001;function dE({duration:n=ye.duration,bounce:t=ye.bounce,velocity:e=ye.velocity,mass:i=ye.mass}){let s,r,a=1-t;a=yi(ye.minDamping,ye.maxDamping,a),n=yi(ye.minDuration,ye.maxDuration,Rn(n)),a<1?(s=c=>{const u=c*a,h=u*n,f=u-e,d=jc(c,a),_=Math.exp(-h);return bl-f/d*_},r=c=>{const h=c*a*n,f=h*e+e,d=Math.pow(a,2)*Math.pow(c,2)*n,_=Math.exp(-h),g=jc(Math.pow(c,2),a);return(-s(c)+bl>0?-1:1)*((f-d)*_)/g}):(s=c=>{const u=Math.exp(-c*n),h=(c-e)*n+1;return-bl+u*h},r=c=>{const u=Math.exp(-c*n),h=(e-c)*(n*n);return u*h});const o=5/n,l=mE(s,r,o);if(n=Jn(n),isNaN(l))return{stiffness:ye.stiffness,damping:ye.damping,duration:n};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:a*2*Math.sqrt(i*c),duration:n}}}const pE=12;function mE(n,t,e){let i=e;for(let s=1;s<pE;s++)i=i-n(i)/t(i);return i}function jc(n,t){return n*Math.sqrt(1-t*t)}const gE=["duration","bounce"],_E=["stiffness","damping","mass"];function dd(n,t){return t.some(e=>n[e]!==void 0)}function xE(n){let t={velocity:ye.velocity,stiffness:ye.stiffness,damping:ye.damping,mass:ye.mass,isResolvedFromDuration:!1,...n};if(!dd(n,_E)&&dd(n,gE))if(n.visualDuration){const e=n.visualDuration,i=2*Math.PI/(e*1.2),s=i*i,r=2*yi(.05,1,1-(n.bounce||0))*Math.sqrt(s);t={...t,mass:ye.mass,stiffness:s,damping:r}}else{const e=dE(n);t={...t,...e,mass:ye.mass},t.isResolvedFromDuration=!0}return t}function fo(n=ye.visualDuration,t=ye.bounce){const e=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:t}:n;let{restSpeed:i,restDelta:s}=e;const r=e.keyframes[0],a=e.keyframes[e.keyframes.length-1],o={done:!1,value:r},{stiffness:l,damping:c,mass:u,duration:h,velocity:f,isResolvedFromDuration:d}=xE({...e,velocity:-Rn(e.velocity||0)}),_=f||0,g=c/(2*Math.sqrt(l*u)),m=a-r,p=Rn(Math.sqrt(l/u)),y=Math.abs(m)<5;i||(i=y?ye.restSpeed.granular:ye.restSpeed.default),s||(s=y?ye.restDelta.granular:ye.restDelta.default);let S;if(g<1){const M=jc(p,g);S=A=>{const w=Math.exp(-g*p*A);return a-w*((_+g*p*m)/M*Math.sin(M*A)+m*Math.cos(M*A))}}else if(g===1)S=M=>a-Math.exp(-p*M)*(m+(_+p*m)*M);else{const M=p*Math.sqrt(g*g-1);S=A=>{const w=Math.exp(-g*p*A),R=Math.min(M*A,300);return a-w*((_+g*p*m)*Math.sinh(R)+M*m*Math.cosh(R))/M}}const T={calculatedDuration:d&&h||null,next:M=>{const A=S(M);if(d)o.done=M>=h;else{let w=M===0?_:0;g<1&&(w=M===0?Jn(_):rg(S,M,A));const R=Math.abs(w)<=i,x=Math.abs(a-A)<=s;o.done=R&&x}return o.value=o.done?a:A,o},toString:()=>{const M=Math.min(ih(T),ho),A=sg(w=>T.next(M*w).value,M,30);return M+"ms "+A},toTransition:()=>{}};return T}fo.applyToOptions=n=>{const t=hE(n,100,fo);return n.ease=t.ease,n.duration=Jn(t.duration),n.type="keyframes",n};function Yc({keyframes:n,velocity:t=0,power:e=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:r=500,modifyTarget:a,min:o,max:l,restDelta:c=.5,restSpeed:u}){const h=n[0],f={done:!1,value:h},d=R=>o!==void 0&&R<o||l!==void 0&&R>l,_=R=>o===void 0?l:l===void 0||Math.abs(o-R)<Math.abs(l-R)?o:l;let g=e*t;const m=h+g,p=a===void 0?m:a(m);p!==m&&(g=p-h);const y=R=>-g*Math.exp(-R/i),S=R=>p+y(R),T=R=>{const x=y(R),b=S(R);f.done=Math.abs(x)<=c,f.value=f.done?p:b};let M,A;const w=R=>{d(f.value)&&(M=R,A=fo({keyframes:[f.value,_(f.value)],velocity:rg(S,R,f.value),damping:s,stiffness:r,restDelta:c,restSpeed:u}))};return w(0),{calculatedDuration:null,next:R=>{let x=!1;return!A&&M===void 0&&(x=!0,T(R),w(R)),M!==void 0&&R>=M?A.next(R-M):(!x&&T(R),f)}}}function vE(n,t,e){const i=[],s=e||Si.mix||ig,r=n.length-1;for(let a=0;a<r;a++){let o=s(n[a],n[a+1]);if(t){const l=Array.isArray(t)?t[a]||Ln:t;o=ua(l,o)}i.push(o)}return i}function yE(n,t,{clamp:e=!0,ease:i,mixer:s}={}){const r=n.length;if(qu(r===t.length),r===1)return()=>t[0];if(r===2&&t[0]===t[1])return()=>t[1];const a=n[0]===n[1];n[0]>n[r-1]&&(n=[...n].reverse(),t=[...t].reverse());const o=vE(t,i,s),l=o.length,c=u=>{if(a&&u<n[0])return t[0];let h=0;if(l>1)for(;h<n.length-2&&!(u<n[h+1]);h++);const f=qr(n[h],n[h+1],u);return o[h](f)};return e?u=>c(yi(n[0],n[r-1],u)):c}function SE(n,t){const e=n[n.length-1];for(let i=1;i<=t;i++){const s=qr(0,t,i);n.push(ge(e,1,s))}}function ME(n){const t=[0];return SE(t,n.length-1),t}function TE(n,t){return n.map(e=>e*t)}function bE(n,t){return n.map(()=>t||jm).splice(0,n.length-1)}function Br({duration:n=300,keyframes:t,times:e,ease:i="easeInOut"}){const s=Nb(i)?i.map(ld):ld(i),r={done:!1,value:t[0]},a=TE(e&&e.length===t.length?e:ME(t),n),o=yE(a,t,{ease:Array.isArray(s)?s:bE(t,s)});return{calculatedDuration:n,next:l=>(r.value=o(l),r.done=l>=n,r)}}const EE=n=>n!==null;function sh(n,{repeat:t,repeatType:e="loop"},i,s=1){const r=n.filter(EE),o=s<0||t&&e!=="loop"&&t%2===1?0:r.length-1;return!o||i===void 0?r[o]:i}const AE={decay:Yc,inertia:Yc,tween:Br,keyframes:Br,spring:fo};function ag(n){typeof n.type=="string"&&(n.type=AE[n.type])}class rh{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,e){return this.finished.then(t,e)}}const wE=n=>n/100;class ah extends rh{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:e}=this.options;e&&e.updatedAt!==sn.now()&&this.tick(sn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;ag(t);const{type:e=Br,repeat:i=0,repeatDelay:s=0,repeatType:r,velocity:a=0}=t;let{keyframes:o}=t;const l=e||Br;l!==Br&&typeof o[0]!="number"&&(this.mixKeyframes=ua(wE,ig(o[0],o[1])),o=[0,100]);const c=l({...t,keyframes:o});r==="mirror"&&(this.mirroredGenerator=l({...t,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=ih(c));const{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+s,this.totalDuration=this.resolvedDuration*(i+1)-s,this.generator=c}updateTime(t){const e=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=e}tick(t,e=!1){const{generator:i,totalDuration:s,mixKeyframes:r,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);const{delay:c=0,keyframes:u,repeat:h,repeatType:f,repeatDelay:d,type:_,onUpdate:g,finalKeyframe:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-s/this.speed,this.startTime)),e?this.currentTime=t:this.updateTime(t);const p=this.currentTime-c*(this.playbackSpeed>=0?1:-1),y=this.playbackSpeed>=0?p<0:p>s;this.currentTime=Math.max(p,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=s);let S=this.currentTime,T=i;if(h){const R=Math.min(this.currentTime,s)/o;let x=Math.floor(R),b=R%1;!b&&R>=1&&(b=1),b===1&&x--,x=Math.min(x,h+1),!!(x%2)&&(f==="reverse"?(b=1-b,d&&(b-=d/o)):f==="mirror"&&(T=a)),S=yi(0,1,b)*o}const M=y?{done:!1,value:u[0]}:T.next(S);r&&(M.value=r(M.value));let{done:A}=M;!y&&l!==null&&(A=this.playbackSpeed>=0?this.currentTime>=s:this.currentTime<=0);const w=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return w&&_!==Yc&&(M.value=sh(u,this.options,m,this.speed)),g&&g(M.value),w&&this.finish(),M}then(t,e){return this.finished.then(t,e)}get duration(){return Rn(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Rn(t)}get time(){return Rn(this.currentTime)}set time(t){t=Jn(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(sn.now());const e=this.playbackSpeed!==t;this.playbackSpeed=t,e&&(this.time=Rn(this.currentTime))}play(){if(this.isStopped)return;const{driver:t=uE,startTime:e}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),this.options.onPlay?.();const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=e??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(sn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),t.observe(this)}}function CE(n){for(let t=1;t<n.length;t++)n[t]??(n[t]=n[t-1])}const hs=n=>n*180/Math.PI,qc=n=>{const t=hs(Math.atan2(n[1],n[0]));return Kc(t)},RE={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:qc,rotateZ:qc,skewX:n=>hs(Math.atan(n[1])),skewY:n=>hs(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Kc=n=>(n=n%360,n<0&&(n+=360),n),pd=qc,md=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),gd=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),PE={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:md,scaleY:gd,scale:n=>(md(n)+gd(n))/2,rotateX:n=>Kc(hs(Math.atan2(n[6],n[5]))),rotateY:n=>Kc(hs(Math.atan2(-n[2],n[0]))),rotateZ:pd,rotate:pd,skewX:n=>hs(Math.atan(n[4])),skewY:n=>hs(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function $c(n){return n.includes("scale")?1:0}function Zc(n,t){if(!n||n==="none")return $c(t);const e=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,s;if(e)i=PE,s=e;else{const o=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=RE,s=o}if(!s)return $c(t);const r=i[t],a=s[1].split(",").map(LE);return typeof r=="function"?r(a):a[r]}const DE=(n,t)=>{const{transform:e="none"}=getComputedStyle(n);return Zc(e,t)};function LE(n){return parseFloat(n.trim())}const _r=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],xr=new Set(_r),_d=n=>n===gr||n===Ct,IE=new Set(["x","y","z"]),UE=_r.filter(n=>!IE.has(n));function NE(n){const t=[];return UE.forEach(e=>{const i=n.getValue(e);i!==void 0&&(t.push([e,i.get()]),i.set(e.startsWith("scale")?1:0))}),t}const ds={width:({x:n},{paddingLeft:t="0",paddingRight:e="0"})=>n.max-n.min-parseFloat(t)-parseFloat(e),height:({y:n},{paddingTop:t="0",paddingBottom:e="0"})=>n.max-n.min-parseFloat(t)-parseFloat(e),top:(n,{top:t})=>parseFloat(t),left:(n,{left:t})=>parseFloat(t),bottom:({y:n},{top:t})=>parseFloat(t)+(n.max-n.min),right:({x:n},{left:t})=>parseFloat(t)+(n.max-n.min),x:(n,{transform:t})=>Zc(t,"x"),y:(n,{transform:t})=>Zc(t,"y")};ds.translateX=ds.x;ds.translateY=ds.y;const ps=new Set;let Jc=!1,Qc=!1,tu=!1;function og(){if(Qc){const n=Array.from(ps).filter(i=>i.needsMeasurement),t=new Set(n.map(i=>i.element)),e=new Map;t.forEach(i=>{const s=NE(i);s.length&&(e.set(i,s),i.render())}),n.forEach(i=>i.measureInitialState()),t.forEach(i=>{i.render();const s=e.get(i);s&&s.forEach(([r,a])=>{i.getValue(r)?.set(a)})}),n.forEach(i=>i.measureEndState()),n.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Qc=!1,Jc=!1,ps.forEach(n=>n.complete(tu)),ps.clear()}function lg(){ps.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Qc=!0)})}function FE(){tu=!0,lg(),og(),tu=!1}class oh{constructor(t,e,i,s,r,a=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=e,this.name=i,this.motionValue=s,this.element=r,this.isAsync=a}scheduleResolve(){this.state="scheduled",this.isAsync?(ps.add(this),Jc||(Jc=!0,de.read(lg),de.resolveKeyframes(og))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:e,element:i,motionValue:s}=this;if(t[0]===null){const r=s?.get(),a=t[t.length-1];if(r!==void 0)t[0]=r;else if(i&&e){const o=i.readValue(e,a);o!=null&&(t[0]=o)}t[0]===void 0&&(t[0]=a),s&&r===void 0&&s.set(t[0])}CE(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),ps.delete(this)}cancel(){this.state==="scheduled"&&(ps.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const OE=n=>n.startsWith("--");function BE(n,t,e){OE(t)?n.style.setProperty(t,e):n.style[t]=e}const VE=Ku(()=>window.ScrollTimeline!==void 0),kE={};function zE(n,t){const e=Ku(n);return()=>kE[t]??e()}const cg=zE(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ir=([n,t,e,i])=>`cubic-bezier(${n}, ${t}, ${e}, ${i})`,xd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ir([0,.65,.55,1]),circOut:Ir([.55,0,1,.45]),backIn:Ir([.31,.01,.66,-.59]),backOut:Ir([.33,1.53,.69,.99])};function ug(n,t){if(n)return typeof n=="function"?cg()?sg(n,t):"ease-out":Ym(n)?Ir(n):Array.isArray(n)?n.map(e=>ug(e,t)||xd.easeOut):xd[n]}function HE(n,t,e,{delay:i=0,duration:s=300,repeat:r=0,repeatType:a="loop",ease:o="easeOut",times:l}={},c=void 0){const u={[t]:e};l&&(u.offset=l);const h=ug(o,s);Array.isArray(h)&&(u.easing=h);const f={delay:i,duration:s,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:r+1,direction:a==="reverse"?"alternate":"normal"};return c&&(f.pseudoElement=c),n.animate(u,f)}function hg(n){return typeof n=="function"&&"applyToOptions"in n}function GE({type:n,...t}){return hg(n)&&cg()?n.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class WE extends rh{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;const{element:e,name:i,keyframes:s,pseudoElement:r,allowFlatten:a=!1,finalKeyframe:o,onComplete:l}=t;this.isPseudoElement=!!r,this.allowFlatten=a,this.options=t,qu(typeof t.type!="string");const c=GE(t);this.animation=HE(e,i,s,c,r),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!r){const u=sh(s,this.options,o,this.speed);this.updateMotionValue?this.updateMotionValue(u):BE(e,i,u),this.animation.cancel()}l?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const t=this.animation.effect?.getComputedTiming?.().duration||0;return Rn(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Rn(t)}get time(){return Rn(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=Jn(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:e}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&VE()?(this.animation.timeline=t,Ln):e(this)}}const fg={anticipate:Gm,backInOut:Hm,circInOut:Xm};function XE(n){return n in fg}function jE(n){typeof n.ease=="string"&&XE(n.ease)&&(n.ease=fg[n.ease])}const vd=10;class YE extends WE{constructor(t){jE(t),ag(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:e,onUpdate:i,onComplete:s,element:r,...a}=this.options;if(!e)return;if(t!==void 0){e.set(t);return}const o=new ah({...a,autoplay:!1}),l=Jn(this.finishedTime??this.time);e.setWithVelocity(o.sample(l-vd).value,o.sample(l).value,vd),o.stop()}}const yd=(n,t)=>t==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(zi.test(n)||n==="0")&&!n.startsWith("url("));function qE(n){const t=n[0];if(n.length===1)return!0;for(let e=0;e<n.length;e++)if(n[e]!==t)return!0}function KE(n,t,e,i){const s=n[0];if(s===null)return!1;if(t==="display"||t==="visibility")return!0;const r=n[n.length-1],a=yd(s,t),o=yd(r,t);return!a||!o?!1:qE(n)||(e==="spring"||hg(e))&&i}function eu(n){n.duration=0,n.type="keyframes"}const $E=new Set(["opacity","clipPath","filter","transform"]),ZE=Ku(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function JE(n){const{motionValue:t,name:e,repeatDelay:i,repeatType:s,damping:r,type:a}=n;if(!(t?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=t.owner.getProps();return ZE()&&e&&$E.has(e)&&(e!=="transform"||!c)&&!l&&!i&&s!=="mirror"&&r!==0&&a!=="inertia"}const QE=40;class t1 extends rh{constructor({autoplay:t=!0,delay:e=0,type:i="keyframes",repeat:s=0,repeatDelay:r=0,repeatType:a="loop",keyframes:o,name:l,motionValue:c,element:u,...h}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=sn.now();const f={autoplay:t,delay:e,type:i,repeat:s,repeatDelay:r,repeatType:a,name:l,motionValue:c,element:u,...h},d=u?.KeyframeResolver||oh;this.keyframeResolver=new d(o,(_,g,m)=>this.onKeyframesResolved(_,g,f,!m),l,c,u),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(t,e,i,s){this.keyframeResolver=void 0;const{name:r,type:a,velocity:o,delay:l,isHandoff:c,onUpdate:u}=i;this.resolvedAt=sn.now(),KE(t,r,a,o)||((Si.instantAnimations||!l)&&u?.(sh(t,i,e)),t[0]=t[t.length-1],eu(i),i.repeat=0);const f={startTime:s?this.resolvedAt?this.resolvedAt-this.createdAt>QE?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:e,...i,keyframes:t},d=!c&&JE(f)?new YE({...f,element:f.motionValue.owner.current}):new ah(f);d.finished.then(()=>this.notifyFinished()).catch(Ln),this.pendingTimeline&&(this.stopTimeline=d.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=d}get finished(){return this._animation?this.animation.finished:this._finished}then(t,e){return this.finished.finally(t).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),FE()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const e1=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function n1(n){const t=e1.exec(n);if(!t)return[,];const[,e,i,s]=t;return[`--${e??i}`,s]}function dg(n,t,e=1){const[i,s]=n1(n);if(!i)return;const r=window.getComputedStyle(t).getPropertyValue(i);if(r){const a=r.trim();return Um(a)?parseFloat(a):a}return Qu(s)?dg(s,t,e+1):s}function lh(n,t){return n?.[t]??n?.default??n}const pg=new Set(["width","height","top","left","right","bottom",..._r]),i1={test:n=>n==="auto",parse:n=>n},mg=n=>t=>t.test(n),gg=[gr,Ct,Qn,Di,qb,Yb,i1],Sd=n=>gg.find(mg(n));function s1(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Fm(n):!0}const r1=new Set(["brightness","contrast","saturate","opacity"]);function a1(n){const[t,e]=n.slice(0,-1).split("(");if(t==="drop-shadow")return n;const[i]=e.match(th)||[];if(!i)return n;const s=e.replace(i,"");let r=r1.has(t)?1:0;return i!==e&&(r*=100),t+"("+r+s+")"}const o1=/\b([a-z-]*)\(.*?\)/gu,nu={...zi,getAnimatableNone:n=>{const t=n.match(o1);return t?t.map(a1).join(" "):n}},Md={...gr,transform:Math.round},l1={rotate:Di,rotateX:Di,rotateY:Di,rotateZ:Di,scale:za,scaleX:za,scaleY:za,scaleZ:za,skew:Di,skewX:Di,skewY:Di,distance:Ct,translateX:Ct,translateY:Ct,translateZ:Ct,x:Ct,y:Ct,z:Ct,perspective:Ct,transformPerspective:Ct,opacity:Kr,originX:cd,originY:cd,originZ:Ct},ch={borderWidth:Ct,borderTopWidth:Ct,borderRightWidth:Ct,borderBottomWidth:Ct,borderLeftWidth:Ct,borderRadius:Ct,radius:Ct,borderTopLeftRadius:Ct,borderTopRightRadius:Ct,borderBottomRightRadius:Ct,borderBottomLeftRadius:Ct,width:Ct,maxWidth:Ct,height:Ct,maxHeight:Ct,top:Ct,right:Ct,bottom:Ct,left:Ct,padding:Ct,paddingTop:Ct,paddingRight:Ct,paddingBottom:Ct,paddingLeft:Ct,margin:Ct,marginTop:Ct,marginRight:Ct,marginBottom:Ct,marginLeft:Ct,backgroundPositionX:Ct,backgroundPositionY:Ct,...l1,zIndex:Md,fillOpacity:Kr,strokeOpacity:Kr,numOctaves:Md},c1={...ch,color:Ce,backgroundColor:Ce,outlineColor:Ce,fill:Ce,stroke:Ce,borderColor:Ce,borderTopColor:Ce,borderRightColor:Ce,borderBottomColor:Ce,borderLeftColor:Ce,filter:nu,WebkitFilter:nu},_g=n=>c1[n];function xg(n,t){let e=_g(n);return e!==nu&&(e=zi),e.getAnimatableNone?e.getAnimatableNone(t):void 0}const u1=new Set(["auto","none","0"]);function h1(n,t,e){let i=0,s;for(;i<n.length&&!s;){const r=n[i];typeof r=="string"&&!u1.has(r)&&$r(r).values.length&&(s=n[i]),i++}if(s&&e)for(const r of t)n[r]=xg(e,s)}class f1 extends oh{constructor(t,e,i,s,r){super(t,e,i,s,r,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:e,name:i}=this;if(!e||!e.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let c=t[l];if(typeof c=="string"&&(c=c.trim(),Qu(c))){const u=dg(c,e.current);u!==void 0&&(t[l]=u),l===t.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!pg.has(i)||t.length!==2)return;const[s,r]=t,a=Sd(s),o=Sd(r);if(a!==o)if(_d(a)&&_d(o))for(let l=0;l<t.length;l++){const c=t[l];typeof c=="string"&&(t[l]=parseFloat(c))}else ds[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:e}=this,i=[];for(let s=0;s<t.length;s++)(t[s]===null||s1(t[s]))&&i.push(s);i.length&&h1(t,i,e)}measureInitialState(){const{element:t,unresolvedKeyframes:e,name:i}=this;if(!t||!t.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ds[i](t.measureViewportBox(),window.getComputedStyle(t.current)),e[0]=this.measuredOrigin;const s=e[e.length-1];s!==void 0&&t.getValue(i,s).jump(s,!1)}measureEndState(){const{element:t,name:e,unresolvedKeyframes:i}=this;if(!t||!t.current)return;const s=t.getValue(e);s&&s.jump(this.measuredOrigin,!1);const r=i.length-1,a=i[r];i[r]=ds[e](t.measureViewportBox(),window.getComputedStyle(t.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([o,l])=>{t.getValue(o).set(l)}),this.resolveNoneKeyframes()}}function d1(n,t,e){if(n instanceof EventTarget)return[n];if(typeof n=="string"){let i=document;const s=e?.[n]??i.querySelectorAll(n);return s?Array.from(s):[]}return Array.from(n)}const vg=(n,t)=>t&&typeof n=="number"?t.transform(n):n;function yg(n){return Nm(n)&&"offsetHeight"in n}const Td=30,p1=n=>!isNaN(parseFloat(n));class m1{constructor(t,e={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{const s=sn.now();if(this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const r of this.dependents)r.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=e.owner}setCurrent(t){this.current=t,this.updatedAt=sn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=p1(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,e){this.events[t]||(this.events[t]=new $u);const i=this.events[t].add(e);return t==="change"?()=>{i(),de.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,e){this.passiveEffect=t,this.stopPassiveEffect=e}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,e,i){this.set(e),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-i}jump(t,e=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,e&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=sn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Td)return 0;const e=Math.min(this.updatedAt-this.prevUpdatedAt,Td);return Om(parseFloat(this.current)-parseFloat(this.prevFrameValue),e)}start(t){return this.stop(),new Promise(e=>{this.hasAnimated=!0,this.animation=t(e),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ar(n,t){return new m1(n,t)}const{schedule:uh}=qm(queueMicrotask,!1),Bn={x:!1,y:!1};function Sg(){return Bn.x||Bn.y}function g1(n){return n==="x"||n==="y"?Bn[n]?null:(Bn[n]=!0,()=>{Bn[n]=!1}):Bn.x||Bn.y?null:(Bn.x=Bn.y=!0,()=>{Bn.x=Bn.y=!1})}function Mg(n,t){const e=d1(n),i=new AbortController,s={passive:!0,...t,signal:i.signal};return[e,s,()=>i.abort()]}function bd(n){return!(n.pointerType==="touch"||Sg())}function _1(n,t,e={}){const[i,s,r]=Mg(n,e),a=o=>{if(!bd(o))return;const{target:l}=o,c=t(l,o);if(typeof c!="function"||!l)return;const u=h=>{bd(h)&&(c(h),l.removeEventListener("pointerleave",u))};l.addEventListener("pointerleave",u,s)};return i.forEach(o=>{o.addEventListener("pointerenter",a,s)}),r}const Tg=(n,t)=>t?n===t?!0:Tg(n,t.parentElement):!1,hh=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,x1=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function v1(n){return x1.has(n.tagName)||n.tabIndex!==-1}const to=new WeakSet;function Ed(n){return t=>{t.key==="Enter"&&n(t)}}function El(n,t){n.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const y1=(n,t)=>{const e=n.currentTarget;if(!e)return;const i=Ed(()=>{if(to.has(e))return;El(e,"down");const s=Ed(()=>{El(e,"up")}),r=()=>El(e,"cancel");e.addEventListener("keyup",s,t),e.addEventListener("blur",r,t)});e.addEventListener("keydown",i,t),e.addEventListener("blur",()=>e.removeEventListener("keydown",i),t)};function Ad(n){return hh(n)&&!Sg()}function S1(n,t,e={}){const[i,s,r]=Mg(n,e),a=o=>{const l=o.currentTarget;if(!Ad(o))return;to.add(l);const c=t(l,o),u=(d,_)=>{window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",f),to.has(l)&&to.delete(l),Ad(d)&&typeof c=="function"&&c(d,{success:_})},h=d=>{u(d,l===window||l===document||e.useGlobalTarget||Tg(l,d.target))},f=d=>{u(d,!1)};window.addEventListener("pointerup",h,s),window.addEventListener("pointercancel",f,s)};return i.forEach(o=>{(e.useGlobalTarget?window:o).addEventListener("pointerdown",a,s),yg(o)&&(o.addEventListener("focus",c=>y1(c,s)),!v1(o)&&!o.hasAttribute("tabindex")&&(o.tabIndex=0))}),r}function bg(n){return Nm(n)&&"ownerSVGElement"in n}function M1(n){return bg(n)&&n.tagName==="svg"}const Xe=n=>!!(n&&n.getVelocity),T1=[...gg,Ce,zi],b1=n=>T1.find(mg(n)),fh=Q.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function wd(n,t){if(typeof n=="function")return n(t);n!=null&&(n.current=t)}function E1(...n){return t=>{let e=!1;const i=n.map(s=>{const r=wd(s,t);return!e&&typeof r=="function"&&(e=!0),r});if(e)return()=>{for(let s=0;s<i.length;s++){const r=i[s];typeof r=="function"?r():wd(n[s],null)}}}}function A1(...n){return Q.useCallback(E1(...n),n)}class w1 extends Q.Component{getSnapshotBeforeUpdate(t){const e=this.props.childRef.current;if(e&&t.isPresent&&!this.props.isPresent){const i=e.offsetParent,s=yg(i)&&i.offsetWidth||0,r=this.props.sizeRef.current;r.height=e.offsetHeight||0,r.width=e.offsetWidth||0,r.top=e.offsetTop,r.left=e.offsetLeft,r.right=s-r.width-r.left}return null}componentDidUpdate(){}render(){return this.props.children}}function C1({children:n,isPresent:t,anchorX:e,root:i}){const s=Q.useId(),r=Q.useRef(null),a=Q.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:o}=Q.useContext(fh),l=A1(r,n?.ref);return Q.useInsertionEffect(()=>{const{width:c,height:u,top:h,left:f,right:d}=a.current;if(t||!r.current||!c||!u)return;const _=e==="left"?`left: ${f}`:`right: ${d}`;r.current.dataset.motionPopId=s;const g=document.createElement("style");o&&(g.nonce=o);const m=i??document.head;return m.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            ${_}px !important;
            top: ${h}px !important;
          }
        `),()=>{m.contains(g)&&m.removeChild(g)}},[t]),ft.jsx(w1,{isPresent:t,childRef:r,sizeRef:a,children:Q.cloneElement(n,{ref:l})})}const R1=({children:n,initial:t,isPresent:e,onExitComplete:i,custom:s,presenceAffectsLayout:r,mode:a,anchorX:o,root:l})=>{const c=Wu(P1),u=Q.useId();let h=!0,f=Q.useMemo(()=>(h=!1,{id:u,initial:t,isPresent:e,custom:s,onExitComplete:d=>{c.set(d,!0);for(const _ of c.values())if(!_)return;i&&i()},register:d=>(c.set(d,!1),()=>c.delete(d))}),[e,c,i]);return r&&h&&(f={...f}),Q.useMemo(()=>{c.forEach((d,_)=>c.set(_,!1))},[e]),Q.useEffect(()=>{!e&&!c.size&&i&&i()},[e]),a==="popLayout"&&(n=ft.jsx(C1,{isPresent:e,anchorX:o,root:l,children:n})),ft.jsx(Po.Provider,{value:f,children:n})};function P1(){return new Map}function Eg(n=!0){const t=Q.useContext(Po);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:i,register:s}=t,r=Q.useId();Q.useEffect(()=>{if(n)return s(r)},[n]);const a=Q.useCallback(()=>n&&i&&i(r),[r,i,n]);return!e&&i?[!1,a]:[!0]}const Ha=n=>n.key||"";function Cd(n){const t=[];return Q.Children.forEach(n,e=>{Q.isValidElement(e)&&t.push(e)}),t}const D1=({children:n,custom:t,initial:e=!0,onExitComplete:i,presenceAffectsLayout:s=!0,mode:r="sync",propagate:a=!1,anchorX:o="left",root:l})=>{const[c,u]=Eg(a),h=Q.useMemo(()=>Cd(n),[n]),f=a&&!c?[]:h.map(Ha),d=Q.useRef(!0),_=Q.useRef(h),g=Wu(()=>new Map),[m,p]=Q.useState(h),[y,S]=Q.useState(h);Im(()=>{d.current=!1,_.current=h;for(let A=0;A<y.length;A++){const w=Ha(y[A]);f.includes(w)?g.delete(w):g.get(w)!==!0&&g.set(w,!1)}},[y,f.length,f.join("-")]);const T=[];if(h!==m){let A=[...h];for(let w=0;w<y.length;w++){const R=y[w],x=Ha(R);f.includes(x)||(A.splice(w,0,R),T.push(R))}return r==="wait"&&T.length&&(A=T),S(Cd(A)),p(h),null}const{forceRender:M}=Q.useContext(Gu);return ft.jsx(ft.Fragment,{children:y.map(A=>{const w=Ha(A),R=a&&!c?!1:h===y||f.includes(w),x=()=>{if(g.has(w))g.set(w,!0);else return;let b=!0;g.forEach(P=>{P||(b=!1)}),b&&(M?.(),S(_.current),a&&u?.(),i&&i())};return ft.jsx(R1,{isPresent:R,initial:!d.current||e?void 0:!1,custom:t,presenceAffectsLayout:s,mode:r,root:l,onExitComplete:R?void 0:x,anchorX:o,children:A},w)})})},Ag=Q.createContext({strict:!1}),Rd={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},or={};for(const n in Rd)or[n]={isEnabled:t=>Rd[n].some(e=>!!t[e])};function L1(n){for(const t in n)or[t]={...or[t],...n[t]}}const I1=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function po(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||I1.has(n)}let wg=n=>!po(n);function U1(n){typeof n=="function"&&(wg=t=>t.startsWith("on")?!po(t):n(t))}try{U1(require("@emotion/is-prop-valid").default)}catch{}function N1(n,t,e){const i={};for(const s in n)s==="values"&&typeof n.values=="object"||(wg(s)||e===!0&&po(s)||!t&&!po(s)||n.draggable&&s.startsWith("onDrag"))&&(i[s]=n[s]);return i}const Do=Q.createContext({});function Lo(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Zr(n){return typeof n=="string"||Array.isArray(n)}const dh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ph=["initial",...dh];function Io(n){return Lo(n.animate)||ph.some(t=>Zr(n[t]))}function Cg(n){return!!(Io(n)||n.variants)}function F1(n,t){if(Io(n)){const{initial:e,animate:i}=n;return{initial:e===!1||Zr(e)?e:void 0,animate:Zr(i)?i:void 0}}return n.inherit!==!1?t:{}}function O1(n){const{initial:t,animate:e}=F1(n,Q.useContext(Do));return Q.useMemo(()=>({initial:t,animate:e}),[Pd(t),Pd(e)])}function Pd(n){return Array.isArray(n)?n.join(" "):n}function Dd(n,t){return t.max===t.min?0:n/(t.max-t.min)*100}const Rr={correct:(n,t)=>{if(!t.target)return n;if(typeof n=="string")if(Ct.test(n))n=parseFloat(n);else return n;const e=Dd(n,t.target.x),i=Dd(n,t.target.y);return`${e}% ${i}%`}},B1={correct:(n,{treeScale:t,projectionDelta:e})=>{const i=n,s=zi.parse(n);if(s.length>5)return i;const r=zi.createTransformer(n),a=typeof s[0]!="number"?1:0,o=e.x.scale*t.x,l=e.y.scale*t.y;s[0+a]/=o,s[1+a]/=l;const c=ge(o,l,.5);return typeof s[2+a]=="number"&&(s[2+a]/=c),typeof s[3+a]=="number"&&(s[3+a]/=c),r(s)}},iu={borderRadius:{...Rr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Rr,borderTopRightRadius:Rr,borderBottomLeftRadius:Rr,borderBottomRightRadius:Rr,boxShadow:B1};function Rg(n,{layout:t,layoutId:e}){return xr.has(n)||n.startsWith("origin")||(t||e!==void 0)&&(!!iu[n]||n==="opacity")}const V1={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},k1=_r.length;function z1(n,t,e){let i="",s=!0;for(let r=0;r<k1;r++){const a=_r[r],o=n[a];if(o===void 0)continue;let l=!0;if(typeof o=="number"?l=o===(a.startsWith("scale")?1:0):l=parseFloat(o)===0,!l||e){const c=vg(o,ch[a]);if(!l){s=!1;const u=V1[a]||a;i+=`${u}(${c}) `}e&&(t[a]=c)}}return i=i.trim(),e?i=e(t,s?"":i):s&&(i="none"),i}function mh(n,t,e){const{style:i,vars:s,transformOrigin:r}=n;let a=!1,o=!1;for(const l in t){const c=t[l];if(xr.has(l)){a=!0;continue}else if($m(l)){s[l]=c;continue}else{const u=vg(c,ch[l]);l.startsWith("origin")?(o=!0,r[l]=u):i[l]=u}}if(t.transform||(a||e?i.transform=z1(t,n.transform,e):i.transform&&(i.transform="none")),o){const{originX:l="50%",originY:c="50%",originZ:u=0}=r;i.transformOrigin=`${l} ${c} ${u}`}}const gh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Pg(n,t,e){for(const i in t)!Xe(t[i])&&!Rg(i,e)&&(n[i]=t[i])}function H1({transformTemplate:n},t){return Q.useMemo(()=>{const e=gh();return mh(e,t,n),Object.assign({},e.vars,e.style)},[t])}function G1(n,t){const e=n.style||{},i={};return Pg(i,e,n),Object.assign(i,H1(n,t)),i}function W1(n,t){const e={},i=G1(n,t);return n.drag&&n.dragListener!==!1&&(e.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(e.tabIndex=0),e.style=i,e}const X1={offset:"stroke-dashoffset",array:"stroke-dasharray"},j1={offset:"strokeDashoffset",array:"strokeDasharray"};function Y1(n,t,e=1,i=0,s=!0){n.pathLength=1;const r=s?X1:j1;n[r.offset]=Ct.transform(-i);const a=Ct.transform(t),o=Ct.transform(e);n[r.array]=`${a} ${o}`}function Dg(n,{attrX:t,attrY:e,attrScale:i,pathLength:s,pathSpacing:r=1,pathOffset:a=0,...o},l,c,u){if(mh(n,o,c),l){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:h,style:f}=n;h.transform&&(f.transform=h.transform,delete h.transform),(f.transform||h.transformOrigin)&&(f.transformOrigin=h.transformOrigin??"50% 50%",delete h.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??"fill-box",delete h.transformBox),t!==void 0&&(h.x=t),e!==void 0&&(h.y=e),i!==void 0&&(h.scale=i),s!==void 0&&Y1(h,s,r,a,!1)}const Lg=()=>({...gh(),attrs:{}}),Ig=n=>typeof n=="string"&&n.toLowerCase()==="svg";function q1(n,t,e,i){const s=Q.useMemo(()=>{const r=Lg();return Dg(r,t,Ig(i),n.transformTemplate,n.style),{...r.attrs,style:{...r.style}}},[t]);if(n.style){const r={};Pg(r,n.style,n),s.style={...r,...s.style}}return s}const K1=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function _h(n){return typeof n!="string"||n.includes("-")?!1:!!(K1.indexOf(n)>-1||/[A-Z]/u.test(n))}function $1(n,t,e,{latestValues:i},s,r=!1){const o=(_h(n)?q1:W1)(t,i,s,n),l=N1(t,typeof n=="string",r),c=n!==Q.Fragment?{...l,...o,ref:e}:{},{children:u}=t,h=Q.useMemo(()=>Xe(u)?u.get():u,[u]);return Q.createElement(n,{...c,children:h})}function Ld(n){const t=[{},{}];return n?.values.forEach((e,i)=>{t[0][i]=e.get(),t[1][i]=e.getVelocity()}),t}function xh(n,t,e,i){if(typeof t=="function"){const[s,r]=Ld(i);t=t(e!==void 0?e:n.custom,s,r)}if(typeof t=="string"&&(t=n.variants&&n.variants[t]),typeof t=="function"){const[s,r]=Ld(i);t=t(e!==void 0?e:n.custom,s,r)}return t}function eo(n){return Xe(n)?n.get():n}function Z1({scrapeMotionValuesFromProps:n,createRenderState:t},e,i,s){return{latestValues:J1(e,i,s,n),renderState:t()}}function J1(n,t,e,i){const s={},r=i(n,{});for(const f in r)s[f]=eo(r[f]);let{initial:a,animate:o}=n;const l=Io(n),c=Cg(n);t&&c&&!l&&n.inherit!==!1&&(a===void 0&&(a=t.initial),o===void 0&&(o=t.animate));let u=e?e.initial===!1:!1;u=u||a===!1;const h=u?o:a;if(h&&typeof h!="boolean"&&!Lo(h)){const f=Array.isArray(h)?h:[h];for(let d=0;d<f.length;d++){const _=xh(n,f[d]);if(_){const{transitionEnd:g,transition:m,...p}=_;for(const y in p){let S=p[y];if(Array.isArray(S)){const T=u?S.length-1:0;S=S[T]}S!==null&&(s[y]=S)}for(const y in g)s[y]=g[y]}}}return s}const Ug=n=>(t,e)=>{const i=Q.useContext(Do),s=Q.useContext(Po),r=()=>Z1(n,t,i,s);return e?r():Wu(r)};function vh(n,t,e){const{style:i}=n,s={};for(const r in i)(Xe(i[r])||t.style&&Xe(t.style[r])||Rg(r,n)||e?.getValue(r)?.liveStyle!==void 0)&&(s[r]=i[r]);return s}const Q1=Ug({scrapeMotionValuesFromProps:vh,createRenderState:gh});function Ng(n,t,e){const i=vh(n,t,e);for(const s in n)if(Xe(n[s])||Xe(t[s])){const r=_r.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;i[r]=n[s]}return i}const tA=Ug({scrapeMotionValuesFromProps:Ng,createRenderState:Lg}),eA=Symbol.for("motionComponentSymbol");function Hs(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function nA(n,t,e){return Q.useCallback(i=>{i&&n.onMount&&n.onMount(i),t&&(i?t.mount(i):t.unmount()),e&&(typeof e=="function"?e(i):Hs(e)&&(e.current=i))},[t])}const yh=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),iA="framerAppearId",Fg="data-"+yh(iA),Og=Q.createContext({});function sA(n,t,e,i,s){const{visualElement:r}=Q.useContext(Do),a=Q.useContext(Ag),o=Q.useContext(Po),l=Q.useContext(fh).reducedMotion,c=Q.useRef(null);i=i||a.renderer,!c.current&&i&&(c.current=i(n,{visualState:t,parent:r,props:e,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:l}));const u=c.current,h=Q.useContext(Og);u&&!u.projection&&s&&(u.type==="html"||u.type==="svg")&&rA(c.current,e,s,h);const f=Q.useRef(!1);Q.useInsertionEffect(()=>{u&&f.current&&u.update(e,o)});const d=e[Fg],_=Q.useRef(!!d&&!window.MotionHandoffIsComplete?.(d)&&window.MotionHasOptimisedAnimation?.(d));return Im(()=>{u&&(f.current=!0,window.MotionIsMounted=!0,u.updateFeatures(),u.scheduleRenderMicrotask(),_.current&&u.animationState&&u.animationState.animateChanges())}),Q.useEffect(()=>{u&&(!_.current&&u.animationState&&u.animationState.animateChanges(),_.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(d)}),_.current=!1),u.enteringChildren=void 0)}),u}function rA(n,t,e,i){const{layoutId:s,layout:r,drag:a,dragConstraints:o,layoutScroll:l,layoutRoot:c,layoutCrossfade:u}=t;n.projection=new e(n.latestValues,t["data-framer-portal-id"]?void 0:Bg(n.parent)),n.projection.setOptions({layoutId:s,layout:r,alwaysMeasureLayout:!!a||o&&Hs(o),visualElement:n,animationType:typeof r=="string"?r:"both",initialPromotionConfig:i,crossfade:u,layoutScroll:l,layoutRoot:c})}function Bg(n){if(n)return n.options.allowProjection!==!1?n.projection:Bg(n.parent)}function Al(n,{forwardMotionProps:t=!1}={},e,i){e&&L1(e);const s=_h(n)?tA:Q1;function r(o,l){let c;const u={...Q.useContext(fh),...o,layoutId:aA(o)},{isStatic:h}=u,f=O1(o),d=s(o,h);if(!h&&Xu){oA();const _=lA(u);c=_.MeasureLayout,f.visualElement=sA(n,d,u,i,_.ProjectionNode)}return ft.jsxs(Do.Provider,{value:f,children:[c&&f.visualElement?ft.jsx(c,{visualElement:f.visualElement,...u}):null,$1(n,o,nA(d,f.visualElement,l),d,h,t)]})}r.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const a=Q.forwardRef(r);return a[eA]=n,a}function aA({layoutId:n}){const t=Q.useContext(Gu).id;return t&&n!==void 0?t+"-"+n:n}function oA(n,t){Q.useContext(Ag).strict}function lA(n){const{drag:t,layout:e}=or;if(!t&&!e)return{};const i={...t,...e};return{MeasureLayout:t?.isEnabled(n)||e?.isEnabled(n)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function cA(n,t){if(typeof Proxy>"u")return Al;const e=new Map,i=(r,a)=>Al(r,a,n,t),s=(r,a)=>i(r,a);return new Proxy(s,{get:(r,a)=>a==="create"?i:(e.has(a)||e.set(a,Al(a,void 0,n,t)),e.get(a))})}function Vg({top:n,left:t,right:e,bottom:i}){return{x:{min:t,max:e},y:{min:n,max:i}}}function uA({x:n,y:t}){return{top:t.min,right:n.max,bottom:t.max,left:n.min}}function hA(n,t){if(!t)return n;const e=t({x:n.left,y:n.top}),i=t({x:n.right,y:n.bottom});return{top:e.y,left:e.x,bottom:i.y,right:i.x}}function wl(n){return n===void 0||n===1}function su({scale:n,scaleX:t,scaleY:e}){return!wl(n)||!wl(t)||!wl(e)}function ss(n){return su(n)||kg(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function kg(n){return Id(n.x)||Id(n.y)}function Id(n){return n&&n!=="0%"}function mo(n,t,e){const i=n-e,s=t*i;return e+s}function Ud(n,t,e,i,s){return s!==void 0&&(n=mo(n,s,i)),mo(n,e,i)+t}function ru(n,t=0,e=1,i,s){n.min=Ud(n.min,t,e,i,s),n.max=Ud(n.max,t,e,i,s)}function zg(n,{x:t,y:e}){ru(n.x,t.translate,t.scale,t.originPoint),ru(n.y,e.translate,e.scale,e.originPoint)}const Nd=.999999999999,Fd=1.0000000000001;function fA(n,t,e,i=!1){const s=e.length;if(!s)return;t.x=t.y=1;let r,a;for(let o=0;o<s;o++){r=e[o],a=r.projectionDelta;const{visualElement:l}=r.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&r.options.layoutScroll&&r.scroll&&r!==r.root&&Ws(n,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,zg(n,a)),i&&ss(r.latestValues)&&Ws(n,r.latestValues))}t.x<Fd&&t.x>Nd&&(t.x=1),t.y<Fd&&t.y>Nd&&(t.y=1)}function Gs(n,t){n.min=n.min+t,n.max=n.max+t}function Od(n,t,e,i,s=.5){const r=ge(n.min,n.max,s);ru(n,t,e,r,i)}function Ws(n,t){Od(n.x,t.x,t.scaleX,t.scale,t.originX),Od(n.y,t.y,t.scaleY,t.scale,t.originY)}function Hg(n,t){return Vg(hA(n.getBoundingClientRect(),t))}function dA(n,t,e){const i=Hg(n,e),{scroll:s}=t;return s&&(Gs(i.x,s.offset.x),Gs(i.y,s.offset.y)),i}const Bd=()=>({translate:0,scale:1,origin:0,originPoint:0}),Xs=()=>({x:Bd(),y:Bd()}),Vd=()=>({min:0,max:0}),De=()=>({x:Vd(),y:Vd()}),au={current:null},Gg={current:!1};function pA(){if(Gg.current=!0,!!Xu)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),t=()=>au.current=n.matches;n.addEventListener("change",t),t()}else au.current=!1}const mA=new WeakMap;function gA(n,t,e){for(const i in t){const s=t[i],r=e[i];if(Xe(s))n.addValue(i,s);else if(Xe(r))n.addValue(i,ar(s,{owner:n}));else if(r!==s)if(n.hasValue(i)){const a=n.getValue(i);a.liveStyle===!0?a.jump(s):a.hasAnimated||a.set(s)}else{const a=n.getStaticValue(i);n.addValue(i,ar(a!==void 0?a:s,{owner:n}))}}for(const i in e)t[i]===void 0&&n.removeValue(i);return t}const kd=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class _A{scrapeMotionValuesFromProps(t,e,i){return{}}constructor({parent:t,props:e,presenceContext:i,reducedMotionConfig:s,blockInitialAnimation:r,visualState:a},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=oh,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const f=sn.now();this.renderScheduledAt<f&&(this.renderScheduledAt=f,de.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=a;this.latestValues=l,this.baseTarget={...l},this.initialValues=e.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=e,this.presenceContext=i,this.depth=t?t.depth+1:0,this.reducedMotionConfig=s,this.options=o,this.blockInitialAnimation=!!r,this.isControllingVariants=Io(e),this.isVariantNode=Cg(e),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...h}=this.scrapeMotionValuesFromProps(e,{},this);for(const f in h){const d=h[f];l[f]!==void 0&&Xe(d)&&d.set(l[f])}}mount(t){this.current=t,mA.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,i)=>this.bindToMotionValue(i,e)),Gg.current||pA(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:au.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),ki(this.notifyUpdate),ki(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const e=this.features[t];e&&(e.unmount(),e.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,e){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const i=xr.has(t);i&&this.onBindTransform&&this.onBindTransform();const s=e.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&de.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let r;window.MotionCheckAppearSync&&(r=window.MotionCheckAppearSync(this,t,e)),this.valueSubscriptions.set(t,()=>{s(),r&&r(),e.owner&&e.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in or){const e=or[t];if(!e)continue;const{isEnabled:i,Feature:s}=e;if(!this.features[t]&&s&&i(this.props)&&(this.features[t]=new s(this)),this.features[t]){const r=this.features[t];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):De()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,e){this.latestValues[t]=e}update(t,e){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=e;for(let i=0;i<kd.length;i++){const s=kd[i];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const r="on"+s,a=t[r];a&&(this.propEventSubscriptions[s]=this.on(s,a))}this.prevMotionValues=gA(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const e=this.getClosestVariantNode();if(e)return e.variantChildren&&e.variantChildren.add(t),()=>e.variantChildren.delete(t)}addValue(t,e){const i=this.values.get(t);e!==i&&(i&&this.removeValue(t),this.bindToMotionValue(t,e),this.values.set(t,e),this.latestValues[t]=e.get())}removeValue(t){this.values.delete(t);const e=this.valueSubscriptions.get(t);e&&(e(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,e){if(this.props.values&&this.props.values[t])return this.props.values[t];let i=this.values.get(t);return i===void 0&&e!==void 0&&(i=ar(e===null?void 0:e,{owner:this}),this.addValue(t,i)),i}readValue(t,e){let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(Um(i)||Fm(i))?i=parseFloat(i):!b1(i)&&zi.test(e)&&(i=xg(t,e)),this.setBaseTarget(t,Xe(i)?i.get():i)),Xe(i)?i.get():i}setBaseTarget(t,e){this.baseTarget[t]=e}getBaseTarget(t){const{initial:e}=this.props;let i;if(typeof e=="string"||typeof e=="object"){const r=xh(this.props,e,this.presenceContext?.custom);r&&(i=r[t])}if(e&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!Xe(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,e){return this.events[t]||(this.events[t]=new $u),this.events[t].add(e)}notify(t,...e){this.events[t]&&this.events[t].notify(...e)}scheduleRenderMicrotask(){uh.render(this.render)}}class Wg extends _A{constructor(){super(...arguments),this.KeyframeResolver=f1}sortInstanceNodePosition(t,e){return t.compareDocumentPosition(e)&2?1:-1}getBaseTargetFromProps(t,e){return t.style?t.style[e]:void 0}removeValueFromRenderState(t,{vars:e,style:i}){delete e[t],delete i[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Xe(t)&&(this.childSubscription=t.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}}function Xg(n,{style:t,vars:e},i,s){const r=n.style;let a;for(a in t)r[a]=t[a];s?.applyProjectionStyles(r,i);for(a in e)r.setProperty(a,e[a])}function xA(n){return window.getComputedStyle(n)}class vA extends Wg{constructor(){super(...arguments),this.type="html",this.renderInstance=Xg}readValueFromInstance(t,e){if(xr.has(e))return this.projection?.isProjecting?$c(e):DE(t,e);{const i=xA(t),s=($m(e)?i.getPropertyValue(e):i[e])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(t,{transformPagePoint:e}){return Hg(t,e)}build(t,e,i){mh(t,e,i.transformTemplate)}scrapeMotionValuesFromProps(t,e,i){return vh(t,e,i)}}const jg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function yA(n,t,e,i){Xg(n,t,void 0,i);for(const s in t.attrs)n.setAttribute(jg.has(s)?s:yh(s),t.attrs[s])}class SA extends Wg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=De}getBaseTargetFromProps(t,e){return t[e]}readValueFromInstance(t,e){if(xr.has(e)){const i=_g(e);return i&&i.default||0}return e=jg.has(e)?e:yh(e),t.getAttribute(e)}scrapeMotionValuesFromProps(t,e,i){return Ng(t,e,i)}build(t,e,i){Dg(t,e,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(t,e,i,s){yA(t,e,i,s)}mount(t){this.isSVGTag=Ig(t.tagName),super.mount(t)}}const MA=(n,t)=>_h(n)?new SA(t):new vA(t,{allowProjection:n!==Q.Fragment});function Zs(n,t,e){const i=n.getProps();return xh(i,t,e!==void 0?e:i.custom,n)}const ou=n=>Array.isArray(n);function TA(n,t,e){n.hasValue(t)?n.getValue(t).set(e):n.addValue(t,ar(e))}function bA(n){return ou(n)?n[n.length-1]||0:n}function EA(n,t){const e=Zs(n,t);let{transitionEnd:i={},transition:s={},...r}=e||{};r={...r,...i};for(const a in r){const o=bA(r[a]);TA(n,a,o)}}function AA(n){return!!(Xe(n)&&n.add)}function lu(n,t){const e=n.getValue("willChange");if(AA(e))return e.add(t);if(!e&&Si.WillChange){const i=new Si.WillChange("auto");n.addValue("willChange",i),i.add(t)}}function Yg(n){return n.props[Fg]}const wA=n=>n!==null;function CA(n,{repeat:t,repeatType:e="loop"},i){const s=n.filter(wA),r=t&&e!=="loop"&&t%2===1?0:s.length-1;return s[r]}const RA={type:"spring",stiffness:500,damping:25,restSpeed:10},PA=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),DA={type:"keyframes",duration:.8},LA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},IA=(n,{keyframes:t})=>t.length>2?DA:xr.has(n)?n.startsWith("scale")?PA(t[1]):RA:LA;function UA({when:n,delay:t,delayChildren:e,staggerChildren:i,staggerDirection:s,repeat:r,repeatType:a,repeatDelay:o,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const Sh=(n,t,e,i={},s,r)=>a=>{const o=lh(i,n)||{},l=o.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Jn(l);const u={keyframes:Array.isArray(e)?e:[null,e],ease:"easeOut",velocity:t.getVelocity(),...o,delay:-c,onUpdate:f=>{t.set(f),o.onUpdate&&o.onUpdate(f)},onComplete:()=>{a(),o.onComplete&&o.onComplete()},name:n,motionValue:t,element:r?void 0:s};UA(o)||Object.assign(u,IA(n,u)),u.duration&&(u.duration=Jn(u.duration)),u.repeatDelay&&(u.repeatDelay=Jn(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let h=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(eu(u),u.delay===0&&(h=!0)),(Si.instantAnimations||Si.skipAnimations)&&(h=!0,eu(u),u.delay=0),u.allowFlatten=!o.type&&!o.ease,h&&!r&&t.get()!==void 0){const f=CA(u.keyframes,o);if(f!==void 0){de.update(()=>{u.onUpdate(f),u.onComplete()});return}}return o.isSync?new ah(u):new t1(u)};function NA({protectedKeys:n,needsAnimating:t},e){const i=n.hasOwnProperty(e)&&t[e]!==!0;return t[e]=!1,i}function qg(n,t,{delay:e=0,transitionOverride:i,type:s}={}){let{transition:r=n.getDefaultTransition(),transitionEnd:a,...o}=t;i&&(r=i);const l=[],c=s&&n.animationState&&n.animationState.getState()[s];for(const u in o){const h=n.getValue(u,n.latestValues[u]??null),f=o[u];if(f===void 0||c&&NA(c,u))continue;const d={delay:e,...lh(r||{},u)},_=h.get();if(_!==void 0&&!h.isAnimating&&!Array.isArray(f)&&f===_&&!d.velocity)continue;let g=!1;if(window.MotionHandoffAnimation){const p=Yg(n);if(p){const y=window.MotionHandoffAnimation(p,u,de);y!==null&&(d.startTime=y,g=!0)}}lu(n,u),h.start(Sh(u,h,f,n.shouldReduceMotion&&pg.has(u)?{type:!1}:d,n,g));const m=h.animation;m&&l.push(m)}return a&&Promise.all(l).then(()=>{de.update(()=>{a&&EA(n,a)})}),l}function Kg(n,t,e,i=0,s=1){const r=Array.from(n).sort((c,u)=>c.sortNodePosition(u)).indexOf(t),a=n.size,o=(a-1)*i;return typeof e=="function"?e(r,a):s===1?r*i:o-r*i}function cu(n,t,e={}){const i=Zs(n,t,e.type==="exit"?n.presenceContext?.custom:void 0);let{transition:s=n.getDefaultTransition()||{}}=i||{};e.transitionOverride&&(s=e.transitionOverride);const r=i?()=>Promise.all(qg(n,i,e)):()=>Promise.resolve(),a=n.variantChildren&&n.variantChildren.size?(l=0)=>{const{delayChildren:c=0,staggerChildren:u,staggerDirection:h}=s;return FA(n,t,l,c,u,h,e)}:()=>Promise.resolve(),{when:o}=s;if(o){const[l,c]=o==="beforeChildren"?[r,a]:[a,r];return l().then(()=>c())}else return Promise.all([r(),a(e.delay)])}function FA(n,t,e=0,i=0,s=0,r=1,a){const o=[];for(const l of n.variantChildren)l.notify("AnimationStart",t),o.push(cu(l,t,{...a,delay:e+(typeof i=="function"?0:i)+Kg(n.variantChildren,l,i,s,r)}).then(()=>l.notify("AnimationComplete",t)));return Promise.all(o)}function OA(n,t,e={}){n.notify("AnimationStart",t);let i;if(Array.isArray(t)){const s=t.map(r=>cu(n,r,e));i=Promise.all(s)}else if(typeof t=="string")i=cu(n,t,e);else{const s=typeof t=="function"?Zs(n,t,e.custom):t;i=Promise.all(qg(n,s,e))}return i.then(()=>{n.notify("AnimationComplete",t)})}function $g(n,t){if(!Array.isArray(t))return!1;const e=t.length;if(e!==n.length)return!1;for(let i=0;i<e;i++)if(t[i]!==n[i])return!1;return!0}const BA=ph.length;function Zg(n){if(!n)return;if(!n.isControllingVariants){const e=n.parent?Zg(n.parent)||{}:{};return n.props.initial!==void 0&&(e.initial=n.props.initial),e}const t={};for(let e=0;e<BA;e++){const i=ph[e],s=n.props[i];(Zr(s)||s===!1)&&(t[i]=s)}return t}const VA=[...dh].reverse(),kA=dh.length;function zA(n){return t=>Promise.all(t.map(({animation:e,options:i})=>OA(n,e,i)))}function HA(n){let t=zA(n),e=zd(),i=!0;const s=l=>(c,u)=>{const h=Zs(n,u,l==="exit"?n.presenceContext?.custom:void 0);if(h){const{transition:f,transitionEnd:d,..._}=h;c={...c,..._,...d}}return c};function r(l){t=l(n)}function a(l){const{props:c}=n,u=Zg(n.parent)||{},h=[],f=new Set;let d={},_=1/0;for(let m=0;m<kA;m++){const p=VA[m],y=e[p],S=c[p]!==void 0?c[p]:u[p],T=Zr(S),M=p===l?y.isActive:null;M===!1&&(_=m);let A=S===u[p]&&S!==c[p]&&T;if(A&&i&&n.manuallyAnimateOnMount&&(A=!1),y.protectedKeys={...d},!y.isActive&&M===null||!S&&!y.prevProp||Lo(S)||typeof S=="boolean")continue;const w=GA(y.prevProp,S);let R=w||p===l&&y.isActive&&!A&&T||m>_&&T,x=!1;const b=Array.isArray(S)?S:[S];let P=b.reduce(s(p),{});M===!1&&(P={});const{prevResolvedValues:O={}}=y,N={...O,...P},H=F=>{R=!0,f.has(F)&&(x=!0,f.delete(F)),y.needsAnimating[F]=!0;const j=n.getValue(F);j&&(j.liveStyle=!1)};for(const F in N){const j=P[F],it=O[F];if(d.hasOwnProperty(F))continue;let et=!1;ou(j)&&ou(it)?et=!$g(j,it):et=j!==it,et?j!=null?H(F):f.add(F):j!==void 0&&f.has(F)?H(F):y.protectedKeys[F]=!0}y.prevProp=S,y.prevResolvedValues=P,y.isActive&&(d={...d,...P}),i&&n.blockInitialAnimation&&(R=!1);const W=A&&w;R&&(!W||x)&&h.push(...b.map(F=>{const j={type:p};if(typeof F=="string"&&i&&!W&&n.manuallyAnimateOnMount&&n.parent){const{parent:it}=n,et=Zs(it,F);if(it.enteringChildren&&et){const{delayChildren:lt}=et.transition||{};j.delay=Kg(it.enteringChildren,n,lt)}}return{animation:F,options:j}}))}if(f.size){const m={};if(typeof c.initial!="boolean"){const p=Zs(n,Array.isArray(c.initial)?c.initial[0]:c.initial);p&&p.transition&&(m.transition=p.transition)}f.forEach(p=>{const y=n.getBaseTarget(p),S=n.getValue(p);S&&(S.liveStyle=!0),m[p]=y??null}),h.push({animation:m})}let g=!!h.length;return i&&(c.initial===!1||c.initial===c.animate)&&!n.manuallyAnimateOnMount&&(g=!1),i=!1,g?t(h):Promise.resolve()}function o(l,c){if(e[l].isActive===c)return Promise.resolve();n.variantChildren?.forEach(h=>h.animationState?.setActive(l,c)),e[l].isActive=c;const u=a(l);for(const h in e)e[h].protectedKeys={};return u}return{animateChanges:a,setActive:o,setAnimateFunction:r,getState:()=>e,reset:()=>{e=zd()}}}function GA(n,t){return typeof t=="string"?t!==n:Array.isArray(t)?!$g(t,n):!1}function es(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function zd(){return{animate:es(!0),whileInView:es(),whileHover:es(),whileTap:es(),whileDrag:es(),whileFocus:es(),exit:es()}}class Xi{constructor(t){this.isMounted=!1,this.node=t}update(){}}class WA extends Xi{constructor(t){super(t),t.animationState||(t.animationState=HA(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Lo(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:e}=this.node.prevProps||{};t!==e&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let XA=0;class jA extends Xi{constructor(){super(...arguments),this.id=XA++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:e}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const s=this.node.animationState.setActive("exit",!t);e&&!t&&s.then(()=>{e(this.id)})}mount(){const{register:t,onExitComplete:e}=this.node.presenceContext||{};e&&e(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const YA={animation:{Feature:WA},exit:{Feature:jA}};function Jr(n,t,e,i={passive:!0}){return n.addEventListener(t,e,i),()=>n.removeEventListener(t,e)}function da(n){return{point:{x:n.pageX,y:n.pageY}}}const qA=n=>t=>hh(t)&&n(t,da(t));function Vr(n,t,e,i){return Jr(n,t,qA(e),i)}const Jg=1e-4,KA=1-Jg,$A=1+Jg,Qg=.01,ZA=0-Qg,JA=0+Qg;function Ze(n){return n.max-n.min}function QA(n,t,e){return Math.abs(n-t)<=e}function Hd(n,t,e,i=.5){n.origin=i,n.originPoint=ge(t.min,t.max,n.origin),n.scale=Ze(e)/Ze(t),n.translate=ge(e.min,e.max,n.origin)-n.originPoint,(n.scale>=KA&&n.scale<=$A||isNaN(n.scale))&&(n.scale=1),(n.translate>=ZA&&n.translate<=JA||isNaN(n.translate))&&(n.translate=0)}function kr(n,t,e,i){Hd(n.x,t.x,e.x,i?i.originX:void 0),Hd(n.y,t.y,e.y,i?i.originY:void 0)}function Gd(n,t,e){n.min=e.min+t.min,n.max=n.min+Ze(t)}function tw(n,t,e){Gd(n.x,t.x,e.x),Gd(n.y,t.y,e.y)}function Wd(n,t,e){n.min=t.min-e.min,n.max=n.min+Ze(t)}function go(n,t,e){Wd(n.x,t.x,e.x),Wd(n.y,t.y,e.y)}function An(n){return[n("x"),n("y")]}const t_=({current:n})=>n?n.ownerDocument.defaultView:null,Xd=(n,t)=>Math.abs(n-t);function ew(n,t){const e=Xd(n.x,t.x),i=Xd(n.y,t.y);return Math.sqrt(e**2+i**2)}class e_{constructor(t,e,{transformPagePoint:i,contextWindow:s=window,dragSnapToOrigin:r=!1,distanceThreshold:a=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Rl(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,_=ew(f.offset,{x:0,y:0})>=this.distanceThreshold;if(!d&&!_)return;const{point:g}=f,{timestamp:m}=Be;this.history.push({...g,timestamp:m});const{onStart:p,onMove:y}=this.handlers;d||(p&&p(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,f)},this.handlePointerMove=(f,d)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Cl(d,this.transformPagePoint),de.update(this.updatePoint,!0)},this.handlePointerUp=(f,d)=>{this.end();const{onEnd:_,onSessionEnd:g,resumeAnimation:m}=this.handlers;if(this.dragSnapToOrigin&&m&&m(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=Rl(f.type==="pointercancel"?this.lastMoveEventInfo:Cl(d,this.transformPagePoint),this.history);this.startEvent&&_&&_(f,p),g&&g(f,p)},!hh(t))return;this.dragSnapToOrigin=r,this.handlers=e,this.transformPagePoint=i,this.distanceThreshold=a,this.contextWindow=s||window;const o=da(t),l=Cl(o,this.transformPagePoint),{point:c}=l,{timestamp:u}=Be;this.history=[{...c,timestamp:u}];const{onSessionStart:h}=e;h&&h(t,Rl(l,this.history)),this.removeListeners=ua(Vr(this.contextWindow,"pointermove",this.handlePointerMove),Vr(this.contextWindow,"pointerup",this.handlePointerUp),Vr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),ki(this.updatePoint)}}function Cl(n,t){return t?{point:t(n.point)}:n}function jd(n,t){return{x:n.x-t.x,y:n.y-t.y}}function Rl({point:n},t){return{point:n,delta:jd(n,n_(t)),offset:jd(n,nw(t)),velocity:iw(t,.1)}}function nw(n){return n[0]}function n_(n){return n[n.length-1]}function iw(n,t){if(n.length<2)return{x:0,y:0};let e=n.length-1,i=null;const s=n_(n);for(;e>=0&&(i=n[e],!(s.timestamp-i.timestamp>Jn(t)));)e--;if(!i)return{x:0,y:0};const r=Rn(s.timestamp-i.timestamp);if(r===0)return{x:0,y:0};const a={x:(s.x-i.x)/r,y:(s.y-i.y)/r};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function sw(n,{min:t,max:e},i){return t!==void 0&&n<t?n=i?ge(t,n,i.min):Math.max(n,t):e!==void 0&&n>e&&(n=i?ge(e,n,i.max):Math.min(n,e)),n}function Yd(n,t,e){return{min:t!==void 0?n.min+t:void 0,max:e!==void 0?n.max+e-(n.max-n.min):void 0}}function rw(n,{top:t,left:e,bottom:i,right:s}){return{x:Yd(n.x,e,s),y:Yd(n.y,t,i)}}function qd(n,t){let e=t.min-n.min,i=t.max-n.max;return t.max-t.min<n.max-n.min&&([e,i]=[i,e]),{min:e,max:i}}function aw(n,t){return{x:qd(n.x,t.x),y:qd(n.y,t.y)}}function ow(n,t){let e=.5;const i=Ze(n),s=Ze(t);return s>i?e=qr(t.min,t.max-i,n.min):i>s&&(e=qr(n.min,n.max-s,t.min)),yi(0,1,e)}function lw(n,t){const e={};return t.min!==void 0&&(e.min=t.min-n.min),t.max!==void 0&&(e.max=t.max-n.min),e}const uu=.35;function cw(n=uu){return n===!1?n=0:n===!0&&(n=uu),{x:Kd(n,"left","right"),y:Kd(n,"top","bottom")}}function Kd(n,t,e){return{min:$d(n,t),max:$d(n,e)}}function $d(n,t){return typeof n=="number"?n:n[t]||0}const uw=new WeakMap;class hw{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=De(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:e=!1,distanceThreshold:i}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const r=h=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),e&&this.snapToCursor(da(h).point)},a=(h,f)=>{const{drag:d,dragPropagation:_,onDragStart:g}=this.getProps();if(d&&!_&&(this.openDragLock&&this.openDragLock(),this.openDragLock=g1(d),!this.openDragLock))return;this.latestPointerEvent=h,this.latestPanInfo=f,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),An(p=>{let y=this.getAxisMotionValue(p).get()||0;if(Qn.test(y)){const{projection:S}=this.visualElement;if(S&&S.layout){const T=S.layout.layoutBox[p];T&&(y=Ze(T)*(parseFloat(y)/100))}}this.originPoint[p]=y}),g&&de.postRender(()=>g(h,f)),lu(this.visualElement,"transform");const{animationState:m}=this.visualElement;m&&m.setActive("whileDrag",!0)},o=(h,f)=>{this.latestPointerEvent=h,this.latestPanInfo=f;const{dragPropagation:d,dragDirectionLock:_,onDirectionLock:g,onDrag:m}=this.getProps();if(!d&&!this.openDragLock)return;const{offset:p}=f;if(_&&this.currentDirection===null){this.currentDirection=fw(p),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",f.point,p),this.updateAxis("y",f.point,p),this.visualElement.render(),m&&m(h,f)},l=(h,f)=>{this.latestPointerEvent=h,this.latestPanInfo=f,this.stop(h,f),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>An(h=>this.getAnimationState(h)==="paused"&&this.getAxisMotionValue(h).animation?.play()),{dragSnapToOrigin:u}=this.getProps();this.panSession=new e_(t,{onSessionStart:r,onStart:a,onMove:o,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:i,contextWindow:t_(this.visualElement)})}stop(t,e){const i=t||this.latestPointerEvent,s=e||this.latestPanInfo,r=this.isDragging;if(this.cancel(),!r||!s||!i)return;const{velocity:a}=s;this.startAnimation(a);const{onDragEnd:o}=this.getProps();o&&de.postRender(()=>o(i,s))}cancel(){this.isDragging=!1;const{projection:t,animationState:e}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),e&&e.setActive("whileDrag",!1)}updateAxis(t,e,i){const{drag:s}=this.getProps();if(!i||!Ga(t,s,this.currentDirection))return;const r=this.getAxisMotionValue(t);let a=this.originPoint[t]+i[t];this.constraints&&this.constraints[t]&&(a=sw(a,this.constraints[t],this.elastic[t])),r.set(a)}resolveConstraints(){const{dragConstraints:t,dragElastic:e}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,s=this.constraints;t&&Hs(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&i?this.constraints=rw(i.layoutBox,t):this.constraints=!1,this.elastic=cw(e),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&An(r=>{this.constraints!==!1&&this.getAxisMotionValue(r)&&(this.constraints[r]=lw(i.layoutBox[r],this.constraints[r]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:e}=this.getProps();if(!t||!Hs(t))return!1;const i=t.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const r=dA(i,s.root,this.visualElement.getTransformPagePoint());let a=aw(s.layout.layoutBox,r);if(e){const o=e(uA(a));this.hasMutatedConstraints=!!o,o&&(a=Vg(o))}return a}startAnimation(t){const{drag:e,dragMomentum:i,dragElastic:s,dragTransition:r,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),l=this.constraints||{},c=An(u=>{if(!Ga(u,e,this.currentDirection))return;let h=l&&l[u]||{};a&&(h={min:0,max:0});const f=s?200:1e6,d=s?40:1e7,_={type:"inertia",velocity:i?t[u]:0,bounceStiffness:f,bounceDamping:d,timeConstant:750,restDelta:1,restSpeed:10,...r,...h};return this.startAxisValueAnimation(u,_)});return Promise.all(c).then(o)}startAxisValueAnimation(t,e){const i=this.getAxisMotionValue(t);return lu(this.visualElement,t),i.start(Sh(t,i,0,e,this.visualElement,!1))}stopAnimation(){An(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){An(t=>this.getAxisMotionValue(t).animation?.pause())}getAnimationState(t){return this.getAxisMotionValue(t).animation?.state}getAxisMotionValue(t){const e=`_drag${t.toUpperCase()}`,i=this.visualElement.getProps(),s=i[e];return s||this.visualElement.getValue(t,(i.initial?i.initial[t]:void 0)||0)}snapToCursor(t){An(e=>{const{drag:i}=this.getProps();if(!Ga(e,i,this.currentDirection))return;const{projection:s}=this.visualElement,r=this.getAxisMotionValue(e);if(s&&s.layout){const{min:a,max:o}=s.layout.layoutBox[e];r.set(t[e]-ge(a,o,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:e}=this.getProps(),{projection:i}=this.visualElement;if(!Hs(e)||!i||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};An(a=>{const o=this.getAxisMotionValue(a);if(o&&this.constraints!==!1){const l=o.get();s[a]=ow({min:l,max:l},this.constraints[a])}});const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),An(a=>{if(!Ga(a,t,null))return;const o=this.getAxisMotionValue(a),{min:l,max:c}=this.constraints[a];o.set(ge(l,c,s[a]))})}addListeners(){if(!this.visualElement.current)return;uw.set(this.visualElement,this);const t=this.visualElement.current,e=Vr(t,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Hs(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,r=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),de.read(i);const a=Jr(window,"resize",()=>this.scalePositionWithinConstraints()),o=s.addEventListener("didUpdate",(({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(An(u=>{const h=this.getAxisMotionValue(u);h&&(this.originPoint[u]+=l[u].translate,h.set(h.get()+l[u].translate))}),this.visualElement.render())}));return()=>{a(),e(),r(),o&&o()}}getProps(){const t=this.visualElement.getProps(),{drag:e=!1,dragDirectionLock:i=!1,dragPropagation:s=!1,dragConstraints:r=!1,dragElastic:a=uu,dragMomentum:o=!0}=t;return{...t,drag:e,dragDirectionLock:i,dragPropagation:s,dragConstraints:r,dragElastic:a,dragMomentum:o}}}function Ga(n,t,e){return(t===!0||t===n)&&(e===null||e===n)}function fw(n,t=10){let e=null;return Math.abs(n.y)>t?e="y":Math.abs(n.x)>t&&(e="x"),e}class dw extends Xi{constructor(t){super(t),this.removeGroupControls=Ln,this.removeListeners=Ln,this.controls=new hw(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ln}unmount(){this.removeGroupControls(),this.removeListeners()}}const Zd=n=>(t,e)=>{n&&de.postRender(()=>n(t,e))};class pw extends Xi{constructor(){super(...arguments),this.removePointerDownListener=Ln}onPointerDown(t){this.session=new e_(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:t_(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:e,onPan:i,onPanEnd:s}=this.node.getProps();return{onSessionStart:Zd(t),onStart:Zd(e),onMove:i,onEnd:(r,a)=>{delete this.session,s&&de.postRender(()=>s(r,a))}}}mount(){this.removePointerDownListener=Vr(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const no={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let Pl=!1;class mw extends Q.Component{componentDidMount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:i,layoutId:s}=this.props,{projection:r}=t;r&&(e.group&&e.group.add(r),i&&i.register&&s&&i.register(r),Pl&&r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,onExitComplete:()=>this.safeToRemove()})),no.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:e,visualElement:i,drag:s,isPresent:r}=this.props,{projection:a}=i;return a&&(a.isPresent=r,Pl=!0,s||t.layoutDependency!==e||e===void 0||t.isPresent!==r?a.willUpdate():this.safeToRemove(),t.isPresent!==r&&(r?a.promote():a.relegate()||de.postRender(()=>{const o=a.getStack();(!o||!o.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),uh.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:i}=this.props,{projection:s}=t;Pl=!0,s&&(s.scheduleCheckAfterUnmount(),e&&e.group&&e.group.remove(s),i&&i.deregister&&i.deregister(s))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function i_(n){const[t,e]=Eg(),i=Q.useContext(Gu);return ft.jsx(mw,{...n,layoutGroup:i,switchLayoutGroup:Q.useContext(Og),isPresent:t,safeToRemove:e})}function gw(n,t,e){const i=Xe(n)?n:ar(n);return i.start(Sh("",i,t,e)),i.animation}const _w=(n,t)=>n.depth-t.depth;class xw{constructor(){this.children=[],this.isDirty=!1}add(t){ju(this.children,t),this.isDirty=!0}remove(t){Yu(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(_w),this.isDirty=!1,this.children.forEach(t)}}function vw(n,t){const e=sn.now(),i=({timestamp:s})=>{const r=s-e;r>=t&&(ki(i),n(r-t))};return de.setup(i,!0),()=>ki(i)}const s_=["TopLeft","TopRight","BottomLeft","BottomRight"],yw=s_.length,Jd=n=>typeof n=="string"?parseFloat(n):n,Qd=n=>typeof n=="number"||Ct.test(n);function Sw(n,t,e,i,s,r){s?(n.opacity=ge(0,e.opacity??1,Mw(i)),n.opacityExit=ge(t.opacity??1,0,Tw(i))):r&&(n.opacity=ge(t.opacity??1,e.opacity??1,i));for(let a=0;a<yw;a++){const o=`border${s_[a]}Radius`;let l=tp(t,o),c=tp(e,o);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Qd(l)===Qd(c)?(n[o]=Math.max(ge(Jd(l),Jd(c),i),0),(Qn.test(c)||Qn.test(l))&&(n[o]+="%")):n[o]=c}(t.rotate||e.rotate)&&(n.rotate=ge(t.rotate||0,e.rotate||0,i))}function tp(n,t){return n[t]!==void 0?n[t]:n.borderRadius}const Mw=r_(0,.5,Wm),Tw=r_(.5,.95,Ln);function r_(n,t,e){return i=>i<n?0:i>t?1:e(qr(n,t,i))}function ep(n,t){n.min=t.min,n.max=t.max}function On(n,t){ep(n.x,t.x),ep(n.y,t.y)}function np(n,t){n.translate=t.translate,n.scale=t.scale,n.originPoint=t.originPoint,n.origin=t.origin}function ip(n,t,e,i,s){return n-=t,n=mo(n,1/e,i),s!==void 0&&(n=mo(n,1/s,i)),n}function bw(n,t=0,e=1,i=.5,s,r=n,a=n){if(Qn.test(t)&&(t=parseFloat(t),t=ge(a.min,a.max,t/100)-a.min),typeof t!="number")return;let o=ge(r.min,r.max,i);n===r&&(o-=t),n.min=ip(n.min,t,e,o,s),n.max=ip(n.max,t,e,o,s)}function sp(n,t,[e,i,s],r,a){bw(n,t[e],t[i],t[s],t.scale,r,a)}const Ew=["x","scaleX","originX"],Aw=["y","scaleY","originY"];function rp(n,t,e,i){sp(n.x,t,Ew,e?e.x:void 0,i?i.x:void 0),sp(n.y,t,Aw,e?e.y:void 0,i?i.y:void 0)}function ap(n){return n.translate===0&&n.scale===1}function a_(n){return ap(n.x)&&ap(n.y)}function op(n,t){return n.min===t.min&&n.max===t.max}function ww(n,t){return op(n.x,t.x)&&op(n.y,t.y)}function lp(n,t){return Math.round(n.min)===Math.round(t.min)&&Math.round(n.max)===Math.round(t.max)}function o_(n,t){return lp(n.x,t.x)&&lp(n.y,t.y)}function cp(n){return Ze(n.x)/Ze(n.y)}function up(n,t){return n.translate===t.translate&&n.scale===t.scale&&n.originPoint===t.originPoint}class Cw{constructor(){this.members=[]}add(t){ju(this.members,t),t.scheduleRender()}remove(t){if(Yu(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(t){const e=this.members.findIndex(s=>t===s);if(e===0)return!1;let i;for(let s=e;s>=0;s--){const r=this.members[s];if(r.isPresent!==!1){i=r;break}}return i?(this.promote(i),!0):!1}promote(t,e){const i=this.lead;if(t!==i&&(this.prevLead=i,this.lead=t,t.show(),i)){i.instance&&i.scheduleRender(),t.scheduleRender(),t.resumeFrom=i,e&&(t.resumeFrom.preserveOpacity=!0),i.snapshot&&(t.snapshot=i.snapshot,t.snapshot.latestValues=i.animationValues||i.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:s}=t.options;s===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:e,resumingFrom:i}=t;e.onExitComplete&&e.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Rw(n,t,e){let i="";const s=n.x.translate/t.x,r=n.y.translate/t.y,a=e?.z||0;if((s||r||a)&&(i=`translate3d(${s}px, ${r}px, ${a}px) `),(t.x!==1||t.y!==1)&&(i+=`scale(${1/t.x}, ${1/t.y}) `),e){const{transformPerspective:c,rotate:u,rotateX:h,rotateY:f,skewX:d,skewY:_}=e;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),h&&(i+=`rotateX(${h}deg) `),f&&(i+=`rotateY(${f}deg) `),d&&(i+=`skewX(${d}deg) `),_&&(i+=`skewY(${_}deg) `)}const o=n.x.scale*t.x,l=n.y.scale*t.y;return(o!==1||l!==1)&&(i+=`scale(${o}, ${l})`),i||"none"}const Dl=["","X","Y","Z"],Pw=1e3;let Dw=0;function Ll(n,t,e,i){const{latestValues:s}=t;s[n]&&(e[n]=s[n],t.setStaticValue(n,0),i&&(i[n]=0))}function l_(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:t}=n.options;if(!t)return;const e=Yg(t);if(window.MotionHasOptimisedAnimation(e,"transform")){const{layout:s,layoutId:r}=n.options;window.MotionCancelOptimisedAnimation(e,"transform",de,!(s||r))}const{parent:i}=n;i&&!i.hasCheckedOptimisedAppear&&l_(i)}function c_({attachResizeListener:n,defaultParent:t,measureScroll:e,checkIsScrollRoot:i,resetTransform:s}){return class{constructor(a={},o=t?.()){this.id=Dw++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Uw),this.nodes.forEach(Bw),this.nodes.forEach(Vw),this.nodes.forEach(Nw)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=o?o.root||o:this,this.path=o?[...o.path,o]:[],this.parent=o,this.depth=o?o.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new xw)}addEventListener(a,o){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new $u),this.eventHandlers.get(a).add(o)}notifyListeners(a,...o){const l=this.eventHandlers.get(a);l&&l.notify(...o)}hasListeners(a){return this.eventHandlers.has(a)}mount(a){if(this.instance)return;this.isSVG=bg(a)&&!M1(a),this.instance=a;const{layoutId:o,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||o)&&(this.isLayoutDirty=!0),n){let u,h=0;const f=()=>this.root.updateBlockedByResize=!1;de.read(()=>{h=window.innerWidth}),n(a,()=>{const d=window.innerWidth;d!==h&&(h=d,this.root.updateBlockedByResize=!0,u&&u(),u=vw(f,250),no.hasAnimatedSinceResize&&(no.hasAnimatedSinceResize=!1,this.nodes.forEach(dp)))})}o&&this.root.registerSharedNode(o,this),this.options.animate!==!1&&c&&(o||l)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:h,hasRelativeLayoutChanged:f,layout:d})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const _=this.options.transition||c.getDefaultTransition()||Ww,{onLayoutAnimationStart:g,onLayoutAnimationComplete:m}=c.getProps(),p=!this.targetLayout||!o_(this.targetLayout,d),y=!h&&f;if(this.options.layoutRoot||this.resumeFrom||y||h&&(p||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const S={...lh(_,"layout"),onPlay:g,onComplete:m};(c.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S),this.setAnimationOrigin(u,y)}else h||dp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=d})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ki(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(kw),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&l_(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const h=this.path[u];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:o,layout:l}=this.options;if(o===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(hp);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(fp);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Ow),this.nodes.forEach(Lw),this.nodes.forEach(Iw)):this.nodes.forEach(fp),this.clearAllSnapshots();const o=sn.now();Be.delta=yi(0,1e3/60,o-Be.timestamp),Be.timestamp=o,Be.isProcessing=!0,yl.update.process(Be),yl.preRender.process(Be),yl.render.process(Be),Be.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,uh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Fw),this.sharedNodes.forEach(zw)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,de.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){de.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ze(this.snapshot.measuredBox.x)&&!Ze(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=De(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:o}=this.options;o&&o.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let o=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(o=!1),o&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:l,offset:e(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!s)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,o=this.projectionDelta&&!a_(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;a&&this.instance&&(o||ss(this.latestValues)||u)&&(s(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const o=this.measurePageBox();let l=this.removeElementScroll(o);return a&&(l=this.removeTransform(l)),Xw(l),{animationId:this.root.animationId,measuredBox:o,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:a}=this.options;if(!a)return De();const o=a.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(jw))){const{scroll:c}=this.root;c&&(Gs(o.x,c.offset.x),Gs(o.y,c.offset.y))}return o}removeElementScroll(a){const o=De();if(On(o,a),this.scroll?.wasRoot)return o;for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:u,options:h}=c;c!==this.root&&u&&h.layoutScroll&&(u.wasRoot&&On(o,a),Gs(o.x,u.offset.x),Gs(o.y,u.offset.y))}return o}applyTransform(a,o=!1){const l=De();On(l,a);for(let c=0;c<this.path.length;c++){const u=this.path[c];!o&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Ws(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),ss(u.latestValues)&&Ws(l,u.latestValues)}return ss(this.latestValues)&&Ws(l,this.latestValues),l}removeTransform(a){const o=De();On(o,a);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!ss(c.latestValues))continue;su(c.latestValues)&&c.updateSnapshot();const u=De(),h=c.measurePageBox();On(u,h),rp(o,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return ss(this.latestValues)&&rp(o,this.latestValues),o}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Be.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){const o=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=o.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=o.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=o.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==o;if(!(a||l&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:h}=this.options;if(!this.layout||!(u||h))return;this.resolvedRelativeTargetAt=Be.timestamp;const f=this.getClosestProjectingParent();f&&this.linkedParentVersion!==f.layoutVersion&&!f.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(f&&f.layout?this.createRelativeTarget(f,this.layout.layoutBox,f.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=De(),this.targetWithTransforms=De()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),tw(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):On(this.target,this.layout.layoutBox),zg(this.target,this.targetDelta)):On(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?this.createRelativeTarget(f,this.target,f.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||su(this.parent.latestValues)||kg(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(a,o,l){this.relativeParent=a,this.linkedParentVersion=a.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=De(),this.relativeTargetOrigin=De(),go(this.relativeTargetOrigin,o,l),On(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const a=this.getLead(),o=!!this.resumingFrom||this!==a;let l=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(l=!1),o&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Be.timestamp&&(l=!1),l)return;const{layout:c,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||u))return;On(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,f=this.treeScale.y;fA(this.layoutCorrected,this.treeScale,this.path,o),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=De());const{target:d}=a;if(!d){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(np(this.prevProjectionDelta.x,this.projectionDelta.x),np(this.prevProjectionDelta.y,this.projectionDelta.y)),kr(this.projectionDelta,this.layoutCorrected,d,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==f||!up(this.projectionDelta.x,this.prevProjectionDelta.x)||!up(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",d))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){if(this.options.visualElement?.scheduleRender(),a){const o=this.getStack();o&&o.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Xs(),this.projectionDelta=Xs(),this.projectionDeltaWithTransform=Xs()}setAnimationOrigin(a,o=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},h=Xs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!o;const f=De(),d=l?l.source:void 0,_=this.layout?this.layout.source:void 0,g=d!==_,m=this.getStack(),p=!m||m.members.length<=1,y=!!(g&&!p&&this.options.crossfade===!0&&!this.path.some(Gw));this.animationProgress=0;let S;this.mixTargetDelta=T=>{const M=T/1e3;pp(h.x,a.x,M),pp(h.y,a.y,M),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(go(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Hw(this.relativeTarget,this.relativeTargetOrigin,f,M),S&&ww(this.relativeTarget,S)&&(this.isProjectionDirty=!1),S||(S=De()),On(S,this.relativeTarget)),g&&(this.animationValues=u,Sw(u,c,this.latestValues,M,y,p)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=M},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(ki(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=de.update(()=>{no.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=ar(0)),this.currentAnimation=gw(this.motionValue,[0,1e3],{...a,velocity:0,isSync:!0,onUpdate:o=>{this.mixTargetDelta(o),a.onUpdate&&a.onUpdate(o)},onStop:()=>{},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Pw),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:o,target:l,layout:c,latestValues:u}=a;if(!(!o||!l||!c)){if(this!==a&&this.layout&&c&&u_(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||De();const h=Ze(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+h;const f=Ze(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+f}On(o,l),Ws(o,u),kr(this.projectionDeltaWithTransform,this.layoutCorrected,o,u)}}registerSharedNode(a,o){this.sharedNodes.has(a)||this.sharedNodes.set(a,new Cw),this.sharedNodes.get(a).add(o);const c=o.options.initialPromotionConfig;o.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(o):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){const{layoutId:a}=this.options;return a?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:a}=this.options;return a?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:o,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),o&&this.setOptions({transition:o})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let o=!1;const{latestValues:l}=a;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(o=!0),!o)return;const c={};l.z&&Ll("z",a,c,this.animationValues);for(let u=0;u<Dl.length;u++)Ll(`rotate${Dl[u]}`,a,c,this.animationValues),Ll(`skew${Dl[u]}`,a,c,this.animationValues);a.render();for(const u in c)a.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);a.scheduleRender()}applyProjectionStyles(a,o){if(!this.instance||this.isSVG)return;if(!this.isVisible){a.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,a.visibility="",a.opacity="",a.pointerEvents=eo(o?.pointerEvents)||"",a.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(a.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,a.pointerEvents=eo(o?.pointerEvents)||""),this.hasProjected&&!ss(this.latestValues)&&(a.transform=l?l({},""):"none",this.hasProjected=!1);return}a.visibility="";const u=c.animationValues||c.latestValues;this.applyTransformsToTarget();let h=Rw(this.projectionDeltaWithTransform,this.treeScale,u);l&&(h=l(u,h)),a.transform=h;const{x:f,y:d}=this.projectionDelta;a.transformOrigin=`${f.origin*100}% ${d.origin*100}% 0`,c.animationValues?a.opacity=c===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:a.opacity=c===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const _ in iu){if(u[_]===void 0)continue;const{correct:g,applyTo:m,isCSSVariable:p}=iu[_],y=h==="none"?u[_]:g(u[_],c);if(m){const S=m.length;for(let T=0;T<S;T++)a[m[T]]=y}else p?this.options.visualElement.renderState.vars[_]=y:a[_]=y}this.options.layoutId&&(a.pointerEvents=c===this?eo(o?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>a.currentAnimation?.stop()),this.root.nodes.forEach(hp),this.root.sharedNodes.clear()}}}function Lw(n){n.updateLayout()}function Iw(n){const t=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:e,measuredBox:i}=n.layout,{animationType:s}=n.options,r=t.source!==n.layout.source;s==="size"?An(u=>{const h=r?t.measuredBox[u]:t.layoutBox[u],f=Ze(h);h.min=e[u].min,h.max=h.min+f}):u_(s,t.layoutBox,e)&&An(u=>{const h=r?t.measuredBox[u]:t.layoutBox[u],f=Ze(e[u]);h.max=h.min+f,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[u].max=n.relativeTarget[u].min+f)});const a=Xs();kr(a,e,t.layoutBox);const o=Xs();r?kr(o,n.applyTransform(i,!0),t.measuredBox):kr(o,e,t.layoutBox);const l=!a_(a);let c=!1;if(!n.resumeFrom){const u=n.getClosestProjectingParent();if(u&&!u.resumeFrom){const{snapshot:h,layout:f}=u;if(h&&f){const d=De();go(d,t.layoutBox,h.layoutBox);const _=De();go(_,e,f.layoutBox),o_(d,_)||(c=!0),u.options.layoutRoot&&(n.relativeTarget=_,n.relativeTargetOrigin=d,n.relativeParent=u)}}}n.notifyListeners("didUpdate",{layout:e,snapshot:t,delta:o,layoutDelta:a,hasLayoutChanged:l,hasRelativeLayoutChanged:c})}else if(n.isLead()){const{onExitComplete:e}=n.options;e&&e()}n.options.transition=void 0}function Uw(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function Nw(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function Fw(n){n.clearSnapshot()}function hp(n){n.clearMeasurements()}function fp(n){n.isLayoutDirty=!1}function Ow(n){const{visualElement:t}=n.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),n.resetTransform()}function dp(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function Bw(n){n.resolveTargetDelta()}function Vw(n){n.calcProjection()}function kw(n){n.resetSkewAndRotation()}function zw(n){n.removeLeadSnapshot()}function pp(n,t,e){n.translate=ge(t.translate,0,e),n.scale=ge(t.scale,1,e),n.origin=t.origin,n.originPoint=t.originPoint}function mp(n,t,e,i){n.min=ge(t.min,e.min,i),n.max=ge(t.max,e.max,i)}function Hw(n,t,e,i){mp(n.x,t.x,e.x,i),mp(n.y,t.y,e.y,i)}function Gw(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const Ww={duration:.45,ease:[.4,0,.1,1]},gp=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),_p=gp("applewebkit/")&&!gp("chrome/")?Math.round:Ln;function xp(n){n.min=_p(n.min),n.max=_p(n.max)}function Xw(n){xp(n.x),xp(n.y)}function u_(n,t,e){return n==="position"||n==="preserve-aspect"&&!QA(cp(t),cp(e),.2)}function jw(n){return n!==n.root&&n.scroll?.wasRoot}const Yw=c_({attachResizeListener:(n,t)=>Jr(n,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Il={current:void 0},h_=c_({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Il.current){const n=new Yw({});n.mount(window),n.setOptions({layoutScroll:!0}),Il.current=n}return Il.current},resetTransform:(n,t)=>{n.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),qw={pan:{Feature:pw},drag:{Feature:dw,ProjectionNode:h_,MeasureLayout:i_}};function vp(n,t,e){const{props:i}=n;n.animationState&&i.whileHover&&n.animationState.setActive("whileHover",e==="Start");const s="onHover"+e,r=i[s];r&&de.postRender(()=>r(t,da(t)))}class Kw extends Xi{mount(){const{current:t}=this.node;t&&(this.unmount=_1(t,(e,i)=>(vp(this.node,i,"Start"),s=>vp(this.node,s,"End"))))}unmount(){}}class $w extends Xi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ua(Jr(this.node.current,"focus",()=>this.onFocus()),Jr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function yp(n,t,e){const{props:i}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&i.whileTap&&n.animationState.setActive("whileTap",e==="Start");const s="onTap"+(e==="End"?"":e),r=i[s];r&&de.postRender(()=>r(t,da(t)))}class Zw extends Xi{mount(){const{current:t}=this.node;t&&(this.unmount=S1(t,(e,i)=>(yp(this.node,i,"Start"),(s,{success:r})=>yp(this.node,s,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const hu=new WeakMap,Ul=new WeakMap,Jw=n=>{const t=hu.get(n.target);t&&t(n)},Qw=n=>{n.forEach(Jw)};function tC({root:n,...t}){const e=n||document;Ul.has(e)||Ul.set(e,{});const i=Ul.get(e),s=JSON.stringify(t);return i[s]||(i[s]=new IntersectionObserver(Qw,{root:n,...t})),i[s]}function eC(n,t,e){const i=tC(t);return hu.set(n,e),i.observe(n),()=>{hu.delete(n),i.unobserve(n)}}const nC={some:0,all:1};class iC extends Xi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:e,margin:i,amount:s="some",once:r}=t,a={root:e?e.current:void 0,rootMargin:i,threshold:typeof s=="number"?s:nC[s]},o=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,r&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:h}=this.node.getProps(),f=c?u:h;f&&f(l)};return eC(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:e}=this.node;["amount","margin","root"].some(sC(t,e))&&this.startObserver()}unmount(){}}function sC({viewport:n={}},{viewport:t={}}={}){return e=>n[e]!==t[e]}const rC={inView:{Feature:iC},tap:{Feature:Zw},focus:{Feature:$w},hover:{Feature:Kw}},aC={layout:{ProjectionNode:h_,MeasureLayout:i_}},oC={...YA,...rC,...qw,...aC},he=cA(oC,MA);function ui(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function f_(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Sn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},lr={duration:.5,overwrite:!1,delay:0},Mh,ke,fe,Pn=1e8,oe=1/Pn,fu=Math.PI*2,lC=fu/4,cC=0,d_=Math.sqrt,uC=Math.cos,hC=Math.sin,Oe=function(t){return typeof t=="string"},Me=function(t){return typeof t=="function"},Mi=function(t){return typeof t=="number"},Th=function(t){return typeof t>"u"},ii=function(t){return typeof t=="object"},an=function(t){return t!==!1},bh=function(){return typeof window<"u"},Wa=function(t){return Me(t)||Oe(t)},p_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ye=Array.isArray,fC=/random\([^)]+\)/g,dC=/,\s*/g,Sp=/(?:-?\.?\d|\.)+/gi,m_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,js=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Nl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,g_=/[+-]=-?[.\d]+/,pC=/[^,'"\[\]\s]+/gi,mC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,me,Gn,du,Eh,Mn={},_o={},__,x_=function(t){return(_o=cr(t,Mn))&&un},Ah=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Qr=function(t,e){return!e&&console.warn(t)},v_=function(t,e){return t&&(Mn[t]=e)&&_o&&(_o[t]=e)||Mn},ta=function(){return 0},gC={suppressEvents:!0,isStart:!0,kill:!1},io={suppressEvents:!0,kill:!1},_C={suppressEvents:!0},wh={},Bi=[],pu={},y_,mn={},Fl={},Mp=30,so=[],Ch="",Rh=function(t){var e=t[0],i,s;if(ii(e)||Me(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(s=so.length;s--&&!so[s].targetTest(e););i=so[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new W_(t[s],i)))||t.splice(s,1);return t},ms=function(t){return t._gsap||Rh(Dn(t))[0]._gsap},S_=function(t,e,i){return(i=t[e])&&Me(i)?t[e]():Th(i)&&t.getAttribute&&t.getAttribute(e)||i},on=function(t,e){return(t=t.split(",")).forEach(e)||t},be=function(t){return Math.round(t*1e5)/1e5||0},pe=function(t){return Math.round(t*1e7)/1e7||0},Js=function(t,e){var i=e.charAt(0),s=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+s:i==="-"?t-s:i==="*"?t*s:t/s},xC=function(t,e){for(var i=e.length,s=0;t.indexOf(e[s])<0&&++s<i;);return s<i},xo=function(){var t=Bi.length,e=Bi.slice(0),i,s;for(pu={},Bi.length=0,i=0;i<t;i++)s=e[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Ph=function(t){return!!(t._initted||t._startAt||t.add)},M_=function(t,e,i,s){Bi.length&&!ke&&xo(),t.render(e,i,!!(ke&&e<0&&Ph(t))),Bi.length&&!ke&&xo()},T_=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(pC).length<2?e:Oe(t)?t.trim():t},b_=function(t){return t},Tn=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},vC=function(t){return function(e,i){for(var s in i)s in e||s==="duration"&&t||s==="ease"||(e[s]=i[s])}},cr=function(t,e){for(var i in e)t[i]=e[i];return t},Tp=function n(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=ii(e[i])?n(t[i]||(t[i]={}),e[i]):e[i]);return t},vo=function(t,e){var i={},s;for(s in t)s in e||(i[s]=t[s]);return i},zr=function(t){var e=t.parent||me,i=t.keyframes?vC(Ye(t.keyframes)):Tn;if(an(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},yC=function(t,e){for(var i=t.length,s=i===e.length;s&&i--&&t[i]===e[i];);return i<0},E_=function(t,e,i,s,r){var a=t[s],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[s]=e,e._prev=a,e.parent=e._dp=t,e},Uo=function(t,e,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var r=e._prev,a=e._next;r?r._next=a:t[i]===e&&(t[i]=a),a?a._prev=r:t[s]===e&&(t[s]=r),e._next=e._prev=e.parent=null},Hi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},gs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},SC=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},mu=function(t,e,i,s){return t._startAt&&(ke?t._startAt.revert(io):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,s))},MC=function n(t){return!t||t._ts&&n(t.parent)},bp=function(t){return t._repeat?ur(t._tTime,t=t.duration()+t._rDelay)*t:0},ur=function(t,e){var i=Math.floor(t=pe(t/e));return t&&i===t?i-1:i},yo=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},No=function(t){return t._end=pe(t._start+(t._tDur/Math.abs(t._ts||t._rts||oe)||0))},Fo=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=pe(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),No(t),i._dirty||gs(i,t)),t},A_=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=yo(t.rawTime(),e),(!e._dur||pa(0,e.totalDuration(),i)-e._tTime>oe)&&e.render(i,!0)),gs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-oe}},Xn=function(t,e,i,s){return e.parent&&Hi(e),e._start=pe((Mi(i)?i:i||t!==me?wn(t,i,e):t._time)+e._delay),e._end=pe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),E_(t,e,"_first","_last",t._sort?"_start":0),gu(e)||(t._recent=e),s||A_(t,e),t._ts<0&&Fo(t,t._tTime),t},w_=function(t,e){return(Mn.ScrollTrigger||Ah("scrollTrigger",e))&&Mn.ScrollTrigger.create(e,t)},C_=function(t,e,i,s,r){if(Lh(t,e,r),!t._initted)return 1;if(!i&&t._pt&&!ke&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&y_!==xn.frame)return Bi.push(t),t._lazy=[r,s],1},TC=function n(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||n(e))},gu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},bC=function(t,e,i,s){var r=t.ratio,a=e<0||!e&&(!t._start&&TC(t)&&!(!t._initted&&gu(t))||(t._ts<0||t._dp._ts<0)&&!gu(t))?0:1,o=t._rDelay,l=0,c,u,h;if(o&&t._repeat&&(l=pa(0,t._tDur,e),u=ur(l,o),t._yoyo&&u&1&&(a=1-a),u!==ur(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||ke||s||t._zTime===oe||!e&&t._zTime){if(!t._initted&&C_(t,e,s,i,l))return;for(h=t._zTime,t._zTime=e||(i?oe:0),i||(i=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&mu(t,e,i,!0),t._onUpdate&&!i&&vn(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&vn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Hi(t,1),!i&&!ke&&(vn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},EC=function(t,e,i){var s;if(i>e)for(s=t._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>e)return s;s=s._next}else for(s=t._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<e)return s;s=s._prev}},hr=function(t,e,i,s){var r=t._repeat,a=pe(e)||0,o=t._tTime/t._tDur;return o&&!s&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:pe(a*(r+1)+t._rDelay*r):a,o>0&&!s&&Fo(t,t._tTime=t._tDur*o),t.parent&&No(t),i||gs(t.parent,t),t},Ep=function(t){return t instanceof $e?gs(t):hr(t,t._dur)},AC={_start:0,endTime:ta,totalDuration:ta},wn=function n(t,e,i){var s=t.labels,r=t._recent||AC,a=t.duration()>=Pn?r.endTime(!1):t._dur,o,l,c;return Oe(e)&&(isNaN(e)||e in s)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?r:i).totalDuration()/100:1)):o<0?(e in s||(s[e]=a),s[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&i&&(l=l/100*(Ye(i)?i[0]:i).totalDuration()),o>1?n(t,e.substr(0,o-1),i)+l:a+l)):e==null?a:+e},Hr=function(t,e,i){var s=Mi(e[1]),r=(s?2:1)+(t<2?0:1),a=e[r],o,l;if(s&&(a.duration=e[1]),a.parent=i,t){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=an(l.vars.inherit)&&l.parent;a.immediateRender=an(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new Re(e[0],a,e[r+1])},ji=function(t,e){return t||t===0?e(t):e},pa=function(t,e,i){return i<t?t:i>e?e:i},Ge=function(t,e){return!Oe(t)||!(e=mC.exec(t))?"":e[1]},wC=function(t,e,i){return ji(i,function(s){return pa(t,e,s)})},_u=[].slice,R_=function(t,e){return t&&ii(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ii(t[0]))&&!t.nodeType&&t!==Gn},CC=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(s){var r;return Oe(s)&&!e||R_(s,1)?(r=i).push.apply(r,Dn(s)):i.push(s)})||i},Dn=function(t,e,i){return fe&&!e&&fe.selector?fe.selector(t):Oe(t)&&!i&&(du||!fr())?_u.call((e||Eh).querySelectorAll(t),0):Ye(t)?CC(t,i):R_(t)?_u.call(t,0):t?[t]:[]},xu=function(t){return t=Dn(t)[0]||Qr("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Dn(e,i.querySelectorAll?i:i===t?Qr("Invalid scope")||Eh.createElement("div"):t)}},P_=function(t){return t.sort(function(){return .5-Math.random()})},D_=function(t){if(Me(t))return t;var e=ii(t)?t:{each:t},i=_s(e.ease),s=e.from||0,r=parseFloat(e.base)||0,a={},o=s>0&&s<1,l=isNaN(s)||o,c=e.axis,u=s,h=s;return Oe(s)?u=h={center:.5,edges:.5,end:1}[s]||0:!o&&l&&(u=s[0],h=s[1]),function(f,d,_){var g=(_||e).length,m=a[g],p,y,S,T,M,A,w,R,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,Pn])[1],!x){for(w=-Pn;w<(w=_[x++].getBoundingClientRect().left)&&x<g;);x<g&&x--}for(m=a[g]=[],p=l?Math.min(x,g)*u-.5:s%x,y=x===Pn?0:l?g*h/x-.5:s/x|0,w=0,R=Pn,A=0;A<g;A++)S=A%x-p,T=y-(A/x|0),m[A]=M=c?Math.abs(c==="y"?T:S):d_(S*S+T*T),M>w&&(w=M),M<R&&(R=M);s==="random"&&P_(m),m.max=w-R,m.min=R,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(x>g?g-1:c?c==="y"?g/x:x:Math.max(x,g/x))||0)*(s==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Ge(e.amount||e.each)||0,i=i&&g<0?z_(i):i}return g=(m[f]-m.min)/m.max||0,pe(m.b+(i?i(g):g)*m.v)+m.u}},vu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var s=pe(Math.round(parseFloat(i)/t)*t*e);return(s-s%1)/e+(Mi(i)?0:Ge(i))}},L_=function(t,e){var i=Ye(t),s,r;return!i&&ii(t)&&(s=i=t.radius||Pn,t.values?(t=Dn(t.values),(r=!Mi(t[0]))&&(s*=s)):t=vu(t.increment)),ji(e,i?Me(t)?function(a){return r=t(a),Math.abs(r-a)<=s?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Pn,u=0,h=t.length,f,d;h--;)r?(f=t[h].x-o,d=t[h].y-l,f=f*f+d*d):f=Math.abs(t[h]-o),f<c&&(c=f,u=h);return u=!s||c<=s?t[u]:a,r||u===a||Mi(a)?u:u+Ge(a)}:vu(t))},I_=function(t,e,i,s){return ji(Ye(t)?!e:i===!0?!!(i=0):!s,function(){return Ye(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*s)/s})},RC=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(s){return e.reduce(function(r,a){return a(r)},s)}},PC=function(t,e){return function(i){return t(parseFloat(i))+(e||Ge(i))}},DC=function(t,e,i){return N_(t,e,0,1,i)},U_=function(t,e,i){return ji(i,function(s){return t[~~e(s)]})},LC=function n(t,e,i){var s=e-t;return Ye(t)?U_(t,n(0,t.length),e):ji(i,function(r){return(s+(r-t)%s)%s+t})},IC=function n(t,e,i){var s=e-t,r=s*2;return Ye(t)?U_(t,n(0,t.length-1),e):ji(i,function(a){return a=(r+(a-t)%r)%r||0,t+(a>s?r-a:a)})},ea=function(t){return t.replace(fC,function(e){var i=e.indexOf("[")+1,s=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(dC);return I_(i?s:+s[0],i?0:+s[1],+s[2]||1e-5)})},N_=function(t,e,i,s,r){var a=e-t,o=s-i;return ji(r,function(l){return i+((l-t)/a*o||0)})},UC=function n(t,e,i,s){var r=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!r){var a=Oe(t),o={},l,c,u,h,f;if(i===!0&&(s=1)&&(i=null),a)t={p:t},e={p:e};else if(Ye(t)&&!Ye(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(n(t[c-1],t[c]));h--,r=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},i=e}else s||(t=cr(Ye(t)?[]:{},t));if(!u){for(l in e)Dh.call(o,t,l,"get",e[l]);r=function(_){return Nh(_,o)||(a?t.p:t)}}}return ji(i,r)},Ap=function(t,e,i){var s=t.labels,r=Pn,a,o,l;for(a in s)o=s[a]-e,o<0==!!i&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},vn=function(t,e,i){var s=t.vars,r=s[e],a=fe,o=t._ctx,l,c,u;if(r)return l=s[e+"Params"],c=s.callbackScope||t,i&&Bi.length&&xo(),o&&(fe=o),u=l?r.apply(c,l):r.call(c),fe=a,u},Ur=function(t){return Hi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ke),t.progress()<1&&vn(t,"onInterrupt"),t},Ys,F_=[],O_=function(t){if(t)if(t=!t.name&&t.default||t,bh()||t.headless){var e=t.name,i=Me(t),s=e&&!i&&t.init?function(){this._props=[]}:t,r={init:ta,render:Nh,add:Dh,kill:$C,modifier:KC,rawVars:0},a={targetTest:0,get:0,getSetter:Uh,aliases:{},register:0};if(fr(),t!==s){if(mn[e])return;Tn(s,Tn(vo(t,r),a)),cr(s.prototype,cr(r,vo(t,a))),mn[s.prop=e]=s,t.targetTest&&(so.push(s),wh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}v_(e,s),t.register&&t.register(un,s,ln)}else F_.push(t)},ae=255,Nr={aqua:[0,ae,ae],lime:[0,ae,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ae],navy:[0,0,128],white:[ae,ae,ae],olive:[128,128,0],yellow:[ae,ae,0],orange:[ae,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ae,0,0],pink:[ae,192,203],cyan:[0,ae,ae],transparent:[ae,ae,ae,0]},Ol=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*ae+.5|0},B_=function(t,e,i){var s=t?Mi(t)?[t>>16,t>>8&ae,t&ae]:0:Nr.black,r,a,o,l,c,u,h,f,d,_;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Nr[t])s=Nr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&ae,s&ae,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&ae,t&ae]}else if(t.substr(0,3)==="hsl"){if(s=_=t.match(Sp),!e)l=+s[0]%360/360,c=+s[1]/100,u=+s[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,s.length>3&&(s[3]*=1),s[0]=Ol(l+1/3,r,a),s[1]=Ol(l,r,a),s[2]=Ol(l-1/3,r,a);else if(~t.indexOf("="))return s=t.match(m_),i&&s.length<4&&(s[3]=1),s}else s=t.match(Sp)||Nr.transparent;s=s.map(Number)}return e&&!_&&(r=s[0]/ae,a=s[1]/ae,o=s[2]/ae,h=Math.max(r,a,o),f=Math.min(r,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(a-o)/d+(a<o?6:0):h===a?(o-r)/d+2:(r-a)/d+4,l*=60),s[0]=~~(l+.5),s[1]=~~(c*100+.5),s[2]=~~(u*100+.5)),i&&s.length<4&&(s[3]=1),s},V_=function(t){var e=[],i=[],s=-1;return t.split(Vi).forEach(function(r){var a=r.match(js)||[];e.push.apply(e,a),i.push(s+=a.length+1)}),e.c=i,e},wp=function(t,e,i){var s="",r=(t+s).match(Vi),a=e?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return t;if(r=r.map(function(f){return(f=B_(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=V_(t),l=i.c,l.join(s)!==u.c.join(s)))for(c=t.replace(Vi,"1").split(js),h=c.length-1;o<h;o++)s+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:i).shift());if(!c)for(c=t.split(Vi),h=c.length-1;o<h;o++)s+=c[o]+r[o];return s+c[h]},Vi=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Nr)n+="|"+t+"\\b";return new RegExp(n+")","gi")})(),NC=/hsl[a]?\(/,k_=function(t){var e=t.join(" "),i;if(Vi.lastIndex=0,Vi.test(e))return i=NC.test(e),t[1]=wp(t[1],i),t[0]=wp(t[0],i,V_(t[1])),!0},na,xn=(function(){var n=Date.now,t=500,e=33,i=n(),s=i,r=1e3/240,a=r,o=[],l,c,u,h,f,d,_=function g(m){var p=n()-s,y=m===!0,S,T,M,A;if((p>t||p<0)&&(i+=p-e),s+=p,M=s-i,S=M-a,(S>0||y)&&(A=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,a+=S+(S>=r?4:r-S),T=1),y||(l=c(g)),T)for(d=0;d<o.length;d++)o[d](M,f,A,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){__&&(!du&&bh()&&(Gn=du=window,Eh=Gn.document||{},Mn.gsap=un,(Gn.gsapVersions||(Gn.gsapVersions=[])).push(un.version),x_(_o||Gn.GreenSockGlobals||!Gn.gsap&&Gn||{}),F_.forEach(O_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},na=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),na=0,c=ta},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),a=h.time*1e3+r},add:function(m,p,y){var S=p?function(T,M,A,w){m(T,M,A,w),h.remove(S)}:m;return h.remove(m),o[y?"unshift":"push"](S),fr(),S},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},h})(),fr=function(){return!na&&xn.wake()},Ht={},FC=/^[\d.\-M][\d.\-,\s]/,OC=/["']/g,BC=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),s=i[0],r=1,a=i.length,o,l,c;r<a;r++)l=i[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[s]=isNaN(c)?c.replace(OC,"").trim():+c,s=l.substr(o+1).trim();return e},VC=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),s=t.indexOf("(",e);return t.substring(e,~s&&s<i?t.indexOf(")",i+1):i)},kC=function(t){var e=(t+"").split("("),i=Ht[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[BC(e[1])]:VC(t).split(",").map(T_)):Ht._CE&&FC.test(t)?Ht._CE("",t):i},z_=function(t){return function(e){return 1-t(1-e)}},H_=function n(t,e){for(var i=t._first,s;i;)i instanceof $e?n(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?n(i.timeline,e):(s=i._ease,i._ease=i._yEase,i._yEase=s,i._yoyo=e)),i=i._next},_s=function(t,e){return t&&(Me(t)?t:Ht[t]||kC(t))||e},Ms=function(t,e,i,s){i===void 0&&(i=function(l){return 1-e(1-l)}),s===void 0&&(s=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:i,easeInOut:s},a;return on(t,function(o){Ht[o]=Mn[o]=r,Ht[a=o.toLowerCase()]=i;for(var l in r)Ht[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ht[o+"."+l]=r[l]}),r},G_=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Bl=function n(t,e,i){var s=e>=1?e:1,r=(i||(t?.3:.45))/(e<1?e:1),a=r/fu*(Math.asin(1/s)||0),o=function(u){return u===1?1:s*Math.pow(2,-10*u)*hC((u-a)*r)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:G_(o);return r=fu/r,l.config=function(c,u){return n(t,c,u)},l},Vl=function n(t,e){e===void 0&&(e=1.70158);var i=function(a){return a?--a*a*((e+1)*a+e)+1:0},s=t==="out"?i:t==="in"?function(r){return 1-i(1-r)}:G_(i);return s.config=function(r){return n(t,r)},s};on("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,t){var e=t<5?t+1:t;Ms(n+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Ht.Linear.easeNone=Ht.none=Ht.Linear.easeIn;Ms("Elastic",Bl("in"),Bl("out"),Bl());(function(n,t){var e=1/t,i=2*e,s=2.5*e,r=function(o){return o<e?n*o*o:o<i?n*Math.pow(o-1.5/t,2)+.75:o<s?n*(o-=2.25/t)*o+.9375:n*Math.pow(o-2.625/t,2)+.984375};Ms("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Ms("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Ms("Circ",function(n){return-(d_(1-n*n)-1)});Ms("Sine",function(n){return n===1?1:-uC(n*lC)+1});Ms("Back",Vl("in"),Vl("out"),Vl());Ht.SteppedEase=Ht.steps=Mn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,s=t+(e?0:1),r=e?1:0,a=1-oe;return function(o){return((s*pa(0,a,o)|0)+r)*i}}};lr.ease=Ht["quad.out"];on("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Ch+=n+","+n+"Params,"});var W_=function(t,e){this.id=cC++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:S_,this.set=e?e.getSetter:Uh},ia=(function(){function n(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,hr(this,+e.duration,1,1),this.data=e.data,fe&&(this._ctx=fe,fe.data.push(this)),na||xn.wake()}var t=n.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,hr(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,s){if(fr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Fo(this,i),!r._dp||r.parent||A_(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Xn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===oe||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),M_(this,i,s)),this},t.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+bp(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},t.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+bp(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,s){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,s):this._repeat?ur(this._tTime,r)+1:1},t.timeScale=function(i,s){if(!arguments.length)return this._rts===-oe?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?yo(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-oe?0:this._rts,this.totalTime(pa(-Math.abs(this._delay),this.totalDuration(),r),s!==!1),No(this),SC(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(fr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==oe&&(this._tTime-=oe)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=pe(i);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&Xn(s,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(an(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?yo(s.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=_C);var s=ke;return ke=i,Ph(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),ke=s,this},t.globalTime=function(i){for(var s=this,r=arguments.length?i:s.rawTime();s;)r=s._start+r/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Ep(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,Ep(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,s){return this.totalTime(wn(this,i),an(s))},t.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,an(s)),this._dur||(this._zTime=-oe),this},t.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},t.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-oe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-oe,this},t.isActive=function(){var i=this.parent||this._dp,s=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=s&&r<this.endTime(!0)-oe)},t.eventCallback=function(i,s,r){var a=this.vars;return arguments.length>1?(s?(a[i]=s,r&&(a[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=s)):delete a[i],this):a[i]},t.then=function(i){var s=this,r=s._prom;return new Promise(function(a){var o=Me(i)?i:b_,l=function(){var u=s.then;s.then=null,r&&r(),Me(o)&&(o=o(s))&&(o.then||o===s)&&(s.then=u),a(o),s.then=u};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?l():s._prom=l})},t.kill=function(){Ur(this)},n})();Tn(ia.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-oe,_prom:0,_ps:!1,_rts:1});var $e=(function(n){f_(t,n);function t(i,s){var r;return i===void 0&&(i={}),r=n.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=an(i.sortChildren),me&&Xn(i.parent||me,ui(r),s),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&w_(ui(r),i.scrollTrigger),r}var e=t.prototype;return e.to=function(s,r,a){return Hr(0,arguments,this),this},e.from=function(s,r,a){return Hr(1,arguments,this),this},e.fromTo=function(s,r,a,o){return Hr(2,arguments,this),this},e.set=function(s,r,a){return r.duration=0,r.parent=this,zr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Re(s,r,wn(this,a),1),this},e.call=function(s,r,a){return Xn(this,Re.delayedCall(0,s,r),a)},e.staggerTo=function(s,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Re(s,a,wn(this,l)),this},e.staggerFrom=function(s,r,a,o,l,c,u){return a.runBackwards=1,zr(a).immediateRender=an(a.immediateRender),this.staggerTo(s,r,a,o,l,c,u)},e.staggerFromTo=function(s,r,a,o,l,c,u,h){return o.startAt=a,zr(o).immediateRender=an(o.immediateRender),this.staggerTo(s,r,o,l,c,u,h)},e.render=function(s,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=s<=0?0:pe(s),h=this._zTime<0!=s<0&&(this._initted||!c),f,d,_,g,m,p,y,S,T,M,A,w;if(this!==me&&u>l&&s>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,s+=this._time-o),f=u,T=this._start,S=this._ts,p=!S,h&&(c||(o=this._zTime),(s||!r)&&(this._zTime=s)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(m*100+s,r,a);if(f=pe(u%m),u===l?(g=this._repeat,f=c):(M=pe(u/m),g=~~M,g&&g===M&&(f=c,g--),f>c&&(f=c)),M=ur(this._tTime,m),!o&&this._tTime&&M!==g&&this._tTime-M*m-this._dur<=0&&(M=g),A&&g&1&&(f=c-f,w=1),g!==M&&!this._lock){var R=A&&M&1,x=R===(A&&g&1);if(g<M&&(R=!R),o=R?0:u%c?c:u,this._lock=1,this.render(o||(w?0:pe(g*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&vn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,M=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;H_(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=EC(this,pe(o),pe(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,o=0),!o&&u&&c&&!r&&!M&&(vn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&s>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(s,r,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,a),f!==this._time||!this._ts&&!p){y=0,_&&(u+=this._zTime=-oe);break}}d=_}else{d=this._last;for(var b=s<0?s:f;d;){if(_=d._prev,(d._act||b<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(s,r,a);if(d.render(d._ts>0?(b-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(b-d._start)*d._ts,r,a||ke&&Ph(d)),f!==this._time||!this._ts&&!p){y=0,_&&(u+=this._zTime=b?-oe:oe);break}}d=_}}if(y&&!r&&(this.pause(),y.render(f>=o?0:-oe)._zTime=f>=o?1:-1,this._ts))return this._start=T,No(this),this.render(s,r,a);this._onUpdate&&!r&&vn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(T===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((s||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Hi(this,1),!r&&!(s<0&&!o)&&(u||o||!l)&&(vn(this,u===l&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(s,r){var a=this;if(Mi(r)||(r=wn(this,r,s)),!(s instanceof ia)){if(Ye(s))return s.forEach(function(o){return a.add(o,r)}),this;if(Oe(s))return this.addLabel(s,r);if(Me(s))s=Re.delayedCall(0,s);else return this}return this!==s?Xn(this,s,r):this},e.getChildren=function(s,r,a,o){s===void 0&&(s=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Pn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Re?r&&l.push(c):(a&&l.push(c),s&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(s){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===s)return r[a]},e.remove=function(s){return Oe(s)?this.removeLabel(s):Me(s)?this.killTweensOf(s):(s.parent===this&&Uo(this,s),s===this._recent&&(this._recent=this._last),gs(this))},e.totalTime=function(s,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=pe(xn.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),n.prototype.totalTime.call(this,s,r),this._forcing=0,this):this._tTime},e.addLabel=function(s,r){return this.labels[s]=wn(this,r),this},e.removeLabel=function(s){return delete this.labels[s],this},e.addPause=function(s,r,a){var o=Re.delayedCall(0,r||ta,a);return o.data="isPause",this._hasPause=1,Xn(this,o,wn(this,s))},e.removePause=function(s){var r=this._first;for(s=wn(this,s);r;)r._start===s&&r.data==="isPause"&&Hi(r),r=r._next},e.killTweensOf=function(s,r,a){for(var o=this.getTweensOf(s,a),l=o.length;l--;)Ni!==o[l]&&o[l].kill(s,r);return this},e.getTweensOf=function(s,r){for(var a=[],o=Dn(s),l=this._first,c=Mi(r),u;l;)l instanceof Re?xC(l._targets,o)&&(c?(!Ni||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(s,r){r=r||{};var a=this,o=wn(a,s),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=Re.to(a,Tn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||oe,onStart:function(){if(a.pause(),!d){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&hr(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},r));return f?_.render(0):_},e.tweenFromTo=function(s,r,a){return this.tweenTo(r,Tn({startAt:{time:wn(this,s)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(s){return s===void 0&&(s=this._time),Ap(this,wn(this,s))},e.previousLabel=function(s){return s===void 0&&(s=this._time),Ap(this,wn(this,s),1)},e.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+oe)},e.shiftChildren=function(s,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(s=pe(s);o;)o._start>=a&&(o._start+=s,o._end+=s),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=s);return gs(this)},e.invalidate=function(s){var r=this._first;for(this._lock=0;r;)r.invalidate(s),r=r._next;return n.prototype.invalidate.call(this,s)},e.clear=function(s){s===void 0&&(s=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),gs(this)},e.totalDuration=function(s){var r=0,a=this,o=a._last,l=Pn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-s:s));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Xn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=pe(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;hr(a,a===me&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(s){if(me._ts&&(M_(me,yo(s,me)),y_=xn.frame),xn.frame>=Mp){Mp+=Sn.autoSleep||120;var r=me._first;if((!r||!r._ts)&&Sn.autoSleep&&xn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||xn.sleep()}}},t})(ia);Tn($e.prototype,{_lock:0,_hasPause:0,_forcing:0});var zC=function(t,e,i,s,r,a,o){var l=new ln(this._pt,t,e,0,1,$_,null,r),c=0,u=0,h,f,d,_,g,m,p,y;for(l.b=i,l.e=s,i+="",s+="",(p=~s.indexOf("random("))&&(s=ea(s)),a&&(y=[i,s],a(y,t,e),i=y[0],s=y[1]),f=i.match(Nl)||[];h=Nl.exec(s);)_=h[0],g=s.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Js(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=Nl.lastIndex);return l.c=c<s.length?s.substring(c,s.length):"",l.fp=o,(g_.test(s)||p)&&(l.e=0),this._pt=l,l},Dh=function(t,e,i,s,r,a,o,l,c,u){Me(s)&&(s=s(r||0,t,a));var h=t[e],f=i!=="get"?i:Me(h)?c?t[e.indexOf("set")||!Me(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,d=Me(h)?c?jC:q_:Ih,_;if(Oe(s)&&(~s.indexOf("random(")&&(s=ea(s)),s.charAt(1)==="="&&(_=Js(f,s)+(Ge(f)||0),(_||_===0)&&(s=_))),!u||f!==s||yu)return!isNaN(f*s)&&s!==""?(_=new ln(this._pt,t,e,+f||0,s-(f||0),typeof h=="boolean"?qC:K_,0,d),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!h&&!(e in t)&&Ah(e,s),zC.call(this,t,e,f,s,d,l||Sn.stringFilter,c))},HC=function(t,e,i,s,r){if(Me(t)&&(t=Gr(t,r,e,i,s)),!ii(t)||t.style&&t.nodeType||Ye(t)||p_(t))return Oe(t)?Gr(t,r,e,i,s):t;var a={},o;for(o in t)a[o]=Gr(t[o],r,e,i,s);return a},X_=function(t,e,i,s,r,a){var o,l,c,u;if(mn[t]&&(o=new mn[t]).init(r,o.rawVars?e[t]:HC(e[t],s,r,a,i),i,s,a)!==!1&&(i._pt=l=new ln(i._pt,r,t,0,1,o.render,o,0,o.priority),i!==Ys))for(c=i._ptLookup[i._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Ni,yu,Lh=function n(t,e,i){var s=t.vars,r=s.ease,a=s.startAt,o=s.immediateRender,l=s.lazy,c=s.onUpdate,u=s.runBackwards,h=s.yoyoEase,f=s.keyframes,d=s.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,y=p&&p.data==="nested"?p.vars.targets:m,S=t._overwrite==="auto"&&!Mh,T=t.timeline,M,A,w,R,x,b,P,O,N,H,W,k,F;if(T&&(!f||!r)&&(r="none"),t._ease=_s(r,lr.ease),t._yEase=h?z_(_s(h===!0?r:h,lr.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!T&&!!s.runBackwards,!T||f&&!s.stagger){if(O=m[0]?ms(m[0]).harness:0,k=O&&s[O.prop],M=vo(s,wh),g&&(g._zTime<0&&g.progress(1),e<0&&u&&o&&!d?g.render(-1,!0):g.revert(u&&_?io:gC),g._lazy=0),a){if(Hi(t._startAt=Re.set(m,Tn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&an(l),startAt:null,delay:0,onUpdate:c&&function(){return vn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ke||!o&&!d)&&t._startAt.revert(io),o&&_&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(u&&_&&!g){if(e&&(o=!1),w=Tn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&an(l),immediateRender:o,stagger:0,parent:p},M),k&&(w[O.prop]=k),Hi(t._startAt=Re.set(m,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ke?t._startAt.revert(io):t._startAt.render(-1,!0)),t._zTime=e,!o)n(t._startAt,oe,oe);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&an(l)||l&&!_,A=0;A<m.length;A++){if(x=m[A],P=x._gsap||Rh(m)[A]._gsap,t._ptLookup[A]=H={},pu[P.id]&&Bi.length&&xo(),W=y===m?A:y.indexOf(x),O&&(N=new O).init(x,k||M,t,W,y)!==!1&&(t._pt=R=new ln(t._pt,x,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(j){H[j]=R}),N.priority&&(b=1)),!O||k)for(w in M)mn[w]&&(N=X_(w,M,t,W,x,y))?N.priority&&(b=1):H[w]=R=Dh.call(t,x,w,"get",M[w],W,y,0,s.stringFilter);t._op&&t._op[A]&&t.kill(x,t._op[A]),S&&t._pt&&(Ni=t,me.killTweensOf(x,H,t.globalTime(e)),F=!t.parent,Ni=0),t._pt&&l&&(pu[P.id]=1)}b&&Z_(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!F,f&&e<=0&&T.render(Pn,!0,!0)},GC=function(t,e,i,s,r,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(u=f[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return yu=1,t.vars[e]="+=0",Lh(t,o),yu=0,l?Qr(e+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(s||s===0)&&!r?s:u.s+(s||0)+a*u.c,u.c=i-u.s,h.e&&(h.e=be(i)+Ge(h.e)),h.b&&(h.b=u.s+Ge(h.b))},WC=function(t,e){var i=t[0]?ms(t[0]).harness:0,s=i&&i.aliases,r,a,o,l;if(!s)return e;r=cr({},e);for(a in s)if(a in r)for(l=s[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},XC=function(t,e,i,s){var r=e.ease||s||"power1.inOut",a,o;if(Ye(e))o=i[t]||(i[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},Gr=function(t,e,i,s,r){return Me(t)?t.call(e,i,s,r):Oe(t)&&~t.indexOf("random(")?ea(t):t},j_=Ch+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Y_={};on(j_+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Y_[n]=1});var Re=(function(n){f_(t,n);function t(i,s,r,a){var o;typeof s=="number"&&(r.duration=s,s=r,r=null),o=n.call(this,a?s:zr(s))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=s.parent||me,S=(Ye(i)||p_(i)?Mi(i[0]):"length"in s)?[i]:Dn(i),T,M,A,w,R,x,b,P;if(o._targets=S.length?Rh(S):Qr("GSAP target "+i+" not found. https://gsap.com",!Sn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||f||Wa(c)||Wa(u)){if(s=o.vars,T=o.timeline=new $e({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:S}),T.kill(),T.parent=T._dp=ui(o),T._start=0,f||Wa(c)||Wa(u)){if(w=S.length,b=f&&D_(f),ii(f))for(R in f)~j_.indexOf(R)&&(P||(P={}),P[R]=f[R]);for(M=0;M<w;M++)A=vo(s,Y_),A.stagger=0,p&&(A.yoyoEase=p),P&&cr(A,P),x=S[M],A.duration=+Gr(c,ui(o),M,x,S),A.delay=(+Gr(u,ui(o),M,x,S)||0)-o._delay,!f&&w===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),T.to(x,A,b?b(M,x,S):0),T._ease=Ht.none;T.duration()?c=u=0:o.timeline=0}else if(_){zr(Tn(T.vars.defaults,{ease:"none"})),T._ease=_s(_.ease||s.ease||"none");var O=0,N,H,W;if(Ye(_))_.forEach(function(k){return T.to(S,k,">")}),T.duration();else{A={};for(R in _)R==="ease"||R==="easeEach"||XC(R,_[R],A,_.easeEach);for(R in A)for(N=A[R].sort(function(k,F){return k.t-F.t}),O=0,M=0;M<N.length;M++)H=N[M],W={ease:H.e,duration:(H.t-(M?N[M-1].t:0))/100*c},W[R]=H.v,T.to(S,W,O),O+=W.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||o.duration(c=T.duration())}else o.timeline=0;return d===!0&&!Mh&&(Ni=ui(o),me.killTweensOf(S),Ni=0),Xn(y,ui(o),r),s.reversed&&o.reverse(),s.paused&&o.paused(!0),(h||!c&&!_&&o._start===pe(y._time)&&an(h)&&MC(ui(o))&&y.data!=="nested")&&(o._tTime=-oe,o.render(Math.max(0,-u)||0)),m&&w_(ui(o),m),o}var e=t.prototype;return e.render=function(s,r,a){var o=this._time,l=this._tDur,c=this._dur,u=s<0,h=s>l-oe&&!u?l:s<oe?0:s,f,d,_,g,m,p,y,S,T;if(!c)bC(this,s,r,a);else if(h!==this._tTime||!s||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+s,r,a);if(f=pe(h%g),h===l?(_=this._repeat,f=c):(m=pe(h/g),_=~~m,_&&_===m?(f=c,_--):f>c&&(f=c)),p=this._yoyo&&_&1,p&&(T=this._yEase,f=c-f),m=ur(this._tTime,g),f===o&&!a&&this._initted&&_===m)return this._tTime=h,this;_!==m&&(S&&this._yEase&&H_(S,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=a=1,this.render(pe(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(C_(this,u?s:f,a,r,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(s,r,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(T||this._ease)(f/c),this._from&&(this.ratio=y=1-y),!o&&h&&!r&&!m&&(vn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;S&&S.render(s<0?s:S._dur*S._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=s),this._onUpdate&&!r&&(u&&mu(this,s,r,a),vn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&vn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&mu(this,s,!0,!0),(s||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Hi(this,1),!r&&!(u&&!o)&&(h||o||p)&&(vn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),n.prototype.invalidate.call(this,s)},e.resetTo=function(s,r,a,o,l){na||xn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Lh(this,c),u=this._ease(c/this._dur),GC(this,s,r,a,o,u,c,l)?this.resetTo(s,r,a,o,1):(Fo(this,0),this.parent||E_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(s,r){if(r===void 0&&(r="all"),!s&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ur(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ke),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(s,r,Ni&&Ni.vars.overwrite!==!0)._first||Ur(this),this.parent&&a!==this.timeline.totalDuration()&&hr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=s?Dn(s):o,c=this._ptLookup,u=this._pt,h,f,d,_,g,m,p;if((!r||r==="all")&&yC(o,l))return r==="all"&&(this._pt=0),Ur(this);for(h=this._op=this._op||[],r!=="all"&&(Oe(r)&&(g={},on(r,function(y){return g[y]=1}),r=g),r=WC(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],r==="all"?(h[p]=r,_=f,d={}):(d=h[p]=h[p]||{},_=r);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Uo(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&Ur(this),this},t.to=function(s,r){return new t(s,r,arguments[2])},t.from=function(s,r){return Hr(1,arguments)},t.delayedCall=function(s,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(s,r,a){return Hr(2,arguments)},t.set=function(s,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(s,r)},t.killTweensOf=function(s,r,a){return me.killTweensOf(s,r,a)},t})(ia);Tn(Re.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});on("staggerTo,staggerFrom,staggerFromTo",function(n){Re[n]=function(){var t=new $e,e=_u.call(arguments,0);return e.splice(n==="staggerFromTo"?5:4,0,0),t[n].apply(t,e)}});var Ih=function(t,e,i){return t[e]=i},q_=function(t,e,i){return t[e](i)},jC=function(t,e,i,s){return t[e](s.fp,i)},YC=function(t,e,i){return t.setAttribute(e,i)},Uh=function(t,e){return Me(t[e])?q_:Th(t[e])&&t.setAttribute?YC:Ih},K_=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},qC=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},$_=function(t,e){var i=e._pt,s="";if(!t&&e.b)s=e.b;else if(t===1&&e.e)s=e.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+s,i=i._next;s+=e.c}e.set(e.t,e.p,s,e)},Nh=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},KC=function(t,e,i,s){for(var r=this._pt,a;r;)a=r._next,r.p===s&&r.modifier(t,e,i),r=a},$C=function(t){for(var e=this._pt,i,s;e;)s=e._next,e.p===t&&!e.op||e.op===t?Uo(this,e,"_pt"):e.dep||(i=1),e=s;return!i},ZC=function(t,e,i,s){s.mSet(t,e,s.m.call(s.tween,i,s.mt),s)},Z_=function(t){for(var e=t._pt,i,s,r,a;e;){for(i=e._next,s=r;s&&s.pr>e.pr;)s=s._next;(e._prev=s?s._prev:a)?e._prev._next=e:r=e,(e._next=s)?s._prev=e:a=e,e=i}t._pt=r},ln=(function(){function n(e,i,s,r,a,o,l,c,u){this.t=i,this.s=r,this.c=a,this.p=s,this.r=o||K_,this.d=l||this,this.set=c||Ih,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=n.prototype;return t.modifier=function(i,s,r){this.mSet=this.mSet||this.set,this.set=ZC,this.m=i,this.mt=r,this.tween=s},n})();on(Ch+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return wh[n]=1});Mn.TweenMax=Mn.TweenLite=Re;Mn.TimelineLite=Mn.TimelineMax=$e;me=new $e({sortChildren:!1,defaults:lr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Sn.stringFilter=k_;var xs=[],ro={},JC=[],Cp=0,QC=0,kl=function(t){return(ro[t]||JC).map(function(e){return e()})},Su=function(){var t=Date.now(),e=[];t-Cp>2&&(kl("matchMediaInit"),xs.forEach(function(i){var s=i.queries,r=i.conditions,a,o,l,c;for(o in s)a=Gn.matchMedia(s[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(i.revert(),l&&e.push(i))}),kl("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),Cp=t,kl("matchMedia"))},J_=(function(){function n(e,i){this.selector=i&&xu(i),this.data=[],this._r=[],this.isReverted=!1,this.id=QC++,e&&this.add(e)}var t=n.prototype;return t.add=function(i,s,r){Me(i)&&(r=s,s=i,i=Me);var a=this,o=function(){var c=fe,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=xu(r)),fe=a,h=s.apply(a,arguments),Me(h)&&a._r.push(h),fe=c,a.selector=u,a.isReverted=!1,h};return a.last=o,i===Me?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},t.ignore=function(i){var s=fe;fe=null,i(this),fe=s},t.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof n?i.push.apply(i,s.getTweens()):s instanceof Re&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,s){var r=this;if(i?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof $e?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Re)&&c.revert&&c.revert(i);r._r.forEach(function(u){return u(i,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),s)for(var a=xs.length;a--;)xs[a].id===this.id&&xs.splice(a,1)},t.revert=function(i){this.kill(i||{})},n})(),tR=(function(){function n(e){this.contexts=[],this.scope=e,fe&&fe.data.push(this)}var t=n.prototype;return t.add=function(i,s,r){ii(i)||(i={matches:i});var a=new J_(0,r||this.scope),o=a.conditions={},l,c,u;fe&&!a.selector&&(a.selector=fe.selector),this.contexts.push(a),s=a.add("onMatch",s),a.queries=i;for(c in i)c==="all"?u=1:(l=Gn.matchMedia(i[c]),l&&(xs.indexOf(a)<0&&xs.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Su):l.addEventListener("change",Su)));return u&&s(a,function(h){return a.add(null,h)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},n})(),So={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(s){return O_(s)})},timeline:function(t){return new $e(t)},getTweensOf:function(t,e){return me.getTweensOf(t,e)},getProperty:function(t,e,i,s){Oe(t)&&(t=Dn(t)[0]);var r=ms(t||{}).get,a=i?b_:T_;return i==="native"&&(i=""),t&&(e?a((mn[e]&&mn[e].get||r)(t,e,i,s)):function(o,l,c){return a((mn[o]&&mn[o].get||r)(t,o,l,c))})},quickSetter:function(t,e,i){if(t=Dn(t),t.length>1){var s=t.map(function(u){return un.quickSetter(u,e,i)}),r=s.length;return function(u){for(var h=r;h--;)s[h](u)}}t=t[0]||{};var a=mn[e],o=ms(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;Ys._pt=0,h.init(t,i?u+i:u,Ys,0,[t]),h.render(1,h),Ys._pt&&Nh(1,Ys)}:o.set(t,l);return a?c:function(u){return c(t,l,i?u+i:u,o,1)}},quickTo:function(t,e,i){var s,r=un.to(t,Tn((s={},s[e]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),a=function(l,c,u){return r.resetTo(e,l,c,u)};return a.tween=r,a},isTweening:function(t){return me.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=_s(t.ease,lr.ease)),Tp(lr,t||{})},config:function(t){return Tp(Sn,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,s=t.plugins,r=t.defaults,a=t.extendTimeline;(s||"").split(",").forEach(function(o){return o&&!mn[o]&&!Mn[o]&&Qr(e+" effect requires "+o+" plugin.")}),Fl[e]=function(o,l,c){return i(Dn(o),Tn(l||{},r),c)},a&&($e.prototype[e]=function(o,l,c){return this.add(Fl[e](o,ii(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Ht[t]=_s(e)},parseEase:function(t,e){return arguments.length?_s(t,e):Ht},getById:function(t){return me.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new $e(t),s,r;for(i.smoothChildTiming=an(t.smoothChildTiming),me.remove(i),i._dp=0,i._time=i._tTime=me._time,s=me._first;s;)r=s._next,(e||!(!s._dur&&s instanceof Re&&s.vars.onComplete===s._targets[0]))&&Xn(i,s,s._start-s._delay),s=r;return Xn(me,i,0),i},context:function(t,e){return t?new J_(t,e):fe},matchMedia:function(t){return new tR(t)},matchMediaRefresh:function(){return xs.forEach(function(t){var e=t.conditions,i,s;for(s in e)e[s]&&(e[s]=!1,i=1);i&&t.revert()})||Su()},addEventListener:function(t,e){var i=ro[t]||(ro[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=ro[t],s=i&&i.indexOf(e);s>=0&&i.splice(s,1)},utils:{wrap:LC,wrapYoyo:IC,distribute:D_,random:I_,snap:L_,normalize:DC,getUnit:Ge,clamp:wC,splitColor:B_,toArray:Dn,selector:xu,mapRange:N_,pipe:RC,unitize:PC,interpolate:UC,shuffle:P_},install:x_,effects:Fl,ticker:xn,updateRoot:$e.updateRoot,plugins:mn,globalTimeline:me,core:{PropTween:ln,globals:v_,Tween:Re,Timeline:$e,Animation:ia,getCache:ms,_removeLinkedListItem:Uo,reverting:function(){return ke},context:function(t){return t&&fe&&(fe.data.push(t),t._ctx=fe),fe},suppressOverwrites:function(t){return Mh=t}}};on("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return So[n]=Re[n]});xn.add($e.updateRoot);Ys=So.to({},{duration:0});var eR=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},nR=function(t,e){var i=t._targets,s,r,a;for(s in e)for(r=i.length;r--;)a=t._ptLookup[r][s],a&&(a=a.d)&&(a._pt&&(a=eR(a,s)),a&&a.modifier&&a.modifier(e[s],t,i[r],s))},zl=function(t,e){return{name:t,headless:1,rawVars:1,init:function(s,r,a){a._onInit=function(o){var l,c;if(Oe(r)&&(l={},on(r,function(u){return l[u]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}nR(o,r)}}}},un=So.registerPlugin({name:"attr",init:function(t,e,i,s,r){var a,o,l;this.tween=i;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],s,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var i=e._pt;i;)ke?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},zl("roundProps",vu),zl("modifiers"),zl("snap",L_))||So;Re.version=$e.version=un.version="3.14.2";__=1;bh()&&fr();Ht.Power0;Ht.Power1;Ht.Power2;Ht.Power3;Ht.Power4;Ht.Linear;Ht.Quad;Ht.Cubic;Ht.Quart;Ht.Quint;Ht.Strong;Ht.Elastic;Ht.Back;Ht.SteppedEase;Ht.Bounce;Ht.Sine;Ht.Expo;Ht.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Rp,Fi,Qs,Fh,fs,Pp,Oh,iR=function(){return typeof window<"u"},Ti={},rs=180/Math.PI,tr=Math.PI/180,Bs=Math.atan2,Dp=1e8,Bh=/([A-Z])/g,sR=/(left|right|width|margin|padding|x)/i,rR=/[\s,\(]\S/,qn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Mu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},aR=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},oR=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},lR=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},cR=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},Q_=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},t0=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},uR=function(t,e,i){return t.style[e]=i},hR=function(t,e,i){return t.style.setProperty(e,i)},fR=function(t,e,i){return t._gsap[e]=i},dR=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},pR=function(t,e,i,s,r){var a=t._gsap;a.scaleX=a.scaleY=i,a.renderTransform(r,a)},mR=function(t,e,i,s,r){var a=t._gsap;a[e]=i,a.renderTransform(r,a)},_e="transform",cn=_e+"Origin",gR=function n(t,e){var i=this,s=this.target,r=s.style,a=s._gsap;if(t in Ti&&r){if(this.tfm=this.tfm||{},t!=="transform")t=qn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return i.tfm[o]=hi(s,o)}):this.tfm[t]=a.x?a[t]:hi(s,t),t===cn&&(this.tfm.zOrigin=a.zOrigin);else return qn.transform.split(",").forEach(function(o){return n.call(i,o,e)});if(this.props.indexOf(_e)>=0)return;a.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(cn,e,"")),t=_e}(r||e)&&this.props.push(t,e,r[t])},e0=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},_R=function(){var t=this.props,e=this.target,i=e.style,s=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?i[t[r]]=t[r+2]:i.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Bh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)s[a]=this.tfm[a];s.svg&&(s.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Oh(),(!r||!r.isStart)&&!i[_e]&&(e0(i),s.zOrigin&&i[cn]&&(i[cn]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},n0=function(t,e){var i={target:t,props:[],revert:_R,save:gR};return t._gsap||un.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(s){return i.save(s)}),i},i0,Tu=function(t,e){var i=Fi.createElementNS?Fi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Fi.createElement(t);return i&&i.style?i:Fi.createElement(t)},yn=function n(t,e,i){var s=getComputedStyle(t);return s[e]||s.getPropertyValue(e.replace(Bh,"-$1").toLowerCase())||s.getPropertyValue(e)||!i&&n(t,dr(e)||e,1)||""},Lp="O,Moz,ms,Ms,Webkit".split(","),dr=function(t,e,i){var s=e||fs,r=s.style,a=5;if(t in r&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Lp[a]+t in r););return a<0?null:(a===3?"ms":a>=0?Lp[a]:"")+t},bu=function(){iR()&&window.document&&(Rp=window,Fi=Rp.document,Qs=Fi.documentElement,fs=Tu("div")||{style:{}},Tu("div"),_e=dr(_e),cn=_e+"Origin",fs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",i0=!!dr("perspective"),Oh=un.core.reverting,Fh=1)},Ip=function(t){var e=t.ownerSVGElement,i=Tu("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),r;s.style.display="block",i.appendChild(s),Qs.appendChild(i);try{r=s.getBBox()}catch{}return i.removeChild(s),Qs.removeChild(i),r},Up=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},s0=function(t){var e,i;try{e=t.getBBox()}catch{e=Ip(t),i=1}return e&&(e.width||e.height)||i||(e=Ip(t)),e&&!e.width&&!e.x&&!e.y?{x:+Up(t,["x","cx","x1"])||0,y:+Up(t,["y","cy","y1"])||0,width:0,height:0}:e},r0=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&s0(t))},Gi=function(t,e){if(e){var i=t.style,s;e in Ti&&e!==cn&&(e=_e),i.removeProperty?(s=e.substr(0,2),(s==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(s==="--"?e:e.replace(Bh,"-$1").toLowerCase())):i.removeAttribute(e)}},Oi=function(t,e,i,s,r,a){var o=new ln(t._pt,e,i,0,1,a?t0:Q_);return t._pt=o,o.b=s,o.e=r,t._props.push(i),o},Np={deg:1,rad:1,turn:1},xR={grid:1,flex:1},Wi=function n(t,e,i,s){var r=parseFloat(i)||0,a=(i+"").trim().substr((r+"").length)||"px",o=fs.style,l=sR.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=s==="px",d=s==="%",_,g,m,p;if(s===a||!r||Np[s]||Np[a])return r;if(a!=="px"&&!f&&(r=n(t,e,i,"px")),p=t.getCTM&&r0(t),(d||a==="%")&&(Ti[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[u],be(d?r/_*h:r/100*_);if(o[l?"width":"height"]=h+(f?a:s),g=s!=="rem"&&~e.indexOf("adius")||s==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Fi||!g.appendChild)&&(g=Fi.body),m=g._gsap,m&&d&&m.width&&l&&m.time===xn.time&&!m.uncache)return be(r/m.width*h);if(d&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=h+s,_=t[u],y?t.style[e]=y:Gi(t,e)}else(d||a==="%")&&!xR[yn(g,"display")]&&(o.position=yn(t,"position")),g===t&&(o.position="static"),g.appendChild(fs),_=fs[u],g.removeChild(fs),o.position="absolute";return l&&d&&(m=ms(g),m.time=xn.time,m.width=g[u]),be(f?_*r/h:_&&r?h/_*r:0)},hi=function(t,e,i,s){var r;return Fh||bu(),e in qn&&e!=="transform"&&(e=qn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ti[e]&&e!=="transform"?(r=ra(t,s),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:To(yn(t,cn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||s||~(r+"").indexOf("calc("))&&(r=Mo[e]&&Mo[e](t,e,i)||yn(t,e)||S_(t,e)||(e==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Wi(t,e,r,i)+i:r},vR=function(t,e,i,s){if(!i||i==="none"){var r=dr(e,t,1),a=r&&yn(t,r,1);a&&a!==i?(e=r,i=a):e==="borderColor"&&(i=yn(t,"borderTopColor"))}var o=new ln(this._pt,t.style,e,0,1,$_),l=0,c=0,u,h,f,d,_,g,m,p,y,S,T,M;if(o.b=i,o.e=s,i+="",s+="",s.substring(0,6)==="var(--"&&(s=yn(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(g=t.style[e],t.style[e]=s,s=yn(t,e)||s,g?t.style[e]=g:Gi(t,e)),u=[i,s],k_(u),i=u[0],s=u[1],f=i.match(js)||[],M=s.match(js)||[],M.length){for(;h=js.exec(s);)m=h[0],y=s.substring(l,h.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(d=parseFloat(g)||0,T=g.substr((d+"").length),m.charAt(1)==="="&&(m=Js(d,m)+T),p=parseFloat(m),S=m.substr((p+"").length),l=js.lastIndex-S.length,S||(S=S||Sn.units[e]||T,l===s.length&&(s+=S,o.e+=S)),T!==S&&(d=Wi(t,e,g,S)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:d,c:p-d,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<s.length?s.substring(l,s.length):""}else o.r=e==="display"&&s==="none"?t0:Q_;return g_.test(s)&&(o.e=0),this._pt=o,o},Fp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},yR=function(t){var e=t.split(" "),i=e[0],s=e[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(t=i,i=s,s=t),e[0]=Fp[i]||i,e[1]=Fp[s]||s,e.join(" ")},SR=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,s=i.style,r=e.u,a=i._gsap,o,l,c;if(r==="all"||r===!0)s.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Ti[o]&&(l=1,o=o==="transformOrigin"?cn:_e),Gi(i,o);l&&(Gi(i,_e),a&&(a.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",ra(i,1),a.uncache=1,e0(s)))}},Mo={clearProps:function(t,e,i,s,r){if(r.data!=="isFromStart"){var a=t._pt=new ln(t._pt,e,i,0,0,SR);return a.u=s,a.pr=-10,a.tween=r,t._props.push(i),1}}},sa=[1,0,0,1,0,0],a0={},o0=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Op=function(t){var e=yn(t,_e);return o0(e)?sa:e.substr(7).match(m_).map(be)},Vh=function(t,e){var i=t._gsap||ms(t),s=t.style,r=Op(t),a,o,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?sa:r):(r===sa&&!t.offsetParent&&t!==Qs&&!i.svg&&(l=s.display,s.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Qs.appendChild(t)),r=Op(t),l?s.display=l:Gi(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Qs.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Eu=function(t,e,i,s,r,a){var o=t._gsap,l=r||Vh(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],y=l[5],S=e.split(" "),T=parseFloat(S[0])||0,M=parseFloat(S[1])||0,A,w,R,x;i?l!==sa&&(w=d*m-_*g)&&(R=T*(m/w)+M*(-g/w)+(g*y-m*p)/w,x=T*(-_/w)+M*(d/w)-(d*y-_*p)/w,T=R,M=x):(A=s0(t),T=A.x+(~S[0].indexOf("%")?T/100*A.width:T),M=A.y+(~(S[1]||S[0]).indexOf("%")?M/100*A.height:M)),s||s!==!1&&o.smooth?(p=T-c,y=M-u,o.xOffset=h+(p*d+y*g)-p,o.yOffset=f+(p*_+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=T,o.yOrigin=M,o.smooth=!!s,o.origin=e,o.originIsAbsolute=!!i,t.style[cn]="0px 0px",a&&(Oi(a,o,"xOrigin",c,T),Oi(a,o,"yOrigin",u,M),Oi(a,o,"xOffset",h,o.xOffset),Oi(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",T+" "+M)},ra=function(t,e){var i=t._gsap||new W_(t);if("x"in i&&!e&&!i.uncache)return i;var s=t.style,r=i.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=yn(t,cn)||"0",u,h,f,d,_,g,m,p,y,S,T,M,A,w,R,x,b,P,O,N,H,W,k,F,j,it,et,lt,Pt,Ut,Gt,Wt;return u=h=f=g=m=p=y=S=T=0,d=_=1,i.svg=!!(t.getCTM&&r0(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(s[_e]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[_e]!=="none"?l[_e]:"")),s.scale=s.rotate=s.translate="none"),w=Vh(t,i.svg),i.svg&&(i.uncache?(j=t.getBBox(),c=i.xOrigin-j.x+"px "+(i.yOrigin-j.y)+"px",F=""):F=!e&&t.getAttribute("data-svg-origin"),Eu(t,F||c,!!F||i.originIsAbsolute,i.smooth!==!1,w)),M=i.xOrigin||0,A=i.yOrigin||0,w!==sa&&(P=w[0],O=w[1],N=w[2],H=w[3],u=W=w[4],h=k=w[5],w.length===6?(d=Math.sqrt(P*P+O*O),_=Math.sqrt(H*H+N*N),g=P||O?Bs(O,P)*rs:0,y=N||H?Bs(N,H)*rs+g:0,y&&(_*=Math.abs(Math.cos(y*tr))),i.svg&&(u-=M-(M*P+A*N),h-=A-(M*O+A*H))):(Wt=w[6],Ut=w[7],et=w[8],lt=w[9],Pt=w[10],Gt=w[11],u=w[12],h=w[13],f=w[14],R=Bs(Wt,Pt),m=R*rs,R&&(x=Math.cos(-R),b=Math.sin(-R),F=W*x+et*b,j=k*x+lt*b,it=Wt*x+Pt*b,et=W*-b+et*x,lt=k*-b+lt*x,Pt=Wt*-b+Pt*x,Gt=Ut*-b+Gt*x,W=F,k=j,Wt=it),R=Bs(-N,Pt),p=R*rs,R&&(x=Math.cos(-R),b=Math.sin(-R),F=P*x-et*b,j=O*x-lt*b,it=N*x-Pt*b,Gt=H*b+Gt*x,P=F,O=j,N=it),R=Bs(O,P),g=R*rs,R&&(x=Math.cos(R),b=Math.sin(R),F=P*x+O*b,j=W*x+k*b,O=O*x-P*b,k=k*x-W*b,P=F,W=j),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=be(Math.sqrt(P*P+O*O+N*N)),_=be(Math.sqrt(k*k+Wt*Wt)),R=Bs(W,k),y=Math.abs(R)>2e-4?R*rs:0,T=Gt?1/(Gt<0?-Gt:Gt):0),i.svg&&(F=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!o0(yn(t,_e)),F&&t.setAttribute("transform",F))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(d*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||i.uncache,i.x=u-((i.xPercent=u&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+a,i.y=h-((i.yPercent=h&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=be(d),i.scaleY=be(_),i.rotation=be(g)+o,i.rotationX=be(m)+o,i.rotationY=be(p)+o,i.skewX=y+o,i.skewY=S+o,i.transformPerspective=T+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!e&&i.zOrigin||0)&&(s[cn]=To(c)),i.xOffset=i.yOffset=0,i.force3D=Sn.force3D,i.renderTransform=i.svg?TR:i0?l0:MR,i.uncache=0,i},To=function(t){return(t=t.split(" "))[0]+" "+t[1]},Hl=function(t,e,i){var s=Ge(e);return be(parseFloat(e)+parseFloat(Wi(t,"x",i+"px",s)))+s},MR=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,l0(t,e)},ns="0deg",Pr="0px",is=") ",l0=function(t,e){var i=e||this,s=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,h=i.rotationX,f=i.skewX,d=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,p=i.force3D,y=i.target,S=i.zOrigin,T="",M=p==="auto"&&t&&t!==1||p===!0;if(S&&(h!==ns||u!==ns)){var A=parseFloat(u)*tr,w=Math.sin(A),R=Math.cos(A),x;A=parseFloat(h)*tr,x=Math.cos(A),a=Hl(y,a,w*x*-S),o=Hl(y,o,-Math.sin(A)*-S),l=Hl(y,l,R*x*-S+S)}m!==Pr&&(T+="perspective("+m+is),(s||r)&&(T+="translate("+s+"%, "+r+"%) "),(M||a!==Pr||o!==Pr||l!==Pr)&&(T+=l!==Pr||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+is),c!==ns&&(T+="rotate("+c+is),u!==ns&&(T+="rotateY("+u+is),h!==ns&&(T+="rotateX("+h+is),(f!==ns||d!==ns)&&(T+="skew("+f+", "+d+is),(_!==1||g!==1)&&(T+="scale("+_+", "+g+is),y.style[_e]=T||"translate(0, 0)"},TR=function(t,e){var i=e||this,s=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,h=i.scaleX,f=i.scaleY,d=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,p=i.yOffset,y=i.forceCSS,S=parseFloat(a),T=parseFloat(o),M,A,w,R,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=tr,c*=tr,M=Math.cos(l)*h,A=Math.sin(l)*h,w=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(u*=tr,x=Math.tan(c-u),x=Math.sqrt(1+x*x),w*=x,R*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),M*=x,A*=x)),M=be(M),A=be(A),w=be(w),R=be(R)):(M=h,R=f,A=w=0),(S&&!~(a+"").indexOf("px")||T&&!~(o+"").indexOf("px"))&&(S=Wi(d,"x",a,"px"),T=Wi(d,"y",o,"px")),(_||g||m||p)&&(S=be(S+_-(_*M+g*w)+m),T=be(T+g-(_*A+g*R)+p)),(s||r)&&(x=d.getBBox(),S=be(S+s/100*x.width),T=be(T+r/100*x.height)),x="matrix("+M+","+A+","+w+","+R+","+S+","+T+")",d.setAttribute("transform",x),y&&(d.style[_e]=x)},bR=function(t,e,i,s,r){var a=360,o=Oe(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?rs:1),c=l-s,u=s+c+"deg",h,f;return o&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Dp)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Dp)%a-~~(c/a)*a)),t._pt=f=new ln(t._pt,e,i,s,c,aR),f.e=u,f.u="deg",t._props.push(i),f},Bp=function(t,e){for(var i in e)t[i]=e[i];return t},ER=function(t,e,i){var s=Bp({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,h,f,d,_;s.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[_e]=e,o=ra(i,1),Gi(i,_e),i.setAttribute("transform",c)):(c=getComputedStyle(i)[_e],a[_e]=e,o=ra(i,1),a[_e]=c);for(l in Ti)c=s[l],u=o[l],c!==u&&r.indexOf(l)<0&&(d=Ge(c),_=Ge(u),h=d!==_?Wi(i,l,c,_):parseFloat(c),f=parseFloat(u),t._pt=new ln(t._pt,o,l,h,f-h,Mu),t._pt.u=_||0,t._props.push(l));Bp(o,s)};on("padding,margin,Width,Radius",function(n,t){var e="Top",i="Right",s="Bottom",r="Left",a=(t<3?[e,i,s,r]:[e+r,e+i,s+i,s+r]).map(function(o){return t<2?n+o:"border"+o+n});Mo[t>1?"border"+n:n]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(_){return hi(o,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,d,h)}});var c0={name:"css",register:bu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,s,r){var a=this._props,o=t.style,l=i.vars.startAt,c,u,h,f,d,_,g,m,p,y,S,T,M,A,w,R,x;Fh||bu(),this.styles=this.styles||n0(t),R=this.styles.props,this.tween=i;for(g in e)if(g!=="autoRound"&&(u=e[g],!(mn[g]&&X_(g,e,i,s,t,r)))){if(d=typeof u,_=Mo[g],d==="function"&&(u=u.call(i,s,t,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ea(u)),_)_(this,t,g,u,i)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",Vi.lastIndex=0,Vi.test(c)||(m=Ge(c),p=Ge(u),p?m!==p&&(c=Wi(t,g,c,p)+p):m&&(u+=m)),this.add(o,"setProperty",c,u,s,r,0,0,g),a.push(g),R.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,s,t,r):l[g],Oe(c)&&~c.indexOf("random(")&&(c=ea(c)),Ge(c+"")||c==="auto"||(c+=Sn.units[g]||Ge(hi(t,g))||""),(c+"").charAt(1)==="="&&(c=hi(t,g))):c=hi(t,g),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),g in qn&&(g==="autoAlpha"&&(f===1&&hi(t,"visibility")==="hidden"&&h&&(f=0),R.push("visibility",0,o.visibility),Oi(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=qn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in Ti,S){if(this.styles.save(g),x=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=yn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var b=t.style.perspective;t.style.perspective=u,u=yn(t,"perspective"),b?t.style.perspective=b:Gi(t,"perspective")}h=parseFloat(u)}if(T||(M=t._gsap,M.renderTransform&&!e.parseTransform||ra(t,e.parseTransform),A=e.smoothOrigin!==!1&&M.smooth,T=this._pt=new ln(this._pt,o,_e,0,1,M.renderTransform,M,0,-1),T.dep=1),g==="scale")this._pt=new ln(this._pt,M,"scaleY",M.scaleY,(y?Js(M.scaleY,y+h):h)-M.scaleY||0,Mu),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(cn,0,o[cn]),u=yR(u),M.svg?Eu(t,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==M.zOrigin&&Oi(this,M,"zOrigin",M.zOrigin,p),Oi(this,o,g,To(c),To(u)));continue}else if(g==="svgOrigin"){Eu(t,u,1,A,0,this);continue}else if(g in a0){bR(this,M,g,f,y?Js(f,y+u):u);continue}else if(g==="smoothOrigin"){Oi(this,M,"smooth",M.smooth,u);continue}else if(g==="force3D"){M[g]=u;continue}else if(g==="transform"){ER(this,u,t);continue}}else g in o||(g=dr(g)||g);if(S||(h||h===0)&&(f||f===0)&&!rR.test(u)&&g in o)m=(c+"").substr((f+"").length),h||(h=0),p=Ge(u)||(g in Sn.units?Sn.units[g]:m),m!==p&&(f=Wi(t,g,c,p)),this._pt=new ln(this._pt,S?M:o,g,f,(y?Js(f,y+h):h)-f,!S&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?cR:Mu),this._pt.u=p||0,S&&x!==u?(this._pt.b=c,this._pt.e=x,this._pt.r=lR):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=oR);else if(g in o)vR.call(this,t,g,c,y?y+u:u);else if(g in t)this.add(t,g,c||t[g],y?y+u:u,s,r);else if(g!=="parseTransform"){Ah(g,u);continue}S||(g in o?R.push(g,0,o[g]):typeof t[g]=="function"?R.push(g,2,t[g]()):R.push(g,1,c||t[g])),a.push(g)}}w&&Z_(this)},render:function(t,e){if(e.tween._time||!Oh())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:hi,aliases:qn,getSetter:function(t,e,i){var s=qn[e];return s&&s.indexOf(",")<0&&(e=s),e in Ti&&e!==cn&&(t._gsap.x||hi(t,"x"))?i&&Pp===i?e==="scale"?dR:fR:(Pp=i||{})&&(e==="scale"?pR:mR):t.style&&!Th(t.style[e])?uR:~e.indexOf("-")?hR:Uh(t,e)},core:{_removeProperty:Gi,_getMatrix:Vh}};un.utils.checkPrefix=dr;un.core.getStyleSaver=n0;(function(n,t,e,i){var s=on(n+","+t+","+e,function(r){Ti[r]=1});on(t,function(r){Sn.units[r]="deg",a0[r]=1}),qn[s[13]]=n+","+t,on(i,function(r){var a=r.split(":");qn[a[1]]=s[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");on("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Sn.units[n]="px"});un.registerPlugin(c0);var ao=un.registerPlugin(c0)||un;ao.core.Tween;const Xa=[{title:"3D户外网站",icon:"🌏",description:"react+php实现的户外运动网站",link:"http://sesame.ink/cesium-view",tech:"Cesium"},{title:"Vue3后台模板",icon:"⚡",description:"Vue3.x+ Vite后台系统模板",link:"http://cskcool.github.io/vue3admin",tech:"Element Plus"},{title:"数据可视化",icon:"📊",description:"echarts看板项目",link:"http://cskcool.github.io/echarts",tech:"ECharts"},{title:"React后台模板",icon:"⚛️",description:"使用react hooks 以及 antd 的后台管理系统模板",link:"http://cskcool.github.io/reactAntd",tech:"Ant Design"},{title:"技术博客",icon:"📝",description:"cskcool的博客园，分享一些技术见解",link:"https://www.cnblogs.com/cskcool/",tech:"Blog"},{title:"代码仓库",icon:"💻",description:"日常折腾的一些代码",link:"https://gitee.com/cskcool",tech:"Gitee"}],AR=()=>{const n=Q.useRef(null),t=Q.useRef([]);Q.useEffect(()=>{const i=n.current,s=t.current;if(!i||s.length===0)return;const a=(s[0].offsetWidth+32)*Xa.length;ao.set(i,{x:0});const o=ao.to(i,{x:-a,duration:30,ease:"none",repeat:-1,modifiers:{x:ao.utils.unitize(l=>parseFloat(l)%a)}});return i.addEventListener("mouseenter",()=>o.pause()),i.addEventListener("mouseleave",()=>o.play()),()=>{o.kill()}},[]);const e=[...Xa,...Xa,...Xa];return ft.jsxs("div",{className:"page-two",children:[ft.jsx(he.h2,{className:"section-title",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6},children:"我的项目"}),ft.jsx("div",{className:"slider-container",children:ft.jsx("div",{className:"slider-wrapper",ref:n,children:e.map((i,s)=>ft.jsxs(he.div,{ref:r=>t.current[s]=r,className:"project-card",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:Math.min(s*.1,1)},whileHover:{scale:1.05,y:-10},children:[ft.jsx("div",{className:"project-icon",children:i.icon}),ft.jsx("h3",{className:"project-title",children:i.title}),ft.jsx("div",{className:"project-tech",children:i.tech}),ft.jsx("p",{className:"project-description",children:i.description}),ft.jsx(he.a,{href:i.link,target:"_blank",rel:"noopener noreferrer",className:"project-link",whileHover:{scale:1.1},whileTap:{scale:.95},onClick:r=>r.stopPropagation(),children:"访问项目"})]},s))})})]})},wR=[{title:"人机交互新纪元",description:"在AI时代，前端开发不再局限于传统的页面构建，而是要探索更自然、更智能的人机交互方式。",icon:"🤖"},{title:"沉浸式体验",description:"通过3D渲染、动态效果和智能交互，创造令人印象深刻的数字体验。",icon:"🎮"},{title:"AI增强开发",description:"将AI能力融入前端开发，实现更智能的用户界面和个性化体验。",icon:"🧠"}],CR=()=>{const n={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3}}},t={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:"easeOut"}}},e={initial:{scale:1,opacity:.5},animate:{scale:1.2,opacity:.8,transition:{duration:2,repeat:1/0,repeatType:"reverse"}}};return ft.jsx("div",{className:"page-three",children:ft.jsxs(he.div,{className:"vision-container",variants:n,initial:"hidden",animate:"visible",children:[ft.jsxs(he.div,{className:"header-section",variants:t,children:[ft.jsx(he.div,{className:"glow-effect",variants:e,animate:"animate"}),ft.jsx("h1",{children:"未来已来"}),ft.jsx("p",{className:"subtitle",children:"在人工智能时代探索前端新边界"})]}),ft.jsx("div",{className:"vision-grid",children:wR.map((i,s)=>ft.jsxs(he.div,{className:"vision-card",variants:t,whileHover:{scale:1.05,transition:{duration:.2}},children:[ft.jsx("div",{className:"vision-icon",children:i.icon}),ft.jsx("h3",{children:i.title}),ft.jsx("p",{children:i.description})]},s))}),ft.jsxs(he.div,{className:"contact-section",variants:t,children:[ft.jsx("h2",{children:"让我们一起探索未来"}),ft.jsx("p",{children:"如果你对未来前端开发充满热情，欢迎与我交流"}),ft.jsxs(he.a,{href:"mailto:cskcool@163.com",className:"contact-button",whileHover:{scale:1.1},whileTap:{scale:.95},children:[ft.jsx(Lm,{})," cskcool@163.com"]})]})]})})},RR=({heroImg:n})=>{const t=[{name:"React",icon:"skill-icons:react-dark"},{name:"Vue.js",icon:"skill-icons:vuejs-light"},{name:"JavaScript",icon:"skill-icons:javascript"},{name:"HTML",icon:"skill-icons:html"},{name:"CSS",icon:"skill-icons:css"},{name:"astro",icon:"skill-icons:astro"}],e=[{name:"Figma",icon:"skill-icons:figma-dark"},{name:"Photoshop",icon:"skill-icons:photoshop"},{name:"Premiere Pro",icon:"skill-icons:premiere"},{name:"Cinema 4D",icon:"simple-icons:cinema4d"}];return ft.jsxs("div",{className:"orbiting-container",children:[ft.jsx("div",{className:"orbit orbit-1",children:t.map(i=>ft.jsx(he.div,{className:"satellite",whileHover:{scale:1.3},transition:{type:"spring",stiffness:300},children:ft.jsx("span",{className:"iconify","data-icon":i.icon,"data-width":"48"})},i.name))}),ft.jsx("div",{className:"orbit orbit-2",children:e.map(i=>ft.jsx(he.div,{className:"satellite",whileHover:{scale:1.3},transition:{type:"spring",stiffness:300},children:ft.jsx("span",{className:"iconify","data-icon":i.icon,"data-width":"48"})},i.name))}),ft.jsx("div",{className:"center-image",children:ft.jsx("img",{src:n,alt:"hero"})})]})},Gl={uniforms:{iTime:{value:0},iResolution:{value:new It(typeof window<"u"?window.innerWidth:1920,typeof window<"u"?window.innerHeight:1080)}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
  `,fragmentShader:`
uniform vec3      iResolution;           // viewport resolution (in pixels)
uniform float     iTime;                 // shader playback time (in seconds)
uniform vec4      iMouse; 
#define S(a, b, t) smoothstep(a, b, t)
#define NUM_LAYERS 4.

//#define SIMPLE


float N21(vec2 p) {
	vec3 a = fract(vec3(p.xyx) * vec3(213.897, 653.453, 253.098));
    a += dot(a, a.yzx + 79.76);
    return fract((a.x + a.y) * a.z);
}

vec2 GetPos(vec2 id, vec2 offs, float t) {
    float n = N21(id+offs);
    float n1 = fract(n*10.);
    float n2 = fract(n*100.);
    float a = t+n;
    return offs + vec2(sin(a*n1), cos(a*n2))*.4;
}

float GetT(vec2 ro, vec2 rd, vec2 p) {
	return dot(p-ro, rd); 
}

float LineDist(vec3 a, vec3 b, vec3 p) {
	return length(cross(b-a, p-a))/length(p-a);
}

float df_line( in vec2 a, in vec2 b, in vec2 p)
{
    vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa,ba) / dot(ba,ba), 0., 1.);	
	return length(pa - ba * h);
}

float line(vec2 a, vec2 b, vec2 uv) {
    float r1 = .04;
    float r2 = .01;
    
    float d = df_line(a, b, uv);
    float d2 = length(a-b);
    float fade = S(1.5, .5, d2);
    
    fade += S(.05, .02, abs(d2-.75));
    return S(r1, r2, d)*fade;
}

float NetLayer(vec2 st, float n, float t) {
    vec2 id = floor(st)+n;

    st = fract(st)-.5;
   
    vec2 p[9];
    int i=0;
    for(float y=-1.; y<=1.; y++) {
    	for(float x=-1.; x<=1.; x++) {
            p[i++] = GetPos(id, vec2(x,y), t);
    	}
    }
    
    float m = 0.;
    float sparkle = 0.;
    
    for(int i=0; i<9; i++) {
        m += line(p[4], p[i], st);

        float d = length(st-p[i]);

        float s = (.005/(d*d));
        s *= S(1., .7, d);
        float pulse = sin((fract(p[i].x)+fract(p[i].y)+t)*5.)*.4+.6;
        pulse = pow(pulse, 20.);

        s *= pulse;
        sparkle += s;
    }
    
    m += line(p[1], p[3], st);
	m += line(p[1], p[5], st);
    m += line(p[7], p[5], st);
    m += line(p[7], p[3], st);
    
    float sPhase = (sin(t+n)+sin(t*.1))*.25+.5;
    sPhase += pow(sin(t*.1)*.5+.5, 50.)*5.;
    m += sparkle*sPhase;//(*.5+.5);
    
    return m;
}

void main()
{
    vec2 uv = (gl_FragCoord.xy-iResolution.xy*.5)/iResolution.y;
	vec2 M = iMouse.xy/iResolution.xy-.5;
    
    float t = iTime*.1;
    
    float s = sin(t);
    float c = cos(t);
    mat2 rot = mat2(c, -s, s, c);
    vec2 st = uv*rot;  
	M *= rot*2.;
    
    float m = 0.;
    for(float i=0.; i<1.; i+=1./NUM_LAYERS) {
        float z = fract(t+i);
        float size = mix(15., 1., z);
        float fade = S(0., .6, z)*S(1., .8, z);
        
        m += fade * NetLayer(st*size-M*z, i, iTime*0.5);
    }
    
	// float fft  = texelFetch( iChannel0, ivec2(.7,0), 0 ).x;
    float fft = 0.0;
    float glow = -uv.y*fft*2.;
   
    vec3 baseCol = vec3(s, cos(t*.4), -sin(t*.24))*.4+.6;
    vec3 col = baseCol*m;
    col += baseCol*glow;
    
    #ifdef SIMPLE
    uv *= 10.;
    col = vec3(1)*NetLayer(uv, 0., iTime*0.5);
    uv = fract(uv);
    //if(uv.x>.98 || uv.y>.98) col += 1.;
    #else
    col *= 1.-dot(uv,uv);
    t = mod(iTime*0.5, 230.);
    col *= S(0., 20., t)*S(224., 200., t);
    #endif
    
    gl_FragColor = vec4(col,1);
}
  `},PR={uniforms:{iTime:{value:0},iResolution:{value:new It(typeof window<"u"?window.innerWidth:1920,typeof window<"u"?window.innerHeight:1080)}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
  `,fragmentShader:`
    uniform vec3 iResolution;           // viewport resolution (in pixels)
    uniform float iTime;                // shader playback time (in seconds)
    // uniform sampler2D iChannel0;        // 噪声纹理
    uniform vec3 iChannelResolution[4]; // channel resolution (in pixels)
    
    varying vec2 vUv;


float hash21(vec2 p)
{
	vec3 p3  = fract(vec3(p.xyx) * .1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
}

float snoise2D(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash21(i);
	float b = hash21(i + vec2(1.0, 0.0));
	float c = hash21(i + vec2(0.0, 1.0));
	float d = hash21(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

void main()
{
    vec2 uv = gl_FragCoord.xy/iResolution.xy;

    vec2 p=(uv.xy-.5)*mat2(8,-6,6,8),v;
    float t = iTime;
    vec4 o = vec4(0., 0., 0., 1.);
    for(float i,f=3.+snoise2D(p+vec2(t*7.,0));
        i++<50.;
        o+=(cos(sin(i)*vec4(1,2,3,1))+1.)*exp(sin(i*i+t))/length(max(v,vec2(v.x*f*.02,v.y))))
        v=p+cos(i*i+(t+p.x*.1)*.03+i*vec2(11,9))*5.;
        o=tanh(pow(o/1e2,vec4(1.5)));
    

   gl_FragColor = o;
   gl_FragColor.a = 1.0;
}
  `},DR={uniforms:{iTime:{value:0},iResolution:{value:new It(typeof window<"u"?window.innerWidth:1920,typeof window<"u"?window.innerHeight:1080)}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
  `,fragmentShader:`
//#define AA 2
//#define VAPORWAVE
//#define stereo 1. // -1. for cross-eyed (defaults to parallel view)
#define speed 10. 
#define wave_thing
//#define city

//you can add any sound texture in iChannel0 to turn it into a cool audio visualizer 
// (it looks better with lower speeds though)
//you should commment out or remove the following line to enable it (it's disabled mainly for performance reasons):
#define disable_sound_texture_sampling

#ifndef disable_sound_texture_sampling
    #undef speed 
    // lower value of speed when using as audio visualizer
    #define speed 5.
#endif

//self-explainatory
#define audio_vibration_amplitude .125

uniform vec3 iResolution;           // viewport resolution (in pixels)
uniform float     iTime;                 // shader playback time (in seconds)
uniform float     iTimeDelta;            // render time (in seconds)

float jTime;


#ifdef disable_sound_texture_sampling
#define textureMirror(a, b) vec4(0)
#else
vec4 textureMirror(sampler2D tex, vec2 c){
    vec2 cf = fract(c);
    return texture(tex,mix(cf,1.-cf,mod(floor(c),2.)));
}
#endif


float amp(vec2 p){
    return smoothstep(1.,8.,abs(p.x));   
}

float pow512(float a){
    a*=a;//^2
    a*=a;//^4
    a*=a;//^8
    a*=a;//^16
    a*=a;//^32
    a*=a;//^64
    a*=a;//^128
    a*=a;//^256
    return a*a;
}
float pow1d5(float a){
    return a*sqrt(a);
}
float hash21(vec2 co){
    return fract(sin(dot(co.xy,vec2(1.9898,7.233)))*45758.5433);
}
float hash(vec2 uv){
    float a = amp(uv);
    #ifdef wave_thing
    float w = a>0.?(1.-.4*pow512(.51+.49*sin((.02*(uv.y+.5*uv.x)-jTime)*2.))):0.;
    #else
    float w=1.;
    #endif
    return (a>0.?
        a*pow1d5(
        //texture(iChannel0,uv/iChannelResolution[0].xy).r
        hash21(uv)
        )*w
        :0.)-(textureMirror(iChannel0,vec2((uv.x*29.+uv.y)*.03125,1.)).x)*audio_vibration_amplitude;
}

float edgeMin(float dx,vec2 da, vec2 db,vec2 uv){
    uv.x+=5.;
    vec3 c = fract((round(vec3(uv,uv.x+uv.y)))*(vec3(0,1,2)+0.61803398875));
    float a1 = textureMirror(iChannel0,vec2(c.y,0.)).x>.6?.15:1.;
    float a2 = textureMirror(iChannel0,vec2(c.x,0.)).x>.6?.15:1.;
    float a3 = textureMirror(iChannel0,vec2(c.z,0.)).x>.6?.15:1.;

    return min(min((1.-dx)*db.y*a3,da.x*a2),da.y*a1);
}

vec2 trinoise(vec2 uv){
    const float sq = sqrt(3./2.);
    uv.x *= sq;
    uv.y -= .5*uv.x;
    vec2 d = fract(uv);
    uv -= d;

    bool c = dot(d,vec2(1))>1.;

    vec2 dd = 1.-d;
    vec2 da = c?dd:d,db = c?d:dd;
    
    float nn = hash(uv+float(c));
    float n2 = hash(uv+vec2(1,0));
    float n3 = hash(uv+vec2(0,1));

    
    float nmid = mix(n2,n3,d.y);
    float ns = mix(nn,c?n2:n3,da.y);
    float dx = da.x/db.y;
    return vec2(mix(ns,nmid,dx),edgeMin(dx,da, db,uv+d));
}


vec2 map(vec3 p){
    vec2 n = trinoise(p.xz);
    return vec2(p.y-2.*n.x,n.y);
}

vec3 grad(vec3 p){
    const vec2 e = vec2(.005,0);
    float a =map(p).x;
    return vec3(map(p+e.xyy).x-a
                ,map(p+e.yxy).x-a
                ,map(p+e.yyx).x-a)/e.x;
}

vec2 intersect(vec3 ro,vec3 rd){
    float d =0.,h=0.;
    for(int i = 0;i<500;i++){ //look nice with 50 iterations
        vec3 p = ro+d*rd;
        vec2 s = map(p);
        h = s.x;
        d+= h*.5;
        if(abs(h)<.003*d)
            return vec2(d,s.y);
        if(d>150.|| p.y>2.) break;
    }
    
    return vec2(-1);
}


void addsun(vec3 rd,vec3 ld,inout vec3 col){
    
	float sun = smoothstep(.21,.2,distance(rd,ld));
    
    if(sun>0.){
        float yd = (rd.y-ld.y);

        float a =sin(3.1*exp(-(yd)*14.)); 

        sun*=smoothstep(-.8,0.,a);

        col = mix(col,vec3(1.,.8,.4)*.75,sun);
    }
}


float starnoise(vec3 rd){
    float c = 0.;
    vec3 p = normalize(rd)*300.;
	for (float i=0.;i<4.;i++)
    {
        vec3 q = fract(p)-.5;
        vec3 id = floor(p);
        float c2 = smoothstep(.5,0.,length(q));
        c2 *= step(hash21(id.xz/id.y),.06-i*i*0.005);
        c += c2;
        p = p*.6+.5*p*mat3(3./5.,0,4./5.,0,1,0,-4./5.,0,3./5.);
    }
    c*=c;
    float g = dot(sin(rd*10.512),cos(rd.yzx*10.512));
    c*=smoothstep(-3.14,-.9,g)*.5+.5*smoothstep(-.3,1.,g);
    return c*c;
}

vec3 gsky(vec3 rd,vec3 ld,bool mask){
    float haze = exp2(-5.*(abs(rd.y)-.2*dot(rd,ld)));
    

    //float st = mask?pow512(texture(iChannel0,(rd.xy+vec2(300.1,100)*rd.z)*10.).r)*(1.-min(haze,1.)):0.;
    //float st = mask?pow512(hash21((rd.xy+vec2(300.1,100)*rd.z)*10.))*(1.-min(haze,1.)):0.;
    float st = mask?(starnoise(rd))*(1.-min(haze,1.)):0.;
    vec3 back = vec3(.4,.1,.7)*(1.-.5*textureMirror(iChannel0,vec2(.5+.05*rd.x/rd.y,0.)).x
    *exp2(-.1*abs(length(rd.xz)/rd.y))
    *max(sign(rd.y),0.));
    #ifdef city
    float x = round(rd.x*30.);
    float h = hash21(vec2(x-166.));
    bool building = (h*h*.125*exp2(-x*x*x*x*.0025)>rd.y);
    if(mask && building)
        back*=0.,haze=.8, mask=mask && !building;
    #endif
    vec3 col=clamp(mix(back,vec3(.7,.1,.4),haze)+st,0.,1.);
    if(mask)addsun(rd,ld,col);
    return col;  
}


void main()
{
    gl_FragColor=vec4(0);
    #ifdef AA
    for(float x = 0.;x<1.;x+=1./float(AA)){
    for(float y = 0.;y<1.;y+=1./float(AA)){
    #else
        const float AA=1.,x=0.,y=0.;
    #endif
    vec2 uv = (2.*(gl_FragCoord.xy+vec2(x,y))-iResolution.xy)/iResolution.y;
    
    const float shutter_speed = .25; // for motion blur
	//float dt = fract(texture(iChannel0,float(AA)*(gl_FragCoord.xy+vec2(x,y))/iChannelResolution[0].xy).r+iTime)*shutter_speed;
    float dt = fract(hash21(float(AA)*(gl_FragCoord.xy+vec2(x,y)))+iTime)*shutter_speed;
    jTime = mod(iTime-dt*iTimeDelta,4000.);
    vec3 ro = vec3(0.,1,(-20000.+jTime*speed));
    
        #ifdef stereo
            ro+=stereo*vec3(.2*(float(uv.x>0.)-.5),0.,0.); 
            const float de = .9;
            uv.x=uv.x+.5*(uv.x>0.?-de:de);
            uv*=2.;
		#endif
        
    vec3 rd = normalize(vec3(uv,4./3.));//vec3(uv,sqrt(1.-dot(uv,uv)));
    
    vec2 i = intersect(ro,rd);
    float d = i.x;
    
    vec3 ld = normalize(vec3(0,.125+.05*sin(.1*jTime),1));

    vec3 fog = d>0.?exp2(-d*vec3(.14,.1,.28)):vec3(0.);
    vec3 sky = gsky(rd,ld,d<0.);
    
    vec3 p = ro+d*rd;
    vec3 n = normalize(grad(p));
    
    float diff = dot(n,ld)+.1*n.y;
    vec3 col = vec3(.1,.11,.18)*diff;
    
    vec3 rfd = reflect(rd,n); 
    vec3 rfcol = gsky(rfd,ld,true);
    
    col = mix(col,rfcol,.05+.95*pow(max(1.+dot(rd,n),0.),5.));
    #ifdef VAPORWAVE
    col = mix(col,vec3(.4,.5,1.),smoothstep(.05,.0,i.y));
    col = mix(sky,col,fog);
    col = sqrt(col);
    #else
    col = mix(col,vec3(.8,.1,.92),smoothstep(.05,.0,i.y));
    col = mix(sky,col,fog);
    //no gamma for that old cg look
    #endif
    if(d<0.)
        d=1e6;
    d=min(d,10.);
    gl_FragColor += vec4(clamp(col,0.,1.),d<0.?0.:.1+exp2(-d));
     #ifdef AA
    }
    }
    gl_FragColor/=float(AA*AA);
    #endif
    gl_FragColor.a = 1.0;
}

  `},LR="/chunks/hero-img.CQRsbUqx.png",FR=()=>{const[n,t]=Q.useState(1),[e,i]=Q.useState(Gl),[s,r]=Q.useState(!1);Q.useEffect(()=>{i((h=>{switch(h){case 1:return Gl;case 2:return PR;case 3:return DR;default:return Gl}})(n))},[n]),Q.useEffect(()=>{const u=document.getElementById("loader"),h=document.querySelector(".content-section");setTimeout(()=>{u&&h&&(u.style.display="none",h.style.display="flex")},1e3)},[]);const a=u=>{s||u===n||(r(!0),t(u),setTimeout(()=>{r(!1)},500))},o=()=>{window.location.href="mailto:cskcool@163.com"},l={initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20}},c=[{id:1,label:"主页"},{id:2,label:"作品集"},{id:3,label:"技能"}];return ft.jsxs("div",{className:"main-box",children:[ft.jsx("div",{className:"three-background",children:ft.jsx(JT,{currentScene:n,backgroundShaders:e})}),ft.jsxs(he.header,{className:"nav-header",initial:{y:-100,opacity:0},animate:{y:0,opacity:1},transition:{duration:.6,delay:.2},children:[ft.jsx("div",{className:"logo",children:"cskcool."}),ft.jsx("nav",{className:"nav-menu",children:c.map(u=>ft.jsx(he.button,{className:`nav-item ${n===u.id?"active":""}`,onClick:()=>a(u.id),whileHover:{scale:1.05},whileTap:{scale:.95},children:u.label},u.id))}),ft.jsxs(he.button,{className:"download-btn",onClick:o,whileHover:{scale:1.05},whileTap:{scale:.95},children:[ft.jsx(Lm,{}),ft.jsx("span",{children:"联系我"})]})]}),ft.jsx("div",{className:"content-section",children:ft.jsxs(D1,{mode:"wait",children:[n===1&&ft.jsxs(he.div,{className:"page page-one",variants:l,initial:"initial",animate:"animate",exit:"exit",transition:{duration:.5},children:[ft.jsxs(he.div,{className:"page-left-area",children:[ft.jsxs(he.div,{className:"page-one-title",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:[ft.jsx("div",{children:"让前端"}),ft.jsx("div",{children:"再次伟大"})]}),ft.jsx(he.div,{className:"page-one-subtitle",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},children:"欢迎来到cskcool的前端世界，在这里，我将作为一位专注于Web前端开发的极客，与您分享一系列互动项目及技术见解。"}),ft.jsxs(he.div,{className:"page-one-actions",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},children:[ft.jsx(he.button,{className:"hire-btn",onClick:o,whileHover:{scale:1.05},whileTap:{scale:.95},children:"联系我"}),ft.jsx(he.button,{className:"portfolio-btn",onClick:()=>a(2),whileHover:{scale:1.05},whileTap:{scale:.95},children:ft.jsx("span",{children:"→"})})]})]}),ft.jsx(he.div,{className:"page-right-area",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.4,duration:.8},children:ft.jsx(RR,{heroImg:LR})})]},"page1"),n===2&&ft.jsx(he.div,{className:"page page-two",variants:l,initial:"initial",animate:"animate",exit:"exit",transition:{duration:.5},children:ft.jsx(AR,{})},"page2"),n===3&&ft.jsx(he.div,{className:"page page-three",variants:l,initial:"initial",animate:"animate",exit:"exit",transition:{duration:.5},children:ft.jsx(CR,{})},"page3")]})})]})};export{FR as default};
