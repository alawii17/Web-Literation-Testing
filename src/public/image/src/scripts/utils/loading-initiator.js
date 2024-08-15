const loadingIndicator = document.getElementById('loading');

const showLoadingIndicator = () => {
  loadingIndicator.style.display = 'block';
};

const hideLoadingIndicator = () => {
  loadingIndicator.style.display = 'none';
};

export { showLoadingIndicator, hideLoadingIndicator };
