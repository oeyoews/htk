## usage

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
