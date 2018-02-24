export class Users {
  addUser(name) {
    url = "http://localhost:4000/api/users"
    data = {
      "users": {
        "name": name
      }
    }

    const p = new Promise((resolve, reject) => {
      this.postUser(url, data);
    });

    p
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  postUser(url, data) {

    return fetch(url, {
      body: JSON.stringify(data),
      cache: 'no-cache',
      credentials: 'same-origin',
      method: 'POST',
      mode: 'no-cors'
    })
    .then(response => response.json())
    .catch((err) => {
      console.error(err);
    })
  }

}