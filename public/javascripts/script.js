function openNav() {
  const nav = document.getElementById("myNav");
  nav.classList.add("open");
  document.querySelector(".menu").style.display = "none";
}

function closeNav() {
  const nav = document.getElementById("myNav");
  nav.classList.remove("open");
  document.querySelector(".menu").style.display = "inline-block";
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener('DOMContentLoaded', function() {
  const commentForm = document.getElementById('comment-form');
  const commentsList = document.getElementById('comments-List');

  if (!commentForm || !commentsList) return;

  commentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = commentForm.elements['name'].value.trim();
    const comment = commentForm.elements['comment'].value.trim();

    if (!name || !comment) return;

    const commentItem = document.createElement('div');
    commentItem.className = 'comment-item';
    commentItem.innerHTML = `
      <strong>${escapeHtml(name)}</strong>
      <p>${escapeHtml(comment)}</p>
    `;

    commentsList.appendChild(commentItem);

    commentForm.reset();
    commentForm.elements['name'].focus();
  });
});