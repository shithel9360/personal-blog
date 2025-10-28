// Personal Blog Application
console.log('Personal Blog App loaded!');

// DOM Elements
const postsSection = document.getElementById('posts');

// Sample blog posts data
const blogPosts = [
    {
        title: 'Welcome to My Blog',
        date: 'October 28, 2025',
        content: 'This is a sample blog post. More content coming soon!'
    }
];

// Function to display posts
function displayPosts() {
    if (!postsSection) return;
    
    postsSection.innerHTML = '';
    
    blogPosts.forEach(post => {
        const article = document.createElement('article');
        article.className = 'post';
        
        article.innerHTML = `
            <h2>${post.title}</h2>
            <p class="date">${post.date}</p>
            <p>${post.content}</p>
        `;
        
        postsSection.appendChild(article);
    });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    displayPosts();
    console.log('Blog posts loaded successfully!');
});
