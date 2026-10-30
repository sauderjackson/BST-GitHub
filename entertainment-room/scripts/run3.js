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
await figma.setCurrentPageAsync(await figma.getNodeByIdAsync('109:717'));
const Ad=(w,h,name,fmt)=>$fig.autoLayout({name:'Banner / '+w+'x'+h,layoutMode:'VERTICAL',itemSpacing:12,paddingLeft:20,paddingRight:20,paddingTop:20,paddingBottom:20,cornerRadius:12,fills:P(C.surface),strokes:P(C.border),strokeWeight:1},[
  $fig.autoLayout({name:'Placeholder '+w+'x'+h,layoutMode:'VERTICAL',width:w,height:h,primaryAxisAlignItems:'CENTER',counterAxisAlignItems:'CENTER',itemSpacing:4,fills:P(C.elev),strokes:P(C.yellow),strokeWeight:1,dashPattern:[6,4],clipsContent:true},
    h>=60?[T(w+' × '+h,{s:h>=90?18:13,w:'SemiBold',c:C.t1,name:'Size'}),...(h>=90?[T('Grüns x The Balancing Act',{s:11,c:C.t2,name:'Campaign'})]:[])]:[T(w+' × '+h,{s:12,w:'SemiBold',c:C.t1,name:'Size'})]),
  $fig.autoLayout({name:'Meta',layoutMode:'HORIZONTAL',itemSpacing:8,counterAxisAlignItems:'CENTER'},[
    $fig.autoLayout({name:'Label',layoutMode:'VERTICAL',itemSpacing:2},[T(name,{s:13,w:'SemiBold',c:C.t1,name:'Name'}),T(w+'×'+h,{s:11,c:C.t2,name:'Size label'})]),
    Chip(fmt,{name:'Format'})]),
  $fig.autoLayout({name:'Actions',layoutMode:'HORIZONTAL',itemSpacing:8},[
    $fig.autoLayout({name:'Button / Download',paddingLeft:14,paddingRight:14,paddingTop:8,paddingBottom:8,cornerRadius:999,fills:P(C.yellow)},[T('↓ Download',{s:12,w:'SemiBold',c:C.onAccent,name:'Label'})]),
    $fig.autoLayout({name:'Button / Frame.io',paddingLeft:14,paddingRight:14,paddingTop:8,paddingBottom:8,cornerRadius:999,strokes:P(C.border),strokeWeight:1},[T('Frame.io ↗',{s:12,w:'SemiBold',c:C.t1,name:'Label'})])])]);
const Group=(title,count,kids)=>$fig.autoLayout({name:'Row / '+title,layoutMode:'VERTICAL',layoutSizingHorizontal:'FILL',itemSpacing:16},[Header(title,count),$fig.autoLayout({name:'Track',layoutMode:'HORIZONTAL',itemSpacing:24,layoutWrap:'WRAP',counterAxisSpacing:24,layoutSizingHorizontal:'FILL'},kids)]);
const header=$fig.autoLayout({name:'Page Header',layoutMode:'VERTICAL',layoutSizingHorizontal:'FILL',itemSpacing:14},[
  $fig.autoLayout({name:'Badges',layoutMode:'HORIZONTAL',itemSpacing:8},[Chip('Web & Display — separate from social',{name:'Badge / Separate',bg:C.yellow,c:C.onAccent}),Chip('6 IAB sizes'),Chip('Static + HTML5')]),
  T('Web Banners & Display',{s:40,w:'SemiBold',c:C.t1,name:'Title'}),
  T('Extra web banner and display ad assets for Grüns x The Balancing Act. These are delivered for the client’s site and paid media, not for social feeds. Placeholders are shown at actual IAB proportions.',{s:16,c:C.t2,fill:true,lh:25,name:'Summary'})]);
const s=Screen('Web Banners & Display — Screen',[header,
  Group('Leaderboards & Billboards',3,[Ad(970,250,'Billboard','HTML5'),Ad(728,90,'Leaderboard','HTML5'),Ad(320,50,'Mobile Leaderboard','Static')]),
  Group('Rectangles & Skyscrapers',3,[Ad(300,250,'Medium Rectangle','Static'),Ad(300,600,'Half Page','HTML5'),Ad(160,600,'Wide Skyscraper','Static')])]);
Spec('Web Banners & Display',1520,{
 does:'Frames the web banner and display ad deliverables on their own page, separate from social, so the client knows these go on their website and paid media. Each standard IAB size is shown at true proportion with its format, a direct download and its Frame.io link.',
 features:['“Separate from social” header with size and format badges','6 IAB sizes at actual proportions: 970×250, 728×90, 320×50, 300×250, 300×600, 160×600','Each unit: size label, format chip (Static or HTML5), yellow Download action and a Frame.io link','Grouped into Leaderboards & Billboards and Rectangles & Skyscrapers rows using Row/Header'],
 source:'The display ad set — final banner files in the Frame.io Ready share (web/display collection), with the existing Bundle Review Room display ads setting the look.',
 questions:['Final static vs HTML5 split per size','Are click-through URLs and tracking needed per unit?','Should display ads be included in the ~88 count or counted separately?','Swap placeholders for the real display ads once exported'],
 refs:['Frame.io Ready share is the delivery point; links carry expiry / download / comment settings; brand/web/event pieces are part of the bundle.','Web banners and display ads get separate framing from social; feed the existing display ads in to set the look; dummy-proof.']});
await finish();
return {screen:s.node.id};
