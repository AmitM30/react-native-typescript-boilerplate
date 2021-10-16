// // categories
// fetch("https://sephora.p.rapidapi.com/categories/v2/list-root", {
//   "method": "GET",
//   "headers": {
//     "x-rapidapi-host": "sephora.p.rapidapi.com",
//     "x-rapidapi-key": "9060639b0cmsh3e48cc5ea6c1685p11bebejsn5ce7c058be49"
//   }
// })
//   .then(response => {
//     response.json().then((res) => console.log('>>> categories: ', res))
//   })
//   .catch(err => {
//     console.error('>>> err: ', err);
//   });

export default {
  rootCategories: [
    {
      "categoryId": "cat140006",
      "displayName": "Makeup",
      "hasChildCategories": true,
      "hasDropdownMenu": true,
      "megaNavMarketingBanner": [
        Array
      ],
      "selectedThumbImage": "https://www.sephora.com/contentimages/category/cat140006-thumb-selected.png",
      "showInAppJaBsDropdown": true,
      "targetUrl": "/shop/makeup-cosmetics",
      "thumbImage": "https://www.sephora.com/contentimages/category/cat140006-thumb.jpg"
    },
    {
      "categoryId": "cat150006",
      "displayName": "Skincare",
      "hasChildCategories": true,
      "hasDropdownMenu": true,
      "megaNavMarketingBanner": [
        Array
      ],
      "selectedThumbImage": "https://www.sephora.com/contentimages/category/cat150006-thumb-selected.png",
      "showInAppJaBsDropdown": true,
      "targetUrl": "/shop/skincare",
      "thumbImage": "https://www.sephora.com/contentimages/category/cat150006-thumb.jpg"
    },
    {
      "categoryId": "cat130038",
      "displayName": "Hair",
      "hasChildCategories": true,
      "hasDropdownMenu": true,
      "megaNavMarketingBanner": [
        Array
      ],
      "selectedThumbImage": "https://www.sephora.com/contentimages/category/cat130038-thumb-selected.png",
      "showInAppJaBsDropdown": true,
      "targetUrl": "/shop/hair-products",
      "thumbImage": "https://www.sephora.com/contentimages/category/cat130038-thumb.jpg"
    },
    {
      "categoryId": "cat130042",
      "displayName": "Tools & Brushes",
      "hasChildCategories": true,
      "hasDropdownMenu": true,
      "megaNavMarketingBanner": [
        Array
      ],
      "selectedThumbImage": "https://www.sephora.com/contentimages/category/cat130042-thumb-selected.png",
      "showInAppJaBsDropdown": true,
      "targetUrl": "/shop/makeup-tools",
      "thumbImage": "https://www.sephora.com/contentimages/category/cat130042-thumb.jpg"
    },
    {
      "categoryId": "cat160006",
      "displayName": "Fragrance",
      "hasChildCategories": true,
      "hasDropdownMenu": true,
      "megaNavMarketingBanner": [
        Array
      ],
      "selectedThumbImage": "https://www.sephora.com/contentimages/category/cat160006-thumb-selected.png",
      "showInAppJaBsDropdown": true,
      "targetUrl": "/shop/fragrance",
      "thumbImage": "https://www.sephora.com/contentimages/category/cat160006-thumb.jpg"
    },
    {
      "categoryId": "cat140014",
      "displayName": "Bath & Body",
      "hasChildCategories": true,
      "hasDropdownMenu": true,
      "megaNavMarketingBanner": [
        Array
      ],
      "selectedThumbImage": "https://www.sephora.com/contentimages/category/cat140014-thumb-selected.png",
      "showInAppJaBsDropdown": true,
      "targetUrl": "/shop/bath-body",
      "thumbImage": "https://www.sephora.com/contentimages/category/cat140014-thumb.jpg"
    },
    {
      "categoryId": "cat60270",
      "displayName": "Gifts",
      "hasChildCategories": true,
      "hasDropdownMenu": true,
      "megaNavMarketingBanner": [
        Array
      ],
      "selectedThumbImage": "https://www.sephora.com/contentimages/category/cat60270-thumb-selected.png",
      "showInAppJaBsDropdown": false,
      "targetUrl": "/shop/gifts",
      "thumbImage": "https://www.sephora.com/contentimages/category/cat60270-thumb.jpg"
    },
    {
      "categoryId": "cat130044",
      "displayName": "Men",
      "hasChildCategories": true,
      "hasDropdownMenu": true,
      "megaNavMarketingBanner": [
        Array
      ],
      "selectedThumbImage": "https://www.sephora.com/contentimages/category/cat130044-thumb-selected.png",
      "showInAppJaBsDropdown": false,
      "targetUrl": "/shop/men",
      "thumbImage": "https://www.sephora.com/contentimages/category/cat130044-thumb.jpg"
    },
    {
      "categoryId": "cat1830032",
      "displayName": "Mini Size",
      "hasChildCategories": true,
      "hasDropdownMenu": true,
      "megaNavMarketingBanner": [
        Array
      ],
      "selectedThumbImage": "https://www.sephora.com/contentimages/category/cat1830032-thumb-selected.png",
      "showInAppJaBsDropdown": false,
      "targetUrl": "/shop/travel-size-toiletries",
      "thumbImage": "https://www.sephora.com/contentimages/category/cat1830032-thumb.jpg"
    }
  ]
};
