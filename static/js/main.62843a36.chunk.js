(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e){e.exports={a:[{id:"1",comarca:"Barcelona",nombre:"Hospital Vall d'Hebr\xf3n",habitaciones:"213",imagen:"https://res.cloudinary.com/dfb6ivozp/image/upload/v1617890084/imgVHB_ldt8dy.png"},{id:"2",comarca:"Madrid",nombre:"Clinico San Carlos",habitaciones:"543",imagen:"https://res.cloudinary.com/dfb6ivozp/image/upload/v1617890319/imgCSC_gbuwkq.png"},{id:"3",comarca:"Le\xf3n",nombre:"Hospital de Le\xf3n",habitaciones:"325",imagen:"https://www.icscyl.com/wp-content/uploads/2018/08/caule348-reduc.png"},{id:"4",comarca:"Barcelona",nombre:"Hospital de Bellvitge",habitaciones:"451",imagen:"https://blocdebellvitge.files.wordpress.com/2007/11/logo-hosptial-bellvitge.jpg?w=500"},{id:"5",comarca:"Madrid",nombre:"Hospital Universitario la Paz",habitaciones:"451",imagen:"https://www.fchp.es/wp-content/uploads/2018/11/hospital-la-paz.jpg"},{id:"6",comarca:"Barcelona",nombre:"Mois\xe9s Broggi",habitaciones:"451",imagen:"https://unes.cat/www/wp-content/uploads/2015/10/logo-hospital-st-joan-despi-moises-broggi.png"}]}},30:function(e,a,t){e.exports=t(49)},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){e.exports=t.p+"static/media/logo_copy.14c5f31b.png"},42:function(e,a,t){},43:function(e,a,t){},46:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(13),s=t.n(o),c=(t(35),t(17)),l=(t(36),t(51));function r(){var e=Object(n.useState)(!1),a=Object(c.a)(e,2),o=a[0],s=a[1],r=Object(n.useState)(!1),d=Object(c.a)(r,2),m=d[0],u=d[1];Object(n.useEffect)(function(){var e=window.matchMedia("(max-width: 700px)");return e.addListener(p),p(e),function(){e.removeListener(p)}},[]);var p=function(e){e.matches?u(!0):u(!1)};return i.a.createElement("header",{className:"Header"},i.a.createElement("img",{src:t(37),className:"Logo",alt:"logo"}),i.a.createElement(l.a,{in:!m||o,timeout:350,classNames:"NavAnimation",unmountOnExit:!0},i.a.createElement("nav",{className:"Nav"},i.a.createElement("a",{href:"/"},"Inicio"),i.a.createElement("a",{href:"/gestion"},"Tecnolog\xeda e innovaci\xf3n"),i.a.createElement("a",{href:"/hospitales"},"Hospitales"),i.a.createElement("a",{href:"/contacto"},"Contacto"))),i.a.createElement("button",{onClick:function(){s(!o)},className:"Burger"},i.a.createElement("img",{src:"https://res.cloudinary.com/dfb6ivozp/image/upload/v1618491735/menu_zfpcfn.png",alt:"Girl in a jacket",width:"500",height:"600",className:"menuOpen"})))}var d=t(3),m=t(4),u=t(6),p=t(5),g=t(7),v=t(26),h=t(2),E=(t(42),t(24)),f=function(e){function a(){var e;return Object(d.a)(this,a),(e=Object(u.a)(this,Object(p.a)(a).call(this))).state={hospitales:E.a},e}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.state.hospitales.map(function(e,a){return i.a.createElement("div",{className:"col-md-4",key:a},i.a.createElement("div",{className:"card mt-4"},i.a.createElement("div",{className:"card-title text-center"},i.a.createElement("h3",{className:"MarginTitle"},e.nombre),i.a.createElement("span",{className:"badge bg-secondary"},e.comarca),i.a.createElement("p",{className:"margenP"},e.habitaciones," habitaciones"),i.a.createElement("img",{className:"imgCard",src:e.imagen,width:"30%",alt:""}))))});return i.a.createElement(n.Fragment,null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"row listHosp"},e))),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"row"},e))))}}]),a}(n.Component),b=(t(43),t(25)),y=t.n(b);function N(){return i.a.createElement(n.Fragment,null,i.a.createElement("form",{className:"contact-form",onSubmit:function(e){e.preventDefault();var a=e.target.user_name.value,t=e.target.user_email.value,n=e.target.message.value;""===a||""===t||""===n?alert("Para poder enviar un mensaje, debe rellenar todos los campos."):y.a.sendForm("service_u5dqbty","template_0uw7uhm",e.target,"user_VHRwVv2wo1dOZEHUpaIKA").then(function(e){console.log(e.text)},function(e){console.log(e.text)})}},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-1"}),i.a.createElement("div",{className:"col-4"},i.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre...",name:"user_name"})),i.a.createElement("div",{className:"col-1"}),i.a.createElement("div",{className:"col-5"},i.a.createElement("input",{type:"email",className:"form-control ",name:"user_email",placeholder:"Email..."})),i.a.createElement("div",{className:"row marginText"},i.a.createElement("div",{className:"col-1"}),i.a.createElement("div",{className:"col-8"},i.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"3",name:"message",placeholder:"Mensaje..."})),i.a.createElement("div",{className:"col-2"},i.a.createElement("input",{type:"submit",value:"Enviar mensaje",className:"btnMsn btn btn-secondary"}))))))}var j=function(e){function a(){return Object(d.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement(n.Fragment,null,i.a.createElement(r,null),i.a.createElement("section",{id:"main-content"},i.a.createElement("article",null,i.a.createElement("header",null,i.a.createElement("h1",{className:"marginTop"},"Contacta con nosotros")),i.a.createElement("img",{src:"http://afinkados.es/attachments/Image/contacto-1-1024x336.jpg?template=generic",alt:"imagenInicio"}),i.a.createElement("div",{className:"container contactIcon"},i.a.createElement("div",{className:"row row-cols-4"},i.a.createElement("div",{className:"col-1 paddingIcon"},i.a.createElement("i",{className:"fas fa-home fa-2x",align:"center"})),i.a.createElement("div",{className:"col-7 paddingIcon"},"C/ Puig dels Tudons, 6, 08210 Barber\xe0 del Vall\xe8s - Barcelona"),i.a.createElement("div",{className:"col-1 paddingIcon"},i.a.createElement("i",{className:"fas fa-phone-volume fa-2x"})),i.a.createElement("div",{className:"col-3 paddingIcon"},"(+34) 933 638 787"))),i.a.createElement("div",{className:"container contactIcon"},i.a.createElement("div",{className:"row row-cols-4"},i.a.createElement("div",{className:"col-1 paddingIcon"},i.a.createElement("i",{className:"fas fa-tools fa-2x"})),i.a.createElement("div",{className:"col-7 paddingIcon"},i.a.createElement("a",{href:"mailto:sat@tanaki.es"},"sat@tanaki.es (Servicio Asistencia T\xe9cnica)")),i.a.createElement("div",{className:"col-1 paddingIcon"},i.a.createElement("i",{className:"fas fa-at fa-2x"})),i.a.createElement("div",{className:"col-3 paddingIcon"},i.a.createElement("a",{href:"mailto:tanaki@tanaki.es"},"tanaki@tanaki.es")))),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{className:"container"},i.a.createElement("h5",{className:" contactUs"},i.a.createElement("strong",null,"Para enviarnos tu sugerencia, puede hacerlo clickando sobre el servicio t\xe9cnico que desee contactar, o rellenando los campos siguientes."," "))),i.a.createElement(N,null),i.a.createElement("div",{className:"container satisfactionText"},i.a.createElement("p",null,"La satisfacci\xf3n del cliente es lo m\xe1s importante para el Grupo TANAKI Visi\xf3n. Todos nuestros departamentos cuentan con profesionales especializados y con las habilidades necesarias para conseguir la excelencia en todos nuestros servicios."," ")),i.a.createElement("div",{className:"container map"},i.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.260223499172!2d2.1476466147973508!3d41.52030357925215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4be18d2cb954d%3A0x39181e2ab463ebbd!2sAv.%20Puig%20dels%20Tudons%2C%206%2C%2008210%20Barcelona!5e0!3m2!1ses!2ses!4v1618208432071!5m2!1ses!2ses",width:"600",height:"300",style:{border:0},allowFullScreen:"",loading:"lazy",title:"This is a unique title"})))))}}]),a}(n.Component),w=function(e){function a(){return Object(d.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement(n.Fragment,null,i.a.createElement("footer",{id:"main-footer"},i.a.createElement("p",null,"\xa9 2021 ",i.a.createElement("a",{href:"https://www.tanaki.es"},"Grupo Tanaki Visi\xf3n"))))}}]),a}(n.Component),x=function(e){function a(){return Object(d.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement(n.Fragment,null,i.a.createElement(r,null),i.a.createElement("section",{id:"main-content"},i.a.createElement("article",null,i.a.createElement("header",null,i.a.createElement("h1",{className:"marginTop"},"Amplia experiencia en el sector sanitario")),i.a.createElement("img",{src:"https://res.cloudinary.com/dfb6ivozp/image/upload/v1617963644/SoftwareCd_e3yocm.jpg",alt:"imagenGestion"}),i.a.createElement("div",{className:"content"},i.a.createElement("p",null,"Todas las empresas del Grupo Tanaki Visi\xf3n est\xe1n dedicadas al desarrollo de la gesti\xf3n, explotaci\xf3n y comercializaci\xf3n de los servicios de televisi\xf3n, telefon\xeda e internet mediante la integraci\xf3n de las \xfaltimas tecnolog\xedas inform\xe1ticas, de imagen y de comunicaciones. El Grupo Tanaki Visi\xf3n cuenta con una amplia experiencia en el sector sanitario de m\xe1s de 28 a\xf1os y con los conocimientos necesarios y de desarrollo de las nuevas tecnolog\xedas, y siempre bas\xe1ndose en soluciones tecnol\xf3gicas innovadoras de f\xe1cil utilizaci\xf3n por parte de los usuarios, que ayudan a los centros sanitarios a mejorar la satisfacci\xf3n de sus pacientes y a incrementar la calidad de sus servicios."),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("h2",null,"Tecnolog\xeda e Innovaci\xf3n"),i.a.createElement("p",null,"El mundo actual cambia vertiginosamente debido a la aplicaci\xf3n de las nuevas tecnolog\xedas en todos los segmentos de mercado y, evidentemente, nuestro sector no es ajeno a estos cambios. Es por ello que el departamento de I+D de TANAKI a\xfana esfuerzos para mejorar constantemente sus equipos, trabajando siempre con las \xfaltimas tecnolog\xedas y los mejores materiales. Todos los equipos se dise\xf1an de forma minuciosa y analizando siempre el lugar donde ser\xe1n instalados. De ah\xed que se realizen estudios sobre la ergonom\xeda de los distintos equipos, sus formas y color y, ante todo, su facilidad de uso, de manera que resulte sencillo su manejo, sobre todo para ese grupo de usuarios cada vez mayor, la 3\xaa edad."),i.a.createElement("br",null),i.a.createElement("img",{className:"imgSize rounded mx-auto d-block",src:"https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/01/13/15473348073523.jpg",alt:"imagenInicio"}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("h2",null,"Tecnolog\xeda y Dise\xf1o"),i.a.createElement("p",null,"El Grupo Tanaki Visi\xf3n apuesta por la imagen y modernizaci\xf3n del Centro Sanitario ofreciendo las \xfaltimas novedades tecnol\xf3gicas, como la instalaci\xf3n de televisores preparados para la alta definici\xf3n HD ready para disfrutar de la mejor calidad de imagen y sonido y que incluyen las \xfaltimas tecnolog\xedas que permiten disfrutar de im\xe1genes de gran nitidez y de enorme realismo, de unos colores m\xe1s intensos y reales y de un contraste y claridad superior. El equipo de I+D de Tanaki crea la totalidad de sus propios sistemas de comunicaci\xf3n hospitalaria y ofrece una amplia gama de equipos que cubren todas las preferencias y prestaciones que los Centros Sanitarios necesitan."),i.a.createElement("br",null),i.a.createElement("img",{className:"imgSize rounded mx-auto d-block",src:"https://i1.wp.com/www.seisamed.com/wp-content/uploads/Hospitales-Integran-Entretenimiento-Educativo-En-TV-Tabletas-y-celulares.jpg?resize=600%2C315",alt:"imagenInicio"}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("h2",null,"Centro de Control"),i.a.createElement("p",null,"Gestelnet es un sistema aut\xf3nomo de gesti\xf3n de todas las comunicaciones de los pacientes del sector sanitario y mejora la calidad de la estancia mediante el control de la utilizaci\xf3n de cada servicio en cada habitaci\xf3n. Todos los puntos de venta est\xe1n conectados on-line con el centro de control, de forma que en cualquier momento se puede acceder remotamente para atender cualquier eventualidad, como por ejemplo, activar el servicio de televisi\xf3n de un paciente que no puede levantarse de la cama y/o conectar un televisor de forma gratuita a petici\xf3n del Centro Sanitario. Gestelnet recibe los datos de toda la actividad de los terminales desde cada punto de venta y permite activar o desactivar funciones remotamente o mediante decisiones propias del sistema.")))))}}]),a}(n.Component),C=t(28),O=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(u.a)(this,Object(p.a)(a).call(this,e))).state={index:"undefined"!==typeof e.selectedIndex?e.selectedIndex:-1},t.nodes=[],t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"componentWillReceiveProps",value:function(e){"undefined"!==typeof e.selectedIndex&&this.state.index!==e.selectedIndex&&this.toggle(e.selectedIndex)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"toggle",value:function(e,a){var t=this;if(clearTimeout(this.timeout),!a||(this.props.onChange&&this.props.onChange(e,this.state.index!==e,this.state.index!==e?e:-1),this.props.changeOnClick)){if(this.state.index>-1){var n=this.nodes[this.state.index].ref.children[1];n.style.height="".concat(n.children[0].offsetHeight,"px")}this.state.index===e||-1===e?setTimeout(function(){t.setState({index:-1})},50):setTimeout(function(){t.setState({index:e}),t.timeout=setTimeout(function(){t.nodes[e].ref.children[1].style.height="auto"},t.props.transitionDuration)},50)}}},{key:"getHeight",value:function(e){return e===this.state.index?this.nodes.length>e?this.nodes[e].ref.children[1].children[0].offsetHeight:"auto":0}},{key:"render",value:function(){var e=this,a={overflow:"hidden",transition:"height ".concat(this.props.transitionDuration,"ms ").concat(this.props.transitionTimingFunction)},t=i.a.Children.map(this.props.children,function(t,n){return i.a.createElement("div",{key:n,ref:function(a){e.nodes[n]={ref:a}},className:e.state.index===n?e.props.openClassName:""},i.a.createElement("div",{onClick:function(){return e.toggle(n,!0)}},t.props["data-header"]),i.a.createElement("div",{style:Object(C.a)({},a,{height:e.getHeight(n)})},t))});return i.a.createElement("div",{className:this.props.className},t)}}]),a}(i.a.Component);O.defaultProps={transitionDuration:500,transitionTimingFunction:"ease",openClassName:"open",changeOnClick:!0};var k=O,T=(t(46),function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(u.a)(this,Object(p.a)(a).call(this,e))).state={selectedIndex:0},t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement(n.Fragment,null,i.a.createElement(r,null),i.a.createElement("section",{id:"main-content"},i.a.createElement("article",null,i.a.createElement("header",null,i.a.createElement("h1",{className:"marginTop"},"Comunicaci\xf3n Integral para Centros Hospitalarios")),i.a.createElement("img",{src:"https://res.cloudinary.com/dfb6ivozp/image/upload/v1617961117/Red_ytls3i.jpg",alt:"imagenInicio"}),i.a.createElement(k,{className:"accordion",selectedIndex:this.state.selectedIndex,onChange:function(e,a,t){return console.log("#".concat(e," ").concat(a?"expanded":"collapsed"," (selectedIndex: ").concat(t,")"))}},i.a.createElement("div",{"data-header":"Trayectoria",className:"accordion-item"},i.a.createElement("p",null,"Han pasado m\xe1s de trenta a\xf1os desde que Tanaki inici\xf3 su actividad en el \xe1mbito de la comunicaci\xf3n sanitaria. M\xe1s de dos d\xe9cadas en las que nuestra empresa ha ido configur\xe1ndose hasta llegar a crear el Grupo Tanaki Visi\xf3n. Actualmente, la aplicaci\xf3n de la m\xe1s avanzada tecnolog\xeda y la continua investigaci\xf3n del sector hospitalario nos han permitido cubrir ampliamente las diversas necesidades en lo referente a la comunicaci\xf3n en centros sanitarios. Todo ello, unido al esfuerzo e iniciativa de un gran equipo de profesionales, han convertido al Grupo Tanaki Visi\xf3n en la empresa l\xedder de su sector. Y no s\xf3lo las cifras de cuota de mercado lo demuestran: hospitales y centros sanitarios han puesto en nosotros su confianza, alcanzando un alto nivel de integraci\xf3n en la comunicaci\xf3n entre sus dependencias, al mismo tiempo que ofrecen un mejor y m\xe1s c\xf3modo servicio a sus pacientes.")),i.a.createElement("div",{"data-header":"Canal de Informaci\xf3n Corporativo",className:"accordion-item"},i.a.createElement("p",null,"De entre las innovaciones introducidas por el Grupo Tanaki Visi\xf3n en el \xe1mbito de la comunicaci\xf3n sanitaria, cabe destacar los canales de informaci\xf3n internos gratuitos; canales de visi\xf3n libre en los que el Centro Sanitario puede emitir sus propios canales de informaci\xf3n. Los canales culturales no s\xf3lo son un medio de distracci\xf3n, sino que a la vez informan al paciente sobre temas que son de su inter\xe9s. Un ejemplo son los documentales did\xe1cticos que pueden emitirse en las \xe1reas de Pediatr\xeda o Maternidad. En definitiva, los canales culturales suponen una gran aportaci\xf3n a la comunicaci\xf3n sanitaria, ya que contribuyen a mejorar el servicio al paciente proporcion\xe1ndole informaci\xf3n de su inter\xe9s, adem\xe1s de una estancia m\xe1s amena en el hospital."),i.a.createElement("br",null),i.a.createElement("img",{className:"imgSize rounded mx-auto d-block",src:"http://blog.general-valencia.san.gva.es/wp-content/uploads/2014/01/2013_12_18_TV_interactivas_Hospital_General_de_Valencia-e1390837311320.jpg",alt:"imagenInicio"})),i.a.createElement("div",{"data-header":"Software de Gesti\xf3n",className:"accordion-item"},i.a.createElement("p",null,"El control de cada uno de los servicios contratados se encuentra centralizado en un servidor y se obtiene a trav\xe9s de todos los puntos de venta ubicados en los lugares indicados por la gerencia del Centro Sanitario. En cada uno de estos puntos de venta, el paciente podr\xe1 contratar el servicio deseado a trav\xe9s de la pantalla t\xe1ctil, como por ejemplo, el servicio de televisi\xf3n, con s\xf3lo seleccionarlo e introducir su n\xfamero de habitaci\xf3n. Una vez realizado el pago del servicio, se le activar\xe1 el TV de la habitaci\xf3n de forma totalmente autom\xe1tica. Adem\xe1s, el Centro Sanitario dispone de un Control absoluto de cada servicio mediante la informaci\xf3n facilitada de estad\xedsticas diarias, mensuales, trimestrales y anuales de cada habitaci\xf3n."),i.a.createElement("br",null),i.a.createElement("img",{className:"imgSize rounded mx-auto d-block",src:"https://st2.depositphotos.com/1037987/10279/i/950/depositphotos_102790948-stock-photo-senior-patient-watching-tv-in.jpg",alt:"imagenInicio"})),i.a.createElement("div",{"data-header":"Centro de Control",className:"accordion-item accordionEnd"},i.a.createElement("p",null,"Gestelnet es un sistema aut\xf3nomo de gesti\xf3n de todas las comunicaciones de los pacientes del sector sanitario y mejora la calidad de la estancia mediante el control de la utilizaci\xf3n de cada servicio en cada habitaci\xf3n. Todos los puntos de venta est\xe1n conectados on-line con el centro de control, de forma que en cualquier momento se puede acceder remotamente para atender cualquier eventualidad, como por ejemplo, activar el servicio de televisi\xf3n de un paciente que no puede levantarse de la cama y/o conectar un televisor de forma gratuita a petici\xf3n del Centro Sanitario. Gestelnet recibe los datos de toda la actividad de los terminales desde cada punto de venta y permite activar o desactivar funciones remotamente o mediante decisiones propias del sistema."))))))}}]),a}(n.Component)),I=function(e){function a(){return Object(d.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement(v.a,null,i.a.createElement(r,null),i.a.createElement(h.c,null,i.a.createElement(h.a,{path:"https://franbcn93.github.io/web_tnk/",exact:!0},i.a.createElement(T,null)),i.a.createElement(h.a,{path:"/gestion"},i.a.createElement(x,null)),i.a.createElement(h.a,{path:"/hospitales"},i.a.createElement(f,null)),i.a.createElement(h.a,{path:"/contacto"},i.a.createElement(j,null))),i.a.createElement(w,null))}}]),a}(n.Component);function q(){return i.a.createElement("div",{className:"container-fluid"},i.a.createElement(I,null))}var z=document.getElementById("root");s.a.render(i.a.createElement(q,null),z)}},[[30,1,2]]]);
//# sourceMappingURL=main.62843a36.chunk.js.map