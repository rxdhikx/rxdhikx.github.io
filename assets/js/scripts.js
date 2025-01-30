let currentIndex = 0;
const postsContainer = document.querySelector('.posts-container');
const posts = document.querySelectorAll('.post1');
const totalPosts = posts.length;

function scrollPosts(direction) {
    if (direction === 'left' && currentIndex > 0) {
        currentIndex--;
    } else if (direction === 'right' && currentIndex < totalPosts - 1) {
        currentIndex++;
    }

    // Calculate the transform value based on the current index
    const transformValue = -currentIndex * 100; // Translate by 100% for each post
    postsContainer.style.transform = `translateX(${transformValue}%)`;

    // Update arrow states
    updateArrows();
}

function updateArrows() {
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    // Disable left arrow on first post
    if (currentIndex === 0) {
        leftArrow.style.opacity = '0.5';
        leftArrow.style.pointerEvents = 'none';
    } else {
        leftArrow.style.opacity = '1';
        leftArrow.style.pointerEvents = 'auto';
    }

    // Disable right arrow on last post
    if (currentIndex === totalPosts - 1) {
        rightArrow.style.opacity = '0.5';
        rightArrow.style.pointerEvents = 'none';
    } else {
        rightArrow.style.opacity = '1';
        rightArrow.style.pointerEvents = 'auto';
    }
}

// Initialize arrow states
updateArrows();