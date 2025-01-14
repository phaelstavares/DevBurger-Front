import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    'pk_test_51Q8sstAxcdZ7OicBbst5DdaZq7zTtvaQr1mwLH4iE35kyQ1hgtQNKVhVMzZuvAFPJqivOmPfcrJqDyDEh7thcI7e00eoRj6798'
);

export default stripePromise;