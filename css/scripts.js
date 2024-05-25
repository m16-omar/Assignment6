document.addEventListener('DOMContentLoaded', () => {
    const assignBtns = document.querySelectorAll('.assign-btn');
    const newRoleBtn = document.querySelector('.new-role-btn');
    const filterBtn = document.querySelector('.filter-btn');
    const assignRoleModal = document.querySelector('#assign-role-modal');
    const modalCloseBtns = document.querySelectorAll('.assign-role-modal .assign-btn');

    assignBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            assignRoleModal.style.display = 'block';
        });
    });

    newRoleBtn.addEventListener('click', () => {
        alert('New Role functionality not implemented yet.');
    });

    filterBtn.addEventListener('click', () => {
        alert('Filter functionality not implemented yet.');
    });

    modalCloseBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            assignRoleModal.style.display = 'none';
            alert('Role assigned successfully.');
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target === assignRoleModal) {
            assignRoleModal.style.display = 'none';
        }
    });
});
