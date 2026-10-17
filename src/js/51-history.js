/* =============== 5.1 history & people =============== */
const HI_LANES=[['Clinic & names','var(--terra)'],['Treatment','var(--crocus)'],['Genes','var(--sea)'],['Mechanism','var(--gold)'],['Criteria & guides','var(--good)']];
const HI_EV=[
 {y:1908,l:0,h:'Janeway & Mosenthal: a paroxysmal syndrome',t:'1908 · A first sketch?',
  txt:`Janeway and Mosenthal described "an unusual paroxysmal syndrome, probably allied to recurrent vomiting" in a young Jewish girl with short febrile attacks and abdominal pain. It is often cited as the first description, though it is not certainly FMF. [[Janeway1908,Adwan2015]]`},
 {y:1945,l:0,h:'Siegal: "benign paroxysmal peritonitis"',t:'1945 & 1949 · Benign paroxysmal peritonitis',
  txt:`Sheppard Siegal, a New York physician, reported 10 cases as "benign paroxysmal peritonitis". This is generally regarded as the first accurate description. A second series followed in 1949. [[Siegal1945,Siegal1949,Adwan2015]]`,
  pt:'The first doctor to describe the illness clearly called it a harmless, recurring inflammation of the belly lining.',
  hook:'Siegal called it <b>benign</b>. The later link to kidney disease and amyloidosis showed it was not.'},
 {y:1948,l:0,h:'Reimann: "periodic disease"',t:'1948 · Periodic disease',
  txt:`Hobart Reimann, then at the American University of Beirut, grouped recurrent fevers, peritonitis, cyclic neutropenia and intermittent arthralgia as "periodic disease" and stressed their regular periodicity. FMF attacks are in fact irregular. [[Reimann1948,Adwan2015,BenChetrit2019]]`},
 {y:1951.5,l:0,h:'Cattan & Mamou: the kidney link',t:'1951–52 · The kidney link',
  txt:`The French physicians Cattan and Mamou noted the association with kidney disease. Amyloidosis was reported about 7 years later by Tuqan in Beirut. Both reports are known here through a later historical review rather than the originals, so the dates and details are not independently verified. [[Adwan2015]]`},
 {y:1958,l:0,h:'Heller, Sohar & Sherf name it FMF',t:'1958 · "Familial Mediterranean fever"',
  txt:`At Tel Hashomer in Israel, Heller, Sohar and Sherf named the disease familial Mediterranean fever and stressed its genetic nature. Some sources date the name to an earlier Hebrew-language paper (unverified). [[Heller1958,Adwan2015]]`,
  hook:'The name holds two facts: it runs in <b>families</b>, and it clusters around the <b>Mediterranean</b>.'},
 {y:1967,l:0,h:'Sohar et al.: a survey of 470 patients',t:'1967 · The Tel Hashomer survey',
  txt:`Sohar, Gafni, Pras and Heller published a survey of 470 patients with a review of the literature. It became the basis of the Tel Hashomer clinical criteria and of standard descriptions of onset age and attack features. [[Sohar1967]] <a href="#dx" data-go="dx">See the criteria</a>`},
 {y:1972,l:1,h:'Goldfinger: colchicine prevents attacks',t:'1972 · Colchicine',
  txt:`Goldfinger\'s letter in the <i>New England Journal of Medicine</i> reported colchicine as prophylaxis for FMF attacks. It turned an often fatal disease, fatal through amyloidosis, into a treatable one. [[Goldfinger1972,Pras1998]]`,
  pt:'A daily pill turned out to prevent the attacks. That changed everything.',
  hook:`Before colchicine, more than half of FMF patients died of amyloidosis. [[Tufan2020]]`},
 {y:1974,l:1,h:'Controlled trials confirm colchicine',t:'1974 · The trials',
  txt:`Controlled trials in 1974 confirmed that daily colchicine prevents attacks: Zemer and colleagues at Tel Hashomer and a double-blind NIH trial by Dinarello and colleagues, both in the same <i>NEJM</i> issue, plus a double-blind study by Goldstein and Schwabe. [[Zemer1974,Dinarello1974,Goldstein1974]]`},
 {y:1986,l:1,h:'Zemer: colchicine prevents amyloidosis',t:'1986 · Amyloidosis prevented',
  txt:`Zemer and colleagues followed 1,070 patients for 4–11 years. In adherent patients without amyloidosis at the start, cumulative proteinuria was 1.7% at 11 years, against 48.9% at 9 years in non-adherent patients. Colchicine also stabilized early kidney disease. [[Zemer1986]]`,
  hook:'Colchicine\'s most important job is preventing <b>amyloidosis</b>, shown by Zemer 1986.'},
 {y:1992,l:2,h:'Pras et al.: the gene maps to 16p',t:'1992 · Mapping the gene',
  txt:`Pras, Aksentijevich, Kastner and colleagues at the NIH and Tel Hashomer mapped the FMF gene to the short arm of chromosome 16 by linkage in 27 non-Ashkenazi Jewish families, with a maximum LOD score of 19.86. [[Pras1992]]`},
 {y:1997,l:2,h:'MEFV cloned: pyrin and marenostrin',t:'1997 · Two teams, one gene',
  txt:`Two consortia independently cloned <i>MEFV</i> on 16p13.3. The French FMF Consortium named the protein marenostrin, from <i>mare nostrum</i>, "our sea". The International FMF Consortium named it pyrin, found a transcript made almost only in granulocytes, and found ancestral haplotypes shared across populations. [[FrenchFMF1997,IntFMF1997,Adwan2015]]`,
  pt:'In the same year, two teams found the gene and gave its protein two different names.'},
 {y:1997.6,l:4,h:'Livneh criteria published',t:'1997 · The Livneh criteria',
  txt:`Livneh and colleagues at Tel Hashomer published diagnostic criteria with sensitivity over 95% and specificity over 97% in 105 patients and 106 controls. [[Livneh1997]] <a href="#dx" data-go="dx">Try them</a>`},
 {y:2003,l:2,h:'INFEVERS registry of variants',t:'2003 · INFEVERS',
  txt:`The INFEVERS registry of mutations in hereditary inflammatory disorders was set up in Montpellier and described in 2003. It grew into a multi-gene database; in 2026 it listed 412 <i>MEFV</i> sequence variants. [[SarrausteDeMenthiere2003,Milhavet2008,Infevers2026]]`},
 {y:2011,l:3,h:'Chae: knock-in mice show gain of function',t:'2011 · Gain of function in mice',
  txt:`Mice carrying human B30.2 domains with FMF variants developed severe IL-1β-driven inflammation that needed ASC but not NLRP3, while pyrin-knockout mice were healthy. FMF variants make pyrin more active, not less. [[Chae2011]]`},
 {y:2014,l:3,h:'Xu: pyrin senses Rho modification',t:'2014 · What pyrin senses',
  txt:`Xu and colleagues in Feng Shao\'s lab in Beijing showed that pyrin assembles a caspase-1 inflammasome when bacterial toxins inactivate Rho GTPases, for example <i>C. difficile</i> toxin TcdB. Pyrin guards a cell switch rather than detecting the microbe itself. [[Xu2014]] <a href="#mech" data-go="mech">See it animated</a>`,
  hook:'Pyrin is a <b>guard</b> of RhoA activity, not a direct microbe sensor (Xu 2014).'},
 {y:2016,l:3,h:'Park: RhoA–PKN–14-3-3 keeps pyrin off',t:'2016 · The off switch',
  txt:`Park, Wood, Kastner and Chae showed that active RhoA keeps pyrin switched off. RhoA-activated kinases PKN1/PKN2 phosphorylate pyrin, which then binds inhibitory 14-3-3 proteins. Defective prenylation in mevalonate kinase deficiency inactivates RhoA, which links FMF and HIDS. Whether the FMF variants themselves weaken that brake is still open: Park reported much less PKN and 14-3-3 binding to mutant pyrin, while Masters and colleagues found FMF B30.2 variants left pyrin phosphorylation and 14-3-3 binding roughly unchanged. [[Park2016,Masters2016]]`},
 {y:2016.5,l:4,h:'EULAR recommendations for FMF',t:'2016 · EULAR recommendations',
  txt:`The 2016 EULAR recommendations made lifelong colchicine the anchor of care and suggested that one or more attacks a month despite the maximum tolerated dose for at least 6 months may indicate colchicine resistance. They are superseded by the EULAR/PReS 2024 update, which keeps colchicine first line. [[Ozen2016,Ozen2025]]`},
 {y:2018,l:1,h:'CLUSTER: canakinumab trial',t:'2018 · CLUSTER',
  txt:`In the phase III CLUSTER trial in colchicine-resistant FMF, 61% on canakinumab had a complete response at week 16 versus 6% on placebo. [[DeBenedetti2018]] <a href="#ladder" data-go="ladder">The treatment ladder</a>`},
 {y:2019,l:4,h:'Eurofever/PRINTO classification criteria',t:'2019 · Eurofever/PRINTO',
  txt:`Classification criteria for recurrent fevers combined <i>MEFV</i> genotype with clinical items, and added a clinical-only set for FMF. In validation, the genotype + clinical set reached sensitivity 0.89 and specificity 1.00. [[Gattorno2019]] <a href="#dx" data-go="dx">Try the calculator</a>`},
 {y:2020,l:2,h:'Park: selected by plague?',t:'2020 · A survival advantage?',
  txt:`<span class="ev early">Early evidence</span> Park and colleagues found signs of strong, recent positive selection around M694V and V726A. FMF-mutant pyrin binds the plague effector YopM less avidly, so cells release more IL-1β, and knock-in mice survived <i>Yersinia pestis</i> better. The link to historic plague pandemics is described as consistent with the data, not proven. [[Park2020]]`},
 {y:2025,l:4,h:'EULAR/PReS 2024 update published',t:'2025 · The 2024 EULAR/PReS update',
  txt:`The update, published in 2025, keeps lifelong colchicine and adherence at the centre, makes full control of subclinical inflammation an explicit target, and gives IL-1 blockade the strongest evidence as add-on therapy. [[Ozen2025,Cush2025]]`}
];
const HI_ERA=[{f:1900,a:1908,t:'First sketches'},{f:1958,a:1958,t:'A name'},{f:1972,a:1972,t:'Colchicine'},{f:1992,a:1992,t:'The gene'},{f:2011,a:2014,t:'The mechanism'},{f:2016.5,a:2025,t:'Guidelines today'}];
const HI_NAMES=[['Periodic peritonitis',null],['Benign paroxysmal peritonitis',1945],['Periodic disease',1948],['Familial recurring polyserositis',null],['Armenian disease',null],['Maladie périodique',null],['Siegal–Cattan–Mamou disease',1951.5],['Familial Mediterranean fever',1958]];
inits.history=()=>{
  const svg=$('#hiSvg'),rg=$('#hiT');
  const XA=150,XB=700;
  const xOf=y=>y<=1940?lerp(150,205,(y-1900)/40):y<=1990?lerp(205,455,(y-1940)/50):lerp(455,700,(y-1990)/35);
  const yOf=x=>x<=205?1900+(x-150)/55*40:x<=455?1940+(x-205)/250*50:1990+(x-455)/245*35;
  const tOfY=y=>(xOf(y)-XA)/(XB-XA);
  const LY=i=>64+i*50;
  // stack dots that sit too close in one lane
  const last={};HI_EV.forEach(e=>{const x=xOf(e.y);const p=last[e.l];e.dy=p&&x-p.x<12?(p.dy>0?-8:8):0;if(e.dy&&p&&!p.dy)p.dy=-e.dy;last[e.l]={x,dy:e.dy}});
  const steps=HI_ERA.map(E=>({from:E.f===1900?0:tOfY(E.f),at:Math.min(1,tOfY(E.a)+.004),t:E.t}));
  function draw(t){const xp=lerp(XA,XB,t),yr=yOf(xp);let s=`<defs><linearGradient id="hiGrad" gradientUnits="userSpaceOnUse" x1="${f1(xOf(1972))}" x2="${f1(xOf(1990))}" y1="0" y2="0"><stop offset="0" style="stop-color:var(--bad)"/><stop offset="1" style="stop-color:var(--good)"/></linearGradient></defs>`;
    const done=HI_EV.filter(e=>e.y<=yr+.01),cur=done.length?done[done.length-1]:null;
    // headline
    if(cur)s+=`<text x="10" y="24" class="t-big" style="font-size:22px;fill:${HI_LANES[cur.l][1]}">${Math.floor(cur.y)}</text><text x="70" y="23" class="t-lbl">${cur.h}</text>`;
    else s+=`<text x="10" y="23" class="t-lbl" style="fill:var(--muted)">Press play: the first milestone is 1908</text>`;
    // lanes
    HI_LANES.forEach(([n,c],i)=>{const y=LY(i);s+=`<rect x="146" y="${y-23}" width="564" height="46" rx="8" style="fill:var(--panel-2);opacity:${i%2?.35:.7}"/><text x="10" y="${y+4}" class="t-sm" style="fill:${c}">${n}</text><line x1="150" x2="700" y1="${y}" y2="${y}" style="stroke:${c};stroke-width:1;opacity:.35"/>`});
    // axis + ticks
    s+=`<line x1="150" x2="700" y1="300" y2="300" class="axis" style="stroke:var(--muted)"/>`;
    [1900,1940,1960,1980,1990,2000,2010,2020,2025].forEach(y=>{const x=xOf(y);s+=`<line x1="${f1(x)}" x2="${f1(x)}" y1="296" y2="304" style="stroke:var(--muted)"/><text x="${f1(x)}" y="318" class="t-xs t-mid">${y}</text>`});
    [1940,1990].forEach(y=>{const x=xOf(y);s+=`<path d="M${f1(x-4)} 306 l4 -12 M${f1(x)} 306 l4 -12" style="stroke:var(--muted);stroke-width:1"/>`});
    // dots
    HI_EV.forEach(e=>{const x=xOf(e.y),y=LY(e.l)+e.dy,c=HI_LANES[e.l][1],pass=e.y<=yr+.01,isCur=e===cur;
      if(!pass)s+=`<circle cx="${f1(x)}" cy="${y}" r="4.5" style="fill:var(--panel);stroke:var(--muted);stroke-width:1.2;opacity:.6"/>`;
      else{if(isCur){const k=ramp(xp-x,0,26);s+=`<circle cx="${f1(x)}" cy="${y}" r="${f1(8+12*k)}" style="fill:none;stroke:${c};stroke-width:2;opacity:${f1(.8*(1-k))}"/><circle cx="${f1(x)}" cy="${y}" r="8" style="fill:${c};stroke:var(--ink);stroke-width:2"/>`}
        else s+=`<circle cx="${f1(x)}" cy="${y}" r="5" style="fill:${c}"/>`}
      s+=`<circle cx="${f1(x)}" cy="${y}" r="10" class="clk" data-hy="${e.y}" style="fill:transparent"/>`});
    // outcome band
    s+=`<text x="10" y="352" class="t-sm">Outlook</text><text x="10" y="366" class="t-xs">qualitative</text><rect x="150" y="340" width="550" height="28" rx="6" style="fill:var(--panel-2)"/>`;
    s+=`<rect x="150" y="340" width="${f1(Math.max(0,xp-150))}" height="28" rx="6" style="fill:url(#hiGrad);opacity:.85"/>`;
    s+=`<clipPath id="hiClip"><rect x="150" y="340" width="${f1(Math.max(0,xp-150))}" height="28"/></clipPath><g clip-path="url(#hiClip)"><text x="158" y="358" class="t-xs" style="fill:var(--panel);font-weight:700">amyloidosis a leading cause of death</text><text x="${f1(xOf(1992))}" y="358" class="t-xs" style="fill:var(--panel);font-weight:700">amyloidosis largely preventable</text></g>`;
    if(xp>xOf(1972))s+=`<line x1="${f1(xOf(1972))}" x2="${f1(xOf(1972))}" y1="336" y2="372" style="stroke:var(--ink);stroke-width:1.5"/><text x="${f1(xOf(1972)-4)}" y="386" class="t-xs t-end">1972: colchicine</text>`;
    if(xp>xOf(1986))s+=`<line x1="${f1(xOf(1986))}" x2="${f1(xOf(1986))}" y1="336" y2="372" style="stroke:var(--ink);stroke-width:1.5"/><text x="${f1(xOf(1986)+4)}" y="386" class="t-xs">1986: amyloid prevention shown</text>`;
    // playhead
    s+=`<line x1="${f1(xp)}" x2="${f1(xp)}" y1="36" y2="372" style="stroke:var(--ink);stroke-width:1.4;opacity:.55"/><path d="M${f1(xp-5)} 300 L${f1(xp+5)} 300 L${f1(xp)} 292Z" style="fill:var(--ink)"/>`;
    s+=`<text x="${f1(Math.min(694,Math.max(156,xp)))}" y="406" class="t-xs t-mid" style="fill:var(--ink)">${Math.floor(yr)}</text>`;
    svg.innerHTML=s;
    const ph=phaseOf(steps,t);setSt(ph);
    $('#hiRead').innerHTML=`<span>year <b>${Math.floor(yr)}</b></span><span>milestones passed <b>${done.length} of ${HI_EV.length}</b></span><span>era <b>${HI_ERA[ph].t}</b></span>`;
    $('#hiNote').innerHTML=cur?`<div class="kicker">${HI_LANES[cur.l][0]}</div>`+noteHTML({t:cur.t,txt:cur.txt,pt:cur.pt,hook:cur.hook}).replace('<div class="kicker"></div>',''):noteHTML({k:'1900',t:'Before the first descriptions',txt:'Recurrent fevers with belly pain had no agreed name in the medical literature. Press play, drag the timeline, or click any dot.',pt:'The story starts with a puzzling case report in 1908.'});
  }
  const stop=playWire(rg,$('#hiPlay'),draw,24000,'Replay','history');
  const setSt=stepWire($('#hiSteps'),steps,rg,draw,stop);
  const jump=y=>{stop();const t=clamp(tOfY(y)+.002);rg.value=t;draw(t)};
  svg.addEventListener('click',e=>{const d=e.target.closest('[data-hy]');if(d)jump(+d.dataset.hy)});
  $('#hiChips').innerHTML=HI_NAMES.map(([n,y])=>y?`<button class="tag sea" data-hn="${y}">${n}<small>${Math.floor(y)}</small></button>`:`<span class="tag">${n}</span>`).join('');
  $('#hiChips').addEventListener('click',e=>{const b=e.target.closest('[data-hn]');if(b){jump(+b.dataset.hn);$('#hiSvg').scrollIntoView({block:'nearest',behavior:RM?'auto':'smooth'})}});
  $('#hiCards').innerHTML=`
   <div class="card"><h4>Pyrin or marenostrin?</h4><p>The same protein got two names in 1997: <b>pyrin</b> from the International FMF Consortium (after fever) and <b>marenostrin</b> from the French FMF Consortium (after <i>mare nostrum</i>, the Roman name for the Mediterranean). "Pyrin" won in everyday use. [[IntFMF1997,FrenchFMF1997]]</p></div>
   <div class="card"><h4>"Periodic" is a misnomer</h4><p>Reimann's 1948 "periodic disease" emphasised regular cycles. FMF attacks come at irregular intervals; the clockwork pattern belongs to PFAPA. [[Reimann1948,BenChetrit2019,Thomas1999]] <a href="#ddx" data-go="ddx">Compare the rhythms</a></p></div>
   <div class="card"><h4>From fatal to manageable</h4><p>Before colchicine, more than half of FMF patients died of amyloidosis. EULAR 2016 reports that colchicine cut the amyloidosis risk in Turkey from 60% to under 13%. [[Tufan2020,Ozen2016]]</p></div>
   <div class="card"><h4>Why is the variant so common? <span class="ev early">Early evidence</span></h4><p>Carrier frequency is roughly 10% in Jewish, Arab, Armenian and Turkish populations. Park 2020 tied this to selection by plague: stronger pyrin responses may have helped carriers survive <i>Y. pestis</i>. [[Park2020]]</p></div>`;
  draw(+rg.value);
};
