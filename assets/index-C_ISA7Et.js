function J(x,e){const s=U();return J=function(t,n){return t=t-434,s[t]},J(x,e)}function U(){const x=["91995EuGOmm","supports","omit","crossOrigin","5297644ahcZJU","integrity","167568CeSfCa","type","12ERozpR","102XbjlOP","5090OCaJvK","modulepreload","referrerPolicy","119KENXJs","3107aRMCMG","anonymous","4QvRNKK","observe","childList",'link[rel="modulepreload"]',"include","href","1354611ZMyPLi","relList","LINK","credentials","63571vHlhlk","40908MQJgoR","rel","addedNodes","2835pHzqLn","tagName"];return U=function(){return x},U()}(function(x,e){const s=J,t=x();for(;;)try{if(-parseInt(s(455))/1*(parseInt(s(437))/2)+parseInt(s(451))/3*(-parseInt(s(445))/4)+-parseInt(s(461))/5*(-parseInt(s(438))/6)+parseInt(s(442))/7*(parseInt(s(435))/8)+-parseInt(s(459))/9*(-parseInt(s(439))/10)+-parseInt(s(465))/11+-parseInt(s(456))/12*(-parseInt(s(443))/13)===e)break;t.push(t.shift())}catch{t.push(t.shift())}})(U,329384),function(){const e=J,s=document.createElement("link")[e(452)];if(s&&s[e(462)]&&s[e(462)](e(440)))return;for(const c of document.querySelectorAll(e(448)))n(c);new MutationObserver(c=>{const o=e;for(const l of c)if(l[o(436)]===o(447))for(const u of l[o(458)])u[o(460)]===o(453)&&u[o(457)]===o(440)&&n(u)})[e(446)](document,{childList:!0,subtree:!0});function t(c){const o=e,l={};return c[o(434)]&&(l[o(434)]=c.integrity),c[o(441)]&&(l[o(441)]=c.referrerPolicy),c.crossOrigin==="use-credentials"?l[o(454)]=o(449):c[o(464)]===o(444)?l.credentials=o(463):l[o(454)]="same-origin",l}function n(c){const o=e;if(c.ep)return;c.ep=!0;const l=t(c);fetch(c[o(450)],l)}}();const a=_;(function(x,e){const s=_,t=x();for(;;)try{if(-parseInt(s(380))/1+parseInt(s(336))/2+-parseInt(s(417))/3+-parseInt(s(453))/4*(-parseInt(s(360))/5)+-parseInt(s(467))/6+-parseInt(s(460))/7+parseInt(s(407))/8===e)break;t.push(t.shift())}catch{t.push(t.shift())}})(q,254200);const h0={type:Phaser[a(301)],width:window[a(381)],height:window[a(450)],parent:"game-container",scale:{mode:Phaser[a(306)][a(429)],autoCenter:Phaser[a(306)][a(373)]},scene:{preload:g0,create:u0,update:b0},physics:{default:a(376),arcade:{gravity:{y:0}}}};let w,r,y,P,v,D,d,R,L,C,S,F,A,I=0,b=1,p,i0,i,Y=0,Q=0,V=0,X=0,z=!1;function _(x,e){const s=q();return _=function(t,n){return t=t-298,s[t]},_(x,e)}const p0=document[a(451)](a(426)),t0=document[a(451)](a(372)),K=document[a(451)](a(463)),n0=document[a(451)](a(410));l0()?(j(),window[a(362)](a(432),j),window[a(362)]("orientationchange",j)):K.style[a(408)]="none";document[a(451)](a(366))[a(362)](a(348),()=>o0(a(433))),document.getElementById(a(347))[a(362)](a(348),()=>o0(a(316)));function o0(x){const e=a;r=x,p0[e(477)][e(408)]="none",t0.style[e(408)]=e(328),t0[e(477)].backgroundImage=r===e(433)?e(395):e(440),document[e(451)](e(356)).textContent=r===e(433)?e(388):e(363),document[e(451)](e(444))[e(314)]=()=>{const s=e;t0.style[s(408)]=s(475),w=new Phaser.Game(h0),document.querySelector(s(299))[s(477)].display="block",z=!0,j()}}function g0(){const x=a;this[x(415)][x(411)]("sentinel-bg","/assets/sentinel-bg.png"),this[x(415)][x(411)](x(445),x(462)),this[x(415)][x(411)](x(302),x(401)),this.load.image(x(370),x(327)),this[x(415)].image(x(305),x(329)),this.load[x(411)](x(385),"/assets/project-ledgers.png"),this.load.image(x(420),x(405)),this[x(415)].image(x(478),"/assets/expense-reports.png"),this.load[x(411)]("emails","/assets/emails.png"),this[x(415)][x(411)](x(402),x(350)),this[x(415)][x(411)]("testimony",x(386)),this[x(415)][x(411)](x(375),"/assets/shredder.png"),this.load.image(x(332),x(300)),this[x(415)][x(411)]("printer",x(321)),this[x(415)][x(411)](x(456),x(323)),this[x(415)][x(341)](x(427),x(346)),this[x(415)][x(341)](x(309),x(442)),this.load[x(341)]("print",x(422))}function u0(){const x=a;i=Math[x(470)](this.scale[x(351)]/1920,this[x(413)][x(379)]/1080),p=r==="sentinel"?0:100,I=0,b=1,Y=0,Q=0,V=0,X=0,A=this[x(428)][x(411)](0,0,x(r==="sentinel"?304:445))[x(454)](0,0)[x(367)](this[x(413)][x(351)],this[x(413)].height)[x(387)](0),F=this[x(428)][x(361)](this.scale[x(351)]/2,65*i,this[x(413)][x(351)],130*i,0,.8)[x(454)](.5,.5)[x(387)](1),P=this[x(428)][x(411)](this[x(413)].width/2,this.scale[x(379)]-100*i,"shredder")[x(320)]().setScale(i*1.5)[x(387)](2),v=this[x(428)][x(411)](this[x(413)][x(351)]/2,this[x(413)][x(379)]-100*i,"scanner").setInteractive()[x(414)](i*1.2).setDepth(2),D=this[x(428)][x(411)](this[x(413)][x(351)]-190*i,this[x(413)][x(379)]-120*i,x(472)).setInteractive()[x(414)](i*1.3)[x(387)](2),P[x(364)]=r==="sentinel",v.visible=r===x(316),D.visible=!0;const e=this[x(413)][x(351)]/2-100*i;R=this.add.rectangle(this[x(413)].width/2,90*i,e,20*i)[x(365)](2,16777215)[x(454)](.5,0).setDepth(2),d=this[x(428)][x(361)]((this[x(413)].width-e)/2,90*i,e,20*i,(r===x(433),65280))[x(454)](0,0)[x(387)](2),L=this.add[x(298)](this[x(413)][x(351)]/2,20*i,r===x(433)?"Auditor's Suspicion":x(455),{fontSize:20*Math[x(447)](i,.7)+"px",color:"#fff",align:"center"})[x(454)](.5,0).setDepth(2),W(this,0),C=this[x(428)][x(298)](this[x(413)][x(351)]-50*i,20*i,x(399)+I,{fontSize:20*Math.max(i,.7)+"px",color:x(469),align:x(480)})[x(454)](1,0).setDepth(2),S=this.add[x(298)](this.scale.width-50*i,90*i,"x"+b,{fontSize:20*Math[x(447)](i,.7)+"px",color:x(469),align:x(480)})[x(454)](1,0).setDepth(2),y=this.physics[x(428)].group({depth:10}),this[x(390)].on(x(476),(s,t)=>{z&&(t.isDragging=!0)}),this[x(390)].on(x(359),(s,t,n,c)=>{const o=x,l=50*i,u=this[o(413)][o(351)]-50*i,g=50*i,O=this[o(413)][o(379)]-50*i;t.x=Phaser[o(398)][o(377)](n,l,u),t.y=Phaser.Math[o(377)](c,g,O),t[o(344)]&&(t[o(344)].x=t.x,t[o(344)].y=t.y-60*i)}),this.input.on("dragend",(s,t)=>{const n=x;t[n(317)]=!1,z?y0(this,s,t):(t.timerCircle&&t[n(344)][n(337)](),y[n(340)](t,!0,!0))}),i0=this[x(330)].addEvent({delay:800,callback:S0,callbackScope:this,loop:!0}),this[x(330)][x(335)]({delay:1e3,callback:I0,callbackScope:this,loop:!0}),this[x(413)].on(x(432),k0,this)}function b0(){const x=a;if(!z||!y||!y[x(334)])return;const e=[];y.children[x(318)](s=>{const t=x;s&&s.timer!==void 0&&(s.timer-=this[t(421)][t(448)][t(409)]/1e3,w0(s),s.timer<=0&&(s[t(434)](!1),s[t(344)]&&s[t(344)][t(434)](!1),!s[t(317)]&&e[t(312)](s)))}),e[x(345)](s=>{const t=x;if(s.timerCircle&&s[t(344)][t(337)](),!s.getData(t(308))){let n;switch(s.texture.key){case(r===t(433)?t(370):"expense-reports"):n=r==="sentinel"?1:-1;break;case(r===t(433)?"operation-briefs":t(343)):n=r===t(433)?10:-10;break;case(r===t(433)?t(385):"ledgers"):n=r==="sentinel"?20:-20;break}W(this,n)}b=1,S.setText("x"+b),y[t(340)](s,!0,!0)})}function c0(x,e){const s=a;x.tweens[s(428)]({targets:e,angle:{from:-2,to:2},duration:100,yoyo:!0,repeat:2,ease:s(479),onComplete:()=>{const t=s;e[t(464)]=0}})}function q(){const x=["children","addEvent","227350KdHnNr","destroy","(orientation: portrait)","Geom","remove","audio","scaleX","emails","timerCircle","forEach","/assets/shred.mp3","dogeMode","click","Between","/assets/ledgers.png","width","default","textContent","floor","sprite","instructions-text","Printed ","points","drag","435TZUBTh","rectangle","addEventListener","You’re a whistleblower fighting to expose corruption! Drag expense reports, emails, and ledgers to the scanner to build your case. Drag testimony (green) to the printer to gain support. Fail, and trust is lost!","visible","setStrokeStyle","sentinelMode","setDisplaySize"," pts","testimony","field-expense-logs","random","instructions-screen","CENTER_BOTH","Testimonies","shredder","arcade","Clamp","split","height","468683PgZZFm","innerWidth","bold","originalX","Decoy Reports","project-ledgers","/assets/testimony.png","setDepth","You’re a loyal agent protecting a vital cause! Drag field logs, briefs, and ledgers to the shredder before auditors strike. Drag decoy reports (green) to the printer to mislead them. Fail, and it’s Audit Bust!","reduce","input"," pts)","matchMedia","key","Scanned","url('/assets/sentinel-bg.png')","timer","Base Total: 0 pts","Math","Score: ","Base Total: ","/assets/summary-bg.png","ledgers","Intersects","Emails","/assets/decoy-reports.png","sound","11341520iulWhd","display","delta","muteButton","image","setText","scale","setScale","load","progress","1468209JkdQOo","resume","getData","decoy-reports","game","/assets/print.mp3","print","scene","Multiplier Bonus: ","start-screen","shred","add","RESIZE","beginPath","play","resize","sentinel","setVisible","center","strokePath","delayedCall","Quad.easeOut","Audit Bust!","url('/assets/doge-bg.png')","mute","/assets/scan.mp3","matches","startButton","doge-bg","addCounter","max","loop","texture","innerHeight","getElementById","Back.easeOut","22368OFuHvf","setOrigin","Public Trust","paper-airplane",": 0 (0 pts)","meterChange","weight","2162902iByZCF","Operation Briefs","/assets/doge-bg.png","orientationOverlay","angle","Expense Reports","lineStyle","2979582BCnLmY","test","#fff","min","create","printer","RectangleToRectangle","setSize","none","dragstart","style","expense-reports","Sine.easeInOut","right","text","canvas","/assets/scanner.png","AUTO","summary-bg","list","sentinel-bg","operation-briefs","Scale","setPosition","isBeneficial","scan","tweens","Shredded","push","fillColor","onclick","getValue","doge","isDragging","each","setStyle","setInteractive","/assets/printer.png","Project Ledgers","/assets/paper-airplane.png","setData","pause","Ledgers","/assets/field-expense-logs.png","flex","/assets/operation-briefs.png","time","Power2","scanner","delay"];return q=function(){return x},q()}function r0(x,e,s){const t=a;x[t(310)][t(428)]({targets:e,scale:{from:e[t(413)]*1.5,to:0},alpha:{from:1,to:0},y:s.y,duration:300,ease:t(331),onComplete:()=>{const n=t;e.timerCircle&&e.timerCircle[n(337)](),y[n(340)](e,!0,!0),C&&C[n(412)]&&C[n(412)]("Score: "+I),S&&S[n(412)]&&S[n(412)]("x"+b)}})}function m0(x,e,s){const t=a,n=x[t(428)][t(355)](e.x,e.y,t(456))[t(414)](i*2)[t(387)](3),c=s[t(351)]*s[t(342)],o=s.x+c;x[t(310)][t(428)]({targets:n,x:o,y:s.y+s[t(379)]*i/2,scale:i*.4,duration:750,ease:t(438),onUpdate:l=>{const u=t;n[u(464)]=Math.sin(l[u(416)]*Math.PI)*10},onComplete:()=>{const l=t;x[l(310)][l(428)]({targets:s,scaleY:1.2*i,duration:100,yoyo:!0,onComplete:()=>{n[l(337)]()}})}})}function y0(x,e,s){const t=a;if(!s||s[t(396)]===void 0)return;const n=r===t(433)?P:v,c=D,o=s.timer>0;if(s[t(419)](t(308))){if(Phaser[t(339)][t(403)][t(473)](s.getBounds(),c.getBounds()))if(o){r0(x,s,c),c0(x,c),x.sound[t(431)](t(423),{volume:.5}),I+=s[t(419)]("points")*b,C[t(412)](t(399)+I);const l=r===t(433)?-25:25;W(x,l),m0(x,c,d),b=Math.min(b+1,5),S[t(412)]("x"+b),X++}else s[t(344)]&&s[t(344)][t(337)](),y[t(340)](s,!0,!0)}else Phaser[t(339)][t(403)].RectangleToRectangle(s.getBounds(),n.getBounds())&&(o?(r0(x,s,n),c0(x,n),r===t(433)?x[t(406)][t(431)](t(427),{volume:.5}):x[t(406)][t(431)](t(309),{volume:.5}),I+=s[t(419)]("points")*b,C[t(412)]("Score: "+I),W(x,0),b=Math[t(470)](b+1,5),S[t(412)]("x"+b),s[t(449)][t(393)]===(r===t(433)?t(370):t(478))?Y++:s[t(449)][t(393)]===(r===t(433)?t(305):t(343))?Q++:s[t(449)][t(393)]===(r===t(433)?t(385):t(402))&&V++):(s[t(344)]&&s[t(344)].destroy(),y[t(340)](s,!0,!0)))}function S0(){const x=a,e=100*i,s=this[x(413)].width-100*i,t=150*i,n=this[x(413)][x(379)]/2,c=Phaser[x(398)].Between(e,s),o=Phaser[x(398)][x(349)](t,n),l=r===x(433)?[{key:"field-expense-logs",points:10,meterChange:1,weight:50},{key:x(305),points:20,meterChange:10,weight:30},{key:"project-ledgers",points:50,meterChange:20,weight:20}]:[{key:x(478),points:10,meterChange:1,weight:50},{key:x(343),points:20,meterChange:10,weight:30},{key:x(402),points:50,meterChange:20,weight:20}],u=r===x(433)&&p>30||r===x(316)&&p<70;let g=[...l];u&&g[x(312)]({key:r===x(433)?x(420):x(369),points:100,meterChange:25,weight:10});const O=g[x(389)]((k,$)=>k+$.weight,0);let G=Math[x(371)]()*O,M;for(const k of g)if(G-=k[x(459)],G<=0){M=k;break}const m=y[x(471)](c,o,M[x(393)])[x(320)]({draggable:!0}).setScale(i*1.8)[x(387)](10)[x(324)](x(358),M[x(358)])[x(324)](x(458),M[x(458)])[x(324)](x(308),M.key===x(420)||M[x(393)]===x(369));m.isDragging=!1,this[x(310)][x(428)]({targets:m,scale:i*1.5,duration:200,ease:x(452)}),m[x(396)]=3,m[x(344)]=C0(this,m.x,m.y-60*i),m[x(383)]=m.x,m.originalY=m.y}function C0(x,e,s){const t=a;return x[t(428)].graphics({x:e,y:s})[t(387)](10)}function w0(x){const e=a;if(!x||!x[e(344)])return;const s=x.timer/3;x[e(344)].clear(),x[e(344)][e(466)](8*i,16777215),x.timerCircle[e(430)](),x[e(344)].arc(0,0,20*i,-Math.PI/2,2*Math.PI*s-Math.PI/2,!1),x[e(344)][e(436)]()}function W(x,e=0){const s=a;p=p+e,p=Phaser[s(398)].Clamp(p,0,100),d&&(d[s(342)]=p/100),r===s(433)?p<=25?d[s(313)]=65280:p<=50?d[s(313)]=16776960:p<=75?d[s(313)]=16753920:d.fillColor=16711680:p>75?d[s(313)]=65280:p>50?d.fillColor=16776960:p>25?d.fillColor=16753920:d[s(313)]=16711680,p===(r===s(433)?100:0)&&M0(x)}function I0(x){const e=a;i0[e(333)]=Math.max(i0[e(333)]-8,300)}function M0(x){const e=a;x.time.removeAllEvents(),x[e(310)].killAll(),y.children.each(f=>{const h=e;f&&!f[h(317)]&&(f[h(344)]&&f[h(344)][h(337)](),y[h(340)](f,!0,!0))}),A&&A[e(337)](),F&&F[e(337)](),P&&P[e(337)](),v&&v[e(337)](),D&&D[e(337)](),R&&R[e(337)](),d&&d[e(337)](),L&&L[e(337)](),C&&C.destroy(),S&&S[e(337)](),x[e(334)][e(303)][e(345)](f=>{const h=e;f[h(317)]||f[h(337)]()}),x[e(428)][e(411)](0,0,e(302))[e(454)](0,0).setDisplaySize(x.scale[e(351)],x[e(413)].height).setDepth(0),x[e(428)][e(361)](x[e(413)][e(351)]/2,x[e(413)][e(379)]/2,x[e(413)][e(351)],x[e(413)].height*.6,0,.8)[e(454)](.5,.5)[e(387)](1);const s=r===e(433)?e(311):e(394),t=e(r==="sentinel"?384:374),n=Math[e(470)](x[e(413)][e(351)]/20,x[e(413)][e(379)]/30),c=x[e(413)][e(379)]/20,o=x[e(413)].height*.6,l=(x.scale[e(379)]-o)/2,u=7*n+10*c,g=l+(o-u)/2;x[e(428)][e(298)](x[e(413)][e(351)]/2,g,""+(r===e(433)?e(439):"Trust Lost!"),{fontSize:n*1.5+"px",fontStyle:e(382),color:e(469),align:"center"})[e(454)](.5).setDepth(2);const O=x[e(428)][e(298)](x[e(413)][e(351)]/2,g+2*c,s+" "+(r===e(433)?"Field Expense Logs":e(465))+e(457),{fontSize:n+"px",color:e(469),align:e(435)})[e(454)](.5)[e(387)](2),G=x.add[e(298)](x[e(413)][e(351)]/2,g+3*c,s+" "+(r===e(433)?e(461):e(404))+": 0 (0 pts)",{fontSize:n+"px",color:e(469),align:e(435)}).setOrigin(.5)[e(387)](2),M=x[e(428)][e(298)](x.scale[e(351)]/2,g+4*c,s+" "+(r===e(433)?e(322):e(326))+e(457),{fontSize:n+"px",color:e(469),align:e(435)})[e(454)](.5).setDepth(2),m=x.add[e(298)](x.scale[e(351)]/2,g+5*c,e(357)+t+e(457),{fontSize:n+"px",color:e(469),align:"center"}).setOrigin(.5)[e(387)](2),k=x[e(428)].text(x.scale[e(351)]/2,g+7*c,e(397),{fontSize:n+"px",color:e(469),align:e(435)}).setOrigin(.5)[e(387)](2),$=x[e(428)].text(x[e(413)][e(351)]/2,g+9*c,e(425)+(I-(Y*10+Q*20+V*50+X*100))+e(368),{fontSize:n+"px",color:"#fff",align:"center"})[e(454)](.5)[e(434)](!1).setDepth(2),d0=x[e(428)][e(298)](x[e(413)][e(351)]/2,g+11*c,"Final Score: "+I,{fontSize:n*1.3+"px",fontStyle:e(382),color:e(469),align:e(435)})[e(454)](.5)[e(434)](!1)[e(387)](2);let x0=0;function N(f,h,a0,f0,Z){const T=e;if(h===0){Z&&Z(0);return}let e0=0,H=0;x[T(310)][T(446)]({from:0,to:h,duration:Math[T(470)](h*200,f0),onUpdate:E=>{const B=T;e0=Math[B(354)](E[B(315)]()),H=e0*a0,f[B(412)](f.text[B(378)](":")[0]+": "+e0+" ("+H+B(391)),k.setText("Base Total: "+(x0+H)+B(368))},onComplete:()=>{const E=T;x0+=H,k[E(412)](E(400)+x0+E(368)),Z&&Z()}})}N(O,Y,10,3e3,()=>{N(G,Q,20,3e3,()=>{N(M,V,50,3e3,()=>{N(m,X,100,3e3,()=>{const f=_;x[f(330)][f(437)](1e3,()=>{const h=f;$.setVisible(!0),x[h(330)].delayedCall(1e3,()=>{d0[h(434)](!0)})})})})})}),z=!1}function l0(){return/Mobi|Android|iPhone|iPad|iPod/i[a(468)](navigator.userAgent)}function j(){const x=a;if(!l0()){K[x(477)][x(408)]=x(475);return}window[x(392)](x(338))[x(443)]?(K[x(477)].display=x(328),w&&w[x(424)]&&w.scene[x(325)](x(352))):(K[x(477)][x(408)]=x(475),z&&w&&w[x(424)]&&w[x(424)][x(418)](x(352)))}function k0(x){const e=a,s=x[e(351)],t=x[e(379)];i=Math[e(470)](s/1920,t/1080),A&&A.setDisplaySize(s,t),F&&F[e(307)](s/2,65*i)[e(474)](s,130*i),P&&P[e(307)](s/2,t-100*i)[e(414)](i*1.5),v&&v[e(307)](s/2,t-100*i)[e(414)](i*1.5),D&&D[e(307)](s-100*i,t-100*i)[e(414)](i*1.5);const n=s/2-100*i;R&&R.setPosition(s/2,90*i)[e(474)](n,20*i),d&&d[e(307)]((s-n)/2,90*i)[e(474)](n,20*i),L&&L[e(307)](s/2,20*i)[e(319)]({fontSize:20*Math[e(447)](i,.7)+"px"}),C&&C[e(307)](s-50*i,20*i)[e(319)]({fontSize:20*Math.max(i,.7)+"px"}),S&&S[e(307)](s-50*i,90*i).setStyle({fontSize:20*Math[e(447)](i,.7)+"px"})}let s0=!1;function P0(){const x=a;s0=!s0,s0?(w[x(406)][x(441)]=!0,n0[x(353)]="🔇"):(w.sound.mute=!1,n0.textContent="🔊")}n0[a(362)](a(348),P0);
