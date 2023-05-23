## Deploy

<a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Foeyoews%2Fhtk"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>

## Preview

![htk](https://i.imgur.com/J8CePsp.png "htk")

## Usage

- copy this snippets to your html

```js
const app = document.querySelector("#root");
      app.classList.add("app");
      const htk = document.createElement("div");
      app.appendChild(htk);
      htk.onclick = fetchHTK;

      function fetchHTK() {
        htk.textContent = "🎉 Loading ...";
        fetch("https://htk.vercel.app/api")
          .then((response) => response.json())
          .then((data) => {
            htk.textContent = `${data.text} @${data.author}`;
          })
          .catch(console.error);
      }
      fetchHTK();
```

<!-- - https://tangly1024.com/article/vercel-free-serverless-api -->
<!-- > http-server /tmp --cors -o -->

## Config

- 修改 api/assets/

## TODO

- support txt to json withc script(wip)
- refactor format json
- use restful
