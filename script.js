const ARTICLES = [
  { id:'ar1', lang:'ar', title:'النشر الإلكتروني وأثره على المكتبات الجامعية العربية', author:'د. مثال الباحث', date:'2022-09-01', summary:'تحليل دور النشر الإلكتروني في تغيير خدمات المكتبات الجامعية داخل بيئات البحث العربية.', content:`<p>في السنوات الأخيرة، شهدت المكتبات الجامعية تغيّرات كبيرة بفضل النشر الإلكتروني...</p>`, source:'https://www.asjp.cerist.dz/en/article/154273' },
  { id:'en1', lang:'en', title:'The Future of Electronic Publishing', author:'SpringerOpen', date:'2020-05-20', summary:'An overview of trends shaping electronic publishing internationally.', content:`<p>Electronic publishing continues to evolve with open access, data sharing and new business models...</p>`, source:'https://link.springer.com/article/10.1007/s12109-020-09737-8' }
];

const PUBLISHERS = [
  { id:'p_dar', name:'دار المنظومة', logo:'https://upload.wikimedia.org/wikipedia/commons/4/47/Dar_almandumah_logo.png', url:'https://www.daralmandumah.com', type:'قاعدة بيانات', desc:'أكبر قاعدة بيانات عربية للأبحاث والمجلات.'},
  { id:'p_almanhal', name:'المنهل (AlManhal)', logo:'https://www.almanhal.com/assets/images/logo-ar.png', url:'https://www.almanhal.com', type:'منصة كتب ودوريات', desc:'منصة إلكترونية للنشر والكتب العربية.'},
  { id:'p_marefa', name:'معرفة — Marefa', logo:'https://www.marefa.org/images/logo-m.png', url:'https://www.marefa.org', type:'منصة معرفية', desc:'موسوعة ومكتبة إلكترونية عربية.'},
  { id:'p_springer', name:'Springer', logo:'https://upload.wikimedia.org/wikipedia/commons/4/4a/Springer_Corporate_Logo.png', url:'https://link.springer.com', type:'دار نشر', desc:'دار نشر أكاديمية عالمية.'},
  { id:'p_elsevier', name:'Elsevier / Scopus', logo:'https://upload.wikimedia.org/wikipedia/commons/4/4a/Elsevier_logo.png', url:'https://www.scopus.com', type:'قاعدة بيانات', desc:'قاعدة بحثية ودور نشر عالمية.'},
  { id:'p_wiley', name:'Wiley', logo:'https://upload.wikimedia.org/wikipedia/commons/2/20/Wiley_logo.png', url:'https://onlinelibrary.wiley.com', type:'دار نشر', desc:'منصّة دوريات وكتب علمية.'}
];

// render publishers
function renderPublishers(){
  const grid = document.getElementById('publishersGrid');
  grid.innerHTML = '';
  PUBLISHERS.forEach(p=>{
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML=`
      <img src="${p.logo}" alt="${p.name}" class="logo" />
      <h4>${p.name}</h4>
      <p>${p.desc}</p>
      <a class="btn ghost" href="${p.url}" target="_blank">زيارة الموقع</a>
    `;
    grid.appendChild(card);
  });
}

// render articles
function renderArticles(){
  const grid = document.getElementById('articlesGrid');
  grid.innerHTML = '';
  ARTICLES.forEach(a=>{
    const card = document.createElement('div');
    card.className='card';
    card.innerHTML=`
      <h4>${a.title}</h4>
      <p class="muted">${a.summary}</p>
      <button class="btn ghost" onclick="openModal('${a.id}')">عرض المقال</button>
    `;
    grid.appendChild(card);
  });
}

// modal
function openModal(id){
  const article = ARTICLES.find(a=>a.id===id);
  if(!article) return;
  document.getElementById('modalTitle').innerHTML=article.title;
  document.getElementById('modalMeta').innerHTML=`${article.author} | ${article.date}`;
  document.getElementById('modalBody').innerHTML=article.content;
  document.getElementById('modalSource').href=article.source;
  document.getElementById('modal').setAttribute('aria-hidden','false');
}
function closeModal(){document.getElementById('modal').setAttribute('aria-hidden','true')}

// form
function submitSuggestion(e){
  e.preventDefault();
  const name=document.getElementById('sName').value||'غير محدد';
  const title=document.getElementById('sTitle').value;
  const url=document.getElementById('sUrl').value;
  const note=document.getElementById('sNote').value;
  console.log('اقتراح جديد:',{name,title,url,note});
  alert('شكرًا على اقتراحك! تم تسجيله.');
  e.target.reset();
  return false;
}

window.onload=()=>{
  renderPublishers();
  renderArticles();
};
