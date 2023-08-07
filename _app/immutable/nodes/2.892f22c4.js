import{i as Tt,f as xt,s as Mt,h as X,o as Et,b as Ct,n as ht}from"../chunks/scheduler.c33b04e7.js";import{S as Ht,i as Lt,e as It,a as b,y as St,t as nt,b as ct,d as et,f as r,p as yt,g as D,s as q,m as vt,h as x,j as Z,c as B,z as R,n as _t,k as a,l as T,x as j,A as F,B as N}from"../chunks/index.ee8f8387.js";const At=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Gt(u){const t=u-1;return t*t*t+1}function P(u,{delay:t=0,duration:s=400,easing:o=Tt}={}){const l=+getComputedStyle(u).opacity;return{delay:t,duration:s,easing:o,css:i=>`opacity: ${i*l}`}}function Y(u,{delay:t=0,duration:s=400,easing:o=Gt,x:l=0,y:i=0,opacity:h=0}={}){const v=getComputedStyle(u),c=+v.opacity,_=v.transform==="none"?"":v.transform,n=c*(1-h),[G,p]=xt(l),[C,z]=xt(i);return{delay:t,duration:s,easing:o,css:(m,W)=>`
			transform: ${_} translate(${(1-m)*G}${p}, ${(1-m)*C}${z});
			opacity: ${c-n*W}`}}const{setTimeout:gt,window:Dt}=At;function Pt(u){let t,s,o,l,i,h,v,c,_,n='<a href="https://github.com/AlessandroGia" target="_blank"><img src="svg/logo-github.svg" style="height: 6vw;" alt="GitHub" class="svelte-yd3zh0"/></a>',G,p,C,z,m='<a href="mailto:alessandrogiacento@alegiacento.dev"><img src="svg/mail.svg" style="height: 6vw;" alt="E-Mail" class="svelte-yd3zh0"/></a>',W,E,H,A,y,Q='Icons taken from <a id="link-ionic" href="https://ionicframework.com" target="_blank" class="svelte-yd3zh0">Ionic</a>',V,f,I,d,O,U,g=new Date().getFullYear()+"",L,e,M,rt,it,$,w="Powered by Svelte",K,ut,mt,dt,lt,k=u[10]<u[11]/3&&Vt(u);const J=[Nt,Ft],st=[];function ot(S,tt){return S[10]>S[11]/3?0:1}return l=ot(u),i=st[l]=J[l](u),{c(){t=D("div"),s=D("div"),k&&k.c(),o=q(),i.c(),h=q(),v=D("div"),c=D("div"),_=D("div"),_.innerHTML=n,C=q(),z=D("div"),z.innerHTML=m,H=q(),A=D("div"),y=D("div"),y.innerHTML=Q,I=q(),d=D("div"),O=D("div"),U=vt("@ "),L=vt(g),e=vt(" Alessandro Giacento"),it=q(),$=D("div"),$.textContent=w,this.h()},l(S){t=x(S,"DIV",{id:!0,style:!0,class:!0});var tt=Z(t);s=x(tt,"DIV",{id:!0,style:!0,class:!0});var ft=Z(s);k&&k.l(ft),ft.forEach(r),o=B(tt),i.l(tt),h=B(tt),v=x(tt,"DIV",{id:!0,style:!0,class:!0});var pt=Z(v);c=x(pt,"DIV",{id:!0,class:!0});var at=Z(c);_=x(at,"DIV",{class:!0,"data-svelte-h":!0}),R(_)!=="svelte-14hwxcv"&&(_.innerHTML=n),C=B(at),z=x(at,"DIV",{class:!0,"data-svelte-h":!0}),R(z)!=="svelte-msvydn"&&(z.innerHTML=m),H=B(at),A=x(at,"DIV",{id:!0,class:!0});var bt=Z(A);y=x(bt,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),R(y)!=="svelte-13dcxkv"&&(y.innerHTML=Q),bt.forEach(r),I=B(at),d=x(at,"DIV",{id:!0,class:!0});var kt=Z(d);O=x(kt,"DIV",{id:!0,class:!0});var zt=Z(O);U=_t(zt,"@ "),L=_t(zt,g),e=_t(zt," Alessandro Giacento"),zt.forEach(r),it=B(kt),$=x(kt,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),R($)!=="svelte-1w87dph"&&($.textContent=w),kt.forEach(r),at.forEach(r),pt.forEach(r),tt.forEach(r),this.h()},h(){a(s,"id","top"),T(s,"height",u[11]+"px"),a(s,"class","svelte-yd3zh0"),a(_,"class","contact-logo svelte-yd3zh0"),a(z,"class","contact-logo svelte-yd3zh0"),a(y,"id","credit"),a(y,"class","svelte-yd3zh0"),a(A,"id","credits"),a(A,"class","svelte-yd3zh0"),a(O,"id","copyright"),a(O,"class","svelte-yd3zh0"),a($,"id","powered"),a($,"class","svelte-yd3zh0"),a(d,"id","end-footer"),a(d,"class","svelte-yd3zh0"),a(c,"id","bottom"),a(c,"class","svelte-yd3zh0"),a(v,"id","bottom"),T(v,"height",u[11]*.2+"px"),T(v,"width","100%"),T(v,"background-color","transparent"),a(v,"class","svelte-yd3zh0"),a(t,"id","div_container"),T(t,"background-color",u[2]),a(t,"class","svelte-yd3zh0")},m(S,tt){b(S,t,tt),j(t,s),k&&k.m(s,null),j(t,o),st[l].m(t,null),j(t,h),j(t,v),j(v,c),j(c,_),j(c,C),j(c,z),j(c,H),j(c,A),j(A,y),j(c,I),j(c,d),j(d,O),j(O,U),j(O,L),j(O,e),j(d,it),j(d,$),lt=!0},p(S,tt){S[10]<S[11]/3?k?(k.p(S,tt),tt&3072&&et(k,1)):(k=Vt(S),k.c(),et(k,1),k.m(s,null)):k&&(yt(),nt(k,1,1,()=>{k=null}),ct()),(!lt||tt&2048)&&T(s,"height",S[11]+"px");let ft=l;l=ot(S),l===ft?st[l].p(S,tt):(yt(),nt(st[ft],1,1,()=>{st[ft]=null}),ct(),i=st[l],i?i.p(S,tt):(i=st[l]=J[l](S),i.c()),et(i,1),i.m(t,h)),(!lt||tt&2048)&&T(v,"height",S[11]*.2+"px"),(!lt||tt&4)&&T(t,"background-color",S[2])},i(S){lt||(et(k),et(i),S&&X(()=>{lt&&(p&&p.end(1),G=F(_,Y,{x:-200,duration:1e3,delay:500}),G.start())}),S&&X(()=>{lt&&(E&&E.end(1),W=F(z,Y,{x:200,duration:1e3,delay:500}),W.start())}),S&&X(()=>{lt&&(f&&f.end(1),V=F(y,P,{duration:500,delay:600}),V.start())}),S&&X(()=>{lt&&(rt&&rt.end(1),M=F(O,Y,{y:-200,duration:500,delay:800}),M.start())}),S&&X(()=>{lt&&(ut&&ut.end(1),K=F($,Y,{y:-200,duration:500,delay:800}),K.start())}),S&&(mt||X(()=>{mt=F(c,Y,{duration:2e3,y:-200}),mt.start()})),S&&(dt||X(()=>{dt=F(t,Y,{y:200,duration:2e3}),dt.start()})),lt=!0)},o(S){nt(k),nt(i),G&&G.invalidate(),S&&(p=N(_,P,{})),W&&W.invalidate(),S&&(E=N(z,P,{})),V&&V.invalidate(),S&&(f=N(y,P,{})),M&&M.invalidate(),S&&(rt=N(O,P,{})),K&&K.invalidate(),S&&(ut=N($,P,{})),lt=!1},d(S){S&&r(t),k&&k.d(),st[l].d(),S&&p&&p.end(),S&&E&&E.end(),S&&f&&f.end(),S&&rt&&rt.end(),S&&ut&&ut.end()}}}function Xt(u){let t,s,o,l,i,h=u[1]&&wt(u);return{c(){t=D("div"),s=D("div"),o=q(),h&&h.c(),this.h()},l(v){t=x(v,"DIV",{id:!0,class:!0});var c=Z(t);s=x(c,"DIV",{class:!0,style:!0}),Z(s).forEach(r),o=B(c),h&&h.l(c),c.forEach(r),this.h()},h(){a(s,"class","stain svelte-yd3zh0"),T(s,"width",u[3]+"vw"),T(s,"height",u[4]+"vh"),T(s,"border-radius",u[5]+"%"),a(t,"id","splash"),a(t,"class","svelte-yd3zh0")},m(v,c){b(v,t,c),j(t,s),j(t,o),h&&h.m(t,null),i=!0},p(v,c){(!i||c&8)&&T(s,"width",v[3]+"vw"),(!i||c&16)&&T(s,"height",v[4]+"vh"),(!i||c&32)&&T(s,"border-radius",v[5]+"%"),v[1]?h?(h.p(v,c),c&2&&et(h,1)):(h=wt(v),h.c(),et(h,1),h.m(t,null)):h&&(h.d(1),h=null)},i(v){i||(et(h),l&&l.end(1),i=!0)},o(v){v&&(l=N(t,P,{})),i=!1},d(v){v&&r(t),h&&h.d(),v&&l&&l.end()}}}function Vt(u){let t,s,o,l,i,h,v,c,_,n,G,p,C,z,m,W=new Date().getFullYear()-new Date(Zt).getFullYear()+"",E,H,A,y,Q,V;return{c(){t=D("div"),l=q(),i=D("div"),c=q(),_=D("div"),p=q(),C=D("div"),z=D("span"),m=vt("I'm Alessandro Giacento, a "),E=vt(W),H=vt("-years-old Computer Science student at The University of Pesche."),this.h()},l(f){t=x(f,"DIV",{id:!0,class:!0}),Z(t).forEach(r),l=B(f),i=x(f,"DIV",{id:!0,style:!0,class:!0}),Z(i).forEach(r),c=B(f),_=x(f,"DIV",{id:!0,style:!0,class:!0}),Z(_).forEach(r),p=B(f),C=x(f,"DIV",{id:!0,class:!0});var I=Z(C);z=x(I,"SPAN",{});var d=Z(z);m=_t(d,"I'm Alessandro Giacento, a "),E=_t(d,W),H=_t(d,"-years-old Computer Science student at The University of Pesche."),d.forEach(r),I.forEach(r),this.h()},h(){a(t,"id","segment_1"),a(t,"class","svelte-yd3zh0"),a(i,"id","segment_2"),T(i,"width",u[12]+"px"),T(i,"height",u[11]+"px"),T(i,"left",u[12]*.2+"px"),T(i,"top","-"+u[11]/2+"px"),T(i,"transform","rotate("+(40+u[10]/5)+"deg)"),a(i,"class","svelte-yd3zh0"),a(_,"id","segment_3"),T(_,"width",u[12]+"px"),T(_,"height",u[11]+"px"),T(_,"right",u[12]*.2+"px"),T(_,"bottom","-"+u[11]/2+"px"),T(_,"transform","rotate("+(60+u[10]/5)+"deg)"),a(_,"class","svelte-yd3zh0"),a(C,"id","about_me"),a(C,"class","svelte-yd3zh0")},m(f,I){b(f,t,I),b(f,l,I),b(f,i,I),b(f,c,I),b(f,_,I),b(f,p,I),b(f,C,I),j(C,z),j(z,m),j(z,E),j(z,H),V=!0},p(f,I){(!V||I&4096)&&T(i,"width",f[12]+"px"),(!V||I&2048)&&T(i,"height",f[11]+"px"),(!V||I&4096)&&T(i,"left",f[12]*.2+"px"),(!V||I&2048)&&T(i,"top","-"+f[11]/2+"px"),(!V||I&1024)&&T(i,"transform","rotate("+(40+f[10]/5)+"deg)"),(!V||I&4096)&&T(_,"width",f[12]+"px"),(!V||I&2048)&&T(_,"height",f[11]+"px"),(!V||I&4096)&&T(_,"right",f[12]*.2+"px"),(!V||I&2048)&&T(_,"bottom","-"+f[11]/2+"px"),(!V||I&1024)&&T(_,"transform","rotate("+(60+f[10]/5)+"deg)")},i(f){V||(f&&X(()=>{V&&(o&&o.end(1),s=F(t,P,{delay:500}),s.start())}),f&&X(()=>{V&&(v&&v.end(1),h=F(i,Y,{y:200,duration:1e3}),h.start())}),f&&X(()=>{V&&(G&&G.end(1),n=F(_,Y,{y:-200,duration:1e3}),n.start())}),f&&(A||X(()=>{A=F(z,P,{duration:1e3,delay:1e3}),A.start()})),f&&X(()=>{V&&(Q&&Q.end(1),y=F(C,Y,{x:500,duration:1e3,delay:500}),y.start())}),V=!0)},o(f){s&&s.invalidate(),f&&(o=N(t,P,{})),h&&h.invalidate(),f&&(v=N(i,Y,{y:-200,duration:1e3})),n&&n.invalidate(),f&&(G=N(_,Y,{y:200,duration:1e3})),y&&y.invalidate(),f&&(Q=N(C,P,{delay:500})),V=!1},d(f){f&&(r(t),r(l),r(i),r(c),r(_),r(p),r(C)),f&&o&&o.end(),f&&v&&v.end(),f&&G&&G.end(),f&&Q&&Q.end()}}}function Ft(u){let t;return{c(){t=D("div"),this.h()},l(s){t=x(s,"DIV",{style:!0});var o=Z(t);o.forEach(r),this.h()},h(){T(t,"height",u[11]*1.5+"px"),T(t,"background-color","transparent")},m(s,o){b(s,t,o)},p(s,o){o&2048&&T(t,"height",s[11]*1.5+"px")},i:ht,o:ht,d(s){s&&r(t)}}}function Nt(u){let t,s="Technology",o,l,i,h,v,c,_,n,G,p,C,z,m,W,E,H,A,y,Q,V,f,I,d,O,U,g;const L=[qt,jt],e=[];function M(k,J){return k[13][0]?0:1}_=M(u),n=e[_]=L[_](u);const rt=[Ot,Bt],it=[];function $(k,J){return k[13][1]?0:1}z=$(u),m=it[z]=rt[z](u);const w=[Ut,Rt],K=[];function ut(k,J){return k[13][2]?0:1}A=ut(u),y=K[A]=w[A](u);const mt=[Wt,Yt],dt=[];function lt(k,J){return k[13][2]?0:1}return I=lt(u),d=dt[I]=mt[I](u),{c(){t=D("div"),t.textContent=s,i=q(),h=D("div"),v=D("div"),c=D("div"),n.c(),G=q(),p=D("div"),C=D("div"),m.c(),W=q(),E=D("div"),H=D("div"),y.c(),Q=q(),V=D("div"),f=D("div"),d.c(),this.h()},l(k){t=x(k,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),R(t)!=="svelte-dsten8"&&(t.textContent=s),i=B(k),h=x(k,"DIV",{id:!0,style:!0,class:!0});var J=Z(h);v=x(J,"DIV",{class:!0,style:!0});var st=Z(v);c=x(st,"DIV",{id:!0,class:!0});var ot=Z(c);n.l(ot),ot.forEach(r),st.forEach(r),G=B(J),p=x(J,"DIV",{class:!0,style:!0});var S=Z(p);C=x(S,"DIV",{id:!0,class:!0});var tt=Z(C);m.l(tt),tt.forEach(r),S.forEach(r),W=B(J),E=x(J,"DIV",{class:!0,style:!0});var ft=Z(E);H=x(ft,"DIV",{id:!0,class:!0});var pt=Z(H);y.l(pt),pt.forEach(r),ft.forEach(r),Q=B(J),V=x(J,"DIV",{class:!0,style:!0});var at=Z(V);f=x(at,"DIV",{id:!0,class:!0});var bt=Z(f);d.l(bt),bt.forEach(r),at.forEach(r),J.forEach(r),this.h()},h(){a(t,"id","div-tech"),a(t,"class","svelte-yd3zh0"),a(c,"id","animated-div-tech"),a(c,"class","svelte-yd3zh0"),a(v,"class","item-left svelte-yd3zh0"),T(v,"transform","translateX("+u[7][0]+"px)"),T(v,"opacity",u[6][0]),a(C,"id","animated-div-tech"),a(C,"class","svelte-yd3zh0"),a(p,"class","item-right svelte-yd3zh0"),T(p,"transform","translateX("+u[7][1]+"px)"),T(p,"opacity",u[6][1]),a(H,"id","animated-div-tech"),a(H,"class","svelte-yd3zh0"),a(E,"class","item-left svelte-yd3zh0"),T(E,"transform","translateX("+u[7][2]+"px)"),T(E,"opacity",u[6][2]),a(f,"id","animated-div-tech"),a(f,"class","svelte-yd3zh0"),a(V,"class","item-right svelte-yd3zh0"),T(V,"transform","translateX("+u[7][3]+"px)"),T(V,"opacity",u[6][3]),a(h,"id","middle"),T(h,"height",u[11]*2+"px"),a(h,"class","svelte-yd3zh0")},m(k,J){b(k,t,J),b(k,i,J),b(k,h,J),j(h,v),j(v,c),e[_].m(c,null),u[15](v),j(h,G),j(h,p),j(p,C),it[z].m(C,null),u[16](p),j(h,W),j(h,E),j(E,H),K[A].m(H,null),u[17](E),j(h,Q),j(h,V),j(V,f),dt[I].m(f,null),u[18](V),u[19](h),g=!0},p(k,J){let st=_;_=M(k),_!==st&&(yt(),nt(e[st],1,1,()=>{e[st]=null}),ct(),n=e[_],n||(n=e[_]=L[_](k),n.c()),et(n,1),n.m(c,null)),(!g||J&128)&&T(v,"transform","translateX("+k[7][0]+"px)"),(!g||J&64)&&T(v,"opacity",k[6][0]);let ot=z;z=$(k),z!==ot&&(yt(),nt(it[ot],1,1,()=>{it[ot]=null}),ct(),m=it[z],m||(m=it[z]=rt[z](k),m.c()),et(m,1),m.m(C,null)),(!g||J&128)&&T(p,"transform","translateX("+k[7][1]+"px)"),(!g||J&64)&&T(p,"opacity",k[6][1]);let S=A;A=ut(k),A!==S&&(yt(),nt(K[S],1,1,()=>{K[S]=null}),ct(),y=K[A],y||(y=K[A]=w[A](k),y.c()),et(y,1),y.m(H,null)),(!g||J&128)&&T(E,"transform","translateX("+k[7][2]+"px)"),(!g||J&64)&&T(E,"opacity",k[6][2]);let tt=I;I=lt(k),I!==tt&&(yt(),nt(dt[tt],1,1,()=>{dt[tt]=null}),ct(),d=dt[I],d||(d=dt[I]=mt[I](k),d.c()),et(d,1),d.m(f,null)),(!g||J&128)&&T(V,"transform","translateX("+k[7][3]+"px)"),(!g||J&64)&&T(V,"opacity",k[6][3]),(!g||J&2048)&&T(h,"height",k[11]*2+"px")},i(k){g||(k&&X(()=>{g&&(l&&l.end(1),o=F(t,Y,{y:-200,duration:1e3}),o.start())}),et(n),et(m),et(y),et(d),k&&X(()=>{g&&(U&&U.end(1),O=F(h,P,{duration:1e3}),O.start())}),g=!0)},o(k){o&&o.invalidate(),k&&(l=N(t,P,{})),nt(n),nt(m),nt(y),nt(d),O&&O.invalidate(),k&&(U=N(h,P,{})),g=!1},d(k){k&&(r(t),r(i),r(h)),k&&l&&l.end(),e[_].d(),u[15](null),it[z].d(),u[16](null),K[A].d(),u[17](null),dt[I].d(),u[18](null),u[19](null),k&&U&&U.end()}}}function jt(u){let t,s='<img src="svg/code-slash-outline.svg" style="height: 10vw;" alt="Languages" class="svelte-yd3zh0"/>',o;return{c(){t=D("div"),t.innerHTML=s,this.h()},l(l){t=x(l,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),R(t)!=="svelte-1d5rdeg"&&(t.innerHTML=s),this.h()},h(){a(t,"id","animated-div-img-tech"),a(t,"class","svelte-yd3zh0")},m(l,i){b(l,t,i)},i(l){l&&(o||X(()=>{o=F(t,P,{delay:500,duration:200}),o.start()}))},o:ht,d(l){l&&r(t)}}}function qt(u){let t,s='<img src="svg/code-slash-outline.svg" style="height: 4vw;" alt="Languages" class="svelte-yd3zh0"/>',o,l,i,h="JavaScript/TypeScript",v,c,_,n,G="HTML/CSS",p,C,z,m,W="Python",E,H,A,y,Q="C/C++",V,f,I,d,O="Java",U,g,L;return{c(){t=D("div"),t.innerHTML=s,l=q(),i=D("div"),i.textContent=h,_=q(),n=D("div"),n.textContent=G,z=q(),m=D("div"),m.textContent=W,A=q(),y=D("div"),y.textContent=Q,I=q(),d=D("div"),d.textContent=O,this.h()},l(e){t=x(e,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),R(t)!=="svelte-10r9nhu"&&(t.innerHTML=s),l=B(e),i=x(e,"DIV",{class:!0,"data-svelte-h":!0}),R(i)!=="svelte-10geytq"&&(i.textContent=h),_=B(e),n=x(e,"DIV",{class:!0,"data-svelte-h":!0}),R(n)!=="svelte-ie6u7k"&&(n.textContent=G),z=B(e),m=x(e,"DIV",{class:!0,"data-svelte-h":!0}),R(m)!=="svelte-8ivy25"&&(m.textContent=W),A=B(e),y=x(e,"DIV",{class:!0,"data-svelte-h":!0}),R(y)!=="svelte-a16l7k"&&(y.textContent=Q),I=B(e),d=x(e,"DIV",{class:!0,"data-svelte-h":!0}),R(d)!=="svelte-1nfevx3"&&(d.textContent=O),this.h()},h(){a(t,"id","animated-div-img-tech"),a(t,"class","svelte-yd3zh0"),a(i,"class","animated-div-item-tech svelte-yd3zh0"),a(n,"class","animated-div-item-tech svelte-yd3zh0"),a(m,"class","animated-div-item-tech svelte-yd3zh0"),a(y,"class","animated-div-item-tech svelte-yd3zh0"),a(d,"class","animated-div-item-tech svelte-yd3zh0")},m(e,M){b(e,t,M),b(e,l,M),b(e,i,M),b(e,_,M),b(e,n,M),b(e,z,M),b(e,m,M),b(e,A,M),b(e,y,M),b(e,I,M),b(e,d,M),L=!0},i(e){L||(o&&o.end(1),e&&X(()=>{L&&(c&&c.end(1),v=F(i,Y,{y:-200,duration:500,delay:200}),v.start())}),e&&X(()=>{L&&(C&&C.end(1),p=F(n,Y,{y:-400,duration:500,delay:400}),p.start())}),e&&X(()=>{L&&(H&&H.end(1),E=F(m,Y,{y:-600,duration:500,delay:600}),E.start())}),e&&X(()=>{L&&(f&&f.end(1),V=F(y,Y,{y:-800,duration:500,delay:800}),V.start())}),e&&X(()=>{L&&(g&&g.end(1),U=F(d,Y,{y:-1e3,duration:500,delay:1e3}),U.start())}),L=!0)},o(e){e&&(o=N(t,P,{duration:200})),v&&v.invalidate(),e&&(c=N(i,P,{duration:200})),p&&p.invalidate(),e&&(C=N(n,P,{duration:200})),E&&E.invalidate(),e&&(H=N(m,P,{duration:200})),V&&V.invalidate(),e&&(f=N(y,P,{duration:200})),U&&U.invalidate(),e&&(g=N(d,P,{duration:200})),L=!1},d(e){e&&(r(t),r(l),r(i),r(_),r(n),r(z),r(m),r(A),r(y),r(I),r(d)),e&&o&&o.end(),e&&c&&c.end(),e&&C&&C.end(),e&&H&&H.end(),e&&f&&f.end(),e&&g&&g.end()}}}function Bt(u){let t,s='<img src="svg/layers-outline.svg" style="height: 10vw;" alt="Frameworks" class="svelte-yd3zh0"/>',o;return{c(){t=D("div"),t.innerHTML=s,this.h()},l(l){t=x(l,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),R(t)!=="svelte-mi8vl3"&&(t.innerHTML=s),this.h()},h(){a(t,"id","animated-div-img-tech"),a(t,"class","svelte-yd3zh0")},m(l,i){b(l,t,i)},i(l){l&&(o||X(()=>{o=F(t,P,{delay:500,duration:200}),o.start()}))},o:ht,d(l){l&&r(t)}}}function Ot(u){let t,s='<img src="svg/layers-outline.svg" style="height: 4vw;" alt="Frameworks" class="svelte-yd3zh0"/>',o,l,i,h="Node.js",v,c,_,n,G="React",p,C,z,m,W="Angular",E,H,A,y,Q="Svelte",V,f,I,d,O="Flask",U,g,L,e,M="FastApi",rt,it,$;return{c(){t=D("div"),t.innerHTML=s,l=q(),i=D("div"),i.textContent=h,_=q(),n=D("div"),n.textContent=G,z=q(),m=D("div"),m.textContent=W,A=q(),y=D("div"),y.textContent=Q,I=q(),d=D("div"),d.textContent=O,L=q(),e=D("div"),e.textContent=M,this.h()},l(w){t=x(w,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),R(t)!=="svelte-lyqkm7"&&(t.innerHTML=s),l=B(w),i=x(w,"DIV",{class:!0,"data-svelte-h":!0}),R(i)!=="svelte-l9a58i"&&(i.textContent=h),_=B(w),n=x(w,"DIV",{class:!0,"data-svelte-h":!0}),R(n)!=="svelte-1pfu8xs"&&(n.textContent=G),z=B(w),m=x(w,"DIV",{class:!0,"data-svelte-h":!0}),R(m)!=="svelte-16a79sz"&&(m.textContent=W),A=B(w),y=x(w,"DIV",{class:!0,"data-svelte-h":!0}),R(y)!=="svelte-114te28"&&(y.textContent=Q),I=B(w),d=x(w,"DIV",{class:!0,"data-svelte-h":!0}),R(d)!=="svelte-j3tnsg"&&(d.textContent=O),L=B(w),e=x(w,"DIV",{class:!0,"data-svelte-h":!0}),R(e)!=="svelte-ncdxr5"&&(e.textContent=M),this.h()},h(){a(t,"id","animated-div-img-tech"),a(t,"class","svelte-yd3zh0"),a(i,"class","animated-div-item-tech svelte-yd3zh0"),a(n,"class","animated-div-item-tech svelte-yd3zh0"),a(m,"class","animated-div-item-tech svelte-yd3zh0"),a(y,"class","animated-div-item-tech svelte-yd3zh0"),a(d,"class","animated-div-item-tech svelte-yd3zh0"),a(e,"class","animated-div-item-tech svelte-yd3zh0")},m(w,K){b(w,t,K),b(w,l,K),b(w,i,K),b(w,_,K),b(w,n,K),b(w,z,K),b(w,m,K),b(w,A,K),b(w,y,K),b(w,I,K),b(w,d,K),b(w,L,K),b(w,e,K),$=!0},i(w){$||(o&&o.end(1),w&&X(()=>{$&&(c&&c.end(1),v=F(i,Y,{y:-200,duration:500,delay:200}),v.start())}),w&&X(()=>{$&&(C&&C.end(1),p=F(n,Y,{y:-400,duration:500,delay:400}),p.start())}),w&&X(()=>{$&&(H&&H.end(1),E=F(m,Y,{y:-600,duration:500,delay:600}),E.start())}),w&&X(()=>{$&&(f&&f.end(1),V=F(y,Y,{y:-800,duration:500,delay:800}),V.start())}),w&&X(()=>{$&&(g&&g.end(1),U=F(d,Y,{y:-1e3,duration:500,delay:1e3}),U.start())}),w&&X(()=>{$&&(it&&it.end(1),rt=F(e,Y,{y:-1200,duration:500,delay:1200}),rt.start())}),$=!0)},o(w){w&&(o=N(t,P,{duration:200})),v&&v.invalidate(),w&&(c=N(i,P,{duration:200})),p&&p.invalidate(),w&&(C=N(n,P,{duration:200})),E&&E.invalidate(),w&&(H=N(m,P,{duration:200})),V&&V.invalidate(),w&&(f=N(y,P,{duration:200})),U&&U.invalidate(),w&&(g=N(d,P,{duration:200})),rt&&rt.invalidate(),w&&(it=N(e,P,{duration:200})),$=!1},d(w){w&&(r(t),r(l),r(i),r(_),r(n),r(z),r(m),r(A),r(y),r(I),r(d),r(L),r(e)),w&&o&&o.end(),w&&c&&c.end(),w&&C&&C.end(),w&&H&&H.end(),w&&f&&f.end(),w&&g&&g.end(),w&&it&&it.end()}}}function Rt(u){let t,s='<img src="svg/server-outline.svg" style="height: 10vw;" alt="Databases" class="svelte-yd3zh0"/>',o;return{c(){t=D("div"),t.innerHTML=s,this.h()},l(l){t=x(l,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),R(t)!=="svelte-200rwp"&&(t.innerHTML=s),this.h()},h(){a(t,"id","animated-div-img-tech"),a(t,"class","svelte-yd3zh0")},m(l,i){b(l,t,i)},i(l){l&&(o||X(()=>{o=F(t,P,{delay:500,duration:200}),o.start()}))},o:ht,d(l){l&&r(t)}}}function Ut(u){let t,s='<img src="svg/server-outline.svg" style="height: 4vw;" alt="Databases" class="svelte-yd3zh0"/>',o,l,i,h="PostgreSQL",v,c,_,n,G="Mysql",p,C,z,m,W="MongoDB",E,H,A,y,Q="Redis",V,f,I,d,O="MariaDB",U,g,L;return{c(){t=D("div"),t.innerHTML=s,l=q(),i=D("div"),i.textContent=h,_=q(),n=D("div"),n.textContent=G,z=q(),m=D("div"),m.textContent=W,A=q(),y=D("div"),y.textContent=Q,I=q(),d=D("div"),d.textContent=O,this.h()},l(e){t=x(e,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),R(t)!=="svelte-1nm266r"&&(t.innerHTML=s),l=B(e),i=x(e,"DIV",{class:!0,"data-svelte-h":!0}),R(i)!=="svelte-ghp55x"&&(i.textContent=h),_=B(e),n=x(e,"DIV",{class:!0,"data-svelte-h":!0}),R(n)!=="svelte-11phusd"&&(n.textContent=G),z=B(e),m=x(e,"DIV",{class:!0,"data-svelte-h":!0}),R(m)!=="svelte-1481vcn"&&(m.textContent=W),A=B(e),y=x(e,"DIV",{class:!0,"data-svelte-h":!0}),R(y)!=="svelte-nd7a8i"&&(y.textContent=Q),I=B(e),d=x(e,"DIV",{class:!0,"data-svelte-h":!0}),R(d)!=="svelte-1brv9o2"&&(d.textContent=O),this.h()},h(){a(t,"id","animated-div-img-tech"),a(t,"class","svelte-yd3zh0"),a(i,"class","animated-div-item-tech svelte-yd3zh0"),a(n,"class","animated-div-item-tech svelte-yd3zh0"),a(m,"class","animated-div-item-tech svelte-yd3zh0"),a(y,"class","animated-div-item-tech svelte-yd3zh0"),a(d,"class","animated-div-item-tech svelte-yd3zh0")},m(e,M){b(e,t,M),b(e,l,M),b(e,i,M),b(e,_,M),b(e,n,M),b(e,z,M),b(e,m,M),b(e,A,M),b(e,y,M),b(e,I,M),b(e,d,M),L=!0},i(e){L||(o&&o.end(1),e&&X(()=>{L&&(c&&c.end(1),v=F(i,Y,{y:-200,duration:500,delay:200}),v.start())}),e&&X(()=>{L&&(C&&C.end(1),p=F(n,Y,{y:-200,duration:500,delay:400}),p.start())}),e&&X(()=>{L&&(H&&H.end(1),E=F(m,Y,{y:-200,duration:500,delay:600}),E.start())}),e&&X(()=>{L&&(f&&f.end(1),V=F(y,Y,{y:-200,duration:500,delay:800}),V.start())}),e&&X(()=>{L&&(g&&g.end(1),U=F(d,Y,{y:-200,duration:500,delay:1e3}),U.start())}),L=!0)},o(e){e&&(o=N(t,P,{duration:200})),v&&v.invalidate(),e&&(c=N(i,P,{duration:200})),p&&p.invalidate(),e&&(C=N(n,P,{duration:200})),E&&E.invalidate(),e&&(H=N(m,P,{duration:200})),V&&V.invalidate(),e&&(f=N(y,P,{duration:200})),U&&U.invalidate(),e&&(g=N(d,P,{duration:200})),L=!1},d(e){e&&(r(t),r(l),r(i),r(_),r(n),r(z),r(m),r(A),r(y),r(I),r(d)),e&&o&&o.end(),e&&c&&c.end(),e&&C&&C.end(),e&&H&&H.end(),e&&f&&f.end(),e&&g&&g.end()}}}function Yt(u){let t,s='<img src="svg/ellipsis-horizontal-outline.svg" style="height: 10vw;" alt="Other" class="svelte-yd3zh0"/>',o;return{c(){t=D("div"),t.innerHTML=s,this.h()},l(l){t=x(l,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),R(t)!=="svelte-1a95k5u"&&(t.innerHTML=s),this.h()},h(){a(t,"id","animated-div-img-tech"),a(t,"class","svelte-yd3zh0")},m(l,i){b(l,t,i)},i(l){l&&(o||X(()=>{o=F(t,P,{delay:500,duration:200}),o.start()}))},o:ht,d(l){l&&r(t)}}}function Wt(u){let t,s='<img src="svg/ellipsis-horizontal-outline.svg" style="height: 4vw;" alt="Other" class="svelte-yd3zh0"/>',o,l,i,h="GitHub",v,c,_,n,G="Docker",p,C,z,m,W="Make",E,H,A,y,Q="Npm",V,f,I,d,O="Pip",U,g,L;return{c(){t=D("div"),t.innerHTML=s,l=q(),i=D("div"),i.textContent=h,_=q(),n=D("div"),n.textContent=G,z=q(),m=D("div"),m.textContent=W,A=q(),y=D("div"),y.textContent=Q,I=q(),d=D("div"),d.textContent=O,this.h()},l(e){t=x(e,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),R(t)!=="svelte-77h6y6"&&(t.innerHTML=s),l=B(e),i=x(e,"DIV",{class:!0,"data-svelte-h":!0}),R(i)!=="svelte-1ikitmg"&&(i.textContent=h),_=B(e),n=x(e,"DIV",{class:!0,"data-svelte-h":!0}),R(n)!=="svelte-ql4djd"&&(n.textContent=G),z=B(e),m=x(e,"DIV",{class:!0,"data-svelte-h":!0}),R(m)!=="svelte-14f7srp"&&(m.textContent=W),A=B(e),y=x(e,"DIV",{class:!0,"data-svelte-h":!0}),R(y)!=="svelte-83ajp4"&&(y.textContent=Q),I=B(e),d=x(e,"DIV",{class:!0,"data-svelte-h":!0}),R(d)!=="svelte-i1z4tf"&&(d.textContent=O),this.h()},h(){a(t,"id","animated-div-img-tech"),a(t,"class","svelte-yd3zh0"),a(i,"class","animated-div-item-tech svelte-yd3zh0"),a(n,"class","animated-div-item-tech svelte-yd3zh0"),a(m,"class","animated-div-item-tech svelte-yd3zh0"),a(y,"class","animated-div-item-tech svelte-yd3zh0"),a(d,"class","animated-div-item-tech svelte-yd3zh0")},m(e,M){b(e,t,M),b(e,l,M),b(e,i,M),b(e,_,M),b(e,n,M),b(e,z,M),b(e,m,M),b(e,A,M),b(e,y,M),b(e,I,M),b(e,d,M),L=!0},i(e){L||(o&&o.end(1),e&&X(()=>{L&&(c&&c.end(1),v=F(i,Y,{y:-200,duration:500,delay:200}),v.start())}),e&&X(()=>{L&&(C&&C.end(1),p=F(n,Y,{y:-200,duration:500,delay:400}),p.start())}),e&&X(()=>{L&&(H&&H.end(1),E=F(m,Y,{y:-200,duration:500,delay:600}),E.start())}),e&&X(()=>{L&&(f&&f.end(1),V=F(y,Y,{y:-200,duration:500,delay:800}),V.start())}),e&&X(()=>{L&&(g&&g.end(1),U=F(d,Y,{y:-200,duration:500,delay:1e3}),U.start())}),L=!0)},o(e){e&&(o=N(t,P,{duration:200})),v&&v.invalidate(),e&&(c=N(i,P,{duration:200})),p&&p.invalidate(),e&&(C=N(n,P,{duration:200})),E&&E.invalidate(),e&&(H=N(m,P,{duration:200})),V&&V.invalidate(),e&&(f=N(y,P,{duration:200})),U&&U.invalidate(),e&&(g=N(d,P,{duration:200})),L=!1},d(e){e&&(r(t),r(l),r(i),r(_),r(n),r(z),r(m),r(A),r(y),r(I),r(d)),e&&o&&o.end(),e&&c&&c.end(),e&&C&&C.end(),e&&H&&H.end(),e&&f&&f.end(),e&&g&&g.end()}}}function wt(u){let t,s,o,l,i="Welcome to my portfolio.",h;function v(n,G){return $t()?Qt:Jt}let _=v()(u);return{c(){t=D("span"),_.c(),o=q(),l=D("span"),l.textContent=i,this.h()},l(n){t=x(n,"SPAN",{});var G=Z(t);_.l(G),G.forEach(r),o=B(n),l=x(n,"SPAN",{id:!0,class:!0,"data-svelte-h":!0}),R(l)!=="svelte-1ux9ndh"&&(l.textContent=i),this.h()},h(){a(l,"id","p_splash"),a(l,"class","svelte-yd3zh0")},m(n,G){b(n,t,G),_.m(t,null),b(n,o,G),b(n,l,G)},p:ht,i(n){n&&(s||X(()=>{s=F(t,P,{}),s.start()})),n&&(h||X(()=>{h=F(l,Y,{y:-200,duration:1e3,delay:500}),h.start()}))},o:ht,d(n){n&&(r(t),r(o),r(l)),_.d()}}}function Jt(u){let t;return{c(){t=vt("Good Evening!")},l(s){t=_t(s,"Good Evening!")},m(s,o){b(s,t,o)},d(s){s&&r(t)}}}function Qt(u){let t;return{c(){t=vt("Good Morning!")},l(s){t=_t(s,"Good Morning!")},m(s,o){b(s,t,o)},d(s){s&&r(t)}}}function Kt(u){let t=!1,s=()=>{t=!1},o,l,i,h,v,c;X(u[14]);const _=[Xt,Pt],n=[];function G(p,C){return p[0]?0:1}return l=G(u),i=n[l]=_[l](u),{c(){i.c(),h=It()},l(p){i.l(p),h=It()},m(p,C){n[l].m(p,C),b(p,h,C),v||(c=St(Dt,"scroll",()=>{t=!0,clearTimeout(o),o=gt(s,100),u[14]()}),v=!0)},p(p,[C]){C&1024&&!t&&(t=!0,clearTimeout(o),scrollTo(Dt.pageXOffset,p[10]),o=gt(s,100));let z=l;l=G(p),l===z?n[l].p(p,C):(yt(),nt(n[z],1,1,()=>{n[z]=null}),ct(),i=n[l],i?i.p(p,C):(i=n[l]=_[l](p),i.c()),et(i,1),i.m(h.parentNode,h))},i(p){et(i)},o(p){nt(i)},d(p){p&&r(h),n[l].d(p),v=!1,c()}}}const Zt="2001-09-24";function $t(){const t=new Date().getHours();return t>=6&&t<18}function te(u,t,s){let o=!0,l=!1,i="transparent",h=0,v=0,c=100,_,n,G=1,p,C=[],z,m,W,E;setTimeout(()=>{s(1,l=!0),s(3,h=100),s(4,v=100),s(5,c=0),setTimeout(()=>{s(0,o=!1)},2599)},500);let H=[0,0,0,0,0,0,0,0];Et(()=>{s(11,W=window.innerHeight),s(12,E=window.innerWidth),_=-E/3,n=-_,s(7,p=[_,n,_,n,_,n,_,n]),s(6,G=[1,1,1,1,1,1,1,1]),window.addEventListener("resize",()=>{s(11,W=window.innerHeight),s(12,E=window.innerWidth)}),window.addEventListener("scroll",()=>{z!=null&&z.getBoundingClientRect().height,m>W/3?s(2,i="rgba(255, 0, 0, 0.1)"):s(2,i="transparent"),C.forEach((d,O)=>{if(d!=null){let U,g=d.getBoundingClientRect(),L=W/2-g.height/2,e=L+g.height;O%2==0?U=_:U=n;let M=U-(e-g.top)*(U/g.height);m-g.height>0&&g.top<=e&&g.top>L?((e-g.top)*(g.width/g.height),s(6,G[O]=(e-g.top)*(1/g.height),G),s(7,p[O]=M,p),g.top-g.width/3>L&&s(13,H[O]=0,H)):g.top<=L&&(s(7,p[O]=0,p),s(13,H[O]=1,H))}})})});function A(){s(10,m=Dt.pageYOffset)}function y(d){Ct[d?"unshift":"push"](()=>{C[0]=d,s(8,C)})}function Q(d){Ct[d?"unshift":"push"](()=>{C[1]=d,s(8,C)})}function V(d){Ct[d?"unshift":"push"](()=>{C[2]=d,s(8,C)})}function f(d){Ct[d?"unshift":"push"](()=>{C[3]=d,s(8,C)})}function I(d){Ct[d?"unshift":"push"](()=>{z=d,s(9,z)})}return[o,l,i,h,v,c,G,p,C,z,m,W,E,H,A,y,Q,V,f,I]}class le extends Ht{constructor(t){super(),Lt(this,t,te,Kt,Mt,{})}}export{le as component};