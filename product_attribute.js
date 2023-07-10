const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const WooCommerce = new WooCommerceRestApi({
  url: 'http://localhost/wordpress',
  consumerKey: 'ck_ef43ba127bb756039da6f62d22a1e2b46e1d6b4b',
  consumerSecret: 'cs_93b8ad34a85fea3b369cc0d2672d2353e3f5d383',
  version: 'wc/v3'
});

// const data = {
//   name: "Color",
//   slug: "pa_color",
//   type: "select",
//   order_by: "menu_order",
//   // has_archives: true
// };

// WooCommerce.post("products/attributes", data)
//   .then((response) => {
//         console.log(JSON.stringify(response.data, null, 2));
//   })
//   .catch((error) => {
//     console.log(error.response.data);
//   });

// create product attribute term
// const attribute = {
//   name: "Green"
// };

// WooCommerce.post("products/attributes/1/terms", attribute)
//   .then((response) => {
//         console.log(JSON.stringify(response.data, null, 2));
//   })
//   .catch((error) => {
//     console.log(error.response.data);
//   });