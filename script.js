const $=id=>document.getElementById(id);
const ld=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const MOODS={happy:["😄","Happy","#fbbf24"],sad:["😢","Sad","#60a5fa"],stressed:["🤯","Stressed","#fb7185"],tired:["😴","Tired","#94a3b8"],bored:["🥱","Bored","#2dd4bf"],angry:["😠","Angry","#ef4444"],romantic:["🥰","Romantic","#f472b6"],heartbroken:["💔","Heartbroken","#e879f9"],};
// [title,year,creator,length,[moods],energy,vibe,[genres],blurb,hue]
const M=[
["The Secret Life of Walter Mitty",2013,"Ben Stiller",114,["bored","motivated","curious"],3,"uplift",["Adventure","Drama"],"A daydreamer finally steps out of his head and into a real adventure.",200],
["Inside Out",2015,"Pete Docter",95,["sad","nostalgic","anxious"],3,"cathartic",["Animation","Family"],"A tender, funny look at why sadness matters.",45],
["Paddington 2",2017,"Paul King",103,["sad","stressed","lonely","tired"],2,"comfort",["Comedy","Family"],"Pure kindness in film form — it's hard to stay gloomy.",15],
["Good Will Hunting",1997,"Gus Van Sant",126,["sad","lonely","heartbroken","motivated"],2,"cathartic",["Drama"],"A gifted, guarded young man learns what it takes to let someone in.",210],
["Eternal Sunshine of the Spotless Mind",2004,"Michel Gondry",108,["heartbroken","nostalgic","sad"],3,"cathartic",["Romance","Sci-Fi"],"Erasing a love story only proves how much it mattered.",205],
["Amélie",2001,"Jean-Pierre Jeunet",122,["lonely","bored","romantic","happy"],3,"comfort",["Romance","Comedy"],"A whimsical Paris tale about small acts of kindness.",350],
["The Grand Budapest Hotel",2014,"Wes Anderson",99,["bored","happy","curious","nostalgic"],3,"fun",["Comedy","Adventure"],"A delightfully strange caper in a candy-pink hotel.",330],
["Whiplash",2014,"Damien Chazelle",106,["motivated","angry","excited"],5,"thrilling",["Drama","Music"],"A drummer's obsession turned up to a breathless crescendo.",20],
["Mad Max: Fury Road",2015,"George Miller",120,["angry","excited","bored"],5,"thrilling",["Action"],"A two-hour adrenaline surge across the wasteland.",25],
["Spirited Away",2001,"Hayao Miyazaki",125,["tired","curious","nostalgic","anxious"],2,"comfort",["Animation","Fantasy"],"A gentle, dreamlike journey through a spirit world.",170],
["Chef",2014,"Jon Favreau",114,["motivated","happy","stressed"],3,"uplift",["Comedy","Drama"],"Food, family and a fresh start on four wheels.",10],
["The Pursuit of Happyness",2006,"Gabriele Muccino",117,["motivated","sad","stressed"],3,"uplift",["Drama"],"A father's grit against impossible odds.",40],
["Her",2013,"Spike Jonze",126,["lonely","romantic","heartbroken","curious"],2,"thoughtful",["Sci-Fi","Romance"],"A quiet, aching look at connection in a digital age.",8],
["About Time",2013,"Richard Curtis",123,["romantic","nostalgic","happy","lonely"],2,"comfort",["Romance","Fantasy"],"A time-travel love story that's really about cherishing ordinary days.",190],
["Knives Out",2019,"Rian Johnson",130,["bored","curious","excited"],4,"fun",["Mystery","Comedy"],"A sharp, witty whodunit with a gleefully tangled plot.",30],
["Parasite",2019,"Bong Joon-ho",132,["curious","angry","excited"],4,"thrilling",["Thriller","Drama"],"A razor-edged class satire that keeps twisting.",120],
["Interstellar",2014,"Christopher Nolan",169,["curious","motivated","nostalgic"],4,"thoughtful",["Sci-Fi","Drama"],"Love and time stretched across the stars.",230],
["Soul",2020,"Pete Docter",100,["anxious","bored","motivated","sad"],2,"thoughtful",["Animation","Fantasy"],"A jazz pianist rediscovers what makes life worth living.",260],
["The Intouchables",2011,"Olivier Nakache & Éric Toledano",112,["sad","lonely","happy","tired"],3,"uplift",["Comedy","Drama"],"An unlikely friendship that brings laughter back.",50],
["Everything Everywhere All at Once",2022,"Daniel Kwan & Daniel Scheinert",139,["anxious","curious","excited","sad"],5,"cathartic",["Sci-Fi","Comedy"],"A wild multiverse romp with a huge, warm heart.",300],
["Lost in Translation",2003,"Sofia Coppola",102,["lonely","tired","bored","romantic"],1,"thoughtful",["Drama","Romance"],"Two strangers find comfort in a sleepless Tokyo night.",280],
["Hot Fuzz",2007,"Edgar Wright",121,["stressed","angry","happy","bored"],4,"fun",["Comedy","Action"],"A supercop meets the strangest quiet village ever.",5],
["Before Sunrise",1995,"Richard Linklater",101,["romantic","lonely","curious"],1,"thoughtful",["Romance","Drama"],"One night, one city, one endless conversation.",340],
["Little Miss Sunshine",2006,"Dayton & Faris",101,["happy","stressed","sad"],3,"comfort",["Comedy","Drama"],"A dysfunctional road trip with a lot of heart.",55],
["Arrival",2016,"Denis Villeneuve",116,["curious","sad","anxious"],2,"thoughtful",["Sci-Fi","Drama"],"First contact as a meditation on language, grief and choice.",215],
["The Princess Bride",1987,"Rob Reiner",98,["happy","tired","nostalgic","bored"],3,"comfort",["Fantasy","Comedy"],"A fairytale full of swordplay, laughs and true love.",35]];
const B=[
["Atomic Habits",2018,"James Clear",320,["motivated","bored","stressed"],3,"uplift",["Self-help"],"Tiny changes, remarkable results — a practical guide to better habits.",150],
["The Alchemist",1988,"Paulo Coelho",208,["lonely","bored","curious","motivated"],2,"uplift",["Fable"],"A shepherd's quest teaches that the journey is the treasure.",40],
["Man's Search for Meaning",1946,"Viktor E. Frankl",184,["sad","anxious","lonely","motivated"],2,"thoughtful",["Memoir","Psychology"],"Finding purpose even in the darkest circumstances.",220],
["Norwegian Wood",1987,"Haruki Murakami",296,["sad","nostalgic","lonely","heartbroken"],1,"cathartic",["Literary","Romance"],"A wistful story of love, loss and growing up.",160],
["The Midnight Library",2020,"Matt Haig",304,["sad","anxious","lonely","bored"],2,"uplift",["Fantasy","Fiction"],"Between life and death, a library of every life you could've lived.",250],
["Pride and Prejudice",1813,"Jane Austen",432,["romantic","happy","nostalgic"],2,"comfort",["Classic","Romance"],"Wit, sparks and slow-burn love in Regency England.",330],
["Project Hail Mary",2021,"Andy Weir",476,["curious","bored","excited","happy"],4,"fun",["Sci-Fi"],"A lone astronaut, an impossible mission, and an unforgettable friend.",195],
["The Hobbit",1937,"J.R.R. Tolkien",310,["tired","nostalgic","bored","happy"],3,"comfort",["Fantasy"],"A reluctant hero, a dragon, and a very cozy start.",25],
["Educated",2018,"Tara Westover",352,["motivated","angry","sad"],3,"cathartic",["Memoir"],"A woman raised off-grid claws her way to a PhD.",20],
["Big Magic",2015,"Elizabeth Gilbert",288,["motivated","bored","anxious"],2,"uplift",["Creativity"],"Permission to live a more creative, curious life.",300],
["The Subtle Art of Not Giving a F*ck",2016,"Mark Manson",224,["angry","stressed","anxious"],3,"thoughtful",["Self-help"],"A blunt reframe on what's actually worth worrying about.",12],
["Where the Crawdads Sing",2018,"Delia Owens",384,["lonely","sad","romantic"],2,"cathartic",["Fiction","Mystery"],"A marsh, a mystery, and a girl who grew up on her own.",140],
["Gone Girl",2012,"Gillian Flynn",432,["angry","bored","excited"],5,"thrilling",["Thriller"],"A marriage unravels in a twisty, unputdownable thriller.",0],
["Sapiens",2011,"Yuval Noah Harari",464,["curious","bored"],3,"thoughtful",["Non-fiction","History"],"A sweeping tour of how humans came to rule the world.",45],
["The Little Prince",1943,"Antoine de Saint-Exupéry",96,["tired","sad","nostalgic","lonely"],1,"comfort",["Fable","Classic"],"A tiny, timeless story about love and what's essential.",215],
["A Man Called Ove",2012,"Fredrik Backman",337,["sad","lonely","angry","happy"],2,"cathartic",["Fiction"],"A grump, a cat, and the neighbours who melt his heart.",205],
["Eleanor Oliphant Is Completely Fine",2017,"Gail Honeyman",336,["lonely","sad","anxious"],2,"cathartic",["Fiction"],"A guarded woman slowly learns to be seen.",180],
["The Hitchhiker's Guide to the Galaxy",1979,"Douglas Adams",224,["stressed","bored","happy","tired"],3,"fun",["Sci-Fi","Comedy"],"Don't panic — the funniest end of the world ever written.",270],
["The Power of Now",1997,"Eckhart Tolle",236,["anxious","stressed"],1,"thoughtful",["Mindfulness"],"A calm guide to quieting the restless mind.",175],
["Becoming",2018,"Michelle Obama",448,["motivated","nostalgic"],2,"uplift",["Memoir"],"An honest, inspiring life story told with warmth.",340],
["Normal People",2018,"Sally Rooney",266,["romantic","heartbroken","lonely"],2,"cathartic",["Literary","Romance"],"Two people orbit each other through love and misunderstanding.",100],
["Dune",1965,"Frank Herbert",612,["excited","curious"],4,"thrilling",["Sci-Fi","Epic"],"Politics, prophecy and sand on an epic scale.",35],
["Wintering",2020,"Katherine May",288,["tired","sad","stressed","anxious"],1,"comfort",["Non-fiction"],"Learning to rest through life's hard seasons.",200],
["Born a Crime",2016,"Trevor Noah",304,["happy","angry","motivated"],3,"uplift",["Memoir","Comedy"],"Hilarious, sharp stories of growing up in apartheid South Africa.",50],
["The Seven Husbands of Evelyn Hugo",2017,"Taylor Jenkins Reid",389,["romantic","heartbroken","nostalgic"],3,"cathartic",["Fiction","Romance"],"A Hollywood icon finally tells the truth about her loves.",320]];
const BW=[
["3 Idiots",2009,"Rajkumar Hirani",170,["motivated","stressed","happy","bored"],4,"uplift",["Comedy","Drama"],"Two friends and a free-spirited genius take on the pressure to be 'successful'.",205],
["Dil Chahta Hai",2001,"Farhan Akhtar",183,["nostalgic","happy","bored","romantic"],3,"comfort",["Comedy","Drama"],"Three friends, three love stories and the ache of growing up.",195],
["Zindagi Na Milegi Dobara",2011,"Zoya Akhtar",155,["motivated","bored","stressed","happy"],4,"uplift",["Adventure","Drama"],"A bachelor trip across Spain turns into a life reset.",190],
["Taare Zameen Par",2007,"Aamir Khan",165,["sad","lonely","motivated","anxious"],2,"cathartic",["Drama","Family"],"A teacher sees the gifted child everyone else overlooked.",45],
["Dangal",2016,"Nitesh Tiwari",161,["motivated","angry","excited"],4,"uplift",["Sports","Drama"],"A father trains his daughters to become wrestling champions.",15],
["Queen",2014,"Vikas Bahl",146,["heartbroken","sad","lonely","motivated"],3,"uplift",["Comedy","Drama"],"Dumped before her wedding, she takes her honeymoon solo.",330],
["Jab We Met",2007,"Imtiaz Ali",138,["romantic","happy","heartbroken","bored"],3,"comfort",["Romance","Comedy"],"A chatty free spirit and a heartbroken tycoon share a train ride.",340],
["Barfi!",2012,"Anurag Basu",151,["romantic","happy","lonely","sad"],3,"comfort",["Romance","Comedy"],"A charming, tender silent-film-style love story.",35],
["Wake Up Sid",2009,"Ayan Mukerji",138,["bored","curious","motivated","nostalgic"],2,"uplift",["Drama","Romance"],"A directionless young man slowly finds his footing in Mumbai.",25],
["Piku",2015,"Shoojit Sircar",126,["tired","stressed","happy","lonely"],2,"comfort",["Comedy","Drama"],"A funny, warm road trip between a daughter and her cranky father.",50],
["The Lunchbox",2013,"Ritesh Batra",104,["lonely","romantic","sad","tired"],1,"thoughtful",["Romance","Drama"],"A misdelivered lunchbox starts a quiet correspondence.",170],
["Gully Boy",2019,"Zoya Akhtar",153,["motivated","angry","excited"],4,"uplift",["Music","Drama"],"A Mumbai street rapper fights to be heard.",260],
["Andhadhun",2018,"Sriram Raghavan",139,["bored","excited","curious"],4,"thrilling",["Thriller","Comedy"],"A blind pianist (or is he?) gets tangled in a murder.",5],
["Kahaani",2012,"Sujoy Ghosh",122,["curious","excited","angry"],4,"thrilling",["Thriller","Mystery"],"A pregnant woman searches Kolkata for her missing husband.",350],
["Swades",2004,"Ashutosh Gowariker",210,["nostalgic","motivated","lonely","curious"],2,"uplift",["Drama"],"An NRI scientist returns home and finds a purpose.",120],
["Rang De Basanti",2006,"Rakeysh Omprakash Mehra",167,["angry","motivated","nostalgic","excited"],4,"cathartic",["Drama"],"College friends are awakened by a documentary on freedom fighters.",30],
["Veer-Zaara",2004,"Yash Chopra",192,["romantic","heartbroken","nostalgic","sad"],2,"cathartic",["Romance","Drama"],"A love story that waits across borders and decades.",0],
["Kabhi Khushi Kabhie Gham",2001,"Karan Johar",210,["nostalgic","sad","happy","lonely"],3,"cathartic",["Family","Drama"],"A big, emotional story about family, forgiveness and home.",40],
["Dilwale Dulhania Le Jayenge",1995,"Aditya Chopra",189,["romantic","happy","nostalgic","bored"],3,"comfort",["Romance"],"The iconic love story that defined a generation.",345],
["Chhichhore",2019,"Nitesh Tiwari",143,["sad","nostalgic","motivated","happy"],3,"uplift",["Comedy","Drama"],"College friends reunite to teach a lesson about failure.",200],
["Tamasha",2015,"Imtiaz Ali",139,["bored","curious","motivated","anxious"],3,"thoughtful",["Romance","Drama"],"A man must stop playing a role and find who he really is.",280],
["Munna Bhai M.B.B.S.",2003,"Rajkumar Hirani",156,["happy","stressed","sad","bored"],3,"fun",["Comedy","Drama"],"A lovable gangster becomes a doctor with hugs and heart.",160],
["PK",2014,"Rajkumar Hirani",153,["curious","happy","bored","lonely"],3,"thoughtful",["Comedy","Sci-Fi"],"An alien asks the questions about faith that nobody dares to.",20],
["Highway",2014,"Imtiaz Ali",133,["tired","anxious","stressed","curious"],2,"thoughtful",["Drama","Road"],"A kidnapping becomes an unexpected road to freedom.",175],
["Lagaan",2001,"Ashutosh Gowariker",224,["motivated","excited","nostalgic"],4,"uplift",["Sports","Epic"],"Villagers stake everything on a cricket match against the Raj.",45],
["Rockstar",2011,"Imtiaz Ali",159,["heartbroken","sad","lonely","angry"],3,"cathartic",["Music","Romance"],"Heartbreak is the fuel for a musician's raw art.",10],
["Stree",2018,"Amar Kaushik",128,["stressed","bored","happy","excited"],4,"fun",["Horror","Comedy"],"A small town, a ghost, and genuinely big laughs.",330],
["Dear Zindagi",2016,"Gauri Shinde",151,["sad","anxious","lonely","stressed"],2,"comfort",["Drama"],"A young woman finds an unconventional therapist and herself.",200],
["Anand",1971,"Hrishikesh Mukherjee",122,["sad","lonely","motivated","nostalgic"],2,"cathartic",["Drama","Classic"],"A dying man teaches everyone how to live fully.",50]];
const mk=(a,t,r="",p=t)=>a.map((x,i)=>({id:p+i,type:t,region:r,title:x[0],year:x[1],by:x[2],len:x[3],moods:x[4],energy:x[5],vibe:x[6],genres:x[7],blurb:x[8],hue:x[9]}));
const ALL=[...mk(M,"m","hollywood"),...mk(BW,"m","bollywood","w"),...mk(B,"b")],byId=Object.fromEntries(ALL.map(x=>[x.id,x]));
const GOALS={match:["🎯 Match my mood",{cathartic:1.15,thoughtful:1.1,comfort:1,uplift:.9,fun:.8,thrilling:.8}],escape:["🏃 Distract me",{fun:1.25,thrilling:1.2,uplift:1,comfort:.9,cathartic:.6,thoughtful:.6}],reflect:["🪞 Reflect",{thoughtful:1.25,cathartic:1.2,comfort:.8,uplift:.8,fun:.5,thrilling:.6}]};
const TIMES={1:["⚡ Quick",100,260],2:["🌙 Evening",130,380],3:["🏖 No limit",999,9999]};
const VP={comfort:"a warm, comforting",uplift:"an uplifting",cathartic:"a deeply cathartic",thrilling:"a gripping, high-energy",thoughtful:"a thoughtful, absorbing",fun:"a fun, lively"};
let st=ld("mm",{saved:[],hidden:[],done:[],log:[]});
let sel=new Set(),goal="match",time=3,cin="all",ptr={m:0,b:0},rank={m:[],b:[]},used=[];
const save=()=>localStorage.setItem("mm",JSON.stringify(st));
const toast=m=>{const e=$("toast");e.textContent=m;e.classList.add("s");clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove("s"),2200)};

// UI build
$("moods").innerHTML=Object.entries(MOODS).map(([k,[e,l,c]])=>`<button class="mood" data-m="${k}" style="--c:${c}"><span>${e}</span><small>${l}</small></button>`).join("");
$("goal").innerHTML=Object.entries(GOALS).map(([k,v])=>`<button data-g="${k}" class="${k===goal?"on":""}">${v[0]}</button>`).join("");
const CIN={all:"🌍 All",hollywood:"🎬 Hollywood",bollywood:"🇮🇳 Bollywood"};
$("cin").innerHTML=Object.entries(CIN).map(([k,v])=>`<button data-c="${k}" class="${k===cin?"on":""}">${v}</button>`).join("");
$("cin").onclick=e=>{const b=e.target.closest("[data-c]");if(!b)return;cin=b.dataset.c;[...$("cin").children].forEach(x=>x.classList.toggle("on",x===b))};
function theme(){}
$("moods").onclick=e=>{const b=e.target.closest("[data-m]");if(!b)return;const k=b.dataset.m;sel.has(k)?sel.delete(k):sel.add(k);b.classList.toggle("on");theme()};
$("goal").onclick=e=>{const b=e.target.closest("[data-g]");if(!b)return;goal=b.dataset.g;[...$("goal").children].forEach(x=>x.classList.toggle("on",x===b))};
$("energy").oninput=e=>$("ev").textContent=e.target.value;

// engine
function score(it){
  const [,lq,bq]=TIMES[time],lim=it.type==="m"?lq:bq;if(it.len>lim)return -1;
  let s=0;sel.forEach(m=>{const i=it.moods.indexOf(m);if(i>=0)s+=1-i*.15});
  if(!s)return -1;
  s*=GOALS[goal][1][it.vibe];
  s-=Math.abs(it.energy-(+$("energy").value))*.1;
  return s+((it.title.length*7+used.length*3)%10)/200;
}
function rankAll(){
  ["m","b"].forEach(t=>{rank[t]=ALL.filter(x=>x.type===t&&(t==="b"||cin==="all"||x.region===cin)&&!st.hidden.includes(x.id)&&!st.done.includes(x.id)).map(x=>({x,s:score(x)})).filter(o=>o.s>=0).sort((a,b)=>b.s-a.s)});
  ptr={m:0,b:0};
}
const maxS=()=>Math.max(1,sel.size*1.25);
const pct=s=>Math.max(52,Math.min(99,Math.round(52+47*s/maxS())));
function why(it){
  const mm=it.moods.filter(m=>sel.has(m)).map(m=>MOODS[m][1].toLowerCase());
  return `This is ${VP[it.vibe]} ${it.type==="m"?"watch":"read"} that suits feeling ${mm.join(" & ")}.${Math.abs(it.energy-(+$("energy").value))<=1?" Its pace also fits your energy right now.":""}`;
}
const cover=it=>`background:hsl(${it.hue},40%,32%)`;
const pimg=it=>`<img data-pid="${it.id}" alt="" referrerpolicy="no-referrer">`;
const lenTxt=it=>it.type==="m"?it.len+" min":it.len+" pages";

function pick(t){
  const r=rank[t];if(!r.length)return `<div class="load">No ${t==="m"?"movies":"books"} match that combo — try a longer time window or fewer moods.</div>`;
  const o=r[ptr[t]%r.length],it=o.x,sv=st.saved.includes(it.id);
  const alts=[1,2,3,4].filter(i=>i<r.length).map(i=>r[(ptr[t]+i)%r.length]);
  const more=alts.length?`<div class="mh">More ${t==="m"?"movies":"books"} for you</div><div class="more">${alts.map((a,i)=>`<div class="mc"><div class="cover" style="${cover(a.x)}" data-a="jump" data-t="${t}" data-n="${i+1}">${pimg(a.x)}<span>${t==="m"?(a.x.region==="bollywood"?"🇮🇳":"🎬"):"📖"}</span><b>${esc(a.x.title)}</b></div><div class="mt">${esc(a.x.title)}</div><div class="ms"><span>${a.x.year} · ${pct(a.s)}% match</span></div></div>`).join("")}</div>`:"";
  return `<div class="pick"><div class="cover" style="${cover(it)}">${pimg(it)}<span>${t==="m"?"🎬":"📖"}</span><b>${esc(it.title)}</b></div>
  <div class="info"><div class="kick">${t==="m"?(it.region==="bollywood"?"🇮🇳 BOLLYWOOD":"🎬 HOLLYWOOD"):"📚 BOOK"} · ${it.year} · ${lenTxt(it)}</div><h3>${esc(it.title)}</h3>
  <div class="by">${t==="m"?"Directed by":"By"} ${esc(it.by)}</div><div>${esc(it.blurb)}</div>
  <div class="tags">${it.genres.map(g=>`<i>${g}</i>`).join("")}<i>${it.vibe}</i></div>
  <div class="why">💡 ${why(it)}</div>
  <div class="match"><span>${pct(o.s)}% match</span><div class="bar"><i style="width:${pct(o.s)}%"></i></div></div>
  <div class="acts"><button data-a="done" data-id="${it.id}">✓ ${t==="m"?"Seen it":"Read it"}</button><button data-a="next" data-t="${t}">↻ Another</button><button data-a="no" data-id="${it.id}">✕ Not for me</button></div>
  </div></div>${more}`;
}
function show(){
  $("res").innerHTML=`<div class="card"><div class="dh"><h2>Your double feature</h2><div class="sub">Based on feeling ${[...sel].map(m=>MOODS[m][0]+" "+MOODS[m][1]).join(", ")} · ${GOALS[goal][0]}</div></div>${pick("m")}<hr>${pick("b")}</div>`;hydrate();
}
$("go").onclick=()=>{
  if(!sel.size)return toast("Pick at least one mood first");
  $("res").innerHTML=`<div class="card"><div class="load"><div class="spin"></div><div id="lm">Finding your match…</div></div></div>`;
  setTimeout(()=>{used.push(1);rankAll();show();
    $("res").scrollIntoView({behavior:"smooth"})},1300);
};
$("res").onclick=e=>{
  const b=e.target.closest("[data-a]");if(!b)return;const a=b.dataset.a,id=b.dataset.id,t=b.dataset.t;
  if(a==="done"){st.done.push(id);rankAll2(byId[id].type);toast("Marked — we'll skip it")}
  else if(a==="no"){st.hidden.push(id);rankAll2(byId[id].type);toast("Got it — won't suggest again")}
  else if(a==="next")ptr[t]++;
  else if(a==="jump")ptr[t]+=+b.dataset.n;
  save();show();
};
function rankAll2(t){const p={...ptr};rankAll();ptr={...p,[t]:0};ptr[t==="m"?"b":"m"]=p[t==="m"?"b":"m"]}

// ---- poster engine: TMDB (optional key) → iTunes → Open Library (books) → Wikipedia ----
const PC=ld("mm_p",{}),mem={},norm=x=>x.toLowerCase().replace(/[^a-z0-9]/g,"");
const jget=async u=>{const r=await fetch(u);if(!r.ok)throw 0;return r.json()};
async function findPoster(it){
  const tk=localStorage.getItem("mm_tmdb"),q=encodeURIComponent(it.title),T=[];
  if(it.type==="m"){
    if(tk)T.push(async()=>{const d=await jget(`https://api.themoviedb.org/3/search/movie?api_key=${tk}&query=${q}&year=${it.year}`);const p=d.results?.[0]?.poster_path;return p&&"https://image.tmdb.org/t/p/w500"+p});
    T.push(async()=>{const d=await jget(`https://itunes.apple.com/search?term=${q}&media=movie&entity=movie&limit=10&country=us`);const r=d.results?.find(x=>Math.abs(new Date(x.releaseDate).getFullYear()-it.year)<=1&&norm(x.trackName||"").startsWith(norm(it.title).slice(0,8)));return r&&r.artworkUrl100.replace(/\d+x\d+bb/,"600x600bb")});
    T.push(async()=>{const d=await jget(`https://itunes.apple.com/search?term=${q}&media=movie&entity=movie&limit=10&country=in`);const r=d.results?.find(x=>Math.abs(new Date(x.releaseDate).getFullYear()-it.year)<=1&&norm(x.trackName||"").startsWith(norm(it.title).slice(0,8)));return r&&r.artworkUrl100.replace(/\d+x\d+bb/,"600x600bb")});
    for(const t of [`${it.title} (${it.year} film)`,`${it.title} (film)`,it.title])T.push(async()=>{const d=await jget("https://en.wikipedia.org/api/rest_v1/page/summary/"+encodeURIComponent(t.replace(/ /g,"_")));return d.thumbnail&&/film/i.test(d.description||"")&&d.thumbnail.source.replace(/\/\d+px-/,"/500px-")});
  } else T.push(async()=>{const d=await jget(`https://openlibrary.org/search.json?title=${q}&author=${encodeURIComponent(it.by)}&limit=1&fields=cover_i`);const c=d.docs?.[0]?.cover_i;return c&&`https://covers.openlibrary.org/b/id/${c}-L.jpg`});
  T.push(async()=>{const d=await jget(`https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${q}%20${it.year}%20${it.type==="m"?"film":"book"}&gsrlimit=1&prop=pageimages&piprop=thumbnail&pithumbsize=500&format=json&origin=*`);const p=Object.values(d.query?.pages||{})[0];return p&&p.thumbnail&&norm(p.title).includes(norm(it.title).slice(0,8))&&p.thumbnail.source});
  for(const f of T){try{const u=await f();if(u)return u}catch{}}return "";
}
function poster(it){
  if(PC[it.id])return Promise.resolve(PC[it.id]);
  if(!(it.id in mem))mem[it.id]=findPoster(it).then(u=>{if(u){PC[it.id]=u;localStorage.setItem("mm_p",JSON.stringify(PC))}return u});
  return mem[it.id];
}
function hydrate(){document.querySelectorAll("img[data-pid]").forEach(img=>{if(img.dataset.h)return;img.dataset.h=1;
  poster(byId[img.dataset.pid]).then(u=>{if(!u)return;img.onload=()=>img.classList.add("ok");img.src=u})})}
$("key").onclick=()=>{
  const k=prompt("Optional: paste a free TMDB API key (themoviedb.org → Settings → API) for the best movie posters.\nLeave empty to use the free automatic sources.",localStorage.getItem("mm_tmdb")||"");
  if(k===null)return;k.trim()?localStorage.setItem("mm_tmdb",k.trim()):localStorage.removeItem("mm_tmdb");
  Object.keys(PC).forEach(i=>byId[i]?.type==="m"&&delete PC[i]);localStorage.setItem("mm_p",JSON.stringify(PC));Object.keys(mem).forEach(i=>delete mem[i]);
  toast("Poster settings updated");if(rank.m.length||rank.b.length)show();
};
