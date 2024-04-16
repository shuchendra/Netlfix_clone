(this.webpackJsonpnetflixclone=this.webpackJsonpnetflixclone||[]).push([[0],{38:function(e,t,a){e.exports=a(77)},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},57:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(29),r=a(16),o=a(20);const i=Object(o.b)({name:"user",initialState:{user:null,status:"idle"},reducers:{login:(e,t)=>{e.user=t.payload},logout:e=>{e.user=null}}}),{login:s,logout:m}=i.actions,u=e=>e.user.user;var d=i.reducer;const p=Object(o.a)({reducer:{user:d}});a(50),a(51),a(52);var E=a(4);var f=function(){const[e,t]=Object(n.useState)(!1),a=Object(E.p)(),c=()=>{window.scrollY>100?t(!0):t(!1)};return Object(n.useEffect)(()=>(window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)),[]),l.a.createElement("div",{className:"nav ".concat(e&&"nav__black")},l.a.createElement("div",{className:"nav__contents"},l.a.createElement("img",{onClick:()=>a("/"),className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png",alt:""}),l.a.createElement("img",{onClick:()=>a("/profile"),className:"nav__avatar",src:"https://i.pinimg.com/originals/5b/50/e7/5b50e75d07c726d36f397f6359098f58.png",alt:""})))};a(53);var g=a(79).a.create({baseURL:"https://api.themoviedb.org/3"});const v="54414a1a9cfa94eaa9fdf4b95d952607";var h={fetchTrending:"/trending/all/week?api_key=".concat(v,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(v,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(v,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(v,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(v,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(v,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(v,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(v,"&with_genres=99")};var b=function(){const[e,t]=Object(n.useState)([]);return Object(n.useEffect)(()=>{!async function(){const e=await g.get(h.fetchNetflixOriginals);t(e.data.results[Math.floor(Math.random()*e.data.results.length-1)])}()},[]),console.log(e),l.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===e||void 0===e?void 0:e.backdrop_path,'")'),backgroundPosition:"center center",backgroundRepeat:"no-repeat"}},l.a.createElement("div",{className:"banner__contents"},l.a.createElement("h1",{className:"banner__title"},(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.original_name)),l.a.createElement("div",{className:"banner__buttons"},l.a.createElement("button",{className:"banner__button"},"Play"),l.a.createElement("button",{className:"banner__button"},"My List")),l.a.createElement("h1",{className:"banner__description"},(a=null===e||void 0===e?void 0:e.overview,c=150,(null===a||void 0===a?void 0:a.length)>c?a.substr(0,c-1)+"...":a))),l.a.createElement("div",{className:"banner--fadeBottom"}));var a,c},_=(a(57),a(33)),N=a(32),S=a.n(N);var w=function(e){let{title:t,fetchUrl:a,isLargeRow:c=!1}=e;const[r,o]=Object(n.useState)([]),[i,s]=Object(n.useState)("");return Object(n.useEffect)(()=>{!async function(){const e=await g.get(a);o(e.data.results)}()},[a]),l.a.createElement("div",{className:"row"},l.a.createElement("h2",null,t),l.a.createElement("div",{className:"row__posters"},r.map(e=>(c&&e.poster_path||!c&&e.backdrop_path)&&l.a.createElement("img",{className:"row__poster ".concat(c&&"row__posterLarge"),key:e.id,onClick:()=>(e=>{if(i)s("");else{const t=e.title||e.name||"";S()(t).then(e=>{const t=new URLSearchParams(new URL(e).search);s(t.get("v"))}).catch(e=>{console.error("Error fetching trailer:",e),s("")})}})(e),src:"".concat("https://image.tmdb.org/t/p/original/").concat(c?e.poster_path:e.backdrop_path),alt:e.name}))),i&&l.a.createElement(_.a,{videoId:i,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}))};var k=function(){return l.a.createElement("div",{className:"homeScreen"},l.a.createElement(f,null),l.a.createElement(b,null),l.a.createElement(w,{title:"NETFLIX ORIGINALS",fetchUrl:h.fetchNetflixOriginals,isLargeRow:!0}),l.a.createElement(w,{title:"Trending Now",fetchUrl:h.fetchTrending}),l.a.createElement(w,{title:"Top Rated",fetchUrl:h.fetchTopRated}),l.a.createElement(w,{title:"Action Movies",fetchUrl:h.fetchNetflixOriginals}),l.a.createElement(w,{title:"Comedy Movies",fetchUrl:h.fetchComedyMovies}),l.a.createElement(w,{title:"Horror Movies",fetchUrl:h.fetchHorrorMovies}),l.a.createElement(w,{title:"Romance Movies",fetchUrl:h.fetchRomanceMovies}),l.a.createElement(w,{title:"Documentries",fetchUrl:h.fetchDocumentaries}))},y=(a(73),a(36)),O=a(37),j=a(19);const R=Object(y.a)({apiKey:"AIzaSyBmEL3cFVS8L9jDvDyp1r1ojtnbW5pkW3M",authDomain:"netflix-clone-3f3d8.firebaseapp.com",projectId:"netflix-clone-3f3d8",storageBucket:"netflix-clone-3f3d8.appspot.com",messagingSenderId:"637428440721",appId:"1:637428440721:web:8ffaeacb851f6d51f92930",measurementId:"G-LB9JQG5ZDP"}),L=(Object(O.a)(R),Object(j.b)(R));a(74);var M=function(){const e=Object(n.useRef)(null),t=Object(n.useRef)(null);return l.a.createElement("div",{className:"signupScreen"},l.a.createElement("form",null,l.a.createElement("h1",null,"Sign In"),l.a.createElement("input",{ref:e,placeholder:"Email",type:"email"}),l.a.createElement("input",{ref:t,placeholder:"Password",type:"password"}),l.a.createElement("button",{type:"submit",onClick:a=>{a.preventDefault(),Object(j.c)(L,e.current.value,t.current.value).then(e=>{console.log(e)}).catch(e=>alert(e.message))}},"Sign In"),l.a.createElement("h4",null,l.a.createElement("span",{className:"signupScreen__gray"},"New to Netflix? "),l.a.createElement("span",{className:"signupScreen__link",onClick:a=>{a.preventDefault(),Object(j.a)(L,e.current.value,t.current.value).then(e=>{console.log(e)}).catch(e=>{alert(e.message)})}},"Sign Up "))))};var U=function(){const[e,t]=Object(n.useState)(!1);return l.a.createElement("div",{className:"loginScreen"},l.a.createElement("div",{className:"loginScreen__background"},l.a.createElement("img",{className:"loginScreen__logo",src:"https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png",alt:""}),l.a.createElement("button",{onClick:()=>t(!0),className:"loginScreen__button"},"Sign In"),l.a.createElement("div",{className:"loginScreen__gradient"})),l.a.createElement("div",{className:"loginScreen__body"},e?l.a.createElement(M,null):l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Unlimited films, TV programmes and more."),l.a.createElement("h2",null,"Watch anywhere. Cancel at any time."),l.a.createElement("h3",null,"Ready to watch? Enter your email to create or restart your membership."),l.a.createElement("div",{className:"loginScreen__input"},l.a.createElement("form",null,l.a.createElement("input",{type:"email",placeholder:"Email Address"}),l.a.createElement("button",{onClick:()=>t(!0),className:"loginScreen__getstarted"},"GET STARTED"))))))};a(75);var C=function(){const e=Object(r.c)(u);return l.a.createElement("div",{className:"profileScreen"},l.a.createElement(f,null),l.a.createElement("div",{className:"profileScreen__body"},l.a.createElement("h1",null,"Edit Profile"),l.a.createElement("div",{className:"profileScreen__info"},l.a.createElement("img",{src:"https://i.pinimg.com/originals/5b/50/e7/5b50e75d07c726d36f397f6359098f58.png",alt:""}),l.a.createElement("div",{className:"profileScreen__details"},l.a.createElement("h2",null,e.email),l.a.createElement("div",{className:"profileScreen__plans"},l.a.createElement("h3",null,"Plans"),l.a.createElement("div",{className:"plancontainer"},l.a.createElement("div",{className:"planinfo"},l.a.createElement("h5",null,"Premium"),l.a.createElement("h6",null,"Ultra HD (4K) and HDR")),l.a.createElement("button",null,"Subscribe")),l.a.createElement("div",{className:"plancontainer"},l.a.createElement("div",{className:"planinfo"},l.a.createElement("h5",null,"Standard"),l.a.createElement("h6",null,"Full HD (1080p)")),l.a.createElement("button",null,"Subscribe")),l.a.createElement("div",{className:"plancontainer"},l.a.createElement("div",{className:"planinfo"},l.a.createElement("h5",null,"Basic"),l.a.createElement("h6",null,"HD (720p)")),l.a.createElement("button",null,"Subscribe")),l.a.createElement("div",{className:"plancontainer"},l.a.createElement("div",{className:"planinfo"},l.a.createElement("h5",null,"Mobile"),l.a.createElement("h6",null,"SD (480p)")),l.a.createElement("button",null,"Subscribe")),l.a.createElement("button",{onClick:()=>L.signOut(),className:"profileScreen__signOut"},"Sign Out"))))))},D=a(24);var I=function(){const e=Object(r.c)(u),t=Object(r.b)();return Object(n.useEffect)(()=>{const e=L.onAuthStateChanged(e=>{t(e?s({uid:e.uid,email:e.email}):m())});return()=>e},[t]),l.a.createElement("div",{className:"app"},l.a.createElement(D.a,null,l.a.createElement(E.d,null,l.a.createElement(E.b,{path:"/",element:e?l.a.createElement(k,null):l.a.createElement(U,null)}),l.a.createElement(E.b,{path:"/profile",element:e?l.a.createElement(C,null):l.a.createElement(E.a,{to:"/"})}),l.a.createElement(E.b,{path:"*",element:l.a.createElement(E.a,{to:"/"})}))))};var x=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,80)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:c,getTTFB:r}=t;a(e),n(e),l(e),c(e),r(e)})};a(76);const T=document.getElementById("root");Object(c.createRoot)(T).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(r.a,{store:p},l.a.createElement(I,null)))),x()}},[[38,1,2]]]);
//# sourceMappingURL=main.0b281b0f.chunk.js.map