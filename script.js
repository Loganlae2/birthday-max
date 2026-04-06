// ══════════════════════════════════════════════════════════════
//   HAPPY BIRTHDAY MAX! — Retro Arcade Experience
//   Built with love by Logan Edelheit
//
//   HOW TO ADD PHOTOS:
//   1. Open the photo in Google Drive
//   2. Click the three dots → "Share" → set to "Anyone with link"
//   3. Copy the URL — it looks like:
//      https://drive.google.com/file/d/FILE_ID/view
//   4. Replace null below with:
//      "https://drive.google.com/uc?export=view&id=FILE_ID"
//
// ══════════════════════════════════════════════════════════════

const GAME_DATA = {

  // ════════════════════════════════════════
  //  LEVEL 1 — THE EARLY YEARS
  //  Birth → 5th Grade  |  2004 – 2014
  // ════════════════════════════════════════
  levels: [
    {
      id: "era1",
      number: 1,
      title: "THE EARLY YEARS",
      subtitle: "Birth → 5th Grade",
      yearRange: "2004 — 2014",
      themeColor: "#00ff41",
      secondaryColor: "#00ffff",
      bgClass: "bg-era1",
      roomIcons: ["🏠", "⛺", "🎸", "📚", "🏈", "⭐"],
      memories: [
        {
          id: "home-base",
          icon: "🏠",
          title: "HOME BASE",
          subtitle: "Franklin, Michigan — The House That Built Us",
          story: "Born April 23rd, 2004. Franklin, Michigan. The same house our whole lives.\n\nMost people grow up moving around, losing the places that made them who they are. Not us. That house in Franklin was everything — the backyard, the neighborhood, the kitchen table where everything happened. It's where the Edelheit brothers story actually starts.\n\nNo matter where either of us ends up, that's home base forever.",
          photo: null
        },
        {
          id: "double-trouble",
          icon: "👥",
          title: "DOUBLE TROUBLE",
          subtitle: "Born Together. Ride Together.",
          story: "We started at Adat Shalom together. Did everything together from literally day one.\n\nYou never really know what it means to have a twin until you imagine life without one. There was never a time I can remember being alone. Same school, same house, same everything. Built-in best friend from the jump.\n\nMost people have to find their person. We just woke up next to ours.",
          photo: null
        },
        {
          id: "west-maple",
          icon: "📚",
          title: "WEST MAPLE DAYS",
          subtitle: "Elementary School — Where It All Started",
          story: "Mom would give us money to go to the bookstore and we would absolutely lose it over the silly putty, the laser tag sets, the invisible ink pens. Complete suckers for that front display every single time.\n\nThe library? Bloons Tower Defense like it was our job. Remember the book challenge — logging books and getting those little foot tokens for your keychain? We took that so seriously.\n\nLunch at the long tables together, Mom packed our lunches, and the GRITZ snacks were genuinely elite. Elementary school just hit different.",
          photo: null
        },
        {
          id: "camp-tamakwa",
          icon: "⛺",
          title: "CAMP TAMAKWA",
          subtitle: "Eight Years. The Place That Made Us.",
          story: "Eight years at Tamakwa. We didn't know what that place would mean to us when we first went — fourth or fifth grade summer — but it became one of the defining parts of our whole childhood.\n\nWe were always in a cabin together. We did the long trips together. You were obsessed with windsurfing — you'd stay out on the water for hours. At the campfires you were always getting 'waters,' every single time without fail. You were absolutely a player at camp, let's just be honest about that.\n\nThe one thing we both universally, completely hated? Swimming lessons. Torture. Every time.",
          photo: null
        },
        {
          id: "guitar-hero-legos",
          icon: "🎸",
          title: "GUITAR HERO & LEGOS",
          subtitle: "Before Phones. Before Everything.",
          story: "Before we had anything else, we had Guitar Hero and Legos.\n\nGuitar Hero was a religion in our house. We played for hours. I'm not going to say who was better because I don't want to embarrass you on your birthday — but we both know.\n\nAnd Legos — entire weekends just building. No phones, no agenda. Just the two of us with a pile of pieces and nowhere to be. Those might actually be some of my favorite memories of us.",
          photo: null
        },
        {
          id: "flag-football",
          icon: "🏈",
          title: "FLAG FOOTBALL",
          subtitle: "Future NFL Stars (We Thought)",
          story: "Flag football was serious business when we were kids. We went out every season and genuinely competed.\n\nBetween this and Franklin baseball, we really thought we were building a legacy in Michigan youth sports. Flag football was the one that was actually fun though — we were out there trying, competing, and actually having a good time.\n\n(Franklin baseball is a different story. We'll get to that.)",
          photo: null
        }
      ]
    },

    // ════════════════════════════════════════
    //  LEVEL 2 — MIDDLE SCHOOL SAGA
    //  6th – 8th Grade  |  2014 – 2017
    // ════════════════════════════════════════
    {
      id: "era2",
      number: 2,
      title: "MIDDLE SCHOOL SAGA",
      subtitle: "6th — 8th Grade",
      yearRange: "2014 — 2017",
      themeColor: "#ff00ff",
      secondaryColor: "#ffff00",
      bgClass: "bg-era2",
      roomIcons: ["🏫", "🏊", "🏃", "💕", "😂", "👫"],
      memories: [
        {
          id: "berkshire",
          icon: "🏫",
          title: "BERKSHIRE",
          subtitle: "Middle School Survival Arc",
          story: "Berkshire was... an experience. Let's say it was character-building.\n\nMiddle school is already rough and Berkshire made sure you earned every bit of it. But we got through it the same way we got through everything — together.\n\nAnd for the record: you started dating Sophia Chung in middle school. Your first girlfriend. I had nobody. Completely normal, totally fine, not at all a pattern that continued.",
          photo: "https://drive.google.com/thumbnail?id=1xQZO_vi8YXM3_Ap-4qpq-d_L2qWvFA0i&sz=w1200"
        },
        {
          id: "swimming",
          icon: "🏊",
          title: "ALWAYS STARVING",
          subtitle: "Swimming & the Hunger That Followed",
          story: "We swam at Berkshire and every single time without fail, we were absolutely starving after practice.\n\nI don't know what swimming does to you biologically but it was like a switch — practice ends, immediate emergency mission to find any food within reach. We'd eat anything. Every time, without exception.\n\nThis is a small memory but it's so specific and so us that it had to be here.",
          photo: "https://drive.google.com/thumbnail?id=1sc8iNSBLu_V2ICBsBPNRbuV4M-UdmOeT&sz=w1200"
        },
        {
          id: "cross-country",
          icon: "🏃",
          title: "CROSS COUNTRY",
          subtitle: "I Was Faster. This Is Documented.",
          story: "We ran cross country for a while in middle school.\n\nI was faster than you. This is an objective, documented fact. You weren't bad — don't get me wrong — but on the course, I had the edge.\n\nI'll give you windsurfing. I'll give you a lot of things. But cross country? That one's mine. Happy birthday.",
          photo: "https://drive.google.com/thumbnail?id=1xK8I_4rvUWm3jUsVaEMtSkiJBNU-FLR8&sz=w1200"
        },
        {
          id: "sophia-chung",
          icon: "💕",
          title: "SOPHIA CHUNG",
          subtitle: "Max's First Girlfriend. Logan's: Nobody.",
          story: "Max's first girlfriend: Sophia Chung. Middle school.\n\nWhile I was out here with a completely empty romantic resume, you were already building a dating history. To your credit, the trajectory has been incredible — Sophia in middle school, Rylie Rosenfeld in high school, and Katie Gelfman in college, who is genuinely great and probably the best thing that ever happened to you.\n\nBut it all started here. Sophia Chung. Middle school legend.",
          photo: "https://drive.google.com/thumbnail?id=1UGpkQLHka7c83kHCUdT2Gk5W-jq9pBm-&sz=w1200"
        },
        {
          id: "the-crew",
          icon: "👫",
          title: "THE CREW",
          subtitle: "Ride or Die Since Day One",
          story: "Middle school is really where the friend group started to lock in.\n\nWe had our people, we had our spots, and even when school itself was rough, the people we had around us made it worth showing up. Those friendships that formed in middle school — a lot of them carried all the way through high school and into college.\n\nYou find your people early in life and you hold onto them. We did that.",
          photo: "https://drive.google.com/thumbnail?id=1g8pNds8ia_Iqtu1SD3q4RaPota5CzNjZ&sz=w1200"
        }
      ]
    },

    // ════════════════════════════════════════
    //  LEVEL 3 — HIGH SCHOOL CHRONICLES
    //  9th – 12th Grade  |  2017 – 2021
    // ════════════════════════════════════════
    {
      id: "era3",
      number: 3,
      title: "HIGH SCHOOL CHRONICLES",
      subtitle: "9th — 12th Grade",
      yearRange: "2017 — 2021",
      themeColor: "#ff8c00",
      secondaryColor: "#ff4500",
      bgClass: "bg-era3",
      roomIcons: ["🎓", "💼", "⚾", "🎾", "⛷️", "🐺"],
      memories: [
        {
          id: "groves",
          icon: "🎓",
          title: "GROVES HIGH SCHOOL",
          subtitle: "Double Advanced Math & Mr. Kane",
          story: "Groves High School. We did double advanced math together — both of us actually committed to the hard classes and saw it through.\n\nMr. Kane was legendary. You loved it more than I did if we're being honest, but he was one of those teachers you actually respected. Mr. Stuckey for physics, Coach Flaherty — Groves had some genuinely great people in it.\n\nYou carried high school academically. It shows. It still shows.",
          photo: "https://drive.google.com/thumbnail?id=1aH7ryMZqt3_1TkzV5d9XgPRDyk_Fr-Fj&sz=w1200"
        },
        {
          id: "grinder-era",
          icon: "💼",
          title: "THE GRINDER ERA",
          subtitle: "Cider Mill, BHAC & the Hustle",
          story: "We had a lot of jobs in high school and we were absolute grinders.\n\nThree years at the Cider Mill. BHAC — Beverly Hills Athletic Club — $11 an hour, felt like real money at the time. You also worked at 2941 Mediterranean for a while on top of everything else. We also babysat briefly. We don't like kids. That ended fast.\n\nHere's what gets me: we used to celebrate $11 an hour. Now we don't think twice about $100. You look at where you started and where you're going — it's honestly insane how far you've come.",
          photo: "https://drive.google.com/thumbnail?id=10KE9XnmEAN8rzuy5nNDM99XS27NYKzdq&sz=w1200"
        },
        {
          id: "franklin-baseball",
          icon: "⚾",
          title: "FRANKLIN BASEBALL",
          subtitle: "We Both Hated It. There, I Said It.",
          story: "Franklin baseball. We played it for years. We both hated it.\n\nI'm saying this on the record, documented, on your birthday website: Franklin baseball was not for us. Some things you look back on with warmth and nostalgia. This is not one of those things.\n\nRespect to the game. It just wasn't ours. We finally admitted it.",
          photo: "https://drive.google.com/thumbnail?id=1i6ml5r8q58MUU1nRyphjqC4YVeE-lw7S&sz=w1200"
        },
        {
          id: "tennis",
          icon: "🎾",
          title: "JV BENCHWARMER",
          subtitle: "Tennis, Coach Annie & Flappy Golf",
          story: "You were JV benchwarmer for tennis. I say this with complete and total love.\n\nWe did take private lessons with Coach Annie — not entirely for the tennis improvement, if I'm being fully transparent. We were in high school. We showed up to every single lesson. Dedication.\n\nAlso: 9th and 10th grade, before we could go upstairs for lunch, we would play Flappy Golf and whatever else on our phones. That specific memory is so locked in my brain. Just sitting there playing dumb games killing time before lunch. Peak high school.",
          photo: "https://drive.google.com/thumbnail?id=1ObEP3aI4wsXuB8cTOqpbt-j3peJEe5yy&sz=w1200"
        },
        {
          id: "ski-lake",
          icon: "⛷️",
          title: "SKI TRIPS & LAKE DAYS",
          subtitle: "Michigan Summers & Winters Done Right",
          story: "The ski trips and the lake days were the best parts of growing up in Michigan.\n\nWakesurfing on the boat all summer — being out on the water all day, not caring about anything, just vibing. Those lake days with everyone around felt endless.\n\nAnd in winter, the mountain — carving runs, being cold and not caring, the whole experience. These are the kinds of days you think about when you think about what growing up here actually felt like.",
          photo: "https://drive.google.com/thumbnail?id=1rELnlCwRNLDLGTfaBTCJndjjzHpWufHy&sz=w1200"
        },
        {
          id: "wolverines-lions",
          icon: "🐺",
          title: "GO BLUE & DET LIONS",
          subtitle: "Michigan Wolverines & a Lifetime of Lions Pain",
          story: "The Michigan fandom was always there, but high school is when it really locked in.\n\nWatching games together, following recruiting, going all in on the Wolverines. The college football Saturdays started feeling like real events.\n\nAnd the Lions — the suffering is generational at this point. But we watch together, we suffer together, and when they finally do something good, we're screaming together. Being a Lions and Wolverines fan in this family is just part of who we are. No choice. No regrets.",
          photo: "https://drive.google.com/thumbnail?id=17rrYkf3igtXZMY5G4NmPYLokS8WTUZ3U&sz=w1200"
        }
      ]
    },

    // ════════════════════════════════════════
    //  LEVEL 4 — COLLEGE ERA
    //  University of Michigan  |  2021 – 2025
    // ════════════════════════════════════════
    {
      id: "era4",
      number: 4,
      title: "COLLEGE ERA",
      subtitle: "University of Michigan",
      yearRange: "2021 — 2025",
      themeColor: "#FFCB05",
      secondaryColor: "#4a90d9",
      bgClass: "bg-era4",
      roomIcons: ["〽️", "🏠", "🍺", "💑", "🏟️", "🎓"],
      memories: [
        {
          id: "south-quad",
          icon: "〽️",
          title: "ANN ARBOR",
          subtitle: "South Quad Freshman Year",
          story: "University of Michigan. We both got in. We both went.\n\nSouth Quad freshman year — the dorms, the dining hall, figuring out what college actually is day by day. There's something rare and special about going to your dream school with your twin brother. Ann Arbor felt like home almost immediately.\n\nEverything started here.",
          photo: "https://drive.google.com/thumbnail?id=1Vu4LnPMrW63eli4HPRd5qMwHlUHcvvnL&sz=w1200"
        },
        {
          id: "du-frat",
          icon: "🏠",
          title: "DU FRAT HOUSE",
          subtitle: "Sophomore Year — The Chaos Era",
          story: "Sophomore year — the DU frat house.\n\nLiving in the frat, the social scene, the absolute chaos of it all. It was exactly what sophomore year of college is supposed to be. We were in the thick of it together.\n\nI don't need to elaborate. You were there. We both know.",
          photo: "https://drive.google.com/thumbnail?id=1o4hQe7DzZMG4-nK6wEHzc1Ub6rNeqoHb&sz=w1200"
        },
        {
          id: "packard",
          icon: "🥂",
          title: "821 PACKARD",
          subtitle: "Our Beloved. Junior & Senior Year.",
          story: "821 Packard. Junior and senior year.\n\nThat house became home in a way that nothing else in college did. The address we'll both remember forever. The place where the best nights happened, where the best conversations happened, where we really figured out who we were turning into.\n\nEverybody has a college address they'll carry with them forever. Ours is 821 Packard.",
          photo: "https://drive.google.com/thumbnail?id=1KFJCWpN2TU_aNhdm6P9F-wKdkvE3P7Dn&sz=w1200"
        },
        {
          id: "katie",
          icon: "💑",
          title: "KATIE GELFMAN",
          subtitle: "The Third. Probably the Last. Definitely the Best.",
          story: "Katie Gelfman. Your third girlfriend — and probably, let's be honest, your last.\n\nSophia → Rylie → Katie. That's a character arc. That's growth. Katie is genuinely great, and she's been great for you, and I say that as someone who has had zero girlfriends the entire time.\n\nNot bitter. Completely fine. Very happy for you. This is your birthday after all.",
          photo: "https://drive.google.com/thumbnail?id=1twOGcEY0k6eyAhgIukX23pIEEkOLlAMs&sz=w1200"
        },
        {
          id: "big-house",
          icon: "🏟️",
          title: "THE BIG HOUSE",
          subtitle: "100,000 Maize & Blue",
          story: "Michigan Stadium as a student. 100,000 people in Maize and Blue.\n\nGame days in Ann Arbor are unlike anything else — the tailgates, the walk in, that sound when the team comes out. There's a reason it's one of the most iconic venues in sports.\n\nWe got to experience that as students. We were there for the run. We watched it together and we knew, even in the moment, that we were watching something we'd talk about forever.",
          photo: "https://drive.google.com/thumbnail?id=1ZpkfTwExNOrkOxVBBBtphoMzb720sm7C&sz=w1200"
        },
        {
          id: "graduation",
          icon: "🎓",
          title: "WE MADE IT",
          subtitle: "Cap, Gown & What Comes Next",
          story: "And now we're here. Four years done. Graduating.\n\nYou're staying in Michigan. I'm going to New York. For the first time in 22 years, we're not going to be in the same city.\n\nThat's a strange thing to sit with. But we've always been more than proximity — it's something bigger than geography. Whatever comes next, wherever we both end up, it's still me and you.\n\nAlways has been. Click the next button.",
          photo: "https://drive.google.com/thumbnail?id=1bu7n40NooRtGCN16qZxboCOR3HoNT1Gh&sz=w1200"
        }
      ]
    }
  ],

  // ════════════════════════════════════════
  //  FINALE — The Message
  // ════════════════════════════════════════
  finale: {
    message: `You are the best brother I could ever ask for. I would be genuinely lost without you — and I mean that completely.

It's hard to put into words how much I love you, but it's me and you forever. People come and go in life, but we'll always have each other. No matter what. No matter where.

I hope this was a fun birthday gift. Maybe I'll keep it going — update it every year. A living biography of the Edelheit brothers. We've already lived so much and done so much together, and we've had an amazing life. But I genuinely believe the best is still ahead of both of us.

You're going to be so successful. No one works harder than you. You're smart, you're driven, and I don't think the world is really ready for the change you're going to have in it.

Happy 22nd birthday, Max. I love you.`,
    signature: "— Logan 🎮"
  }
};


// ══════════════════════════════════════════════════════════════
//   STATE
// ══════════════════════════════════════════════════════════════
let currentLevelIndex  = 0;
let currentModalLevel  = 0;
let currentModalMemIdx = 0;
const unlocked = new Set();


// ══════════════════════════════════════════════════════════════
//   SCREEN MANAGEMENT
// ══════════════════════════════════════════════════════════════
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function startGame() {
  showScreen('screen-level');
  renderLevel(0);
}

function goToTitle() {
  showScreen('screen-title');
}

function showLevel(idx) {
  showScreen('screen-level');
  renderLevel(idx);
}

function showFinale() {
  showScreen('screen-finale');
  renderFinale();
}


// ══════════════════════════════════════════════════════════════
//   LEVEL RENDERING
// ══════════════════════════════════════════════════════════════
function renderLevel(idx) {
  currentLevelIndex = idx;
  const lv = GAME_DATA.levels[idx];

  setEraColors(lv.themeColor, lv.secondaryColor);

  document.getElementById('lvNum').textContent   = `LEVEL ${lv.number} / ${GAME_DATA.levels.length}`;
  document.getElementById('lvName').textContent  = lv.title;
  document.getElementById('lvYears').textContent = lv.yearRange;

  const roomBg = document.getElementById('roomBg');
  roomBg.className = `room-bg ${lv.bgClass}`;

  const roomFloats = document.getElementById('roomFloats');
  roomFloats.innerHTML = lv.roomIcons.map(ic => `<div class="room-icon">${ic}</div>`).join('');

  document.getElementById('roomBadge').textContent = lv.title + '  ·  ' + lv.yearRange;

  buildCabinets(lv);
  buildDots(idx);
  refreshCounter(lv);

  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');

  btnPrev.style.visibility = idx === 0 ? 'hidden' : 'visible';

  if (idx === GAME_DATA.levels.length - 1) {
    btnNext.textContent = 'FINALE ★';
    btnNext.className = 'btn-ghost sm era-next finale-glow';
    btnNext.onclick = showFinale;
  } else {
    btnNext.textContent = 'NEXT ERA ▶';
    btnNext.className = 'btn-ghost sm era-next';
    btnNext.onclick = () => changeLevel(1);
  }
}

function buildCabinets(lv) {
  const row = document.getElementById('cabinetsRow');
  row.innerHTML = '';

  lv.memories.forEach((mem, i) => {
    const opened = unlocked.has(mem.id);
    const el = document.createElement('div');
    el.className = `cabinet ${opened ? 'unlocked' : ''}`;
    el.setAttribute('aria-label', mem.title);
    el.onclick = () => openModal(currentLevelIndex, i);
    el.innerHTML = `
      <div class="cabinet-screen"><span>${mem.icon}</span></div>
      <div class="cabinet-plate">${mem.title}</div>
    `;
    row.appendChild(el);
  });
}

function buildDots(activeIdx) {
  const wrap = document.getElementById('eraDots');
  wrap.innerHTML = '';
  GAME_DATA.levels.forEach((lv, i) => {
    const dot = document.createElement('div');
    dot.className = `era-dot ${i === activeIdx ? 'active' : ''}`;
    dot.title = lv.title;
    dot.onclick = () => renderLevel(i);
    wrap.appendChild(dot);
  });
}

function refreshCounter(lv) {
  const count = lv.memories.filter(m => unlocked.has(m.id)).length;
  document.getElementById('memCount').textContent = count;
  document.getElementById('memTotal').textContent = lv.memories.length;
}

function changeLevel(dir) {
  const next = currentLevelIndex + dir;
  if (next < 0) return;
  if (next >= GAME_DATA.levels.length) { showFinale(); return; }
  renderLevel(next);
}


// ══════════════════════════════════════════════════════════════
//   MODAL
// ══════════════════════════════════════════════════════════════
function openModal(lvIdx, memIdx) {
  currentModalLevel  = lvIdx;
  currentModalMemIdx = memIdx;

  const lv  = GAME_DATA.levels[lvIdx];
  const mem = lv.memories[memIdx];

  unlocked.add(mem.id);
  setEraColors(lv.themeColor, lv.secondaryColor);

  document.getElementById('mIcon').textContent  = mem.icon;
  document.getElementById('mTitle').textContent = mem.title;
  document.getElementById('mSub').textContent   = mem.subtitle;
  document.getElementById('mStory').textContent = mem.story;
  document.getElementById('mCounter').textContent = `${memIdx + 1} / ${lv.memories.length}`;

  const img = document.getElementById('mPhoto');
  const ph  = document.getElementById('mPlaceholder');

  if (mem.photo) {
    img.src = mem.photo;
    img.classList.remove('hidden');
    ph.style.display = 'none';
  } else {
    img.classList.add('hidden');
    img.src = '';
    ph.style.display = 'flex';
  }

  document.getElementById('modal').classList.remove('hidden');
  buildCabinets(lv);
  refreshCounter(lv);
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

function overlayClose(e) {
  if (e.target === document.getElementById('modal')) closeModal();
}

function navMemory(dir) {
  const lv   = GAME_DATA.levels[currentModalLevel];
  const next = currentModalMemIdx + dir;
  if (next < 0 || next >= lv.memories.length) return;
  openModal(currentModalLevel, next);
}


// ══════════════════════════════════════════════════════════════
//   FINALE
// ══════════════════════════════════════════════════════════════
function renderFinale() {
  document.getElementById('finaleMsg').textContent = GAME_DATA.finale.message;
  document.getElementById('finaleSig').textContent = GAME_DATA.finale.signature;
}


// ══════════════════════════════════════════════════════════════
//   HELPERS
// ══════════════════════════════════════════════════════════════
function setEraColors(primary, secondary) {
  const r = document.documentElement;
  r.style.setProperty('--era',  primary);
  r.style.setProperty('--era2', secondary);
}


// ══════════════════════════════════════════════════════════════
//   TITLE SCREEN STAR FIELD
// ══════════════════════════════════════════════════════════════
function buildStarField() {
  const container = document.getElementById('titleStars');
  for (let i = 0; i < 90; i++) {
    const size = Math.random() * 2.5 + 0.5;
    const s = document.createElement('div');
    s.style.cssText = `
      position:absolute;
      width:${size}px; height:${size}px;
      border-radius:50%;
      background:${Math.random() > .8 ? '#00ffff' : Math.random() > .5 ? '#ff00ff' : '#fff'};
      top:${Math.random() * 100}%;
      left:${Math.random() * 100}%;
      opacity:${(Math.random() * .6 + .2).toFixed(2)};
      animation:blink ${(Math.random() * 3 + 1).toFixed(1)}s step-end infinite;
      animation-delay:${(Math.random() * 4).toFixed(1)}s;
    `;
    container.appendChild(s);
  }
}


// ══════════════════════════════════════════════════════════════
//   KEYBOARD NAVIGATION
// ══════════════════════════════════════════════════════════════
document.addEventListener('keydown', e => {
  const modalOpen = !document.getElementById('modal').classList.contains('hidden');

  if (modalOpen) {
    if (e.key === 'ArrowLeft')  navMemory(-1);
    if (e.key === 'ArrowRight') navMemory(1);
    if (e.key === 'Escape')     closeModal();
    return;
  }

  if (document.getElementById('screen-level').classList.contains('active')) {
    if (e.key === 'ArrowLeft')  changeLevel(-1);
    if (e.key === 'ArrowRight') changeLevel(1);
  }

  if (document.getElementById('screen-title').classList.contains('active')) {
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); startGame(); }
  }
});


// ══════════════════════════════════════════════════════════════
//   INIT
// ══════════════════════════════════════════════════════════════
buildStarField();
