let form = document.getElementById("form");
let input = document.getElementById("input");
let posts = document.getElementById("posts");


form.addEventListener('submit', function(e){
    e.preventDefault();
    
    readPost();
});

let data = {};
function readPost() {
    data['text'] = input.value;
    
    createPost();
}

function createPost() {
    posts.innerHTML += `<div style="border: 5px solid #98e719; border-radius: 20px; padding: 10px;font-size: 20px;margin-bottom: 15px">
    <h3 style="fontsize: 20px;">your Post here</h3>
    <p>${data.text}</p>
        <span class="icon">
            <img src="img/rose-320868__340.jpg" width="50px;" height="50px;">
            <iconify-icon class="like" style="color: #fff;" onClick="likePost(this)" icon="mdi:heart"></iconify-icon>
            <span class="likeCount">0</span>
            <iconify-icon onClick="editPost(this)" icon="material-symbols:edit-document"></iconify-icon>
            <iconify-icon onClick="deletePost(this)" icon="material-symbols:delete-outline"></iconify-icon>
        </span>
    </div>`
    input.value = " ";
}

    let liked = 1;
    count = 0;

function likePost(e) {
    const likeheart = posts.querySelector('.like');
    const likeCount = posts.querySelector('.likeCount');
    let count = parseInt(likeCount.textContent);
    
    if (liked == 1) {
        count++;
        likeheart.style.color = "red";
        likeCount.textContent = count;
        liked = 0;
    } else  {
        count--;
        likeheart.style.color = "white";
        likeCount.textContent = count;
        liked = 1;
    }
}

function editPost(e) {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    posts.innerHTML = " ";
}

function deletePost(e) {
    input.value = " ";
    posts.innerHTML = " ";
}

// const createPostButton = document.getElementById('create-post-btn');
// const postContainer = document.getElementById('post-container');

// let postId = 1;

// function createPost() {
//   const post = document.createElement('div');
//   post.classList.add('post');
//   post.innerHTML = `
//     <h3>Post ${postId}</h3>
//     <p>Some content goes here...</p>
//     <i class="far fa-thumbs-up like-icon"></i>
//     <span class="like-count">0</span>
//   `;
//   postContainer.appendChild(post);
//   postId++;
// }

// createPostButton.addEventListener('click', createPost);

// postContainer.addEventListener('click', function(event) {
//   if (event.target.classList.contains('like-icon')) {
//     const likeIcon = event.target;
//     const post = likeIcon.parentElement;
//     const likeCount = post.querySelector('.like-count');
//     let count = parseInt(likeCount.textContent);
//     count++;
//     likeCount.textContent = count;
//     likeIcon.classList.replace('far', 'fas');
//   }
// });