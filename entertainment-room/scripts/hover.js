const old=figma.currentPage.findOne(n=>n.type==='COMPONENT_SET'&&n.name==='Hover Pill');if(old)old.remove();
for(const id of ['1:11','7:652','7:965']){const f=await figma.getNodeByIdAsync(id);f.findAll(n=>n.name==='Hover Pill'&&n.type==='INSTANCE').forEach(n=>n.remove());}
const mk=(v,fill)=>{const c=figma.createComponent();c.name='State='+v;c.resize(208,44);c.cornerRadius=8;c.fills=fill?[{type:'SOLID',color:{r:0.039,g:0.039,b:0.039}}]:[];if(fill){c.strokes=[{type:'SOLID',color:{r:1,g:1,b:1},opacity:0.1}];c.strokeWeight=1;c.strokeAlign='INSIDE';}return c};
const D=mk('Default',false),H=mk('Hover',true);
const set=figma.combineAsVariants([D,H],figma.currentPage);set.name='Hover Pill';set.x=120;set.y=-400;set.layoutMode='HORIZONTAL';set.itemSpacing=24;set.paddingLeft=set.paddingRight=set.paddingTop=set.paddingBottom=24;set.fills=[{type:'SOLID',color:{r:0.09,g:0.09,b:0.09}}];
await D.setReactionsAsync([{trigger:{type:'ON_HOVER'},actions:[{type:'NODE',destinationId:H.id,navigation:'CHANGE_TO',transition:null,preserveScrollPosition:false}]}]);
const out={};
for(const id of ['1:11','7:652','7:965']){const f=await figma.getNodeByIdAsync(id);let n1=0,n2=0;
 for(const nav of f.findAll(n=>n.type==='FRAME'&&n.name.startsWith('Nav /'))){const i=D.createInstance();i.name='Hover Pill';nav.insertChild(0,i);i.layoutPositioning='ABSOLUTE';i.x=0;i.y=0;i.resize(nav.width,nav.height);i.constraints={horizontal:'STRETCH',vertical:'STRETCH'};n1++;}
 for(const h of f.findAll(n=>n.name==='Row Header')){h.clipsContent=false;if(h.parent.name==='Row Header Bar')h.parent.clipsContent=false;const i=D.createInstance();i.name='Hover Pill';h.insertChild(0,i);i.layoutPositioning='ABSOLUTE';i.x=-14;i.y=-8;i.resize(h.width+28,h.height+16);i.constraints={horizontal:'STRETCH',vertical:'STRETCH'};n2++;}
 out[id]={nav:n1,headers:n2,navClicks:f.findAll(n=>n.name.startsWith('Nav /')&&n.type==='FRAME').filter(n=>n.reactions.length).length};}
return {set:set.id,D:D.id,H:H.id,out};
