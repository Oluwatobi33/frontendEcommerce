let baseurl;

if (process.env.NODE_ENV == 'production') {
    baseurl = 'https://backende-5220.onrender.com/';
} else {
    baseurl = 'https://localhost:5100';
}
export { baseurl }
