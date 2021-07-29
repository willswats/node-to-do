// Prompt user if they want to delete all tasks
const deleteAllForm = document.querySelector('#delete-all-form')
deleteAllForm.addEventListener('submit', (event) => {
    if (!confirm("Are you sure?")) {
        event.preventDefault();
    }
});

