await figma.setCurrentPageAsync(await figma.getNodeByIdAsync('109:715'));
const H=['731e1da60fb1d40ce46142a62ca3130dc6c5accd','ec54ee3b4846510093a58f457a38632da8454063','34b5716d4d0723d751cef65f609aca46c809d50c','ea1d1b215cf4eff8abc3e6258e28ceb77ee7794e','2fa59c0cde466e9ace600e320e5f82ec6ad2835e','185895f3e126fd20620fb144e96946741d2d8fd8','8bcc90347fb10382e82d59b23dd3de2e6e08c5d3','f7baea3a98833c028cedac57e702de10ee3e447d','d1561efcbb8e1b9f9cdbb4dd3a4884a5bc0b4f1d','a12d8ed939a33de0215a62734f1a6ec53639f42c','e4f4a5f556796d4faf84d55a3debf5599dee6cf7','334a0a3ee6867d60c48163328860ab44f48deb37'];
let k=0;
const Post=(p)=>$fig.autoLayout({name:'Post / '+p.d+' '+p.pl,layoutMode:'VERTICAL',width:256,fills:P(C.surface),cornerRadius:12,clipsContent:true,strokes:P(C.border),strokeWeight:1},[
  $fig.autoLayout({name:'Caption',layoutMode:'VERTICAL',layoutSizingHorizontal:'FILL',paddingLeft:14,paddingRight:14,paddingTop:12,paddingBottom:12,itemSpacing:6},[T('SAMPLE COPY',{s:10,w:'SemiBold',c:C.t3,name:'Sample label'}),T(p.cap,{s:12,c:C.t1,fill:true,lh:18,name:'Caption text'})]),
  $fig.rectangle({name:'Thumbnail',width:256,height:144,layoutSizingHorizontal:'FILL',fills:[{type:'IMAGE',imageHash:H[k++%12],scaleMode:'FILL'}]}),
  $fig.autoLayout({name:'Meta',layoutMode:'HORIZONTAL',layoutSizingHorizontal:'FILL',paddingLeft:14,paddingRight:14,paddingTop:12,paddingBottom:14,counterAxisAlignItems:'CENTER',itemSpacing:8},[
    $fig.autoLayout({name:'When',layoutMode:'VERTICAL',layoutSizingHorizontal:'FILL',itemSpacing:3},[T(p.d+' · '+p.t,{s:12,w:'SemiBold',c:C.t1,name:'Date + time'}),T(p.pl,{s:11,c:C.t2,name:'Platform'})]),
    Chip(p.st||'Scheduled',{name:'Status',bg:p.st==='Draft'?C.elev:C.yellow,c:p.st==='Draft'?C.t2:C.onAccent})])]);
const Phase=(title,sub,tag,posts)=>$fig.autoLayout({name:'Row / '+title,layoutMode:'VERTICAL',layoutSizingHorizontal:'FILL',itemSpacing:16},[
  Header(title,posts.length),
  $fig.autoLayout({name:'Phase Meta',layoutMode:'HORIZONTAL',itemSpacing:8,counterAxisAlignItems:'CENTER'},[T(sub,{s:13,c:C.t2,name:'Phase dates'}),Chip(tag,{name:'Tag filter'})]),
  $fig.autoLayout({name:'Track',layoutMode:'HORIZONTAL',itemSpacing:16,layoutSizingHorizontal:'FILL'},posts.map(Post))]);
const header=$fig.autoLayout({name:'Page Header',layoutMode:'VERTICAL',layoutSizingHorizontal:'FILL',itemSpacing:14},[
  $fig.autoLayout({name:'Badges',layoutMode:'HORIZONTAL',itemSpacing:8},[Chip('●  Connected to Metricool',{name:'Badge / Metricool',bg:C.yellow,c:C.onAccent}),Chip('~12 distributed assets',{name:'Badge / Count'}),Chip('Oct 16 – Nov 6, 2026',{name:'Badge / Window'})]),
  T('Rollout Calendar',{s:40,w:'SemiBold',c:C.t1,name:'Title'}),
  T('Grüns x The Balancing Act — every scheduled post, its caption and its slot, phase by phase. The segment airs Fri Oct 23, 7:30 a.m. ET on Lifetime.',{s:16,c:C.t2,fill:true,lh:25,name:'Summary'})]);
const s=Screen('Rollout Calendar — Screen',[header,
 Phase('Build Anticipation','Oct 16 – Oct 22 · pulls BTS-tagged assets only','tag: bts',[
  {d:'Fri Oct 16',t:'12:00 PM',pl:'Instagram Reel',cap:'Something big is coming to The Balancing Act. A peek behind the lights with Mario & Courtney Lopez. 👀 #Grüns'},
  {d:'Sun Oct 18',t:'10:00 AM',pl:'TikTok',cap:'Set day energy. Grüns founder Chad Janis meets the crew before cameras roll.'},
  {d:'Tue Oct 20',t:'6:30 PM',pl:'Instagram Stories',cap:'Countdown: 3 days. Here’s what went into filming our Balancing Act segment.'}]),
 Phase('Week of Air','Oct 23 – Oct 29 · pulls air-tagged assets','tag: air',[
  {d:'Thu Oct 22',t:'7:00 PM',pl:'Instagram Reel',cap:'Tomorrow morning! Catch Grüns on The Balancing Act, 7:30 a.m. ET on Lifetime.'},
  {d:'Fri Oct 23',t:'7:00 AM',pl:'Facebook',cap:'We’re on in 30 minutes. Tune in to Lifetime and watch Chad Janis with Mario & Courtney Lopez.'},
  {d:'Fri Oct 23',t:'8:15 AM',pl:'TikTok',cap:'In case you missed it: the full Grüns segment from this morning’s Balancing Act.'},
  {d:'Sun Oct 25',t:'11:00 AM',pl:'YouTube Shorts',cap:'Chad Janis on why daily nutrition should be simple. As seen on The Balancing Act.'}]),
 Phase('Post-Air Amplify','Oct 30 – Nov 2 · pulls segment cut-downs','tag: segment',[
  {d:'Fri Oct 30',t:'12:00 PM',pl:'Instagram Reel',cap:'Our favorite moment from The Balancing Act, now in 30 seconds.'},
  {d:'Sat Oct 31',t:'9:00 AM',pl:'LinkedIn',cap:'Proud to share the Grüns story on Lifetime’s The Balancing Act. Thank you Mario & Courtney.'},
  {d:'Mon Nov 2',t:'5:00 PM',pl:'Instagram Carousel',cap:'5 takeaways from Chad Janis’ Balancing Act interview. Swipe through. ➡️'}]),
 Phase('Sustain','Nov 3 – Nov 6 · evergreen + podcast','tag: evergreen',[
  {d:'Wed Nov 4',t:'12:00 PM',pl:'Instagram Reel',cap:'More from Between Takes, the Balancing Act podcast, with Grüns founder Chad Janis.',st:'Draft'},
  {d:'Fri Nov 6',t:'10:00 AM',pl:'TikTok',cap:'Still thinking about this one. The Grüns segment, as seen on The Balancing Act.',st:'Draft'}])]);
Spec('Rollout Calendar (Metricool)',1520,{
 does:'Shows the first half of the delivery: the ~12 posts BrandStar distributes for the client through Metricool. It is a linear, stacked-row timeline (not a calendar grid). Each row is a rollout phase from Oct 16 to Nov 6, 2026, so the client reads the story of the campaign top to bottom, exactly as each post will look in the feed.',
 features:['Header with “Connected to Metricool” badge, ~12 distributed asset count and the rollout window','4 phase rows: Build Anticipation (BTS only), Week of Air (Grüns segment airs Fri Oct 23, 7:30 a.m. ET, Lifetime), Post-Air Amplify, Sustain','Each row uses the Row/Header component with a post count and a metadata tag filter chip','Post cards: caption block on top of the thumbnail, date + time, platform, status chip (Scheduled / Draft)','Captions are SAMPLE COPY until Metricool returns the real scheduled captions','Thumbnails use the studio placeholder images'],
 source:'Metricool connector — scheduled posts, captions, platforms, times and status. Phase membership is driven by metadata tags on the Frame.io assets (bts → Build Anticipation, air → Week of Air).',
 questions:['Metricool credentials and slide mapping (slides 3 and 4) still needed to build the connector','Exact phase date boundaries for Post-Air Amplify vs Sustain','Should Draft / unscheduled posts be visible to the client?','Final metadata naming rules for phase tags'],
 refs:['Every asset tags The Balancing Act; metadata tagging powers collections; the bundle is a “finished house” with legal/technical-only revisions.','Deck splits in two — first half is the ~12 Metricool posts with captions and the rollout calendar; tags drive which assets each phase pulls; Netflix-style, dummy-proof, tells a story.']});
await finish();
return {screen:s.node.id};
