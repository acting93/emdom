(this.webpackJsonpemdom=this.webpackJsonpemdom||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/kask.1346691a.png"},,function(e,a,t){},,,function(e){e.exports=JSON.parse('{"uslugi":[{"id":0,"name":"Szkolenia wst\u0119pne BHP","prize":"60,00 PLN brutto"},{"id":1,"name":"Szkolenia okresowe BHP dla pracownik\xf3w","prize":"100,00 PLN brutto"},{"id":2,"name":"Szkolenia okresowe BHP dla os\xf3b kieruj\u0105cych i pracodawc\xf3w","prize":"120,00 PLN brutto"},{"id":3,"name":"Szkolenia Ppo\u017c.","prize":"40,00 PLN brutto"},{"id":4,"name":"Opracowanie oceny ryzyka zawodowego","prize":"150,00 PLN netto"},{"id":5,"name":"Przeprowadzanie kontroli warunk\xf3w pracy oraz przestrzegania zasad bezpiecze\u0144stwa i higieny pracy przez pracownik\xf3w","prize":"do uzgodnienia"},{"id":6,"name":"Pomoc i przygotowanie odpowiedzi na nakazy i wyst\u0105pienia inspektor\xf3w Pa\u0144stwowej Inspekcji Pracy \u2013 realizacja zalece\u0144 pokontrolnych","prize":"do uzgodnienia"},{"id":7,"name":"Opracowanie dokumentacji zwi\u0105zanej z wypadkami przy pracy \u2013 od 200,00 do 500,00 PLN netto (cena zale\u017cy od wypadku)","prize":"od 200,00 do 500,00 PLN netto (cena zale\u017cy od wypadku)"},{"id":8,"name":"Tworzenie instrukcji BHP i Ppo\u017c.","prize":"od 15,00 PLN netto"},{"id":9,"name":"Tworzenie Instrukcji Bezpiecze\u0144stwa Po\u017carowego","prize":"od 450,00 PLN netto"},{"id":10,"name":"Doradztwo z zakresu ppo\u017c.","prize":"od 150,00 PLN netto"},{"id":11,"name":"kontrola dora\u017ana i okresowa","prize":"od 50,00 PLN netto"},{"id":12,"name":"ocena i analiza stanu BHP","prize":"od 150,00 PLN netto"},{"id":13,"name":"Nadz\xf3r nad w\u0142a\u015bciwym oznakowaniem obiekt\xf3w w zakresie BHP i PPO\u017b","prize":"do uzgodnienia"},{"id":14,"name":"Prowadzenie dokumentacji pracowniczych w zakresie kart ubraniowych pracownik\xf3w i kart \u015brodk\xf3w ochrony indywidualnej, tworzenie tabel przydzia\u0142u odzie\u017cy roboczej, obuwia i \u015brodk\xf3w ochrony indywidualnej","prize":"do uzgodnienia"},{"id":15,"name":"Doradztwo w zakresie odzie\u017cy, obuwia roboczego i \u015brodk\xf3w ochrony indywidualnej oraz zbiorowej","prize":"cena do uzgodnienia"},{"id":16,"name":"Tworzenie akt\xf3w wewn\u0119trznych w zakresie BHP i PPO\u017b.","prize":"cena do uzgodnienia"},{"id":17,"name":"Tworzenie list kontrolnych stanu BHP i PPO\u017b","prize":"cena do uzgodnienia"}],"firm":[{"id":0,"name":"do 20 pracownik\xf3w","prize":"od 700,00 PLN"},{"id":1,"name":"21 \u2013 50 pracownik\xf3w","prize":"od 850,00 PLN "},{"id":2,"name":"51 \u2013 100 pracownik\xf3w ","prize":"od 1000,00 PLN "},{"id":4,"name":"powy\u017cej 100 pracownik\xf3w","prize":"od 1150,00 PLN "}]}')},,function(e,a,t){},,,,,function(e,a,t){e.exports=t.p+"static/media/bg2.284cbb46.jpg"},function(e,a,t){e.exports=t.p+"static/media/bg.4883fed1.jpg"},,function(e,a,t){e.exports=t(48)},,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(25),c=t.n(l),o=(t(36),t(5)),r=t(6),s=t(8),m=t(7),u=t(9),d=t(11),p=(t(37),t(4)),h=(t(23),t(16)),z=t.n(h),E=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={active:!1,position:!1},t.handleActive=t.handleActive.bind(Object(p.a)(t)),t.handleMenuWidth=t.handleMenuWidth.bind(Object(p.a)(t)),t.handleSticky=t.handleSticky.bind(Object(p.a)(t)),t.refMenu=i.a.createRef(),t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"handleActive",value:function(){this.setState({active:!this.state.active,isOn:!0})}},{key:"handleMenuWidth",value:function(){window.innerWidth<767?this.setState({active:!1}):this.setState({active:!0})}},{key:"handleSticky",value:function(){var e=window.pageYOffset,a=this.refMenu.current.offsetTop;console.log("pozycjamenu "+a),e>a?this.setState({position:!0}):this.setState({position:!1})}},{key:"componentDidMount",value:function(){this.handleMenuWidth.bind(this),this.handleSticky.bind(this),window.addEventListener("resize",this.handleMenuWidth.bind(this)),window.addEventListener("scroll",this.handleSticky.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleMenuWidth.bind(this))}},{key:"render",value:function(){var e=this.state,a=e.active;e.isOn;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{ref:this.refMenu,className:"nav-container col-12",style:this.state.position?{background:"black",width:"100%",position:"fixed",zIndex:"300"}:null},i.a.createElement("div",{className:"menu-logo"},i.a.createElement("img",{src:z.a,alt:"logo",style:{width:"100%",height:"100%"}})),i.a.createElement("div",{className:"menu"},i.a.createElement("button",{className:"navbar-btn",onClick:this.handleActive},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null)),i.a.createElement("div",{className:"contact-container"},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null)),i.a.createElement("ul",{style:1==a?{display:"flex"}:null},i.a.createElement("li",null,i.a.createElement(d.b,{exact:!0,to:"/",onClick:this.handleActive,activeClassName:"active"},i.a.createElement("i",{className:"fas fa-home li-icon"}),"Strona G\u0142\xf3wna")),i.a.createElement("li",null,i.a.createElement(d.b,{to:"/services",onClick:this.handleActive,activeClassName:"active"},i.a.createElement("i",{className:"fas fa-hard-hat li-icon"}),"Us\u0142ugi")),i.a.createElement("li",null,i.a.createElement(d.b,{to:"/prize",onClick:this.handleActive,activeClassName:"active"},i.a.createElement("i",{className:"fas fa-euro-sign li-icon"}),"Cennik")),i.a.createElement("li",null,i.a.createElement(d.b,{to:"/contact",onClick:this.handleActive,activeClassName:"active"},i.a.createElement("i",{className:"fas fa-mobile li-icon"}),"Kontakt"))))))}}]),a}(i.a.Component),v=t(12),w=(t(43),t(28)),f=t.n(w),b=t(29),k=t.n(b),y=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"homepage"},i.a.createElement("span",null,"Us\u0142ugi BHP i PPO\u017b"),i.a.createElement("br",null),i.a.createElement("span",null,"Bezpiecze\u0144stwo i ochrona pracy")),i.a.createElement("section",{className:"container-homepage col-12"},i.a.createElement("div",{className:"homepage-info col-xl-10"},i.a.createElement("div",{className:"info-photo col-12 col-md-6"},i.a.createElement("img",{src:f.a,alt:"img1"})),i.a.createElement("div",{className:"info col-12 col-md-6"},i.a.createElement("span",{className:"span-title"},"Czym si\u0119 zajmujemy"),i.a.createElement("span",{className:"span-description"},"Firma \u015bwiadczy us\u0142ugi BHP na najwy\u017cszym poziomie, z pe\u0142nym zaanga\u017cowaniem, na bie\u017c\u0105co szkoli w zakresie zarz\u0105dzania bezpiecze\u0144stwem i higien\u0105 pracy. Standardem jest zadowolenie pracownik\xf3w i pracodawc\xf3w z przeprowadzonych szkole\u0144. Stosuje jasne i zrozumia\u0142e, a zarazem skuteczne rozwi\u0105zania z zakresu bezpiecze\u0144stwa pracy zgodnie z polskim prawodawstwem. Us\u0142ugi \u015bwiadczy dora\u017anie wedle potrzeb lub poprzez umow\u0119 wsp\xf3\u0142pracy.")))),i.a.createElement("section",{className:"container-homepage col-12"},i.a.createElement("div",{className:"homepage-info col-xl-10"},i.a.createElement("div",{className:"info col-12 col-md-6"},i.a.createElement("span",{className:"span-title"},"Firma Emdom-BHP realizuje:"),i.a.createElement("span",{className:"span-description"},i.a.createElement("ul",null,i.a.createElement("li",null,"wdra\u017canie system\xf3w bezpiecze\u0144stwa"),i.a.createElement("li",null,"przeprowadzanie kontroli stanu urz\u0105dze\u0144 technicznych BHP i PPO\u017b"),i.a.createElement("li",null,"zarz\u0105dzanie bezpiecze\u0144stwem i ochron\u0105 pracy wykorzystuj\u0105c najnowsze technologie i rozwi\u0105zania techniczne."),i.a.createElement("li",null,"dobieranie odpowiednich rozwi\u0105za\u0144 dla obni\u017cenia koszt\xf3w w firmie, a tym samym zwi\u0119kszenie wydajno\u015bci.")))),i.a.createElement("div",{className:"info-photo col-12 col-md-6"},i.a.createElement("img",{src:k.a,alt:"img2"})))),i.a.createElement("section",{className:"container-homepage col-12"},i.a.createElement("div",{className:"homepage-info"},i.a.createElement("div",{className:"info-photo"}),i.a.createElement("div",{className:"info"}))))}}]),a}(n.Component),g=function(){return i.a.createElement(i.a.Fragment,null,"w budowie")},N=t(15),j=(t(18),t(21)),O=function(e){var a=e.name,t=e.prize;return i.a.createElement(i.a.Fragment,null,i.a.createElement("li",null,i.a.createElement("span",null,a,i.a.createElement("br",null)),i.a.createElement("span",{style:{color:"green"}},"Cena: ",t)))},P=function(e){var a=e.value.map((function(e){return i.a.createElement(O,{key:e.id,name:e.name,prize:e.prize})}));return console.log(a),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"services"},i.a.createElement("ul",null,a)))},C=function(e){var a=e.name,t=e.prize;return i.a.createElement("div",{className:"prize-firm"},i.a.createElement("div",{className:"prize-employee"},i.a.createElement("span",{className:"name-prize"},"Zatrudnienie: ",i.a.createElement("br",null),a),i.a.createElement("br",null)),i.a.createElement("div",{className:"prize-prize"},i.a.createElement("span",{className:"prize"},"Cena: ",t)))},S=function(e){var a=e.value.map((function(e){return i.a.createElement(C,{key:e.id,name:e.name,prize:e.prize})}));return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"firm-container"},a))},x=function(){var e=Object(n.useState)(j.uslugi),a=Object(N.a)(e,2),t=a[0],l=(a[1],Object(n.useState)(!0)),c=Object(N.a)(l,2),o=c[0],r=c[1],s=Object(n.useState)(j.firm),m=Object(N.a)(s,2),u=m[0],d=(m[1],Object(n.useState)(!1)),p=Object(N.a)(d,2),h=p[0],z=p[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"photo-header"},i.a.createElement("div",{className:"prize-header"},"Cennik us\u0142ug"),i.a.createElement("div",{className:"prize-services"},i.a.createElement("div",{style:o?{borderBottom:"5px solid orange"}:null,className:"prize-service",onClick:function(){r(!0),z(!1)}},"Us\u0142ugi"),i.a.createElement("div",{style:h?{borderBottom:"5px solid orange"}:null,className:"prize-service",onClick:function(){r(!1),z(!0)}},"Obs\u0142uga firm"),i.a.createElement("div",{className:"prize-service"},"XXX"))),i.a.createElement("section",{className:"section-prize col-12"},i.a.createElement("div",{className:"prize-container col-12 col-xl-10"},i.a.createElement("span",{className:"service-title"},"Zakres i cennik \u015bwiadczonych us\u0142ug:"),o?i.a.createElement(P,{value:t}):null,h?i.a.createElement(S,{value:u}):null)))},M=t(30),B=(t(44),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).interval="",t.start=function(){t.interval=setInterval((function(){t.hideElement()}),1e3),console.log("dzia\u0142a")},t.state={subject:"",phone:"",mail:"",text:"",count:3,stopInterval:!1,errors:{subject:!1,phone:!1,mail:!1,text:!1},sent:!1},t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(t)),t.validation=t.validation.bind(Object(p.a)(t)),t.hideElement=t.hideElement.bind(Object(p.a)(t)),t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"handleChange",value:function(e){var a=e.target.name;this.setState(Object(M.a)({},a,e.target.value))}},{key:"hideElement",value:function(){!0===this.state.sent&&(this.setState((function(e){return{count:e.count+=-1}})),this.state.count<0&&(this.setState({sent:!1,count:3}),clearInterval(this.interval)))}},{key:"handleSubmit",value:function(e){e.preventDefault();var a=this.validation();a.validate?(this.start(),this.setState({sent:!0,subject:"",phone:"",mail:"",text:"",errors:{subject:!1,phone:!1,mail:!1,text:!1}})):this.setState({errors:{subject:!a.subject,phone:!a.phone,mail:!a.mail,text:!a.text}})}},{key:"validation",value:function(){var e=!1,a=!1,t=!1,n=!1,i=!1;return this.state.subject.length>5&&(e=!0),this.state.phone.length>8&&(a=!0),-1!==this.state.mail.indexOf("@")&&(t=!0),this.state.text.length>10&&(n=!0),e&&a&&t&&n&&(i=!0),{subject:e,phone:a,mail:t,text:n,validate:i}}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"contact-content col-12"},i.a.createElement("div",{className:"contact-background col-12 col-xl-10"},i.a.createElement("div",{className:"contact-header"},i.a.createElement("p",null,"Kontakt")),i.a.createElement("div",{className:"form-adress"},i.a.createElement("div",{className:"form-contact",style:!0===this.state.sent?{display:"none"}:{display:"block"}},i.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0},i.a.createElement("input",{type:"text",value:this.state.subject,name:"subject",onChange:this.handleChange,placeholder:"temat conajmniej 3 znaki"}),this.state.errors.subject?i.a.createElement("p",null,"Temat zbyt kr\xf3tki"):null,i.a.createElement("input",{type:"number",value:this.state.phone,name:"phone",onChange:this.handleChange,placeholder:"telefon"}),this.state.errors.phone?i.a.createElement("p",null,"Number zbyt kr\xf3tki"):null,i.a.createElement("input",{type:"text",value:this.state.mail,name:"mail",onChange:this.handleChange,placeholder:"mail"}),this.state.errors.mail?i.a.createElement("p",null,"Brak @"):null,i.a.createElement("textarea",{type:"text",value:this.state.text,name:"text",onChange:this.handleChange,placeholder:"wiadomo\u015b\u0107"}),this.state.errors.text?i.a.createElement("p",null,"Wiadomo\u015b\u0107 za kr\xf3tka"):null,i.a.createElement("button",{onClick:this.handleSubmit},"Wy\u015blij"))),i.a.createElement("div",{className:"info-sent",style:!0===this.state.sent?{display:"block"}:{display:"none"}},i.a.createElement("div",{className:"icon-sent"},i.a.createElement("i",{className:"fa fa-check ok-icon","aria-hidden":"true"})),i.a.createElement("p",null,"Formularz zosta\u0142 wys\u0142any, dzi\u0119kujemy za kontakt.")),i.a.createElement("div",{className:"adress"},i.a.createElement("p",null,"Us\u0142ugi BHP i PPO\u017b"),i.a.createElement("p",null,"EMIL DOMAGA\u0141A EMDOM-BHP"),i.a.createElement("p",null,"Adres: 26-640 Choment\xf3w-Puszcz, Mazowieckie"),i.a.createElement("p",null,"Tel. 123-456-789"),i.a.createElement("p",null,'Adres e-mail: EMIL DOMAGA\u0141A "EMDOM-BHP"'))))))}}]),a}(n.Component)),L=(t(45),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"section-content col-12"},i.a.createElement(v.c,null,i.a.createElement(v.a,{exact:!0,path:"/",component:y}),i.a.createElement(v.a,{path:"/services",component:g}),i.a.createElement(v.a,{path:"/prize",component:x}),i.a.createElement(v.a,{path:"/contact",component:B}))))}}]),a}(n.Component)),A=(t(46),function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("footer",{className:"footer col-12"},i.a.createElement("div",{className:"footer-content col-12 col-xl-10"},i.a.createElement("div",{className:"footer-logo"},i.a.createElement("img",{src:z.a,alt:"footer-logo"})),i.a.createElement("div",{className:"footer-contact"},i.a.createElement("div",{className:"footer-img"},i.a.createElement("i",{className:"fas fa-home footer-icon"}),i.a.createElement("span",{className:"footer-info"},'EMIL DOMAGA\u0141A "EMDOM-BHP')),i.a.createElement("div",{className:"footer-img"},i.a.createElement("i",{className:"fas fa-directions footer-icon"}),i.a.createElement("span",{className:"footer-info"},"26-640 Choment\xf3w-Puszcz, Mazowieckie")),i.a.createElement("div",{className:"footer-img"},i.a.createElement("i",{className:"fas fa-phone-square footer-icon"}),i.a.createElement("span",{className:"footer-info"},"123-456-789")),i.a.createElement("div",{className:"footer-img"},i.a.createElement("i",{className:"fas fa-envelope-open footer-icon"}),i.a.createElement("span",{className:"footer-info"},'EMIL DOMAGA\u0141A "EMDOM-BHP"'))),i.a.createElement("div",{className:"footer-nav"},i.a.createElement("ul",null,i.a.createElement("li",null,"Strona G\u0142\xf3wna"),i.a.createElement("li",null,"Us\u0142ugi"),i.a.createElement("li",null,"Cennik"),i.a.createElement("li",null,"Kontakt"))))))}),H=(t(47),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{basename:"/emdom"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement(E,null),i.a.createElement(L,null),i.a.createElement(A,null)))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[31,1,2]]]);
//# sourceMappingURL=main.46e5be92.chunk.js.map