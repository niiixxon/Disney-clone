(this["webpackJsonpyoutube-disney-clone"]=this["webpackJsonpyoutube-disney-clone"]||[]).push([[0],{57:function(n,e,i){},66:function(n,e,i){},84:function(n,e,i){"use strict";i.r(e);var t,a,r,c,o,s,p,d,l,x,b,j,g,h,m,u,O,f,v,w,y,k,z,I,S,E,D,A,T,C,L,R,P,G,H,M,N,B,J,U,V,W,X,F=i(3),K=i.n(F),Y=i(33),$=i.n(Y),q=(i(57),i(18)),Q=i(12),Z=i(5),_=i(6),nn=i(2),en=_.a.section(t||(t=Object(Z.a)(["\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  height: 100vh;\n"]))),tn=_.a.div(a||(a=Object(Z.a)(["\n  margin-bottom: 10vw;\n  width: 100%;\n  position: relative;\n  min-height: 100vh;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 80px 40px;\n  height: 100%;\n"]))),an=_.a.div(r||(r=Object(Z.a)(['\n  height: 100%;\n  background-position: top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url("/images/login-background.jpg");\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: -1;\n']))),rn=_.a.div(c||(c=Object(Z.a)(["\n  max-width: 650px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),cn=_.a.img(o||(o=Object(Z.a)(["\n  margin-bottom: 12px;\n  max-width: 600px;\n  min-height: 1px;\n  display: block;\n  width: 100%;\n"]))),on=_.a.a(s||(s=Object(Z.a)(["\n  font-weight: bold;\n  color: #f9f9f9;\n  background-color: #0063e5;\n  margin-bottom: 12px;\n  width: 100%;\n  letter-spacing: 1.5px;\n  font-size: 18px;\n  padding: 16.5px 0;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  &:hover {\n    background-color: #0483ee;\n  }\n"]))),sn=_.a.p(p||(p=Object(Z.a)(["\n  color: hsla(0, 0%, 95.3%, 1);\n  font-size: 11px;\n  margin: 0 0 24px;\n  line-height: 1.5;\n  letter-spacing: 1.5px;\n"]))),pn=_.a.img(d||(d=Object(Z.a)(["\n  max-width: 600px;\n  margin-bottom: 20px;\n  display: inline-block;\n  vertical-align: bottom;\n  width: 100%;\n"]))),dn=function(n){return Object(nn.jsx)(en,{children:Object(nn.jsxs)(tn,{children:[Object(nn.jsxs)(rn,{children:[Object(nn.jsx)(cn,{src:"/images/cta-logo-one.svg",alt:""}),Object(nn.jsx)(on,{children:"GET ALL THERE"}),Object(nn.jsx)(sn,{children:"Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1."}),Object(nn.jsx)(pn,{src:"/images/cta-logo-two.png",alt:""})]}),Object(nn.jsx)(an,{})]})})},ln=i(38),xn=i.n(ln),bn=i(48),jn=i(13),gn=i(30),hn=gn.a.initializeApp({apiKey:"AIzaSyCJDdVABtR0gSwDuOuGuxhODik21mbxevE",authDomain:"disneyplus-clone-117fe.firebaseapp.com",projectId:"disneyplus-clone-117fe",storageBucket:"disneyplus-clone-117fe.appspot.com",messagingSenderId:"287300985999",appId:"1:287300985999:web:7b126f04f5f51cd8a77cfa",measurementId:"G-G9EC20765C"}).firestore(),mn=gn.a.auth(),un=new gn.a.auth.GoogleAuthProvider,On=(gn.a.storage(),hn),fn=i(26),vn=Object(fn.b)({name:"user",initialState:{name:"",email:"",photo:""},reducers:{setUserLoginDetails:function(n,e){n.name=e.payload.name,n.email=e.payload.email,n.photo=e.payload.photo},setSignOutState:function(n){n.name=null,n.email=null,n.photo=null}}}),wn=vn.actions,yn=wn.setUserLoginDetails,kn=wn.setSignOutState,zn=function(n){return n.user.name},In=function(n){return n.user.photo},Sn=vn.reducer,En=_.a.nav(l||(l=Object(Z.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 70px;\n  background-color: #090b13;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 36px;\n  letter-spacing: 16px;\n  z-index: 3;\n"]))),Dn=_.a.a(x||(x=Object(Z.a)(["\n  padding: 0;\n  width: 80px;\n  margin-top: 4px;\n  max-height: 70px;\n  font-size: 0;\n  display: inline-block;\n  img {\n    display: block;\n    width: 100%;\n  }\n"]))),An=_.a.div(b||(b=Object(Z.a)(['\n  align-items: center;\n  display: flex;\n  flex-flow: row nowrap;\n  height: 100%;\n  justify-content: flex-end;\n  margin: 0px;\n  padding: 0px;\n  position: relative;\n  margin-right: auto;\n  margin-left: 25px;\n  a {\n    display: flex;\n    align-items: center;\n    padding: 0 12px;\n    img {\n      height: 20px;\n      min-width: 20px;\n      width: 20px;\n      z-index: auto;\n    }\n    span {\n      color: rgb(249, 249, 249);\n      font-size: 13px;\n      letter-spacing: 1.42px;\n      line-height: 1.08;\n      padding: 2px 0px;\n      white-space: nowrap;\n      position: relative;\n      &:before {\n        background-color: #0483ee;\n        border-radius: 0px 0px 4px 4px;\n        bottom: -6px;\n        content: "";\n        height: 2px;\n        left: 0px;\n        opacity: 0;\n        position: absolute;\n        right: 0px;\n        transform-origin: left center;\n        transform: scaleX(0);\n        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n        visibility: hidden;\n        width: auto;\n      }\n    }\n    &:hover {\n      span:before {\n        transform: scaleX(1);\n        visibility: visible;\n        opacity: 1 !important;\n      }\n    }\n  }\n  /* @media (max-width: 768px) {\n    display: none;\n  } */\n']))),Tn=_.a.a(j||(j=Object(Z.a)(["\n  background-color: rgba(0, 0, 0, 0.6);\n  padding: 8px 16px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  border: 1px solid #f9f9f9;\n  border-radius: 4px;\n  transition: all 0.2s ease 0s;\n  &:hover {\n    background-color: #f9f9f9;\n    color: #000;\n    border-color: transparent;\n  }\n"]))),Cn=_.a.img(g||(g=Object(Z.a)(["\n  height: 100%;\n"]))),Ln=_.a.div(h||(h=Object(Z.a)(["\n  position: absolute;\n  top: 48px;\n  right: 0px;\n  background: rgb(19, 19, 19);\n  border: 1px solid rgba(151, 151, 151, 0.34);\n  border-radius: 4px;\n  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;\n  padding: 10px;\n  font-size: 14px;\n  letter-spacing: 3px;\n  width: 100px;\n  opacity: 0;\n"]))),Rn=_.a.div(m||(m=Object(Z.a)(["\n  position: relative;\n  height: 48px;\n  width: 48px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  "," {\n    border-radius: 50%;\n    width: 100%;\n    height: 100%;\n  }\n  &:hover {\n    "," {\n      opacity: 1;\n      transition-duration: 1s;\n    }\n  }\n"])),Cn,Ln),Pn=function(n){var e=Object(jn.b)(),i=Object(Q.f)(),t=Object(jn.c)(zn),a=Object(jn.c)(In);Object(F.useEffect)((function(){mn.onAuthStateChanged(function(){var n=Object(bn.a)(xn.a.mark((function n(e){return xn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e&&(c(e),i.push("/home"));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}),[t]);var r=function(){t?t&&mn.signOut().then((function(){e(kn()),i.push("/")})).catch((function(n){return alert(n.message)})):mn.signInWithPopup(un).then((function(n){c(n.user)})).catch((function(n){alert(n.message)}))},c=function(n){e(yn({name:n.displayName,email:n.email,photo:n.photoURL}))};return Object(nn.jsxs)(En,{children:[Object(nn.jsx)(Dn,{children:Object(nn.jsx)("img",{src:"/images/logo.svg",alt:"Disney+"})}),t?Object(nn.jsxs)(nn.Fragment,{children:[Object(nn.jsxs)(An,{children:[Object(nn.jsxs)("a",{href:"/home",children:[Object(nn.jsx)("img",{src:"/images/home-icon.svg",alt:"HOME"}),Object(nn.jsx)("span",{children:"HOME"})]}),Object(nn.jsxs)("a",{children:[Object(nn.jsx)("img",{src:"/images/search-icon.svg",alt:"SEARCH"}),Object(nn.jsx)("span",{children:"SEARCH"})]}),Object(nn.jsxs)("a",{children:[Object(nn.jsx)("img",{src:"/images/watchlist-icon.svg",alt:"WATCHLIST"}),Object(nn.jsx)("span",{children:"WATCHLIST"})]}),Object(nn.jsxs)("a",{children:[Object(nn.jsx)("img",{src:"/images/original-icon.svg",alt:"ORIGINALS"}),Object(nn.jsx)("span",{children:"ORIGINALS"})]}),Object(nn.jsxs)("a",{children:[Object(nn.jsx)("img",{src:"/images/movie-icon.svg",alt:"MOVIES"}),Object(nn.jsx)("span",{children:"MOVIES"})]}),Object(nn.jsxs)("a",{children:[Object(nn.jsx)("img",{src:"/images/series-icon.svg",alt:"SERIES"}),Object(nn.jsx)("span",{children:"SERIES"})]})]}),Object(nn.jsxs)(Rn,{children:[Object(nn.jsx)(Cn,{src:a,alt:t}),Object(nn.jsx)(Ln,{children:Object(nn.jsx)("span",{onClick:r,children:"Sign out"})})]})]}):Object(nn.jsx)(Tn,{onClick:r,children:"Login"})]})},Gn=(i(66),i(23)),Hn=i(31),Mn=(i(67),i(68),i(51)),Nn=i.n(Mn),Bn=Object(_.a)(Nn.a)(u||(u=Object(Z.a)(["\n  margin-top: 20px;\n  & > button {\n    opacity: 0;\n    height: 100%;\n    width: 5vw;\n    z-index: 1;\n    &:hover {\n      opacity: 1;\n      transition: opacity 0.2s ease 0s;\n    }\n  }\n  ul li button {\n    &:before {\n      font-size: 10px;\n      color: rgb(150, 158, 171);\n    }\n  }\n  li.slick-active button:before {\n    color: white;\n  }\n  .slick-list {\n    overflow: initial;\n  }\n  .slick-prev {\n    left: -75px;\n  }\n  .slick-next {\n    right: -75px;\n  }\n"]))),Jn=_.a.div(O||(O=Object(Z.a)(["\n  border-radius: 4px;\n  cursor: pointer;\n  position: relative;\n  a {\n    border-radius: 4px;\n    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n      rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n    cursor: pointer;\n    display: block;\n    position: relative;\n    padding: 4px;\n    img {\n      width: 100%;\n      height: 100%;\n    }\n    &:hover {\n      padding: 0;\n      border: 4px solid #0483ee;\n      transition-duration: 300ms;\n    }\n  }\n"]))),Un=function(n){return Object(nn.jsxs)(Bn,Object(Gn.a)(Object(Gn.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0}),{},{children:[Object(nn.jsx)(Jn,{children:Object(nn.jsx)("a",{children:Object(nn.jsx)("img",{src:"/images/slider-badging.jpg",alt:""})})}),Object(nn.jsx)(Jn,{children:Object(nn.jsx)("a",{children:Object(nn.jsx)("img",{src:"/images/slider-scale.jpg",alt:""})})}),Object(nn.jsx)(Jn,{children:Object(nn.jsx)("a",{children:Object(nn.jsx)("img",{src:"/images/slider-badag.jpg",alt:""})})}),Object(nn.jsx)(Jn,{children:Object(nn.jsx)("a",{children:Object(nn.jsx)("img",{src:"/images/slider-scales.jpg",alt:""})})}),Object(nn.jsx)(Jn,{children:Object(nn.jsx)("a",{children:Object(nn.jsx)("img",{src:"/images/slider-manda.jpg",alt:""})})})]}))},Vn=Object(fn.b)({name:"movie",initialState:{recommend:null,newDisney:null,original:null,trending:null},reducers:{setMovies:function(n,e){n.recommend=e.payload.recommend,n.newDisney=e.payload.newDisney,n.original=e.payload.original,n.trending=e.payload.trending}}}),Wn=Vn.actions.setMovies,Xn=function(n){return n.movie.recommend},Fn=function(n){return n.movie.newDisney},Kn=function(n){return n.movie.original},Yn=function(n){return n.movie.trending},$n=Vn.reducer,qn=_.a.div(f||(f=Object(Z.a)(["\n  padding: 0 0 26px;\n"]))),Qn=_.a.div(v||(v=Object(Z.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),Zn=_.a.div(w||(w=Object(Z.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),_n=function(n){var e=Object(jn.c)(Fn);return Object(nn.jsxs)(qn,{children:[Object(nn.jsx)("h4",{children:"New to Disney+"}),Object(nn.jsx)(Qn,{children:e&&e.map((function(n,e){return Object(nn.jsxs)(Zn,{children:[n.id,Object(nn.jsx)(q.b,{to:"/detail/"+n.id,children:Object(nn.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})},ne=_.a.div(y||(y=Object(Z.a)(["\n  padding: 0 0 26px;\n"]))),ee=_.a.div(k||(k=Object(Z.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),ie=_.a.div(z||(z=Object(Z.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color:#0483ee;\n  }\n"]))),te=function(n){var e=Object(jn.c)(Kn);return Object(nn.jsxs)(ne,{children:[Object(nn.jsx)("h4",{children:"Originals"}),Object(nn.jsx)(ee,{children:e&&e.map((function(n,e){return Object(nn.jsxs)(ie,{children:[n.id,Object(nn.jsx)(q.b,{to:"/detail/"+n.id,children:Object(nn.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})},ae=_.a.div(I||(I=Object(Z.a)(["\n  padding: 0 0 26px;\n"]))),re=_.a.div(S||(S=Object(Z.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),ce=_.a.div(E||(E=Object(Z.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color:#0483ee;\n  }\n"]))),oe=function(n){var e=Object(jn.c)(Xn);return console.log(e,":\ud83d\udee2\ufe0f"),Object(nn.jsxs)(ae,{children:[Object(nn.jsx)("h4",{children:"Recommended for You"}),Object(nn.jsx)(re,{children:e&&e.map((function(n,e){return Object(nn.jsxs)(ce,{children:[n.id,Object(nn.jsx)(q.b,{to:"/detail/"+n.id,children:Object(nn.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})},se=_.a.div(D||(D=Object(Z.a)(["\n  padding: 0 0 26px;\n"]))),pe=_.a.div(A||(A=Object(Z.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),de=_.a.div(T||(T=Object(Z.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color:#0483ee;\n  }\n"]))),le=function(n){var e=Object(jn.c)(Yn);return Object(nn.jsxs)(se,{children:[Object(nn.jsx)("h4",{children:"Trending"}),Object(nn.jsx)(pe,{children:e&&e.map((function(n,e){return Object(nn.jsxs)(de,{children:[n.id,Object(nn.jsx)(q.b,{to:"/detail/"+n.id,children:Object(nn.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})},xe=_.a.div(C||(C=Object(Z.a)(["\n  margin-top: 30px;\n  padding: 30px 0px 26px;\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n"]))),be=_.a.div(L||(L=Object(Z.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 100ms;\n  border: 2px solid rgba(249, 249, 249, 0.1);\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  video {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0px;\n    opacity: 0.12;\n    z-index: 0;\n    transition: opacity 350ms ease-in-out 0s;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.07);\n    border-color: #0483ee;\n    video {\n      opacity: 1;\n    }\n  }\n"]))),je=function(n){return Object(nn.jsxs)(xe,{children:[Object(nn.jsxs)(be,{children:[Object(nn.jsx)("img",{src:"/images/viewers-disney.png",alt:""}),Object(nn.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,muted:!0,children:Object(nn.jsx)("source",{src:"/videos/1564674844-disney.mp4",type:"video/mp4"})})]}),Object(nn.jsxs)(be,{children:[Object(nn.jsx)("img",{src:"/images/viewers-pixar.png",alt:""}),Object(nn.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,muted:!0,children:Object(nn.jsx)("source",{src:"/videos/1564676714-pixar.mp4",type:"video/mp4"})})]}),Object(nn.jsxs)(be,{children:[Object(nn.jsx)("img",{src:"/images/viewers-marvel.png",alt:""}),Object(nn.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,muted:!0,children:Object(nn.jsx)("source",{src:"/videos/1564676115-marvel.mp4",type:"video/mp4"})})]}),Object(nn.jsxs)(be,{children:[Object(nn.jsx)("img",{src:"/images/viewers-starwars.png",alt:""}),Object(nn.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,muted:!0,children:Object(nn.jsx)("source",{src:"/videos/1608229455-star-wars.mp4",type:"video/mp4"})})]}),Object(nn.jsxs)(be,{children:[Object(nn.jsx)("img",{src:"/images/viewers-national.png",alt:""}),Object(nn.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,muted:!0,children:Object(nn.jsx)("source",{src:"/videos/1564676296-national-geographic.mp4",type:"video/mp4"})})]})]})},ge=_.a.main(R||(R=Object(Z.a)(['\n  position: relative;\n  min-height: calc(100vh - 250px);\n  overflow-x: hidden;\n  display: block;\n  top: 72px;\n  padding: 0 calc(3.5vw + 5px);\n  &:after {\n    background: url("/images/home-background.png") center center / cover\n      no-repeat fixed;\n    content: "";\n    position: absolute;\n    inset: 0px;\n    opacity: 1;\n    z-index: -1;\n  }\n']))),he=function(n){var e=Object(jn.b)(),i=Object(jn.c)(zn),t=[],a=[],r=[],c=[];return Object(F.useEffect)((function(){console.log("hello"),On.collection("movies").onSnapshot((function(n){n.docs.map((function(n){switch(console.log(t),n.data().type){case"recommend":t=[].concat(Object(Hn.a)(t),[Object(Gn.a)({id:n.id},n.data())]);break;case"new":a=[].concat(Object(Hn.a)(a),[Object(Gn.a)({id:n.id},n.data())]);break;case"original":r=[].concat(Object(Hn.a)(r),[Object(Gn.a)({id:n.id},n.data())]);break;case"trending":c=[].concat(Object(Hn.a)(c),[Object(Gn.a)({id:n.id},n.data())])}})),e(Wn({recommend:t,newDisney:a,original:r,trending:c}))}))}),[i]),Object(nn.jsxs)(ge,{children:[Object(nn.jsx)(Un,{}),Object(nn.jsx)(je,{}),Object(nn.jsx)(oe,{}),Object(nn.jsx)(_n,{}),Object(nn.jsx)(te,{}),Object(nn.jsx)(le,{})]})},me=i(52),ue=_.a.div(P||(P=Object(Z.a)(["\n  position: relative;\n  min-height: calc(100vh-250px);\n  overflow-x: hidden;\n  display: block;\n  top: 72px;\n  padding: 0 calc(3.5vw + 5px);\n"]))),Oe=_.a.div(G||(G=Object(Z.a)(["\n  left: 0px;\n  opacity: 0.8;\n  position: fixed;\n  right: 0px;\n  top: 0px;\n  z-index: -1;\n  img {\n    width: 100vw;\n    height: 100vh;\n    @media (max-width: 768px) {\n      width: initial;\n    }\n  }\n"]))),fe=_.a.div(H||(H=Object(Z.a)(["\n  align-items: flex-end;\n  display: flex;\n  -webkit-box-pack: start;\n  justify-content: flex-start;\n  margin: 0px auto;\n  height: 30vw;\n  min-height: 170px;\n  padding-bottom: 24px;\n  width: 100%;\n  img {\n    max-width: 600px;\n    min-width: 200px;\n    width: 35vw;\n  }\n"]))),ve=_.a.div(M||(M=Object(Z.a)(["\n  max-width: 874px;\n"]))),we=_.a.div(N||(N=Object(Z.a)(["\n  align-items: center;\n  display: flex;\n  flex-flow: row nowrap;\n  margin: 24px 0px;\n  min-height: 56px;\n"]))),ye=_.a.button(B||(B=Object(Z.a)(["\n  font-size: 15px;\n  margin: 0px 22px 0px 0px;\n  padding: 0px 24px;\n  height: 56px;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  letter-spacing: 1.8px;\n  text-align: center;\n  text-transform: uppercase;\n  background: rgb (249, 249, 249);\n  border: none;\n  color: rgb(0, 0, 0);\n  img {\n    width: 32px;\n  }\n  &:hover {\n    background: rgb(198, 198, 198);\n  }\n  @media (max-width: 768px) {\n    height: 45px;\n    padding: 0px 12px;\n    font-size: 12px;\n    margin: 0px 10px 0px 0px;\n    img {\n      width: 25px;\n    }\n  }\n"]))),ke=Object(_.a)(ye)(J||(J=Object(Z.a)(["\n  background: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgb(249, 249, 249);\n  color: rgb(249, 249, 249);\n"]))),ze=_.a.div(U||(U=Object(Z.a)(["\n  margin-right: 16px;\n  height: 44px;\n  width: 44px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 50%;\n  border: 2px solid white;\n  cursor: pointer;\n  span {\n    background-color: rgb(249, 249, 249);\n    display: inline-block;\n    &:first-child {\n      height: 2px;\n      transform: translate(1px, 0px) rotate(0deg);\n      width: 16px;\n    }\n    &:nth-child(2) {\n      height: 16px;\n      transform: translateX(-8px) rotate(0deg);\n      width: 2px;\n    }\n  }\n"]))),Ie=_.a.div(V||(V=Object(Z.a)(["\n  height: 44px;\n  width: 44px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background: white;\n  div {\n    height: 40px;\n    width: 40px;\n    background: rgb(0, 0, 0);\n    border-radius: 50%;\n    img {\n      width: 100%;\n    }\n  }\n"]))),Se=_.a.div(W||(W=Object(Z.a)(["\n  color: rgb(249, 249, 249);\n  font-size: 15px;\n  min-height: 20px;\n  @media (max-width: 768px) {\n    font-size: 12px;\n  }\n"]))),Ee=_.a.div(X||(X=Object(Z.a)(["\n  line-height: 1.4;\n  font-size: 20px;\n  padding: 16px 0px;\n  color: rgb(249, 249, 249);\n  @media (max-width: 768px) {\n    font-size: 14px;\n  }\n"]))),De=function(n){var e=Object(Q.g)().id,i=Object(F.useState)({}),t=Object(me.a)(i,2),a=t[0],r=t[1];return Object(F.useEffect)((function(){On.collection("movies").doc(e).get().then((function(n){n.exists?r(n.data()):console.log("no such document in firebase \ud83d\udd25")})).catch((function(n){console.log("Error getting document:",n)}))}),[e]),Object(nn.jsxs)(ue,{children:[Object(nn.jsx)(Oe,{children:Object(nn.jsx)("img",{alt:a.title,src:a.backgroundImg})}),Object(nn.jsx)(fe,{children:Object(nn.jsx)("img",{alt:a.title,src:a.titleImg})}),Object(nn.jsxs)(ve,{children:[Object(nn.jsxs)(we,{children:[Object(nn.jsxs)(ye,{children:[Object(nn.jsx)("img",{src:"/images/play-icon-black.png",alt:""}),Object(nn.jsx)("span",{children:"Play"})]}),Object(nn.jsxs)(ke,{children:[Object(nn.jsx)("img",{src:"/images/play-icon-white.png",alt:""}),Object(nn.jsx)("span",{children:"Trailer"})]}),Object(nn.jsxs)(ze,{children:[Object(nn.jsx)("span",{}),Object(nn.jsx)("span",{})]}),Object(nn.jsx)(Ie,{children:Object(nn.jsx)("div",{children:Object(nn.jsx)("img",{src:"/images/group-icon.png",alt:""})})})]}),Object(nn.jsx)(Se,{children:a.subTitle}),Object(nn.jsx)(Ee,{children:a.description})]})]})};var Ae=function(){return Object(nn.jsx)("div",{className:"App",children:Object(nn.jsxs)(q.a,{children:[Object(nn.jsx)(Pn,{}),Object(nn.jsxs)(Q.c,{children:[Object(nn.jsx)(Q.a,{exact:!0,path:"/",children:Object(nn.jsx)(dn,{})}),Object(nn.jsx)(Q.a,{path:"/home",children:Object(nn.jsx)(he,{})}),Object(nn.jsx)(Q.a,{path:"/detail/:id",children:Object(nn.jsx)(De,{})})]})]})})},Te=Object(fn.a)({reducer:{user:Sn,movie:$n},middleware:Object(fn.c)({serializableCheck:!1})});$.a.render(Object(nn.jsx)(K.a.StrictMode,{children:Object(nn.jsx)(jn.a,{store:Te,children:Object(nn.jsx)(Ae,{})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.21a54144.chunk.js.map