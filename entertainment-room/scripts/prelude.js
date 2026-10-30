const V=id=>$fig.getVar(id);
const C={base:V('VariableID:31:70'),surface:V('VariableID:31:71'),elev:V('VariableID:31:72'),border:V('VariableID:31:73'),t1:V('VariableID:31:74'),t2:V('VariableID:31:75'),t3:V('VariableID:31:76'),yellow:V('VariableID:65:69'),onAccent:V('VariableID:65:72')};
const P=c=>[{type:'SOLID',color:c}];
const F=s=>({family:'Montserrat',style:s});
const T=(chars,o={})=>$fig.text({characters:chars,fontName:F(o.w||'Regular'),fontSize:o.s||13,fills:P(o.c||C.t2),name:o.name||chars.slice(0,24),...(o.fill?{layoutSizingHorizontal:'FILL',textAutoResize:'HEIGHT'}:{}),...(o.lh?{lineHeight:{unit:'PIXELS',value:o.lh}}:{})});
const Chip=(label,o={})=>$fig.autoLayout({name:o.name||('Chip / '+label),paddingLeft:10,paddingRight:10,paddingTop:4,paddingBottom:4,cornerRadius:999,fills:P(o.bg||C.elev),counterAxisAlignItems:'CENTER',itemSpacing:6},[T(label,{s:11,w:'Medium',c:o.c||C.t1})]);
const headers=[];
const Header=(title,count)=>{const h=$fig.instance('31:113',{name:'Row/Header / '+title,props:{'Count#71:0':String(count)},layoutSizingHorizontal:'FILL'});headers.push([h,title]);return h;};
const Screen=(name,kids)=>$fig.autoLayout({name,layoutMode:'HORIZONTAL',width:1440,fills:P(C.base),x:0,y:0},[
  $fig.instance('51:304',{name:'Sidebar',layoutSizingVertical:'FILL'}),
  $fig.autoLayout({name:'Content',layoutMode:'VERTICAL',layoutSizingHorizontal:'FILL',paddingLeft:48,paddingRight:48,paddingTop:48,paddingBottom:64,itemSpacing:48},kids)]);
const Sec=(title,kids)=>$fig.autoLayout({name:'Spec / '+title,layoutMode:'VERTICAL',layoutSizingHorizontal:'FILL',itemSpacing:10},[T(title.toUpperCase(),{s:11,w:'SemiBold',c:C.yellow}),...kids]);
const Bullets=(arr)=>arr.map(b=>T('•  '+b,{s:14,c:C.t1,fill:true,lh:21}));
const NOTES=[['Oct 27, 2026 — Frame.io workflow optimization and asset bundle strategy with Mark','https://notes.granola.ai/d/1c741d69-0d37-486b-9310-1287b37488fc'],['Oct 28, 2026 — Metrical connector setup','https://notes.granola.ai/d/c20ed5e4-cbfc-41db-9f65-86fe5775419f']];
const links=[];
const Spec=(page,x,{does,features,source,questions,refs})=>$fig.autoLayout({name:'Spec — '+page,layoutMode:'VERTICAL',width:640,x,y:0,paddingLeft:48,paddingRight:48,paddingTop:48,paddingBottom:48,itemSpacing:32,fills:P(C.surface),cornerRadius:16,strokes:P(C.border),strokeWeight:1},[
  $fig.autoLayout({name:'Spec / Title',layoutMode:'VERTICAL',layoutSizingHorizontal:'FILL',itemSpacing:8},[T('SPEC SHEET',{s:11,w:'SemiBold',c:C.t3}),T(page,{s:28,w:'SemiBold',c:C.t1,fill:true,lh:36})]),
  Sec('What this page does',[T(does,{s:14,c:C.t1,fill:true,lh:22})]),
  Sec('Features',Bullets(features)),
  Sec('Data source',[T(source,{s:14,c:C.t1,fill:true,lh:22})]),
  Sec('Open questions',Bullets(questions)),
  Sec('Referenced notes',refs.map((r,i)=>{const l=T(NOTES[i][0],{s:14,w:'Medium',c:C.yellow,fill:true,lh:21,name:'Link / '+NOTES[i][0].slice(0,12)});links.push([l,NOTES[i][1]]);return $fig.autoLayout({name:'Note '+(i+1),layoutMode:'VERTICAL',layoutSizingHorizontal:'FILL',itemSpacing:6,paddingTop:12,paddingBottom:12,paddingLeft:16,paddingRight:16,cornerRadius:10,fills:P(C.elev)},[l,T(NOTES[i][1],{s:11,c:C.t3,fill:true}),T(r,{s:13,c:C.t2,fill:true,lh:20})]);}))]);
async function finish(page){await $fig.done();for(const [h,t] of headers){const n=h.node;const tt=n.findOne(x=>x.type==='TEXT'&&x.name==='Title');await figma.loadFontAsync(tt.fontName);tt.characters=t;}
 for(const [l,u] of links){const n=l.node;n.hyperlink={type:'URL',value:u};n.textDecoration='UNDERLINE';}}
