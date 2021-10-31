// // Amazon - Search Results
// fetch("https://amazon-data-scraper15.p.rapidapi.com/search/Bang%20Olufsen?api_key=55d4588fcd6ce77b428b73d97f714195", {
//   "method": "GET",
//   "headers": {
//     "x-rapidapi-host": "amazon-data-scraper15.p.rapidapi.com",
//     "x-rapidapi-key": "9060639b0cmsh3e48cc5ea6c1685p11bebejsn5ce7c058be49"
//   }
// })
//   .then(response => {
//     response.json().then((res) => console.log('>>> Amazon Search Results: ', res))
//   })
//   .catch(err => {
//     console.error('>>> err: ', err);
//   });

export default {
  pagination: [
    "https://www.amazon.in/s?k=Bang+Olufsen&qid=1634577749&ref=sr_pg_1&page=2",
    "https://www.amazon.in/s?k=Bang+Olufsen&qid=1634577749&ref=sr_pg_1&page=3",
    "https://www.amazon.in/s?k=Bang+Olufsen&qid=1634577749&ref=sr_pg_1&page=4",
    "https://www.amazon.in/s?k=Bang+Olufsen&qid=1634577749&ref=sr_pg_1&page=5",
    "https://www.amazon.in/s?k=Bang+Olufsen&qid=1634577749&ref=sr_pg_1&page=6",
    "https://www.amazon.in/s?k=Bang+Olufsen&qid=1634577749&ref=sr_pg_1&page=7",
    "https://www.amazon.in/s?k=Bang+Olufsen&qid=1634577749&ref=sr_pg_1&page=8",
    "https://www.amazon.in/s?k=Bang+Olufsen&qid=1634577749&ref=sr_pg_1&page=9",
    "https://www.amazon.in/s?k=Bang+Olufsen&qid=1634577749&ref=sr_pg_1&page=10",
    "https://www.amazon.in/s?k=Bang+Olufsen&qid=1634577749&ref=sr_pg_1&page=11",
    "https://www.amazon.in/s?k=Bang+Olufsen&qid=1634577749&ref=sr_pg_1&page=12",
    "https://www.amazon.in/s?k=Bang+Olufsen&qid=1634577749&ref=sr_pg_1&page=13",
    "https://www.amazon.in/s?k=Bang+Olufsen&qid=1634577749&ref=sr_pg_1&page=14",
    "https://www.amazon.in/s?k=Bang+Olufsen&qid=1634577749&ref=sr_pg_1&page=15",
    "https://www.amazon.in/s?k=Bang+Olufsen&qid=1634577749&ref=sr_pg_1&page=16",
    "https://www.amazon.in/s?k=Bang+Olufsen&qid=1634577749&ref=sr_pg_1&page=17",
    "https://www.amazon.in/s?k=Bang+Olufsen&qid=1634577749&ref=sr_pg_1&page=18",
    "https://www.amazon.in/s?k=Bang+Olufsen&qid=1634577749&ref=sr_pg_1&page=19",
    "https://www.amazon.in/s?k=Bang+Olufsen&qid=1634577749&ref=sr_pg_1&page=20"
  ],
  results: [
    {
      id: 'B085R59TVK',
      "availability_quantity": 1,
      "has_prime": true,
      // "image": "https://m.media-amazon.com/images/I/71Xwd706mIL.jpg",
      image: 'https://i.pinimg.com/originals/eb/c5/d0/ebc5d040c8ff5fff0e623d44b337e0fa.jpg',
      "is_amazon_choice": false,
      "is_best_seller": false,
      "is_limited_deal": false,
      name: "BeoPlay Speaker",
      brand: "Bang and Olufsen",
      price: 755,
      "price_string": "₹20,000",
      "price_symbol": "₹",
      "spec": [
        Object
      ],
      "stars": 4.5,
      "total_reviews": null,
      "type": "search_product",
      "url": "https://www.amazon.in/Bang-Olufsen-Integration-Microphones-Waterproof/dp/B085R59TVK/ref=sr_1_3?dchild=1&keywords=Bang+Olufsen&qid=1634577749&sr=8-3"
    },
    {
      id: 'B08N5VPDGQ',
      "availability_quantity": null,
      "has_prime": true,
      // "image": "https://m.media-amazon.com/images/I/71zcuH0WpUL.jpg",
      image: 'https://i.pinimg.com/originals/83/21/6f/83216f9302bd2dd863ea63ddfc37ff95.jpg',
      "is_amazon_choice": false,
      "is_best_seller": false,
      "is_limited_deal": false,
      name: "Beosound A1 2nd",
      brand: "Bang and Olufsen",
      price: 549,
      "price_string": "₹25,000",
      "price_symbol": "₹",
      "spec": [
        Object
      ],
      "stars": 4.5,
      "total_reviews": null,
      "type": "search_product",
      "url": "https://www.amazon.in/Bang-Olufsen-Integration-Microphones-Waterproof/dp/B08N5VPDGQ/ref=sr_1_4?dchild=1&keywords=Bang+Olufsen&qid=1634577749&sr=8-4"
    },
    {
      id: 'B08TZRP19J',
      "availability_quantity": 2,
      "has_prime": true,
      // "image": "https://m.media-amazon.com/images/I/81Fr+BlHhtS.jpg",
      image: 'https://kanjitsu-boplay.jp/img/detail/speakers/a9mk2/gallery_img04.jpg',
      // image: 'https://cdn.wallpaper.com/main/styles/wp_extra_large/s3/untitled-1_164.jpg',
      "is_amazon_choice": true,
      "is_best_seller": false,
      "is_limited_deal": false,
      name: "Beosound Explore - Wireless Outdoor Bluetooth Speaker",
      brand: "Bang and Olufsen",
      price: 180,
      "price_string": "₹18,000",
      "price_symbol": "₹",
      "spec": [
        Object
      ],
      "stars": 4,
      "total_reviews": null,
      "type": "search_product",
      "url": "https://www.amazon.in/Bang-Olufsen-Beosound-Explore-Waterproof/dp/B08YRT9T38/ref=sr_1_5?dchild=1&keywords=Bang+Olufsen&qid=1634577749&sr=8-5"
    },
    {
      id: 'B08SXPH879',
      "availability_quantity": null,
      "has_prime": true,
      image: 'https://kanjitsu-boplay.jp/img/detail/speakers/a9mk2/gallery_img01.jpg',
      "is_amazon_choice": false,
      "is_best_seller": false,
      "is_limited_deal": false,
      name: "Beoplay E8 Sport Truly Wireless Bluetooth in Ear Earphone with Mic (Oxy Blue)",
      brand: "Bang and Olufsen",
      price: 249,
      "price_string": "₹24,999",
      "price_symbol": "₹",
      "spec": [
        Object
      ],
      "stars": 3.7,
      "total_reviews": null,
      "type": "search_product",
      "url": "https://www.amazon.in/Bang-Olufsen-Bluetooth-Customizabl-Waterproof/dp/B08835V5DP/ref=sr_1_6?dchild=1&keywords=Bang+Olufsen&qid=1634577749&sr=8-6"
    },
    {
      id: 'B08YRT9T38',
      "availability_quantity": null,
      "has_prime": true,
      // "image": "https://m.media-amazon.com/images/I/91dhXSsucBL.jpg",
      image: 'https://images.ctfassets.net/8cd2csgvqd3m/6OxA7jkG6LxyIuALA0Osqm/ab55824de290c0847a0a523dd5380a77/Beosound_2_natural_brushed_CMS_1.png?q=90&fm=webp&w=1200&h=1200&fit=fill',
      "is_amazon_choice": false,
      "is_best_seller": false,
      "is_limited_deal": false,
      "name": "B&O Play BO1642001 Headphones (Black)",
      brand: "Bang and Olufsen",
      "price": 139,
      "price_string": "₹13,900",
      "price_symbol": "₹",
      "spec": [
        Object
      ],
      "stars": 5,
      "total_reviews": null,
      "type": "search_product",
      "url": "https://www.amazon.in/Play-Bang-Olufsen-BO1642001-Headphones/dp/B00C4VFYFY/ref=sr_1_7?dchild=1&keywords=Bang+Olufsen&qid=1634577749&sr=8-7"
    },
    {
      id: 'B08GKVL7FN',
      "availability_quantity": null,
      "has_prime": true,
      "image": "https://m.media-amazon.com/images/I/71fMR7-zwLL.jpg",
      "is_amazon_choice": false,
      "is_best_seller": false,
      "is_limited_deal": false,
      name: "Beoplay E8 3rd Generation Truly Wireless Bluetooth in Ear Earphone with Mic (Grey Mist)",
      brand: "Bang and Olufsen",
      "price": 299,
      "price_string": "₹24,999",
      "price_symbol": "₹",
      "spec": [
        Object
      ],
      "stars": 3.9,
      "total_reviews": null,
      "type": "search_product",
      "url": "https://www.amazon.in/Bang-Olufsen-Generation-Bluetooth-Earphones/dp/B08239BVNB/ref=sr_1_8?dchild=1&keywords=Bang+Olufsen&qid=1634577749&sr=8-8"
    },
    {
      id: 'B07BBVXJQQ',
      "availability_quantity": null,
      "has_prime": true,
      "image": "https://m.media-amazon.com/images/I/8125laABfbL.jpg",
      "is_amazon_choice": false,
      "is_best_seller": false,
      "is_limited_deal": false,
      name: "M3 Wireless Bluetooth Speaker (Black)",
      brand: "Bang and Olufsen",
      "price": 249,
      "price_string": "₹24,999",
      "price_symbol": "₹",
      "spec": [
        Object
      ],
      "stars": 4.1,
      "total_reviews": null,
      "type": "search_product",
      "url": "https://www.amazon.in/Bang-Olufsen-Beoplay-Powerful-Wireless/dp/B076W1CFKR/ref=sr_1_9?dchild=1&keywords=Bang+Olufsen&qid=1634577749&sr=8-9"
    },
    {
      id: 'B07MRWL9KP',
      "availability_quantity": 1,
      "has_prime": true,
      "image": "https://m.media-amazon.com/images/I/51LIcgKw66S.jpg",
      "is_amazon_choice": false,
      "is_best_seller": false,
      "is_limited_deal": false,
      name: "Beolit 20 Powerful Portable Wireless Bluetooth Speaker, Anthracite",
      brand: "Bang and Olufsen",
      "price": 510,
      "price_string": "₹51,000",
      "price_symbol": "₹",
      "spec": [
        Object
      ],
      "stars": 4.2,
      "total_reviews": null,
      "type": "search_product",
      "url": "https://www.amazon.in/Bang-Olufsen-Powerful-Bluetooth-Anthracite/dp/B091L4JGXC/ref=sr_1_10?dchild=1&keywords=Bang+Olufsen&qid=1634577749&sr=8-10"
    },
    {
      id: 'B07MRWL9KP',
      "availability_quantity": null,
      "has_prime": true,
      "image": "https://m.media-amazon.com/images/I/A1oHNzSegcL.jpg",
      "is_amazon_choice": false,
      "is_best_seller": false,
      "is_limited_deal": false,
      name: "Beoplay M5 True360 Wireless Speaker - Natural",
      brand: "Bang and Olufsen",
      price: 499,
      "price_string": "₹49,999",
      "price_symbol": "₹",
      "spec": [
        Object
      ],
      "stars": 4,
      "total_reviews": null,
      "type": "search_product",
      "url": "https://www.amazon.in/Bang-Olufsen-Multiroom-Wireless-1200305/dp/B01MQWUW8M/ref=sr_1_13?dchild=1&keywords=Bang+Olufsen&qid=1634577749&sr=8-13"
    },
    {
      id: 'B084LJ5GGN',
      "availability_quantity": null,
      "has_prime": false,
      "image": "https://m.media-amazon.com/images/I/618bWn2izYL.jpg",
      "is_amazon_choice": false,
      "is_best_seller": false,
      "is_limited_deal": false,
      name: "Beosound Explore - Wireless Outdoor Bluetooth Speaker, IP 67 Dustproof and Waterproof, Grey Mist",
      brand: "Bang and Olufsen",
      "price": 180,
      "price_string": "₹18,000",
      "price_symbol": "₹",
      "spec": [
        Object
      ],
      "stars": 4,
      "total_reviews": null,
      "type": "search_product",
      "url": "https://www.amazon.in/Bang-Olufsen-Beosound-Explore-Waterproof/dp/B08YQV138W/ref=sr_1_14?dchild=1&keywords=Bang+Olufsen&qid=1634577749&sr=8-14"
    },
    {
      id: 'B08239BVNB',
      "availability_quantity": 1,
      "has_prime": true,
      "image": "https://m.media-amazon.com/images/I/61dZz2yyFoL.jpg",
      "is_amazon_choice": false,
      "is_best_seller": false,
      "is_limited_deal": false,
      name: "Beoplay E6 Motion Wireless Bluetooth in Ear Earphone with Mic (White)",
      brand: "Bang and Olufsen",
      price: 180,
      "price_string": "₹18,000",
      "price_symbol": "₹",
      "spec": [
        Object
      ],
      "stars": 3.8,
      "total_reviews": null,
      "type": "search_product",
      "url": "https://www.amazon.in/Bang-Olufsen-Beoplay-Wireless-Earphones/dp/B07Q1ZZ88D/ref=sr_1_15?dchild=1&keywords=Bang+Olufsen&qid=1634577749&sr=8-15"
    },
    {
      id: 'B07WSJK793',
      "availability_quantity": 1,
      "has_prime": true,
      "image": "https://m.media-amazon.com/images/I/61r0cyJyQUL.jpg",
      "is_amazon_choice": false,
      "is_best_seller": false,
      "is_limited_deal": false,
      name: "Beoplay H9 3rd Gen Wireless Bluetooth Over The Ear Headphone with Mic (Argilla Bright)",
      brand: "Bang and Olufsen",
      price: 399,
      "price_string": "₹39,999",
      "price_symbol": "₹",
      "spec": [
        Object
      ],
      "stars": 4.3,
      "total_reviews": null,
      "type": "search_product",
      "url": "https://www.amazon.in/Bang-Olufsen-Beoplay-H9-3rd/dp/B086N9XDNS/ref=sr_1_16?dchild=1&keywords=Bang+Olufsen&qid=1634577749&sr=8-16"
    },
    {
      id: 'B074WTKWG6',
      "availability_quantity": 1,
      "has_prime": false,
      "image": "https://m.media-amazon.com/images/I/710fbbdjaLL.jpg",
      "is_amazon_choice": false,
      "is_best_seller": false,
      "is_limited_deal": false,
      name: "BeoPlay A1 60 Watt Wireless Bluetooth Speaker (Black)",
      "price": 21000,
      "price_string": "₹21,000",
      "price_symbol": "₹",
      "spec": [
        Object
      ],
      "stars": 4.1,
      "total_reviews": null,
      "type": "search_product",
      "url": "https://www.amazon.in/Bang-Olufsen-BeoPlay-Wireless-Speakers/dp/B01KIV5WE4/ref=sr_1_17?dchild=1&keywords=Bang+Olufsen&qid=1634577749&sr=8-17"
    },
    {
      id: 'B091L4WLGN',
      "availability_quantity": 1,
      "has_prime": false,
      "image": "https://m.media-amazon.com/images/I/61weyuXh2lS.jpg",
      "is_amazon_choice": false,
      "is_best_seller": false,
      "is_limited_deal": false,
      name: "Beolit 20 Wireless Bluetooth Portable Speaker (Grey Mist)",
      "price": 51000,
      "price_string": "₹51,000",
      "price_symbol": "₹",
      "spec": [
        Object
      ],
      "stars": 4.2,
      "total_reviews": null,
      "type": "search_product",
      "url": "https://www.amazon.in/Bang-Olufsen-Wireless-Bluetooth-Portable/dp/B091L4WLGN/ref=sr_1_18?dchild=1&keywords=Bang+Olufsen&qid=1634577749&sr=8-18"
    },
    {
      id: 'B08N5YCCMF',
      "availability_quantity": null,
      "has_prime": true,
      "image": "https://m.media-amazon.com/images/I/51qqLHoPXWL.jpg",
      "is_amazon_choice": false,
      "is_best_seller": false,
      "is_limited_deal": false,
      name: "Beoplay E8 3rd Generation True Wireless in-Ear Bluetooth Earphones, with Microphones and Touch Control, Wireless Charging Case, 35-Hour Playtime, Gold Mist",
      "price": 24999,
      "price_string": "₹24,999",
      "price_symbol": "₹",
      "spec": [
        Object
      ],
      "stars": 3.9,
      "total_reviews": null,
      "type": "search_product",
      "url": "https://www.amazon.in/Bang-Olufsen-Beoplay-3rd-Gold/dp/B08N5YCCMF/ref=sr_1_19?dchild=1&keywords=Bang+Olufsen&qid=1634577749&sr=8-19"
    },
    {
      id: 'B00OW2PJTO',
      "availability_quantity": 1,
      "has_prime": true,
      "image": "https://m.media-amazon.com/images/I/814g1AoMpDL.jpg",
      "is_amazon_choice": false,
      "is_best_seller": false,
      "is_limited_deal": false,
      "name": "B&O Play by Bang & Olufsen 1642303 On-Ear Headphones (Silver Cloud)",
      "price": 13500,
      "price_string": "₹13,500",
      "price_symbol": "₹",
      "spec": [
        Object
      ],
      "stars": 5,
      "total_reviews": null,
      "type": "search_product",
      "url": "https://www.amazon.in/Play-Bang-Olufsen-1642303-Headphones/dp/B00OW2PJTO/ref=sr_1_20?dchild=1&keywords=Bang+Olufsen&qid=1634577749&sr=8-20"
    }
  ]
};
