(this.webpackJsonpemdom=this.webpackJsonpemdom||[]).push([[0],{22:function(e,a,t){e.exports=t.p+"static/media/embud2.a1b45a8b.png"},26:function(e,a,t){},29:function(e){e.exports=JSON.parse('{"uslugi":[{"id":-3,"name":"Ocena ryzyka COVID-19","prize":"Kwota do uzgodnienia","color":"rgb(94, 0, 0)","font":"20px"},{"id":-2,"name":"Opracowywania planu dzia\u0142a\u0144 zapobiegawczych w zwi\u0105zku z zagro\u017ceniem SARS-CoV-2 (COVID-19)","prize":"Kwota do uzgodnienia","color":"rgb(94, 0, 0)","font":"20px"},{"id":-1,"name":"Wdro\u017cenie dzia\u0142a\u0144 zapobiegawczych w zwi\u0105zku z zagro\u017ceniem SARS-CoV-2 (COVID-19)","prize":"Kwota do uzgodnienia","color":"rgb(94, 0, 0)","font":"20px"},{"id":0,"name":"Szkolenia wst\u0119pne BHP","prize":"60,00 PLN "},{"id":1,"name":"Szkolenia okresowe BHP dla pracownik\xf3w","prize":"100,00 PLN "},{"id":2,"name":"Szkolenia okresowe BHP dla os\xf3b kieruj\u0105cych i pracodawc\xf3w","prize":"120,00 PLN "},{"id":3,"name":"Szkolenia Ppo\u017c.","prize":"40,00 PLN "},{"id":4,"name":"Opracowanie oceny ryzyka zawodowego","prize":"150,00 PLN "},{"id":5,"name":"Przeprowadzanie kontroli warunk\xf3w pracy oraz przestrzegania zasad bezpiecze\u0144stwa i higieny pracy przez pracownik\xf3w","prize":"do uzgodnienia"},{"id":6,"name":"Pomoc i przygotowanie odpowiedzi na nakazy i wyst\u0105pienia inspektor\xf3w Pa\u0144stwowej Inspekcji Pracy \u2013 realizacja zalece\u0144 pokontrolnych","prize":"do uzgodnienia"},{"id":7,"name":"Opracowanie dokumentacji zwi\u0105zanej z wypadkami przy pracy \u2013 od 200,00 do 500,00 PLN  (cena zale\u017cy od wypadku)","prize":"od 200,00 do 500,00 PLN  (cena zale\u017cy od wypadku)"},{"id":8,"name":"Tworzenie instrukcji BHP i Ppo\u017c.","prize":"od 15,00 PLN "},{"id":9,"name":"Tworzenie Instrukcji Bezpiecze\u0144stwa Po\u017carowego","prize":"od 450,00 PLN "},{"id":10,"name":"Doradztwo z zakresu ppo\u017c.","prize":"od 150,00 PLN "},{"id":11,"name":"kontrola dora\u017ana i okresowa","prize":"od 50,00 PLN "},{"id":12,"name":"ocena i analiza stanu BHP","prize":"od 150,00 PLN "},{"id":13,"name":"Nadz\xf3r nad w\u0142a\u015bciwym oznakowaniem obiekt\xf3w w zakresie BHP i PPO\u017b","prize":"do uzgodnienia"},{"id":14,"name":"Prowadzenie dokumentacji pracowniczych w zakresie kart ubraniowych pracownik\xf3w i kart \u015brodk\xf3w ochrony indywidualnej, tworzenie tabel przydzia\u0142u odzie\u017cy roboczej, obuwia i \u015brodk\xf3w ochrony indywidualnej","prize":"do uzgodnienia"},{"id":15,"name":"Doradztwo w zakresie odzie\u017cy, obuwia roboczego i \u015brodk\xf3w ochrony indywidualnej oraz zbiorowej","prize":"cena do uzgodnienia"},{"id":16,"name":"Tworzenie akt\xf3w wewn\u0119trznych w zakresie BHP i PPO\u017b.","prize":"cena do uzgodnienia"},{"id":17,"name":"Tworzenie list kontrolnych stanu BHP i PPO\u017b","prize":"cena do uzgodnienia"}],"firm":[{"id":0,"name":"do 20 pracownik\xf3w","prize":"od 700,00 PLN"},{"id":1,"name":"21 \u2013 50 pracownik\xf3w","prize":"od 850,00 PLN "},{"id":2,"name":"51 \u2013 100 pracownik\xf3w ","prize":"od 1000,00 PLN "},{"id":4,"name":"powy\u017cej 100 pracownik\xf3w","prize":"od 1150,00 PLN "}]}')},33:function(e,a,t){},34:function(e,a,t){},47:function(e,a,t){e.exports=t(82)},52:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){e.exports=t.p+"static/media/bg2.284cbb46.jpg"},59:function(e,a,t){e.exports=t.p+"static/media/bg.4883fed1.jpg"},60:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){},82:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),i=t(20),c=t.n(i),l=(t(52),t(8)),r=t(9),s=t(11),m=t(10),u=t(12),d=t(5),p=(t(33),t(13)),z=(t(34),t(22)),w=t.n(z),h=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={active:!1,position:!1},t.handleActive=t.handleActive.bind(Object(p.a)(t)),t.handleMenuWidth=t.handleMenuWidth.bind(Object(p.a)(t)),t.handleSticky=t.handleSticky.bind(Object(p.a)(t)),t.refMenu=o.a.createRef(),t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"handleActive",value:function(){this.setState({active:!this.state.active})}},{key:"handleMenuWidth",value:function(){window.innerWidth<767?this.setState({active:!1}):this.setState({active:!0})}},{key:"handleSticky",value:function(){window.pageYOffset>this.refMenu.current.offsetHeight?this.setState({position:!0}):this.setState({position:!1})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleMenuWidth.bind(this)),window.addEventListener("scroll",this.handleSticky.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleMenuWidth.bind(this)),window.removeEventListener("scroll",this.handleSticky.bind(this))}},{key:"render",value:function(){var e=this.state.active;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{ref:this.refMenu,className:!0===this.state.position?"sticky":"nav-container"},o.a.createElement("div",{className:"navigation-elements col-12 col-xl-10"},o.a.createElement(d.b,{to:"/"},o.a.createElement("div",{className:"menu-logo"},o.a.createElement("img",{src:w.a,alt:"logo",style:{width:"100%",height:"100%"}}))),o.a.createElement("div",{className:"menu"},o.a.createElement("button",{className:this.state.active?"navbar-btnX":"navbar-btn",onClick:this.handleActive},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null)),o.a.createElement("div",{className:"contact-container"},o.a.createElement("ul",{style:!0===e?{display:"flex"}:null},o.a.createElement("li",null,o.a.createElement(d.b,{exact:!0,to:"/",onClick:this.handleActive,activeStyle:{color:"silver"}},o.a.createElement("i",{className:"fas fa-home li-icon"}),"Strona G\u0142\xf3wna")),o.a.createElement("li",null,o.a.createElement(d.b,{to:"/prize",onClick:this.handleActive,activeStyle:{color:"silver"}},o.a.createElement("i",{className:"fas fa-euro-sign li-icon"}),"Cennik i Us\u0142ugi")),o.a.createElement("li",null,o.a.createElement(d.b,{to:"/contact",onClick:this.handleActive,activeStyle:{color:"silver"}},o.a.createElement("i",{className:"fas fa-mobile li-icon"}),"Kontakt"))))))))}}]),a}(n.Component),k=t(2),E=(t(57),t(58),t(59),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"homepage"},o.a.createElement("span",null,o.a.createElement("p",null,"Us\u0142ugi BHP i PPO\u017b")),o.a.createElement("br",null),o.a.createElement("span",null,o.a.createElement("p",null,"Bezpiecze\u0144stwo i ochrona pracy"))),o.a.createElement("section",{className:"container-homepage col-12"},o.a.createElement("div",{className:"homepage-info col-12 col-md-8 col-lg-12"},o.a.createElement("div",{className:"info-photo col-12 col-lg-6"}),o.a.createElement("div",{className:"info col-12 col-lg-6"},o.a.createElement("span",{className:"span-title"},"Czym si\u0119 zajmujemy ?"),o.a.createElement("span",{className:"span-description"},"Firma \u015bwiadczy us\u0142ugi BHP na najwy\u017cszym poziomie, z pe\u0142nym zaanga\u017cowaniem, na bie\u017c\u0105co szkoli w zakresie zarz\u0105dzania bezpiecze\u0144stwem i higien\u0105 pracy. Standardem jest zadowolenie pracownik\xf3w i pracodawc\xf3w z przeprowadzonych szkole\u0144. Stosuje jasne i zrozumia\u0142e, a zarazem skuteczne rozwi\u0105zania z zakresu bezpiecze\u0144stwa pracy zgodnie z polskim prawodawstwem. Us\u0142ugi \u015bwiadczy dora\u017anie wedle potrzeb lub poprzez umow\u0119 wsp\xf3\u0142pracy.")))),o.a.createElement("section",{className:"container-homepage col-12"},o.a.createElement("div",{className:"homepage-info col-12 col-md-8 col-lg-12"},o.a.createElement("div",{className:"info col-12 col-lg-6"},o.a.createElement("span",{className:"span-title"},"Firma Emdom-BHP realizuje:"),o.a.createElement("span",{className:"span-description"},o.a.createElement("ul",null,o.a.createElement("li",null,"wdra\u017canie system\xf3w bezpiecze\u0144stwa"),o.a.createElement("li",null,"przeprowadzanie kontroli stanu urz\u0105dze\u0144 technicznych BHP i PPO\u017b"),o.a.createElement("li",null,"zarz\u0105dzanie bezpiecze\u0144stwem i ochron\u0105 pracy wykorzystuj\u0105c najnowsze technologie i rozwi\u0105zania techniczne."),o.a.createElement("li",null,"dobieranie odpowiednich rozwi\u0105za\u0144 dla obni\u017cenia koszt\xf3w w firmie, a tym samym zwi\u0119kszenie wydajno\u015bci.")))),o.a.createElement("div",{className:"info-photo col-12 col-lg-6"}))),o.a.createElement("section",{className:"container-homepage col-12"},o.a.createElement("div",{className:"homepage-info col-xl-12"},o.a.createElement("div",{className:"info"},o.a.createElement("p",null,"Firma Emdom-BHP zapewnia bezpiecze\u0144stwo w zakresie obs\u0142ugi r\xf3\u017cnych podmiot\xf3w gospodarczych dotyczy to zar\xf3wno firm o dzia\u0142alno\u015bci typowo biurowej jak i obs\u0142ugi BHP du\u017cych inwestycji budowlanych."),o.a.createElement("p",null,"\u015awiadczymy us\u0142ugi BHP na najwy\u017cszym poziomie, z pe\u0142nym zaanga\u017cowaniem, na bie\u017c\u0105co szkoli w zakresie zarz\u0105dzania bezpiecze\u0144stwem i higien\u0105 pracy."),o.a.createElement("p",null,"Standardem jest zadowolenie pracownik\xf3w i pracodawc\xf3w z przeprowadzonych szkole\u0144. Stosuje jasne i zrozumia\u0142e, a zarazem skuteczne rozwi\u0105zania z zakresu bezpiecze\u0144stwa pracy zgodnie z polskim prawodawstwem. Us\u0142ugi \u015bwiadczy dora\u017anie wedle potrzeb lub poprzez umow\u0119 wsp\xf3\u0142pracy.")))))}}]),a}(n.Component)),y=t(17),b=(t(26),t(29)),f=function(e){var a=e.name,t=e.prize,n=e.color,i=e.font;return o.a.createElement(o.a.Fragment,null,o.a.createElement("li",null,o.a.createElement("span",{className:"services-title"},o.a.createElement("p",{style:{color:n,fontSize:i}},a,o.a.createElement("br",null))),o.a.createElement("span",{className:"services-title"},o.a.createElement("p",{style:{color:"green"},className:"services-prize"},"Cena: ",t))))},v=function(e){var a=e.value.map((function(e){return o.a.createElement(f,{key:e.id,name:e.name,prize:e.prize,color:e.color,font:e.font})}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"services col-12 col-xl-10"},o.a.createElement("ul",null,a)))},g=function(e){var a=e.name,t=e.prize;return o.a.createElement("div",{className:"prize-firm"},o.a.createElement("div",{className:"prize-employee"},o.a.createElement("span",{className:"name-prize"},"Zatrudnienie: ",o.a.createElement("br",null),a),o.a.createElement("br",null)),o.a.createElement("div",{className:"prize-prize"},o.a.createElement("span",{className:"prize"},"Cena: ",t)))},j=function(e){var a=e.value.map((function(e){return o.a.createElement(g,{key:e.id,name:e.name,prize:e.prize})}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"firm-container"},a,o.a.createElement("div",{className:"services-description"},o.a.createElement("p",null,"Powy\u017cszy cennik zawiera orientacyjne koszty us\u0142ug proponowanych przez moj\u0105 firm\u0119. Ka\u017cda oferta wyceniana jest indywidualnie i dostosowana do aktualnych zapotrzebowa\u0144 klienta."))))},N=function(){return o.a.createElement("div",{className:"docs-container"},o.a.createElement("div",{className:"docs"},o.a.createElement("p",null,"Wykonywanie pe\u0142nej dokumentacji powypadkowej:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Uczestnictwo w komisjach powypadkowych"),o.a.createElement("li",null,"Sporz\u0105dzanie protoko\u0142\xf3w powypadkowych"),o.a.createElement("li",null,"Sporz\u0105dzanie kart wypadku"),o.a.createElement("li",null,"Sporz\u0105dzanie protoko\u0142\xf3w wys\u0142uchania poszkodowanych i \u015bwiadk\xf3w"),o.a.createElement("li",null,"Sporz\u0105dzanie kart Z-KW dla ZUS"))),o.a.createElement("div",{className:"docs"},o.a.createElement("p",null,"Opracowanie Oceny Ryzyka Zawodowego (ok. 40 stron) na poszczeg\xf3lnych stanowiskach pracy:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Ka\u017cda opracowana ocena ryzyka zawodowego jest opracowana metod\u0105 akceptowan\u0105 przez Pa\u0144stwow\u0105 Inspekcj\u0119 Pracy tj. PN-N-18000, Risk Score, Pi\u0119ciu krok\xf3w, itd."),o.a.createElement("li",null,"Gwarantujemy przej\u015bcie pozytywnej kontroli przez Inspekcj\u0119 Pracy lub Sanepid.(wielokrotnie przechodzi\u0142a kontrole inspekcji pracy)")),o.a.createElement("p",null,"Zgodnie z art. 226 pracodawca ocenia i dokumentuje ryzyko zawodowe zwi\u0105zane z wykonywan\u0105 prac\u0105 oraz stosuje niezb\u0119dne \u015brodki profilaktyczne zmniejszaj\u0105ce ryzyko, a tak\u017ce informuje pracownik\xf3w o ryzyku zawodowym, kt\xf3re wi\u0105\u017ce si\u0119 z wykonywan\u0105 prac\u0105, oraz o zasadach ochrony przed zagro\u017ceniami. Oznacza to, \u017ce ocena ryzyka zawodowego jest obowi\u0105zkowa w ka\u017cdym zak\u0142adzie pracy bez wyj\u0105tk\xf3w. Ocena ryzyka zawodowego jest zgodnie z wymaganiami prawa jednym z podstawowych obowi\u0105zk\xf3w pracodawcy.")))},O=function(){var e=Object(n.useState)(b.uslugi),a=Object(y.a)(e,2),t=a[0],i=(a[1],Object(n.useState)(!0)),c=Object(y.a)(i,2),l=c[0],r=c[1],s=Object(n.useState)(b.firm),m=Object(y.a)(s,2),u=m[0],d=(m[1],Object(n.useState)(!1)),p=Object(y.a)(d,2),z=p[0],w=p[1],h=Object(n.useState)(!1),k=Object(y.a)(h,2),E=k[0],f=k[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"photo-header"},o.a.createElement("div",{className:"prize-header"},"Cennik us\u0142ug"),o.a.createElement("div",{className:"prize-services"},o.a.createElement("div",{style:l?{borderBottom:"5px solid orange"}:null,className:"prize-service",onClick:function(){r(!0),w(!1),f(!1)}},"Us\u0142ugi"),o.a.createElement("div",{style:z?{borderBottom:"5px solid orange"}:null,className:"prize-service",onClick:function(){r(!1),w(!0),f(!1)}},"Obs\u0142uga firm"),o.a.createElement("div",{style:E?{borderBottom:"5px solid orange"}:null,className:"prize-service",onClick:function(){r(!1),w(!1),f(!0)}},"Dokumentacja"))),o.a.createElement("section",{className:"section-prize col-12"},o.a.createElement("div",{className:"prize-container col-12"},o.a.createElement("span",{className:"service-title"},"Zakres i cennik \u015bwiadczonych us\u0142ug:"),l?o.a.createElement(v,{value:t}):null,z?o.a.createElement(j,{value:u}):null,E?o.a.createElement(N,null):null)))},C=t(23),P=(t(60),t(18)),S=t.n(P),x=t(44),B=t.n(x),M=t(15),H=function(){return{type:"SET_COOKIE"}},L=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).interval="",t.start=function(){t.interval=setInterval((function(){t.hideElement()}),1e3)},t.state={subject:"",phone:"",mail:"",text:"",count:3,stopInterval:!1,errors:{subject:!1,phone:!1,mail:!1,text:!1},sent:!1},t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(t)),t.validation=t.validation.bind(Object(p.a)(t)),t.hideElement=t.hideElement.bind(Object(p.a)(t)),t.sendMail=t.sendMail.bind(Object(p.a)(t)),t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"handleChange",value:function(e){var a=e.target.name;this.setState(Object(C.a)({},a,e.target.value))}},{key:"hideElement",value:function(){!0===this.state.sent&&(this.setState((function(e){return{count:e.count+=-1}})),this.state.count<0&&(this.setState({sent:!1,count:3}),clearInterval(this.interval)))}},{key:"handleSubmit",value:function(e){e.preventDefault();var a=this.validation();a.validate?(this.start(),this.sendMail(),this.setState({sent:!0,subject:"",phone:"",mail:"",text:"",errors:{subject:!1,phone:!1,mail:!1,text:!1}})):this.setState({errors:{subject:!a.subject,phone:!a.phone,mail:!a.mail,text:!a.text}})}},{key:"validation",value:function(){var e=!1,a=!1,t=!1,n=!1,o=!1;return this.state.subject.length>5&&(e=!0),this.state.phone.length>8&&(a=!0),-1!==this.state.mail.indexOf("@")&&(t=!0),this.state.text.length>10&&(n=!0),e&&a&&t&&n&&(o=!0),{subject:e,phone:a,mail:t,text:n,validate:o}}},{key:"sendMail",value:function(){B()("http://localhost/emilmailer/index.php",{method:"post",mode:"cors",headers:{"Content-Type":"application/json"},data:JSON.stringify(this.state)}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"contact-content col-12"},o.a.createElement("div",{className:"contact-background col-12 col-xl-10"},o.a.createElement("div",{className:"contact-header"},o.a.createElement("p",null,"Kontakt")),o.a.createElement("div",{className:"form-adress"},o.a.createElement("div",{className:"form-contact",style:!0===this.state.sent?{display:"none"}:{display:"block"}},o.a.createElement("p",null,"Zostaw swoje dane a ja oddzwoni\u0119."),o.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0},o.a.createElement("input",{type:"text",value:this.state.subject,name:"subject",onChange:this.handleChange,placeholder:"temat conajmniej 3 znaki"}),this.state.errors.subject?o.a.createElement("p",null,"Temat zbyt kr\xf3tki"):null,o.a.createElement("input",{type:"number",value:this.state.phone,name:"phone",onChange:this.handleChange,placeholder:"telefon"}),this.state.errors.phone?o.a.createElement("p",null,"Number zbyt kr\xf3tki"):null,o.a.createElement("input",{type:"text",value:this.state.mail,name:"mail",onChange:this.handleChange,placeholder:"mail"}),this.state.errors.mail?o.a.createElement("p",null,"Brak @"):null,o.a.createElement("textarea",{type:"text",value:this.state.text,name:"text",onChange:this.handleChange,placeholder:"wiadomo\u015b\u0107"}),this.state.errors.text?o.a.createElement("p",null,"Wiadomo\u015b\u0107 za kr\xf3tka"):null,o.a.createElement("button",{onClick:this.handleSubmit},"Wy\u015blij"))),o.a.createElement("div",{className:"info-sent",style:!0===this.state.sent?{display:"block"}:{display:"none"}},o.a.createElement("div",{className:"icon-sent"},o.a.createElement("i",{className:"fa fa-check ok-icon","aria-hidden":"true"})),o.a.createElement("p",null,"Formularz zosta\u0142 wys\u0142any, dzi\u0119kujemy za kontakt.")),o.a.createElement("div",{className:"adress"},o.a.createElement("p",null,"Us\u0142ugi BHP i PPO\u017b EMDOM-BHP"),o.a.createElement("p",null,"Adres: 26-640 Choment\xf3w-Puszcz, Mazowieckie",o.a.createElement("br",null),"05-550 Piaseczno"),o.a.createElement("p",null,"Tel. 123-456-789"),o.a.createElement("p",null,'Adres e-mail: "EMDOM-BHP"'))))))}}]),a}(n.Component),F=Object(M.b)((function(e){return{cookieSet:e.setCookie}}),(function(e){return{setCookie:function(){return e(H())}}}))(L),I=(t(79),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"section-content col-12"},o.a.createElement(k.c,null,o.a.createElement(k.a,{exact:!0,path:"/",component:E}),o.a.createElement(k.a,{path:"/prize",component:O}),o.a.createElement(k.a,{path:"/contact",component:F}))))}}]),a}(n.Component)),K=(t(80),function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("footer",{className:"footer col-12"},o.a.createElement("div",{className:"footer-content col-12 col-xl-10"},o.a.createElement("div",{className:"footer-logo col-12 col-sm-4 col-lg-3"},o.a.createElement("img",{src:w.a,alt:"footer-logo"})),o.a.createElement("div",{className:"footer-contact col-12 col-sm-8 col-lg-6"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("p",null,o.a.createElement("i",{className:"fas fa-home footer-icon"})),o.a.createElement("p",{className:"footer-info"},'"EMDOM-BHP')),o.a.createElement("li",null,o.a.createElement("p",null,o.a.createElement("i",{className:"fas fa-directions footer-icon"})),o.a.createElement("p",{className:"footer-info"},"26-640 Choment\xf3w-Puszcz, Mazowieckie")),o.a.createElement("li",null,o.a.createElement("p",null,o.a.createElement("i",{className:"fas fa-phone-square footer-icon"})),o.a.createElement("p",{className:"footer-info"},"123-456-789")),o.a.createElement("li",null,o.a.createElement("p",null,o.a.createElement("i",{className:"fas fa-envelope-open footer-icon"})),o.a.createElement("p",{className:"footer-info"},'"EMDOM-BHP"')))),o.a.createElement("div",{className:"footer-nav col-12 col-lg-3"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(d.b,{exact:!0,to:"/"},"Strona G\u0142\xf3wna")),o.a.createElement("li",null,o.a.createElement(d.b,{to:"/prize"},"Cennik")),o.a.createElement("li",null,o.a.createElement(d.b,{to:"/contact"},"Kontakt")))))))}),W=(t(81),t(46)),A=function(){return{type:"CHECK_COOKIE"}},D=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).handleCookie=function(){t.props.setCookie(),S.a.set("generalcookie","test",{expires:7}),t.props.checkCookie()},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"cookie-div"},o.a.createElement("p",null,"Strona korzysta z plik\xf3w cookie w celu realizacji us\u0142ug zgodnie z ",o.a.createElement("a",{href:"https://www.gov.pl/web/gov/polityka-dotyczaca-cookies",target:"_!blank"},"Polityk\u0105 Cookies"),". Mo\u017cesz okre\u015bli\u0107 warunki przechowywania lub dost\u0119pu mechanizmu cookie w Twojej przegl\u0105darce."),o.a.createElement("button",{onClick:this.handleCookie},"Akceptuj\u0119")))}}]),a}(n.Component),T=Object(M.b)((function(e){return{cookieSet:e.setCookie,cookieCheck:e.checkCookie}}),(function(e){return{setCookie:function(){return e(H())},checkCookie:function(){return e(A())}}}))(D),U=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){S.a.get("generalcookie")&&this.props.cookieSet()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{basename:"/emdom",onUpdate:function(){return window.scrollTo(0,0)}},o.a.createElement(W.a,null,o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement(h,null),o.a.createElement(I,null),o.a.createElement(K,null),!0===this.props.cookieState?null:o.a.createElement(T,null))))))}}]),a}(n.Component),Z=Object(M.b)((function(e){return{cookieState:e.setCookie,cookieCheck:e.checkCookie}}),(function(e){return{cookieSet:function(){return e(H())},cookieCheck:function(){return e(H())}}}))(U);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=t(24),R=t(31),_={setCookie:!1,checkCookie:!1},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_COOKIE":return Object(R.a)({},e,{setCookie:!0});case"CHECK_COOKIE":return Object(R.a)({},e,{checkCookie:!0});default:return e}},G=Object(V.b)(J);c.a.render(o.a.createElement(M.a,{store:G}," ",o.a.createElement(Z,null)," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.6c3557f0.chunk.js.map