import{i as L,s as U,R as S,x as u}from"./4d8d4512.js";import{_ as p,g as x,t as v,a as f,f as Q,h as R,q as K,d as y,e as w,i as H}from"./6e5d9c4c.js";import{n as h}from"./3f461019.js";var k=Object.freeze,M=Object.defineProperty,D=(r,n)=>k(M(r,"raw",{value:k(n||r.slice())})),E;class b{}b.cssBase=L(E||(E=D(['\n        :host{\n            display: block;\n            font-family: "oswaldFontLight", Arial, sans-serif;\n        }\n\n        .quiniela {\n            display: flex;\n            flex-direction: column;\n            width: 40%;\n        }\n\n        .equipos {\n            display: flex;\n            width: 100%;\n            padding-left: 10px;\n            overflow: hidden;\n        }\n\n        .equipo {\n            max-width: 100%;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n        }\n\n        .partido {\n            display: flex;\n            align-items: center;\n            width: 100%;\n        }\n\n        .puntos {\n            flex-grow: 1; /* Permite que la clase .puntos tome el espacio restante disponible */\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n        }\n\n        .opciones{\n            display: flex;\n            text-align: center;\n            white-space: nowrap;\n            width: 80px;\n            margin: 0 auto;\n            background-color: #ff9990;\n            white-space: nowrap;\n            font-size: 13px;\n            padding-left: 10px;\n            padding-right: 10px;\n            padding-top: 3px;\n            padding-bottom: 3px;\n        }\n\n        .elecciones{\n            text-align: center;\n            padding: 3px;\n            cursor:pointer;\n            width: 20px;\n            height: 19px;\n            margin-left: 3px;\n            background-color: #FFF;\n            color: #ff9990;\n            font-size: 13px;\n            text-transform: uppercase;\n            font-weight: 700;\n        }\n\n        .opcionesRegistrada {\n            justify-content: center;\n            align-items: center;\n            display: flex;\n            text-align: center;\n            margin: 0px auto;\n            background-color: rgb(255, 153, 144);\n            white-space: nowrap;\n            font-size: 13px;\n            padding: 3px 10px;\n        }\n\n        .eleccionesRegistrada{\n            text-align: center;\n            padding: 3px;\n            cursor:pointer;\n            width: 20px;\n            height: 19px;\n            margin-left: 3px;\n            background-color: #FFF;\n            color: #ff9990;\n            font-size: 13px;\n            text-transform: uppercase;\n            font-weight: 700;\n        }\n\n        .numPartido{\n            padding-right: 10px;\n            padding-left: 5px;\n            font-weight: 700;\n        }\n\n        .pink-line-double {\n            border: 0;\n            width: 100%;\n            height: 3px;\n            background-color: #ff9990;\n            margin: 0;\n        }\n\n        h2{\n            font-size: 30px;\n            font-family: "oswaldFontLight", Arial, sans-serif;\n            \n        }\n\n        .information{\n            background-color: #00245c;\n            color: #ffffff;\n            margin-bottom: 0px;\n            display: flex;\n            align-items: center;\n            justify-content: space-around;\n        }\n\n        .selected {\n            background-color: yellow;\n        }\n\n        .mensajeQuinielaRegistrada{\n            font-size: 13px;\n            color: #00245c;\n        }\n\n        .container{\n            width: 100%;\n            height: 90vh;\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n        }\n\n        .playerContainer {\n            margin-top: 20px;\n        }\n\n        table {\n            width: 40%;\n            border-collapse: collapse;\n            text-align: center;\n        }\n\n        th, td {\n            padding: 8px;\n            text-align: left;\n            border-bottom: 1px solid #ddd;\n        }\n\n        th {\n            background-color: #f2f2f2;\n        }\n\n        .player{\n            background-color: blue;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n        }\n\n        .enviarQuiniela{\n            width: 100%;\n            text-align: center;\n            padding-top: 20px;\n            \n        }\n\n        .butonEnviarQuiniela{\n            background-color: #00245c;\n            color: #ffffff;\n            padding: 10px;\n            border-radius: 14px;\n            opacity: 0.5;\n        }\n\n        .butonEnviarQuiniela:hover{\n            cursor: pointer;\n            opacity: 1;\n        }\n\n\n\n        \n        @media screen and (max-width: 768px) {\n            .quiniela {\n                width: 100%; /* En dispositivos m\xF3viles, el ancho ser\xE1 del 100% */\n                font-size: 13px;\n            }\n\n            .information{\n                display: block;\n                text-align: center;\n                padding-bottom: 10px;\n            }\n        }\n\n        @media screen and (min-width: 768px) and (max-width: 1247px) {\n            .quiniela {\n                width: 70%; /* En tablets, el ancho ser\xE1 del 50% */\n                font-size: 15px;\n            }\n\n            .information{\n                display: block;\n                text-align: center;\n                padding-bottom: 10px;\n            }\n        }\n\n\n        \n\n       \n\n    ']))),b.HomePageTheme=[b.cssBase];class d extends U{constructor(){var n;super(),this.partidos=[],this.tituloJornada="",this.quinielaRegistrada=!1,this.resultadosQuiniela=[],this.usuarioNombre="",this.cuentaAtras="",this.selectedOptions={},this.usuarios=[];const e=x(v);e&&e.currentUser?(this.usuarioNombre=((n=e.currentUser)===null||n===void 0?void 0:n.displayName)||"",console.log(e)):S.go("/login"),this.loadUsuarios(),this.handleOptionClick=this.handleOptionClick.bind(this)}async connectedCallback(){super.connectedCallback(),await this.obtenerPartidos(),await this.verificarQuinielaRegistrada(),await this.obtenerResultadoQuiniela()}async loadUsuarios(){const n=f(),e=Q(n,"usuarios"),t=await R(e),o=[];t.forEach(i=>{const a=i.data();if(a.userType==="User"){const s=this.calcularNumeroQuinielas(a.quinielas);o.push({nombre:a.username,numeroQuinielas:s,puntos:a.puntuacion||0})}}),this.usuarios=o.sort((i,a)=>a.puntos!==i.puntos?a.puntos-i.puntos:a.numeroQuinielas!==i.numeroQuinielas?a.numeroQuinielas-i.numeroQuinielas:i.nombre.localeCompare(a.nombre))}calcularNumeroQuinielas(n){return n?Object.keys(n).length:0}async obtenerPartidos(){const n=f(),e=Q(n,"jornadaSe\xF1alada"),t=K(e),o=await R(t);let i=[];o.forEach(a=>{const s=a.data(),c=s.partidos;this.tituloJornada=s.titulo;const m=()=>{const l=this.calcularTiempoRestante(s.fechaHoraInicio);this.cuentaAtras="".concat(l.horas," horas, ").concat(l.minutos," minutos, ").concat(l.segundos," segundos restantes."),l.horas<=0&&l.minutos<=0&&l.segundos<=0&&(this.cuentaAtras="Ya va a comenzar la jornada",this.quinielaRegistrada=!0)};m(),setInterval(()=>{m()},1e3),Object.entries(c).forEach(([l,T])=>{const q=T;i.push({partidoKey:l,equipoLocal:q.equipoLocal,equipoVisitante:q.equipoVisitante})})}),i.sort((a,s)=>a.partidoKey>s.partidoKey?1:-1),this.partidos=i}calcularTiempoRestante(n){const e=new Date(n).getTime(),t=new Date().getTime();let o=e-t;const i=Math.floor(o/(1e3*60*60));o%=1e3*60*60;const a=Math.floor(o/(1e3*60));o%=1e3*60;const s=Math.floor(o/1e3);return{horas:i,minutos:a,segundos:s}}async obtenerResultadoQuiniela(){var n;try{const e=x(v).currentUser;if(!e)throw new Error("No se ha iniciado sesi\xF3n");const t=f(),o=y(t,"usuarios",e.uid),i=await w(o);if(!i.exists())throw new Error("No se encontr\xF3 el usuario");const a=(n=i.data())===null||n===void 0?void 0:n.quinielas[this.tituloJornada];if(!a||!a.partidos){this.resultadosQuiniela=[];return}const s=Object.entries(a.partidos).map(([c,m])=>({partido:c,resultado:m})).sort((c,m)=>c.partido.localeCompare(m.partido)).map(({resultado:c})=>c);this.resultadosQuiniela=s}catch(e){console.error("Error al obtener el resultado de la quiniela:",e),this.resultadosQuiniela=[]}}marcarResultado(n,e){console.log("Se marc\xF3 el resultado ".concat(e," para el partido ").concat(n))}handleOptionClick(n,e,t,o){const i=n.currentTarget;if(this.selectedOptions[e]){const a=this.selectedOptions[e];a&&a.classList.remove("selected")}i.classList.add("selected"),this.selectedOptions[e]=i,this.marcarResultado(t,o)}async enviarQuiniela(){const n=x(v).currentUser;if(!n){console.error("No se ha iniciado sesi\xF3n");return}const e={jornadas:{[this.tituloJornada]:{partidos:{}}}};for(const[i,a]of Object.entries(this.selectedOptions))if(a&&this.partidos[Number(i)]){const s=a.innerText;e.jornadas[this.tituloJornada].partidos["Partido".concat(Number(i)+1)]=s}const t=f(),o=y(t,"usuarios",n.uid);try{(await w(o)).exists()&&await H(o,{["quinielas.".concat(this.tituloJornada)]:e.jornadas[this.tituloJornada]}),this.verificarQuinielaRegistrada(),this.obtenerResultadoQuiniela(),this.loadUsuarios()}catch(i){console.error("Error al enviar la quiniela:",i)}}async verificarQuinielaRegistrada(){var n;const e=x(v).currentUser;if(!e){console.error("No se ha iniciado sesi\xF3n");return}const t=f(),o=y(t,"usuarios",e.uid);try{const i=await w(o);if(i.exists()){const a=(n=i.data())===null||n===void 0?void 0:n.quinielas[this.tituloJornada];this.quinielaRegistrada=!!a,this.quinielaRegistrada?console.log("La quiniela para la jornada",this.tituloJornada,"ya est\xE1 registrada"):console.log("La quiniela para la jornada",this.tituloJornada,"no est\xE1 registrada a\xFAn")}else console.error("No se encontr\xF3 el usuario")}catch(i){console.error("Error al verificar la quiniela registrada:",i)}}}p([h({type:Array})],d.prototype,"partidos",void 0),p([h({type:String})],d.prototype,"tituloJornada",void 0),p([h({type:Boolean})],d.prototype,"quinielaRegistrada",void 0),p([h({type:Array})],d.prototype,"resultadosQuiniela",void 0),p([h({type:String})],d.prototype,"usuarioNombre",void 0),p([h({type:String})],d.prototype,"cuentaAtras",void 0),p([h({type:Array})],d.prototype,"usuarios",void 0);var j=Object.freeze,V=Object.defineProperty,g=(r,n)=>j(V(r,"raw",{value:j(n||r.slice())})),F,N,A,O,z,P,C;class J extends d{static finalizeStyles(n){return[...super.finalizeStyles(n),...b.HomePageTheme]}render(){return u(O||(O=g(['\n            <div class="container">\n                <div class="quiniela">\n                    <div class="information">\n                        <h2>',"</h2>\n                        <span>",'</span>\n                    </div>\n                    <hr class="pink-line-double">\n                    ',"\n                    ","\n                    ",'\n                </div>\n                <div class="playerContainer">\n                    <table>\n                        <tr>\n                            <th>Nombre</th>\n                            <th>N\xFAmero de Quinielas</th>\n                            <th>Puntos</th>\n                        </tr>\n                        ',"\n                    </table>\n                </div>\n            </div>\n            \n            \n        "])),this.tituloJornada,this.cuentaAtras,this.partidos.map((n,e)=>u(F||(F=g(['\n                        <div class="partido">\n                            <div class="equipos">  \n                                <div class="equipo">','</div>\n                                <div class="separator">-</div>\n                                <div class="equipo">','</div>\n                            </div>\n                            \n                            <div class="numPartido">',"</div>\n                            ",'\n                        </div>\n                        <hr class="pink-line-double">\n                    '])),n.equipoLocal,n.equipoVisitante,n.partidoKey.charAt(n.partidoKey.length-1),this.quinielaRegistrada?this.renderQuinielaRegistrada(e):this.renderQuinielaNoRegistrada(e,n))),this.quinielaRegistrada?"":u(N||(N=g(['<div class="enviarQuiniela"><button class="butonEnviarQuiniela" @click=',">Enviar quiniela</button></div>"])),this.enviarQuiniela),this.quinielaRegistrada?this.renderMensajeQuinielaRegistrada():"",this.usuarios.map(n=>u(A||(A=g(["\n                            <tr>\n                                <td>","</td>\n                                <td>","</td>\n                                <td>","</td>\n                            </tr>\n                        "])),n.nombre,n.numeroQuinielas,n.puntos)))}renderMensajeQuinielaRegistrada(){return u(z||(z=g(['\n        <div class="mensajeQuinielaRegistrada">\n            <p>Estimado ',",</p>\n            <p>Nos complace informarte que has completado tu quiniela para la jornada actual. \xA1Enhorabuena por tu participaci\xF3n!</p>\n            <p>Es importante destacar que tu quiniela ha sido registrada satisfactoriamente y no podr\xE1 ser modificada. Confiamos en que tus selecciones te traigan la mejor de las suertes en los emocionantes encuentros por venir.</p>\n            <p>\xA1Te deseamos mucho \xE9xito y que disfrutes de la emoci\xF3n del juego!</p>\n            <p>Atentamente,<br>El equipo de soporte de FUTSALQUINIELAS.</p>\n        </div>\n            \n        "])),this.usuarioNombre)}renderQuinielaRegistrada(n){return u(P||(P=g(['\n            <div class="opcionesRegistrada">\n                <div class="eleccionesRegistrada">',"</div>\n            </div>\n        "])),this.resultadosQuiniela[n])}renderQuinielaNoRegistrada(n,e){return u(C||(C=g(['\n            <div class="opciones">\n                <div class="elecciones" @click="','">1</div>\n                <div class="elecciones" @click="','">X</div>\n                <div class="elecciones" @click="','">2</div>\n            </div>\n        '])),t=>this.handleOptionClick(t,n,e.partidoKey,"1"),t=>this.handleOptionClick(t,n,e.partidoKey,"X"),t=>this.handleOptionClick(t,n,e.partidoKey,"2"))}}window.customElements.define("home-page",J);export{J as HomePageView};
