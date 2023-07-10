const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

const WooCommerce = new WooCommerceRestApi({
  url: 'http://localhost/wordpress/shop/',
  consumerKey: 'ck_ef43ba127bb756039da6f62d22a1e2b46e1d6b4b',
  consumerSecret: 'cs_93b8ad34a85fea3b369cc0d2672d2353e3f5d383',
  version: 'wc/v3'
});
