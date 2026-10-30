
const H=JSON.parse(figma.root.getSharedPluginData('rr.build','imgHashes'));
const fill=k=>[{type:'IMAGE',imageHash:H[k],scaleMode:'FILL'}];
await figma.loadFontAsync({family:'Inter',style:'Semi Bold'});await figma.loadFontAsync({family:'Inter',style:'Regular'});await figma.loadFontAsync({family:'Inter',style:'Medium'});
const dash=await figma.getNodeByIdAsync('1:11');const play=await figma.getNodeByIdAsync('3:2');
const q=(p,n)=>p.findOne(x=>x.name===n);
// hero
const hero=q(dash,'Section / Featured Segment');
hero.fills=[...fill('hero'),{type:'GRADIENT_LINEAR',gradientTransform:[[0,1,0],[-1,0,1]],gradientStops:[{position:0,color:{r:0.05,g:0.05,b:0.05,a:0.1}},{position:1,color:{r:0.047,g:0.047,b:0.047,a:1}}]},{type:'GRADIENT_LINEAR',gradientTransform:[[1,0,0],[0,1,0]],gradientStops:[{position:0,color:{r:0.047,g:0.047,b:0.047,a:0.85}},{position:0.6,color:{r:0.047,g:0.047,b:0.047,a:0}}]}];
q(dash,'Avatar').fills=fill('a');
const T=['Ava Reyes|Host','Marcus Lee|Producer','Priya Shah|Editor','Diego Ramos|DP','Hannah Cole|Motion Designer','Sam Okafor|Sound Mixer'];
const rows=[['Section / Vertical Content','v',true],['Section / Social Clips','s',true],['Section / Behind the Scenes','b','alt'],['Section / Team','a',false]];
const icon=(d)=>figma.createNodeFromSvg(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>`);
const out={};
for(const [sn,k,vid] of rows){
 const sec=q(dash,sn);const rail=sec.children.find(c=>c.name==='Rail');const hdr=sec.children.find(c=>c.name==='Row Header');
 rail.layoutSizingHorizontal='FILL';rail.clipsContent=true;rail.overflowDirection='HORIZONTAL';rail.paddingRight=64;
 // header full width w/ arrows
 const wrap=figma.createFrame();wrap.name='Row Header Bar';wrap.layoutMode='HORIZONTAL';wrap.primaryAxisAlignItems='SPACE_BETWEEN';wrap.counterAxisAlignItems='CENTER';wrap.fills=[];wrap.paddingRight=64;
 sec.insertChild(0,wrap);wrap.layoutSizingHorizontal='FILL';wrap.layoutSizingVertical='HUG';wrap.appendChild(hdr);
 const arrows=figma.createFrame();arrows.name='Row Arrows';arrows.layoutMode='HORIZONTAL';arrows.itemSpacing=8;arrows.fills=[];arrows.layoutSizingHorizontal='HUG';arrows.layoutSizingVertical='HUG';
 const mkBtn=(nm,d)=>{const b=figma.createFrame();b.name=nm;b.layoutMode='HORIZONTAL';b.primaryAxisAlignItems='CENTER';b.counterAxisAlignItems='CENTER';b.resize(36,36);b.cornerRadius=18;b.fills=[{type:'SOLID',color:{r:1,g:1,b:1},opacity:0.1}];const i=icon(d);i.name='Icon';b.appendChild(i);arrows.appendChild(b);return b};
 const L=mkBtn('Arrow / Left','m15 18-6-6 6-6'),R=mkBtn('Arrow / Right','m9 18 6-6-6-6');wrap.appendChild(arrows);
 const cards=rail.children;
 cards.forEach((c,i)=>{const th=c.children.find(x=>x.name==='Thumbnail');th.fills=fill(k);
  const isVid = vid===true || (vid==='alt' && i%2===1);
  if(vid==='alt'){c.children[1].characters=isVid?'BTS Video '+(i+1):'BTS Photo '+(i+1);const m=c.children[2].children;m[0].characters=isVid?'Video':'Photo';}
  if(isVid){const p=play.createInstance();c.appendChild(p);p.layoutPositioning='ABSOLUTE';p.x=(th.width-56)/2;p.y=(th.height-56)/2;}
  if(k==='a'){const [n,r]=T[i%T.length].split('|');c.name='Card / Team — '+n+' (example)';c.children[1].characters=n;const m=c.children[2].children;m[0].characters=r;m[2].characters='Example';th.cornerRadius=60;c.setSharedPluginData('rr.build','note','Placeholder example name, not a real team member');}
 });
 const click=(dest)=>[{trigger:{type:'ON_CLICK'},actions:[{type:'NODE',destinationId:dest,navigation:'SCROLL_TO',transition:null,preserveScrollPosition:false}]}];
 await L.setReactionsAsync(click(cards[0].id));await R.setReactionsAsync(click(cards[cards.length-1].id));
 out[sn]={section:sec.id,rail:rail.id,left:L.id,right:R.id};
}
return out;
