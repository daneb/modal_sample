export default class Users {
  constructor() {  }

  add(detail) {
    const url = "api/users"
    var el = detail.element; // the Element to update
    const data = {
      "users": {
        "name": detail.data
      }
    }

    return fetch(url, {
      body: JSON.stringify(data),
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json'
      },
      method: 'POST',
      mode: 'cors', // no-cors, *same-origin
      redirect: 'follow', // *manual, error
      referrer: 'no-referrer', // *client
    })
    .then((response) => {
      return response.json();
    })
    .then(({data: {name, id}}) => {
      el.innerHTML = el.innerHTML + `<div class='alert alert-success'><strong>Success!</strong> Added user ${name} with id: ${id}</div>`;
    })
    .catch(err => {
      el.innerHTML = el.innerHTML + '<div class="alert alert-danger"><strong>Failed!</strong> Unable to add user.</div>';
    });
  }

}