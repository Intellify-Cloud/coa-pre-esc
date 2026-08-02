<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Coastal Preferred Escapes</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'cpe-navy': '#0f3c5f',
            'cpe-gold': '#cd9d3e',
            'cpe-gold-light': '#ebd597',
            'cpe-silver': '#b3c3d1',
            'cpe-gray': '#f5f5f5',
          },
          fontFamily: {
            'serif': ['"Times New Roman"', 'Times', 'serif'],
            'sans': ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
          }
        }
      }
    }
  </script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet"/>
<style data-purpose="custom-styles">
    .hero-bg {
      background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBk16tTurwVQPXaLAcVxjsPOuA8e4VFsdWwHtIgi-O8gVJ0Xy-Ju-mNwzsHaabfULIblasEj60d5qHJsIkhNbmLSyqIZQhKdcLomYnzBkKiYqY-tOmWWHvy3R1w_ytwYaHcoZkV_M-d2O6uphqeWoBbqPnxl-InilC7IhsMcKB9WC1ZJMhMAYxMRzMtJoLuOiO35u6Ex6cKAo9lExfC5aYqx4lgXfGuqvhDW1l4fsx6Dl0RpiQAVw0Ja0oebV0PpXAaqA');
      background-size: cover;
      background-position: top center;
      /* Positioning to match the specific crop from the original image if possible, though a generic beach scene is safer */
    }
    .wave-bottom {
      position: relative;
    }
    .wave-bottom::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 20px;
      background-color: white;
      border-radius: 100% 100% 0 0;
      z-index: 10;
    }
    .card-wave {
      border-radius: 100% 100% 0 0;
      height: 30px;
      margin-top: -15px;
      background-color: white;
      position: relative;
      z-index: 10;
    }
  </style>
</head>
<body class="font-sans text-gray-800 antialiased bg-gray-50">
<!-- BEGIN: MainHeader -->
<header class="bg-white sticky top-0 z-50 shadow-sm" data-purpose="main-header">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
<!-- Logo -->
<div class="flex items-center">
<div class="text-3xl font-serif text-cpe-navy font-bold leading-none">CPE</div>
<div class="ml-2 border-l border-cpe-navy pl-2 text-xs font-serif text-cpe-navy leading-tight uppercase tracking-wider">
          Coastal<br/>Preferred<br/>Escapes
        </div>
</div>
<!-- Navigation -->
<nav aria-label="Main Navigation" class="hidden md:flex space-x-8 text-sm font-semibold text-cpe-navy uppercase tracking-wider">
<a class="hover:text-cpe-gold transition duration-200" href="#">Home</a>
<a class="hover:text-cpe-gold transition duration-200" href="#">Membership</a>
<a class="hover:text-cpe-gold transition duration-200" href="#">Resorts</a>
<a class="hover:text-cpe-gold transition duration-200" href="#">About CPE</a>
<a class="hover:text-cpe-gold transition duration-200" href="#">FAQ</a>
<a class="hover:text-cpe-gold transition duration-200" href="#">Contact</a>
</nav>
<!-- Member Login Button -->
<div class="hidden md:block">
<a class="bg-cpe-navy text-white px-6 py-2 rounded text-sm font-semibold uppercase tracking-wider hover:bg-opacity-90 transition duration-200 inline-flex items-center" href="#">
<i class="fa-solid fa-user mr-2"></i> Member Login
        </a>
</div>
<!-- Mobile Menu Button (Placeholder) -->
<div class="md:hidden">
<button class="text-cpe-navy">
<i class="fa-solid fa-bars text-2xl"></i>
</button>
</div>
</div>
<div class="text-center pb-2 text-xs text-cpe-gold font-semibold uppercase tracking-widest hidden md:block">
      Your beach. Your family. Your escape.
    </div>
</header>
<!-- END: MainHeader -->
<main>
<!-- BEGIN: Hero Section -->
<section class="relative h-[600px] flex items-center wave-bottom" data-purpose="hero-section">
<!-- Background Image Placeholder (Requires actual image) -->
<div class="absolute inset-0 bg-cover bg-center z-0" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA9hm6YNFjvOZkvhZmO3Y-_LUKgd6VzD1LtrG5SRZTQG250x10jnntkFw6O4MJhP5uMyF5m64WnT49ek6ILvdn8bqwczl5vo7lM2ljIuG_rYhYDkGhYGwu9V1xjISgO4KxY2TnpdgKuSKaiDC_5ZEFOQ-WN-9ZF7lXNYz2Clk-7TfN6PU2KZwQlpY9zmXm7xrdpIeHRRUxVHFQJ5n1OQuDkTvyLo1mdrczi9ozTUDF9P7KJDv_4M8d0');">
<!-- Fallback gradient -->
<div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent"></div>
</div>
<div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
<div class="max-w-2xl">
<h1 class="text-5xl md:text-6xl font-serif font-bold text-cpe-navy mb-2 leading-tight">
            Your beach holiday.
          </h1>
<h2 class="text-5xl md:text-6xl font-serif font-bold text-cpe-gold mb-8 leading-tight">
            Every year.
          </h2>
<p class="text-lg md:text-xl text-gray-700 mb-6 font-medium leading-relaxed max-w-lg">
            Join Coastal Preferred Escapes and enjoy affordable, flexible beach holidays at Cabana Mio – and future partner resorts.
          </p>
<ul class="space-y-3 mb-10 text-gray-700 font-medium">
<li class="flex items-center"><i class="fa-solid fa-circle-check text-cpe-gold mr-3 text-xl"></i> Interest-free monthly payments</li>
<li class="flex items-center"><i class="fa-solid fa-circle-check text-cpe-gold mr-3 text-xl"></i> Flexible booking within your season</li>
<li class="flex items-center"><i class="fa-solid fa-circle-check text-cpe-gold mr-3 text-xl"></i> Pause when life gets in the way</li>
<li class="flex items-center"><i class="fa-solid fa-circle-check text-cpe-gold mr-3 text-xl"></i> Loyalty rewards for our Founding Families</li>
</ul>
<div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
<a class="bg-cpe-navy text-white px-8 py-3 text-center text-sm font-semibold uppercase tracking-wider rounded hover:bg-opacity-90 transition duration-200" href="#">
              Explore Memberships
            </a>
<a class="bg-white border-2 border-cpe-navy text-cpe-navy px-8 py-3 text-center text-sm font-semibold uppercase tracking-wider rounded hover:bg-gray-50 transition duration-200" href="#">
              Discover Cabana Mio
            </a>
</div>
</div>
</div>
</section>
<!-- END: Hero Section -->
<!-- BEGIN: Features Section -->
<section class="py-12 bg-white" data-purpose="features-section">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="grid grid-cols-1 md:grid-cols-5 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
<!-- Feature 1 -->
<div class="py-4 md:py-0 px-4">
<div class="text-cpe-navy text-4xl mb-4"><i class="fa-solid fa-users"></i></div>
<h3 class="font-serif font-bold text-xl text-cpe-navy mb-2">For Families</h3>
<p class="text-sm text-gray-600">Holidays that bring you closer</p>
</div>
<!-- Feature 2 -->
<div class="py-4 md:py-0 px-4">
<div class="text-cpe-navy text-4xl mb-4"><i class="fa-regular fa-calendar-check"></i></div>
<h3 class="font-serif font-bold text-xl text-cpe-navy mb-2">Flexible</h3>
<p class="text-sm text-gray-600">You choose when you go</p>
</div>
<!-- Feature 3 -->
<div class="py-4 md:py-0 px-4">
<div class="text-cpe-navy text-4xl mb-4"><i class="fa-solid fa-wallet"></i></div>
<h3 class="font-serif font-bold text-xl text-cpe-navy mb-2">Affordable</h3>
<p class="text-sm text-gray-600">Build your holiday from just R650 pm</p>
</div>
<!-- Feature 4 -->
<div class="py-4 md:py-0 px-4">
<div class="text-cpe-navy text-4xl mb-4"><i class="fa-solid fa-circle-pause"></i></div>
<h3 class="font-serif font-bold text-xl text-cpe-navy mb-2">Life Happens</h3>
<p class="text-sm text-gray-600">Pause your membership when needed</p>
</div>
<!-- Feature 5 -->
<div class="py-4 md:py-0 px-4">
<div class="text-cpe-navy text-4xl mb-4"><i class="fa-solid fa-medal"></i></div>
<h3 class="font-serif font-bold text-xl text-cpe-navy mb-2">Loyalty Matters</h3>
<p class="text-sm text-gray-600">Longer membership, greater benefits</p>
</div>
</div>
</div>
</section>
<!-- END: Features Section -->
<!-- BEGIN: Memberships Section -->
<section class="py-16 bg-cpe-gray" data-purpose="membership-pricing">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 class="text-3xl md:text-4xl font-serif font-bold text-center text-cpe-navy mb-12 uppercase tracking-wide">
          Choose Your Membership
        </h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<!-- Silver Tier -->
<div class="bg-white rounded-t-lg shadow-lg flex flex-col relative overflow-hidden">
<div class="bg-cpe-silver text-center py-6 pb-10 rounded-t-lg">
<h3 class="font-serif text-2xl font-bold text-cpe-navy uppercase tracking-widest">Silver</h3>
<p class="text-sm text-cpe-navy uppercase tracking-wider font-semibold">Membership</p>
</div>
<div class="card-wave"></div>
<div class="p-8 flex-grow flex flex-col justify-between">
<ul class="space-y-4 mb-8 text-gray-700">
<li class="flex items-center"><i class="fa-solid fa-circle-check text-cpe-silver mr-3"></i> 1 standard week per year</li>
<li class="flex items-center"><i class="fa-solid fa-circle-check text-cpe-silver mr-3"></i> Flexible booking within season</li>
<li class="flex items-center"><i class="fa-solid fa-circle-check text-cpe-silver mr-3"></i> Access to standard weeks</li>
<li class="flex items-center"><i class="fa-solid fa-circle-check text-cpe-silver mr-3"></i> Member pricing on extras</li>
</ul>
<div class="flex items-center justify-between mt-auto border-t pt-6 border-gray-100">
<div class="text-sm text-gray-500 uppercase tracking-wide">From <span class="text-lg font-bold text-gray-900">R650 pm</span></div>
<button class="border-2 border-cpe-navy text-cpe-navy px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-cpe-navy hover:text-white transition duration-200">View Details</button>
</div>
</div>
</div>
<!-- Gold Tier -->
<div class="bg-white rounded-t-lg shadow-xl flex flex-col relative overflow-hidden transform md:-translate-y-4">
<div class="bg-cpe-gold text-center py-8 pb-12 rounded-t-lg">
<h3 class="font-serif text-2xl font-bold text-cpe-navy uppercase tracking-widest">Gold</h3>
<p class="text-sm text-cpe-navy uppercase tracking-wider font-semibold">Membership</p>
</div>
<div class="card-wave"></div>
<div class="p-8 flex-grow flex flex-col justify-between">
<ul class="space-y-4 mb-8 text-gray-700">
<li class="flex items-center"><i class="fa-solid fa-circle-check text-cpe-gold mr-3"></i> 1 standard week per year</li>
<li class="flex items-center"><i class="fa-solid fa-circle-check text-cpe-gold mr-3"></i> Priority booking</li>
<li class="flex items-center"><i class="fa-solid fa-circle-check text-cpe-gold mr-3"></i> Access to premium weeks</li>
<li class="flex items-center"><i class="fa-solid fa-circle-check text-cpe-gold mr-3"></i> Pay the difference to upgrade</li>
<li class="flex items-center"><i class="fa-solid fa-circle-check text-cpe-gold mr-3"></i> Member pricing on extras</li>
</ul>
<div class="flex items-center justify-between mt-auto border-t pt-6 border-gray-100">
<div class="text-sm text-cpe-gold uppercase tracking-wide">From <span class="text-lg font-bold">R850 pm</span></div>
<button class="bg-cpe-gold text-white px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-opacity-90 transition duration-200">View Details</button>
</div>
</div>
</div>
<!-- Platinum Tier -->
<div class="bg-white rounded-t-lg shadow-lg flex flex-col relative overflow-hidden">
<div class="bg-cpe-navy text-center py-6 pb-10 rounded-t-lg">
<h3 class="font-serif text-2xl font-bold text-white uppercase tracking-widest">Platinum</h3>
<p class="text-sm text-gray-300 uppercase tracking-wider font-semibold">Membership</p>
</div>
<div class="card-wave"></div>
<div class="p-8 flex-grow flex flex-col justify-between">
<ul class="space-y-4 mb-8 text-gray-700">
<li class="flex items-center"><i class="fa-solid fa-circle-check text-cpe-navy mr-3"></i> Peak season priority</li>
<li class="flex items-center"><i class="fa-solid fa-circle-check text-cpe-navy mr-3"></i> Extended booking window</li>
<li class="flex items-center"><i class="fa-solid fa-circle-check text-cpe-navy mr-3"></i> Access to premium weeks</li>
<li class="flex items-center"><i class="fa-solid fa-circle-check text-cpe-navy mr-3"></i> Guest vouchers</li>
<li class="flex items-center"><i class="fa-solid fa-circle-check text-cpe-navy mr-3"></i> Discounts on extra nights</li>
</ul>
<div class="flex items-center justify-between mt-auto border-t pt-6 border-gray-100">
<div class="text-sm text-gray-500 uppercase tracking-wide">From <span class="text-lg font-bold text-gray-900">R1,150 pm</span></div>
<button class="bg-cpe-navy text-white px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-opacity-90 transition duration-200">View Details</button>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- END: Memberships Section -->
<!-- BEGIN: Resort Showcase -->
<section class="py-16 bg-white" data-purpose="resort-showcase">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex flex-col lg:flex-row gap-8">
<!-- Text Content -->
<div class="lg:w-1/3 flex flex-col justify-center bg-gray-50 p-8 rounded">
<p class="text-cpe-gold text-xs font-bold uppercase tracking-widest mb-2">Our Flagship Resort</p>
<h2 class="text-4xl font-serif font-bold text-cpe-navy mb-1 uppercase tracking-wide">Cabana Mio</h2>
<h3 class="text-lg font-serif text-cpe-navy mb-6 uppercase tracking-wider">Warner Beach</h3>
<p class="text-gray-700 mb-8 leading-relaxed">
              Beautiful 3-bedroom duplex chalets just steps from the beach. A family favourite for over 30 years.
            </p>
<div>
<a class="bg-cpe-navy text-white px-8 py-3 text-sm font-semibold uppercase tracking-wider inline-block rounded hover:bg-opacity-90 transition duration-200" href="#">
                Explore Cabana Mio
              </a>
</div>
</div>
<!-- Image Grid -->
<div class="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
<div class="col-span-2 row-span-2">
<img alt="Cabana Mio Pool Area" class="w-full h-full object-cover rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkFM8TGbB554b6FKVgZ7ysBNHvehVVncVbVNGCTEEDlFfKIei8f3ACWxpWWN8VoJwoNvYyXr0-NYLzaTLHUh8lwmz9uF_TKBrj3QwtlQg5BloeAtUQDs8XMONkwA8uHGK5boqbdzAiO2yh0KU6hjfEE6-7kKP5VLj4gs-S82jbrvfkLLTliCXkD86boIY9gntBJYmWEAvo9O_dXJp9jMnFkgLR8sWCi5ucKVqPp8dBgWAfjsLTesov"/>
</div>
<div>
<img alt="Chalet Lounge" class="w-full h-full object-cover rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIHAhf0umV65Nl1KXvtnPlRj8eUc9-OwL4sVhs56OFD-MOqqTt2irTcHHIhJh5o1gEY3hvYvUhFUX5zYsXsNrr0Tm2CKhBFJ7GqdfcsonDTMaBV5Y9DRIrAsxCxNgr9mJXosONBeIUgbB4JyEkGWEXQaaLXEd4POPcqCHHL-b35pb18Tn8XRYvgtH4HIFEmmakSjNWj7EJbGRUsxFuhG5Q1qdyGE1WGS6t9ZytilHsf0M3L35H7o8e"/>
</div>
<div>
<img alt="Chalet Bedroom" class="w-full h-full object-cover rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNwQklUN5TDFFevnfLNJ9dzLZAoD1plPzXHm3cELHp9PfY_uIlVD7yYU0gOF61kI7UtmVQktA_59_7yfqVgKmGhuuHe-dg9UDuBrcDy7HAApocbE8ckMVVSK0-ThQm3bBXlKWGEwUQl-SA6avNBllur2jdsZiDqiqShYMkCgqDrGR0ommH0Uhtzju8bKW4qyDn0F6N8KmYKjG2sJGZjDCwEW_FmVaCOY93kdha3flxZaRWF1QwF89v"/>
</div>
<div>
<img alt="Balcony View" class="w-full h-full object-cover rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGQXvsjj2z3vK1v-hroNYbxEZlwypzJUyuti24-K9tCGNPAAlqeGu-kyySiwEHJHE92BL3HjoUMwL5HfoMlNAcER97iyVW365PZuQkV8f-ZYlJtNoTbkRJKW2uROvQh_H8omjYd_p7m9y5lHKUz8TYJQR2HL5AwEX7_GtK-D4isbJbRIV_plssVgB0rYozut7RZWUCEgaUnnbnAxeKZDh-5LqJ3rQ05NL0tzxAP86wmxeAazGte2KC"/>
</div>
<div>
<img alt="Sunset over ocean" class="w-full h-full object-cover rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSYawpsbQ0uV8MoytlLRJahLRNrmke1cY8RbM2c-SzBnejzZ9VBUBcYaDcFa2pzv5wFJTw02RuKEepUHsbXoRmCNmZ2-LNpjUePQmcHu7BuiPTq55ISxa7dYIHhAQzqlmSQSgh-Vb4juGuNWrUyFJB-QqNgVhwO_xIcKZCtE3R_uhdc1F86AchvUH8lSm4RX4DphcC0Zd_eMkgc0SIJrdtYtJBahPlUxP9zPOjkOeoyzO6u-TKfpey"/>
</div>
</div>
</div>
</div>
</section>
<!-- END: Resort Showcase -->
<!-- BEGIN: Social Proof & Stats -->
<section class="py-12 bg-gray-100 border-t border-b border-gray-200" data-purpose="social-proof">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex flex-col md:flex-row items-center justify-between gap-8">
<!-- Quote -->
<div class="md:w-1/2 flex items-start space-x-4">
<i class="fa-solid fa-quote-left text-4xl text-cpe-gold opacity-50"></i>
<div>
<p class="text-gray-800 text-lg font-medium italic mb-4 leading-relaxed">
                "CPE gives us peace of mind. We know our beach holiday is sorted every year, and the kids look forward to it all year long!"
              </p>
<p class="text-gray-600 font-semibold">— The Meyer Family, CPE Members</p>
</div>
</div>
<!-- Stats -->
<div class="md:w-1/2 flex justify-around w-full">
<div class="text-center">
<i class="fa-solid fa-users text-3xl text-cpe-navy mb-2"></i>
<div class="text-3xl font-serif font-bold text-cpe-navy">30+</div>
<div class="text-xs text-gray-600 uppercase tracking-wide">Years of<br/>happy holidays</div>
</div>
<div class="text-center">
<i class="fa-regular fa-star text-3xl text-cpe-navy mb-2"></i>
<div class="text-3xl font-serif font-bold text-cpe-navy">260</div>
<div class="text-xs text-gray-600 uppercase tracking-wide">Weeks of quality<br/>accommodation</div>
</div>
<div class="text-center">
<i class="fa-regular fa-heart text-3xl text-cpe-navy mb-2"></i>
<div class="text-3xl font-serif font-bold text-cpe-navy">1000+</div>
<div class="text-xs text-gray-600 uppercase tracking-wide">Families and<br/>growing</div>
</div>
</div>
</div>
</div>
</section>
<!-- END: Social Proof & Stats -->
<!-- BEGIN: CTA Banner -->
<section class="py-10 bg-cpe-navy" data-purpose="cta-banner">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div class="flex items-center space-x-6 text-white">
<i class="fa-solid fa-user-group text-5xl text-cpe-gold"></i>
<div>
<h3 class="text-2xl font-serif font-bold uppercase tracking-wider text-cpe-gold mb-1">Become a Founding Family</h3>
<p class="text-sm text-gray-300">Limited Founding Family memberships available.<br/>Join today and secure your family's annual beach holiday.</p>
</div>
</div>
<div>
<a class="bg-cpe-gold text-cpe-navy px-8 py-3 text-sm font-bold uppercase tracking-wider inline-block rounded hover:bg-cpe-gold-light transition duration-200" href="#">
            Join the Waiting List
          </a>
</div>
</div>
</section>
<!-- END: CTA Banner -->
</main>
<!-- BEGIN: MainFooter -->
<footer class="bg-[#0a2540] text-gray-300 py-12 border-t-4 border-cpe-gold" data-purpose="main-footer">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-gray-700 pb-8">
<!-- Logo & Tagline -->
<div class="col-span-1 md:col-span-1">
<div class="flex items-center mb-4">
<div class="text-4xl font-serif text-white font-bold leading-none">CPE</div>
<div class="ml-2 border-l border-white pl-2 text-xs font-serif text-white leading-tight uppercase tracking-wider">
              Coastal<br/>Preferred<br/>Escapes
            </div>
</div>
<p class="text-xs text-cpe-gold uppercase tracking-widest">Your beach. Your family. Your escape.</p>
</div>
<!-- Quick Links -->
<div>
<h4 class="text-white font-semibold uppercase tracking-wider mb-4 text-sm">Quick Links</h4>
<ul class="space-y-2 text-sm">
<li><a class="hover:text-white transition" href="#">Membership</a></li>
<li><a class="hover:text-white transition" href="#">Cabana Mio</a></li>
<li><a class="hover:text-white transition" href="#">About CPE</a></li>
<li><a class="hover:text-white transition" href="#">FAQ</a></li>
<li><a class="hover:text-white transition" href="#">Contact Us</a></li>
<li><a class="hover:text-white transition" href="#">Member Login</a></li>
</ul>
</div>
<!-- Contact Us -->
<div>
<h4 class="text-white font-semibold uppercase tracking-wider mb-4 text-sm">Contact Us</h4>
<ul class="space-y-3 text-sm">
<li class="flex items-start"><i class="fa-solid fa-phone mt-1 mr-3 w-4 text-center"></i> 031 916 5000</li>
<li class="flex items-start"><i class="fa-solid fa-envelope mt-1 mr-3 w-4 text-center"></i> info@cpe.co.za</li>
<li class="flex items-start"><i class="fa-solid fa-location-dot mt-1 mr-3 w-4 text-center"></i> Warner Beach, KZN, South Africa</li>
</ul>
</div>
<!-- Follow Us -->
<div>
<h4 class="text-white font-semibold uppercase tracking-wider mb-4 text-sm">Follow Us</h4>
<div class="flex space-x-4">
<a class="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center hover:bg-white hover:text-cpe-navy transition" href="#"><i class="fa-brands fa-facebook-f"></i></a>
<a class="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center hover:bg-white hover:text-cpe-navy transition" href="#"><i class="fa-brands fa-instagram"></i></a>
<a class="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center hover:bg-white hover:text-cpe-navy transition" href="#"><i class="fa-brands fa-tiktok"></i></a>
<a class="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center hover:bg-white hover:text-cpe-navy transition" href="#"><i class="fa-brands fa-youtube"></i></a>
</div>
</div>
</div>
<!-- Copyright & Legal -->
<div class="flex flex-col md:flex-row justify-between items-center text-xs">
<p>© 2025 Coastal Preferred Escapes (Pty) Ltd. All rights reserved.</p>
<div class="space-x-4 mt-4 md:mt-0">
<a class="hover:text-white transition" href="#">Terms &amp; Conditions</a>
<span>|</span>
<a class="hover:text-white transition" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>
<!-- END: MainFooter -->
</body></html>