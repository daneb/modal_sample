# ModalSample

The Modal Sample details how a bootstrap modal can take input and fire an event
to a listener with the data and an element it can manipulate on success or failure.
The basic mechanism is Event Emitters.

The driving principals in design:
1. Use whats native and readily available
2. Simplicity and readability
3. To not be tightly coupled to an element
4. To not mix presentation with behaviour (bloat the Eex Templates with JS)
5. Create good organization of JS within a Phoenix project

Areas of Interest:
1. Index.html.eex - contains the dispatch event
2. app.js - contains the listener (without violating and polluting the global namespace ("window))
3. users.js - the actual AJAX call using native fetch and handle of success or failure

To start your Phoenix app:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  * Install Node.js dependencies with `npm install`
  * Start Phoenix endpoint with `mix phoenix.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](http://www.phoenixframework.org/docs/deployment).

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: http://phoenixframework.org/docs/overview
  * Docs: https://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix
