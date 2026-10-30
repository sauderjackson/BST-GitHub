const page=figma.currentPage;const src=await figma.getNodeByIdAsync('1:11');
await figma.loadFontAsync({family:'Inter',style:'Regular'});await figma.loadFontAsync({family:'Inter',style:'Medium'});await figma.loadFontAsync({family:'Inter',style:'Semi Bold'});
// fix team meta in source
const team=await figma.getNodeByIdAsync('1:198');
for(const c of team.children){const m=c.children[2];m.layoutMode='VERTICAL';m.itemSpacing=2;m.counterAxisAlignItems='MIN';m.layoutSizingHorizontal='FILL';m.children[1].visible=false;for(const t of [m.children[0],m.children[2]]){t.textAutoResize='WIDTH_AND_HEIGHT';}}
const maxX=Math.max(...page.children.map(n=>n.x+n.width));
const log=[];
function build(name){
 const f=src.clone();f.name=name;
 f.resize(1728,1117);f.layoutSizingVertical='FIXED';f.clipsContent=true;f.overflowDirection='VERTICAL';f.counterAxisAlignItems='MIN';
 const sb=f.children.find(c=>c.name==='Sidebar');const main=f.children.find(c=>c.name!=='Sidebar');
 sb.layoutSizingVertical='FIXED';sb.resize(sb.width,1117);
 main.layoutSizingHorizontal='FILL';main.layoutSizingVertical='HUG';
 f.layoutMode='NONE';f.resize(1728,1117);f.appendChild(sb);f.numberOfFixedChildren=1;
 return f;
}
async function wire(f){
 const sb=f.children.find(c=>c.name==='Sidebar');
 const map={'Nav / Home':'Section / Featured Segment','Nav / Vertical Content':'Section / Vertical Content','Nav / Social Clips':'Section / Social Clips','Nav / Behind the Scenes':'Section / Behind the Scenes','Nav / Team':'Section / Team'};
 for(const k in map){const n=sb.findOne(x=>x.name===k);const d=f.findOne(x=>x.name===map[k]);if(n&&d)await n.setReactionsAsync([{trigger:{type:'ON_CLICK'},actions:[{type:'NODE',destinationId:d.id,navigation:'SCROLL_TO',transition:null,preserveScrollPosition:false}]}]);}
 const cal=sb.findOne(x=>x.name==='Nav / Content Calendar');if(cal)await cal.setReactionsAsync([{trigger:{type:'ON_CLICK'},actions:[{type:'NODE',destinationId:'1:375',navigation:'NAVIGATE',transition:null,preserveScrollPosition:false}]}]);
 // arrows: rewire to clone cards
 for(const sec of f.findAll(x=>x.name.startsWith('Section /')&&x.name!=='Section / Featured Segment')){const rail=sec.findOne(x=>x.name==='Rail');const L=sec.findOne(x=>x.name==='Arrow / Left'),R=sec.findOne(x=>x.name==='Arrow / Right');const cs=rail.children;
  const ck=d=>[{trigger:{type:'ON_CLICK'},actions:[{type:'NODE',destinationId:d,navigation:'SCROLL_TO',transition:null,preserveScrollPosition:false}]}];
  if(L)await L.setReactionsAsync(ck(cs[0].id));if(R)await R.setReactionsAsync(ck(cs[cs.length-1].id));}
}
const P=build('Dashboard — 1728 Prototype');P.x=maxX+200;P.y=0;await wire(P);
// mockup
const M=figma.createFrame();M.name='Dashboard — MacBook Pro 16';M.fills=[{type:'SOLID',color:{r:0.93,g:0.93,b:0.94}}];
const W=1728+56,Hl=1117+40+28;M.resize(W+400,Hl+260);M.x=P.x+1728+200;M.y=0;
const lid=figma.createFrame();lid.name='Lid / Bezel';M.appendChild(lid);lid.resize(W,Hl);lid.x=200;lid.y=100;lid.cornerRadius=40;lid.fills=[{type:'SOLID',color:{r:0.04,g:0.04,b:0.045}}];lid.strokes=[{type:'SOLID',color:{r:0.55,g:0.56,b:0.58}}];lid.strokeWeight=4;lid.clipsContent=true;
const S=build('Screen — 1728×1117');lid.appendChild(S);S.x=28;S.y=40;S.cornerRadius=12;await wire(S);
const notch=figma.createRectangle();notch.name='Notch';lid.appendChild(notch);notch.resize(220,34);notch.x=(W-220)/2;notch.y=40;notch.bottomLeftRadius=14;notch.bottomRightRadius=14;notch.fills=[{type:'SOLID',color:{r:0.04,g:0.04,b:0.045}}];
const cam=figma.createEllipse();cam.name='Camera';lid.appendChild(cam);cam.resize(10,10);cam.x=W/2-5;cam.y=52;cam.fills=[{type:'SOLID',color:{r:0.12,g:0.13,b:0.16}}];
const base=figma.createRectangle();base.name='Base';M.appendChild(base);base.resize(W+240,30);base.x=80;base.y=100+Hl;base.topLeftRadius=4;base.topRightRadius=4;base.bottomLeftRadius=60;base.bottomRightRadius=60;base.fills=[{type:'GRADIENT_LINEAR',gradientTransform:[[0,1,0],[-1,0,1]],gradientStops:[{position:0,color:{r:0.78,g:0.79,b:0.81,a:1}},{position:1,color:{r:0.45,g:0.46,b:0.48,a:1}}]}];
const hinge=figma.createRectangle();hinge.name='Hinge Notch';M.appendChild(hinge);hinge.resize(320,12);hinge.x=80+(W+240-320)/2;hinge.y=100+Hl;hinge.bottomLeftRadius=10;hinge.bottomRightRadius=10;hinge.fills=[{type:'SOLID',color:{r:0.58,g:0.59,b:0.61}}];
const sP=P.children.find(c=>c.name==='Sidebar');
return {proto:P.id,mock:M.id,screen:S.id,sb:sP.id,log,fixedN:P.numberOfFixedChildren};
