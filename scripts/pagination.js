let currentPage = 1;
const totalElements = document.querySelectorAll('.content').length;

function showPage(page) {
    const contentElements = document.querySelectorAll('.content');
    contentElements.forEach((element, index) => {
        element.style.display = index + 1 === page ? 'block' : 'none';
    });
}

function nextPage() {
    currentPage = currentPage % totalElements + 1;
    showPage(currentPage);
}

function prevPage() {
    currentPage = (currentPage - 2 + totalElements) % totalElements + 1;
    showPage(currentPage);
}

// Initial display
showPage(currentPage);