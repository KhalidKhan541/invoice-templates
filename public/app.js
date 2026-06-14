const TEMPLATES = [
  {id:1,name:"Executive Pro",category:"professional",color:"blue",industry:"consulting",price:12,rating:4.9,reviews:234,badge:"Bestseller",description:"Clean, professional invoice template perfect for consulting firms and executive services.",colors:{header:"#1e40af",accent:"#3b82f6"}},
  {id:2,name:"Minimal Clean",category:"minimal",color:"black",industry:"technology",price:0,rating:4.7,reviews:189,badge:"Free",description:"Simple and elegant minimal design that works for any business.",colors:{header:"#1e293b",accent:"#475569"}},
  {id:3,name:"Creative Studio",category:"creative",color:"purple",industry:"design",price:9,rating:4.8,reviews:156,badge:null,description:"Bold and artistic invoice template for creative professionals.",colors:{header:"#7c3aed",accent:"#a78bfa"}},
  {id:4,name:"Corporate Elite",category:"corporate",color:"blue",industry:"consulting",price:15,rating:4.9,reviews:312,badge:"Popular",description:"Enterprise-grade invoice template with a polished corporate look.",colors:{header:"#1e3a5f",accent:"#2563eb"}},
  {id:5,name:"Freelancer Plus",category:"freelancer",color:"green",industry:"technology",price:7,rating:4.6,reviews:98,badge:null,description:"Designed for independent contractors and freelance professionals.",colors:{header:"#065f46",accent:"#10b981"}},
  {id:6,name:"Tech Startup",category:"professional",color:"blue",industry:"technology",price:11,rating:4.8,reviews:187,badge:null,description:"Modern invoice template with tech-forward design elements.",colors:{header:"#1e40af",accent:"#60a5fa"}},
  {id:7,name:"Artisan Craft",category:"creative",color:"orange",industry:"design",price:8,rating:4.5,reviews:76,badge:null,description:"Warm, handcrafted feel for artisan businesses and makers.",colors:{header:"#c2410c",accent:"#f97316"}},
  {id:8,name:"Construction Pro",category:"corporate",color:"orange",industry:"construction",price:10,rating:4.7,reviews:145,badge:null,description:"Built tough for construction and contracting businesses.",colors:{header:"#b45309",accent:"#f59e0b"}},
  {id:9,name:"Healthcare Plus",category:"professional",color:"green",industry:"healthcare",price:13,rating:4.9,reviews:201,badge:"Top Rated",description:"HIPAA-inspired clean design for healthcare providers.",colors:{header:"#047857",accent:"#34d399"}},
  {id:10,name:"Marketing Max",category:"creative",color:"red",industry:"marketing",price:9,rating:4.6,reviews:112,badge:null,description:"Eye-catching design for marketing agencies and brands.",colors:{header:"#b91c1c",accent:"#ef4444"}},
  {id:11,name:"Simple Bill",category:"minimal",color:"black",industry:"consulting",price:0,rating:4.4,reviews:267,badge:"Free",description:"No-frills invoice that gets straight to the point.",colors:{header:"#374151",accent:"#6b7280"}},
  {id:12,name:"Design Studio",category:"creative",color:"purple",industry:"design",price:14,rating:4.8,reviews:89,badge:null,description:"Showcase your creative flair with this designer invoice.",colors:{header:"#6d28d9",accent:"#8b5cf6"}},
  {id:13,name:"Corporate Blue",category:"corporate",color:"blue",industry:"consulting",price:11,rating:4.7,reviews:178,badge:null,description:"Trustworthy blue tones for established businesses.",colors:{header:"#1d4ed8",accent:"#3b82f6"}},
  {id:14,name:"Freelance Wave",category:"freelancer",color:"green",industry:"technology",price:6,rating:4.5,reviews:134,badge:null,description:"Flowing design perfect for digital freelancers.",colors:{header:"#059669",accent:"#34d399"}},
  {id:15,name:"Bold Statement",category:"creative",color:"red",industry:"marketing",price:12,rating:4.7,reviews:91,badge:null,description:"Make a statement with bold colors and typography.",colors:{header:"#dc2626",accent:"#f87171"}},
  {id:16,name:"Executive Dark",category:"professional",color:"black",industry:"consulting",price:15,rating:4.9,reviews:223,badge:"Premium",description:"Dark mode invoice for the modern executive.",colors:{header:"#0f172a",accent:"#334155"}},
  {id:17,name:"Growth Agency",category:"corporate",color:"green",industry:"marketing",price:10,rating:4.6,reviews:156,badge:null,description:"Growth-focused design for marketing agencies.",colors:{header:"#047857",accent:"#10b981"}},
  {id:18,name:"Pixel Perfect",category:"creative",color:"purple",industry:"design",price:11,rating:4.8,reviews:67,badge:null,description:"Precision-designed for pixel-perfect professionals.",colors:{header:"#7c3aed",accent:"#c084fc"}},
  {id:19,name:"Quick Invoice",category:"minimal",color:"blue",industry:"technology",price:0,rating:4.3,reviews:312,badge:"Free",description:"Fast and simple invoice for quick billing.",colors:{header:"#2563eb",accent:"#60a5fa"}},
  {id:20,name:"Builder Pro",category:"corporate",color:"orange",industry:"construction",price:8,rating:4.5,reviews:189,badge:null,description:"Professional template for builders and contractors.",colors:{header:"#d97706",accent:"#fbbf24"}},
  {id:21,name:"Clinical Invoice",category:"professional",color:"green",industry:"healthcare",price:12,rating:4.8,reviews:134,badge:null,description:"Clean clinical design for medical practices.",colors:{header:"#059669",accent:"#6ee7b7"}},
  {id:22,name:"Social Marketer",category:"freelancer",color:"purple",industry:"marketing",price:7,rating:4.6,reviews:98,badge:null,description:"Vibrant template for social media managers.",colors:{header:"#7c3aed",accent:"#a78bfa"}},
  {id:23,name:"Code Invoice",category:"freelancer",color:"blue",industry:"technology",price:5,rating:4.7,reviews:201,badge:"Popular",description:"Developer-themed invoice with code-inspired design.",colors:{header:"#1e40af",accent:"#818cf8"}},
  {id:24,name:"Elegant Serif",category:"minimal",color:"black",industry:"consulting",price:10,rating:4.8,reviews:145,badge:null,description:"Classic serif typography for timeless elegance.",colors:{header:"#1e293b",accent:"#94a3b8"}}
];

const REVIEWS = [
  {author:"Sarah M.",rating:5,date:"2 days ago",text:"Absolutely love this template! It's professional and easy to customize."},
  {author:"James K.",rating:5,date:"1 week ago",text:"Perfect for my consulting business. Clients always compliment the invoice design."},
  {author:"Emily R.",rating:4,date:"2 weeks ago",text:"Great design, just wish there were more color options."},
  {author:"Mike T.",rating:5,date:"3 weeks ago",text:"Worth every penny. Saved me hours of design work."},
  {author:"Lisa P.",rating:4,date:"1 month ago",text:"Clean and professional. Exactly what I needed."}
];

let cart = [];
let currentTemplate = null;

function createInvoiceMock(template, size = 'normal') {
  const t = template.colors;
  const h = size === 'small' ? '6px' : '10px';
  return `
    <div class="invoice-mock" style="font-size:${size==='small'?'7px':'10px'}">
      <div class="mock-header">
        <span class="mock-title" style="color:${t.header}">INVOICE</span>
        <div class="mock-logo" style="background:${t.header}"></div>
      </div>
      <div class="mock-info">
        <div><strong>From:</strong><br>Your Company<br>123 Business St</div>
        <div><strong>To:</strong><br>Client Corp<br>456 Client Ave</div>
        <div><strong>Date:</strong><br>Jan 15, 2026<br>Due: Feb 14</div>
      </div>
      <div class="mock-table">
        <div class="mock-row" style="font-weight:700;color:${t.header}"><span>Item</span><span>Amount</span></div>
        <div class="mock-row"><span>Web Design</span><span>$1,500</span></div>
        <div class="mock-row"><span>Logo Design</span><span>$500</span></div>
        <div class="mock-row"><span>SEO Setup</span><span>$300</span></div>
        <div class="mock-row total"><span>Total</span><span style="color:${t.header}">$2,300</span></div>
      </div>
    </div>`;
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - half);
}

function renderTemplateCard(template) {
  return `
    <div class="template-card" data-id="${template.id}">
      <div class="template-thumb">
        ${createInvoiceMock(template, 'small')}
        ${template.badge ? `<span class="template-badge">${template.badge}</span>` : ''}
        <span class="template-price-badge ${template.price === 0 ? 'free' : ''}">${template.price === 0 ? 'Free' : '$' + template.price}</span>
      </div>
      <div class="template-info">
        <h3>${template.name}</h3>
        <div class="template-meta">
          <span class="template-category">${template.category}</span>
          <span class="template-rating">★ ${template.rating} (${template.reviews})</span>
        </div>
      </div>
      <div class="template-actions">
        <button class="btn-secondary btn-small btn-preview" data-id="${template.id}">Preview</button>
        ${template.price === 0
          ? `<button class="btn-primary btn-small btn-use-free" data-id="${template.id}">Use Free</button>`
          : `<button class="btn-primary btn-small btn-add" data-id="${template.id}">Add to Cart</button>`
        }
      </div>
    </div>`;
}

function renderTemplates() {
  const style = document.getElementById('filterStyle').value;
  const color = document.getElementById('filterColor').value;
  const industry = document.getElementById('filterIndustry').value;
  const price = document.getElementById('filterPrice').value;
  const search = document.getElementById('searchInput').value.toLowerCase();

  let filtered = TEMPLATES.filter(t => {
    if (style !== 'all' && t.category !== style) return false;
    if (color !== 'all' && t.color !== color) return false;
    if (industry !== 'all' && t.industry !== industry) return false;
    if (price === 'free' && t.price !== 0) return false;
    if (price === 'paid' && t.price === 0) return false;
    if (search && !t.name.toLowerCase().includes(search) && !t.category.includes(search) && !t.industry.includes(search)) return false;
    return true;
  });

  const grid = document.getElementById('templateGrid');
  const freeGrid = document.getElementById('freeGrid');

  const paid = filtered.filter(t => t.price > 0);
  const free = filtered.filter(t => t.price === 0);

  grid.innerHTML = paid.length ? paid.map(renderTemplateCard).join('') : '<p style="grid-column:1/-1;text-align:center;color:#64748b;padding:40px">No templates match your filters.</p>';
  freeGrid.innerHTML = free.length ? free.map(renderTemplateCard).join('') : '<p style="grid-column:1/-1;text-align:center;color:#64748b;padding:40px">No free templates match your filters.</p>';

  attachCardListeners();
}

function attachCardListeners() {
  document.querySelectorAll('.template-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      openPreview(parseInt(card.dataset.id));
    });
  });
  document.querySelectorAll('.btn-preview').forEach(btn => {
    btn.addEventListener('click', () => openPreview(parseInt(btn.dataset.id)));
  });
  document.querySelectorAll('.btn-add').forEach(btn => {
    btn.addEventListener('click', () => addToCart(parseInt(btn.dataset.id)));
  });
  document.querySelectorAll('.btn-use-free').forEach(btn => {
    btn.addEventListener('click', () => openEditor(parseInt(btn.dataset.id)));
  });
}

function openPreview(id) {
  const t = TEMPLATES.find(x => x.id === id);
  if (!t) return;
  currentTemplate = t;

  document.getElementById('modalTitle').textContent = t.name;
  document.getElementById('modalCategory').textContent = t.category;
  document.getElementById('modalRating').innerHTML = `★ ${t.rating} (${t.reviews} reviews)`;
  document.getElementById('modalDescription').textContent = t.description;
  document.getElementById('modalPrice').textContent = t.price === 0 ? 'Free' : `$${t.price}`;
  document.getElementById('modalPreview').innerHTML = createInvoiceMock(t);

  const reviewHtml = REVIEWS.slice(0, 3).map(r => `
    <div class="review">
      <div class="review-header">
        <span class="review-author">${r.author}</span>
        <span class="review-date">${r.date}</span>
      </div>
      <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
      <p>${r.text}</p>
    </div>`).join('');
  document.getElementById('modalReviews').innerHTML = `<h4>Customer Reviews</h4>${reviewHtml}`;

  const addCartBtn = document.getElementById('modalAddCart');
  const customizeBtn = document.getElementById('modalCustomize');
  if (t.price === 0) {
    addCartBtn.textContent = 'Use Free';
    addCartBtn.onclick = () => { closePreview(); openEditor(t.id); };
  } else {
    addCartBtn.textContent = 'Add to Cart';
    addCartBtn.onclick = () => { addToCart(t.id); closePreview(); };
  }
  customizeBtn.onclick = () => { closePreview(); openEditor(t.id); };

  document.getElementById('previewModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePreview() {
  document.getElementById('previewModal').classList.remove('active');
  document.body.style.overflow = '';
}

function openEditor(id) {
  const t = TEMPLATES.find(x => x.id === id);
  if (!t) return;
  currentTemplate = t;
  document.getElementById('editorTemplateName').textContent = t.name;
  document.getElementById('editorModal').classList.add('active');
  document.body.style.overflow = 'hidden';
  updateInvoicePreview();
}

function closeEditor() {
  document.getElementById('editorModal').classList.remove('active');
  document.body.style.overflow = '';
}

function updateInvoicePreview() {
  if (!currentTemplate) return;
  const t = currentTemplate;
  const d = new Date();
  const dueDate = new Date(d);
  dueDate.setDate(dueDate.getDate() + 30);

  const rows = document.querySelectorAll('#lineItems .line-item');
  let subtotal = 0;
  let itemsHtml = '';
  rows.forEach(row => {
    const inputs = row.querySelectorAll('input');
    const desc = inputs[0].value || 'Item';
    const qty = parseFloat(inputs[1].value) || 0;
    const rate = parseFloat(inputs[2].value) || 0;
    const amount = qty * rate;
    subtotal += amount;
    itemsHtml += `<tr><td>${desc}</td><td class="text-right">${qty}</td><td class="text-right">$${rate.toFixed(2)}</td><td class="text-right">$${amount.toFixed(2)}</td></tr>`;
  });

  const taxRate = parseFloat(document.getElementById('editTax').value) || 0;
  const tax = subtotal * (taxRate / 100);
  const total = subtotal + tax;
  const notes = document.getElementById('editNotes').value;

  const html = `
    <div class="invoice-live" style="--accent:${t.colors.header}">
      <div class="live-header">
        <div>
          <div class="live-title" style="color:${t.colors.header}">INVOICE</div>
          <div style="font-size:10px;color:#64748b;margin-top:4px">${document.getElementById('editInvoiceNum').value}</div>
        </div>
        <div class="live-amount" style="color:${t.colors.header}">$${total.toFixed(2)}</div>
      </div>
      <div class="live-details">
        <div>
          <div class="live-label">From</div>
          <div style="font-weight:600">${document.getElementById('editFrom').value}</div>
          <div style="color:#64748b;font-size:10px">${document.getElementById('editFromAddr').value}</div>
        </div>
        <div>
          <div class="live-label">Bill To</div>
          <div style="font-weight:600">${document.getElementById('editTo').value}</div>
          <div style="color:#64748b;font-size:10px">${document.getElementById('editToAddr').value}</div>
        </div>
        <div>
          <div class="live-label">Invoice Date</div>
          <div>${d.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})}</div>
        </div>
        <div>
          <div class="live-label">Due Date</div>
          <div>${dueDate.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})}</div>
        </div>
      </div>
      <table class="live-table">
        <thead><tr><th>Description</th><th class="text-right">Qty</th><th class="text-right">Rate</th><th class="text-right">Amount</th></tr></thead>
        <tbody>${itemsHtml}</tbody>
      </table>
      <div class="live-totals">
        <div class="live-totals-box">
          <div class="live-totals-row"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
          <div class="live-totals-row"><span>Tax (${taxRate}%)</span><span>$${tax.toFixed(2)}</span></div>
          <div class="live-totals-row total"><span>Total</span><span>$${total.toFixed(2)}</span></div>
        </div>
      </div>
      ${notes ? `<div class="live-notes"><strong>Notes:</strong> ${notes}</div>` : ''}
    </div>`;

  document.getElementById('invoicePreviewArea').innerHTML = html;
}

function addToCart(id) {
  if (cart.find(x => x.id === id)) {
    showToast('Already in cart');
    return;
  }
  const t = TEMPLATES.find(x => x.id === id);
  if (!t || t.price === 0) return;
  cart.push(t);
  updateCart();
  showToast(`${t.name} added to cart`);
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  updateCart();
}

function updateCart() {
  const count = document.getElementById('cartCount');
  const items = document.getElementById('cartItems');
  const total = document.getElementById('cartTotal');

  count.textContent = cart.length;
  count.classList.toggle('empty', cart.length === 0);

  if (cart.length === 0) {
    items.innerHTML = '<div class="cart-empty"><p>Your cart is empty</p></div>';
    total.textContent = '$0.00';
    return;
  }

  items.innerHTML = cart.map(t => `
    <div class="cart-item">
      <div class="cart-item-thumb">${createInvoiceMock(t, 'small')}</div>
      <div class="cart-item-info">
        <h4>${t.name}</h4>
        <p>${t.category} • ${t.industry}</p>
        <button class="cart-item-remove" data-id="${t.id}">Remove</button>
      </div>
      <div class="cart-item-price">$${t.price}</div>
    </div>`).join('');

  const sum = cart.reduce((s, t) => s + t.price, 0);
  total.textContent = `$${sum.toFixed(2)}`;

  items.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
  });
}

function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function openCheckout() {
  if (cart.length === 0) {
    showToast('Your cart is empty');
    return;
  }
  closeCart();
  const summary = document.getElementById('checkoutSummary');
  const itemsHtml = cart.map(t => `<div class="summary-item"><span>${t.name}</span><span>$${t.price.toFixed(2)}</span></div>`).join('');
  const total = cart.reduce((s, t) => s + t.price, 0);
  summary.innerHTML = `${itemsHtml}<div class="summary-total"><span>Total</span><span>$${total.toFixed(2)}</span></div>`;
  document.getElementById('checkoutModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  document.getElementById('checkoutModal').classList.remove('active');
  document.body.style.overflow = '';
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

function init() {
  renderTemplates();

  document.querySelectorAll('select, #searchInput').forEach(el => {
    el.addEventListener('input', renderTemplates);
  });

  document.getElementById('searchInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') renderTemplates();
  });

  document.getElementById('cartBtn').addEventListener('click', openCart);
  document.getElementById('cartClose').addEventListener('click', closeCart);
  document.getElementById('cartOverlay').addEventListener('click', closeCart);
  document.getElementById('checkoutBtn').addEventListener('click', openCheckout);
  document.getElementById('modalClose').addEventListener('click', closePreview);
  document.getElementById('editorClose').addEventListener('click', closeEditor);
  document.getElementById('checkoutClose').addEventListener('click', closeCheckout);

  document.getElementById('previewModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closePreview();
  });
  document.getElementById('editorModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeEditor();
  });
  document.getElementById('checkoutModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeCheckout();
  });

  document.querySelectorAll('#editorSidebar input, #editorSidebar textarea').forEach(el => {
    el.addEventListener('input', updateInvoicePreview);
  });

  document.getElementById('addLineItem').addEventListener('click', () => {
    const container = document.getElementById('lineItems');
    const div = document.createElement('div');
    div.className = 'line-item';
    div.innerHTML = '<input type="text" placeholder="Description"><input type="number" placeholder="Qty" value="1" min="1"><input type="number" placeholder="Rate" value="0" min="0">';
    container.appendChild(div);
    div.querySelectorAll('input').forEach(inp => inp.addEventListener('input', updateInvoicePreview));
  });

  document.querySelectorAll('#lineItems .line-item input').forEach(inp => {
    inp.addEventListener('input', updateInvoicePreview);
  });

  document.getElementById('payBtn').addEventListener('click', () => {
    showToast('Payment processed! Check your email for download links.');
    cart = [];
    updateCart();
    closeCheckout();
  });

  document.getElementById('submitForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Application submitted! We\'ll review it within 48 hours.');
    e.target.reset();
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  updateCart();
}

document.addEventListener('DOMContentLoaded', init);
