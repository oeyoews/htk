## Deploy

<a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Foeyoews%2Fhtk"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>

## Usage

```html
<p id="htk"></p>

<script>
  fetch("https://htk.vercel.app/api")
    .then((response) => response.json())
    .then((data) => {
      const htk = document.querySelector("#htk");
      htk.innerText = `${data.text}  ${data.author}`;
    })
    .catch(console.error);
</script>
```

- https://tangly1024.com/article/vercel-free-serverless-api

  > http-server /tmp --cors -o

  - use restful

## Config

- 修改 api/assets/

## TODO

- support txt to json withc script(wip)
- refactor format json
