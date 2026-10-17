/* =============== 4.2 living with FMF =============== */
const LV_STEPS=[
 {from:0,at:.02,k:'Months 1–3',t:'The first year is the dense one',
  txt:'EULAR 2016 asks for response, toxicity and adherence to be reviewed every 6 months, more often in the first year or whenever acute-phase markers are raised, and yearly once things are stable. It also puts a urinalysis at every clinic visit, specifically to catch proteinuria early. The 2024 update sets no fixed interval and asks for more frequent monitoring at diagnosis and while disease is uncontrolled. [[Ozen2016,Ozen2025,RheumNow2025]]',
  pt:'Visits are closer together in the first year, then settle into a rhythm once the disease is quiet.',
  hook:'Urinalysis <b>at every visit</b>. It is the cheapest early warning for amyloid kidney disease.'},
 {from:.25,at:.3,k:'Months 4–6',t:'The six-month review',
  txt:'The tests listed in 2016 are SAA and/or CRP, blood count, liver enzymes, kidney function, CPK and urinalysis for proteinuria. The guideline says colchicine is reduced if liver enzymes rise above twice the upper limit of normal. It also says high SAA values should be shared with the patient, as a deliberate way to support adherence. The one numbered SAA target in 2016, below 10 mg/L, is written for patients who already have AA amyloidosis. Outside that situation no threshold is named: the 2024 overarching goal is minimal or no clinical activity together with control of subclinical inflammation. [[Ozen2016,Ozen2025,RheumNow2025]]',
  pt:'A six-month check looks at inflammation, blood counts, liver, kidneys, muscle enzyme and urine.',
  hook:'In AA amyloidosis the 2016 target is <b>SAA below 10 mg/L</b>, with CRP as an imperfect substitute where SAA is not available. Outside amyloidosis the guidelines name no number, only "controlled".'},
 {from:.5,at:.55,k:'Months 7–9',t:'Life does not pause for the schedule',
  txt:'Guidelines handle pregnancy, surgery and vaccination as part of ordinary FMF care rather than as exceptions. Colchicine continues through conception, pregnancy and breastfeeding. Physical stress and trauma are listed as attack triggers, and amyloidotic kidneys are described as unusually sensitive to low blood flow, high blood pressure and nephrotoxic drugs. Use the toggles above to drop these situations into the year. [[Ozen2016,Ozen2025]]',
  pt:'Pregnancy, operations and vaccinations all come up, and the published guidance covers each of them.',
  hook:'Colchicine is <b>continued</b> in pregnancy and breastfeeding, and its use alone does not justify amniocentesis.'},
 {from:.75,at:.88,k:'Months 10–12',t:'The annual picture',
  txt:'Once stable, yearly review is what 2016 describes. The 2024 update frames the year around a minimum outcome set: attack frequency per 3 months, a physician assessment, patient-reported outcome and experience measures, and CRP or SAA. The overarching goal it states is minimal or no clinical activity plus control of subclinical inflammation, lifelong, with adherence at the centre. [[Ozen2016,Ozen2025,RheumNow2025]]',
  pt:'Over a whole year the questions are simple: how many attacks, how were they, and did the inflammation markers stay normal in between.',
  hook:'The 2024 minimum outcome set: <b>attacks per 3 months, physician assessment, PROMs/PREMs, CRP or SAA</b>.'}
];
const LV_MON=`<div class="kv"><div><dt>What a routine check covers</dt><dd>SAA and/or CRP, blood count, liver enzymes, kidney function, CPK and urinalysis for proteinuria, with urinalysis at every visit. Reviewed every 6 months in 2016, more often in the first year or when markers are raised, yearly once stable. [[Ozen2016,Ozen2025]]</dd></div></div>`;
const LV_EV=[
 {m:.3,key:0,t:'Baseline visit',c:'var(--sea)',d:LV_MON},
 {m:2,key:'preg',t:'Pregnancy begins',c:'var(--crocus)',
  d:`<div class="kv"><div><dt>Pregnancy</dt><dd>Colchicine should not be stopped during conception, pregnancy or breastfeeding, and colchicine use alone does not justify amniocentesis. This was said in 2016 and repeated in 2024. In a study of 179 colchicine-treated pregnancies, 197 untreated FMF pregnancies and 312 controls, early and late miscarriage and congenital malformation rates did not differ between the groups. A 2024 meta-analysis of 1,242 FMF pregnancies found a higher risk of preterm delivery (OR 1.67, 95% CI 1.05–2.67) but no significant increase in fetal growth restriction or hypertensive disorders. [[Ozen2016,Ozen2025,BenChetrit2010,Hirahara2024]]</dd></div></div>`},
 {m:3,key:0,t:'First-year check',c:'var(--sea)',d:LV_MON},
 {m:3.6,key:'trav',t:'Long travel and standing',c:'var(--terra)',
  d:`<div class="kv"><div><dt>Travel and time on your feet</dt><dd>In 275 patients, musculoskeletal attacks were linked to prolonged standing (78.8%) and long travel (64.1%), with tiredness third (47.8%). Exertional leg pain occurred in 22.1% of 3,454 children in the largest paediatric cohort, and in 30.2% of M694V homozygotes (P&lt;0.001); EULAR 2016 suggests NSAIDs for it. Protracted febrile myalgia, a separate and heavier problem, occurred in 1.6%. [[Karadag2013,Ozturk2022,Ozen2016]]</dd></div></div>`},
 {m:5,key:'exam',t:'Exam season, high stress',c:'var(--terra)',
  d:`<div class="kv"><div><dt>Stress</dt><dd>Stress is the trigger with the best evidence behind it. In a case-crossover study of 104 Armenian patients, each additional stressful event raised the odds of an attack two days later by about 70% (OR 1.7, 95% CI 1.04–2.79), and high perceived stress also predicted attacks; the same study found no increase in odds after strenuous physical activity or high-fat meals. In 882 patients, psychological stress was the most frequently named trigger at 75.2%. EULAR 2016 notes, at low evidence level, that a temporary colchicine increase may be considered during periods of physical or emotional stress. [[Yenokyan2012,Parlar2024,Ozen2016]]</dd></div></div>`},
 {m:6,key:0,t:'Six-month labs',c:'var(--sea)',d:LV_MON},
 {m:7,key:'surg',t:'Planned surgery',c:'var(--warn)',
  d:`<div class="kv"><div><dt>Surgery</dt><dd>No dedicated studies of perioperative colchicine in FMF were found, so the guidance is indirect. EULAR 2016 lists physical stress and trauma among attack triggers, and advises avoiding surgery and hypoperfusion as far as practicable in patients with amyloidotic kidneys, which are unusually sensitive to low blood flow, high blood pressure and nephrotoxic drugs. In a 971-patient adult cohort, 24.7% had had an appendectomy; those patients had more peritonitis attacks, more colchicine resistance (15% vs 6.7%) and needed higher colchicine doses. [[Ozen2016,Bodakci2021]]</dd></div></div>`},
 {m:9,key:0,t:'First-year check',c:'var(--sea)',d:LV_MON},
 {m:9.4,key:'vacc',t:'Vaccination on a biologic',c:'var(--gold)',
  d:`<div class="kv"><div><dt>Vaccination while on IL-1 blockade</dt><dd>The 2019 EULAR vaccination recommendations say non-live vaccines can be given whatever the therapy, while live-attenuated vaccines may be considered with caution in immunosuppressed patients, preferably while disease is quiet and ideally before immunosuppression starts. The canakinumab label advises avoiding live vaccines during treatment and bringing vaccinations up to date beforehand. An international survey of 17 patients who received live-attenuated vaccines while on IL-1 or IL-6 blockade recorded 3 adverse events, 2 of them serious (varicella-zoster infection after a VZV booster, pneumonia after an MMR booster) and 7 mostly mild flares; the authors did not consider these findings a reason to change the guidelines. [[Furer2020,IlarisPI,Jeyaratnam2018]]</dd></div></div>`},
 {m:11,key:'preg',t:'Delivery',c:'var(--crocus)',
  d:`<div class="kv"><div><dt>Delivery, and the other parent</dt><dd>The meta-analysis signal in FMF pregnancy is preterm delivery (OR 1.67), not malformation. On the paternal side, men generally do not need to stop colchicine before conception, azoospermia proven to be caused by colchicine is rare, and partners of colchicine-treated men did not have more miscarriages or malformations than controls. In an Armenian study, infertility in FMF tracked more severe disease and inadequate colchicine treatment rather than the drug. Testicular amyloidosis is a recognised cause of azoospermia and is worth considering before colchicine is blamed. [[Hirahara2024,Ozen2016,BenChetrit2004,Sotskiy2021]]</dd></div></div>`},
 {m:11.8,key:0,t:'Annual review',c:'var(--sea)',d:LV_MON}
];
inits.living=()=>{
  const svg=$('#lvSvg'),rg=$('#lvT');const on={preg:false,surg:false,vacc:false,exam:false,trav:false};
  const vis=()=>LV_EV.filter(e=>e.key===0||on[e.key]);
  const CX=232,CY=232,R=148;
  const ang=m=>-Math.PI/2+m/12*Math.PI*2;
  function draw(t){
    const mNow=t*12,E=vis();
    let s=`<rect x="0" y="0" width="720" height="440" style="fill:var(--field)"/>`;
    // pregnancy span arc
    if(on.preg){const a0=ang(2),a1=ang(Math.min(mNow,11));let d='';
      for(let i=0;i<=60;i++){const a=lerp(a0,a1,i/60);d+=(i?'L':'M')+f1(CX+Math.cos(a)*(R+13))+' '+f1(CY+Math.sin(a)*(R+13))}
      if(a1>a0)s+=`<path d="${d}" style="fill:none;stroke:var(--crocus);stroke-width:7;opacity:.5;stroke-linecap:round"/>`;
      const am=ang(lerp(2,Math.min(mNow,11),.5));
      s+=`<text x="${f1(CX+Math.cos(am)*(R+28))}" y="${f1(CY+Math.sin(am)*(R+28))}" class="t-xs t-mid" style="fill:var(--crocus)">${mNow>2?'pregnancy':''}</text>`}
    // base ring + progress
    s+=`<circle cx="${CX}" cy="${CY}" r="${R}" style="fill:none;stroke:var(--line);stroke-width:9"/>`;
    let pd='';const N=Math.max(1,Math.round(t*180));
    for(let i=0;i<=N;i++){const a=ang(t*12*i/N);pd+=(i?'L':'M')+f1(CX+Math.cos(a)*R)+' '+f1(CY+Math.sin(a)*R)}
    s+=`<path d="${pd}" style="fill:none;stroke:var(--sea);stroke-width:9;stroke-linecap:round"/>`;
    // month ticks and numbers inside
    for(let m=0;m<12;m++){const a=ang(m);
      s+=`<line x1="${f1(CX+Math.cos(a)*(R-6))}" x2="${f1(CX+Math.cos(a)*(R+6))}" y1="${f1(CY+Math.sin(a)*(R-6))}" y2="${f1(CY+Math.sin(a)*(R+6))}" style="stroke:var(--panel);stroke-width:2"/>`;
      const ai=ang(m+.5);
      s+=`<text x="${f1(CX+Math.cos(ai)*(R-24))}" y="${f1(CY+Math.sin(ai)*(R-20))}" class="t-xs t-mid" style="fill:${mNow>=m?'var(--ink)':'var(--muted)'}">${m+1}</text>`}
    // event dots
    E.forEach(e=>{const a=ang(e.m),x=CX+Math.cos(a)*R,y=CY+Math.sin(a)*R,hit=mNow>=e.m;
      s+=`<circle cx="${f1(x)}" cy="${f1(y)}" r="${hit?9:6}" style="fill:${hit?e.c:'var(--panel)'};stroke:${e.c};stroke-width:2"/>`;
      if(hit)s+=`<circle cx="${f1(x)}" cy="${f1(y)}" r="${f1(9+9*bump(mNow,e.m,e.m+.6))}" style="fill:none;stroke:${e.c};stroke-width:1.5;opacity:${f1(.8*bump(mNow,e.m,e.m+.6))}"/>`});
    // moving hand
    const a=ang(mNow);
    s+=`<line x1="${CX}" x2="${f1(CX+Math.cos(a)*(R-34))}" y1="${CY}" y2="${f1(CY+Math.sin(a)*(R-34))}" style="stroke:var(--terra);stroke-width:2.4"/>`;
    s+=`<circle cx="${CX}" cy="${CY}" r="4" style="fill:var(--terra)"/>`;
    // centre readout
    s+=`<text x="${CX}" y="${CY-8}" class="t-sm t-mid">MONTH</text>`;
    s+=`<text x="${CX}" y="${CY+22}" class="t-big t-mid" style="font-size:28px">${(mNow+.0001).toFixed(1)}</text>`;
    s+=`<text x="${CX}" y="${CY+42}" class="t-xs t-mid">${E.filter(e=>mNow>=e.m).length} of ${E.length} events reached</text>`;
    // right-hand list
    s+=`<text x="432" y="38" class="t-sm" style="fill:var(--sea)">THIS YEAR, IN ORDER</text>`;
    E.forEach((e,i)=>{const y=62+i*31,hit=mNow>=e.m;
      s+=`<circle cx="442" cy="${y-4}" r="5" style="fill:${hit?e.c:'var(--panel)'};stroke:${e.c};stroke-width:1.8"/>`;
      s+=`<text x="456" y="${y}" class="t-lbl" style="fill:${hit?'var(--ink)':'var(--muted)'};font-size:12.5px">${e.t}</text>`;
      s+=`<text x="712" y="${y}" class="t-xs t-end">m${e.m.toFixed(1)}</text>`});
    if(E.length<7)s+=`<text x="456" y="${62+E.length*31+16}" class="t-xs">use the toggles to add more</text>`;
    svg.innerHTML=s;
    const p=phaseOf(LV_STEPS,t);setSt(p);
    const past=E.filter(e=>mNow>=e.m);const last=past[past.length-1];
    $('#lvNote').innerHTML=noteHTML(LV_STEPS[p])+(last?last.d:'');
    $('#lvCap').textContent=`Month ${(mNow).toFixed(1)} of 12 · ${past.length} events reached${last?' · last: '+last.t:''}. Schematic year; intervals follow published guidance, not any one clinic.`;
  }
  const stop=playWire(rg,$('#lvPlay'),draw,18000,'Replay','living');
  const setSt=stepWire($('#lvSteps'),LV_STEPS,rg,draw,stop);
  [['lvPreg','preg'],['lvSurg','surg'],['lvVacc','vacc'],['lvExam','exam'],['lvTrav','trav']].forEach(([id,k])=>{
    const b=$('#'+id);b.onclick=()=>{on[k]=!on[k];b.setAttribute('aria-pressed',on[k]);draw(+rg.value)}});
  draw(+rg.value);

  /* ---- trigger evidence ---- */
  const ts=$('#lvTrig'),tr=$('#lvTR');
  const LV_TRIG=[
   {h:'REPORTED TRIGGERS OF SEROSITIS ATTACKS · 275 patients',y:46},
   {l:'cold exposure',v:59.3,y:66},
   {l:'emotional stress',v:49.8,y:94},
   {l:'tiredness',v:40.0,y:122},
   {l:'menstruation (of women)',v:33.7,y:150},
   {h:'REPORTED TRIGGERS OF MUSCULOSKELETAL ATTACKS · same study',y:192},
   {l:'prolonged standing',v:78.8,y:212},
   {l:'long travel',v:64.1,y:240},
   {h:'LARGEST QUESTIONNAIRE STUDY · 882 patients',y:282},
   {l:'psychological stress',v:75.2,y:302}
  ];
  function drawT(t){
    const BX0=218,BX1=662;let s=`<rect x="0" y="0" width="720" height="420" style="fill:var(--field)"/>`;
    [0,25,50,75,100].forEach(v=>{const x=lerp(BX0,BX1,v/100);
      s+=`<line x1="${f1(x)}" x2="${f1(x)}" y1="56" y2="316" class="grid"/><text x="${f1(x)}" y="332" class="t-xs t-mid">${v}%</text>`});
    let bi=0;
    LV_TRIG.forEach(r=>{
      if(r.h){s+=`<text x="14" y="${r.y}" class="t-sm" style="fill:var(--terra)">${r.h}</text>`;return}
      const k=ease(ramp(t,bi*.08,bi*.08+.4)),w=(BX1-BX0)*r.v/100*k;bi++;
      s+=`<text x="208" y="${r.y+13}" class="t-xs t-end" style="fill:var(--ink)">${r.l}</text>`;
      s+=`<rect x="${BX0}" y="${r.y}" width="${f1(w)}" height="18" rx="4" style="fill:var(--terra)"/>`;
      s+=`<text x="${f1(BX0+w+7)}" y="${r.y+13}" class="t-xs" style="fill:var(--terra);font-weight:700;opacity:${f1(ramp(k,.6,1))}">${f1(r.v)}%</text>`});
    // case-crossover block
    const o=ease(ramp(t,.6,.95));
    s+=`<g style="opacity:${f1(.12+.88*o)}"><text x="14" y="358" class="t-sm" style="fill:var(--sea)">CASE-CROSSOVER STUDY · 104 patients, each compared with themselves</text>`;
    const chips=[['each extra stressful event: odds of an attack 2 days later up ~70%','var(--sea)','var(--sea-soft)'],
                 ['strenuous exercise: no rise in odds','var(--good)','var(--good-soft)'],
                 ['high-fat meals: no rise in odds','var(--good)','var(--good-soft)']];
    chips.forEach((c,i)=>{const y=i===0?368:394,x=i===2?372:14,w=i===0?690:348;
      s+=`<rect x="${x}" y="${y}" width="${w}" height="20" rx="6" style="fill:${c[2]};stroke:${c[1]}"/>`;
      s+=`<text x="${x+10}" y="${y+14}" class="t-xs" style="fill:${c[1]}">${c[0]}</text>`});
    s+='</g>';
    ts.innerHTML=s;
  }
  playWire(tr,$('#lvTPlay'),drawT,9000,'Replay','living');drawT(+tr.value);

  /* ---- quality of life ---- */
  const qs=$('#lvQol'),qr=$('#lvQ');
  const LV_Q=[
   {l:'work absenteeism',s2:'111 adults',a:9.3,p:0.7},
   {l:'presenteeism',s2:'output lost at work',a:35.2,p:9.6},
   {l:'depression',s2:'diagnosed, n=7,670',a:6.22,p:4.58},
   {l:'anxiety',s2:'same database',a:4.93,p:3.14}
  ];
  function drawQ(t){
    const X0=118,X1=700,Y=244,TOP=56,sc=v=>Y-(Y-TOP)*v/40;
    let s=`<rect x="0" y="0" width="720" height="330" style="fill:var(--field)"/>`;
    s+=`<text x="14" y="32" class="t-sm" style="fill:var(--terra)">WORK, MOOD · FMF vs controls (percent)</text>`;
    [0,10,20,30,40].forEach(v=>{s+=`<line x1="${X0}" x2="${X1}" y1="${f1(sc(v))}" y2="${f1(sc(v))}" class="grid"/><text x="${X0-8}" y="${f1(sc(v)+3)}" class="t-xs t-end">${v}%</text>`});
    s+=`<line x1="${X0}" x2="${X1}" y1="${Y}" y2="${Y}" class="axis"/>`;
    const gw=(X1-X0)/LV_Q.length;
    LV_Q.forEach((g,i)=>{const cx=X0+gw*(i+.5),k=ease(ramp(t,i*.12,i*.12+.46)),bw=32;
      [[g.p,'var(--muted)'],[g.a,'var(--terra)']].forEach((pr,j)=>{const x=cx-(2*bw+10)/2+j*(bw+10),h=(Y-TOP)*pr[0]/40*k;
        s+=`<rect x="${f1(x)}" y="${f1(Y-h)}" width="${bw}" height="${f1(h)}" rx="3" style="fill:${pr[1]}"/>`;
        s+=`<text x="${f1(x+bw/2)}" y="${f1(Y-h-6)}" class="t-xs t-mid" style="fill:${pr[1]};font-weight:700;opacity:${f1(ramp(k,.6,1))}">${pr[0]}</text>`});
      s+=`<text x="${f1(cx)}" y="${Y+18}" class="t-xs t-mid" style="fill:var(--ink)">${g.l}</text>`;
      s+=`<text x="${f1(cx)}" y="${Y+31}" class="t-xs t-mid">${g.s2}</text>`});
    const o=ease(ramp(t,.6,1));
    s+=`<g style="opacity:${f1(.12+.88*o)}"><rect x="14" y="282" width="690" height="42" rx="8" style="fill:var(--panel);stroke:var(--line)"/>`;
    s+=`<text x="28" y="300" class="t-xs" style="fill:var(--ink)">school: 129 adolescents with FMF had lower grade-point averages and lower</text>`;
    s+=`<text x="28" y="315" class="t-xs" style="fill:var(--ink)">school-functioning scores than controls (P=0.001). No percentage is reported.</text></g>`;
    qs.innerHTML=s;
  }
  playWire(qr,$('#lvQPlay'),drawQ,8000,'Replay','living');drawQ(+qr.value);

  $('#lvCards').innerHTML=`
   <div class="card"><h4>Prognosis: two cohorts, two answers</h4><p>In a Turkish single-centre cohort of 587 patients followed for a median of 6 years, survival did not differ significantly from the general population (standardised mortality ratio 1.48, 95% CI 0.817–2.49). Amyloidosis was the leading cause of death and the only significant predictor of mortality. In an Israeli cohort of 1.25 million adolescents, the 1,225 with FMF had higher mortality: 8.73 against 4.32 deaths per 10,000 person-years, with adjusted hazard ratios of 1.7 in men and 2.48 in women. Kidney amyloidosis caused 35% of deaths in men and 60% in women. The two studies differ in size, country and era; what they agree on is that amyloidosis is what drives the risk. [[Akar2012,Twig2014]]</p>
     <div class="hook"><b>Exam hook</b>Amyloidosis is the hinge of FMF prognosis. Control the inflammation between attacks and the survival curves move toward the population curve.</div></div>
   <div class="card"><h4>Quality of life, measured</h4><p>School-aged children with FMF scored lower than healthy peers on physical and psychosocial quality of life. In 111 adults, work absenteeism was 9.3% against 0.7% in controls and presenteeism 35.2% against 9.6%; impairment was greatest in colchicine-resistant patients and lower in those on IL-1 antagonists. SF-36 scores improved after 3 months of IL-1 antagonist treatment in 44 colchicine-resistant patients. Rilonacept also improved physical quality-of-life scores in its trial. [[Makay2009,Suticen2021,Varan2019,Hashkes2014]]</p></div>
   <div class="card"><h4>Mood</h4><p>In an Israeli health-database study of 7,670 FMF patients and 7,670 matched controls, depression was diagnosed in 6.22% against 4.58% and anxiety in 4.93% against 3.14%, both P&lt;0.001. Questionnaire studies find larger gaps: in one adult study 33% against 12% for depression and 53% against 16% for anxiety, with lower physical SF-36 scores. In 130 children, anxiety was higher than in controls but depression was not. Diagnosed-rate differences and questionnaire-score differences answer different questions, which is why the numbers look so different. [[Lidor2021,Deger2011,Sonmez2020]]</p></div>
   <div class="card"><h4>Legs, stairs and long days</h4><p>Exertional leg pain is common and often mistaken for something else: 22.1% of 3,454 children in the largest paediatric cohort, rising to 30.2% among M694V homozygotes. EULAR 2016 suggests NSAIDs for it. Protracted febrile myalgia, which is severe muscle pain lasting 5 days or more with fever and raised markers, occurred in 1.6%; it responds to glucocorticoids, with NSAIDs or IL-1 blockade as options. [[Ozturk2022,Ozen2016]]</p></div>
   <div class="card"><h4>What counts as a trigger</h4><p>Reported triggers include physical or emotional stress, menstruation, trauma, cold, infection, high fat intake, fasting, lack of sleep and tiredness. The honest summary is that stress has the strongest study design behind it, cold and standing are reported very often, and two things people commonly avoid, exercise and fatty meals, did not raise attack odds in the case-crossover study. Cold was significant only in exon 10 variant carriers and M694V homozygotes in the 882-patient study. [[Ozen2016,Yenokyan2012,Parlar2024,Karadag2013]]</p>
     <div class="pt"><b>In plain words</b>Lists of triggers mostly come from asking people what they noticed. The one study that compared each person with themselves found stress mattered and exercise and fatty food did not.</div></div>`;
  $('#lvOrg').innerHTML=`<p><b>Where patients find each other.</b> The FMF &amp; AID Global Association is a Zürich-based nonprofit supporting people with FMF and other autoinflammatory diseases worldwide, with a helpline, educational materials and an international patient survey. The Autoinflammatory Alliance is a US 501(c)(3) charity promoting awareness, diagnosis and care for autoinflammatory diseases. Both descriptions come from the source entries listed here rather than from the organisations' own pages. Patients were also in the room when the guidelines were written: one patient representative on the 2016 panel and two on the 2024 panel. [[FMFAID,AutoinflammatoryAlliance,Ozen2016,Ozen2025]]</p>`;
};
