let baseurl;

if (process.env.NODE_ENV == 'production') {
    baseurl = 'https://ecommercetobi.onrender.com/';
} else {
    baseurl = 'http://localhost:5100/';
}
export { baseurl }
