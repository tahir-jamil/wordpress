const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const WooCommerce = new WooCommerceRestApi({
  url: 'http://localhost/wordpress',
  consumerKey: 'ck_ef43ba127bb756039da6f62d22a1e2b46e1d6b4b',
  consumerSecret: 'cs_93b8ad34a85fea3b369cc0d2672d2353e3f5d383',
  version: 'wc/v3'
});

// const data = {
//   regular_price: "400.00",
//   image: {
//     id: 30
//   },
//   attributes: [
//     {
//       name: 'Color',
//       option: "Blue"
//     }
//   ]
// };

  const data = {
    create: [
      {
        regular_price: "10.00",
        attributes: [
          {
            name: 'Color',
            option: "RED"
          }
        ]
      },
      {
        regular_price: "20.00",
        attributes: [
          {
            name: 'Color',
            option: "Green"
          }
        ]
      },
      {
        regular_price: "30.00",
        attributes: [
          {
            name: 'Color',
            option: "Orange"
          }
        ]
      },
      {
        regular_price: "40.00",
        attributes: [
          {
            name: 'Color',
            option: "Blue"
          }
        ]
      }
    ],
    update: [
      // {
      //   id: 733,
      //   regular_price: "10.00"
      // }
    ],
    delete: [
      // 732
    ]
  };
  
  WooCommerce.post("products/38/variations/batch", data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
    });