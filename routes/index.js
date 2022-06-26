const account_state = require('./account_state')
const action_type = require('./action_type')
const active_history = require('./active_history')
const bill = require('./bill')
const cart = require('./cart')
const delivery = require('./delivery')
const home = require('./home')
const manager = require('./manager')
const movement_history = require('./movement_history')
const order_product = require('./order_product')
const order = require('./order')
const payment_account = require('./payment_account')
const payment_history = require('./payment_history')
const price_pro_history = require('./price_pro_history')
const product_stat = require('./product_stat')
const product = require('./product')
const quarantine_location = require('./quarantine_location')
const remain_purchase = require('./remain_purchase')
const set_of_product_stat = require('./set_of_product_stat')
const set_of_product = require('./set_of_product')
const type_of_vaccine = require('./type_of_vaccine')
const user = require('./user')
const vaccine_history = require('./vaccine_history')


function route(app) {

   app.use('/account-state', account_state);

   app.use('/action-type', action_type);

   app.use('/active-history', active_history);

   app.use('/bill', bill);

   app.use('/cart', cart);
   
   app.use('/delivery', delivery);

   app.use('/manager', manager);
   
   app.use('/movement-history', movement_history);
   
   app.use('/order-product', order_product);
   
   app.use('/order', order);
   
   app.use('/payment-account', payment_account);
   
   app.use('/payment-history', payment_history);
   
   app.use('/price-pro-history', price_pro_history);
   
   app.use('/product-stat', product_stat);
   
   app.use('/product', product);
   
   app.use('/quarantine-location', quarantine_location);
   
   app.use('/remain-purchase', remain_purchase);
   
   app.use('/set-of-product-stat', set_of_product_stat);
   
   app.use('/set-of-product', set_of_product);
   
   app.use('/type-of-vaccine', type_of_vaccine);
   
   app.use('/user', user);

   app.use('/vaccine-history', vaccine_history);

   app.use('/', home);

}
module.exports = route;