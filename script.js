// ================================================================
// MENU DATA – all categories with variants
// ================================================================
const menuData = [
    // ---- KARAHI ----
    {
        id: 1,
        name: 'Chicken Karahi',
        desc: 'Classic tomato‑based karahi with tender chicken & aromatic spices.',
        category: 'karahi',
        img: 'https://res.cloudinary.com/hksqkdlah/image/upload/SFS_Chicken_Karahi_001_zpcxz2.jpg',
        variants: [
            { label: '250 gm', price: 450 },
            { label: '0.5 kg', price: 850 },
            { label: '1 kg', price: 1600 }
        ]
    },
    {
        id: 2,
        name: 'Mutton Karahi',
        desc: 'Slow‑cooked mutton in rich gravy with ginger, garlic & green chillies.',
        category: 'karahi',
        img: 'https://binoriarestaurant.com/wp-content/uploads/2023/08/Mutton-Makhni-karahi.jpg',
        variants: [
            { label: '250 gm', price: 550 },
            { label: '0.5 kg', price: 1050 },
            { label: '1 kg', price: 2000 }
        ]
    },
    {
        id: 3,
        name: 'Peshawari Karahi',
        desc: 'Dry‑style karahi with black pepper, coriander & a smoky finish.',
        category: 'karahi',
        img: 'https://i.pinimg.com/originals/ce/24/57/ce24577d9837eeec458dd63cd33fc163.jpg',
        variants: [
            { label: '250 gm', price: 480 },
            { label: '0.5 kg', price: 920 },
            { label: '1 kg', price: 1750 }
        ]
    },
    {
        id: 4,
        name: 'White Karahi',
        desc: 'Creamy, mild karahi with yoghurt, cream & a hint of cardamom.',
        category: 'karahi',
        img: 'https://binoriarestaurant.com/wp-content/uploads/2023/08/Mutton-White-Karahi.jpg',
        variants: [
            { label: '250 gm', price: 460 },
            { label: '0.5 kg', price: 880 },
            { label: '1 kg', price: 1680 }
        ]
    },

    // ---- RICE ----
    {
        id: 5,
        name: 'Chicken Biryani',
        desc: 'Fragrant basmati layered with spiced chicken, fried onions & saffron.',
        category: 'rice',
        img: 'https://doabameatshop.ca/wp-content/uploads/2022/12/Muradabadi-chicken-biryani-1200x900-1.jpg',
        variants: [
            { label: '250 gm', price: 350 },
            { label: '0.5 kg', price: 650 },
            { label: '1 kg', price: 1200 }
        ]
    },
    {
        id: 6,
        name: 'Mutton Biryani',
        desc: 'Rich mutton biryani with slow‑cooked meat, aromatic spices & mint.',
        category: 'rice',
        img: 'https://hapakenya.com/wp-content/uploads/2025/09/Mutton-Biryani-1024x576.jpg',
        variants: [
            { label: '250 gm', price: 420 },
            { label: '0.5 kg', price: 800 },
            { label: '1 kg', price: 1500 }
        ]
    },
    {
        id: 7,
        name: 'Vegetable Pulao',
        desc: 'Light pulao with mixed vegetables, whole spices & a touch of ghee.',
        category: 'rice',
        img: 'https://i.pinimg.com/originals/2c/29/f0/2c29f0675f2d67d4643bd0a3fef6e52b.jpg',
        variants: [
            { label: '250 gm', price: 280 },
            { label: '0.5 kg', price: 520 },
            { label: '1 kg', price: 950 }
        ]
    },
    {
        id: 8,
        name: 'Fried Rice',
        desc: 'Egg fried rice with spring onions, carrots, peas & soy sauce.',
        category: 'rice',
        img: 'https://www.eatingonadime.com/wp-content/uploads/2022/01/eod-fried-rice-9-2.jpg',
        variants: [
            { label: '250 gm', price: 250 },
            { label: '0.5 kg', price: 480 },
            { label: '1 kg', price: 900 }
        ]
    },

    // ---- BBQ ----
    {
        id: 9,
        name: 'Seekh Kabab',
        desc: 'Minced beef skewers with coriander, green chillies & chaat masala.',
        category: 'bbq',
        img: 'https://5.imimg.com/data5/SELLER/Default/2024/10/459030990/DD/BL/DW/19736347/chicken-seekh-kabab-1000x1000.jpg',
        variants: [
            { label: 'Half Plate (4 pcs)', price: 550 },
            { label: 'Full Plate (8 pcs)', price: 1050 }
        ]
    },
    {
        id: 10,
        name: 'Chicken Tikka',
        desc: 'Boneless chicken marinated in yoghurt, spices & grilled to perfection.',
        category: 'bbq',
        img: 'https://www.thespruceeats.com/thmb/Xk_9n119TvarYWFo_IQuMV3gGp4=/1500x1000/filters:fill(auto,1)/chicken-tikka-recipe-1957388-10-5b3fcf6646e0fb0037658a02.jpg',
        variants: [
            { label: 'Half Plate', price: 600 },
            { label: 'Full Plate', price: 1150 }
        ]
    },
    {
        id: 11,
        name: 'Bihari Kabab',
        desc: 'Tender beef strips marinated in papaya, ginger & garlic, then char‑grilled.',
        category: 'bbq',
        img: 'https://i.ytimg.com/vi/D02ex5CCyH0/maxresdefault.jpg',
        variants: [
            { label: 'Half Plate', price: 650 },
            { label: 'Full Plate', price: 1250 }
        ]
    },
    {
        id: 12,
        name: 'Malai Boti',
        desc: 'Creamy chicken boti with cheese, cream & a hint of cardamom.',
        category: 'bbq',
        img: 'https://www.dirtyapronrecipes.com/wp-content/uploads/2017/04/chicken-malai-boti.jpg',
        variants: [
            { label: 'Half Plate', price: 620 },
            { label: 'Full Plate', price: 1200 }
        ]
    },

    // ---- HANDI ----
    {
        id: 13,
        name: 'Chicken Handi',
        desc: 'Traditional handi‑cooked chicken in a rich, spiced gravy.',
        category: 'handi',
        img: 'https://cdn-food.tribune.com.pk/gallery/0Texvcqo500mya1lcLJiBtYjJOJ6awFofCRFnxGh.jpeg',
        variants: [
            { label: '0.5 kg', price: 800 },
            { label: '1 kg', price: 1500 }
        ]
    },
    {
        id: 14,
        name: 'Mutton Handi',
        desc: 'Tender mutton slow‑cooked in a handi with aromatic whole spices.',
        category: 'handi',
        img: 'https://images.herzindagi.info/image/2022/Sep/list-of-places-to-eat-handi-mutton-in-patna.jpg',
        variants: [
            { label: '0.5 kg', price: 950 },
            { label: '1 kg', price: 1800 }
        ]
    },
    {
        id: 15,
        name: 'Daal Handi',
        desc: 'Creamy yellow daal tempered with garlic, ginger & green chillies.',
        category: 'handi',
        img: 'https://nanikitchens.com/wp-content/uploads/2025/05/Healthy-Curry-Daal-4.jpg',
        variants: [
            { label: '0.5 kg', price: 450 },
            { label: '1 kg', price: 850 }
        ]
    },
    {
        id: 16,
        name: 'Mix Vegetable Handi',
        desc: 'Assorted vegetables cooked in a mildly spiced handi gravy.',
        category: 'handi',
        img: 'https://static.india.com/wp-content/uploads/2024/12/FEATURE-2024-12-08T153033.031.jpg##image/jpg',
        variants: [
            { label: '0.5 kg', price: 500 },
            { label: '1 kg', price: 950 }
        ]
    },

    // ---- NAAN / DRINKS / SALAD ----
    {
        id: 17,
        name: 'Butter Naan',
        desc: 'Soft tandoori naan brushed with butter – perfect with any curry.',
        category: 'naan',
        img: 'https://maharajaroyaldining.com/wp-content/uploads/2024/05/Butter-Naan-2.webp',
        variants: [
            { label: '1 piece', price: 60 },
            { label: '2 pieces', price: 110 },
            { label: '4 pieces', price: 200 }
        ]
    },
    {
        id: 18,
        name: 'Garlic Naan',
        desc: 'Naan topped with garlic, coriander & a drizzle of butter.',
        category: 'naan',
        img: 'https://tastefullygrace.com/wp-content/uploads/2023/01/Garlic-Naan-Bread-Recipe-1-scaled.jpg',
        variants: [
            { label: '1 piece', price: 70 },
            { label: '2 pieces', price: 130 },
            { label: '4 pieces', price: 240 }
        ]
    },
    {
        id: 19,
        name: 'Cheese Naan',
        desc: 'Naan stuffed with mozzarella and cheddar, baked until golden.',
        category: 'naan',
        img: 'https://guruindiancuisine.com/wp-content/uploads/2022/04/Cheese-Naan.png',
        variants: [
            { label: '1 piece', price: 90 },
            { label: '2 pieces', price: 170 },
            { label: '4 pieces', price: 320 }
        ]
    },
    {
        id: 20,
        name: 'Soft Drink (330 ml)',
        desc: 'Choose from Pepsi, 7‑Up, or Coca‑Cola.',
        category: 'naan',
        img: 'https://media.istockphoto.com/id/483857603/photo/pepsi-coca-cola-and-7-up-can.jpg?s=612x612&w=0&k=20&c=LiW4ePRm8v5XzhIkjzqbSzKxVW_EhIbeh3uBEfqM5kU=',
        variants: [
            { label: '1 can', price: 120 },
            { label: '2 cans', price: 230 },
            { label: '4 cans', price: 440 }
        ]
    },
    {
        id: 21,
        name: 'Garden Salad',
        desc: 'Fresh mix of lettuce, cucumber, tomatoes, onions & lemon.',
        category: 'naan',
        img: 'https://static01.nyt.com/images/2024/08/13/multimedia/LH-Garden-Saladrex-tlqm/LH-Garden-Saladrex-tlqm-jumbo.jpg',
        variants: [
            { label: 'Small (serves 1)', price: 100 },
            { label: 'Large (serves 2‑3)', price: 180 }
        ]
    }
];

// ================================================================
// STATE
// ================================================================
let cart = [];
let selectedItemId = null; // for variant modal
const WHATSAPP_NUMBER = '923199608782'; // CHANGE THIS

// DOM refs
const grid = document.getElementById('menuGrid');
const filterTabs = document.getElementById('filterTabs');
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
const variantModalClose = document.getElementById('variantModalClose');
const variantCancel = document.getElementById('variantCancel');
const checkoutModal = document.getElementById('checkoutModal');
const checkoutItems = document.getElementById('checkoutItems');
const checkoutSubtotal = document.getElementById('checkoutSubtotal');
const checkoutTotal = document.getElementById('checkoutTotal');
const checkoutModalClose = document.getElementById('checkoutModalClose');
const placeOrderBtn = document.getElementById('placeOrderBtn');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');

// ================================================================
// RENDER MENU
// ================================================================
function renderMenu(category = 'all') {
    const filtered = category === 'all' ? menuData : menuData.filter(m => m.category === category);
    if (!filtered.length) {
        grid.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:#aaa;">No items in this category.</p>`;
        return;
    }
    grid.innerHTML = filtered.map(item => `
        <div class="menu-item" data-id="${item.id}">
            <img src="${item.img}" alt="${item.name}" onerror="this.src='https://placehold.co/400x250/f0ebe3/b8860b?text=${item.name.slice(0,2)}'" />
            <div class="item-header">
                <span class="item-name">${item.name}</span>
            </div>
            <p class="item-desc">${item.desc}</p>
            <div class="item-actions">
                <button class="btn-select" data-id="${item.id}"><i class="fas fa-utensils"></i> Select Options</button>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.btn-select').forEach(btn => {
        btn.addEventListener('click', () => openVariantModal(parseInt(btn.dataset.id)));
    });
}

// ================================================================
// FILTER TABS
// ================================================================
filterTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(btn.dataset.cat);
});

// ================================================================
// VARIANT MODAL
// ================================================================
function openVariantModal(itemId) {
    const item = menuData.find(m => m.id === itemId);
    if (!item) return;
    selectedItemId = itemId;
    variantItemName.textContent = item.name;
    variantItemImg.src = item.img;
    variantItemImg.alt = item.name;
    variantItemDesc.textContent = item.desc;

    variantGrid.innerHTML = item.variants.map((v, idx) => `
        <button class="variant-btn" data-variant-index="${idx}">
            <span>${v.label}</span>
            <span class="variant-price">Rs. ${v.price}</span>
        </button>
    `).join('');

    variantModal.classList.add('active');

    // Attach events to variant buttons
    document.querySelectorAll('.variant-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.variantIndex);
            const variant = item.variants[idx];
            addToCart(item, variant);
            variantModal.classList.remove('active');
        });
    });
}

variantModalClose.addEventListener('click', () => variantModal.classList.remove('active'));
variantCancel.addEventListener('click', () => variantModal.classList.remove('active'));
variantModal.addEventListener('click', (e) => {
    if (e.target === variantModal) variantModal.classList.remove('active');
});

// ================================================================
// CART OPERATIONS
// ================================================================
function addToCart(item, variant) {
    const existing = cart.find(c => c.id === item.id && c.variantLabel === variant.label);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            img: item.img,
            variantLabel: variant.label,
            price: variant.price,
            qty: 1
        });
    }
    updateCartUI();
    showToast(`${item.name} (${variant.label}) added!`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateQty(index, delta) {
    const item = cart[index];
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(index);
    } else {
        updateCartUI();
    }
}

function getTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getItemCount() {
    return cart.reduce((sum, item) => sum + item.qty, 0);
}

// ================================================================
// UPDATE CART UI
// ================================================================
function updateCartUI() {
    const count = getItemCount();
    cartCount.textContent = count;

    if (cart.length === 0) {
        cartBody.innerHTML = `<p class="empty-cart">Your cart is empty.</p>`;
        cartTotal.textContent = 'Total: Rs. 0';
        return;
    }

    cartBody.innerHTML = cart.map((item, idx) => `
        <div class="cart-item">
            <img src="${item.img}" alt="${item.name}" onerror="this.src='https://placehold.co/50/f0ebe3/b8860b?text=${item.name.slice(0,2)}'" />
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-detail">${item.variantLabel} · Rs. ${item.price}</div>
                <div>Rs. ${item.price} × ${item.qty}</div>
            </div>
            <div class="cart-item-qty">
                <button data-idx="${idx}" data-delta="-1">−</button>
                <span>${item.qty}</span>
                <button data-idx="${idx}" data-delta="1">+</button>
                <button class="cart-item-remove" data-idx="${idx}"><i class="fas fa-trash-alt"></i></button>
            </div>
        </div>
    `).join('');

    cartBody.querySelectorAll('.cart-item-qty button[data-delta]').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.idx);
            const delta = parseInt(btn.dataset.delta);
            updateQty(idx, delta);
        });
    });
    cartBody.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.idx);
            removeFromCart(idx);
        });
    });

    cartTotal.textContent = `Total: Rs. ${getTotal()}`;
}

// ================================================================
// TOAST
// ================================================================
let toastTimer;
function showToast(msg) {
    toastMsg.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

// ================================================================
// CART SIDEBAR
// ================================================================
cartToggle.addEventListener('click', () => cartSidebar.classList.toggle('active'));
cartClose.addEventListener('click', () => cartSidebar.classList.remove('active'));
document.addEventListener('click', (e) => {
    if (cartSidebar.classList.contains('active') && !cartSidebar.contains(e.target) && !cartToggle.contains(e.target)) {
        cartSidebar.classList.remove('active');
    }
});

// ================================================================
// CHECKOUT MODAL
// ================================================================
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty! Add some items first.');
        return;
    }
    checkoutItems.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <span>${item.name} (${item.variantLabel}) × ${item.qty}</span>
            <span>Rs. ${item.price * item.qty}</span>
        </div>
    `).join('');
    const subtotal = getTotal();
    const delivery = 50;
    const total = subtotal + delivery;
    checkoutSubtotal.textContent = `Rs. ${subtotal}`;
    checkoutTotal.textContent = `Rs. ${total}`;
    checkoutModal.classList.add('active');
    cartSidebar.classList.remove('active');
});

checkoutModalClose.addEventListener('click', () => checkoutModal.classList.remove('active'));
checkoutModal.addEventListener('click', (e) => {
    if (e.target === checkoutModal) checkoutModal.classList.remove('active');
});

// ================================================================
// PLACE ORDER (WHATSAPP)
// ================================================================
placeOrderBtn.addEventListener('click', () => {
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();
    const deliveryTime = document.getElementById('deliveryTime').value;
    const note = document.getElementById('orderNote').value.trim();

    if (!name) { alert('Please enter your name.'); return; }
    if (!phone) { alert('Please enter your WhatsApp number.'); return; }
    if (!address) { alert('Please enter your delivery address.'); return; }

    let orderLines = cart.map(item =>
        `• ${item.name} (${item.variantLabel}) × ${item.qty} = Rs. ${item.price * item.qty}`
    ).join('%0A');

    const timeStr = deliveryTime ? `%0A🕒 Delivery Time: ${new Date(deliveryTime).toLocaleString()}` : '';
    const noteStr = note ? `%0A📝 Special Requests: ${note}` : '';
    const total = getTotal() + 50;

    const message = `🍽️ *NEW ORDER - DASTARKHWAN 804*%0A%0A👤 *Name:* ${name}%0A📱 *Phone:* ${phone}%0A📍 *Address:* ${address}${timeStr}%0A%0A📋 *Order Details:*%0A${orderLines}%0A%0A💰 *Grand Total:* Rs. ${total} (incl. delivery)${noteStr}%0A%0A✅ Please confirm my order. Thank you!`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, '_blank');

    cart = [];
    updateCartUI();
    checkoutModal.classList.remove('active');
    document.getElementById('custName').value = '';
    document.getElementById('custPhone').value = '';
    document.getElementById('custAddress').value = '';
    document.getElementById('deliveryTime').value = '';
    document.getElementById('orderNote').value = '';
    showToast('Order placed! 🎉');
});

// ================================================================
// HERO CAROUSEL
// ================================================================
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function goToSlide(index) {
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
    currentSlide = index;
}
dots.forEach(dot => {
    dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.index)));
});
setInterval(() => {
    goToSlide((currentSlide + 1) % slides.length);
}, 5000);

// ================================================================
// INIT
// ================================================================
renderMenu('all');
updateCartUI();

console.log('🍽️ Dastarkhwan 804 · Full menu with variants loaded!');


// Animated stats counter
document.addEventListener('DOMContentLoaded', function() {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    statNumbers.forEach(el => {
        const target = parseInt(el.dataset.target);
        const duration = 2000; // ms
        const start = 0;
        const step = Math.ceil(target / (duration / 16));
        let current = start;
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            el.textContent = current;
        }, 16);
    });
});



// ================================================================
// BACK TO TOP BUTTON
// ================================================================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ================================================================
// NEWSLETTER FORM (simple demo)
// ================================================================
document.getElementById('newsletterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    if (email) {
        alert(`✅ Thanks for subscribing, ${email}! You'll get 10% off your next order.`);
        e.target.reset();
    }
});