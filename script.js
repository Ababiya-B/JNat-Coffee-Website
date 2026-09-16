
/* ================= Icons ================= */
const ICON = {
  home:'<path d="M4 11 L12 4 L20 11"/><path d="M6 10 L6 20 L18 20 L18 10"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="1.2"/><rect x="14" y="3" width="7" height="7" rx="1.2"/><rect x="3" y="14" width="7" height="7" rx="1.2"/><rect x="14" y="14" width="7" height="7" rx="1.2"/>',
  heart:'<path d="M12 20 C6 15.6 3 12.4 3 8.8 C3 6 5.2 4 7.8 4 C9.6 4 11 5 12 6.4 C13 5 14.4 4 16.2 4 C18.8 4 21 6 21 8.8 C21 12.4 18 15.6 12 20 Z"/>',
  cart:'<circle cx="9" cy="20" r="1.4" fill="currentColor" stroke="none"/><circle cx="17" cy="20" r="1.4" fill="currentColor" stroke="none"/><path d="M2.5 3.5 H5 L7.4 15 H18.2 L20.5 6.5 H6.2"/>',
  search:'<circle cx="10" cy="10" r="6.5"/><path d="M19 19 L14.8 14.8"/>',
  bell:'<path d="M6 10 C6 5.6 8.7 3 12 3 C15.3 3 18 5.6 18 10 C18 15 20 16.5 20 16.5 H4 C4 16.5 6 15 6 10 Z"/><path d="M9.5 19 A2.5 2.5 0 0 0 14.5 19"/>',
  plus:'<path d="M10 3 V17 M3 10 H17"/>',
  minus:'<path d="M3 10 H17"/>',
  cup:'<path d="M5 8 H16 L15 18 A2 2 0 0 1 13 20 H8 A2 2 0 0 1 6 18 Z"/><path d="M16 9 H19 A2 2 0 0 1 19 14 H16"/><path d="M8 3 C7 4.5 9 5 8.3 6.5"/><path d="M12 3 C11 4.5 13 5 12.3 6.5"/>',
  bag:'<path d="M6 8 H18 L17 20 H7 Z"/><path d="M9 8 V6 A3 3 0 0 1 15 6 V8"/>',
  bowl:'<path d="M4 10 H20 A8 6 0 0 1 4 10 Z"/><path d="M4 10 C4 14 7.5 17 12 17 C16.5 17 20 14 20 10"/>',
  pizza:'<path d="M12 3 L21 19 H3 Z"/><circle cx="12" cy="10" r="1" fill="currentColor" stroke="none"/><circle cx="9.5" cy="14" r="1" fill="currentColor" stroke="none"/><circle cx="14.5" cy="14.5" r="1" fill="currentColor" stroke="none"/>',
  leaf:'<path d="M5 19 C5 10 11 4 20 4 C20 13 14 19 5 19 Z"/><path d="M5 19 C9 14 13 10 20 4"/>',
  drop:'<path d="M12 3 C16 8 19 12 19 15.5 A7 7 0 0 1 5 15.5 C5 12 8 8 12 3 Z"/>',
  glass:'<path d="M6 4 H18 L16 20 H8 Z"/><path d="M7.5 9 H16.5"/>',
  check:'<path d="M4 12 L9.5 17.5 L20 6"/>',
  arrowLeft:'<path d="M15 4 L7 12 L15 20"/>',
  trash:'<path d="M4 7 H20"/><path d="M9 7 V4.5 A1 1 0 0 1 10 3.5 H14 A1 1 0 0 1 15 4.5 V7"/><path d="M6 7 L7 20 A1.5 1.5 0 0 0 8.5 21.5 H15.5 A1.5 1.5 0 0 0 17 20 L18 7"/>'
};
function icon(name){ return ICON[name] || ICON.cup; }

/* ================= Data ================= */
const CATEGORIES = [
  { id:'breakfast', tab:'Breakfast', en:'Breakfast', am:'ቁርስ', ic:'cup',
    blurb:'Eggs, fool and fetira, made the way mornings in Addis call for.',
    items:[
      ['Scrambled egg','እንቁላል ፍርፍር',220],
      ['Scrambled egg with meat','እንቁላል ፍርፍር በስጋ',320],
      ['Egg sauce','እንቁላል ስልስ',270],
      ['Fool','ፉል',170],
      ['Fool with tuna','ፉል በ ቱና',250],
      ['Special fool','እስፔሻል ፉል',220],
      ['Chechebesa','ጨጨብሳ',220],
      ['Special chechebesa','እስፔሻል ጨጨብሳ',270],
      ['Special sandwich','እስፔሻል ሳንድዊች',400],
      ['Egg sandwich','እንቁላል ሳንድዊች',300],
      ['Tuna sandwich','ቱና ሳንድዊች',400],
      ['Chicken sandwich','ቺክን ሳንድዊች',450],
      ['Veggie sandwich','አትክልት ሳንድዊች',280],
      ['Club sandwich','ክለብ ሳንድዊች',500],
      ['Waffle','ዋፍል',300],
      ['French toast','ፍሬንች ቶስት',300],
      ['Kinche','ቅንጭ',300],
      ['Fasting fetira','የፆም ፈጢራ',280],
      ['Fetira with egg','ፈጢራ በ እንቁላል',380],
      ['Special fetira','እስፔሻል ፈጢራ',450],
    ]
  },
  { id:'lunch', tab:'Lunch', en:'Lunch', am:'ምሳ', ic:'bowl',
    blurb:'Shiro, tegabino, pasta and firfir. The plates people come back for.',
    items:[
      ['Bozena shiro','ቦዘና ሽሮ',350],
      ['Shiro','ሽሮ',220],
      ['Shiro with butter','ሽሮ በቅቤ',240],
      ['Tegabino','ተጋቢኖ',280],
      ['Pasta with sauce','ፓስታ በስጎ',270],
      ['Pasta with meat','ፓስታ በስጋ',380],
      ['Pasta with vegetable','ፓስታ በአትክልት',300],
      ['Pasta with egg','ፓስታ በ እንቁላል',320],
      ['Tmatim lebeleb','ቲማቲም ለብለብ',200],
      ['Tmatim sils','ቲማቲም ስልስ',200],
      ['Firfir','ፍርፍር',220],
      ['Firfir with egg','ፍርፍር በእንቁላል',280],
      ['Tibs firfir','ጥብስ ፍርፍር',370],
      ['Sega firfir','ስጋ ፍርፍር',320],
      ['Quanta firfir','ቐንጣ ፍርፍር',420],
      ['Tibs','ጥብስ',480],
      ['Dulet','ዱለት',370],
    ]
  },
  { id:'burgers', tab:'Burgers', en:'Burgers and wraps', am:'በርገር እና ሸዋርማ', ic:'bag',
    blurb:'For when you want something familiar, made well.',
    groups:[
      {h:'Burgers / በርገር', items:[
        ['Special burger','እስፔሻል በርገር',700],
        ['Double burger','ደብል በርገር',550],
        ['Beef burger','ቢፍ በርገር',470],
        ['Chicken burger','ቺክን በርገር',650],
        ['Cheesy burger','ቺዝ በርገር',500],
      ]},
      {h:'Wraps / ሸዋርማ', items:[
        ['Beef wrap','ቢፍ ሸዋርማ',430],
        ['Chicken wrap','ቺክን ሸዋርማ',530],
        ['Tuna wrap','ቱና ሸዋርማ',480],
        ['Veggie wrap','አትክልት ሸዋርማ',370],
        ['Special wrap','እስፔሻል ሸዋርማ',600],
      ]}
    ]
  },
  { id:'pizza', tab:'Pizza', en:'Pizza', am:'ፒዛ', ic:'pizza',
    blurb:'Baked fresh, sliced and ready for the table.',
    items:[
      ['Special pizza','እስፔሻል ፒዛ',750],
      ['4 saisons pizza','4 ሲዝን ፒዛ',900],
      ['Margherita pizza','ማርጋሪታ ፒዛ',500],
      ['Beef pizza','ቢፍ ፒዛ',580],
      ['Tuna pizza','ቱና ፒዛ',600],
      ['Veggie pizza','አትክልት ፒዛ',480],
    ]
  },
  { id:'snacks', tab:'Snacks', en:'Snacks and extras', am:'መክሰስ እና ጭማሪ', ic:'bag',
    blurb:'Small plates and add ons, for whenever you want a little more.',
    groups:[
      {h:'Snacks / መክሰስ', items:[
        ['Sambusa','ሳምቡሳ',50],
        ['Ertibe with pita','እርጥብ በቂጣ',200],
        ['Special ertibe with pita','እስፔሻል እርጥብ በቂጣ',250],
        ['French fries','ቺብስ',200],
      ]},
      {h:'Extras / ጭማሪ', items:[
        ['Tuna extra','ቱና',100],
        ['Egg extra','እንቁላል',50],
        ['Ketchup','ካቻፕ',25],
        ['Mayonnaise','ማዮኒዝ',50],
        ['Honey','ማር',25],
        ['Aluminium foil','አልሙኒም ፎይል',20],
        ['Yoghurt','እርጎ',20],
        ['Chilli','ዳጣ',20],
        ['Syrup','ሲራፕ',25],
        ['Bread','ዳቦ',20],
        ['Burger takeaway box','የበርገር ቴካዌ ቦክስ',30],
        ['Large takeaway cup','ቴካዌ ካፕ ትልቁ',25],
        ['Coffee takeaway cup','ቴካዌ ካፕ የቡና',15],
        ['Aluminium takeaway box','አልሙኒየም ቴካዌ ቦክስ',55],
      ]}
    ]
  },
  { id:'coffee', tab:'Coffee', en:'Tea and coffee', am:'ሻይ እና ቡና', ic:'cup',
    blurb:'This is what we are named for. Brewed slow, served warm.',
    items:[
      ['Coffee','ቡና',50],
      ['Espresso','እስፕሬሶ',70],
      ['Macchiato','ማኪያቶ',90],
      ['Steamed milk with coffee','እስቲም ወተት በቡና',115],
      ['Espresso shot','እስፕሪስ',50],
      ['Milk','ወተት',95],
      ['Black tea','ጥቁር ሻይ',40],
      ['Lemon tea','ሻይ በሎሚ',50],
      ['Cinnamon tea','ሻይ በቅመም',45],
      ['Keshir','ቀሽር',50],
      ['Hibiscus tea','ከርከዴ ሻይ',75],
    ]
  },
  { id:'cold', tab:'Cold drinks', en:'Cold drinks', am:'ቀዝቃዛ መጠጦች', ic:'drop',
    blurb:'Iced coffee and hibiscus, for warm afternoons.',
    items:[
      ['Iced coffee','አይስ ኮፊ',150],
      ['Caramel iced coffee','ካራሜል አይስ ኮፊ',150],
      ['Iced chocolate latte','አይስ ቸኮላት ላቴ',200],
      ['Iced hibiscus tea','አይስ ከርከዴ',180],
    ]
  },
  { id:'yoghurt', tab:'Yoghurt', en:'Yoghurt and soft drinks', am:'እርጎ እና ለስላሳ መጠጦች', ic:'bowl',
    blurb:'A lighter option, and the usual bottled favourites.',
    groups:[
      {h:'Yoghurt / እርጎ', items:[
        ['Yoghurt with honey','እርጎ በ ማር',150],
        ['Yoghurt with red chilli','እርጎ በ ሚጥሚጣ',110],
        ['Flax','ተልባ',130],
        ['Flax mix with seasonal fruits','ተልባ በወተት',150],
      ]},
      {h:'Soft drinks / ለስላሳ መጠጦች', items:[
        ['Novida','ኖቪዳ',60],
        ['Ambo water','አምቦውሃ',60],
        ['Fanta','ፋንታ',60],
        ['Sprite','ስፕራይት',60],
        ['Negus','ንጉስ',90],
        ['Water, half litre','ውሃ 1/2',40],
        ['Water, 1 litre','ውሃ 1L',50],
        ['Water, 2 litre','ውሃ 2L',60],
      ]}
    ]
  },
  { id:'juices', tab:'Juice and mojito', en:'Fresh juices and mojito', am:'ፍሬሽ ጁስ እና ሞጂቶ', ic:'glass',
    blurb:'Pressed fruit and mint, for a clean finish to any meal.',
    groups:[
      {h:'Fresh juices / ፍሬሽ ጁስ', items:[
        ['Mixed fruit','ሚክስድ',250],
        ['Mango','ማንጎ',220],
        ['Papaya','ፓፓያ',200],
        ['Avocado','አቮካዶ',220],
      ]},
      {h:'Mojito / ሞጂቶ', items:[
        ['Strawberry','እስትሮቨሪ',250],
        ['Orange','ኦሬንጅ',250],
        ['Mango','ማንጎ',250],
        ['Mint','ሜንት',250],
        ['Apple','አፕል',250],
        ['Tropical blue','ትሮፒካል ብሉ',250],
        ['Mango and coconut','ማንጎ እና ኮኮናት',250],
        ['J Nat special','ጄ ናት እስፔሻል',250],
      ]}
    ]
  },
];

/* flatten every item into one lookup with a stable id and its category icon */
const ITEMS = [];
CATEGORIES.forEach(cat=>{
  const push = (en,am,price)=>{
    const id = cat.id + '_' + en.toLowerCase().replace(/[^a-z0-9]+/g,'_');
    ITEMS.push({ id, en, am, price, catId:cat.id, catEn:cat.en, ic:cat.ic });
  };
  if(cat.items) cat.items.forEach(([en,am,price])=>push(en,am,price));
  if(cat.groups) cat.groups.forEach(g=>g.items.forEach(([en,am,price])=>push(en,am,price)));
});
function findItem(id){ return ITEMS.find(i=>i.id===id); }

const PICK_IDS = [
  'breakfast_special_fetira',
  'lunch_bozena_shiro',
  'burgers_special_burger',
  'pizza_special_pizza',
  'cold_iced_coffee',
  'juices_j_nat_special'
];

/* ================= State ================= */
const state = {
  tab:'home',
  menuCat:'breakfast',
  searchOpen:false,
  query:''
};

let toastTimer=null;
function showToast(ic,msg){
  const t = document.getElementById('toast');
  t.innerHTML = `${svg(ic,15)}<span>${msg}</span>`;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'), 2200);
}

/* ================= Small render helpers ================= */
function svg(name,size=18){
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}">${icon(name)}</svg>`;
}
function getItemImage(it) {
  const name = it.en.toLowerCase();
  const cat = it.catId;

  if (cat === 'burgers') {
    if (name.includes('wrap')) return 'img/wrap.jpg';
    return 'img/burger.jpg';
  }
  if (cat === 'pizza') return 'img/pizza.jpg';
  
  if (name.includes('sandwich')) return 'img/sandwich.jpg';
  if (name.includes('french fries') || name.includes('chips')) return 'img/fries.jpg';
  
  if (name.includes('iced') || name.includes('cold')) return 'img/iced_coffee.jpg';

  return null;
}

function itemRow(it){
  const img = getItemImage(it);
  const thumbContent = img ? `<img src="${img}" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">` : svg(it.ic,20);
  return `<div class="item-row">
    <div class="thumb" style="${img ? 'border:none; background:none; overflow:hidden;' : ''}">${thumbContent}</div>
    <div class="info">
      <div class="en">${it.en}</div>
      <div class="am">${it.am}</div>
      <div class="price">${it.price}</div>
    </div>
  </div>`;
}

function pickCard(it){
  const img = getItemImage(it);
  const wrapContent = img ? `<img src="${img}" style="width:100%; height:100%; object-fit:cover; border-radius:12px;">` : svg(it.ic,26);
  return `<div class="pick-card" onclick="openCategory('${it.catId}')">
    <div class="icon-wrap" style="${img ? 'background:none;' : ''}">
      ${wrapContent}
    </div>
    <div class="en">${it.en}</div>
    <div class="am">${it.am}</div>
    <div class="row">
      <span class="price">${it.price}</span>
    </div>
  </div>`;
}

function openCategory(catId){
  state.tab='menu';
  state.menuCat=catId;
  renderAll();
}

/* ================= Header ================= */
function greeting(){
  const h = new Date().getHours();
  if(h<11) return 'Good morning';
  if(h<17) return 'Good afternoon';
  return 'Good evening';
}
function isOpenNow(){
  const h = new Date().getHours();
  return h>=8 && h<21;
}

function renderHeader(){
  const header = document.getElementById('header');
  if(state.tab==='home'){
    header.innerHTML = `
      <div class="brand-row">
        <div class="brand-mark">
          <div class="glyph">${svg('cup',18)}</div>
          <div class="name">J Nat Coffee<span class="am">ጄ ናት ቡና</span></div>
        </div>
        <button class="icon-btn" onclick="openSearch()">${svg('search',17)}</button>
      </div>
      <div class="page-title">
        <h1>${greeting()}</h1>
        <div class="sub">What would you like today</div>
        <div class="status-pill ${isOpenNow()?'':'closed'}"><span class="dot"></span>${isOpenNow()?'Open now, until 9 PM':'Closed, opens 8 AM'}</div>
      </div>`;
    return;
  }
  if(state.tab==='menu'){
    header.innerHTML = `
      <div class="brand-row">
        <div class="page-title" style="margin-top:0;"><h1 style="font-size:1.4rem;">Menu</h1></div>
        <button class="icon-btn" onclick="openSearch()">${svg('search',17)}</button>
      </div>
      <div class="chip-rail" id="chipRail"></div>`;
  }
}

function renderChips(){
  const rail = document.getElementById('chipRail');
  if(!rail) return;
  rail.innerHTML = CATEGORIES.map(c=>`<button class="chip ${c.id===state.menuCat?'active':''}" onclick="selectCat('${c.id}')">${c.tab}</button>`).join('');
}
function selectCat(id){
  state.menuCat = id;
  renderAll();
  const el = document.querySelector('.chip.active');
  if(el) el.scrollIntoView({inline:'center', behavior:'smooth'});
}

/* ================= Views ================= */
function renderHome(){
  const picks = PICK_IDS.map(findItem).filter(Boolean);
  return `
    <div class="section-label">Popular picks</div>
    <div class="pick-rail">${picks.map(pickCard).join('')}</div>

    <div class="section-label">Browse the menu</div>
    <div class="chip-rail">${CATEGORIES.map(c=>`<button class="chip" onclick="openCategory('${c.id}')">${c.tab}</button>`).join('')}</div>

    <div class="made-by">Menu by <a href="https://emberstudios.vercel.app/" target="_blank" rel="noopener">Ember Studios</a> &middot; Addis Ababa</div>
  `;
}

function renderMenu(){
  const cat = CATEGORIES.find(c=>c.id===state.menuCat) || CATEGORIES[0];
  let body = `<p class="blurb">${cat.blurb}</p>`;
  if(cat.items){
    body += cat.items.map(([en,am,price])=>itemRow(ITEMS.find(i=>i.id===cat.id+'_'+en.toLowerCase().replace(/[^a-z0-9]+/g,'_')))).join('');
  } else if(cat.groups){
    cat.groups.forEach(g=>{
      body += `<div class="subhead">${g.h}</div>`;
      body += g.items.map(([en,am,price])=>itemRow(ITEMS.find(i=>i.id===cat.id+'_'+en.toLowerCase().replace(/[^a-z0-9]+/g,'_')))).join('');
    });
  }
  return body;
}

/* ================= Search ================= */
function openSearch(){
  state.searchOpen = true;
  renderSearch();
}
function closeSearch(){
  state.searchOpen = false;
  document.getElementById('searchOverlay').classList.remove('open');
}
function renderSearch(){
  const overlay = document.getElementById('searchOverlay');
  const q = state.query.trim().toLowerCase();
  const results = q.length===0 ? [] : ITEMS.filter(i=> i.en.toLowerCase().includes(q) || i.am.includes(q));
  overlay.innerHTML = `
    <div class="app-header" style="padding-top:calc(14px + env(safe-area-inset-top,0px));">
      <div class="brand-row">
        <button class="icon-btn" onclick="closeSearch()">${svg('arrowLeft',17)}</button>
        <div class="page-title" style="margin-top:0;"><h1 style="font-size:1.2rem;">Search the menu</h1></div>
        <div style="width:36px;"></div>
      </div>
      <div class="search-bar">
        ${svg('search',16)}
        <input id="searchInput" type="text" placeholder="Try shiro, pizza, or macchiato" value="${state.query}" oninput="onSearchInput(this.value)">
      </div>
    </div>
    <div class="view" style="padding-top:4px;">
      ${q.length===0
        ? `<div class="empty-state"><div class="glyph">${svg('search',22)}</div><div class="title">Find anything on the menu</div><div class="sub">Search in English or in Amharic</div></div>`
        : results.length===0
          ? `<div class="empty-state"><div class="glyph">${svg('search',22)}</div><div class="title">Nothing matched</div><div class="sub">Try a different word</div></div>`
          : results.map(itemRow).join('')
      }
    </div>
  `;
  overlay.classList.add('open');
  const input = document.getElementById('searchInput');
  if(input){ input.focus(); const v=input.value; input.value=''; input.value=v; }
}
function onSearchInput(v){
  state.query = v;
  renderSearch();
}

/* ================= Tab bar ================= */
const TABS = [
  {id:'home', label:'Home', ic:'home'},
  {id:'menu', label:'Menu', ic:'grid'}
];
function renderTabbar(){
  const bar = document.getElementById('tabbar');
  bar.innerHTML = TABS.map(t=>{
    const active = state.tab===t.id;
    return `<button class="tab-btn ${active?'active':''}" onclick="switchTab('${t.id}')">
      ${svg(t.ic,20)}
      <span>${t.label}</span>
    </button>`;
  }).join('');
}
function switchTab(id){
  state.tab = id;
  renderAll();
}

/* ================= Root render ================= */
function renderAll(){
  renderHeader();
  const view = document.getElementById('view');
  view.classList.remove('enter');
  let html = '';
  if(state.tab==='home') html = renderHome();
  else if(state.tab==='menu') html = renderMenu();
  view.innerHTML = html;
  void view.offsetWidth;
  view.classList.add('enter');
  if(state.tab==='menu') renderChips();
  renderTabbar();
}

/* ================= Init ================= */
renderAll();
