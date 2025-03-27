const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".details");
const renderDetails = async () => {
  let url = `http://localhost:3000/posts/${id}`;
  const res = await fetch(url);
  const post = await res.json();
  console.log(post);
  container.innerHTML = `
    <h3 class="post-title">${post.title}</h3>
    <p class="post-content">${post.content}</p>
    `;
};
window.addEventListener("DOMContentLoaded", () => renderDetails());

const deleteBtn = document.querySelector(".delete");
deleteBtn.addEventListener("click", async (e) => {
  let url = `http://localhost:3000/posts/${id}`;
    const patvirtinta = confirm("Ar tikrai norite ištrinti šį įrašą?");
    if (!patvirtinta) return;
    
    const res = await fetch(url, {
    method: "DELETE",
  });
  window.location.replace("/JS/JASON/Server/index.html");
});
