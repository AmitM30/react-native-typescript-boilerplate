// // auto complete
// fetch("https://sephora.p.rapidapi.com/auto-complete?q=eyeshadows", {
//   "method": "GET",
//   "headers": {
//     "x-rapidapi-host": "sephora.p.rapidapi.com",
//     "x-rapidapi-key": "9060639b0cmsh3e48cc5ea6c1685p11bebejsn5ce7c058be49"
//   }
// })
//   .then(response => {
//     response.json().then((res) => console.log('>>> autocomplete: ', res))
//   })
//   .catch(err => {
//     console.error('>>> err: ', err);
//   });

export default {
  "responseSource": "Endeca",
  "typeAheadTerms": [
    {
      "brandName": "WESTMAN ATELIER",
      "defaultSku": [
        Object
      ],
      "productId": "P468436",
      "productName": "Eye Pods Eyeshadows"
    },
    {
      "brandName": "HUDA BEAUTY",
      "defaultSku": [
        Object
      ],
      "productId": "P440102",
      "productName": "Matte & Metal Melted Double Ended Liquid Eyeshadows"
    }
  ]
};
