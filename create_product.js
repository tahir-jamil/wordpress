const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const WooCommerce = new WooCommerceRestApi({
  url: 'http://localhost/wordpress',
  consumerKey: 'ck_ef43ba127bb756039da6f62d22a1e2b46e1d6b4b',
  consumerSecret: 'cs_93b8ad34a85fea3b369cc0d2672d2353e3f5d383',
  version: 'wc/v3'
});

const data = {
  "name": "testing product coding",
  "type": "variable",
  "regular_price": "19.99",
  "description": "Product description",
  "attributes": [
    {
      "name": "Color",
      "visible": true,
      "variation": true,
      options: [
        "RED",
        "Green",
        "Orange",
        "Blue"
      ]
    },
  ],
  default_attributes: [
    {
      name: "Color",
      option: "RED"
    },
  ],
  images: [
    {
      src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg"
    },
    {
      src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_back.jpg"
    }
  ],
};

WooCommerce.post("products", data)
  .then((response) => {
        console.log(JSON.stringify(response.data, null, 2));
  })
  .catch((error) => {
    console.log(error.response.data);
  });
