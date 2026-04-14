// ══════════════════════════════════════════════════════════════
//   HAPPY BIRTHDAY MAX! — Retro Arcade Experience
//   Built with love by Logan Edelheit
// ══════════════════════════════════════════════════════════════

const GAME_DATA = {

  // ════════════════════════════════════════
  //  LEVEL 1 — THE EARLY YEARS
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
      roomIcons: ["🏠", "🎃", "🎮", "📚", "🏈", "✡️"],
      photoLog: [
        "https://drive.google.com/thumbnail?id=1MAJmOhiNaqorrIu77Y-9OeOwVpaAJOep&sz=w800",
        "https://drive.google.com/thumbnail?id=1xQZO_vi8YXM3_Ap-4qpq-d_L2qWvFA0i&sz=w800",
        "https://drive.google.com/thumbnail?id=1g8pNds8ia_Iqtu1SD3q4RaPota5CzNjZ&sz=w800",
        "https://drive.google.com/thumbnail?id=12kq4I-8bgCfOM790S1GUaZ2XzvV_LyBF&sz=w800",
        "https://drive.google.com/thumbnail?id=1yhsCdQ1qI8Ox60fThpnfVNdoM81Ghrig&sz=w800",
        "https://drive.google.com/thumbnail?id=14IusbyuckUNylcvyrdgyknI69lwUueKe&sz=w800",
        "https://drive.google.com/thumbnail?id=1qLNBR0TSMCY9SU3JLgCcqy3PnQf5_-iY&sz=w800",
        "https://drive.google.com/thumbnail?id=1lq2zRB8CXNbA9oElmvY3xCnHWZB1UeLD&sz=w800"
      ],
      memories: [
        {
          id: "home-base",
          icon: "🏠",
          title: "HOME BASE",
          subtitle: "Franklin, Michigan — The House That Built Us",
          story: "Born April 23rd, 2004. Franklin, Michigan. The same house our whole lives.\n\nMost people grow up moving around, losing the places that made them who they are. Not us. That house in Franklin was everything — the backyard, the neighborhood, the kitchen table where everything happened. It's where the Edelheit brothers story actually starts.\n\nNo matter where either of us ends up, that's home base forever.",
          photos: []
        },
        {
          id: "double-trouble",
          icon: "👥",
          title: "DOUBLE TROUBLE",
          subtitle: "Born Together. Ride Together.",
          story: "We started at Adat Shalom together. Did everything together from literally day one.\n\nYou never really know what it means to have a twin until you imagine life without one. There was never a time I can remember being alone. Same school, same house, same everything. Built-in best friend from the jump.\n\nMost people have to find their person. We just woke up next to ours.",
          photos: []
        },
        {
          id: "west-maple",
          icon: "📚",
          title: "WEST MAPLE DAYS",
          subtitle: "Elementary School — Where It All Started",
          story: "Mom would give us money to go to the bookstore and we would absolutely lose it over the silly putty, the laser tag sets, the invisible ink pens. Complete suckers for that front display every single time.\n\nThe library? Bloons Tower Defense like it was our job. Remember the book challenge — logging books and getting those little foot tokens for your keychain? We took that so seriously.\n\nLunch at the long tables together, Mom packed our lunches, and the GRITZ snacks were genuinely elite. Elementary school just hit different.",
          photos: []
        },
        {
          id: "guitar-hero-legos",
          icon: "🎸",
          title: "GUITAR HERO & LEGOS",
          subtitle: "Before Phones. Before Everything.",
          story: "Before we had anything else, we had Guitar Hero and Legos.\n\nGuitar Hero was a religion in our house. We played for hours. I'm not going to say who was better because I don't want to embarrass you on your birthday — but we both know.\n\nAnd Legos — entire weekends just building. No phones, no agenda. Just the two of us with a pile of pieces and nowhere to be. Those might actually be some of my favorite memories of us.",
          photos: []
        },
        {
          id: "flag-football",
          icon: "🏈",
          title: "FLAG FOOTBALL",
          subtitle: "Future NFL Stars (We Thought)",
          story: "Flag football was serious business when we were kids. We went out every season and genuinely competed.\n\nBetween this and Franklin baseball, we really thought we were building a legacy in Michigan youth sports. Flag football was the one that was actually fun though — we were out there trying, competing, and actually having a good time.\n\n(Franklin baseball is a different story. We'll get to that.)",
          photos: []
        },
        {
          id: "franklin-baseball",
          icon: "⚾",
          title: "FRANKLIN BASEBALL",
          subtitle: "We Both Hated It. There, I Said It.",
          story: "Franklin baseball. We played it for years. We both hated it.\n\nI'm saying this on the record, documented, on your birthday website: Franklin baseball was not for us. Some things you look back on with warmth and nostalgia. This is not one of those things.\n\nRespect to the game. It just wasn't ours. We finally admitted it.",
          photos: []
        },
        {
          id: "halloween",
          icon: "🎃",
          title: "HALLOWEEN",
          subtitle: "The Annual Candy Mission",
          story: "Halloween in Franklin was a tradition. Every year, same neighborhood, same chaos. Mom would spend way too long on the costumes and we would immediately ruin them by running around all night.\n\nThe candy haul was always the real competition. We'd come home, dump everything out, and start the trading process. You always ended up with more Reese's somehow. To this day I don't know how you did it.",
          photos: ["https://drive.google.com/thumbnail?id=1fAi1FlP_bpuXXUUxdV3Dk1BRxV36OiTH&sz=w1200"]
        },
        {
          id: "franklin-park-bools",
          icon: "🏞️",
          title: "FRANKLIN PARK BOOLS",
          subtitle: "Our Spot. Always.",
          story: "Franklin Park was our spot. Whether it was summer evenings, weekends, or just killing time — that park was where half of childhood happened.\n\nRunning around, no agenda, being kids with nowhere to be. Those unstructured hours at that park are some of the most purely happy memories I have.\n\nSimple times. We didn't know how good we had it.",
          photos: ["https://drive.google.com/thumbnail?id=1_a52uoDxCIJQq9KLf8icrbJuz2L4Xfc4&sz=w1200"]
        },
        {
          id: "nintendo-ds",
          icon: "🎮",
          title: "NINTENDO DS ERA",
          subtitle: "Mario Kart. Pokémon. Pure Childhood.",
          story: "There was a period of time where the Nintendo DS was the center of our universe. Mario Kart, Pokémon, whatever else we could get our hands on.\n\nPlaying against each other, playing side by side, being completely absorbed. No phones, no streaming, just the DS and the little clicking sounds it made.\n\nThis era was elite and anyone who disagrees is wrong.",
          photos: ["https://drive.google.com/thumbnail?id=1D3Q_YrgdQbwWuquFv_JaIaS4PjPI6D_C&sz=w1200"]
        },
        {
          id: "adat-shalom",
          icon: "✡️",
          title: "ADAT SHALOM",
          subtitle: "Hebrew School, Community & Everything That Came With It",
          story: "Adat Shalom. Hebrew school, services, bar and bat mitzvahs for years. It was a huge part of growing up for both of us.\n\nYou can complain about going as a kid all you want, but look back now — it gave us community, identity, and some of the most formative friendships we both have.\n\nAlso it gave us the bar mitzvah circuit, which was genuinely one of the best periods of middle school.",
          photos: ["https://drive.google.com/thumbnail?id=1pLU5q9rj6p0tt-t0PRwvNMMcRpf9Z-Ne&sz=w1200"]
        },
        {
          id: "kitchen-memories",
          icon: "🍽️",
          title: "KITCHEN MEMORIES",
          subtitle: "The Center of the House",
          story: "The kitchen was the center of that house. Mom cooking, Dad walking in to taste things, the whole family ending up in the kitchen somehow no matter what.\n\nSome of the best conversations we ever had were at that kitchen table. Some of the best meals, some of the funniest moments.\n\nThe kitchen was where the Edelheit family actually happened.",
          photos: ["https://drive.google.com/thumbnail?id=1O_MLu7WUWPy6U38VDMHnzpUaT3Dcwuc-&sz=w1200"]
        }
      ]
    },

    // ════════════════════════════════════════
    //  LEVEL 2 — MIDDLE SCHOOL SAGA
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
      roomIcons: ["🏫", "🏊", "🏃", "✡️", "⛺", "😂"],
      photoLog: [
        "https://drive.google.com/thumbnail?id=1sc8iNSBLu_V2ICBsBPNRbuV4M-UdmOeT&sz=w800",
        "https://drive.google.com/thumbnail?id=1xK8I_4rvUWm3jUsVaEMtSkiJBNU-FLR8&sz=w800",
        "https://drive.google.com/thumbnail?id=1UGpkQLHka7c83kHCUdT2Gk5W-jq9pBm-&sz=w800"
      ],
      memories: [
        {
          id: "berkshire",
          icon: "🏫",
          title: "BERKSHIRE",
          subtitle: "Middle School Survival Arc",
          story: "Berkshire was... an experience. Let's say it was character-building.\n\nMiddle school is already rough and Berkshire made sure you earned every bit of it. But we got through it the same way we got through everything — together.\n\nAnd for the record: you started dating Sophia Chung in middle school. Your first girlfriend. I had nobody. Completely normal, totally fine, not at all a pattern that continued.",
          photos: []
        },
        {
          id: "swimming",
          icon: "🏊",
          title: "ALWAYS STARVING",
          subtitle: "Swimming & the Hunger That Followed",
          story: "We swam at Berkshire and every single time without fail, we were absolutely starving after practice.\n\nI don't know what swimming does to you biologically but it was like a switch — practice ends, immediate emergency mission to find any food within reach. We'd eat anything. Every time, without exception.\n\nThis is a small memory but it's so specific and so us that it had to be here.",
          photos: []
        },
        {
          id: "cross-country",
          icon: "🏃",
          title: "CROSS COUNTRY",
          subtitle: "I Was Faster. This Is Documented.",
          story: "We ran cross country for a while in middle school.\n\nI was faster than you. This is an objective, documented fact. You weren't bad — don't get me wrong — but on the course, I had the edge.\n\nI'll give you windsurfing. I'll give you a lot of things. But cross country? That one's mine. Happy birthday.",
          photos: []
        },
        {
          id: "bar-mitzvah",
          icon: "✡️",
          title: "BAR MITZVAH",
          subtitle: "April 23rd, 2017 — We Became Men",
          story: "April 23rd, 2017. We became Bar Mitzvahs on our shared birthday.\n\nThe party, the people, the whole thing was one of the best nights of our lives at that point. All of our people together, our family there, a full actual celebration of something that mattered.\n\nAlso the fact that we shared it made it distinctly us. Most people get their own day. We split it and somehow made it better.",
          photos: ["https://drive.google.com/thumbnail?id=1FkDzmFS4vMHxNtBBMd6YZZ8zYNL3E8bJ&sz=w1200"]
        },
        {
          id: "camp-ms",
          icon: "⛺",
          title: "CAMP TAMAKWA",
          subtitle: "Eight Years. The Place That Made Us.",
          story: "Camp Tamakwa. Eight years. But middle school was when camp really became what it was supposed to be.\n\nThe long trips, the campfires, the summers that felt like they lasted forever. You were obsessed with windsurfing and I will never let you forget getting 'waters' every single campfire.\n\nBest summers of our lives. Simple as that.",
          photos: ["https://drive.google.com/thumbnail?id=1vCZE6eqUMusgze0Z6mT35a4UgGvWSAZk&sz=w1200"]
        }
      ]
    },

    // ════════════════════════════════════════
    //  LEVEL 3 — HIGH SCHOOL CHRONICLES
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
      roomIcons: ["🎓", "💼", "🎾", "⛷️", "🎳", "🐺"],
      photoLog: [
        "https://drive.google.com/thumbnail?id=10KE9XnmEAN8rzuy5nNDM99XS27NYKzdq&sz=w800",
        "https://drive.google.com/thumbnail?id=17rrYkf3igtXZMY5G4NmPYLokS8WTUZ3U&sz=w800",
        "https://drive.google.com/thumbnail?id=1e8DVYEv_m-Rfvjwij4D3OYjoM99IXaSj&sz=w800",
        "https://drive.google.com/thumbnail?id=19iCBXBRmRdvRlVC2fGHB5LOtLQvPOaj7&sz=w800",
        "https://drive.google.com/thumbnail?id=1SZo3I4NSB6M7gznPaLexeZRNSUqIKUL7&sz=w800",
        "https://drive.google.com/thumbnail?id=1M_mzk5HVGGTI4P9Uosu6IcRpModfP25D&sz=w800",
        "https://drive.google.com/thumbnail?id=1yEJ4k7ZA-4kMs9cz0ZIfu6_z-EIZ7s51&sz=w800",
        "https://drive.google.com/thumbnail?id=1mujaHhc6Vd7mChZE7Omqc4ujm_mcqzph&sz=w800",
        "https://drive.google.com/thumbnail?id=1oEGKdhBqrEhUNXRCc04nkVdVERrBm8vg&sz=w800",
        "https://drive.google.com/thumbnail?id=1fo7MlN6IKn9v3FnLr3qrNXqAaAFpyEW-&sz=w800"
      ],
      memories: [
        {
          id: "groves",
          icon: "🎓",
          title: "GROVES HIGH SCHOOL",
          subtitle: "Double Advanced Math & Mr. Kane",
          story: "Groves High School. We did double advanced math together — both of us actually committed to the hard classes and saw it through.\n\nMr. Kane was legendary. You loved it more than I did if we're being honest, but he was one of those teachers you actually respected. Mr. Stuckey for physics, Coach Flaherty — Groves had some genuinely great people in it.\n\nYou carried high school academically. It shows. It still shows.",
          photos: ["https://drive.google.com/thumbnail?id=1rELnlCwRNLDLGTfaBTCJndjjzHpWufHy&sz=w1200"]
        },
        {
          id: "grinder-era",
          icon: "💼",
          title: "THE GRINDER ERA",
          subtitle: "Cider Mill, BHAC & the Hustle",
          story: "We had a lot of jobs in high school and we were absolute grinders.\n\nThree years at the Cider Mill. BHAC — Beverly Hills Athletic Club — $11 an hour, felt like real money at the time. You also worked at 2941 Mediterranean for a while on top of everything else. We also babysat briefly. We don't like kids. That ended fast.\n\nHere's what gets me: we used to celebrate $11 an hour. Now we don't think twice about $100. You look at where you started and where you're going — it's honestly insane how far you've come.",
          photos: []
        },
        {
          id: "prom",
          icon: "🤵",
          title: "PROM",
          subtitle: "The Night That Delivered",
          story: "Prom. The tuxes, the photos, the whole production.\n\nHigh school prom is one of those nights that somehow lives up to the hype — you're with your people, everyone looks different than they usually do, and you actually feel like the moment is real while it's happening.\n\nWe both went. We both had fun. One of us had a better date than the other but I'll let the photo speak for itself.",
          photos: ["https://drive.google.com/thumbnail?id=1i6ml5r8q58MUU1nRyphjqC4YVeE-lw7S&sz=w1200"]
        },
        {
          id: "tennis",
          icon: "🎾",
          title: "JV BENCHWARMER",
          subtitle: "Tennis, Coach Annie & Flappy Golf",
          story: "You were JV benchwarmer for tennis. I say this with complete and total love.\n\nWe did take private lessons with Coach Annie — not entirely for the tennis improvement, if I'm being fully transparent. We were in high school. We showed up to every single lesson. Dedication.\n\nAlso: 9th and 10th grade, before we could go upstairs for lunch, we would play Flappy Golf and whatever else on our phones. That specific memory is so locked in my brain. Just sitting there playing dumb games killing time before lunch. Peak high school.",
          photos: []
        },
        {
          id: "ski-trips",
          icon: "⛷️",
          title: "SKI TRIPS",
          subtitle: "Michigan Winters Done Right",
          story: "The ski trips were the best part of Michigan winters.\n\nCarving runs, being cold and not caring, the whole experience. There's something about a good ski day where everything else disappears and you're just out there.\n\nThese are the kinds of days you think about when you think about what growing up here actually felt like.",
          photos: [
            "https://drive.google.com/thumbnail?id=1XF2VZyVC4FVLmxSHoU29_WSDMExbypAp&sz=w1200",
            "https://drive.google.com/thumbnail?id=1XW6SW8JeHFQJeyg234kQ7VJblDReqEQV&sz=w1200"
          ]
        },
        {
          id: "math-award",
          icon: "🏆",
          title: "MATH AWARD",
          subtitle: "We R Goats",
          story: "We won the math award. Both of us. Goats.\n\nMr. Kane's class, double advanced, and we genuinely earned it. Some people coast through high school — we actually put in the work and it showed.\n\nThis photo is proof that we are, factually, math gods. I don't make the rules.",
          photos: ["https://drive.google.com/thumbnail?id=1MrgFuJtnkVPQqFv873nzusHYWlM0-9aw&sz=w1200"]
        },
        {
          id: "bowling",
          icon: "🎳",
          title: "BOWLING",
          subtitle: "Competitive. Always.",
          story: "Bowling was one of those random hobbies that became a whole thing for a while.\n\nWe'd go out, absolutely delusional about how good we were, and then actually bowl a decent game and convince ourselves we had a real future in it.\n\nCompetitive with each other every time, obviously. That was non-negotiable.",
          photos: [],
          video: "https://drive.google.com/file/d/15-OpsjgohQ5eqyweTGPQqrYOMPv7X51M/preview"
        },
        {
          id: "random-aura",
          icon: "✨",
          title: "RANDOM AURA",
          subtitle: "The Vibe Was Immaculate",
          story: "Some photos just capture the vibe. No context needed. Pure aura.\n\nThis is one of those photos. You can feel the energy. The drip was real. The moment was real.\n\nDocumented for history.",
          photos: ["https://drive.google.com/thumbnail?id=1sS90xho0Z7alHCfihoTmtxHVSwdu2pbT&sz=w1200"]
        },
        {
          id: "puishes",
          icon: "👑",
          title: "PUISHES",
          subtitle: "You Know What It Is",
          story: "Puishes. You know what it is. Don't need to explain it.\n\nSome things are just for us and for the people who were there. This is one of them.\n\nThe fact that it's on your birthday website is perfect.",
          photos: ["https://drive.google.com/thumbnail?id=1AZwapMAQ1bumDbLn_Hb3FjqYgOmQkfqX&sz=w1200"]
        },
        {
          id: "random-mog",
          icon: "🦁",
          title: "RANDOM MOG PHOTO",
          subtitle: "Not a Simp. A Mog.",
          story: "Mog. The highest honor.\n\nNot a simp. Not a dog. A mog — the man of great quality who carries himself accordingly. You are the definition of this.\n\nDocumented proof, right here.",
          photos: ["https://drive.google.com/thumbnail?id=1aH7ryMZqt3_1TkzV5d9XgPRDyk_Fr-Fj&sz=w1200"]
        },
        {
          id: "we-love-women",
          icon: "❤️",
          title: "WE LOVEEEE WOMEN",
          subtitle: "On Record. Official. Always.",
          story: "We love women. This is documented, this is official, and it is on your birthday website.\n\nHigh school, college, all of it — one consistent truth throughout: We. Love. Women.\n\nNo further commentary needed. The photo says everything.",
          photos: ["https://drive.google.com/thumbnail?id=1kiNcxV_JfTLxCHjaL_-gPHz1fgvZNmJc&sz=w1200"]
        },
        {
          id: "more-camp",
          icon: "⛺",
          title: "MORE CAMP",
          subtitle: "Because Once Wasn't Enough",
          story: "More camp. Because one section wasn't enough.\n\nTamakwa gave us so much that it deserves multiple entries. The people, the place, the summers that somehow keep getting better in memory the further you get from them.\n\nEight years was not enough. I'd go back tomorrow.",
          photos: [
            "https://drive.google.com/thumbnail?id=1wN7wr-b2mnW6qxzyX-O92cJceIiPYwK6&sz=w1200",
            "https://drive.google.com/thumbnail?id=1JkXAEr2J_l5pjDqCx8FIyBaZNycc5WvI&sz=w1200",
            "https://drive.google.com/thumbnail?id=1bYr9u1Vj9ca6qrLKLFCo9DyaQwMxmglP&sz=w1200"
          ]
        },
        {
          id: "graduation-hs",
          icon: "🎓",
          title: "GRADUATION",
          subtitle: "Groves High School — We Made It",
          story: "Groves High School. Graduation.\n\nFour years done. Cap and gown. The whole Edelheit family there watching both of us walk across that stage together.\n\nOne chapter closed and a bigger one about to begin. We didn't know it at the time, but this was one of those moments you look back on and realize you were exactly where you needed to be.",
          photos: [
            "https://drive.google.com/thumbnail?id=1PWIEFFvLB0EfzGCIVONPLNOS4dv_YALT&sz=w1200",
            "https://drive.google.com/thumbnail?id=1ZB9Zm1U9gpmXGMpFk0-vIynicpbR-Nec&sz=w1200"
          ]
        },
        {
          id: "wolverines-lions",
          icon: "🐺",
          title: "GO BLUE & DET LIONS",
          subtitle: "Michigan Wolverines & a Lifetime of Lions Pain",
          story: "The Michigan fandom was always there, but high school is when it really locked in.\n\nWatching games together, following recruiting, going all in on the Wolverines. The college football Saturdays started feeling like real events.\n\nAnd the Lions — the suffering is generational at this point. But we watch together, we suffer together, and when they finally do something good, we're screaming together. Being a Lions and Wolverines fan in this family is just part of who we are. No choice. No regrets.",
          photos: []
        }
      ]
    },

    // ════════════════════════════════════════
    //  LEVEL 4 — COLLEGE ERA
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
      photoLog: [
        "https://drive.google.com/thumbnail?id=1KFJCWpN2TU_aNhdm6P9F-wKdkvE3P7Dn&sz=w800",
        "https://drive.google.com/thumbnail?id=1twOGcEY0k6eyAhgIukX23pIEEkOLlAMs&sz=w800",
        "https://drive.google.com/thumbnail?id=18EwnC4ZHV4_GS3-mmhkVuV-OQ9Nm3aYM&sz=w800",
        "https://drive.google.com/thumbnail?id=1oUArI4fH76JGv5XFx8CX1m5i2QmT_pE1&sz=w800",
        "https://drive.google.com/thumbnail?id=10vGkK6MrcaL89j0GO_IchUe-i9oRddNf&sz=w800",
        "https://drive.google.com/thumbnail?id=1j5sp1n0MzyXg04vfkObGv2LQitlK08g5&sz=w800",
        "https://drive.google.com/thumbnail?id=1HPeyv65vkou6-gXQFssn6MwacMTQd3J1&sz=w800",
        "https://drive.google.com/thumbnail?id=10OzIqV408Ld3qAhRlQpGkL5Y6SIa6i0j&sz=w800",
        "https://drive.google.com/thumbnail?id=1Ns_K9jvw1JTUiWNypkF7kPbLPtl6fEh_&sz=w800",
        "https://drive.google.com/thumbnail?id=1G4nT3MeQ0lgS09Zg-4YMFn2PljpcLVYu&sz=w800",
        "https://drive.google.com/thumbnail?id=1vHTPJMQoWSwKHs5YC5XFgRZ1JOhFEV54&sz=w800",
        "https://drive.google.com/thumbnail?id=1whzjMe7urtQQsmHFHpNxkpQJSiWBijBR&sz=w800",
        "https://drive.google.com/thumbnail?id=10nTwsaYWKpqvEA0HqdTx_6h8oPSnp2r9&sz=w800",
        "https://drive.google.com/thumbnail?id=19BzyCueIfKrubOP_r2LXiPZ2sPFvxr8j&sz=w800",
        "https://drive.google.com/thumbnail?id=1BTpb90JVYtz5vRnWZoDo1IAZfNxzxfMG&sz=w800",
        "https://drive.google.com/thumbnail?id=1eL58vTtKacJFdLrdYuvZTD0kABwJD7Oo&sz=w800",
        "https://drive.google.com/thumbnail?id=1BLKr2lqOoHSxUYzO56t2OSzilSx3-V-T&sz=w800",
        "https://drive.google.com/thumbnail?id=14tMFTW0oiqOWABCya-N_GwSv_SQUspQH&sz=w800",
        "https://drive.google.com/thumbnail?id=1Rq6vSPO15hO7j5xgtPu8WTrBjSABKM44&sz=w800",
        "https://drive.google.com/thumbnail?id=1XsnDvISK7OY6PVKcq9ABmrOE0FJpmedX&sz=w800",
        "https://drive.google.com/thumbnail?id=1bQmvyshMwFx5XU5hZje2QTnlWxUNY_bk&sz=w800",
        "https://drive.google.com/thumbnail?id=199Et-QkLmnHROXF6wexhCXaiVVLYhCjZ&sz=w800",
        "https://drive.google.com/thumbnail?id=1iNBZPYfVYgnbGTfI9syNzaDhEDvnY-gq&sz=w800",
        "https://drive.google.com/thumbnail?id=19uuBmoHxmWWeKtZY51vFxHG-uVuAeXod&sz=w800",
        "https://drive.google.com/thumbnail?id=1LMM_e_py_tIAV_SQBGScSM-zBCv91btW&sz=w800",
        "https://drive.google.com/thumbnail?id=1jFQwwrhRFgZgHAvlcn2xAfHRFd2VDq7w&sz=w800",
        "https://drive.google.com/thumbnail?id=1Z_y4Vjx9ffmPGoR5SqtID_nHmbTvpBLw&sz=w800",
        "https://drive.google.com/thumbnail?id=106IonmHyr8qdhaQaPoEoyb2SKF5EeyH6&sz=w800",
        "https://drive.google.com/thumbnail?id=1V1wHLDdcAlGyqMkVsb5tMtlUUPauBvcd&sz=w800",
        "https://drive.google.com/thumbnail?id=1gLjYMM5xmND65vhZKPB_hiyFV7RsJ0R9&sz=w800",
        "https://drive.google.com/thumbnail?id=11lI3whT19zD9f5m2b0JDaBzNXIzE8XZR&sz=w800",
        "https://drive.google.com/thumbnail?id=10g0KiyMWEGqbXbCpWsyznSW--lk-jWhc&sz=w800",
        "https://drive.google.com/thumbnail?id=1kKLoaHKMn4Nb3a5juCzlpLJUL2MhG72G&sz=w800",
        "https://drive.google.com/thumbnail?id=1t1m8Hjlguxco8-h1RvEWcQj5G3Yyxixo&sz=w800",
        "https://drive.google.com/thumbnail?id=1hYl3pMqnGxLNOsnuOxDWcsrJySGN93HP&sz=w800",
        "https://drive.google.com/thumbnail?id=1IXqpBPHJWml0Jfv5xfjWP04JGZ9s5Ki1&sz=w800"
      ],
      memories: [
        {
          id: "south-quad",
          icon: "〽️",
          title: "ANN ARBOR",
          subtitle: "South Quad Freshman Year",
          story: "University of Michigan. We both got in. We both went.\n\nSouth Quad freshman year — the dorms, the dining hall, figuring out what college actually is day by day. There's something rare and special about going to your dream school with your twin brother. Ann Arbor felt like home almost immediately.\n\nEverything started here.",
          photos: ["https://drive.google.com/thumbnail?id=1p5pKO0N9zZYtJ5gTwpZd_rqWIo1graS_&sz=w1200"]
        },
        {
          id: "du-frat",
          icon: "🏠",
          title: "DU FRAT HOUSE",
          subtitle: "Sophomore Year — The Chaos Era",
          story: "Sophomore year — the DU frat house.\n\nLiving in the frat, the social scene, the absolute chaos of it all. It was exactly what sophomore year of college is supposed to be. We were in the thick of it together.\n\nI don't need to elaborate. You were there. We both know.",
          photos: ["https://drive.google.com/thumbnail?id=1WYAgC-81kdu3kh73Tej44AWByUU5MQnr&sz=w1200"]
        },
        {
          id: "packard",
          icon: "🥂",
          title: "821 PACKARD",
          subtitle: "Our Beloved. Junior & Senior Year.",
          story: "821 Packard. Junior and senior year.\n\nThat house became home in a way that nothing else in college did. The address we'll both remember forever. The place where the best nights happened, where the best conversations happened, where we really figured out who we were turning into.\n\nEverybody has a college address they'll carry with them forever. Ours is 821 Packard.",
          photos: ["https://drive.google.com/thumbnail?id=1pZPOlHHnqcliWIg9NCIOypS3bDNkUIqm&sz=w1200"]
        },
        {
          id: "katie",
          icon: "💑",
          title: "KATIE GELFMAN",
          subtitle: "The Third. Probably the Last. Definitely the Best.",
          story: "Katie Gelfman. Your third girlfriend — and probably, let's be honest, your last.\n\nSophia → Rylie → Katie. That's a character arc. That's growth. Katie is genuinely great, and she's been great for you, and I say that as someone who has had zero girlfriends the entire time.\n\nNot bitter. Completely fine. Very happy for you. This is your birthday after all.",
          photos: ["https://drive.google.com/thumbnail?id=1bu7n40NooRtGCN16qZxboCOR3HoNT1Gh&sz=w1200"]
        },
        {
          id: "big-house",
          icon: "🏟️",
          title: "THE BIG HOUSE",
          subtitle: "100,000 Maize & Blue",
          story: "Michigan Stadium as a student. 100,000 people in Maize and Blue.\n\nGame days in Ann Arbor are unlike anything else — the tailgates, the walk in, that sound when the team comes out. There's a reason it's one of the most iconic venues in sports.\n\nWe got to experience that as students. We were there for the run. We watched it together and we knew, even in the moment, that we were watching something we'd talk about forever.",
          photos: [
            "https://drive.google.com/thumbnail?id=1ZpkfTwExNOrkOxVBBBtphoMzb720sm7C&sz=w1200",
            "https://drive.google.com/thumbnail?id=1qtC1dQliu6ggoh19FhGK52lBeUTBRER8&sz=w1200",
            "https://drive.google.com/thumbnail?id=1R0XCtLdPXYw6Lxpaoe0X5ilmv2fOM7er&sz=w1200"
          ]
        },
        {
          id: "naples",
          icon: "🌊",
          title: "NAPLES",
          subtitle: "The Trip That Delivered",
          story: "Naples. The trip that delivered.\n\nGood weather, good food, good people. The kind of trip where everything just works and you come back actually refreshed instead of needing a vacation from your vacation.\n\nThis one's going in the permanent rotation.",
          photos: ["https://drive.google.com/thumbnail?id=1o4hQe7DzZMG4-nK6wEHzc1Ub6rNeqoHb&sz=w1200"]
        },
        {
          id: "golf",
          icon: "⛳",
          title: "GOLF",
          subtitle: "The New Obsession",
          story: "Golf entered the rotation in college and never left.\n\nWhat started as something to do turned into an actual thing we both got into. The courses, the competition, the absolutely disproportionate amount of satisfaction from hitting a good shot — golf is just built different.\n\nNot going to say who's better. You know who's better.",
          photos: [
            "https://drive.google.com/thumbnail?id=1A1QVh3Z0S6vLIzV5dWj0SoAPiwYHWrAS&sz=w1200",
            "https://drive.google.com/thumbnail?id=1No-DK57yX4aM0YLcUXhN8nnrt4LX1njs&sz=w1200"
          ]
        },
        {
          id: "vegas",
          icon: "🎰",
          title: "VEGAS",
          subtitle: "What Happens in Vegas... Is on This Site Now",
          story: "Vegas. At least one trip has to happen in college.\n\nWe went. We experienced it. The city lives up to the reputation in all the ways it's supposed to.\n\nWhat happens in Vegas stays in Vegas — except for these photos, which are now immortalized on your birthday website. Happy birthday.",
          photos: [
            "https://drive.google.com/thumbnail?id=14vIa0lRaBjxPYyqlGW3tqdmRZW6jPFP-&sz=w1200",
            "https://drive.google.com/thumbnail?id=1CQScB9o_hHEmrkvaWB_AiD9H9hxoCCfp&sz=w1200"
          ]
        },
        {
          id: "graduation",
          icon: "🎓",
          title: "WE MADE IT",
          subtitle: "Cap, Gown & What Comes Next",
          story: "And now we're here. Four years done. Graduating.\n\nYou're staying in Michigan. I'm going to New York. For the first time in 22 years, we're not going to be in the same city.\n\nThat's a strange thing to sit with. But we've always been more than proximity — it's something bigger than geography. Whatever comes next, wherever we both end up, it's still me and you.\n\nAlways has been. Click the next button.",
          photos: []
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
let currentPhotoIdx    = 0;
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
  buildPhotoLog(lv);

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

function buildPhotoLog(lv) {
  const section = document.getElementById('photoLogSection');
  const strip   = document.getElementById('photoLogStrip');
  if (!lv.photoLog || lv.photoLog.length === 0) {
    section.style.display = 'none';
    return;
  }
  section.style.display = 'block';
  strip.innerHTML = lv.photoLog.map((url, i) =>
    `<img class="log-thumb" src="${url}" loading="lazy" alt="Photo ${i + 1}" onclick="openLogPhoto('${url}')">`
  ).join('');
}


// ══════════════════════════════════════════════════════════════
//   MODAL
// ══════════════════════════════════════════════════════════════
function openModal(lvIdx, memIdx) {
  currentModalLevel  = lvIdx;
  currentModalMemIdx = memIdx;
  currentPhotoIdx    = 0;

  const lv  = GAME_DATA.levels[lvIdx];
  const mem = lv.memories[memIdx];

  unlocked.add(mem.id);
  setEraColors(lv.themeColor, lv.secondaryColor);

  document.getElementById('mIcon').textContent    = mem.icon;
  document.getElementById('mTitle').textContent   = mem.title;
  document.getElementById('mSub').textContent     = mem.subtitle;
  document.getElementById('mStory').textContent   = mem.story;
  document.getElementById('mCounter').textContent = `${memIdx + 1} / ${lv.memories.length}`;

  renderMemoryMedia(mem);

  document.getElementById('modal').classList.remove('hidden');
  buildCabinets(lv);
  refreshCounter(lv);
}

function renderMemoryMedia(mem) {
  const img        = document.getElementById('mPhoto');
  const ph         = document.getElementById('mPlaceholder');
  const videoWrap  = document.getElementById('mVideoWrap');
  const photoNav   = document.getElementById('mPhotoNav');
  const photoCtr   = document.getElementById('mPhotoCounter');

  // Reset all
  img.classList.add('hidden');
  img.src = '';
  ph.style.display = 'none';
  videoWrap.style.display = 'none';
  videoWrap.innerHTML = '';
  photoNav.style.display = 'none';

  if (mem.video) {
    videoWrap.style.display = 'block';
    videoWrap.innerHTML = `<iframe src="${mem.video}" class="modal-video-frame" allowfullscreen></iframe>`;
  } else if (mem.photos && mem.photos.length > 0) {
    img.src = mem.photos[currentPhotoIdx];
    img.classList.remove('hidden');
    if (mem.photos.length > 1) {
      photoNav.style.display = 'flex';
      photoCtr.textContent = `${currentPhotoIdx + 1} / ${mem.photos.length}`;
    }
  } else {
    ph.style.display = 'flex';
  }
}

function navPhoto(dir) {
  const mem   = GAME_DATA.levels[currentModalLevel].memories[currentModalMemIdx];
  const total = mem.photos ? mem.photos.length : 0;
  const next  = currentPhotoIdx + dir;
  if (next < 0 || next >= total) return;
  currentPhotoIdx = next;
  renderMemoryMedia(mem);
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
  document.getElementById('mVideoWrap').innerHTML = '';
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
//   PHOTO LOG LIGHTBOX
// ══════════════════════════════════════════════════════════════
let logPhotos = [];
let logPhotoIdx = 0;

function openLogPhoto(url) {
  const lv = GAME_DATA.levels[currentLevelIndex];
  logPhotos = lv.photoLog || [];
  logPhotoIdx = logPhotos.indexOf(url);
  if (logPhotoIdx === -1) logPhotoIdx = 0;
  renderLogPhoto();
  document.getElementById('logLightbox').classList.remove('hidden');
}

function renderLogPhoto() {
  document.getElementById('logLightboxImg').src = logPhotos[logPhotoIdx];
}

function navLogPhoto(dir) {
  logPhotoIdx = (logPhotoIdx + dir + logPhotos.length) % logPhotos.length;
  renderLogPhoto();
}

function closeLogPhoto() {
  document.getElementById('logLightbox').classList.add('hidden');
}

const QUIZ = [
  {
    question: "WHO IS THE BETTER LOOKING TWIN?",
    answers: ["MAX 😎", "LOGAN 😍"],
    correct: 1,
    wrong: ["INCORRECT. BE HONEST WITH YOURSELF.", "WRONG. THINK HARDER.", "NICE TRY. THE MIRROR DOESN'T LIE."]
  },
  {
    question: "WHO IS THE SMARTER TWIN?",
    answers: ["MAX 🧠", "LOGAN 🏆"],
    correct: 1,
    wrong: ["WRONG. OBJECTIVELY INCORRECT.", "TRY AGAIN. USE THAT BIG BRAIN.", "INCORRECT. THIS IS EMBARRASSING FOR YOU."]
  },
  {
    question: "WHO IS MOM & DAD'S FAVORITE?",
    answers: ["MAX 🥺", "LOGAN 👑"],
    correct: 1,
    wrong: ["WRONG. THEY TOLD ME THEMSELVES.", "INCORRECT. THEY LITERALLY SAID IT.", "TRY AGAIN. WE BOTH KNOW THE TRUTH."]
  }
];

let quizIdx = 0;
let wrongCounts = [0, 0, 0];

function openSurprise() {
  quizIdx = 0;
  wrongCounts = [0, 0, 0];
  document.getElementById('surpriseReveal').style.display = 'none';
  document.getElementById('surpriseQuiz').style.display = 'block';
  document.getElementById('surpriseModal').classList.remove('hidden');
  renderQuiz();
}

function renderQuiz() {
  const q = QUIZ[quizIdx];
  document.getElementById('quizQuestion').textContent = q.question;
  document.getElementById('quizWrong').style.display = 'none';
  document.getElementById('quizProgress').textContent = `QUESTION ${quizIdx + 1} OF ${QUIZ.length}`;
  document.getElementById('quizBtns').innerHTML = q.answers.map((a, i) =>
    `<button class="quiz-btn btn-ghost" onclick="answerQuiz(${i})">${a}</button>`
  ).join('');
}

function answerQuiz(chosen) {
  const q = QUIZ[quizIdx];
  if (chosen !== q.correct) {
    const msg = q.wrong[wrongCounts[quizIdx] % q.wrong.length];
    wrongCounts[quizIdx]++;
    const wrongEl = document.getElementById('quizWrong');
    wrongEl.textContent = msg;
    wrongEl.style.display = 'block';
    return;
  }
  quizIdx++;
  if (quizIdx >= QUIZ.length) {
    document.getElementById('surpriseQuiz').style.display = 'none';
    document.getElementById('surpriseReveal').style.display = 'block';
  } else {
    renderQuiz();
  }
}

function closeSurprise() {
  document.getElementById('surpriseModal').classList.add('hidden');
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
