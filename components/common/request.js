const port = '5000';
const baseUrl = '10.0.2.2';

function requestWithoutBodyAsync(urlExt, method) {
  return fetch('http://'+baseUrl+':'+port+urlExt, {
    method: method,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
  })
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson.entries);
    return responseJson.entries;
  })
  .catch((error) => {
    console.error(error);
  });
}

function requestWithBodyAsync(urlExt, method, body) {
    return fetch('http://'+baseUrl+':'+port+urlExt, {
      method: method,
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: body
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.entries);
      return responseJson.entries;
    })
    .catch((error) => {
      console.error(error);
    });
}

module.exports = {
    requestWithBodyAsync,
    requestWithoutBodyAsync,
}