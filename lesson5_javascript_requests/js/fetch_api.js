var getdemobtn = document.querySelector('#getbtn');
var postdemobtn = document.querySelector('#postbtn');


// function getData() {
//     fetch('https://reqres.in/api/users').then(response =>{
//         // console.log(response.json());
//         return response.json();
//     })
//     .then(responseData => {
//         console.log(responseData);
//     });
// }

const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
      method: method,
      body: JSON.stringify(data),
      headers: data ? { 'Content-Type': 'application/json' } : {}
    }).then(response => {
      if (response.status >= 400) {
        // !response.ok
        return response.json().then(errResData => {
          const error = new Error('Something went wrong!');
          error.data = errResData;
          throw error;
        });
      }
      return response.json();
    });
  };
  const getData = () => {
    sendHttpRequest('GET', 'https://reqres.in/api/users').then(responseData => {
      console.log(responseData);
    });
  };
  
  const sendData = () => {
    sendHttpRequest('POST', 'https://reqres.in/api/register', {
      email: 'eve.holt@reqres.in',
      password: 'pistol'
    })
      .then(responseData => {
        console.log(responseData);
      })
      .catch(err => {
        console.log(err, err.data);
      });
  };

getdemobtn.addEventListener('click', getData);
postdemobtn.addEventListener('click', sendData);