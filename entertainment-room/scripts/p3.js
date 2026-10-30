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
