window.addEventListener("DOMContentLoaded", () => renderPosts());

const container = document.querySelector(".irasai");

const renderPosts = async (term) => {
  let url = "http://localhost:3000/posts?_sort=likes&_order=desc";
  if (term) {
    url += `&q=${term}`;
  }
  console.log(url);

  const res = await fetch(url);
  console.log(res);
  const posts = await res.json();
  console.log(posts);
  let template = "";
  posts.forEach((post) => {
    const content = post.content ? (post.content.length > 200 ? post.content.slice(0, 200) + "..." : post.content) : "Turinio nėra";
    template += `
      <div class="post">
      <h3 class="post-title">${post.title}</h3>
      <p class="post-likes">${post.likes} likes</p>
      <p class="post-content">${content}</p>
      <a href="details.html?id=${post.id}" class="read-more">Skaityti daugiau</a>
      </div>
    `;
  });
  container.innerHTML = template;
};

// Paieškos forma
const searchForm = document.querySelector(".search");
searchForm.addEventListener("submit", (e) => {
  console.log(e);
  e.preventDefault();
  renderPosts(searchForm.term.value.trim());
});
