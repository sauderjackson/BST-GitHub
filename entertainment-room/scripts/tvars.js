const cols=await figma.variables.getLocalVariableCollectionsAsync();
const col=cols.find(c=>c.name==='Review Room / Typography')||figma.variables.createVariableCollection('Review Room / Typography');const mode=col.modes[0].modeId;
const ex=(await figma.variables.getLocalVariablesAsync()).filter(v=>v.variableCollectionId===col.id);
let made=0;const gv=(n,t,val,scopes)=>{let v=ex.find(x=>x.name===n);if(!v){v=figma.variables.createVariable(n,col,t);made++;}v.setValueForMode(mode,val);if(scopes)v.scopes=scopes;return v};
const styles=await figma.getLocalTextStylesAsync();
for(const s of styles)await figma.loadFontAsync(s.fontName);
const fam={},wt={};const res=[],fails=[];
for(const s of styles){
 const f=s.fontName.family,w=s.fontName.style;
 fam[f]=fam[f]||gv('Base/family'+(f==='Inter'?'':'/'+f),'STRING',f,['FONT_FAMILY']);
 wt[w]=wt[w]||gv('Base/weight/'+w,'STRING',w,['FONT_STYLE']);
 const p=s.name.replace('/',' ');const b=[];
 const tryB=(field,v)=>{try{s.setBoundVariable(field,v);b.push(field)}catch(e){fails.push(s.name+' '+field+': '+String(e).slice(0,120))}};
 tryB('fontFamily',fam[f]);tryB('fontStyle',wt[w]);
 tryB('fontSize',gv(p+'/size','FLOAT',s.fontSize,['FONT_SIZE']));
 if(s.lineHeight.unit!=='AUTO'){const px=s.lineHeight.unit==='PERCENT'?s.fontSize*s.lineHeight.value/100:s.lineHeight.value;tryB('lineHeight',gv(p+'/line height','FLOAT',px,['LINE_HEIGHT']));}
 const ls=s.letterSpacing.unit==='PERCENT'?s.fontSize*s.letterSpacing.value/100:s.letterSpacing.value;
 tryB('letterSpacing',gv(p+'/letter spacing','FLOAT',ls,['LETTER_SPACING']));
 res.push([s.name,b.join(',')]);}
return {col:col.id,made,total:(await figma.variables.getLocalVariablesAsync()).filter(v=>v.variableCollectionId===col.id).length,res,fails};
