// Prompt user if they want to delete all tasks
const deleteAll = document.querySelector('#delete-all')
deleteAll.addEventListener('submit', (event) => {
    if (!confirm("Are you sure?")) {
        event.preventDefault();
    }
});

