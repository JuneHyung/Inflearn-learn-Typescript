// api url
// var url = 'https://jsonplaceholder.typicode.com/users';
var url = 'https://jsonplaceholder.typicode.com/users/1';


// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

// user data
var user = {};
/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser(){
  return axios.get(url);
}

fetchUser().then(function (response){
  response.address.street
})

// console.log(fetchUser());
function startApp() {
  // axios
  //   .get(url)

  fetchUser()
    .then(function (response) {
      console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      username.innerText = user[0].name;
      email.innerText = user[0].email;
      address.innerText = user[0].address.street;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
