
/* =============== 2.1 colchicine inside the cell =============== */
const CI=[
 {from:0,at:.05,k:'Scene 1 · The gut',t:'Swallowed and absorbed',
  txt:'Colchicine is taken by mouth and absorbed in the small intestine. Oral bioavailability averages about 45%. Plasma levels peak 1–2 hours after a dose. P-glycoprotein in the gut wall pumps part of each dose back into the lumen, and intestinal CYP3A4 metabolizes a little more. [[Rochdi1994,FDA-Colcrys,Slobodnick2018]]',
  pt:'The tablet is absorbed from the gut. Only part of each dose gets into the body.',
  hook:'Colchicine is a P-glycoprotein (ABCB1) and CYP3A4 substrate. Both matter for drug interactions.'},
 {from:.12,at:.17,k:'Scene 2 · Liver and bile',t:'Recycling through bile',
  txt:'The liver metabolizes part of the drug through CYP3A4 and secretes some into bile. Bile returns it to the gut, where some is absorbed again: enterohepatic recycling, seen as a second plasma peak within hours. The kidneys excrete a large share unchanged (40–65% of a dose in urine). A huge volume of distribution (about 5–8 L/kg) and binding inside cells give a long half-life, about 27–31 hours with repeated dosing, though studies range widely. [[Ferron1996,FDA-Colcrys,Finkelstein2010]]',
  pt:'The liver sends the drug out in bile, and the gut takes some of it back up, so it lingers in the body.',
  hook:'Enterohepatic recirculation helps explain the long half-life and why hepatic or biliary disease raises exposure.'},
 {from:.26,at:.34,k:'Scene 3 · Neutrophils',t:'It piles up in white cells',
  txt:'Granulocytes carry no working P-glycoprotein pump, so colchicine that enters them is not pushed back out. Leukocyte levels peak about two days after a dose, long after the plasma peak at about one hour, and neutrophil concentrations can exceed peak plasma levels more than 16-fold. Why neutrophils trap the drug is a well-supported hypothesis. [[Chappey1993,Klimecki1994,Leung2015,BenChetrit1998MH]]',
  pt:'White blood cells soak the drug up and hold on to it. Plasma levels fall within hours, but levels inside the white cells stay up for days.',
  hook:'Low P-gp in neutrophils = intracellular trapping. This is part of why the drug is so selective for neutrophil-driven inflammation.'},
 {from:.45,at:.5,k:'Scene 4 · Tubulin',t:'Binding free tubulin',
  txt:'Inside the cell colchicine binds free β-tubulin at the "colchicine site". The tubulin–colchicine complex adds to the growing end of a microtubule and stops further growth. [[Leung2015]]',
  pt:'The drug grabs the building blocks of the cell\'s internal scaffolding.',
  hook:'Colchicine binds <b>tubulin</b> (not the finished microtubule). Low concentrations cap; higher concentrations depolymerize.'},
 {from:.6,at:.66,k:'Scene 5 · Microtubules',t:'The scaffolding shortens',
  txt:'Microtubules constantly grow and shrink. With their growing ends capped, they shrink faster than they can rebuild. Proteins that were parked on them, including the RhoA activator GEF-H1, are released into the cytoplasm. [[Leung2015,Park2016]]',
  pt:'The scaffolding falls apart, and proteins that were stuck to it drift free.',
  hook:'Microtubule disruption releases GEF-H1, which turns RhoA on.'},
 {from:.74,at:.8,k:'Scene 6 · Pyrin',t:'Two proposed ways pyrin stays quiet',
  txt:'Route 1: free GEF-H1 activates RhoA, RhoA drives PKN, PKN re-phosphorylates pyrin, and 14-3-3 holds it off. Route 2: pyrin needs intact microtubules for its second activation step, so without them no ASC speck forms. Gao and colleagues found microtubule drugs did not prevent pyrin dephosphorylation, which argues for route 2. Which route dominates at clinical doses is still debated. [[Park2016,Gao2016,VanGorp2016,Schnappauf2019]]',
  pt:'Researchers have two explanations for how this keeps pyrin quiet. Both may be partly right.',
  hook:'Exam answer: colchicine → tubulin → microtubule disruption → <b>reduced pyrin inflammasome activation</b> and reduced neutrophil function.'},
 {from:.87,at:.93,k:'Scene 7 · The neutrophil',t:'Less crawling, less sticking',
  txt:'Without a working microtubule network, neutrophils polarize and migrate poorly toward chemoattractants. Colchicine also alters adhesion: it changes the distribution of E-selectin on endothelial cells and causes neutrophils to shed L-selectin, so fewer neutrophils stick and leave the bloodstream. It can also dampen NLRP3 assembly, which needs microtubules to bring its parts together, though in the lab this takes higher concentrations. [[Cronstein1995,Leung2015,Misawa2013]]',
  pt:'White cells move and stick less, so fewer of them reach the lining where attacks happen.',
  hook:'Two layers of effect: <b>inside</b> the cell (pyrin, NLRP3) and <b>between</b> cells (chemotaxis, selectin-mediated adhesion).'}
];
inits.colin=()=>{
  const svg=$('#ciSvg'),rg=$('#ciT');
  const r=rng(23);const MOL=Array.from({length:26},(_,i)=>({o:r()*.5,loop:i%3===0}));
  const along=(pts,u)=>{u=clamp(u);let L=[],tot=0;for(let i=1;i<pts.length;i++){const d=Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]);L.push(d);tot+=d}
    let x=u*tot;for(let i=0;i<L.length;i++){if(x<=L[i]||i===L.length-1){const k=L[i]?clamp(x/L[i]):0;return[lerp(pts[i][0],pts[i+1][0],k),lerp(pts[i][1],pts[i+1][1],k)]}x-=L[i]}};
  const P_IN=[[70,46],[96,96],[118,140],[160,190],[214,220],[262,236]],P_PORT=[[262,236],[312,196],[386,150],[450,118]],P_BLOOD=[[450,118],[540,96],[640,96],[640,210]],P_BILE=[[450,118],[430,180],[392,222],[310,246],[262,236]];
  const mol=(x,y,o=1)=>`<path d="M${f1(x)} ${f1(y-5)} l5 5 -5 5 -5 -5z" style="fill:var(--crocus);opacity:${f1(o)}"/>`;
  const pl=pts=>'M'+pts.map(p=>p.join(' ')).join(' L');
  function sceneA(t,o){if(o<=0)return'';let s=`<g style="opacity:${f1(o)}">`;
    // anatomy
    s+=`<path d="${pl(P_IN.slice(0,3))}" style="fill:none;stroke:var(--line);stroke-width:12;stroke-linecap:round"/>`;
    s+=`<ellipse cx="120" cy="140" rx="34" ry="24" style="fill:var(--cyto);stroke:var(--memb);stroke-width:2"/><text x="120" y="182" class="t-xs t-mid">stomach</text>`;
    s+=`<path d="M150 180 q30 40 60 10 t60 20 t50 40 t60 -10 t40 40" style="fill:none;stroke:var(--memb);stroke-width:16;stroke-linecap:round;opacity:.55"/><text x="230" y="300" class="t-sm">SMALL INTESTINE</text>`;
    s+=`<path d="${pl(P_PORT)}" style="fill:none;stroke:var(--bad);stroke-width:5;opacity:.35"/><text x="300" y="168" class="t-xs" transform="rotate(-30 300 168)">portal vein</text>`;
    s+=`<path d="M410 80 q60 -40 120 -6 q20 30 -10 56 q-60 34 -116 6 q-24 -24 6 -56z" style="fill:var(--bad-soft);stroke:var(--bad);stroke-width:2"/><text x="474" y="102" class="t-lbl t-mid">liver</text><text x="474" y="118" class="t-xs t-mid">CYP3A4</text>`;
    s+=`<path d="${pl(P_BILE)}" style="fill:none;stroke:var(--gold);stroke-width:4;stroke-dasharray:6 5"/><circle cx="430" cy="182" r="12" style="fill:var(--gold-soft);stroke:var(--gold)"/><text x="446" y="210" class="t-xs" style="fill:var(--gold)">bile → back to gut</text>`;
    s+=`<path d="${pl(P_BLOOD)}" style="fill:none;stroke:var(--bad);stroke-width:7;opacity:.4"/><text x="652" y="150" class="t-sm">BLOOD</text>`;
    s+=`<path d="M640 210 V300" style="stroke:var(--bad);stroke-width:7;opacity:.4"/><path d="M610 320 q-14 -26 10 -34 q20 -4 22 20 q-4 24 -32 14z" style="fill:var(--panel-2);stroke:var(--muted)"/><text x="626" y="346" class="t-xs t-mid">kidney → urine (40–65%)</text>`;
    s+=`<rect x="54" y="26" width="32" height="16" rx="8" style="fill:var(--crocus);opacity:${f1(1-ramp(t,0,.04))}"/><text x="96" y="38" class="t-xs">tablet</text>`;
    s+=`<text x="${f1(400)}" y="${f1(270)}" class="t-xs" style="fill:var(--crocus)">P-gp in gut wall pumps some back</text>`;
    const T=t/.26;
    MOL.forEach((m,i)=>{const life=clamp(T*1.5-m.o);if(life<=0)return;let p;
      if(life<.32)p=along(P_IN,life/.32);else if(life<.5)p=along(P_PORT,(life-.32)/.18);
      else if(m.loop&&life<.78)p=along(P_BILE,(life-.5)/.28);else if(m.loop)p=along(P_PORT,(life-.78)/.22);else p=along(P_BLOOD,(life-.5)/.5);
      s+=mol(p[0],p[1]+(i%3-1)*3)});
    if(t>.12)s+=`<path d="M300 258 q-20 30 -60 22" class="arrow" style="stroke:var(--gold)"/><text x="160" y="330" class="t-xs" style="fill:var(--gold)">enterohepatic recycling</text>`;
    return s+'</g>'}
  function sceneB(t,o){if(o<=0)return'';const k=ramp(t,.26,.44);let s=`<g style="opacity:${f1(o)}">`;
    s+=`<text x="20" y="28" class="t-sm">IN THE BLOODSTREAM</text>`;
    s+=`<circle cx="190" cy="150" r="100" style="fill:var(--neut);stroke:var(--crocus);stroke-width:3"/><text x="190" y="272" class="t-lbl t-mid">neutrophil</text><text x="190" y="288" class="t-xs t-mid">little P-gp → drug is trapped</text>`;
    [[-30,-18,22],[26,14,22],[18,-34,18]].forEach(([dx,dy,rr])=>s+=`<circle cx="${190+dx}" cy="${150+dy}" r="${rr}" style="fill:var(--nuc);opacity:.85"/>`);
    const rN=rng(3);const nIn=Math.round(6+44*k);for(let i=0;i<nIn;i++){const a=rN()*6.283,d=20+rN()*68;s+=mol(190+Math.cos(a)*d,150+Math.sin(a)*d,.9)}
    s+=`<circle cx="500" cy="150" r="88" style="fill:var(--cyto);stroke:var(--memb);stroke-width:3"/><circle cx="500" cy="150" r="30" style="fill:var(--nuc);opacity:.6"/><text x="500" y="262" class="t-lbl t-mid">cell with P-gp pumps</text><text x="500" y="278" class="t-xs t-mid">e.g. gut lining, liver, kidney</text>`;
    [-.6,.5,1.6,2.7].forEach((a,i)=>{const x=500+88*Math.cos(a),y=150+88*Math.sin(a);s+=`<rect x="${f1(x-7)}" y="${f1(y-11)}" width="14" height="22" rx="4" transform="rotate(${f1(a*57.3+90)} ${f1(x)} ${f1(y)})" style="fill:var(--sea)"/>`;
      const ph=((t*30+i*.25)%1);s+=mol(lerp(500+60*Math.cos(a),500+120*Math.cos(a),ph),lerp(150+60*Math.sin(a),150+120*Math.sin(a),ph),1-ph)});
    s+=`<text x="600" y="60" class="t-xs" style="fill:var(--sea)">P-gp pumps it out</text>`;
    // mini chart: plasma vs leukocyte
    const x0=40,x1=700,y0=310,y1=380;s+=`<line x1="${x0}" x2="${x1}" y1="${y1}" y2="${y1}" class="axis"/><text x="${x0}" y="${y0-6}" class="t-xs">AFTER ONE DOSE · 0–4 days · each curve scaled to its own peak (leukocyte levels are far higher)</text>`;
    const pf=u=>{const h=u*96;return h<1?h:.25*Math.exp(-(h-1)/40)+.75*Math.exp(-(h-1)/3)};const lf=u=>{const h=u*96;return (h/47)*Math.exp(1-h/47)};
    s+=`<path d="${pathFn(u=>u<=k?pf(u):NaN,x0,x1,y1,y0).replace(/[ML][^ML]*NaN[^ML]*/g,'')}" style="fill:none;stroke:var(--bad);stroke-width:2.5"/><path d="${pathFn(u=>u<=k?lf(u):NaN,x0,x1,y1,y0).replace(/[ML][^ML]*NaN[^ML]*/g,'')}" style="fill:none;stroke:var(--crocus);stroke-width:3"/>`;
    s+=`<text x="${x1}" y="${y0+4}" class="t-xs t-end" style="fill:var(--crocus)">inside leukocytes</text><text x="${x1}" y="${y0+18}" class="t-xs t-end" style="fill:var(--bad)">plasma</text>`;
    return s+'</g>'}
  function sceneC(t,o){if(o<=0)return'';const bind=ramp(t,.45,.6),shrink=ease(ramp(t,.58,.74));let s=`<g style="opacity:${f1(o)}">`;
    s+=`<text x="20" y="28" class="t-sm">INSIDE THE NEUTROPHIL · MICROTUBULES</text><circle cx="52" cy="200" r="22" style="fill:var(--panel-2);stroke:var(--muted)"/><text x="52" y="240" class="t-xs t-mid">centrosome</text>`;
    const rows=[110,200,290];
    rows.forEach((y,ri)=>{const full=26,n=Math.round(full*(1-.72*shrink*(1-ri*.08)));
      for(let i=0;i<n;i++){const x=80+i*22;s+=`<rect x="${x}" y="${y-12}" width="10" height="11" rx="2" style="fill:var(--tub-a)"/><rect x="${x+10}" y="${y-12}" width="10" height="11" rx="2" style="fill:var(--tub-b)"/><rect x="${x+5}" y="${y+1}" width="10" height="11" rx="2" style="fill:var(--tub-b)"/><rect x="${x+15}" y="${y+1}" width="7" height="11" rx="2" style="fill:var(--tub-a)"/>`;
        if(i%5===2&&n-i>2)s+=`<circle cx="${x+10}" cy="${y-20}" r="6" style="fill:var(--good)"/>`}
      const endX=80+n*22;if(bind>.2)s+=mol(endX+6,y,bind);
      // falling dimers + released GEF-H1
      for(let k=0;k<4;k++){const ph=(t*8+k*.25+ri*.3)%1;if(shrink>0&&shrink<1)s+=`<rect x="${f1(endX+10+ph*30)}" y="${f1(y+ph*36-6)}" width="16" height="9" rx="2" style="fill:var(--tub-b);opacity:${f1((1-ph)*.8)}"/>`}
      const rel=Math.round(5*shrink);for(let k=0;k<rel;k++){const gx=lerp(240+k*90,250+k*92,shrink),gy=y+30+Math.sin(t*20+k)*6;s+=`<circle cx="${f1(gx)}" cy="${f1(gy)}" r="6" style="fill:var(--good);opacity:${f1(shrink)}"/>`}
    });
    // free tubulin + colchicine binding
    for(let k=0;k<7;k++){const x=430+(k%4)*64,y=350+Math.floor(k/4)*26;s+=`<rect x="${x}" y="${y-8}" width="22" height="11" rx="3" style="fill:var(--tub-b)"/>`;if(k/7<bind)s+=mol(x+28,y-3)}
    s+=`<text x="430" y="330" class="t-xs">tubulin + colchicine caps growing ends</text>`;
    s+=`<g transform="translate(560 30)"><circle cx="6" cy="0" r="6" style="fill:var(--good)"/><text x="16" y="4" class="t-xs">GEF-H1</text><path d="M6 14 l5 5 -5 5 -5 -5z" style="fill:var(--crocus)"/><text x="16" y="23" class="t-xs">colchicine</text></g>`;
    return s+'</g>'}
  function sceneD(t,o){if(o<=0)return'';const a=ramp(t,.74,.87),b=ramp(t,.87,1);let s=`<g style="opacity:${f1(o)}">`;
    s+=`<text x="20" y="28" class="t-sm">ROUTE 1 · GEF-H1 → RhoA → pyrin brake back on</text><text x="700" y="28" class="t-xs t-end" style="fill:var(--warn)">proposed · supported in cells</text>`;
    const chain=[['GEF-H1','var(--good)'],['RhoA-GTP','var(--sea)'],['PKN1/2','var(--muted)'],['pyrin-P · 14-3-3','var(--crocus)']];
    chain.forEach(([l,c],i)=>{const x=30+i*160,on=ramp(a,i*.22,i*.22+.25);s+=`<rect x="${x}" y="44" width="${i===3?176:130}" height="40" rx="10" style="fill:var(--panel);stroke:${c};stroke-width:${f1(1+2*on)};opacity:${f1(.3+.7*on)}"/><text x="${x+(i===3?88:65)}" y="69" class="t-lbl t-mid" style="opacity:${f1(.3+.7*on)}">${l}</text>`;
      if(i<3)s+=`<path d="M${x+132} 64 H${x+156}" class="arrow" marker-end="url(#ciA)" style="opacity:${f1(on)}"/>`});
    s+=`<text x="420" y="104" class="t-xs" style="fill:var(--crocus);opacity:${f1(ramp(a,.8,1))}">pyrin held OFF (as in the resting state)</text>`;
    s+=`<text x="20" y="140" class="t-sm">ROUTE 2 · no microtubule platform → step 2 cannot finish</text><text x="700" y="140" class="t-xs t-end" style="fill:var(--warn)">proposed · supported in cells</text>`;
    const r2=ramp(a,.3,1);
    s+=`<g style="opacity:${f1(.3+.7*r2)}"><rect x="40" y="154" width="200" height="40" rx="10" style="fill:var(--panel);stroke:var(--terra);stroke-width:2"/><text x="140" y="179" class="t-lbl t-mid">dephosphorylated pyrin</text><path d="M242 174 H300" class="arrow" marker-end="url(#ciA)"/>`;
    for(let k=0;k<14;k++){const an=k/14*6.283;s+=`<circle cx="${f1(350+Math.cos(an)*22)}" cy="${f1(174+Math.sin(an)*22)}" r="4" style="fill:var(--crocus);opacity:.45"/>`}
    s+=`<path d="M322 146 L378 202 M378 146 L322 202" style="stroke:var(--bad);stroke-width:4;stroke-linecap:round;opacity:${f1(r2)}"/><text x="400" y="179" class="t-lbl">no ASC speck</text></g>`;
    // neutrophil effects
    s+=`<text x="20" y="236" class="t-sm" style="opacity:${f1(.3+.7*b)}">AND ACROSS THE WHOLE NEUTROPHIL</text>`;
    const eff=[['Chemotaxis','crawls poorly toward; chemoattractants'],['Adhesion','sheds L-selectin; E-selectin moved'],['NLRP3','assembly also; dampened']];
    eff.forEach(([h,d],i)=>{const x=40+i*225,on=ramp(b,i*.25,i*.25+.3);s+=`<g style="opacity:${f1(.25+.75*on)}"><rect x="${x}" y="250" width="205" height="110" rx="12" style="fill:var(--panel);stroke:var(--line)"/>${neutro(x+36,300,16,1)}<text x="${x+64}" y="282" class="t-lbl">${h}</text><text x="${x+64}" y="300" class="t-xs">${d.split('; ')[0]}</text><text x="${x+64}" y="314" class="t-xs">${d.split('; ')[1]||''}</text>`;
      if(i===0)s+=`<path d="M${x+60} 336 h${f1(40+60*(1-on))}" class="arrow" marker-end="url(#ciA)"/><path d="M${x+150} 326 l14 18 M${x+164} 326 l-14 18" style="stroke:var(--bad);stroke-width:3;opacity:${f1(on)}"/>`;
      if(i===1)s+=`<path d="M${x+20} 346 H${x+190}" style="stroke:var(--bad);stroke-width:4;opacity:.5"/><text x="${x+64}" y="340" class="t-xs" style="fill:var(--bad)">vessel wall</text>`;
      s+='</g>'});
    return s+'</g>'}
  function draw(t){
    const oA=1-ramp(t,.24,.28),oB=ramp(t,.25,.29)*(1-ramp(t,.43,.47)),oC=ramp(t,.44,.48)*(1-ramp(t,.72,.76)),oD=ramp(t,.73,.77);
    svg.innerHTML=`<defs>${marker('ciA')}</defs><rect width="720" height="400" rx="12" style="fill:var(--field)"/>`+sceneA(t,oA)+sceneB(t,oB)+sceneC(t,oC)+sceneD(t,oD);
    const p=phaseOf(CI,t);setSt(p);$('#ciNote').innerHTML=noteHTML(CI[p]);
  }
  const stop=playWire(rg,$('#ciPlay'),draw,26000,'Replay','colin');
  const setSt=stepWire($('#ciSteps'),CI,rg,draw,stop);
  $('#ciCards').innerHTML=`
   <div class="card"><span class="ev est">Established</span><h4>It binds tubulin and disrupts microtubules</h4><p>This has been known for decades and is the starting point of every proposed mechanism. [[Leung2015]]</p></div>
   <div class="card"><span class="ev est">Established</span><h4>It suppresses the pyrin inflammasome selectively</h4><p>In cell experiments colchicine blocked pyrin-driven IL-1β release without a consistent effect on NLRP3, NLRC4 or AIM2 at the concentrations tested. [[Gao2016,Park2016]]</p></div>
   <div class="card"><span class="ev early">Debated</span><h4>Which route matters most?</h4><p>GEF-H1/RhoA re-activation (route 1) and loss of the microtubule-dependent step (route 2) were both shown in cultured cells. The results differ partly because studies used different drug concentrations. [[Park2016,Gao2016,Schnappauf2019]]</p></div>
   <div class="card"><span class="ev early">A puzzle</span><h4>FMF pyrin can fire without microtubules</h4><p>In patients' cells, FMF variants removed the need for microtubules, yet colchicine still works clinically. Proposed explanations include its effects on neutrophil migration and adhesion, and a remaining partial dependence on microtubules in the body. This is an open question. [[VanGorp2016,Magnotti2019]]</p></div>`;
  draw(+rg.value);
};
