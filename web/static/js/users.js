export default class Users {
  constructor() {  }

  add(detail) {
    debugger
    const url = "api/users"
    const data = {
      "users": {
        "name": detail.data
      }
    }

    return fetch(url, {
      body: JSON.stringify(data),
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *omit
      headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json'
      },
      method: 'POST', // *GET, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *same-origin
      redirect: 'follow', // *manual, error
      referrer: 'no-referrer', // *client
    })
    .then((response) => {
      var el = detail["data"];
      el.insertAdjacentHTML('<div class="alert alert-danger"><strong>Danger!</strong> Indicates a dangerous or potentially negative action.</div>');
      const result = response.json();
      alert(result);
    })
    .catch(err => {
      console.error(err);
    });
  }

}