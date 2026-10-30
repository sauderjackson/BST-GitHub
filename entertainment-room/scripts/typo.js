for(const s of ['Regular','Medium','Semi Bold','Bold'])await figma.loadFontAsync({family:'Inter',style:s});
const hex=c=>'#'+[c.r,c.g,c.b].map(v=>Math.round(v*255).toString(16).padStart(2,'0')).join('').toUpperCase();
// 1) bottom gradient on all card thumbnails

const ex=figma.currentPage.findOne(n=>n.name==='Bottom Gradient');
const gfill=ex?JSON.parse(JSON.stringify(ex.fills)):[{type:'GRADIENT_LINEAR',gradientTransform:[[0,1,0],[-1,0,1]],gradientStops:[{position:0.45,color:{r:0,g:0,b:0,a:0}},{position:1,color:{r:0,g:0,b:0,a:0.75}}]}];
let gcount=0;
for(const id of ['1:11','7:652','7:965']){const f=await figma.getNodeByIdAsync(id);
 for(const rail of f.findAll(n=>n.name==='Rail'))for(const card of rail.children){
  card.children.filter(c=>c.name==='Bottom Gradient').forEach(c=>c.remove());
  if(rail.parent.name==='Section / Team')continue;
  const th=card.children.find(x=>x.name==='Thumbnail');const g=figma.createRectangle();g.name='Bottom Gradient';
  card.insertChild(card.children.indexOf(th)+1,g);g.layoutPositioning='ABSOLUTE';g.x=th.x;g.y=th.y;g.resize(th.width,th.height);g.cornerRadius=th.cornerRadius;g.fills=gfill;g.locked=true;gcount++;}}
// 2) text audit -> styles
const defs=[['Inter|Semi Bold|22|#FFFFFF','Dashboard/Section Header','Row titles, sidebar brand'],['Inter|Semi Bold|15|#FFFFFF','Dashboard/Nav Active + Secondary Button','Active nav item, Details button'],['Inter|Medium|15|#9A9AA2','Sidebar/Nav Label','Inactive nav items'],['Inter|Regular|14|#FFFFFF','Sidebar/User Name','Profile name'],['Inter|Semi Bold|16|#FFFFFF','Hero/Show Name','Show information'],['Inter|Medium|14|#9A9AA2','Hero/Air Date + Back Link','Air date, calendar back link'],['Inter|Bold|56|#FFFFFF','Hero/Title','Featured segment title'],['Inter|Regular|17|#9A9AA2','Hero/Summary','Segment summary'],['Inter|Semi Bold|15|#0C0C0C','Button/Primary','Watch Segment'],['Inter|Regular|13|#9A9AA2','Dashboard/Row Caption','Counts beside row titles'],['Inter|Semi Bold|14|#FFFFFF','Card/Title','Card titles, team names'],['Inter|Regular|12|#9A9AA2','Card/Meta','Card meta, team roles'],['Inter|Bold|40|#FFFFFF','Calendar/Page Title','Content Calendar'],['Inter|Regular|16|#9A9AA2','Calendar/Subtitle','Page description'],['Inter|Semi Bold|12|#FFFFFF','Calendar/Post Title + Notice','Post titles, example notice'],['Inter|Semi Bold|18|#FFFFFF','Calendar/Week Header','Week range'],['Inter|Medium|13|#9A9AA2','Calendar/Legend','Batch legend'],['Inter|Semi Bold|13|#FFFFFF','Calendar/Day Label','Mon–Sun'],['Inter|Medium|11|#9A9AA2','Calendar/Post Time','Post times']];
const local=await figma.getLocalTextStylesAsync();const S={};const samples={};
const texts=[];for(const id of ['1:11','1:375','7:652','7:965']){const f=await figma.getNodeByIdAsync(id);texts.push(...f.findAll(n=>n.type==='TEXT'))}
for(const t of texts){const c=t.fills[0]&&t.fills[0].color;const k=[t.fontName.family,t.fontName.style,t.fontSize,c?hex(c):'?'].join('|');if(!samples[k])samples[k]=t;}
let applied=0;
for(const [k,name] of defs){const t=samples[k];if(!t)continue;let st=local.find(s=>s.name===name)||figma.createTextStyle();st.name=name;st.fontName=t.fontName;st.fontSize=t.fontSize;st.lineHeight=t.lineHeight;st.letterSpacing=t.letterSpacing;S[k]=st;}
for(const t of texts){const c=t.fills[0]&&t.fills[0].color;const k=[t.fontName.family,t.fontName.style,t.fontSize,c?hex(c):'?'].join('|');if(S[k]){await t.setTextStyleIdAsync(S[k].id);applied++;}}
// 3) Typography page
let pg=figma.root.children.find(p=>p.name==='Typography');if(!pg){pg=figma.createPage();pg.name='Typography';}else{await pg.loadAsync();pg.children.forEach(c=>c.remove());}
const sheet=figma.createFrame();pg.appendChild(sheet);sheet.name='Typography Sheet';sheet.layoutMode='VERTICAL';sheet.paddingTop=sheet.paddingBottom=80;sheet.paddingLeft=sheet.paddingRight=96;sheet.itemSpacing=0;sheet.fills=[{type:'SOLID',color:{r:0.047,g:0.047,b:0.047}}];sheet.resize(1440,100);sheet.layoutSizingVertical='HUG';
const tx=(s,size,style,col,w)=>{const t=figma.createText();t.fontName={family:'Inter',style};t.fontSize=size;t.characters=s;t.fills=[{type:'SOLID',color:col}];return t};
const W={r:1,g:1,b:1},G={r:0.6,g:0.6,b:0.635},RED={r:0.898,g:0.035,b:0.078};
const hd=figma.createFrame();hd.name='Header';hd.layoutMode='VERTICAL';hd.itemSpacing=12;hd.fills=[];hd.paddingBottom=48;sheet.appendChild(hd);hd.layoutSizingHorizontal='FILL';
const bar=figma.createRectangle();bar.resize(48,4);bar.fills=[{type:'SOLID',color:RED}];hd.appendChild(bar);
hd.appendChild(tx('Typography',56,'Bold',W));hd.appendChild(tx('Review Room — every text style used on the Dashboard, Content Calendar and MacBook screens. Edit a local style to update every layer that uses it. Color is set per layer; the hex shown is the color in use.',17,'Regular',G));hd.children[2].layoutSizingHorizontal='FILL';hd.children[2].textAutoResize='HEIGHT';
const lh=v=>v.unit==='AUTO'?'Auto':v.unit==='PERCENT'?v.value+'%':v.value+'px';const ls=v=>v.unit==='PERCENT'?v.value+'%':v.value+'px';
let group='';const ord=['Sidebar','Dashboard','Hero','Button','Card','Calendar'];defs.sort((a,b)=>ord.indexOf(a[1].split('/')[0])-ord.indexOf(b[1].split('/')[0]));
for(const [k,name,use] of defs){const st=S[k];if(!st)continue;const col=k.split('|')[3];const g=name.split('/')[0];
 if(g!==group){group=g;const gh=tx(g.toUpperCase(),12,'Semi Bold',RED);gh.letterSpacing={unit:'PERCENT',value:12};const w=figma.createFrame();w.name='Group / '+g;w.fills=[];w.layoutMode='VERTICAL';w.paddingTop=40;w.paddingBottom=12;sheet.appendChild(w);w.layoutSizingHorizontal='FILL';w.appendChild(gh);}
 const row=figma.createFrame();row.name='Style / '+name;row.layoutMode='HORIZONTAL';row.itemSpacing=48;row.paddingTop=row.paddingBottom=24;row.counterAxisAlignItems='CENTER';row.fills=[];row.strokes=[{type:'SOLID',color:{r:1,g:1,b:1},opacity:0.08}];row.strokeTopWeight=1;row.strokeBottomWeight=0;row.strokeLeftWeight=0;row.strokeRightWeight=0;sheet.appendChild(row);row.layoutSizingHorizontal='FILL';
 const left=figma.createFrame();left.fills=[];left.layoutMode='VERTICAL';left.itemSpacing=8;row.appendChild(left);left.layoutSizingHorizontal='FILL';
 left.appendChild(tx(name,12,'Medium',G));
 const sm=tx(samples[k].characters.length>3?samples[k].characters.slice(0,60):name.split('/')[1],12,'Regular',W);const c=samples[k].fills[0].color;sm.fills=[{type:'SOLID',color:col==='#0C0C0C'?W:c}];await sm.setTextStyleIdAsync(st.id);left.appendChild(sm);
 if(col==='#0C0C0C'){sm.fills=[{type:'SOLID',color:c}];const chip=figma.createFrame();chip.fills=[{type:'SOLID',color:W}];chip.cornerRadius=6;chip.layoutMode='HORIZONTAL';chip.paddingLeft=chip.paddingRight=16;chip.paddingTop=chip.paddingBottom=10;left.appendChild(chip);chip.layoutSizingHorizontal='HUG';chip.layoutSizingVertical='HUG';chip.appendChild(sm);}
 left.appendChild(tx('Used for: '+use,12,'Regular',G));
 const spec=figma.createFrame();spec.name='Specs';spec.fills=[{type:'SOLID',color:{r:0.122,g:0.122,b:0.137}}];spec.cornerRadius=8;spec.layoutMode='VERTICAL';spec.itemSpacing=6;spec.paddingLeft=spec.paddingRight=20;spec.paddingTop=spec.paddingBottom=16;row.appendChild(spec);spec.resize(320,10);spec.layoutSizingVertical='HUG';
 for(const [a,b] of [['Family',st.fontName.family],['Size',st.fontSize+'px'],['Weight',st.fontName.style],['Line height',lh(st.lineHeight)],['Letter spacing',ls(st.letterSpacing)],['Color',col]]){const r=figma.createFrame();r.fills=[];r.layoutMode='HORIZONTAL';r.primaryAxisAlignItems='SPACE_BETWEEN';spec.appendChild(r);r.layoutSizingHorizontal='FILL';r.appendChild(tx(a,12,'Regular',G));const v=tx(b,12,'Semi Bold',W);r.appendChild(v);if(a==='Color'){const sw=figma.createEllipse();sw.resize(12,12);sw.fills=[{type:'SOLID',color:col==='#0C0C0C'?{r:0.047,g:0.047,b:0.047}:hex(W)===col?W:G}];sw.strokes=[{type:'SOLID',color:W,opacity:0.3}];r.itemSpacing=8;r.primaryAxisAlignItems='MIN';const sp=r.children[0];sp.layoutGrow=1;r.appendChild(sw);}}
}
for(const n of sheet.findAll(n=>n.type==='FRAME'&&n.layoutMode!=='NONE'))n.layoutSizingVertical='HUG';
return {page:pg.id,sheet:sheet.id,styles:Object.keys(S).length,applied,gcount,usedExisting:!!ex};
