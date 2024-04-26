import{i as C,s as J,x as p}from"./d29d05c2.js";import{_ as u,g as m,t as x,a as v,f as L,q as T,h as S,d as w,e as b,i as K}from"./0291be5f.js";import{n as h}from"./3f461019.js";var R=Object.freeze,H=Object.defineProperty,M=(r,n)=>R(H(r,"raw",{value:R(n||r.slice())})),k;class y{}y.cssBase=C(k||(k=M(['\n        :host{\n            display: block;\n            font-family: "oswaldFontLight", Arial, sans-serif;\n        }\n\n        .quiniela {\n            display: flex;\n            flex-direction: column;\n            width: 40%;\n        }\n\n        .equipos {\n            display: flex;\n            width: 100%;\n            padding-left: 10px;\n            overflow: hidden;\n        }\n\n        .equipo {\n            max-width: 100%;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n        }\n\n        .partido {\n            display: flex;\n            align-items: center;\n            width: 100%;\n        }\n\n        .puntos {\n            flex-grow: 1; /* Permite que la clase .puntos tome el espacio restante disponible */\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n        }\n\n        .opciones{\n            display: flex;\n            text-align: center;\n            white-space: nowrap;\n            width: 80px;\n            margin: 0 auto;\n            background-color: #ff9990;\n            white-space: nowrap;\n            font-size: 13px;\n            padding-left: 10px;\n            padding-right: 10px;\n            padding-top: 3px;\n            padding-bottom: 3px;\n        }\n\n        .elecciones{\n            text-align: center;\n            padding: 3px;\n            cursor:pointer;\n            width: 20px;\n            height: 19px;\n            margin-left: 3px;\n            background-color: #FFF;\n            color: #ff9990;\n            font-size: 13px;\n            text-transform: uppercase;\n            font-weight: 700;\n        }\n\n        .opcionesRegistrada {\n            justify-content: center;\n            align-items: center;\n            display: flex;\n            text-align: center;\n            margin: 0px auto;\n            background-color: rgb(255, 153, 144);\n            white-space: nowrap;\n            font-size: 13px;\n            padding: 3px 10px;\n        }\n\n        .eleccionesRegistrada{\n            text-align: center;\n            padding: 3px;\n            cursor:pointer;\n            width: 20px;\n            height: 19px;\n            margin-left: 3px;\n            background-color: #FFF;\n            color: #ff9990;\n            font-size: 13px;\n            text-transform: uppercase;\n            font-weight: 700;\n        }\n\n        .numPartido{\n            padding-right: 10px;\n            padding-left: 5px;\n            font-weight: 700;\n        }\n\n        .pink-line-double {\n            border: 0;\n            width: 100%;\n            height: 3px;\n            background-color: #ff9990;\n            margin: 0;\n        }\n\n        h2{\n            font-size: 30px;\n            font-family: "oswaldFontLight", Arial, sans-serif;\n            \n        }\n\n        .information{\n            background-color: #00245c;\n            color: #ffffff;\n            margin-top: 10px;\n            margin-bottom: 0px;\n            display: flex;\n            align-items: center;\n            justify-content: space-around;\n        }\n\n        .selected {\n            background-color: yellow;\n        }\n\n        .mensajeQuinielaRegistrada{\n            font-size: 13px;\n            color: #00245c;\n        }\n\n        .container{\n            display: flex;\n            width: 100%;\n            height: 90vh;\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n        }\n\n        .playerContainer{\n            display: flex;\n            flex-grow: 1;\n            background-color: green;\n        }\n\n        .player{\n            background-color: blue;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n        }\n\n        \n        @media screen and (max-width: 768px) {\n            .quiniela {\n                width: 100%; /* En dispositivos m\xF3viles, el ancho ser\xE1 del 100% */\n                font-size: 13px;\n            }\n        }\n\n        @media screen and (min-width: 768px) and (max-width: 1024px) {\n            .quiniela {\n                width: 70%; /* En tablets, el ancho ser\xE1 del 50% */\n                font-size: 15px;\n            }\n        }\n\n\n        \n\n       \n\n    ']))),y.HomePageTheme=[y.cssBase];class d extends J{constructor(){var n;super(),this.partidos=[],this.tituloJornada="",this.quinielaRegistrada=!1,this.resultadosQuiniela=[],this.usuarioNombre="",this.cuentaAtras="",this.selectedOptions={};const e=m(x);this.usuarioNombre=((n=e.currentUser)===null||n===void 0?void 0:n.displayName)||"",this.handleOptionClick=this.handleOptionClick.bind(this)}async connectedCallback(){super.connectedCallback(),await this.obtenerPartidos(),await this.verificarQuinielaRegistrada(),await this.obtenerResultadoQuiniela()}async obtenerPartidos(){const n=v(),e=L(n,"jornadaSe\xF1alada"),a=T(e),o=await S(a);let i=[];o.forEach(t=>{const s=t.data(),l=s.partidos;this.tituloJornada=s.titulo;const c=()=>{const f=this.calcularTiempoRestante(s.fechaHoraInicio);this.cuentaAtras="".concat(f.horas," horas, ").concat(f.minutos," minutos, ").concat(f.segundos," segundos restantes.")};c(),setInterval(()=>{c()},1e3),Object.entries(l).forEach(([f,z])=>{const q=z;i.push({partidoKey:f,equipoLocal:q.equipoLocal,equipoVisitante:q.equipoVisitante})})}),i.sort((t,s)=>t.partidoKey>s.partidoKey?1:-1),this.partidos=i}calcularTiempoRestante(n){const e=new Date(n).getTime(),a=new Date().getTime();let o=e-a;const i=Math.floor(o/(1e3*60*60));o%=1e3*60*60;const t=Math.floor(o/(1e3*60));o%=1e3*60;const s=Math.floor(o/1e3);return{horas:i,minutos:t,segundos:s}}async obtenerResultadoQuiniela(){var n;try{const e=m(x).currentUser;if(!e)throw new Error("No se ha iniciado sesi\xF3n");const a=v(),o=w(a,"usuarios",e.uid),i=await b(o);if(!i.exists())throw new Error("No se encontr\xF3 el usuario");const t=(n=i.data())===null||n===void 0?void 0:n.quinielas[this.tituloJornada];if(!t||!t.partidos){this.resultadosQuiniela=[];return}const s=Object.entries(t.partidos).map(([l,c])=>({partido:l,resultado:c})).sort((l,c)=>l.partido.localeCompare(c.partido)).map(({resultado:l})=>l);this.resultadosQuiniela=s}catch(e){console.error("Error al obtener el resultado de la quiniela:",e),this.resultadosQuiniela=[]}}marcarResultado(n,e){console.log("Se marc\xF3 el resultado ".concat(e," para el partido ").concat(n))}handleOptionClick(n,e,a,o){const i=n.currentTarget;if(this.selectedOptions[e]){const t=this.selectedOptions[e];t&&t.classList.remove("selected")}i.classList.add("selected"),this.selectedOptions[e]=i,this.marcarResultado(a,o)}async enviarQuiniela(){const n=m(x).currentUser;if(!n){console.error("No se ha iniciado sesi\xF3n");return}const e={jornadas:{[this.tituloJornada]:{partidos:{}}}};for(const[i,t]of Object.entries(this.selectedOptions))if(t&&this.partidos[Number(i)]){const s=t.innerText;e.jornadas[this.tituloJornada].partidos["Partido".concat(Number(i)+1)]=s}const a=v(),o=w(a,"usuarios",n.uid);try{(await b(o)).exists()&&await K(o,{["quinielas.".concat(this.tituloJornada)]:e.jornadas[this.tituloJornada]})}catch(i){console.error("Error al enviar la quiniela:",i)}}async verificarQuinielaRegistrada(){var n;const e=m(x).currentUser;if(!e){console.error("No se ha iniciado sesi\xF3n");return}const a=v(),o=w(a,"usuarios",e.uid);try{const i=await b(o);if(i.exists()){const t=(n=i.data())===null||n===void 0?void 0:n.quinielas[this.tituloJornada];this.quinielaRegistrada=!!t,this.quinielaRegistrada?console.log("La quiniela para la jornada",this.tituloJornada,"ya est\xE1 registrada"):console.log("La quiniela para la jornada",this.tituloJornada,"no est\xE1 registrada a\xFAn")}else console.error("No se encontr\xF3 el usuario")}catch(i){console.error("Error al verificar la quiniela registrada:",i)}}}u([h({type:Array})],d.prototype,"partidos",void 0),u([h({type:String})],d.prototype,"tituloJornada",void 0),u([h({type:Boolean})],d.prototype,"quinielaRegistrada",void 0),u([h({type:Array})],d.prototype,"resultadosQuiniela",void 0),u([h({type:String})],d.prototype,"usuarioNombre",void 0),u([h({type:String})],d.prototype,"cuentaAtras",void 0);var j=Object.freeze,U=Object.defineProperty,g=(r,n)=>j(U(r,"raw",{value:j(n||r.slice())})),E,F,Q,O,A,N;class P extends d{static finalizeStyles(n){return[...super.finalizeStyles(n),...y.HomePageTheme]}render(){return p(Q||(Q=g(['\n            <div class="container">\n                <div class="quiniela">\n                    <div class="information">\n                        <h2>',"</h2>\n                        <span>",'</span>\n                    </div>\n                    <hr class="pink-line-double">\n                    ',"\n                    ","\n                    ",'\n                </div>\n                <div class="playerContainer">\n                    <div class="player">\n                        <span>CHOPE</span>\n                    </div>\n                </div>\n            </div>\n            \n            \n        '])),this.tituloJornada,this.cuentaAtras,this.partidos.map((n,e)=>p(E||(E=g(['\n                        <div class="partido">\n                            <div class="equipos">  \n                                <div class="equipo">','</div>\n                                <div class="separator">-</div>\n                                <div class="equipo">','</div>\n                            </div>\n                            \n                            <div class="numPartido">',"</div>\n                            ",'\n                        </div>\n                        <hr class="pink-line-double">\n                    '])),n.equipoLocal,n.equipoVisitante,n.partidoKey.charAt(n.partidoKey.length-1),this.quinielaRegistrada?this.renderQuinielaRegistrada(e):this.renderQuinielaNoRegistrada(e,n))),this.quinielaRegistrada?"":p(F||(F=g(["<button @click=",">Enviar quiniela</button>"])),this.enviarQuiniela),this.quinielaRegistrada?this.renderMensajeQuinielaRegistrada():"")}renderMensajeQuinielaRegistrada(){return p(O||(O=g(['\n        <div class="mensajeQuinielaRegistrada">\n            <p>Estimado ',",</p>\n            <p>Nos complace informarte que has completado tu quiniela para la jornada actual. \xA1Enhorabuena por tu participaci\xF3n!</p>\n            <p>Es importante destacar que tu quiniela ha sido registrada satisfactoriamente y no podr\xE1 ser modificada. Confiamos en que tus selecciones te traigan la mejor de las suertes en los emocionantes encuentros por venir.</p>\n            <p>\xA1Te deseamos mucho \xE9xito y que disfrutes de la emoci\xF3n del juego!</p>\n            <p>Atentamente,<br>El equipo de soporte de FUTSALQUINIELAS.</p>\n        </div>\n            \n        "])),this.usuarioNombre)}renderQuinielaRegistrada(n){return p(A||(A=g(['\n            <div class="opcionesRegistrada">\n                <div class="eleccionesRegistrada">',"</div>\n            </div>\n        "])),this.resultadosQuiniela[n])}renderQuinielaNoRegistrada(n,e){return p(N||(N=g(['\n            <div class="opciones">\n                <div class="elecciones" @click="','">1</div>\n                <div class="elecciones" @click="','">X</div>\n                <div class="elecciones" @click="','">2</div>\n            </div>\n        '])),a=>this.handleOptionClick(a,n,e.partidoKey,"1"),a=>this.handleOptionClick(a,n,e.partidoKey,"X"),a=>this.handleOptionClick(a,n,e.partidoKey,"2"))}}window.customElements.define("home-page",P);export{P as HomePageView};
