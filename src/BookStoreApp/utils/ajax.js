import $ from 'jquery';

const BASE_URL = 'https://books-by-suyashkale.herokuapp.com/APIs';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNCIsImlhdCI6MTU1NjUyOTgzMH0.n7EiAV-6Lrdw1o8bn8NWzkdL8iia680D0FAqrO7z41k';

export default ({ type, contentType, dataType, url, data, postUrl })=> {
    url = BASE_URL + url;
    if (type === 'POST' || type === 'PUT') {
        if (!data) { data = {}; }
        data.token = TOKEN;
    } else { // GET;
        url = url + `?token=${TOKEN}`;
    }
    if (postUrl) {
        url = url + postUrl;
    }
    let ajax = $.ajax({
        type: (type || 'GET'),
        contentType: (contentType || 'application/json'),
        dataType: (dataType || 'json'),
        url: url,
        data: (data ? JSON.stringify(data) : undefined)
    });
    ajax.then(({ m })=> {
        if (m && m.length) {
            alert(m.join(', '));
        }
    });
    return ajax;
}