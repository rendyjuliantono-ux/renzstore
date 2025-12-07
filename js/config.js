const CONFIG = {
baseUrl: window.location.origin + window.location.pathname.replace(/\/[^/]*$/, ''),
nama: "Renz Store", // Nama Store
get profil() {
        return this.baseUrl + "/img/profil.jpg";
    },
get banner() {
        return this.baseUrl + "/img/banner.png";
    },
tentang: "Renz Store adalah store online terpercaya yang telah melayani produk berbasis digital serta ribuan pelanggan sejak 2024. Kami menyediakan berbagai produk digital untuk kebutuhan customer dengan kualitas terbaik dan harga terjangkau.\n\nKami berusaha memberikan pengalaman berbelanja yang menyenangkan dengan pelayanan terbaik, dan tentunya bergaransi untuk semua produk dan jasa yang kami jual.",
alamat: "CF4G+QQX, Sokadana, Sukomulyo, Kec. Rowokele, Kabupaten Kebumen, Jawa Tengah 54472",
sosial_media: {
  email: "renzstore.org@gmail.com", // Email
  youtube: "@rendy5746", // YouTube Username 
  tiktok: "mas_rendyyy", // Tiktok Username 
  whatsapp: "6285171626471", // WhatsApp Number 
  telegram: "rendz_icikiwir" // Telegram Username
},
payment: {
  dana: "085171626471", // Payment Dana
  gopay: "085171626471", // Payment Gopay 
  ovo: "085171626471", // Payment OVO
  shopeepay: "085171626471", // Payment ShopeePay 
  seabank: "901862188800", // Payment SeaBank
  qris: "https://files.catbox.moe/e37frl.jpg" // Url Qris
},
telegram_api: {
  bot: "8571707065:AAGMGc3WFESVNFY9bMYmMyqQqPNRdhf92H4", // Token bot father
  chatid: "8129119567" // ID telegram
},
}

// Produk
const productsData = {
            "Joki Laporan": [
                {
                    "id": 1,
                    "name": "Laporan PKL",
                    "icon": "fas fa-file-word",
                    "description": "Open Joki Laporan PKL tentunya dengan hasil rapih, margin, line spacing, ukuran, nomor halaman, dan lain-lain sesuai format yang diberikan guru. Tentunya dengan harga terjangkau dan free revisi sampai di acc guru pembimbing.",
                    "variants": [
                        { "name": "Laporan PKL Lokal", "price": 70000 },
                        { "name": "Laporan PKL PT", "price": 80000 }
                    ]
                }
            ],
            "Desain & Editing": [
                {
                    id: 2,
                    name: "Desain Logo",
                    icon: "fas fa-pen-nib",
                    description: "Jasa pembuatan logo dengan berbagai gaya desain. Cocok untuk brand, usaha, atau komunitas.",
                    variants: [
                        { name: "Logo Minimalis", price: 20000 },
                        { name: "Logo Typography", price: 25000 },
                        { name: "Logo Mascot", price: 30000 },
                        { name: "Logo Vintage", price: 40000 },
                        { name: "Logo Modern", price: 45000 },
                        { name: "Logo Sticker Motor", price: 50000 },
                        { name: "Request Custom", price: "Harga sesuai request" }
                    ]
                },
                {
                    id: 3,
                    name: "Desain Banner",
                    icon: "fas fa-palette",
                    description: "Jasa pembuatan banner untuk promosi usaha, toko, media sosial, atau event.",
                    variants: [
                        { name: "Banner Sosmed", price: 25000 },
                        { name: "Banner Event", price: 30000 },
                        { name: "Banner Promosi", price: 35000 },
                        { name: "Banner Agustusan", price: 40000 },
                        { name: "Request Custom", price: "Harga sesuai request" }
                    ]
                },
                {
                    id: 4,
                    name: "Desain Poster",
                    icon: "fas fa-scroll",
                    description: "Jasa desain poster kreatif untuk kebutuhan bisnis, acara, atau publikasi.",
                    variants: [
                        { name: "Poster A4", price: 25000 },
                        { name: "Poster A3", price: 35000 },
                        { name: "Request Custom", price: "Harga sesuai request" }
                    ]
                },
                {
                    id: 5,
                    name: "Highend Photo Retouching",
                    icon: "fas fa-layer-group",
                    description: "Jasa retouch foto menggunakan Adobe Lightroom, masking, healing, color grading dll. Harganya per 1 foto ya.",
                    variants: [
                        { name: "Basic", price: 2500 },
                        { name: "Premium", price: 5000 }
                    ]
                },
                {
                    id: 6,
                    name: "Editing Photoshop",
                    icon: "fas fa-image",
                    description: "Jasa edit foto menggunakan Adobe Photoshop, remove background, dll. Harganya per 1 foto ya.",
                    variants: [
                        { name: "Editing Photoshop", price: 4000 }
                    ]
                },
                {
                    id: 7,
                    name: "Editing Video",
                    icon: "fas fa-video",
                    description: "Jasa editing video, jj alight motion, tugas video, video cinematic dll. Video berdurasi panjang harganya per 1 menit ya.",
                    variants: [
                        { name: "Editing Video", price: 10000 }
                    ]
                }
            ],
            "Produk Digital": [
                {
                    id: 8,
                    name: "E-Book",
                    icon: "fas fa-book",
                    description: "Koleksi e-book digital dengan berbagai isi yang menarik, mulai dari bisnis, programming, trading, hingga hobi.",
                    variants: [
                        { name: "E-Book Bisnis", price: 20000 },
                        { name: "E-Book Programming", price: 30000 },
                        { name: "E-Book Trading", price: 40000 },
                        { name: "E-Book Random Pack", price: 10000 }
                    ]
                },
                {
                    id: 9,
                    name: "Akun Premium",
                    icon: "fas fa-crown",
                    description: "Tersedia berbagai akun premium dengan harga terjangkau, cocok untuk hiburan, editing maupun produktivitas kamu. Apabila stock tidak tersedia bergaransi 100% uang kembali.",
                    variants: [
                        { name: "Netflix Premium (1 Bulan) Sharing", price: 15000 },
                        { name: "Netflix Premium (1 Bulan) Semi Private", price: 25000 },
                        { name: "Spotify Premium Student (1 Bulan) Private | Nogar", price: 12000 },
                        { name: "Canva Pro Anggota (1 Bulan)", price: 5000 },
                        { name: "Canva Pro Anggota (1 Tahun) Nogar | Via Invite 1x ", price: 8000 },
                        { name: "Canva Pro Desainer (1 Bulan)", price: 7500 },
                        { name: "CapCut Pro Private (1 Bulan) Private", price: 10000 },
                        { name: "CapCut Pro (1 Bulan) Private", price: 20000 },
                        { name: "Alight Motion Premium (1 Tahun) Private", price: 5500 },
                        { name: "Viu Premium (1 Bulan) Private | Garansi 1 Bulan", price: 4300 },
                        { name: "Viu Premium (1 Tahun) Private | Garansi bf 6 Bulan", price: 6000 },
                        { name: "Viu Premium (200 Tahun) Private | Garansi bf 6 Bulan", price: 8000 },
                        { name: "Prime Video Premium (1 Bulan) Sharing", price: 10000 },
                        { name: "Prime Video Premium (1 Bulan) Private", price: 20000 },
                        { name: "YouTube Premium FamPlan (1 Bulan) Nogar | Via Invite 1x", price: 10000 },
                        { name: "Lightroom Premium (1 Tahun) Nogar", price: 10000 },
                        { name: "Lightroom Premium (1 Tahun) Garansi 6 Bulan", price: 18000 },
                        { name: "Picsart Pro (1 Bulan) Sharing | Garansi 20 Hari", price: 10000 },
                        { name: "Picsart Pro (1 Bulan) Private | Garansi 20 Hari", price: 15000 },
                        { name: "Bstation Premium (1 Bulan) Sharing", price: 13000 },
                        { name: "Bstation Premium (3 Bulan) Sharing", price: 15000 },
                        { name: "Bstation Premium (1 Tahun) Sharing", price: 20000 },
                        { name: "HBO Max Premium (1 Bulan) Garansi 25 Hari", price: 20000 },
                        { name: "Remini Pro (1 Bulan) Sharing", price: 21000 },
                        { name: "Vsco Plus (1 Tahun) Sharing | Garansi 6 Bulan", price: 17000 },
                        { name: "WeTV Premium (1 Bulan) Sharing", price: 11000 },
                        { name: "WeTV Premium (1 Bulan) Private", price: 31000 },
                        { name: "Wattpad Premium (1 Tahun) Private", price: 17000 },
                        { name: "Youku VIP (1 Bulan) Sharing | Garansi 25 Hari", price: 20000 },
                        { name: "Youku VIP (3 Bulan) Sharing | Garansi 2 Bulan", price: 20000 },
                        { name: "Youku VIP (1 Tahun) Sharing | Garansi 6 Bulan", price: 20000 },
                        { name: "Video Platinum (1 Bulan) Sharing | Khusus Mobile", price: 15000 },
                        { name: "Video Platinum (1 Bulan) Sharing | All Screen", price: 26000 },
                        { name: "Video Platinum (1 Bulan) Private | Khusus Mobile", price: 28000 },
                        { name: "Video Platinum (1 Bulan) Private | All Screen", price: 40000 },
                        { name: "IQIYI VIP Standar (1 Bulan) Sharing", price: 5000 },
                        { name: "IQIYI VIP Premium (1 Bulan) Sharing", price: 8500 },
                        { name: "Meitu VIP Premium (1 Bulan) Sharing", price: 18000 },
                        { name: "Loklok Premium (1 Bulan) Sharing", price: 20000 },
                        { name: "Chat GPT Member Team Plan (1 Bulan) Private | Garansi 7 Hari", price: 24000 },
                        { name: "Chat GPT Member Team Plan (1 Bulan) Private | Garansi 25 Hari", price: 35000 },
                        { name: "Chat GPT GO Plan (1 Tahun) Private | Garansi 1 Bulan", price: 28000 },
                        { name: "Chat GPT GO Plan (1 Tahun) Private | Garansi 6 Bulan", price: 44000 },
                        { name: "Gemini AI Pro Anggota (1 Tahun) Garansi 1 Bulan | 2TB GDRIVE + VEO 3", price: 21000 },
                        { name: "Gemini AI Pro Anggota (1 Tahun) Garansi 6 Bulan | 2TB GDRIVE + VEO 3", price: 26000 }
                    ]
                }
            ],
            "Nokos WhatsApp": [
                {
                    "id": 10,
                    "name": "Nokos WhatsApp Fresh",
                    "icon": "fab fa-whatsapp",
                    "description": "Ready Nokos WhatsApp Fresh All Country. Apabila stock tidak tersedia bergaransi 100% uang kembali.",
                    "variants": [
                        { "name": "Indonesia", "price": 10000 },
                        { "name": "Cameroon", "price": 6999 },
                        { "name": "Israel", "price": 14000 },
                        { "name": "Venezuela", "price": 10430 },
                        { "name": "Tanzania", "price": 10999 },
                        { "name": "Burundi", "price": 10879 },
                        { "name": "Rep. Afrika Tengah", "price": 11879 },
                        { "name": "Rusia/Kazakhstan", "price": 10580 },
                        { "name": "Nepal", "price": 7560 },
                        { "name": "Sudan", "price": 7999 },
                        { "name": "Kyrgystan", "price": 6999 },
                        { "name": "Bangladesh", "price": 16778 },
                        { "name": "Côte d'Ivoire", "price": 11765 },
                        { "name": "Nigeria", "price": 6199 },
                        { "name": "Tajikistan", "price": 8000 },
                        { "name": "Vietnam", "price": 10000 },
                        { "name": "Ethiopia", "price": 8999 },
                        { "name": "Afganistan", "price": 12859 },
                        { "name": "Netherlands", "price": 10000 },
                        { "name": "Yemen", "price": 10000 },
                        { "name": "Meksiko", "price": 10000 }
                    ]
                },
                {
                    "id": 11,
                    "name": "Nokos WhatsApp Old",
                    "icon": "fab fa-whatsapp",
                    "description": "Ready Nokos WhatsApp Old. Apabila stock tidak tersedia bergaransi 100% uang kembali.",
                    "variants": [
                        { "name": "Cameroon", "price": 28792 },
                        { "name": "Venezuela", "price": 29817 },
                        { "name": "Burundi", "price": 27969 },
                        { "name": "Rep. Afrika Tengah", "price": 25769 },
                        { "name": "Rusia/Kazakhstan", "price": 30752 },
                        { "name": "Nepal", "price": 18816 },
                        { "name": "Sudan", "price": 15390 }
                    ]
                },
            ]
        };