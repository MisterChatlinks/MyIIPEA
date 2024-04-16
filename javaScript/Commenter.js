document.addEventListener('DOMContentLoaded', function() {
    const postButton = document.getElementById('post-button');
    const postInput = document.getElementById('post-input');
    const postsContainer = document.getElementById('posts-container');

    postButton.addEventListener('click', function() {
        const content = postInput.value;

        if (content.trim() !== '') {
            const post = document.createElement('div');
            post.className = 'post';
            post.textContent = content;
            postsContainer.appendChild(post);
            postInput.value = '';
        }
    });
});
