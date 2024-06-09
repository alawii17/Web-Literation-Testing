const addForumButtonInitiator = () => {
  const createForumButton = document.getElementById('create-forum');
  const formContainer = document.getElementById('discussionForm');

  formContainer.style.display = 'none';

  createForumButton.addEventListener('click', () => {
    if (formContainer.style.display === 'none') {
      formContainer.style.display = 'block';
    } else {
      formContainer.style.display = 'none';
    }

    document.getElementById('submitForum-btn').disable = false;
    document.getElementById('discussionContent').value = '';
  });
};

export default addForumButtonInitiator;
