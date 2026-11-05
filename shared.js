/* NEXUS shared data — used by index.html and admin.html */
const LS={get:(k,d)=>{try{const v=JSON.parse(localStorage.getItem(k));return v==null?d:v}catch(e){return d}},set:(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));return true}catch(e){alert('Browser storage is full — use smaller photos.');return false}}};
const SEED=[
  {id:1,name:'Smart Watch Ultra Pro',cat:'Electronics',price:8500,stock:15,rating:4.8,reviews:214,badge:'Hot',desc:'Square dial smart watch with heart rate monitoring, sleep tracking, alarm and multi-sport modes. Compatible with Android & iPhone.',img:"images/watch1.jpg"},
  {id:2,name:'Amazfit GTS Smartwatch',cat:'Electronics',price:12500,stock:10,rating:4.9,reviews:189,badge:'New',desc:'Premium AMOLED smartwatch with GPS, 14-day battery life and advanced health tracking.',img:"images/amazfit.jpg"},
  {id:3,name:'Samsung Galaxy Watch 6',cat:'Electronics',price:22000,stock:8,rating:4.9,reviews:95,badge:'New',desc:'Samsung Galaxy Watch 6 with round face, health suite, sleep coaching and Samsung Pay.',img:"images/samsung.jpg"},
  {id:4,name:'Heart Rate Smart Watch Pink',cat:'Electronics',price:5500,stock:25,rating:4.6,reviews:88,badge:'',desc:'Stylish pink ladies smart watch with heart rate, step counter and water resistance.',img:"images/watchpink.jpg"},
  {id:5,name:'Classic Round Smart Watch',cat:'Electronics',price:7800,stock:12,rating:4.7,reviews:63,badge:'',desc:'Classic round dial smartwatch with Bluetooth notifications and fitness tracking.',img:"images/watchclassic.jpg"},
  {id:6,name:'Sony SmartWatch Black',cat:'Electronics',price:9500,stock:7,rating:4.5,reviews:44,badge:'',desc:'Sony SmartWatch Android compatible, NFC enabled, water resistant with vibrant display.',img:"images/watchsony.jpg"},
  {id:7,name:'JBL Live 770NC Headphones',cat:'Electronics',price:9800,stock:18,rating:4.9,reviews:210,badge:'Hot',desc:'JBL Live 770NC wireless over-ear with adaptive noise cancellation and 65hr battery.',img:"images/jbl770.jpg"},
  {id:8,name:'JBL Tune 720BT Headphones',cat:'Electronics',price:7200,stock:20,rating:4.8,reviews:156,badge:'',desc:'JBL Tune 720BT wireless over-ear headphones with pure bass sound and 76hr playtime.',img:"images/jbl720.jpg"},
  {id:9,name:'Cowin Premium Headphones Blue',cat:'Electronics',price:5500,stock:30,rating:4.7,reviews:77,badge:'',desc:'Premium wireless headphones with active noise cancellation and 30hr battery.',img:"images/cowin.jpg"},
  {id:10,name:'Pro Wireless Headphones',cat:'Electronics',price:6800,stock:22,rating:4.8,reviews:132,badge:'',desc:'Over-ear wireless headphones with deep bass, memory foam earcups and long battery.',img:"images/headprem.jpg"},
  {id:11,name:'Boat Rockerz 425 Headphones',cat:'Electronics',price:4500,stock:35,rating:4.6,reviews:89,badge:'',desc:'Boat Rockerz 425 over-ear Bluetooth with signature sound and 70hr playtime.',img:"images/boat.jpg"},
  {id:12,name:'Gaming Headphones Red Edition',cat:'Electronics',price:7500,stock:14,rating:4.7,reviews:66,badge:'New',desc:'Pro gaming headphones with surround sound, RGB lighting and noise-cancelling mic.',img:"images/headred.jpg"},
  {id:13,name:'4K WiFi Action Camera',cat:'Cameras',price:8500,stock:12,rating:4.7,reviews:95,badge:'Hot',desc:'4K WiFi action camera with waterproof case, wide angle and image stabilisation.',img:"images/cam4k.jpg"},
  {id:14,name:'4K Action Cam Ultra HD',cat:'Cameras',price:9200,stock:8,rating:4.8,reviews:78,badge:'',desc:'Ultra HD 4K action camera with WiFi, dual screen and waterproof to 30m.',img:"images/cam4k2.jpg"},
  {id:15,name:'4K Sport Camera Waterproof',cat:'Cameras',price:7800,stock:15,rating:4.6,reviews:54,badge:'',desc:'4K sport camera with WiFi connectivity and waterproof case included.',img:"images/camhd.jpg"},
  {id:16,name:'Sony A7 V Mirrorless Camera',cat:'Cameras',price:185000,stock:3,rating:4.9,reviews:32,badge:'New',desc:'Sony Alpha 7 V full-frame mirrorless — 33MP, 4K 60fps, 7.5EV IBIS, pro autofocus.',img:"images/sonya7.jpg"},
  {id:17,name:'Sony Handycam 4K FDR-AX1',cat:'Cameras',price:95000,stock:4,rating:4.8,reviews:21,badge:'',desc:'Sony Handycam FDR-AX1 professional 4K camcorder with 20x optical zoom.',img:"images/sonyhand.jpg"},
  {id:18,name:'Rienok Bluetooth Speaker',cat:'Electronics',price:4500,stock:28,rating:4.7,reviews:142,badge:'Hot',desc:'Waterproof IPX7 Bluetooth speaker with RGB lighting, 360° sound and 20hr battery.',img:"images/speaker.jpg"},
  {id:19,name:'EPOMAKER TH80 SE Keyboard',cat:'Electronics',price:12500,stock:10,rating:4.8,reviews:55,badge:'New',desc:'EPOMAKER TH80 SE gasket-mount 75% mechanical keyboard in black and purple.',img:"images/epomaker.jpg"},
  {id:20,name:'RGB Mechanical Gaming Keyboard',cat:'Electronics',price:6800,stock:18,rating:4.7,reviews:88,badge:'',desc:'Full RGB mechanical gaming keyboard with tactile switches and premium build.',img:"images/rgbkbd.jpg"},
  {id:21,name:'Redragon K552 RGB Keyboard',cat:'Electronics',price:5500,stock:22,rating:4.6,reviews:76,badge:'',desc:'Redragon Kumara K552 RGB TKL mechanical gaming keyboard with LED backlighting.',img:"images/redragon.jpg"},
  {id:22,name:'Gaming Chair Pro S-Racer',cat:'Home & Office',price:25000,stock:6,rating:4.8,reviews:97,badge:'Hot',desc:'S-Racer ergonomic gaming chair with lumbar support, headrest and 180° recline.',img:"images/chair1.jpg"},
  {id:23,name:'Dowinx Gaming Chair',cat:'Home & Office',price:28000,stock:5,rating:4.7,reviews:77,badge:'',desc:'Dowinx gaming chair with extendable footrest, massage lumbar and premium PU leather.',img:"images/chair2.jpg"},
  {id:24,name:'Cheevo RGB Gaming Chair White',cat:'Home & Office',price:32000,stock:4,rating:4.9,reviews:43,badge:'New',desc:'Premium white gaming chair with RGB LED strips, lumbar support and adjustable arms.',img:"images/chair3.jpg"},
  {id:25,name:'Blue Gaming Chair with Footrest',cat:'Home & Office',price:24000,stock:7,rating:4.7,reviews:61,badge:'',desc:'Ergonomic gaming chair in blue/black with retractable footrest and neck pillow.',img:"images/chair4.jpg"},
  {id:26,name:'LED Desk Lamp with Pen Holder',cat:'Home & Office',price:2500,stock:40,rating:4.6,reviews:88,badge:'',desc:'Smart LED desk lamp with pen holder, phone stand, touch dimmer and eye-care mode.',img:"images/lamp1.jpg"},
  {id:27,name:'Monitor Bar Lamp 45cm',cat:'Home & Office',price:3200,stock:25,rating:4.7,reviews:64,badge:'',desc:'E-reading LED monitor bar lamp — clips onto your screen for glare-free workspace lighting.',img:"images/lamp2.jpg"},
  {id:28,name:'Smart LED Desk Lamp with Clock',cat:'Home & Office',price:4800,stock:15,rating:4.8,reviews:42,badge:'New',desc:'Smart desk lamp with digital clock, temperature display and adjustable brightness.',img:"images/lamp3.jpg"},
  {id:29,name:'Modern LED Task Lamp',cat:'Home & Office',price:3800,stock:20,rating:4.6,reviews:38,badge:'',desc:'Modern adjustable dual-head LED task lamp for productive home office setup.',img:"images/lamp4.jpg"},
  {id:30,name:"Women's Leather Crossbody Bag",cat:'Fashion',price:4200,stock:20,rating:4.7,reviews:63,badge:'',desc:"Genuine leather women's crossbody bag with patterned wide strap and multiple compartments.",img:"images/bagw.jpg"},
  {id:31,name:"Men's Vintage Leather Shoulder Bag",cat:'Fashion',price:5500,stock:18,rating:4.8,reviews:47,badge:'',desc:"Genuine leather men's shoulder bag, vintage casual crossbody with adjustable strap.",img:"images/bagm1.jpg"},
  {id:32,name:'Kaitedaishu Messenger Bag Brown',cat:'Fashion',price:4800,stock:22,rating:4.7,reviews:55,badge:'Hot',desc:"Men's faux leather messenger bag with multiple pockets, handle and adjustable strap.",img:"images/bagm2.jpg"},
  {id:33,name:'Waterproof Travel Crossbody Bag',cat:'Fashion',price:3800,stock:30,rating:4.6,reviews:39,badge:'',desc:"Men's leather multi-function waterproof travel messenger pack.",img:"images/bagm3.jpg"},
  {id:34,name:'Aspinal of London Reporter Bag',cat:'Fashion',price:12000,stock:8,rating:4.9,reviews:28,badge:'New',desc:'Aspinal of London premium pebble leather reporter bag — luxury crossbody.',img:"images/bagm4.jpg"},
  {id:35,name:'Reporter East-West Black Bag',cat:'Fashion',price:9500,stock:10,rating:4.8,reviews:33,badge:'',desc:'Premium black pebble leather crossbody reporter bag with wide adjustable strap.',img:"images/bagm5.jpg"},
  {id:36,name:'Weixier Men Briefcase Bag',cat:'Fashion',price:5200,stock:16,rating:4.7,reviews:48,badge:'',desc:"Men's faux leather briefcase shoulder bag with multiple pockets and carry handle.",img:"images/bagm6.jpg"},
  {id:37,name:'Kingseven Aviator Sunglasses',cat:'Fashion',price:3800,stock:30,rating:4.8,reviews:112,badge:'Hot',desc:'Kingseven polarized aviator sunglasses with red mirror lenses. Premium case included.',img:"images/sun1.jpg"},
  {id:38,name:'Joopin Polarized Square Shades',cat:'Fashion',price:2500,stock:45,rating:4.6,reviews:88,badge:'',desc:'Joopin unisex polarized UV400 square sunglasses — retro driving style.',img:"images/sun2.jpg"},
  {id:39,name:'Round Vintage Gold Sunglasses',cat:'Fashion',price:4500,stock:20,rating:4.8,reviews:42,badge:'New',desc:'Luxury vintage round sunglasses with gold frame and wood temples — UV400.',img:"images/sun3.jpg"},
  {id:40,name:'Pilot Aviator Sunglasses',cat:'Fashion',price:3200,stock:35,rating:4.7,reviews:67,badge:'',desc:'Classic pilot aviator sunglasses with polarized grey lenses and lightweight metal frame.',img:"images/sun4.jpg"},
  {id:41,name:'Colorful Square Sunglasses',cat:'Fashion',price:2800,stock:40,rating:4.5,reviews:54,badge:'',desc:'Trendy oversized square sunglasses in orange and blue — fun and fashion-forward.',img:"images/sun5.jpg"},
  {id:42,name:'LYZOIT Oversized Square Shades',cat:'Fashion',price:3500,stock:25,rating:4.6,reviews:39,badge:'',desc:'LYZOIT oversized polarized rectangle sunglasses with big UV400 protection.',img:"images/sun6.jpg"},
  {id:43,name:'Steampunk Tinted Shades',cat:'Fashion',price:5800,stock:15,rating:4.8,reviews:28,badge:'New',desc:'Premium steampunk-style sunglasses with blue tinted lenses and double bridge frame.',img:"images/sun7.jpg"},
  {id:44,name:'EnergyFlex Yoga Mat Purple',cat:'Sports',price:2800,stock:50,rating:4.6,reviews:174,badge:'',desc:'EnergyFlex premium yoga mat, thick cushion, non-slip surface in 4 vivid colors.',img:"images/yoga1.jpg"},
  {id:45,name:'Tatago 10mm Thick Yoga Mat',cat:'Sports',price:3500,stock:35,rating:4.7,reviews:98,badge:'Hot',desc:'Tatago 10mm extra-thick yoga mat for maximum joint cushioning during any workout.',img:"images/yoga2.jpg"},
  {id:46,name:'Premium Running Sneakers White',cat:'Sports',price:5500,stock:40,rating:4.7,reviews:88,badge:'',desc:'Lightweight responsive foam running sneakers with breathable mesh upper.',img:"images/shoe1.jpg"},
  {id:47,name:'Sport Sneakers Grey/Orange',cat:'Sports',price:4800,stock:45,rating:4.6,reviews:76,badge:'Hot',desc:"Stylish men's sport sneakers in grey with orange accents, cushioned sole.",img:"images/shoe2.jpg"},
  {id:48,name:'Garnier Vitamin C Serum',cat:'Beauty',price:1800,stock:60,rating:4.8,reviews:320,badge:'Hot',desc:'Garnier SkinActive Vitamin C brightening anti-dark spot serum 30ml — results in 6 days.',img:"images/serum1.jpg"},
  {id:49,name:'Brightening Face Serum',cat:'Beauty',price:2200,stock:45,rating:4.7,reviews:198,badge:'',desc:'Premium brightening face serum with Vitamin C, niacinamide and hyaluronic acid blend.',img:"images/serum2.jpg"},
  {id:50,name:'WFH Desk Essentials Bundle',cat:'Home & Office',price:15000,stock:5,rating:4.8,reviews:22,badge:'New',desc:'Complete WFH bundle — lamp, speaker, keyboard and accessories for your desk.',img:"images/desk.jpg"},
  {id:51,name:'USB Gadgets Tech Pack',cat:'Electronics',price:8500,stock:10,rating:4.7,reviews:35,badge:'',desc:'Cool USB gadgets collection — fans, LED lights, chargers and productivity tools.',img:"images/usb.jpg"},
];
const DEF_AREAS=[{name:"Pickup — KVDA Plaza (free)",fee:0,pickup:true},{name:"Eldoret Town",fee:150},{name:"Langas",fee:200},{name:"Huruma",fee:200},{name:"Pioneer / Kapsoya",fee:200},{name:"Kimumu / Kapseret",fee:250},{name:"Turbo",fee:400},{name:"Moi's Bridge",fee:500},{name:"Other area (we confirm the fee)",fee:300,other:true}];
const getCatalog=()=>LS.get('nexus_catalog',null)||SEED;
const saveCatalog=c=>LS.set('nexus_catalog',c);
const getAreas=()=>LS.get('nexus_areas',null)||DEF_AREAS;
const getCodes=()=>LS.get('nexus_codes',[]);
const getReviews=()=>LS.get('nexus_reviews',[]);
const getSettings=()=>({showRatings:true,hours:'Mon–Sat: 8:00am – 6:00pm (edit in Admin → Store)',...LS.get('nexus_settings',{})});
const getSale=()=>{const x=LS.get('nexus_sale',null);return x&&x.active&&new Date(x.end)>new Date()?x:null};
const salePrice=p=>{const x=getSale();return x&&(x.cat==='All'||x.cat===p.cat)?Math.round(p.price*(1-x.pct/100)):p.price};
const priceHTML=p=>{const n=salePrice(p);return n<p.price?`KES ${n.toLocaleString()} <s style="font-size:.7rem;color:var(--mt)">${p.price.toLocaleString()}</s>`:`KES ${p.price.toLocaleString()}`};
