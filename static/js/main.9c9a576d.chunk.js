(this.webpackJsonpemdom=this.webpackJsonpemdom||[]).push([[0],{22:function(e,a,t){e.exports=t.p+"static/media/embud2.a1b45a8b.png"},27:function(e,a,t){},30:function(e){e.exports=JSON.parse('{"uslugi":[{"id":-3,"name":"Ocena ryzyka COVID-19","prize":"Kwota do uzgodnienia","color":"rgb(94, 0, 0)","font":"20px"},{"id":-2,"name":"Opracowywania planu dzia\u0142a\u0144 zapobiegawczych w zwi\u0105zku z zagro\u017ceniem SARS-CoV-2 (COVID-19)","prize":"Kwota do uzgodnienia","color":"rgb(94, 0, 0)","font":"20px"},{"id":-1,"name":"Wdro\u017cenie dzia\u0142a\u0144 zapobiegawczych w zwi\u0105zku z zagro\u017ceniem SARS-CoV-2 (COVID-19)","prize":"Kwota do uzgodnienia","color":"rgb(94, 0, 0)","font":"20px"},{"id":0,"name":"Szkolenia wst\u0119pne BHP","prize":"60,00 PLN "},{"id":1,"name":"Szkolenia okresowe BHP dla pracownik\xf3w","prize":"100,00 PLN "},{"id":2,"name":"Szkolenia okresowe BHP dla os\xf3b kieruj\u0105cych i pracodawc\xf3w","prize":"120,00 PLN "},{"id":3,"name":"Szkolenia Ppo\u017c.","prize":"40,00 PLN "},{"id":4,"name":"Opracowanie oceny ryzyka zawodowego","prize":"150,00 PLN "},{"id":5,"name":"Przeprowadzanie kontroli warunk\xf3w pracy oraz przestrzegania zasad bezpiecze\u0144stwa i higieny pracy przez pracownik\xf3w","prize":"do uzgodnienia"},{"id":6,"name":"Pomoc i przygotowanie odpowiedzi na nakazy i wyst\u0105pienia inspektor\xf3w Pa\u0144stwowej Inspekcji Pracy \u2013 realizacja zalece\u0144 pokontrolnych","prize":"do uzgodnienia"},{"id":7,"name":"Opracowanie dokumentacji zwi\u0105zanej z wypadkami przy pracy \u2013 od 200,00 do 500,00 PLN  (cena zale\u017cy od wypadku)","prize":"od 200,00 do 500,00 PLN"},{"id":8,"name":"Tworzenie instrukcji BHP i Ppo\u017c.","prize":"od 15,00 PLN "},{"id":9,"name":"Tworzenie Instrukcji Bezpiecze\u0144stwa Po\u017carowego","prize":"od 450,00 PLN "},{"id":10,"name":"Doradztwo z zakresu ppo\u017c.","prize":"od 150,00 PLN "},{"id":11,"name":"kontrola dora\u017ana i okresowa","prize":"od 50,00 PLN "},{"id":12,"name":"ocena i analiza stanu BHP","prize":"od 150,00 PLN "},{"id":13,"name":"Nadz\xf3r nad w\u0142a\u015bciwym oznakowaniem obiekt\xf3w w zakresie BHP i PPO\u017b","prize":"do uzgodnienia"},{"id":14,"name":"Prowadzenie dokumentacji pracowniczych w zakresie kart ubraniowych pracownik\xf3w i kart \u015brodk\xf3w ochrony indywidualnej, tworzenie tabel przydzia\u0142u odzie\u017cy roboczej, obuwia i \u015brodk\xf3w ochrony indywidualnej","prize":"do uzgodnienia"},{"id":15,"name":"Doradztwo w zakresie odzie\u017cy, obuwia roboczego i \u015brodk\xf3w ochrony indywidualnej oraz zbiorowej","prize":"cena do uzgodnienia"},{"id":16,"name":"Tworzenie akt\xf3w wewn\u0119trznych w zakresie BHP i PPO\u017b.","prize":"cena do uzgodnienia"},{"id":17,"name":"Tworzenie list kontrolnych stanu BHP i PPO\u017b","prize":"cena do uzgodnienia"}],"firm":[{"id":0,"name":"do 20 pracownik\xf3w","prize":"od 700,00 PLN"},{"id":1,"name":"21 \u2013 50 pracownik\xf3w","prize":"od 850,00 PLN "},{"id":2,"name":"51 \u2013 100 pracownik\xf3w ","prize":"od 1000,00 PLN "},{"id":4,"name":"powy\u017cej 100 pracownik\xf3w","prize":"od 1150,00 PLN "}]}')},33:function(e,a,t){},34:function(e,a,t){},47:function(e,a,t){e.exports=t(81)},52:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(20),l=t.n(o),c=(t(52),t(8)),r=t(9),s=t(11),m=t(10),u=t(12),d=t(5),p=(t(33),t(13)),z=(t(34),t(22)),w=t.n(z),h=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={active:!1,position:!1},t.handleActive=t.handleActive.bind(Object(p.a)(t)),t.handleMenuWidth=t.handleMenuWidth.bind(Object(p.a)(t)),t.handleSticky=t.handleSticky.bind(Object(p.a)(t)),t.refMenu=i.a.createRef(),t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"handleActive",value:function(){this.setState({active:!this.state.active})}},{key:"handleMenuWidth",value:function(){window.innerWidth<767?this.setState({active:!1}):this.setState({active:!0})}},{key:"handleSticky",value:function(){window.pageYOffset>this.refMenu.current.offsetHeight?this.setState({position:!0}):this.setState({position:!1})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleMenuWidth.bind(this)),window.addEventListener("scroll",this.handleSticky.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleMenuWidth.bind(this)),window.removeEventListener("scroll",this.handleSticky.bind(this))}},{key:"render",value:function(){var e=this.state.active;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{ref:this.refMenu,className:!0===this.state.position?"sticky":"nav-container"},i.a.createElement("div",{className:"navigation-elements col-12 col-xl-10"},i.a.createElement(d.b,{to:"/"},i.a.createElement("div",{className:"menu-logo"},i.a.createElement("img",{src:w.a,alt:"logo",style:{width:"100%",height:"100%"}}))),i.a.createElement("div",{className:"menu"},i.a.createElement("button",{className:this.state.active?"navbar-btnX":"navbar-btn",onClick:this.handleActive},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null)),i.a.createElement("div",{className:"contact-container"},i.a.createElement("ul",{style:!0===e?{display:"flex"}:null},i.a.createElement("li",null,i.a.createElement(d.b,{exact:!0,to:"/",onClick:this.handleActive,activeStyle:{color:"silver"}},i.a.createElement("i",{className:"fas fa-home li-icon"}),"Strona G\u0142\xf3wna")),i.a.createElement("li",null,i.a.createElement(d.b,{to:"/prize",onClick:this.handleActive,activeStyle:{color:"silver"}},i.a.createElement("i",{className:"fas fa-euro-sign li-icon"}),"Cennik i Us\u0142ugi")),i.a.createElement("li",null,i.a.createElement(d.b,{to:"/contact",onClick:this.handleActive,activeStyle:{color:"silver"}},i.a.createElement("i",{className:"fas fa-mobile li-icon"}),"Kontakt"))))))))}}]),a}(n.Component),k=t(2),E=(t(57),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"homepage"},i.a.createElement("span",null,i.a.createElement("p",null,"Us\u0142ugi BHP i PPO\u017b")),i.a.createElement("br",null),i.a.createElement("span",null,i.a.createElement("p",null,"Bezpiecze\u0144stwo i ochrona pracy"))),i.a.createElement("section",{className:"container-homepage col-12"},i.a.createElement("div",{className:"homepage-info col-12 col-md-8 col-lg-12"},i.a.createElement("div",{className:"info-photo col-12 col-lg-6"}),i.a.createElement("div",{className:"info col-12 col-lg-6"},i.a.createElement("span",{className:"span-title"},"Czym si\u0119 zajmujemy ?"),i.a.createElement("span",{className:"span-description"},"Firma \u015bwiadczy us\u0142ugi BHP na najwy\u017cszym poziomie, z pe\u0142nym zaanga\u017cowaniem, na bie\u017c\u0105co szkoli w zakresie zarz\u0105dzania bezpiecze\u0144stwem i higien\u0105 pracy. Standardem jest zadowolenie pracownik\xf3w i pracodawc\xf3w z przeprowadzonych szkole\u0144. Stosuje jasne i zrozumia\u0142e, a zarazem skuteczne rozwi\u0105zania z zakresu bezpiecze\u0144stwa pracy zgodnie z polskim prawodawstwem. Us\u0142ugi \u015bwiadczy dora\u017anie wedle potrzeb lub poprzez umow\u0119 wsp\xf3\u0142pracy.")))),i.a.createElement("section",{className:"container-homepage col-12"},i.a.createElement("div",{className:"homepage-info col-12 col-md-8 col-lg-12"},i.a.createElement("div",{className:"info col-12 col-lg-6"},i.a.createElement("span",{className:"span-title"},"Firma Emdom-BHP realizuje:"),i.a.createElement("span",{className:"span-description"},i.a.createElement("ul",null,i.a.createElement("li",null,"wdra\u017canie system\xf3w bezpiecze\u0144stwa"),i.a.createElement("li",null,"przeprowadzanie kontroli stanu urz\u0105dze\u0144 technicznych BHP i PPO\u017b"),i.a.createElement("li",null,"zarz\u0105dzanie bezpiecze\u0144stwem i ochron\u0105 pracy wykorzystuj\u0105c najnowsze technologie i rozwi\u0105zania techniczne."),i.a.createElement("li",null,"dobieranie odpowiednich rozwi\u0105za\u0144 dla obni\u017cenia koszt\xf3w w firmie, a tym samym zwi\u0119kszenie wydajno\u015bci.")))),i.a.createElement("div",{className:"info-photo col-12 col-lg-6"}))),i.a.createElement("section",{className:"container-homepage col-12"},i.a.createElement("div",{className:"homepage-info col-xl-12"},i.a.createElement("div",{className:"info"},i.a.createElement("p",null,"Firma Emdom-BHP zapewnia bezpiecze\u0144stwo w zakresie obs\u0142ugi r\xf3\u017cnych podmiot\xf3w gospodarczych dotyczy to zar\xf3wno firm o dzia\u0142alno\u015bci typowo biurowej jak i obs\u0142ugi BHP du\u017cych inwestycji budowlanych."),i.a.createElement("p",null,"\u015awiadczymy us\u0142ugi BHP na najwy\u017cszym poziomie, z pe\u0142nym zaanga\u017cowaniem, na bie\u017c\u0105co szkoli w zakresie zarz\u0105dzania bezpiecze\u0144stwem i higien\u0105 pracy."),i.a.createElement("p",null,"Standardem jest zadowolenie pracownik\xf3w i pracodawc\xf3w z przeprowadzonych szkole\u0144. Stosuje jasne i zrozumia\u0142e, a zarazem skuteczne rozwi\u0105zania z zakresu bezpiecze\u0144stwa pracy zgodnie z polskim prawodawstwem. Us\u0142ugi \u015bwiadczy dora\u017anie wedle potrzeb lub poprzez umow\u0119 wsp\xf3\u0142pracy."),i.a.createElement("p",null,"Oferuj\u0119 us\u0142ugi BHP oraz PPO\u017b na terenie Warszawy, Radomia oraz okolic tych miast. ")))),i.a.createElement("section",{className:"maps"},i.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225254.71964225752!2d21.128823231895797!3d51.407895078752624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4718592aa02cdbc7%3A0xe530d6c89ff4d21b!2sRadom!5e0!3m2!1sen!2spl!4v1604427564085!5m2!1sen!2spl",title:"map",style:{width:"100%",height:"100%"}})))}}]),a}(n.Component)),y=t(17),f=(t(27),t(30)),b=function(e){var a=e.name,t=e.prize;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"services-elements"},i.a.createElement("p",null,i.a.createElement("i",{className:"fas fa-check-circle"}),a),i.a.createElement("p",null,"Koszt: ",t)))},v=function(e){var a=e.value.map((function(e){return i.a.createElement(b,{key:e.id,name:e.name,prize:e.prize,color:e.color,font:e.font})}));return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"services col-12 col-xl-10"},a))},g=function(e){var a=e.name,t=e.prize;return i.a.createElement("div",{className:"prize-firm"},i.a.createElement("div",{className:"prize-employee"},i.a.createElement("span",{className:"name-prize"},"Zatrudnienie: ",i.a.createElement("br",null),a),i.a.createElement("br",null)),i.a.createElement("div",{className:"prize-prize"},i.a.createElement("span",{className:"prize"},"Cena: ",t)))},j=function(e){var a=e.value.map((function(e){return i.a.createElement(g,{key:e.id,name:e.name,prize:e.prize})}));return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"firm-container"},a,i.a.createElement("div",{className:"services-description col-12 col-lg-10"},i.a.createElement("p",null,i.a.createElement("i",{className:"fas fa-exclamation"})),i.a.createElement("p",null,"Powy\u017cszy cennik zawiera orientacyjne koszty us\u0142ug proponowanych przez moj\u0105 firm\u0119. Ka\u017cda oferta wyceniana jest indywidualnie i dostosowana do aktualnych zapotrzebowa\u0144 klienta."))))},N=function(){return i.a.createElement("div",{className:"docs-container col-12 col-lg-10"},i.a.createElement("div",{className:"docs"},i.a.createElement("p",null,"Wykonywanie pe\u0142nej dokumentacji powypadkowej:"),i.a.createElement("ul",null,i.a.createElement("li",null,"Uczestnictwo w komisjach powypadkowych"),i.a.createElement("li",null,"Sporz\u0105dzanie protoko\u0142\xf3w powypadkowych"),i.a.createElement("li",null,"Sporz\u0105dzanie kart wypadku"),i.a.createElement("li",null,"Sporz\u0105dzanie protoko\u0142\xf3w wys\u0142uchania poszkodowanych i \u015bwiadk\xf3w"),i.a.createElement("li",null,"Sporz\u0105dzanie kart Z-KW dla ZUS"))),i.a.createElement("div",{className:"docs"},i.a.createElement("p",null,"Opracowanie Oceny Ryzyka Zawodowego (ok. 40 stron) na poszczeg\xf3lnych stanowiskach pracy:"),i.a.createElement("ul",null,i.a.createElement("li",null,"Ka\u017cda opracowana ocena ryzyka zawodowego jest opracowana metod\u0105 akceptowan\u0105 przez Pa\u0144stwow\u0105 Inspekcj\u0119 Pracy tj. PN-N-18000, Risk Score, Pi\u0119ciu krok\xf3w, itd."),i.a.createElement("li",null,"Gwarantujemy przej\u015bcie pozytywnej kontroli przez Inspekcj\u0119 Pracy lub Sanepid.(wielokrotnie przechodzi\u0142a kontrole inspekcji pracy)")),i.a.createElement("p",null,"Zgodnie z art. 226 pracodawca ocenia i dokumentuje ryzyko zawodowe zwi\u0105zane z wykonywan\u0105 prac\u0105 oraz stosuje niezb\u0119dne \u015brodki profilaktyczne zmniejszaj\u0105ce ryzyko, a tak\u017ce informuje pracownik\xf3w o ryzyku zawodowym, kt\xf3re wi\u0105\u017ce si\u0119 z wykonywan\u0105 prac\u0105, oraz o zasadach ochrony przed zagro\u017ceniami. Oznacza to, \u017ce ocena ryzyka zawodowego jest obowi\u0105zkowa w ka\u017cdym zak\u0142adzie pracy bez wyj\u0105tk\xf3w. Ocena ryzyka zawodowego jest zgodnie z wymaganiami prawa jednym z podstawowych obowi\u0105zk\xf3w pracodawcy.")))},O=function(){var e=Object(n.useState)(f.uslugi),a=Object(y.a)(e,2),t=a[0],o=(a[1],Object(n.useState)(!0)),l=Object(y.a)(o,2),c=l[0],r=l[1],s=Object(n.useState)(f.firm),m=Object(y.a)(s,2),u=m[0],d=(m[1],Object(n.useState)(!1)),p=Object(y.a)(d,2),z=p[0],w=p[1],h=Object(n.useState)(!1),k=Object(y.a)(h,2),E=k[0],b=k[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"photo-header"},i.a.createElement("div",{className:"prize-header"},"Cennik us\u0142ug"),i.a.createElement("div",{className:"prize-services"},i.a.createElement("div",{style:c?{borderBottom:"5px solid orange"}:null,className:"prize-service",onClick:function(){r(!0),w(!1),b(!1)}},"Us\u0142ugi"),i.a.createElement("div",{style:z?{borderBottom:"5px solid orange"}:null,className:"prize-service",onClick:function(){r(!1),w(!0),b(!1)}},"Obs\u0142uga firm"),i.a.createElement("div",{style:E?{borderBottom:"5px solid orange"}:null,className:"prize-service",onClick:function(){r(!1),w(!1),b(!0)}},"Dokumentacja"))),i.a.createElement("section",{className:"section-prize col-12"},i.a.createElement("div",{className:"prize-container col-12"},i.a.createElement("p",{className:"service-title col-12 col-lg-10"},"Zakres i cennik \u015bwiadczonych us\u0142ug:"),c?i.a.createElement(v,{value:t}):null,z?i.a.createElement(j,{value:u}):null,E?i.a.createElement(N,null):null)))},C=t(23),P=(t(58),t(18)),S=t.n(P),x=t(44),A=t.n(x),B=t(15),L=function(){return{type:"SET_COOKIE"}},M=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).interval="",t.start=function(){t.interval=setInterval((function(){t.hideElement()}),1e3)},t.state={subject:"",phone:"",mail:"",text:"",count:3,stopInterval:!1,errors:{subject:!1,phone:!1,mail:!1,text:!1},sent:!1},t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(t)),t.validation=t.validation.bind(Object(p.a)(t)),t.hideElement=t.hideElement.bind(Object(p.a)(t)),t.sendMail=t.sendMail.bind(Object(p.a)(t)),t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"handleChange",value:function(e){var a=e.target.name;this.setState(Object(C.a)({},a,e.target.value))}},{key:"hideElement",value:function(){!0===this.state.sent&&(this.setState((function(e){return{count:e.count+=-1}})),this.state.count<0&&(this.setState({sent:!1,count:3}),clearInterval(this.interval)))}},{key:"handleSubmit",value:function(e){e.preventDefault();var a=this.validation();a.validate?(this.start(),this.sendMail(),this.setState({sent:!0,subject:"",phone:"",mail:"",text:"",errors:{subject:!1,phone:!1,mail:!1,text:!1}})):this.setState({errors:{subject:!a.subject,phone:!a.phone,mail:!a.mail,text:!a.text}})}},{key:"validation",value:function(){var e=!1,a=!1,t=!1,n=!1,i=!1;return this.state.subject.length>5&&(e=!0),this.state.phone.length>8&&(a=!0),-1!==this.state.mail.indexOf("@")&&(t=!0),this.state.text.length>10&&(n=!0),e&&a&&t&&n&&(i=!0),{subject:e,phone:a,mail:t,text:n,validate:i}}},{key:"sendMail",value:function(){A()("http://localhost/emilmailer/index.php",{method:"post",mode:"cors",headers:{"Content-Type":"application/json"},data:JSON.stringify(this.state)}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"contact-content col-12"},i.a.createElement("div",{className:"contact-background col-12 col-xl-10"},i.a.createElement("div",{className:"contact-header"},i.a.createElement("p",null,"Kontakt")),i.a.createElement("div",{className:"form-adress"},i.a.createElement("div",{className:"form-contact",style:!0===this.state.sent?{display:"none"}:{display:"block"}},i.a.createElement("p",null,"Masz pytanie ? Wype\u0142nij formularz, oddzwoni\u0119 w ci\u0105gu 24h."),i.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0},i.a.createElement("input",{type:"text",value:this.state.subject,name:"subject",onChange:this.handleChange,placeholder:"temat conajmniej 3 znaki"}),this.state.errors.subject?i.a.createElement("p",null,"Temat zbyt kr\xf3tki"):null,i.a.createElement("input",{type:"number",value:this.state.phone,name:"phone",onChange:this.handleChange,placeholder:"telefon"}),this.state.errors.phone?i.a.createElement("p",null,"Number zbyt kr\xf3tki"):null,i.a.createElement("input",{type:"text",value:this.state.mail,name:"mail",onChange:this.handleChange,placeholder:"mail"}),this.state.errors.mail?i.a.createElement("p",null,"Brak @"):null,i.a.createElement("textarea",{type:"text",value:this.state.text,name:"text",onChange:this.handleChange,placeholder:"wiadomo\u015b\u0107"}),this.state.errors.text?i.a.createElement("p",null,"Wiadomo\u015b\u0107 za kr\xf3tka"):null,i.a.createElement("button",{onClick:this.handleSubmit},"Wy\u015blij"))),i.a.createElement("div",{className:"info-sent",style:!0===this.state.sent?{display:"block"}:{display:"none"}},i.a.createElement("div",{className:"icon-sent"},i.a.createElement("i",{className:"fa fa-check ok-icon","aria-hidden":"true"})),i.a.createElement("p",null,"Formularz zosta\u0142 wys\u0142any, dzi\u0119kujemy za kontakt.")),i.a.createElement("div",{className:"adress"},i.a.createElement("p",null,"Us\u0142ugi BHP i PPO\u017b EMDOM-BHP"),i.a.createElement("p",null,"Adres: 26-640 Choment\xf3w-Puszcz, Mazowieckie",i.a.createElement("br",null),"05-550 Piaseczno"),i.a.createElement("p",null,"Tel. 123-456-789"),i.a.createElement("p",null,'Adres e-mail: "EMDOM-BHP"'))))))}}]),a}(n.Component),H=Object(B.b)((function(e){return{cookieSet:e.setCookie}}),(function(e){return{setCookie:function(){return e(L())}}}))(M),I=(t(77),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"section-content col-12"},i.a.createElement(k.c,null,i.a.createElement(k.a,{exact:!0,path:"/",component:E}),i.a.createElement(k.a,{path:"/prize",component:O}),i.a.createElement(k.a,{path:"/contact",component:H}))))}}]),a}(n.Component)),D=(t(78),function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("footer",{className:"footer col-12"},i.a.createElement("div",{className:"footer-content col-12 col-xl-10"},i.a.createElement("div",{className:"footer-logo col-12 col-sm-4 col-lg-3"},i.a.createElement("img",{src:w.a,alt:"footer-logo"})),i.a.createElement("div",{className:"footer-contact col-12 col-sm-8 col-lg-6"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("p",null,"Dane kontaktowe:")),i.a.createElement("li",null,i.a.createElement("p",null,i.a.createElement("i",{className:"fas fa-home footer-icon"})),i.a.createElement("p",{className:"footer-info"},"EMDOM-BHP")),i.a.createElement("li",null,i.a.createElement("p",null,i.a.createElement("i",{className:"fas fa-directions footer-icon"})),i.a.createElement("p",{className:"footer-info"},"26-640 Choment\xf3w-Puszcz, Mazowieckie")),i.a.createElement("li",null,i.a.createElement("p",null,i.a.createElement("i",{className:"fas fa-phone-square footer-icon"})),i.a.createElement("p",{className:"footer-info"},"123-456-789")),i.a.createElement("li",null,i.a.createElement("p",null,i.a.createElement("i",{className:"fas fa-envelope-open footer-icon"})),i.a.createElement("p",{className:"footer-info"},"EMDOM-BHP")))),i.a.createElement("div",{className:"footer-nav col-12 col-lg-3"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(d.b,{exact:!0,to:"/"},"Strona G\u0142\xf3wna")),i.a.createElement("li",null,i.a.createElement(d.b,{to:"/prize"},"Cennik")),i.a.createElement("li",null,i.a.createElement(d.b,{to:"/contact"},"Kontakt")))))))}),W=(t(79),t(46)),F=function(){return{type:"CHECK_COOKIE"}},K=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).handleCookie=function(){t.props.setCookie(),S.a.set("generalcookie","test",{expires:7}),t.props.checkCookie()},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"cookie-div"},i.a.createElement("p",null,"Strona korzysta z plik\xf3w cookie w celu realizacji us\u0142ug zgodnie z ",i.a.createElement("a",{href:"https://www.gov.pl/web/gov/polityka-dotyczaca-cookies",target:"_!blank"},"Polityk\u0105 Cookies"),". Mo\u017cesz okre\u015bli\u0107 warunki przechowywania lub dost\u0119pu mechanizmu cookie w Twojej przegl\u0105darce."),i.a.createElement("button",{onClick:this.handleCookie},"Akceptuj\u0119")))}}]),a}(n.Component),T=Object(B.b)((function(e){return{cookieSet:e.setCookie,cookieCheck:e.checkCookie}}),(function(e){return{setCookie:function(){return e(L())},checkCookie:function(){return e(F())}}}))(K),R=(t(80),function(){var e=Object(B.c)();return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"information-alert"},i.a.createElement("div",{className:"alert-title"},i.a.createElement("button",{className:"close-alert",onClick:function(){e({type:"CLOSE_ALERT",isAlert:!1})}},i.a.createElement("span",null),i.a.createElement("span",null)),i.a.createElement("p",null,"Zapraszamy do skorzystania z us\u0142ug: ")),i.a.createElement("div",{className:"alert-content"},i.a.createElement("p",null,i.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"})," Ocena ryzyka COVID-19 "),i.a.createElement("p",null,i.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"})," Opracowywania planu dzia\u0142a\u0144 zapobiegawczych w zwi\u0105zku z zagro\u017ceniem SARS-CoV-2 (COVID-19) "),i.a.createElement("p",null,i.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"})," Wdro\u017cenie dzia\u0142a\u0144 zapobiegawczych w zwi\u0105zku z zagro\u017ceniem SARS-CoV-2 (COVID-19) "))))}),V=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;S.a.get("generalcookie")&&this.props.cookieSet(),setTimeout((function(){e.props.setAlert(!0)}),5e3)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{basename:"/emdom",onUpdate:function(){return window.scrollTo(0,0)}},i.a.createElement(W.a,null,i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement(h,null),i.a.createElement(I,null),i.a.createElement(D,null),!0===this.props.isAlert?i.a.createElement(R,null):null,!0===this.props.cookieState?null:i.a.createElement(T,null))))))}}]),a}(n.PureComponent),U=Object(B.b)((function(e){return{cookieState:e.setCookie,cookieCheck:e.checkCookie,isAlert:e.isAlert}}),(function(e){return{cookieSet:function(){return e(L())},cookieCheck:function(){return e(L())},setAlert:function(a){return e({type:"CLOSE_ALERT",isAlert:a})}}}))(V);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=t(24),Z=t(25),J={setCookie:!1,checkCookie:!1,isAlert:!1},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_COOKIE":return Object(Z.a)({},e,{setCookie:!0});case"CHECK_COOKIE":return Object(Z.a)({},e,{checkCookie:!0});case"CLOSE_ALERT":return Object(Z.a)({},e,{isAlert:a.isAlert});default:return e}},q=Object(_.b)(G);l.a.render(i.a.createElement(B.a,{store:q}," ",i.a.createElement(U,null)," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.9c9a576d.chunk.js.map