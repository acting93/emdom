(this["webpackJsonpemdom-bhp"]=this["webpackJsonpemdom-bhp"]||[]).push([[0],{19:function(e,a,t){},22:function(e,a,t){e.exports=t.p+"static/media/embud2.a1b45a8b.png"},28:function(e,a,t){},31:function(e){e.exports=JSON.parse('{"uslugi":[{"id":-3,"name":"Ocena ryzyka COVID-19","prize":"Kwota do uzgodnienia","color":"rgb(94, 0, 0)","font":"20px"},{"id":-2,"name":"Opracowywania planu dzia\u0142a\u0144 zapobiegawczych w zwi\u0105zku z zagro\u017ceniem SARS-CoV-2 (COVID-19)","prize":"Kwota do uzgodnienia","color":"rgb(94, 0, 0)","font":"20px"},{"id":-1,"name":"Wdro\u017cenie dzia\u0142a\u0144 zapobiegawczych w zwi\u0105zku z zagro\u017ceniem SARS-CoV-2 (COVID-19)","prize":"Kwota do uzgodnienia","color":"rgb(94, 0, 0)","font":"20px"},{"id":0,"name":"Szkolenia wst\u0119pne BHP","prize":"60,00 PLN "},{"id":1,"name":"Szkolenia okresowe BHP dla pracownik\xf3w","prize":"100,00 PLN "},{"id":2,"name":"Szkolenia okresowe BHP dla os\xf3b kieruj\u0105cych i pracodawc\xf3w","prize":"120,00 PLN "},{"id":3,"name":"Szkolenia Ppo\u017c.","prize":"40,00 PLN "},{"id":4,"name":"Opracowanie oceny ryzyka zawodowego","prize":"150,00 PLN "},{"id":5,"name":"Przeprowadzanie kontroli warunk\xf3w pracy oraz przestrzegania zasad bezpiecze\u0144stwa i higieny pracy przez pracownik\xf3w","prize":"do uzgodnienia"},{"id":6,"name":"Pomoc i przygotowanie odpowiedzi na nakazy i wyst\u0105pienia inspektor\xf3w Pa\u0144stwowej Inspekcji Pracy \u2013 realizacja zalece\u0144 pokontrolnych","prize":"do uzgodnienia"},{"id":7,"name":"Opracowanie dokumentacji zwi\u0105zanej z wypadkami przy pracy \u2013 cena zale\u017cy od wypadku","prize":"od 200,00 do 500,00 PLN"},{"id":8,"name":"Tworzenie instrukcji BHP i PPO\u017b.","prize":"od 15,00 PLN "},{"id":9,"name":"Tworzenie Instrukcji Bezpiecze\u0144stwa Po\u017carowego","prize":"od 450,00 PLN "},{"id":10,"name":"Doradztwo z zakresu ppo\u017c.","prize":"od 150,00 PLN "},{"id":11,"name":"kontrola dora\u017ana i okresowa","prize":"od 50,00 PLN "},{"id":12,"name":"Ocena i analiza stanu BHP","prize":"od 150,00 PLN "},{"id":13,"name":"Nadz\xf3r nad w\u0142a\u015bciwym oznakowaniem obiekt\xf3w w zakresie BHP i PPO\u017b","prize":"do uzgodnienia"},{"id":14,"name":"Prowadzenie dokumentacji pracowniczych w zakresie kart ubraniowych pracownik\xf3w i kart \u015brodk\xf3w ochrony indywidualnej, tworzenie tabel przydzia\u0142u odzie\u017cy roboczej, obuwia i \u015brodk\xf3w ochrony indywidualnej","prize":"do uzgodnienia"},{"id":15,"name":"Doradztwo w zakresie odzie\u017cy, obuwia roboczego i \u015brodk\xf3w ochrony indywidualnej oraz zbiorowej","prize":"cena do uzgodnienia"},{"id":16,"name":"Tworzenie akt\xf3w wewn\u0119trznych w zakresie BHP i PPO\u017b.","prize":"cena do uzgodnienia"},{"id":17,"name":"Tworzenie list kontrolnych stanu BHP i PPO\u017b","prize":"cena do uzgodnienia"}],"firm":[{"id":0,"name":"do 20 pracownik\xf3w","prize":"od 700,00 PLN"},{"id":1,"name":"21 \u2013 50 pracownik\xf3w","prize":"od 850,00 PLN "},{"id":2,"name":"51 \u2013 100 pracownik\xf3w ","prize":"od 1000,00 PLN "},{"id":4,"name":"powy\u017cej 100 pracownik\xf3w","prize":"od 1150,00 PLN "}]}')},34:function(e,a,t){},35:function(e,a,t){},48:function(e,a,t){e.exports=t.p+"static/media/react.4ade5cac.png"},50:function(e,a,t){e.exports=t(83)},55:function(e,a,t){},60:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(20),l=t.n(o),c=(t(55),t(9)),r=t(10),s=t(12),m=t(11),u=t(13),d=t(5),p=(t(34),t(6)),z=(t(35),t(22)),w=t.n(z),h=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={active:!1,position:!1},t.handleActive=t.handleActive.bind(Object(p.a)(t)),t.handleMenuWidth=t.handleMenuWidth.bind(Object(p.a)(t)),t.handleSticky=t.handleSticky.bind(Object(p.a)(t)),t.refMenu=i.a.createRef(),t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"handleActive",value:function(){this.setState({active:!this.state.active})}},{key:"handleMenuWidth",value:function(){window.innerWidth<767?this.setState({active:!1}):this.setState({active:!0})}},{key:"handleSticky",value:function(){window.pageYOffset>this.refMenu.current.offsetHeight?this.setState({position:!0}):this.setState({position:!1})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleMenuWidth.bind(this)),window.addEventListener("scroll",this.handleSticky.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleMenuWidth.bind(this)),window.removeEventListener("scroll",this.handleSticky.bind(this))}},{key:"render",value:function(){var e=this.state.active;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{ref:this.refMenu,className:!0===this.state.position?"sticky":"nav-container"},i.a.createElement("div",{className:"navigation-elements col-12 col-xl-10"},i.a.createElement(d.b,{to:"/"},i.a.createElement("div",{className:"menu-logo"},i.a.createElement("img",{src:w.a,alt:"logo",style:{width:"100%",height:"100%"}}))),i.a.createElement("div",{className:"menu"},i.a.createElement("button",{className:this.state.active?"navbar-btnX":"navbar-btn",onClick:this.handleActive},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null)),i.a.createElement("div",{className:"contact-container"},i.a.createElement("ul",{style:!0===e?{display:"flex"}:null},i.a.createElement("li",null,i.a.createElement(d.b,{exact:!0,to:"/",onClick:this.handleActive,activeStyle:{color:"orange"}},i.a.createElement("i",{className:"fa fa-home fa-home li-icon"}),"Strona G\u0142\xf3wna")),i.a.createElement("li",null,i.a.createElement(d.b,{to:"/prize",onClick:this.handleActive,activeStyle:{color:"orange"}},i.a.createElement("i",{className:"fa fa-eur li-icon"}),"Cennik i Us\u0142ugi")),i.a.createElement("li",null,i.a.createElement(d.b,{to:"/contact",onClick:this.handleActive,activeStyle:{color:"orange"}},i.a.createElement("i",{className:"fa fa-phone-square li-icon"}),"Kontakt"))))))))}}]),a}(n.Component),E=t(2),k=(t(60),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"homepage-slider"},i.a.createElement("span",null,i.a.createElement("p",null,"Us\u0142ugi BHP i PPO\u017b")),i.a.createElement("br",null),i.a.createElement("span",null,i.a.createElement("p",null,"Bezpiecze\u0144stwo i ochrona pracy"))),i.a.createElement("section",{className:"container-homepage col-12"},i.a.createElement("div",{className:"homepage-info col-12 col-md-8 col-lg-12"},i.a.createElement("div",{className:"info-photo col-12 col-lg-6"}),i.a.createElement("div",{className:"info col-12 col-lg-6"},i.a.createElement("span",{className:"span-title"},"Czym si\u0119 zajmujemy ?"),i.a.createElement("span",{className:"span-description"},"Firma \u015bwiadczy us\u0142ugi BHP na najwy\u017cszym poziomie, z pe\u0142nym zaanga\u017cowaniem, na bie\u017c\u0105co szkoli w zakresie zarz\u0105dzania bezpiecze\u0144stwem i higien\u0105 pracy. Standardem jest zadowolenie pracownik\xf3w i pracodawc\xf3w z przeprowadzonych szkole\u0144. Stosuje jasne i zrozumia\u0142e, a zarazem skuteczne rozwi\u0105zania z zakresu bezpiecze\u0144stwa pracy zgodnie z polskim prawodawstwem. Us\u0142ugi \u015bwiadczy dora\u017anie wedle potrzeb lub poprzez umow\u0119 wsp\xf3\u0142pracy.")))),i.a.createElement("section",{className:"container-homepage col-12"},i.a.createElement("div",{className:"homepage-info col-12 col-md-8 col-lg-12"},i.a.createElement("div",{className:"info col-12 col-lg-6"},i.a.createElement("span",{className:"span-title"},"Firma Emdom-BHP realizuje:"),i.a.createElement("span",{className:"span-description"},i.a.createElement("ul",null,i.a.createElement("li",null,"wdra\u017canie system\xf3w bezpiecze\u0144stwa"),i.a.createElement("li",null,"przeprowadzanie kontroli stanu urz\u0105dze\u0144 technicznych BHP i PPO\u017b"),i.a.createElement("li",null,"zarz\u0105dzanie bezpiecze\u0144stwem i ochron\u0105 pracy wykorzystuj\u0105c najnowsze technologie i rozwi\u0105zania techniczne"),i.a.createElement("li",null,"dobieranie odpowiednich rozwi\u0105za\u0144 dla obni\u017cenia koszt\xf3w w firmie, a tym samym zwi\u0119kszenie wydajno\u015bci")))),i.a.createElement("div",{className:"info-photo col-12 col-lg-6"}))),i.a.createElement("section",{className:"container-homepage col-12"},i.a.createElement("div",{className:"homepage-info col-xl-12"},i.a.createElement("div",{className:"info"},i.a.createElement("p",null,"Firma Emdom-BHP zapewnia bezpiecze\u0144stwo w zakresie obs\u0142ugi r\xf3\u017cnych podmiot\xf3w gospodarczych, dotyczy to zar\xf3wno firm o dzia\u0142alno\u015bci typowo biurowej, jak i obs\u0142ugi BHP du\u017cych inwestycji budowlanych."),i.a.createElement("p",null,"\u015awiadczymy us\u0142ugi BHP na najwy\u017cszym poziomie, z pe\u0142nym zaanga\u017cowaniem, na bie\u017c\u0105co szkolimy w zakresie zarz\u0105dzania bezpiecze\u0144stwem i higien\u0105 pracy."),i.a.createElement("p",null,"Standardem jest zadowolenie pracownik\xf3w i pracodawc\xf3w z przeprowadzonych szkole\u0144. Stosuj\u0119 jasne i zrozumia\u0142e, a zarazem skuteczne rozwi\u0105zania z zakresu bezpiecze\u0144stwa pracy zgodnie z polskim prawodawstwem. Us\u0142ugi \u015bwiadczymy dora\u017anie wedle potrzeb lub poprzez umow\u0119 wsp\xf3\u0142pracy."),i.a.createElement("p",null,"Oferujemy us\u0142ugi BHP oraz PPO\u017b na terenie Warszawy, Radomia, Skaryszewa oraz okolic tych miast. Jeste\u015bmy r\xf3wnie\u017c otwarci na wsp\xf3\u0142prac\u0119 na terenie ca\u0142ego kraju. ")))),i.a.createElement("section",{className:"maps"},i.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1250800.7735279389!2d20.072840856956958!3d52.243923821372775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ed1800c8bd8f9%3A0x1029fb79438c080!2sMasovian%20Voivodeship!5e0!3m2!1sen!2spl!4v1605992890726!5m2!1sen!2spl",title:"map",style:{width:"100%",height:"100%"}})))}}]),a}(n.Component)),y=t(17),f=(t(28),t(31)),b=function(e){var a=e.name,t=e.prize;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"services-elements"},i.a.createElement("p",null,i.a.createElement("i",{className:"fas fa-check-circle"}),a),i.a.createElement("p",null,"Koszt: ",t)))},v=function(e){var a=e.value.map((function(e){return i.a.createElement(b,{key:e.id,name:e.name,prize:e.prize,color:e.color,font:e.font})}));return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"services col-12 col-xl-10"},a))},g=function(e){var a=e.name,t=e.prize;return i.a.createElement("div",{className:"prize-firm"},i.a.createElement("div",{className:"prize-employee"},i.a.createElement("p",{className:"name-prize"},"Zatrudnienie: ",i.a.createElement("br",null),a),i.a.createElement("br",null)),i.a.createElement("div",{className:"prize-prize"},i.a.createElement("p",{className:"prize"},"Cena: ",t)))},j=function(e){var a=e.value.map((function(e){return i.a.createElement(g,{key:e.id,name:e.name,prize:e.prize})}));return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"firm-container"},a),i.a.createElement("div",{className:"services-description col-12"},i.a.createElement("p",null,i.a.createElement("i",{className:"fa fa-exclamation-circle","aria-hidden":"true"})),i.a.createElement("p",null,"Powy\u017cszy cennik zawiera orientacyjne koszty us\u0142ug proponowanych przez moj\u0105 firm\u0119.",i.a.createElement("br",null)," Ka\u017cda oferta wyceniana jest indywidualnie i dostosowana do aktualnych zapotrzebowa\u0144 klienta.")))},N=function(){return i.a.createElement("div",{className:"docs-container col-12 col-lg-10"},i.a.createElement("div",{className:"docs"},i.a.createElement("p",null,"Wykonywanie pe\u0142nej dokumentacji powypadkowej:"),i.a.createElement("ul",null,i.a.createElement("li",null,"Uczestnictwo w komisjach powypadkowych"),i.a.createElement("li",null,"Sporz\u0105dzanie protoko\u0142\xf3w powypadkowych"),i.a.createElement("li",null,"Sporz\u0105dzanie kart wypadku"),i.a.createElement("li",null,"Sporz\u0105dzanie protoko\u0142\xf3w wys\u0142uchania poszkodowanych i \u015bwiadk\xf3w"),i.a.createElement("li",null,"Sporz\u0105dzanie kart Z-KW dla ZUS"))),i.a.createElement("div",{className:"docs"},i.a.createElement("p",null,"Opracowanie Oceny Ryzyka Zawodowego (ok. 40 stron) na poszczeg\xf3lnych stanowiskach pracy:"),i.a.createElement("ul",null,i.a.createElement("li",null,"Ka\u017cda opracowana ocena ryzyka zawodowego jest opracowana metod\u0105 akceptowan\u0105 przez Pa\u0144stwow\u0105 Inspekcj\u0119 Pracy tj. PN-N-18000, Risk Score, Pi\u0119ciu krok\xf3w, itd."),i.a.createElement("li",null,"Gwarantujemy przej\u015bcie pozytywnej kontroli przez Inspekcj\u0119 Pracy lub Sanepid.(wielokrotnie przechodzi\u0142a kontrole inspekcji pracy)")),i.a.createElement("p",null,"Zgodnie z art. 226 pracodawca ocenia i dokumentuje ryzyko zawodowe zwi\u0105zane z wykonywan\u0105 prac\u0105 oraz stosuje niezb\u0119dne \u015brodki profilaktyczne zmniejszaj\u0105ce ryzyko, a tak\u017ce informuje pracownik\xf3w o ryzyku zawodowym, kt\xf3re wi\u0105\u017ce si\u0119 z wykonywan\u0105 prac\u0105, oraz o zasadach ochrony przed zagro\u017ceniami. Oznacza to, \u017ce ocena ryzyka zawodowego jest obowi\u0105zkowa w ka\u017cdym zak\u0142adzie pracy bez wyj\u0105tk\xf3w. Ocena ryzyka zawodowego jest zgodnie z wymaganiami prawa jednym z podstawowych obowi\u0105zk\xf3w pracodawcy.")))},O=function(){var e=Object(n.useState)(f.uslugi),a=Object(y.a)(e,2),t=a[0],o=(a[1],Object(n.useState)(!0)),l=Object(y.a)(o,2),c=l[0],r=l[1],s=Object(n.useState)(f.firm),m=Object(y.a)(s,2),u=m[0],d=(m[1],Object(n.useState)(!1)),p=Object(y.a)(d,2),z=p[0],w=p[1],h=Object(n.useState)(!1),E=Object(y.a)(h,2),k=E[0],b=E[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"photo-header"},i.a.createElement("div",{className:"prize-header"},"Cennik us\u0142ug"),i.a.createElement("div",{className:"prize-services"},i.a.createElement("div",{style:c?{borderBottom:"5px solid orange"}:null,className:"prize-service",onClick:function(){r(!0),w(!1),b(!1)}},"Us\u0142ugi"),i.a.createElement("div",{style:z?{borderBottom:"5px solid orange"}:null,className:"prize-service",onClick:function(){r(!1),w(!0),b(!1)}},"Obs\u0142uga firm"),i.a.createElement("div",{style:k?{borderBottom:"5px solid orange"}:null,className:"prize-service",onClick:function(){r(!1),w(!1),b(!0)}},"Dokumentacja"))),i.a.createElement("section",{className:"section-prize col-12"},i.a.createElement("div",{className:"prize-container col-12"},i.a.createElement("p",{className:"service-title col-12 col-lg-10"},"Zakres i cennik \u015bwiadczonych us\u0142ug:"),c?i.a.createElement(v,{value:t}):null,z?i.a.createElement(j,{value:u}):null,k?i.a.createElement(N,null):null)))},C=t(23),P=t(85),S=(t(19),t(45)),x=t.n(S),A=t(15),B=function(){return{type:"SET_COOKIE"}},L=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"info-sent"},i.a.createElement("div",{className:"icon-sent"},i.a.createElement("i",{className:"fa fa-check ok-icon","aria-hidden":"true"})),i.a.createElement("p",null,"Formularz zosta\u0142 wys\u0142any, dzi\u0119kujemy za kontakt.")))},H=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"info-sent"},i.a.createElement("div",{className:"icon-sent"},i.a.createElement("i",{className:"fas fa-times","aria-hidden":"true"})),i.a.createElement("p",null,"Formularz z przyczyn technicznych nie zosta\u0142 wys\u0142any, wybacz. Prosz\u0119 zadzwo\u0144 do mnie lub napisz maila przez swoj\u0105 w\u0142asn\u0105 poczt\u0119. Dzi\u0119kuj\u0119. ")))},F=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"adress"},i.a.createElement("div",{className:"adress-element"},i.a.createElement("i",{className:"fas fa-home footer-icon"}),i.a.createElement("p",{className:"adress-element-title"},"Firma"),i.a.createElement("p",null,"EMDOM-BHP"),i.a.createElement("p",null,"Us\u0142ugi BHP i PPO\u017b")),i.a.createElement("div",{className:"adress-element"},i.a.createElement("i",{className:"fas fa-directions footer-icon"}),i.a.createElement("p",{className:"adress-element-title"},"Adres"),i.a.createElement("p",null,"26-640 Choment\xf3w-Puszcz"),i.a.createElement("p",null,"05-500 Piaseczno")),i.a.createElement("div",{className:"adress-element"},i.a.createElement("i",{className:"fas fa-envelope-open footer-icon"}),i.a.createElement("p",{className:"adress-element-title"},"Adres e-mail"),i.a.createElement("p",null,"emdom.bhp@gmail.com")),i.a.createElement("div",{className:"adress-element"},i.a.createElement("i",{className:"fas fa-phone-square footer-icon"}),i.a.createElement("p",{className:"adress-element-title"},"Telefon"),i.a.createElement("p",null,"503544971"))))},M=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).interval="",t.state={name:"",subject:"",phone:"",mail:"",text:"",count:3,stopInterval:!1,errors:{name:!1,subject:!1,phone:!1,mail:!1,text:!1},sent:null,spinner:!1},t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(t)),t.validation=t.validation.bind(Object(p.a)(t)),t.hideElement=t.hideElement.bind(Object(p.a)(t)),t.sendMail=t.sendMail.bind(Object(p.a)(t)),t.start=t.start.bind(Object(p.a)(t)),t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"handleChange",value:function(e){var a=e.target.name;this.setState(Object(C.a)({},a,e.target.value))}},{key:"hideElement",value:function(){var e=this.state,a=e.sent,t=e.count;if(a===a&&(this.setState((function(e){return{count:e.count-=1}})),t<0))return this.setState({sent:null,count:3}),clearInterval(this.interval)}},{key:"start",value:function(){var e=this;this.interval=setInterval((function(){e.hideElement()}),1e3)}},{key:"sendMail",value:function(){var e=this;x()("http://emdombhp.pl/mailer/index.php",{method:"post",mode:"no-cors",headers:{"Content-Type":"application/json"},data:JSON.stringify(this.state)}).then((function(a){200===a.status&&(e.setState({sent:!0,spinner:!1}),e.start())})).catch((function(a){e.setState({sent:!1,spinner:!1}),e.start()}))}},{key:"handleSubmit",value:function(e){e.preventDefault();var a=this.validation();a.validate?(this.sendMail(),this.setState({spinner:!0,name:"",subject:"",phone:"",mail:"",text:"",errors:{name:!1,subject:!1,phone:!1,mail:!1,text:!1}})):this.setState({errors:{name:!a.name,subject:!a.subject,phone:!a.phone,mail:!a.mail,text:!a.text}})}},{key:"validation",value:function(){var e=!1,a=!1,t=!1,n=!1,i=!1,o=!1,l=new RegExp(/[0-9]+$|^$/g),c=new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g);return this.state.name.length>2&&(e=!0),this.state.subject.length>5&&(a=!0),l.test(this.state.phone)&&(t=!0),c.test(this.state.mail)&&(n=!0),this.state.text.length>10&&(i=!0),e&&a&&t&&n&&i&&(o=!0),{name:e,subject:a,phone:t,mail:n,text:i,validate:o}}},{key:"render",value:function(){var e=this.state,a=e.sent,t=e.name,n=e.subject,o=e.phone,l=e.mail,c=e.text,r=e.errors,s=e.spinner;return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"contact-content col-12"},i.a.createElement("div",{className:"contact-background col-12 col-xl-10"},i.a.createElement("div",{className:"contact-header"},i.a.createElement("p",null,"Kontakt")),i.a.createElement("div",{className:"form-adress"},i.a.createElement("div",{className:"form-contact",style:!0===a||!1===a||!0===s?{display:"none"}:{display:"block"}},i.a.createElement("p",null,"Masz pytanie ? Wype\u0142nij formularz, oddzwoni\u0119 w ci\u0105gu 24h."),i.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0},i.a.createElement("input",{type:"text",value:t,name:"name",onChange:this.handleChange,placeholder:"Imi\u0119"}),i.a.createElement("p",{className:"error-info"},r.name?"Conajmniej 3 znaki":null),i.a.createElement("input",{type:"text",value:n,name:"subject",onChange:this.handleChange,placeholder:"Temat"}),i.a.createElement("p",{className:"error-info"},r.subject?"Temat zbyt kr\xf3tki":null),i.a.createElement("input",{type:"number",value:o,name:"phone",onChange:this.handleChange,placeholder:"Telefon - niewymagane",max:12}),i.a.createElement("p",{className:"error-info"},r.phone?"Numer zbyt kr\xf3tki":null),i.a.createElement("input",{type:"email",value:l,name:"mail",onChange:this.handleChange,placeholder:"Adres E-mail"}),i.a.createElement("p",{className:"error-info"},r.mail?"Niepoprawna struktra adresu":null),i.a.createElement("textarea",{type:"text",value:c,name:"text",onChange:this.handleChange,placeholder:"Wiadomo\u015b\u0107"}),i.a.createElement("p",{className:"error-info"},r.text?"Wiadomo\u015b\u0107 za kr\xf3tka":null),i.a.createElement("button",{className:"send-button",onClick:this.handleSubmit},"Wy\u015blij"))),s?i.a.createElement("div",{className:"spinner-content"},i.a.createElement(P.a,{as:"span",animation:"border",size:"xl",role:"status","aria-hidden":"true",className:"spinner-border"})):null,!0===a?i.a.createElement(L,null):null,!1===a?i.a.createElement(H,null):null,i.a.createElement(F,null)))))}}]),a}(n.Component),I=Object(A.b)((function(e){return{cookieSet:e.setCookie}}),(function(e){return{setCookie:function(){return e(B())}}}))(M),W=(t(79),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"section-content col-12"},i.a.createElement(E.c,null,i.a.createElement(E.a,{exact:!0,path:"/",component:k}),i.a.createElement(E.a,{path:"/prize",component:O}),i.a.createElement(E.a,{path:"/contact",component:I}))))}}]),a}(n.Component)),T=(t(80),t(48)),D=t.n(T),K=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("footer",{className:"footer col-12"},i.a.createElement("div",{className:"footer-content col-12 col-xl-10"},i.a.createElement("div",{className:"footer-logo col-12 col-sm-4 col-lg-3"},i.a.createElement("img",{src:w.a,alt:"footer-logo"})),i.a.createElement("div",{className:"footer-contact col-12 col-sm-8 col-lg-6"},i.a.createElement("p",{className:"footer-contact-title"},"Dane kontaktowe:"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("i",{className:"fa fa-home footer-icon"}),i.a.createElement("p",{className:"footer-info"},"EMDOM-BHP")),i.a.createElement("li",null,i.a.createElement("i",{className:"fa fa-automobile footer-icon"}),i.a.createElement("p",{className:"footer-info"},"26-640 Choment\xf3w-Puszcz,",i.a.createElement("br",null),"05-500 Piaseczno")),i.a.createElement("li",null,i.a.createElement("i",{className:"fa fa-phone-square footer-icon"}),i.a.createElement("p",{className:"footer-info"},"503544971")),i.a.createElement("li",null,i.a.createElement("i",{className:"fa fa-envelope-open footer-icon"}),i.a.createElement("p",{className:"footer-info"},"emdom.bhp@gmail.com")))),i.a.createElement("div",{className:"footer-nav col-12 col-lg-3"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(d.b,{exact:!0,to:"/"},"Strona G\u0142\xf3wna")),i.a.createElement("li",null,i.a.createElement(d.b,{to:"/prize"},"Cennik")),i.a.createElement("li",null,i.a.createElement(d.b,{to:"/contact"},"Kontakt"))))),i.a.createElement("div",{className:"preparation col-12"},i.a.createElement("p",null,"Przygotowanie: Wojciech \u017buwalski - \xa92020"),i.a.createElement("img",{src:D.a,alt:""}))))},R=(t(81),t(49)),V=function(){return{type:"CHECK_COOKIE"}},U=t(25),_=t.n(U),Z=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).handleCookie=function(){t.props.setCookie(),_.a.set("generalcookie","Cookies Pages",{expires:7}),t.props.checkCookie()},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"cookie-div"},i.a.createElement("p",null,"Strona korzysta z plik\xf3w cookie w celu realizacji us\u0142ug zgodnie z ",i.a.createElement("a",{href:"https://www.gov.pl/web/gov/polityka-dotyczaca-cookies",target:"_!blank"},"Polityk\u0105 Cookies"),". Mo\u017cesz okre\u015bli\u0107 warunki przechowywania lub dost\u0119pu mechanizmu cookie w Twojej przegl\u0105darce."),i.a.createElement("button",{onClick:this.handleCookie},"Akceptuj\u0119")))}}]),a}(n.Component),J=Object(A.b)((function(e){return{cookieSet:e.setCookie,cookieCheck:e.checkCookie}}),(function(e){return{setCookie:function(){return e(B())},checkCookie:function(){return e(V())}}}))(Z),$=(t(82),function(){var e=Object(A.c)();return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"information-alert"},i.a.createElement("div",{className:"alert-title"},i.a.createElement("button",{className:"close-alert",onClick:function(){e({type:"CLOSE_ALERT",isAlert:!1})}},i.a.createElement("span",null),i.a.createElement("span",null)),i.a.createElement("p",null,"Zapraszamy do skorzystania z us\u0142ug: ")),i.a.createElement("div",{className:"alert-content"},i.a.createElement("p",null,i.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"})," Ocena ryzyka COVID-19 "),i.a.createElement("p",null,i.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"})," Opracowywania planu dzia\u0142a\u0144 zapobiegawczych w zwi\u0105zku z zagro\u017ceniem SARS-CoV-2 (COVID-19) "),i.a.createElement("p",null,i.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"})," Wdro\u017cenie dzia\u0142a\u0144 zapobiegawczych w zwi\u0105zku z zagro\u017ceniem SARS-CoV-2 (COVID-19) "))))}),q=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;_.a.get("generalcookie")&&this.props.cookieSet(),setTimeout((function(){e.props.setAlert(!0)}),5e3)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{basename:"",onUpdate:function(){return window.scrollTo(0,0)}},i.a.createElement(R.a,null,i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement(h,null),i.a.createElement(W,null),i.a.createElement(K,null),!0===this.props.isAlert?i.a.createElement($,null):null,!0===this.props.cookieState?null:i.a.createElement(J,null))))))}}]),a}(n.PureComponent),G=Object(A.b)((function(e){return{cookieState:e.setCookie,cookieCheck:e.checkCookie,isAlert:e.isAlert}}),(function(e){return{cookieSet:function(){return e(B())},cookieCheck:function(){return e(B())},setAlert:function(a){return e({type:"CLOSE_ALERT",isAlert:a})}}}))(q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=t(24),Y=t(26),Q={setCookie:!1,checkCookie:!1,isAlert:!1},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_COOKIE":return Object(Y.a)({},e,{setCookie:!0});case"CHECK_COOKIE":return Object(Y.a)({},e,{checkCookie:!0});case"CLOSE_ALERT":return Object(Y.a)({},e,{isAlert:a.isAlert});default:return e}},ae=Object(X.b)(ee);l.a.render(i.a.createElement(A.a,{store:ae}," ",i.a.createElement(G,null)," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.39fb24af.chunk.js.map