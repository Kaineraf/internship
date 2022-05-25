const loadBtn = document.querySelector(".js-load"),
    loadPostsBtn = document.querySelector(".js-load-posts"),
    resultsContainer = document.querySelector(".js-results"),
    searchInput = document.querySelector(".js-input");

function createInfoCard(data){
  resultsContainer.innerHTML = `<div class="response-container user">
                <img src="${data.avatar_url}" alt="аватар">
                <p><b>Имя:</b> ${data.name}</p>
                <p><b>О себе:</b> ${data.bio}</p>
                <p><b>Кол-во репозиториев:</b> ${data.public_repos}</p>
            </div>`
}

function createPostCard(data){
  resultsContainer.innerHTML += `<div class="response-container posts">
                <h2>${data.title}</h2>
                <p>${data.body}</p>
            </div>`
}

loadBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  const searchValue = searchInput.value.trim().toLowerCase();

  fetch(`https://api.github.com/users/${searchValue}`)
      .then(response => response.json())
      .then((data) => createInfoCard(data)
  );
});

loadPostsBtn.addEventListener("click", function () {
    resultsContainer.innerHTML = '';

    axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(function (data) {
            data.data.map((post) => createPostCard(post));
        })
        .catch(function (error) {
            console.log(error);
        });
});

