let baseurl;

if (process.env.NODE_ENV == 'production') {
    baseurl = 'http://localhost:5100/';
} else {
    baseurl = 'http://localhost:5100/';
}
export { baseurl }
