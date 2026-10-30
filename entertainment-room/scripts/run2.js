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
await figma.setCurrentPageAsync(await figma.getNodeByIdAsync('109:716'));
const H=['731e1da60fb1d40ce46142a62ca3130dc6c5accd','ec54ee3b4846510093a58f457a38632da8454063','34b5716d4d0723d751cef65f609aca46c809d50c','ea1d1b215cf4eff8abc3e6258e28ceb77ee7794e','2fa59c0cde466e9ace600e320e5f82ec6ad2835e','185895f3e126fd20620fb144e96946741d2d8fd8','8bcc90347fb10382e82d59b23dd3de2e6e08c5d3','f7baea3a98833c028cedac57e702de10ee3e447d','d1561efcbb8e1b9f9cdbb4dd3a4884a5bc0b4f1d','a12d8ed939a33de0215a62734f1a6ec53639f42c','e4f4a5f556796d4faf84d55a3debf5599dee6cf7','334a0a3ee6867d60c48163328860ab44f48deb37','e55208e3c4f2e136670070778772074020e80a8d','7b58d05bfc073fd4688ef6390510d6198780b8c9','8b25e8c0797a40c7da668b048f131364101fa002','51ef9c6030fb14bfb10015999a1cc8581519c575','aba473a9fa852796f9ee697e67e04bf3a1ff2636','80516102d1fa12ad060db2a14bf34de05930019c'];
let k=0;
const Tile=(name,fmt,w,h)=>$fig.autoLayout({name:'Asset / '+name,layoutMode:'VERTICAL',width:w,itemSpacing:10},[
  $fig.autoLayout({name:'Media',layoutMode:'HORIZONTAL',width:w,height:h,paddingLeft:10,paddingTop:10,fills:[{type:'IMAGE',imageHash:H[k++%18],scaleMode:'FILL'}],cornerRadius:10,clipsContent:true},[Chip('✓ Ready',{name:'Tag / Ready',bg:C.yellow,c:C.onAccent})]),
  $fig.autoLayout({name:'Meta',layoutMode:'VERTICAL',layoutSizingHorizontal:'FILL',itemSpacing:3},[T(name,{s:13,w:'SemiBold',c:C.t1,fill:true}),T(fmt+' · #TheBalancingAct',{s:11,c:C.t2,fill:true})])]);
const Cat=(title,count,items,w,h)=>$fig.autoLayout({name:'Row / '+title,layoutMode:'VERTICAL',layoutSizingHorizontal:'FILL',itemSpacing:16},[Header(title,count),
  $fig.autoLayout({name:'Track',layoutMode:'HORIZONTAL',itemSpacing:16},items.map(([n,f])=>Tile(n,f,w,h)))]);
const hero=$fig.autoLayout({name:'Hero',layoutMode:'VERTICAL',layoutSizingHorizontal:'FILL',paddingLeft:48,paddingRight:48,paddingTop:48,paddingBottom:48,itemSpacing:20,cornerRadius:16,fills:[{type:'IMAGE',imageHash:'731e1da60fb1d40ce46142a62ca3130dc6c5accd',scaleMode:'FILL',filters:{exposure:-0.6}}],clipsContent:true},[
  Chip('Grüns x The Balancing Act · Asset Bundle',{name:'Eyebrow'}),
  T('Your final asset bundle — ~88 assets',{s:44,w:'SemiBold',c:C.t1,fill:true,lh:52,name:'Title'}),
  T('Everything below is approved and ready to post. One link, no digging through folders: it opens the Ready folder of the Frame.io bundle.',{s:16,c:C.t1,fill:true,lh:25,name:'Summary'}),
  $fig.autoLayout({name:'Actions',layoutMode:'HORIZONTAL',itemSpacing:16,counterAxisAlignItems:'CENTER'},[
    $fig.autoLayout({name:'Button / Open in Frame.io',paddingLeft:24,paddingRight:24,paddingTop:14,paddingBottom:14,cornerRadius:999,fills:P(C.yellow),itemSpacing:8,counterAxisAlignItems:'CENTER'},[T('Open in Frame.io  ↗',{s:15,w:'SemiBold',c:C.onAccent,name:'Label'})]),
    $fig.autoLayout({name:'Link Target',layoutMode:'VERTICAL',itemSpacing:2},[T('LINK TARGET',{s:10,w:'SemiBold',c:C.t2}),T('Frame.io › Ready / final-bundle share link',{s:13,w:'Medium',c:C.t1})])]),
  $fig.autoLayout({name:'Link Settings',layoutMode:'HORIZONTAL',itemSpacing:8},[Chip('⏱ Expiring link'),Chip('↓ Download enabled'),Chip('Comments off'),Chip('Show-first: every asset tags The Balancing Act',{name:'Chip / Show-first'})])]);
const s=Screen('Asset Delivery — Screen',[hero,
 Cat('Segment & Tune-in',30,[['Full Segment','Video 16:9'],['Tune-in :30','Video 16:9'],['Tune-in :15','Video 9:16'],['Segment Cut-down','Video 1:1']],254,143),
 Cat('Podcast (Between Takes)',31,[['Full Episode','Audio + Video'],['Clip 01','Video 9:16'],['Clip 02','Video 9:16'],['Audiogram','Video 1:1']],254,143),
 Cat('Social',39,[['Reel — Countdown','Video 9:16'],['Carousel — Takeaways','Image 4:5'],['Story — Tune-in','Video 9:16'],['Post — As Seen On','Image 1:1'],['Reel — Recap','Video 9:16']],198,248),
 Cat('Photos',11,[['Set Still 01','JPG'],['Set Still 02','JPG'],['Host Portrait','JPG'],['Product Hero','JPG']],254,170),
 Cat('BTS',8,[['BTS — Set Day','Video 9:16'],['BTS — Green Room','Photo'],['BTS — Crew','Photo'],['BTS — Walkthrough','Video 16:9']],254,143),
 Cat('Brand / Copy',10,[['As Seen On Badge','PNG + SVG'],['Press Copy','DOCX'],['Email Copy','DOCX'],['Event One-pager','PDF']],254,143)]);
Spec('Asset Delivery (Frame.io)',1520,{
 does:'The second half of the delivery: the full library of ~88 approved assets the client distributes themselves. It is the front door to Frame.io — the single source of truth — and the primary button opens the Ready / final-bundle share, so the client never sees Raw, Work or Review folders.',
 features:['Hero: “Your final asset bundle — ~88 assets” with a yellow “Open in Frame.io” button targeting the Ready / final-bundle share link','Link settings shown up front: expiring link, download enabled, comments off','Show-first note: every asset tags The Balancing Act','Category rows with counts: Segment & Tune-in, Podcast (Between Takes), Social, Photos, BTS, Brand/Copy','Every tile carries a “Ready” tag; tiles deep-link to the asset inside the Ready share','Row/Header component reused for each category'],
 source:'Frame.io Ready share (final-bundle link). Category counts and tiles come from Frame.io metadata collections (brand, company, date, asset type).',
 questions:['Category counts are placeholders — confirm against the final Frame.io bundle (row totals will not equal exactly 88 until reconciled)','Link expiry length and whether a watermark is applied','Does each tile deep-link into Frame.io or download directly?','Is the review link (segment + social) surfaced here or only by email?'],
 refs:['Frame.io as single source of truth with Raw / Work / Review / Ready folders and metadata collections; two links (review + final bundle) with expiry, watermark, download and comment controls; “finished house”; every asset tags The Balancing Act.','Second half of the deck is a Frame.io link to ~88 assets the client can distribute themselves; live Figma link delivery; dummy-proof and tells a story.']});
await finish();
return {screen:s.node.id};
