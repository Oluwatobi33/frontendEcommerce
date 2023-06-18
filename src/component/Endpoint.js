let baseurl;

if (process.env.NODE_ENV == 'production') {
    baseurl = 'https://ecommerctobi.onrender.com';
} else {
    baseurl = 'http://localhost:5100/';
}
export { baseurl }
