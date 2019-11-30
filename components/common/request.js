import { getEnvVars } from '../../environment';
const { apiUrl } = getEnvVars();

function requestWithoutBodyAsync(urlExt, method) {
  const url = `http://${apiUrl}/${urlExt}`;
  console.log("Performing " + method + " request to " + url);
  return fetch(url, {
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
    const url = `http://${apiUrl}/${urlExt}`;
    console.log("Performing " + method + " request to " + url);
    return fetch(url, {
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