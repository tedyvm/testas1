const form = document.querySelector("form");
const createPost = async (e) => {
  e.preventDefault();
  const doc = {
    title: form.title.value,
    content: form.content.value,
    likes: 0,
  };
  let url = "http://localhost:3000/posts";
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(doc),
    headers: {
      "Content-Type": "application/json",
    },
  });
  window.location.replace("/JS/JASON/Server/index.html");
};
form.addEventListener("submit", createPost);
