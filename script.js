// ================================================================
// SUPABASE SETUP
// ================================================================
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = "https://zghtapcdtldnfthfdfjw.supabase.co";
const supabaseKey = 'sb_publishable_HB5cqP48gvhK9uxIyIVMUA_MT2B1CJN'
const supabase = createClient(supabaseUrl, supabaseKey)

// ================================================================
// MENU DATA
// ================================================================
const menuData = [
    { id: 1, name: 'Chicken Karahi', desc: 'Classic tomato‑based karahi with tender chicken & aromatic spices.', category: 'karahi', img: 'https://res.cloudinary.com/hksqkdlah/image/upload/SFS_Chicken_Karahi_001_zpcxz2.jpg', rating: 4.9, prep: '25 min', badge: 'Bestseller', variants: [{ label: '250 gm', price: 450 }, { label: '0.5 kg', price: 850 }, { label: '1 kg', price: 1600 }] },
    { id: 2, name: 'Mutton Karahi', desc: 'Slow‑cooked mutton in rich gravy with ginger, garlic & green chillies.', category: 'karahi', img: 'https://binoriarestaurant.com/wp-content/uploads/2023/08/Mutton-Makhni-karahi.jpg', rating: 4.8, prep: '35 min', badge: "Chef's Special", variants: [{ label: '250 gm', price: 550 }, { label: '0.5 kg', price: 1050 }, { label: '1 kg', price: 2000 }] },
    { id: 3, name: 'Peshawari Karahi', desc: 'Dry‑style karahi with black pepper, coriander & a smoky finish.', category: 'karahi', img: 'https://i.pinimg.com/originals/ce/24/57/ce24577d9837eeec458dd63cd33fc163.jpg', rating: 4.7, prep: '28 min', variants: [{ label: '250 gm', price: 480 }, { label: '0.5 kg', price: 920 }, { label: '1 kg', price: 1750 }] },
    { id: 4, name: 'White Karahi', desc: 'Creamy, mild karahi with yoghurt, cream & a hint of cardamom.', category: 'karahi', img: 'https://binoriarestaurant.com/wp-content/uploads/2023/08/Mutton-White-Karahi.jpg', rating: 4.6, prep: '28 min', badge: 'New', variants: [{ label: '250 gm', price: 460 }, { label: '0.5 kg', price: 880 }, { label: '1 kg', price: 1680 }] },
    { id: 5, name: 'Chicken Biryani', desc: 'Fragrant basmati layered with spiced chicken, fried onions & saffron.', category: 'rice', img: 'https://doabameatshop.ca/wp-content/uploads/2022/12/Muradabadi-chicken-biryani-1200x900-1.jpg', rating: 4.9, prep: '15 min', badge: 'Bestseller', variants: [{ label: '250 gm', price: 350 }, { label: '0.5 kg', price: 650 }, { label: '1 kg', price: 1200 }] },
    { id: 6, name: 'Mutton Biryani', desc: 'Rich mutton biryani with slow‑cooked meat, aromatic spices & mint.', category: 'rice', img: 'https://hapakenya.com/wp-content/uploads/2025/09/Mutton-Biryani-1024x576.jpg', rating: 4.8, prep: '20 min', variants: [{ label: '250 gm', price: 420 }, { label: '0.5 kg', price: 800 }, { label: '1 kg', price: 1500 }] },
    { id: 7, name: 'Vegetable Pulao', desc: 'Light pulao with mixed vegetables, whole spices & a touch of ghee.', category: 'rice', img: 'https://i.pinimg.com/originals/2c/29/f0/2c29f0675f2d67d4643bd0a3fef6e52b.jpg', rating: 4.5, prep: '15 min', variants: [{ label: '250 gm', price: 280 }, { label: '0.5 kg', price: 520 }, { label: '1 kg', price: 950 }] },
    { id: 8, name: 'Fried Rice', desc: 'Egg fried rice with spring onions, carrots, peas & soy sauce.', category: 'rice', img: 'https://www.eatingonadime.com/wp-content/uploads/2022/01/eod-fried-rice-9-2.jpg', rating: 4.4, prep: '12 min', variants: [{ label: '250 gm', price: 250 }, { label: '0.5 kg', price: 480 }, { label: '1 kg', price: 900 }] },
    { id: 9, name: 'Seekh Kabab', desc: 'Minced beef skewers with coriander, green chillies & chaat masala.', category: 'bbq', img: 'https://5.imimg.com/data5/SELLER/Default/2024/10/459030990/DD/BL/DW/19736347/chicken-seekh-kabab-1000x1000.jpg', rating: 4.8, prep: '18 min', badge: 'Popular', variants: [{ label: 'Half Plate (4 pcs)', price: 550 }, { label: 'Full Plate (8 pcs)', price: 1050 }] },
    { id: 10, name: 'Chicken Tikka', desc: 'Boneless chicken marinated in yoghurt, spices & grilled to perfection.', category: 'bbq', img: 'https://www.thespruceeats.com/thmb/Xk_9n119TvarYWFo_IQuMV3gGp4=/1500x1000/filters:fill(auto,1)/chicken-tikka-recipe-1957388-10-5b3fcf6646e0fb0037658a02.jpg', rating: 4.7, prep: '20 min', variants: [{ label: 'Half Plate', price: 600 }, { label: 'Full Plate', price: 1150 }] },
    { id: 11, name: 'Bihari Kabab', desc: 'Tender beef strips marinated in papaya, ginger & garlic, then char‑grilled.', category: 'bbq', img: 'https://i.ytimg.com/vi/D02ex5CCyH0/maxresdefault.jpg', rating: 4.8, prep: '20 min', variants: [{ label: 'Half Plate', price: 650 }, { label: 'Full Plate', price: 1250 }] },
    { id: 12, name: 'Malai Boti', desc: 'Creamy chicken boti with cheese, cream & a hint of cardamom.', category: 'bbq', img: 'https://www.dirtyapronrecipes.com/wp-content/uploads/2017/04/chicken-malai-boti.jpg', rating: 4.9, prep: '20 min', badge: "Chef's Special", variants: [{ label: 'Half Plate', price: 620 }, { label: 'Full Plate', price: 1200 }] },
    { id: 13, name: 'Chicken Handi', desc: 'Traditional handi‑cooked chicken in a rich, spiced gravy.', category: 'handi', img: 'https://cdn-food.tribune.com.pk/gallery/0Texvcqo500mya1lcLJiBtYjJOJ6awFofCRFnxGh.jpeg', rating: 4.7, prep: '25 min', variants: [{ label: '0.5 kg', price: 800 }, { label: '1 kg', price: 1500 }] },
    { id: 14, name: 'Mutton Handi', desc: 'Tender mutton slow‑cooked in a handi with aromatic whole spices.', category: 'handi', img: 'https://images.herzindagi.info/image/2022/Sep/list-of-places-to-eat-handi-mutton-in-patna.jpg', rating: 4.8, prep: '35 min', variants: [{ label: '0.5 kg', price: 950 }, { label: '1 kg', price: 1800 }] },
    { id: 15, name: 'Daal Handi', desc: 'Creamy yellow daal tempered with garlic, ginger & green chillies.', category: 'handi', img: 'https://nanikitchens.com/wp-content/uploads/2025/05/Healthy-Curry-Daal-4.jpg', rating: 4.6, prep: '20 min', variants: [{ label: '0.5 kg', price: 450 }, { label: '1 kg', price: 850 }] },
    { id: 16, name: 'Mix Vegetable Handi', desc: 'Assorted vegetables cooked in a mildly spiced handi gravy.', category: 'handi', img: 'https://static.india.com/wp-content/uploads/2024/12/FEATURE-2024-12-08T153033.031.jpg', rating: 4.5, prep: '20 min', variants: [{ label: '0.5 kg', price: 500 }, { label: '1 kg', price: 950 }] },
    { id: 17, name: 'Butter Naan', desc: 'Soft tandoori naan brushed with butter – perfect with any curry.', category: 'naan', img: 'https://maharajaroyaldining.com/wp-content/uploads/2024/05/Butter-Naan-2.webp', rating: 4.9, prep: '8 min', variants: [{ label: '1 piece', price: 60 }, { label: '2 pieces', price: 110 }, { label: '4 pieces', price: 200 }] },
    { id: 18, name: 'Garlic Naan', desc: 'Naan topped with garlic, coriander & a drizzle of butter.', category: 'naan', img: 'https://tastefullygrace.com/wp-content/uploads/2023/01/Garlic-Naan-Bread-Recipe-1-scaled.jpg', rating: 4.9, prep: '8 min', variants: [{ label: '1 piece', price: 70 }, { label: '2 pieces', price: 130 }, { label: '4 pieces', price: 240 }] },
    { id: 19, name: 'Cheese Naan', desc: 'Naan stuffed with mozzarella and cheddar, baked until golden.', category: 'naan', img: 'https://guruindiancuisine.com/wp-content/uploads/2022/04/Cheese-Naan.png', rating: 4.8, prep: '10 min', badge: 'Popular', variants: [{ label: '1 piece', price: 90 }, { label: '2 pieces', price: 170 }, { label: '4 pieces', price: 320 }] },
    { id: 20, name: 'Soft Drink (330 ml)', desc: 'Choose from Pepsi, 7‑Up, or Coca‑Cola.', category: 'naan', img: 'https://media.istockphoto.com/id/483857603/photo/pepsi-coca-cola-and-7-up-can.jpg?s=612x612&w=0&k=20&c=LiW4ePRm8v5XzhIkjzqbSzKxVW_EhIbeh3uBEfqM5kU=', rating: 4.6, prep: '2 min', variants: [{ label: '1 can', price: 120 }, { label: '2 cans', price: 230 }, { label: '4 cans', price: 440 }] },
    { id: 21, name: 'Garden Salad', desc: 'Fresh mix of lettuce, cucumber, tomatoes, onions & lemon.', category: 'naan', img: 'https://static01.nyt.com/images/2024/08/13/multimedia/LH-Garden-Saladrex-tlqm/LH-Garden-Saladrex-tlqm-jumbo.jpg', rating: 4.5, prep: '5 min', variants: [{ label: 'Small (serves 1)', price: 100 }, { label: 'Large (serves 2‑3)', price: 180 }] }
];

// ================================================================
// CONSTANTS
// ================================================================
const DELIVERY_FEE = 50;
const FREE_DELIVERY_THRESHOLD = 2000;
const STORAGE_KEY = 'dk804_state_v1';
const LAST_ORDER_ID_KEY = 'dk804_last_order_id';
const ACTIVE_ORDER_KEY = 'dk804_active_order_v1';
const NOTIF_DISMISSED_KEY = 'dk804_notif_dismissed_v1';
const ORDER_DB_ID_KEY = 'dk804_last_order_db_id';
const RESTAURANT_WHATSAPP = '923199608782';

const CATEGORY_LABELS = {
    all: 'All Items',
    karahi: 'Karahi',
    rice: 'Rice',
    bbq: 'BBQ',
    handi: 'Handi',
    naan: 'Naan / Drinks / Salad'
};

// ================================================================
// STATE
// ================================================================
const state = {
    category: 'all',
    search: '',
    sort: 'default',
    cart: [],
    favorites: [],
    orderType: 'delivery',
    payment: 'cod'
};

let selectedItemId = null;
let selectedVariantIndex = null;
let variantQty = 1;

// ⬅️ Moved here so it's declared before use in the place-order handler
let lastPlacedOrderSnapshot = null;

// ================================================================
// DOM REFS
// ================================================================
const grid = document.getElementById('menuGrid');
const filterTabs = document.getElementById('filterTabs');
const resultsInfo = document.getElementById('resultsInfo');
const noResults = document.getElementById('noResults');
const resetFiltersBtn = document.getElementById('resetFilters');

const menuSearch = document.getElementById('menuSearch');
const clearSearch = document.getElementById('clearSearch');
const menuSort = document.getElementById('menuSort');

const cartSidebar = document.getElementById('cartSidebar');
const cartBody = document.getElementById('cartBody');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const cartToggle = document.getElementById('cartToggle');
const cartClose = document.getElementById('cartClose');
const checkoutBtn = document.getElementById('checkoutBtn');

const variantModal = document.getElementById('variantModal');
const variantGrid = document.getElementById('variantGrid');
const variantItemName = document.getElementById('variantItemName');
const variantItemImg = document.getElementById('variantItemImg');
const variantItemDesc = document.getElementById('variantItemDesc');
const variantTags = document.getElementById('variantTags');
const variantModalClose = document.getElementById('variantModalClose');
const variantCancel = document.getElementById('variantCancel');
const variantAddBtn = document.getElementById('variantAddBtn');
const vQtyMinus = document.getElementById('vQtyMinus');
const vQtyPlus = document.getElementById('vQtyPlus');
const vQtyValue = document.getElementById('vQtyValue');

const checkoutModal = document.getElementById('checkoutModal');
const checkoutItems = document.getElementById('checkoutItems');
const checkoutSubtotal = document.getElementById('checkoutSubtotal');
const checkoutTotal = document.getElementById('checkoutTotal');
const deliveryFeeVal = document.getElementById('deliveryFeeVal');
const freeDeliveryBar = document.getElementById('freeDeliveryBar');
const freeDeliveryText = document.getElementById('freeDeliveryText');
const orderTypeToggle = document.getElementById('orderTypeToggle');
const paymentMethods = document.getElementById('paymentMethods');
const checkoutModalClose = document.getElementById('checkoutModalClose');
const placeOrderBtn = document.getElementById('placeOrderBtn');

const successModal = document.getElementById('successModal');
const successName = document.getElementById('successName');
const successOrderId = document.getElementById('successOrderId');
const successEta = document.getElementById('successEta');
const successClose = document.getElementById('successClose');

const trackOrderBtn = document.getElementById('trackOrderBtn');
const trackModal = document.getElementById('trackModal');
const trackModalClose = document.getElementById('trackModalClose');
const trackInput = document.getElementById('trackInput');
const trackSearchBtn = document.getElementById('trackSearchBtn');
const trackMsg = document.getElementById('trackMsg');
const trackResult = document.getElementById('trackResult');
const trackResultId = document.getElementById('trackResultId');
const trackResultStatus = document.getElementById('trackResultStatus');

const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');
const toastIcon = document.getElementById('toastIcon');

const backToTopBtn = document.getElementById('backToTop');
const scrollProgress = document.getElementById('scrollProgress');
const preloader = document.getElementById('preloader');
const mainNav = document.getElementById('mainNav');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// ================================================================
// PERSISTENCE
// ================================================================
function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            cart: state.cart,
            favorites: state.favorites
        }));
    } catch (e) {}
}

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed.cart)) state.cart = parsed.cart;
        if (Array.isArray(parsed.favorites)) state.favorites = parsed.favorites;
    } catch (e) {}
}

// ================================================================
// HELPERS
// ================================================================
const formatRs = (n) => `Rs. ${Number(n).toLocaleString('en-PK')}`;

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
}

function minPrice(item) {
    return Math.min(...item.variants.map(v => v.price));
}

// ================================================================
// RENDER MENU
// ================================================================
function getFilteredItems() {
    let items = state.category === 'all'
        ? [...menuData]
        : menuData.filter(m => m.category === state.category);

    const q = state.search.trim().toLowerCase();
    if (q) {
        items = items.filter(m =>
            m.name.toLowerCase().includes(q) ||
            m.desc.toLowerCase().includes(q) ||
            m.category.toLowerCase().includes(q)
        );
    }

    switch (state.sort) {
        case 'price-asc': items.sort((a, b) => minPrice(a) - minPrice(b)); break;
        case 'price-desc': items.sort((a, b) => minPrice(b) - minPrice(a)); break;
        case 'name': items.sort((a, b) => a.name.localeCompare(b.name)); break;
    }
    return items;
}

function renderMenu() {
    const items = getFilteredItems();

    if (state.search || state.category !== 'all') {
        resultsInfo.innerHTML =
            `Showing <strong>${items.length}</strong> item${items.length === 1 ? '' : 's'}` +
            (state.category !== 'all' ? ` in <strong>${CATEGORY_LABELS[state.category]}</strong>` : '') +
            (state.search ? ` for “<strong>${escapeHtml(state.search)}</strong>”` : '');
    } else {
        resultsInfo.innerHTML = `<strong>${items.length}</strong> dishes available today`;
    }

    if (!items.length) {
        grid.innerHTML = '';
        noResults.hidden = false;
        return;
    }
    noResults.hidden = true;

    grid.innerHTML = items.map((item, i) => {
        const fav = state.favorites.includes(item.id);
        return `
        <article class="menu-item reveal" data-id="${item.id}" style="transition-delay:${Math.min(i * 45, 400)}ms">
            <div class="item-media">
                <img src="${item.img}" alt="${escapeHtml(item.name)} at Dastarkhwan 804, Rawalpindi" loading="lazy"
                    onerror="this.src='https://placehold.co/400x250/e3f3e8/4f9c6b?text=${encodeURIComponent(item.name.slice(0, 2))}'" />
                ${item.badge ? `<span class="item-badge">${escapeHtml(item.badge)}</span>` : ''}
                <button class="item-fav ${fav ? 'active' : ''}" data-fav="${item.id}" aria-label="Save to favourites">
                    <i class="${fav ? 'fas' : 'far'} fa-heart"></i>
                </button>
            </div>
            <div class="item-header">
                <span class="item-name">${escapeHtml(item.name)}</span>
                <span class="item-price-from">from ${formatRs(minPrice(item))}</span>
            </div>
            <p class="item-desc">${escapeHtml(item.desc)}</p>
            <div class="item-meta">
                <span><i class="far fa-clock"></i> ${item.prep}</span>
                <span><i class="fas fa-star"></i> ${item.rating}</span>
                <span><i class="fas fa-sliders"></i> ${item.variants.length} sizes</span>
            </div>
            <div class="item-actions">
                <button class="btn-select" data-id="${item.id}">
                    <i class="fas fa-utensils"></i> Select Options
                </button>
            </div>
        </article>`;
    }).join('');

    grid.querySelectorAll('.btn-select').forEach(btn => {
        btn.addEventListener('click', () => openVariantModal(parseInt(btn.dataset.id)));
    });
    grid.querySelectorAll('.item-fav').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(parseInt(btn.dataset.fav), btn);
        });
    });

    observeReveals();
}

// ================================================================
// FAVOURITES
// ================================================================
function toggleFavorite(id, btnEl) {
    const idx = state.favorites.indexOf(id);
    const item = menuData.find(m => m.id === id);

    if (idx > -1) {
        state.favorites.splice(idx, 1);
        btnEl.classList.remove('active');
        btnEl.innerHTML = '<i class="far fa-heart"></i>';
        showToast(`Removed ${item.name} from favourites`, 'info');
    } else {
        state.favorites.push(id);
        btnEl.classList.add('active');
        btnEl.innerHTML = '<i class="fas fa-heart"></i>';
        showToast(`${item.name} saved to favourites ❤️`, 'success');
    }
    saveState();
}

// ================================================================
// FILTER / SEARCH
// ================================================================
filterTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.category = btn.dataset.cat;
    renderMenu();
});

let searchDebounce;
menuSearch.addEventListener('input', (e) => {
    const val = e.target.value;
    clearSearch.classList.toggle('show', val.length > 0);
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(() => {
        state.search = val;
        renderMenu();
    }, 180);
});

clearSearch.addEventListener('click', () => {
    menuSearch.value = '';
    state.search = '';
    clearSearch.classList.remove('show');
    renderMenu();
    menuSearch.focus();
});

menuSort.addEventListener('change', (e) => {
    state.sort = e.target.value;
    renderMenu();
});

resetFiltersBtn.addEventListener('click', () => {
    state.category = 'all';
    state.search = '';
    state.sort = 'default';
    menuSearch.value = '';
    menuSort.value = 'default';
    clearSearch.classList.remove('show');
    document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.cat === 'all');
    });
    renderMenu();
});

// ================================================================
// VARIANT MODAL
// ================================================================
function openVariantModal(itemId) {
    const item = menuData.find(m => m.id === itemId);
    if (!item) return;

    selectedItemId = itemId;
    selectedVariantIndex = null;
    variantQty = 1;

    variantItemName.innerHTML = `<i class="fas fa-utensils"></i> ${escapeHtml(item.name)}`;
    variantItemImg.src = item.img;
    variantItemImg.alt = item.name;
    variantItemImg.onerror = function () {
        this.src = 'https://placehold.co/200x200/e3f3e8/4f9c6b?text=' + encodeURIComponent(item.name.slice(0, 2));
    };
    variantItemDesc.textContent = item.desc;

    const tags = [];
    if (item.badge) tags.push(item.badge);
    tags.push(`★ ${item.rating}`);
    tags.push(`⏱ ${item.prep}`);
    variantTags.innerHTML = tags.map(t => `<span class="variant-tag">${escapeHtml(t)}</span>`).join('');

    variantGrid.innerHTML = item.variants.map((v, idx) => `
        <button class="variant-btn" data-variant-index="${idx}" type="button">
            <span>${escapeHtml(v.label)}</span>
            <span class="variant-price">${formatRs(v.price)}</span>
        </button>
    `).join('');

    variantGrid.querySelectorAll('.variant-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            variantGrid.querySelectorAll('.variant-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedVariantIndex = parseInt(btn.dataset.variantIndex);
            updateVariantAddBtn();
        });
    });

    vQtyValue.textContent = variantQty;
    updateVariantAddBtn();
    variantModal.classList.add('active');
    document.body.classList.add('no-scroll');
}

function updateVariantAddBtn() {
    if (selectedVariantIndex === null || selectedItemId === null) {
        variantAddBtn.disabled = true;
        variantAddBtn.innerHTML = `<i class="fas fa-cart-plus"></i><span>Select a size</span>`;
        return;
    }
    const item = menuData.find(m => m.id === selectedItemId);
    const variant = item.variants[selectedVariantIndex];
    const total = variant.price * variantQty;
    variantAddBtn.disabled = false;
    variantAddBtn.innerHTML = `<i class="fas fa-cart-plus"></i><span>Add · ${formatRs(total)}</span>`;
}

vQtyMinus.addEventListener('click', () => {
    if (variantQty > 1) { variantQty--; vQtyValue.textContent = variantQty; updateVariantAddBtn(); }
});
vQtyPlus.addEventListener('click', () => {
    if (variantQty < 20) { variantQty++; vQtyValue.textContent = variantQty; updateVariantAddBtn(); }
});

variantAddBtn.addEventListener('click', () => {
    if (selectedVariantIndex === null) return;
    const item = menuData.find(m => m.id === selectedItemId);
    const variant = item.variants[selectedVariantIndex];
    addToCart(item, variant, variantQty, variantAddBtn);
    closeVariantModal();
});

function closeVariantModal() {
    variantModal.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

variantModalClose.addEventListener('click', closeVariantModal);
variantCancel.addEventListener('click', closeVariantModal);
variantModal.addEventListener('click', (e) => { if (e.target === variantModal) closeVariantModal(); });

// ================================================================
// CART
// ================================================================
function addToCart(item, variant, qty = 1, sourceEl = null) {
    const existing = state.cart.find(c => c.id === item.id && c.variantLabel === variant.label);
    if (existing) {
        existing.qty += qty;
    } else {
        state.cart.push({ id: item.id, name: item.name, img: item.img, variantLabel: variant.label, price: variant.price, qty });
    }
    saveState();
    updateCartUI();
    if (sourceEl) flyToCart(sourceEl, item.img);
    cartCount.classList.remove('bump');
    void cartCount.offsetWidth;
    cartCount.classList.add('bump');
    showToast(`${item.name} (${variant.label}) × ${qty} added!`, 'success');
}

function removeFromCart(index) {
    const removed = state.cart[index];
    state.cart.splice(index, 1);
    saveState();
    updateCartUI();
    if (removed) showToast(`${removed.name} removed`, 'info');
}

function updateQty(index, delta) {
    const item = state.cart[index];
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) removeFromCart(index);
    else { saveState(); updateCartUI(); }
}

function getTotal() { return state.cart.reduce((sum, item) => sum + item.price * item.qty, 0); }
function getItemCount() { return state.cart.reduce((sum, item) => sum + item.qty, 0); }

function getDeliveryFee() {
    if (state.orderType !== 'delivery') return 0;
    if (getTotal() >= FREE_DELIVERY_THRESHOLD) return 0;
    return DELIVERY_FEE;
}

function updateCartUI() {
    const count = getItemCount();
    cartCount.textContent = count;

    if (state.cart.length === 0) {
        cartBody.innerHTML = `<p class="empty-cart"><i class="fas fa-bowl-food"></i>Your cart is empty.</p>`;
        cartTotal.textContent = 'Total: Rs. 0';
        return;
    }

    cartBody.innerHTML = state.cart.map((item, idx) => `
        <div class="cart-item">
            <img src="${item.img}" alt="${escapeHtml(item.name)}"
                 onerror="this.src='https://placehold.co/60/e3f3e8/4f9c6b?text=${encodeURIComponent(item.name.slice(0, 2))}'" />
            <div class="cart-item-info">
                <div class="cart-item-name">${escapeHtml(item.name)}</div>
                <div class="cart-item-detail">${escapeHtml(item.variantLabel)} · ${formatRs(item.price)}</div>
                <div class="cart-item-line">${formatRs(item.price * item.qty)}</div>
            </div>
            <div class="cart-item-qty">
                <button data-idx="${idx}" data-delta="-1" aria-label="Decrease">−</button>
                <span>${item.qty}</span>
                <button data-idx="${idx}" data-delta="1" aria-label="Increase">+</button>
                <button class="cart-item-remove" data-idx="${idx}" aria-label="Remove"><i class="fas fa-trash-alt"></i></button>
            </div>
        </div>
    `).join('');

    cartBody.querySelectorAll('.cart-item-qty button[data-delta]').forEach(btn => {
        btn.addEventListener('click', () => updateQty(parseInt(btn.dataset.idx), parseInt(btn.dataset.delta)));
    });
    cartBody.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.idx)));
    });

    cartTotal.textContent = `Total: ${formatRs(getTotal())}`;
}

// ================================================================
// TOAST
// ================================================================
let toastTimer;
function showToast(msg, type = 'success') {
    toastMsg.textContent = msg;
    toast.classList.remove('success', 'error', 'info');
    toast.classList.add(type);
    const icons = {
        success: '<i class="fas fa-check-circle" id="toastIcon"></i>',
        error: '<i class="fas fa-circle-exclamation" id="toastIcon"></i>',
        info: '<i class="fas fa-circle-info" id="toastIcon"></i>'
    };
    toastIcon.outerHTML = icons[type];
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

// ================================================================
// FLY TO CART
// ================================================================
function flyToCart(sourceEl, imgUrl) {
    const start = sourceEl.getBoundingClientRect();
    const end = cartToggle.getBoundingClientRect();
    const flyer = document.createElement('div');
    flyer.className = 'flyer';
    flyer.style.backgroundImage = `url(${imgUrl})`;
    flyer.style.left = (start.left + start.width / 2 - 28) + 'px';
    flyer.style.top = (start.top + start.height / 2 - 28) + 'px';
    document.body.appendChild(flyer);
    const dx = (end.left + end.width / 2) - (start.left + start.width / 2);
    const dy = (end.top + end.height / 2) - (start.top + start.height / 2);
    requestAnimationFrame(() => {
        flyer.style.transform = `translate(${dx}px, ${dy}px) scale(0.15)`;
        flyer.style.opacity = '0.2';
    });
    setTimeout(() => flyer.remove(), 900);
}

// ================================================================
// CART SIDEBAR
// ================================================================
cartToggle.addEventListener('click', () => {
    cartSidebar.classList.toggle('active');
    document.body.classList.toggle('no-scroll', cartSidebar.classList.contains('active'));
});
cartClose.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
    document.body.classList.remove('no-scroll');
});
document.addEventListener('click', (e) => {
    if (cartSidebar.classList.contains('active') &&
        !cartSidebar.contains(e.target) &&
        !cartToggle.contains(e.target)) {
        cartSidebar.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
});

// ================================================================
// CHECKOUT MODAL
// ================================================================
function renderCheckout() {
    checkoutItems.innerHTML = state.cart.map(item => `
        <div class="checkout-item">
            <span>${escapeHtml(item.name)}<em>(${escapeHtml(item.variantLabel)})</em> × ${item.qty}</span>
            <span>${formatRs(item.price * item.qty)}</span>
        </div>
    `).join('');

    const subtotal = getTotal();
    const fee = getDeliveryFee();
    const total = subtotal + fee;

    checkoutSubtotal.textContent = formatRs(subtotal);
    deliveryFeeVal.textContent = fee === 0 ? 'Free' : formatRs(fee);
    checkoutTotal.textContent = formatRs(total);

    const remaining = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal);
    const pct = Math.min(100, (subtotal / FREE_DELIVERY_THRESHOLD) * 100);

    if (state.orderType !== 'delivery') {
        freeDeliveryBar.style.width = '100%';
        freeDeliveryText.innerHTML = state.orderType === 'pickup'
            ? '<i class="fas fa-store"></i> Pickup selected — no delivery charges.'
            : '<i class="fas fa-chair"></i> Dine‑in selected — no delivery charges.';
    } else if (remaining > 0) {
        freeDeliveryBar.style.width = pct + '%';
        freeDeliveryText.innerHTML = `Add <strong>${formatRs(remaining)}</strong> more for FREE delivery`;
    } else {
        freeDeliveryBar.style.width = '100%';
        freeDeliveryText.innerHTML = '🎉 You\'ve unlocked <strong>FREE delivery</strong>!';
    }
}

checkoutBtn.addEventListener('click', () => {
    if (state.cart.length === 0) {
        showToast('Your cart is empty! Add some items first.', 'error');
        return;
    }
    updateCheckoutFieldsForOrderType();
    renderCheckout();

    const deliveryTimeInput = document.getElementById('deliveryTime');
    if (deliveryTimeInput && state.orderType !== 'dinein' && !deliveryTimeInput.value) {
        const d = new Date(Date.now() + 45 * 60 * 1000);
        const pad = (n) => String(n).padStart(2, '0');
        deliveryTimeInput.value = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
    }

    checkoutModal.classList.add('active');
    cartSidebar.classList.remove('active');
    document.body.classList.add('no-scroll');
});

function updateCheckoutFieldsForOrderType() {
    const addressGroup = document.getElementById('custAddressGroup');
    const addressLabel = document.getElementById('custAddressLabel');
    const addressField = document.getElementById('custAddress');
    const timeGroup = document.getElementById('deliveryTimeGroup');
    const timeLabel = document.getElementById('deliveryTimeLabel');
    const timeField = document.getElementById('deliveryTime');
    const type = state.orderType;

    if (type === 'delivery') {
        if (addressGroup) addressGroup.style.display = '';
        if (timeGroup) timeGroup.style.display = '';
        if (addressLabel) addressLabel.innerHTML = 'Delivery Address <span class="required">*</span>';
        if (timeLabel) timeLabel.textContent = 'Delivery Time';
        if (addressField) addressField.placeholder = 'Street, sector, city';
    } else if (type === 'pickup') {
        if (addressGroup) addressGroup.style.display = 'none';
        if (timeGroup) timeGroup.style.display = '';
        if (timeLabel) timeLabel.textContent = 'Preferred Pickup Time';
        if (addressField) addressField.value = '';
    } else if (type === 'dinein') {
        if (addressGroup) addressGroup.style.display = 'none';
        if (timeGroup) timeGroup.style.display = 'none';
        if (addressField) addressField.value = '';
        if (timeField) timeField.value = '';
    }
}

function closeCheckoutModal() {
    checkoutModal.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

checkoutModalClose.addEventListener('click', closeCheckoutModal);
checkoutModal.addEventListener('click', (e) => { if (e.target === checkoutModal) closeCheckoutModal(); });

orderTypeToggle.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    orderTypeToggle.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.orderType = btn.dataset.type;
    updateCheckoutFieldsForOrderType();
    renderCheckout();
});

paymentMethods.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    paymentMethods.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.payment = btn.dataset.pay;
});

// ================================================================
// PLACE ORDER
// ================================================================
placeOrderBtn.addEventListener('click', async () => {

    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();
    const deliveryTime = document.getElementById('deliveryTime').value || '';
    const note = document.getElementById('orderNote').value.trim();

    if (!name) { showToast('Please enter your name.', 'error'); document.getElementById('custName').focus(); return; }
    if (!phone || phone.replace(/\D/g, '').length < 10) { showToast('Please enter a valid phone number.', 'error'); document.getElementById('custPhone').focus(); return; }
    if (state.orderType === 'delivery' && !address) { showToast('Please enter your delivery address.', 'error'); document.getElementById('custAddress').focus(); return; }
    if (state.cart.length === 0) { showToast('Your cart is empty!', 'error'); return; }

    placeOrderBtn.disabled = true;
    placeOrderBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Placing Order...`;

    const subtotal = getTotal();
    const fee = getDeliveryFee();
    const total = subtotal + fee;

    // Snapshot BEFORE clearing cart
    const cartSnapshot = state.cart.map(i => ({ ...i }));
    const orderRef = 'DK804-' + String(Date.now()).slice(-6);

    lastPlacedOrderSnapshot = {
        ref: orderRef,
        name,
        phone,
        type: state.orderType,
        address: state.orderType === 'delivery' ? address : '',
        deliveryTime,
        note,
        items: cartSnapshot,
        total,
        payment: state.payment
    };

    const orderData = {
        customer_name: name,
        customer_phone: phone,
        customer_location: address || '—',
        items: JSON.stringify(cartSnapshot),
        total_amount: total,
        status: 'pending',
        order_type: state.orderType,
        order_note: note || null,
        delivery_time: deliveryTime || null,
        payment_method: state.payment
    };

    console.log('📤 Sending order to Supabase:', orderData);

    const timeoutMs = 15000;
    const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Request timed out after 15 seconds. Check your internet connection.')), timeoutMs)
    );

    try {
        const insertPromise = supabase.from('orders').insert([orderData]).select().single();
        const result = await Promise.race([insertPromise, timeoutPromise]);

        console.log('📥 Supabase response:', result);

        if (result.error) throw new Error(result.error.message || 'Database rejected the order.');
        if (!result.data) throw new Error('Order was not saved. Check RLS policies on the orders table.');

        // ---- SUCCESS ----
        try {
            localStorage.setItem(LAST_ORDER_ID_KEY, orderRef);
            if (result.data && result.data.id) {
                localStorage.setItem(ORDER_DB_ID_KEY, String(result.data.id));
            }
        } catch (e) {}

        state.cart = [];
        saveState();
        updateCartUI();
        closeCheckoutModal();

        document.getElementById('custName').value = '';
        document.getElementById('custPhone').value = '';
        document.getElementById('custAddress').value = '';
        document.getElementById('deliveryTime').value = '';
        document.getElementById('orderNote').value = '';
        document.querySelectorAll('.note-chip').forEach(c => c.classList.remove('active'));

        placeOrderBtn.disabled = false;
        placeOrderBtn.innerHTML = `<i class="fas fa-check"></i> Place Order`;

        successName.textContent = name.split(' ')[0];
        successOrderId.textContent = orderRef;
        successEta.textContent = state.orderType === 'delivery' ? '30–40 min' : state.orderType === 'pickup' ? '15–20 min' : '10–15 min';

        saveActiveOrder(orderRef);
        startOrderStatusPolling();
        setTimeout(showNotifBanner, 1200);

        successModal.classList.add('active');
        document.body.classList.add('no-scroll');

        showToast('Order placed successfully! 🎉', 'success');

    } catch (err) {
        console.error('❌ Order failed:', err);

        let errorMsg = err?.message || 'Unknown error';
        let hint = '';
        const lower = String(errorMsg).toLowerCase();

        if (lower.includes('timed out')) {
            hint = '\n\n• Check your internet connection\n• Verify the Supabase URL';
        } else if (lower.includes('row-level security') || lower.includes('rls') || lower.includes('permission')) {
            hint = '\n\n• Supabase → Authentication → Policies → orders\n• Add an INSERT policy for the "anon" role';
        } else if (lower.includes('column') && lower.includes('order_type')) {
            hint = '\n\n• Run: ALTER TABLE orders ADD COLUMN order_type TEXT DEFAULT \'delivery\';';
        } else if (lower.includes('does not exist') || lower.includes('relation')) {
            hint = '\n\n• The "orders" table might not exist in Supabase';
        }

        showToast('Could not place your order. See popup for details.', 'error');
        alert(`❌ Order failed:\n\n${errorMsg}${hint}\n\nOpen console (F12) for full details.`);

        placeOrderBtn.disabled = false;
        placeOrderBtn.innerHTML = `<i class="fas fa-check"></i> Place Order`;
    }
});

successClose.addEventListener('click', () => {
    successModal.classList.remove('active');
    document.body.classList.remove('no-scroll');
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
});

successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
        successModal.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
});

// ================================================================
// ESCAPE KEY
// ================================================================
document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (successModal.classList.contains('active')) {
        successModal.classList.remove('active');
        document.body.classList.remove('no-scroll');
    } else if (checkoutModal.classList.contains('active')) {
        closeCheckoutModal();
    } else if (variantModal.classList.contains('active')) {
        closeVariantModal();
    } else if (cartSidebar.classList.contains('active')) {
        cartSidebar.classList.remove('active');
        document.body.classList.remove('no-scroll');
    } else if (trackModal && trackModal.classList.contains('active')) {
        closeTrackModal();
    }
});

// ================================================================
// REVEAL ON SCROLL
// ================================================================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

function observeReveals() {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
        revealObserver.observe(el);
    });
}

// ================================================================
// NAV SCROLL
// ================================================================
const sections = document.querySelectorAll('section[id], footer[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

function onScroll() {
    const y = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress.style.width = (docHeight > 0 ? (y / docHeight) * 100 : 0) + '%';
    mainNav.classList.toggle('scrolled', y > 30);
    backToTopBtn.classList.toggle('show', y > 500);

    let current = '';
    sections.forEach(sec => { if (y >= sec.offsetTop - 140) current = sec.id; });
    navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
}
window.addEventListener('scroll', onScroll, { passive: true });

// ================================================================
// HAMBURGER
// ================================================================
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
    });
});

// ================================================================
// BACK TO TOP
// ================================================================
backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ================================================================
// INIT
// ================================================================
function init() {
    loadState();
    updateCartUI();
    onScroll();
    renderMenu();
    observeReveals();

    const hidePreloader = () => {
        if (preloader && !preloader.classList.contains('hide')) {
            preloader.classList.add('hide');
        }
    };
    window.addEventListener('load', hidePreloader);
    setTimeout(hidePreloader, 500);
    if (document.readyState === 'complete') hidePreloader();
}

init();

// ════════════════════════════════════════════════════════════════
// FEATURE 13 — ORDER NOTE QUICK-TAP CHIPS
// ════════════════════════════════════════════════════════════════
const noteChips = document.getElementById('noteChips');
const orderNoteField = document.getElementById('orderNote');

if (noteChips && orderNoteField) {
    noteChips.querySelectorAll('.note-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const text = chip.dataset.note;
            const current = orderNoteField.value.trim();
            const isActive = chip.classList.contains('active');

            if (isActive) {
                chip.classList.remove('active');
                const parts = current.split(',').map(p => p.trim()).filter(p => p && p !== text);
                orderNoteField.value = parts.join(', ');
            } else {
                chip.classList.add('active');
                if (!current) orderNoteField.value = text;
                else if (!current.includes(text)) orderNoteField.value = current + ', ' + text;
            }
        });
    });

    orderNoteField.addEventListener('input', () => {
        const value = orderNoteField.value.toLowerCase();
        noteChips.querySelectorAll('.note-chip').forEach(chip => {
            const note = chip.dataset.note.toLowerCase();
            chip.classList.toggle('active', value.includes(note));
        });
    });
}

// ════════════════════════════════════════════════════════════════
// FEATURE 2 — PUSH NOTIFICATIONS
// ════════════════════════════════════════════════════════════════
const supportsNotifications = 'Notification' in window;
const notifBanner = document.getElementById('notifBanner');
const notifBannerTitle = document.getElementById('notifBannerTitle');
const notifBannerMsg = document.getElementById('notifBannerMsg');
const notifBannerIcon = document.getElementById('notifBannerIcon');
const notifBannerActions = document.getElementById('notifBannerActions');
const notifAllowBtn = document.getElementById('notifAllowBtn');
const notifDismissBtn = document.getElementById('notifDismissBtn');

const isSecureContext = window.isSecureContext;

function getBrowserName() {
    const ua = navigator.userAgent;
    if (ua.includes('Edg/')) return 'Edge';
    if (ua.includes('Chrome') && !ua.includes('Edg/')) return 'Chrome';
    if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari';
    if (ua.includes('Firefox')) return 'Firefox';
    return 'your browser';
}

function showDeniedInstructions() {
    const browser = getBrowserName();

    if (notifBannerTitle) notifBannerTitle.textContent = '🔕 Notifications are blocked';
    if (notifBannerIcon) {
        notifBannerIcon.innerHTML = '<i class="fas fa-bell-slash" style="color:#e88462;"></i>';
    }

    let steps = '';
    if (browser === 'Safari') {
        steps = 'Safari → Settings → Websites → Notifications → find this site → Allow';
    } else if (browser === 'Firefox') {
        steps = 'Click the 🔒 lock icon → Clear cookies & site data → reload this page';
    } else {
        steps = 'Click the 🔒 lock icon in the address bar → Notifications → change to "Allow" → reload';
    }

    if (notifBannerMsg) {
        notifBannerMsg.innerHTML = `
            <span style="display:block;margin-bottom:6px;">
                You blocked them earlier. To re-enable in <strong>${browser}</strong>:
            </span>
            <span style="display:block;font-size:.72rem;color:var(--ink-600);background:var(--leaf-50);padding:8px 10px;border-radius:8px;line-height:1.5;">
                ${steps}
            </span>
        `;
    }

    if (notifBannerActions) {
        notifBannerActions.innerHTML = `
            <button class="notif-allow-btn" id="notifGotItBtn" style="background:var(--ink-800);">Got it</button>
            <button class="notif-dismiss-btn" id="notifDismissBtn2" aria-label="Dismiss">
                <i class="fas fa-times"></i>
            </button>
        `;

        document.getElementById('notifGotItBtn')?.addEventListener('click', () => {
            hideNotifBanner();
            try { localStorage.setItem(NOTIF_DISMISSED_KEY, 'true'); } catch (e) {}
        });
        document.getElementById('notifDismissBtn2')?.addEventListener('click', () => {
            hideNotifBanner();
            try { localStorage.setItem(NOTIF_DISMISSED_KEY, 'true'); } catch (e) {}
        });
    }

    if (notifBanner) notifBanner.hidden = false;
}

function showInsecureContextMessage() {
    if (notifBannerTitle) notifBannerTitle.textContent = '⚠️ Notifications need HTTPS';
    if (notifBannerIcon) {
        notifBannerIcon.innerHTML = '<i class="fas fa-shield-halved" style="color:#e88462;"></i>';
    }
    if (notifBannerMsg) {
        notifBannerMsg.textContent = 'Notifications only work on secure (HTTPS) sites. Your site appears to be on HTTP or file://.';
    }
    if (notifBannerActions) {
        notifBannerActions.innerHTML = `
            <button class="notif-allow-btn" id="notifGotItBtn" style="background:var(--ink-800);">Got it</button>
            <button class="notif-dismiss-btn" id="notifDismissBtn2" aria-label="Dismiss">
                <i class="fas fa-times"></i>
            </button>
        `;
        document.getElementById('notifGotItBtn')?.addEventListener('click', hideNotifBanner);
        document.getElementById('notifDismissBtn2')?.addEventListener('click', hideNotifBanner);
    }
    if (notifBanner) notifBanner.hidden = false;
}

function showNotifBanner() {
    if (!supportsNotifications) return;

    if (!isSecureContext) {
        if (localStorage.getItem(NOTIF_DISMISSED_KEY) !== 'true') {
            showInsecureContextMessage();
        }
        return;
    }

    if (Notification.permission === 'granted') return;

    if (Notification.permission === 'denied') {
        if (localStorage.getItem(NOTIF_DISMISSED_KEY) !== 'true') {
            showDeniedInstructions();
        }
        return;
    }

    if (localStorage.getItem(NOTIF_DISMISSED_KEY) === 'true') return;

    if (notifBanner) notifBanner.hidden = false;
}

function hideNotifBanner() {
    if (notifBanner) notifBanner.hidden = true;
}

if (notifAllowBtn) {
    notifAllowBtn.addEventListener('click', () => {
        if (!supportsNotifications) {
            showToast('Your browser doesn\'t support notifications.', 'info');
            hideNotifBanner();
            return;
        }
        if (!isSecureContext) {
            showInsecureContextMessage();
            return;
        }
        if (Notification.permission === 'denied') {
            showDeniedInstructions();
            return;
        }
        if (Notification.permission === 'granted') {
            hideNotifBanner();
            showToast('Notifications are already enabled ✓', 'success');
            return;
        }

        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                hideNotifBanner();
                showToast('Notifications enabled! We\'ll keep you updated. 🔔', 'success');

                try {
                    new Notification('Dastarkhwan 804', {
                        body: 'You\'ll now get live order updates here. 🔔',
                        icon: 'https://i.ytimg.com/vi/XbsXpvfHFJU/maxresdefault.jpg',
                        badge: 'https://i.ytimg.com/vi/XbsXpvfHFJU/maxresdefault.jpg'
                    });
                } catch (e) {
                    console.warn('Test notification failed:', e);
                }

                startOrderStatusPolling();
            } else if (permission === 'denied') {
                showDeniedInstructions();
                showToast('Notifications blocked. Follow the steps to unblock.', 'info');
            } else {
                hideNotifBanner();
                showToast('You can enable notifications later from the banner.', 'info');
            }
        }).catch((err) => {
            console.error('Notification permission error:', err);
            showToast('Could not request permission. Try again later.', 'error');
        });
    });
}

if (notifDismissBtn) {
    notifDismissBtn.addEventListener('click', () => {
        hideNotifBanner();
        try { localStorage.setItem(NOTIF_DISMISSED_KEY, 'true'); } catch (e) {}
    });
}

// ════════════════════════════════════════════════════════════════
// FEATURE 2 — ORDER TRACKING (Realtime + Polling fallback)
// ════════════════════════════════════════════════════════════════

let statusPollTimer = null;
let statusRealtimeChannel = null;
let lastKnownStatus = null;

function saveActiveOrder(orderRef) {
    try {
        localStorage.setItem(ACTIVE_ORDER_KEY, JSON.stringify({
            id: orderRef,
            placedAt: Date.now()
        }));
    } catch (e) {}
}

function getActiveOrder() {
    try {
        const raw = localStorage.getItem(ACTIVE_ORDER_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        if (Date.now() - parsed.placedAt > 24 * 60 * 60 * 1000) {
            localStorage.removeItem(ACTIVE_ORDER_KEY);
            localStorage.removeItem(ORDER_DB_ID_KEY);
            return null;
        }
        return parsed;
    } catch (e) { return null; }
}

function getActiveOrderDbId() {
    try { return localStorage.getItem(ORDER_DB_ID_KEY); }
    catch (e) { return null; }
}

function clearActiveOrder() {
    try {
        localStorage.removeItem(ACTIVE_ORDER_KEY);
        localStorage.removeItem(ORDER_DB_ID_KEY);
    } catch (e) {}

    if (statusPollTimer) {
        clearInterval(statusPollTimer);
        statusPollTimer = null;
    }
    if (statusRealtimeChannel) {
        try { supabase.removeChannel(statusRealtimeChannel); } catch (e) {}
        statusRealtimeChannel = null;
    }
    removeLiveBadge();
}

function showBrowserNotification(title, body) {
    showToast(body, 'success');

    if (!supportsNotifications) return;
    if (Notification.permission !== 'granted') return;

    try {
        new Notification(title, {
            body,
            icon: 'https://i.ytimg.com/vi/XbsXpvfHFJU/maxresdefault.jpg',
            badge: 'https://i.ytimg.com/vi/XbsXpvfHFJU/maxresdefault.jpg',
            tag: 'dk804-order-status',
            renotify: true
        });
    } catch (err) {
        console.warn('Native notification failed (fallback toast shown):', err);
    }
}

function statusToMessage(status) {
    switch ((status || '').toLowerCase()) {
        case 'pending':         return { emoji: '⏳', msg: 'Your order was received! Waiting for confirmation.' };
        case 'confirmed':       return { emoji: '✅', msg: 'Your order is confirmed.' };
        case 'preparing':       return { emoji: '🍳', msg: 'Your food is being prepared!' };
        case 'completed':       return { emoji: '🍳', msg: 'Your food is ready!' };
        case 'out_for_delivery':return { emoji: '🚴', msg: 'Your order is on the way!' };
        case 'delivered':       return { emoji: '🎉', msg: 'Your order has been delivered. Enjoy!' };
        case 'cancelled':       return { emoji: '❌', msg: 'Your order was cancelled.' };
        default:                return { emoji: '📦', msg: 'Status updated: ' + status };
    }
}

function updateLiveBadge(status) {
    let badge = document.getElementById('liveOrderBadge');
    if (!badge) {
        badge = document.createElement('button');
        badge.id = 'liveOrderBadge';
        badge.className = 'live-order-badge';
        badge.type = 'button';
        badge.innerHTML = `
            <div class="live-order-badge-icon"><i class="fas fa-utensils"></i></div>
            <div class="live-order-badge-text">
                <strong>Order Status</strong>
                <span id="liveOrderBadgeText">Checking...</span>
            </div>
        `;
        badge.addEventListener('click', () => {
            if (typeof openTrackModal === 'function') openTrackModal();
            else if (trackOrderBtn) trackOrderBtn.click();
        });
        document.body.appendChild(badge);
    }

    const textEl = document.getElementById('liveOrderBadgeText');
    if (textEl) {
        const { emoji, msg } = statusToMessage(status);
        const short = msg.length > 42 ? msg.slice(0, 42) + '…' : msg;
        textEl.textContent = emoji + ' ' + short;
    }
}

function removeLiveBadge() {
    const badge = document.getElementById('liveOrderBadge');
    if (badge) badge.remove();
}

const STATUS_ORDER = ['pending', 'completed', 'out_for_delivery', 'delivered'];

function applyStatusToTracker(status) {
    const s = String(status || '').toLowerCase();

    if (trackResultStatus) {
        trackResultStatus.textContent = formatStatusLabel(s);
    }

    const tracker = document.querySelector('#trackResult .order-tracker');
    if (!tracker) return;

    const steps = tracker.querySelectorAll('.tracker-step');
    const lines = tracker.querySelectorAll('.tracker-line');

    let activeIdx = 0;
    if (s === 'pending') activeIdx = 0;
    else if (s === 'completed' || s === 'preparing') activeIdx = 1;
    else if (s === 'out_for_delivery') activeIdx = 2;
    else if (s === 'delivered') activeIdx = 3;

    steps.forEach((step, i) => {
        step.classList.toggle('active', i <= activeIdx);
    });
    lines.forEach((line, i) => {
        line.classList.toggle('active', i < activeIdx);
    });
}

function formatStatusLabel(status) {
    const s = String(status || '').toLowerCase();
    if (s === 'pending') return '⏳ Pending';
    if (s === 'completed') return '🍳 Preparing';
    if (s === 'out_for_delivery') return '🚴 On the way';
    if (s === 'delivered') return '🎉 Delivered';
    if (s === 'cancelled') return '❌ Cancelled';
    return status;
}

async function fetchOrderStatusById(dbId) {
    if (!dbId) return null;
    try {
        const { data, error } = await supabase
            .from('orders')
            .select('id, status, created_at')
            .eq('id', dbId)
            .maybeSingle();

        if (error || !data) return null;
        return data;
    } catch (err) {
        console.error('Fetch status error:', err);
        return null;
    }
}

async function checkOrderStatus() {
    const active = getActiveOrder();
    if (!active) return;

    const dbId = getActiveOrderDbId();
    if (!dbId) {
        console.warn('No DB id saved — cannot check status');
        return;
    }

    const order = await fetchOrderStatusById(dbId);
    if (!order) return;

    const newStatus = order.status;

    updateLiveBadge(newStatus);

    if (lastKnownStatus !== null && lastKnownStatus !== newStatus) {
        const { emoji, msg } = statusToMessage(newStatus);
        showBrowserNotification(`${emoji} Dastarkhwan 804`, msg);
        showToast(msg, 'success');
        playStatusChime();
    }

    lastKnownStatus = newStatus;

    if (trackModal && trackModal.classList.contains('active')) {
        applyStatusToTracker(newStatus);
    }

    if (newStatus === 'delivered' || newStatus === 'cancelled') {
        setTimeout(() => {
            clearActiveOrder();
            lastKnownStatus = null;
        }, 60000);
    }
}

function startOrderStatusPolling() {
    const dbId = getActiveOrderDbId();
    if (!dbId) return;

    // ── 1. Supabase Realtime: instant updates ────────────────
    if (statusRealtimeChannel) {
        try { supabase.removeChannel(statusRealtimeChannel); } catch (e) {}
    }

    try {
        statusRealtimeChannel = supabase
            .channel('order-status-' + dbId)
            .on(
                'postgres_changes',
                {
                    event: 'UPDATE',
                    schema: 'public',
                    table: 'orders',
                    filter: `id=eq.${dbId}`
                },
                (payload) => {
                    const newStatus = payload?.new?.status;
                    if (!newStatus) return;
                    console.log('🔔 Realtime status update:', newStatus);

                    if (lastKnownStatus !== newStatus) {
                        const { emoji, msg } = statusToMessage(newStatus);
                        showBrowserNotification(`${emoji} Dastarkhwan 804`, msg);
                        showToast(msg, 'success');
                        playStatusChime();   // ⬅️ ADDED: sound on realtime update too
                        lastKnownStatus = newStatus;
                    }

                    updateLiveBadge(newStatus);
                    if (trackModal && trackModal.classList.contains('active')) {
                        applyStatusToTracker(newStatus);
                    }
                }
            )
            .subscribe((status) => {
                console.log('📡 Realtime channel status:', status);
            });
    } catch (err) {
        console.warn('Realtime subscription failed:', err);
    }

    // ── 2. Polling fallback every 20s ────────────────────────
    if (statusPollTimer) clearInterval(statusPollTimer);
    checkOrderStatus();
    statusPollTimer = setInterval(checkOrderStatus, 20000);
}

(function resumeOrderTracking() {
    const active = getActiveOrder();
    if (active && getActiveOrderDbId()) {
        startOrderStatusPolling();
    }
})();

// ════════════════════════════════════════════════════════════════
// FEATURE 3 — AUTO WHATSAPP CONFIRMATION
// ════════════════════════════════════════════════════════════════

function buildWhatsAppConfirmationMessage(order) {
    let msg = `*🆕 NEW ORDER — Dastarkhwan 804*\n\n`;
    msg += `*Order ID:* ${order.ref}\n`;
    msg += `*Customer:* ${order.name}\n`;
    msg += `*Phone:* ${order.phone}\n`;
    msg += `*Order Type:* ${order.type}\n`;
    if (order.address) msg += `*Address:* ${order.address}\n`;
    if (order.deliveryTime) msg += `*Preferred Time:* ${order.deliveryTime}\n`;
    if (order.note) msg += `*Notes:* ${order.note}\n`;
    msg += `\n*Items:*\n`;
    order.items.forEach((item, i) => {
        msg += `${i + 1}. ${item.name} (${item.variantLabel}) × ${item.qty} = Rs. ${item.price * item.qty}\n`;
    });
    msg += `\n*Total:* Rs. ${order.total}\n`;
    msg += `*Payment:* ${order.payment}\n`;
    msg += `\n_Please confirm and start preparing._ ✅`;
    return msg;
}

const whatsappConfirmBtn = document.getElementById('whatsappConfirmBtn');
if (whatsappConfirmBtn) {
    whatsappConfirmBtn.addEventListener('click', () => {
        if (!lastPlacedOrderSnapshot) {
            showToast('Order info missing. Please try again.', 'error');
            return;
        }
        const msg = buildWhatsAppConfirmationMessage(lastPlacedOrderSnapshot);
        const url = `https://wa.me/${RESTAURANT_WHATSAPP}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
        whatsappConfirmBtn.classList.add('sent');
        whatsappConfirmBtn.innerHTML = '<i class="fas fa-check"></i> Sent to Restaurant!';
    });
}

const _origSuccessModalOpen = successModal.classList.add.bind(successModal.classList);
successModal.classList.add = function(...args) {
    if (args[0] === 'active' && whatsappConfirmBtn) {
        whatsappConfirmBtn.classList.remove('sent');
        whatsappConfirmBtn.innerHTML = '<i class="fab fa-whatsapp"></i> Send Order to Restaurant on WhatsApp';
    }
    return _origSuccessModalOpen(...args);
};

// ════════════════════════════════════════════════════════════════
// FEATURE 18 — TRACK ORDER MODAL + LIVE RIDER LOCATION
// ════════════════════════════════════════════════════════════════
function openTrackModal() {
    if (!trackModal) return;
    trackModal.classList.add('active');
    document.body.classList.add('no-scroll');
    if (trackInput) trackInput.focus();
}

function closeTrackModal() {
    if (!trackModal) return;
    trackModal.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

if (trackOrderBtn) trackOrderBtn.addEventListener('click', openTrackModal);
if (trackModalClose) trackModalClose.addEventListener('click', closeTrackModal);
if (trackModal) trackModal.addEventListener('click', (e) => { if (e.target === trackModal) closeTrackModal(); });

if (trackSearchBtn) {
    trackSearchBtn.addEventListener('click', async () => {
        const q = trackInput.value.trim().toUpperCase();
        if (!q) {
            trackMsg.textContent = 'Please enter an order ID.';
            trackMsg.className = 'track-msg error';
            return;
        }

        trackMsg.textContent = 'Searching...';
        trackMsg.className = 'track-msg';
        trackResult.hidden = true;

        const lastOrderId = localStorage.getItem(LAST_ORDER_ID_KEY);
        const dbId = getActiveOrderDbId();

        if (lastOrderId && lastOrderId.toUpperCase() === q && dbId) {
            const order = await fetchOrderStatusById(dbId);

            if (!order) {
                trackMsg.textContent = 'Order not found in the system.';
                trackMsg.className = 'track-msg error';
                return;
            }

            trackMsg.textContent = '✓ Order found';
            trackMsg.className = 'track-msg success';

            trackResultId.textContent = q;
            trackResult.hidden = false;

            const status = order.status;
            applyStatusToTracker(status);
            lastKnownStatus = status;
            updateLiveBadge(status);

            fetchLiveRiderLocation(dbId);
            startOrderStatusPolling();

            return;
        }

        trackMsg.textContent = 'No order found with that ID.';
        trackMsg.className = 'track-msg error';
    });
}

if (trackInput) {
    trackInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') trackSearchBtn.click();
    });
}

// ════════════════════════════════════════════════════════════════
// FEATURE 18 — FETCH LIVE RIDER LOCATION
// ════════════════════════════════════════════════════════════════
async function fetchLiveRiderLocation(orderDbId) {
    const mapEl = document.getElementById('liveRiderMap');
    const infoEl = document.getElementById('liveRiderInfo');
    const linkEl = document.getElementById('liveRiderLink');

    if (!mapEl) return;

    const lookupId = orderDbId || getActiveOrderDbId();
    if (!lookupId) { mapEl.hidden = true; return; }

    try {
        const { data, error } = await supabase
            .from('order_locations')
            .select('*')
            .eq('order_id', String(lookupId))
            .maybeSingle();

        if (error || !data) {
            mapEl.hidden = true;
            return;
        }

        const ageMs = Date.now() - new Date(data.updated_at).getTime();
        if (ageMs > 2 * 60 * 1000) {
            mapEl.hidden = true;
            return;
        }

        mapEl.hidden = false;

        const lat = data.latitude.toFixed(5);
        const lng = data.longitude.toFixed(5);
        const accuracy = data.accuracy ? Math.round(data.accuracy) : '?';
        const ageSec = Math.round(ageMs / 1000);
        const ageText = ageSec < 60 ? `${ageSec}s ago` : `${Math.round(ageSec / 60)}m ago`;

        if (infoEl) {
            infoEl.innerHTML = `
                Rider is currently at:<br>
                <strong>📍 ${lat}, ${lng}</strong><br>
                <small>Updated ${ageText} · Accuracy ±${accuracy}m</small>
            `;
        }

        if (linkEl) {
            linkEl.href = `https://www.google.com/maps?q=${data.latitude},${data.longitude}`;
        }
    } catch (err) {
        console.error('Rider location fetch error:', err);
        mapEl.hidden = true;
    }
}

// ════════════════════════════════════════════════════════════════
// SOUND ALERT
// ════════════════════════════════════════════════════════════════
function playStatusChime() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();

        const notes = [
            { freq: 880, start: 0, dur: 0.15 },
            { freq: 1320, start: 0.15, dur: 0.25 }
        ];

        notes.forEach(({ freq, start, dur }) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0.0001, ctx.currentTime + start);
            gain.gain.exponentialRampToValueAtTime(0.15, ctx.currentTime + start + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + start + dur);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(ctx.currentTime + start);
            osc.stop(ctx.currentTime + start + dur);
        });
    } catch (err) {
        console.warn('Could not play chime:', err);
    }
}

// Unlock Web Audio on first interaction (autoplay policy)
(function unlockAudio() {
    const unlock = () => {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            if (ctx.state === 'suspended') ctx.resume();
        } catch (e) {}
        document.removeEventListener('click', unlock);
        document.removeEventListener('touchstart', unlock);
        document.removeEventListener('keydown', unlock);
    };
    document.addEventListener('click', unlock, { once: true });
    document.addEventListener('touchstart', unlock, { once: true });
    document.addEventListener('keydown', unlock, { once: true });
})();

console.log('🍽️ Dastarkhwan 804 loaded!');