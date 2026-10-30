const cols=await figma.variables.getLocalVariableCollectionsAsync();
let col=cols.find(c=>c.name==='Review Room / Nav')||figma.variables.createVariableCollection('Review Room / Nav');const mode=col.modes[0].modeId;
const vars=await figma.variables.getLocalVariablesAsync();
const gv=(n,t,d)=>{let v=vars.find(x=>x.name===n&&x.variableCollectionId===col.id);if(!v){v=figma.variables.createVariable(n,col,t)}v.setValueForMode(mode,d);return v};
const active=gv('activeSection','STRING','');
const items=['Home','Vertical Content','Social Clips','Behind the Scenes','Team','Content Calendar'];
const B={};for(const it of items)B[it]=gv('isActive/'+it,'BOOLEAN',false);
let exprOK=false;
const out={};
for(const id of ['1:11','7:652','7:965']){const f=await figma.getNodeByIdAsync(id);let cnt=0;
 for(const nav of f.findAll(n=>n.type==='FRAME'&&n.name.startsWith('Nav /'))){
  nav.fills=[];nav.findAll(n=>n.name==='Active Indicator').forEach(n=>n.remove());
  const it=nav.name.slice(6);if(!B[it])continue;
  const r=figma.createRectangle();r.name='Active Indicator';nav.insertChild(0,r);r.layoutPositioning='ABSOLUTE';r.x=0;r.y=0;r.resize(nav.width,nav.height);r.cornerRadius=8;r.constraints={horizontal:'STRETCH',vertical:'STRETCH'};r.fills=[{type:'SOLID',color:{r:1,g:1,b:1},opacity:0.07}];r.locked=true;
  r.setBoundVariable('visible',B[it]);
  // order: indicator(0), hover pill(1), content
  const hp=nav.children.find(c=>c.name==='Hover Pill');if(hp)nav.insertChild(1,hp);
  const base=nav.reactions.length?nav.reactions[0].actions.filter(a=>a.type!=='SET_VARIABLE'):[];
  const sets=[{type:'SET_VARIABLE',variableId:active.id,variableValue:{type:'STRING',resolvedType:'STRING',value:it}},...items.map(o=>({type:'SET_VARIABLE',variableId:B[o].id,variableValue:{type:'BOOLEAN',resolvedType:'BOOLEAN',value:o===it}}))];
  await nav.setReactionsAsync([{trigger:{type:'ON_CLICK'},actions:[...sets,...base]}]);cnt++;}
 out[id]={wired:cnt,homeFill:f.findOne(n=>n.name==='Nav / Home').fills.length,acts:f.findOne(n=>n.name==='Nav / Team').reactions[0].actions.map(a=>a.type+(a.navigation?':'+a.navigation:''))};}
return {col:col.id,active:active.id,out};
