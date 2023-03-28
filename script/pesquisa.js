const searchInput = document.querySelector('#pesq');

searchInput.addEventListener('input', (event) => {
  const value = event.target.value;
  const options = document.querySelectorAll('#auto option');
  
  options.forEach(option => {
    if (option.value.toLowerCase().includes(value.toLowerCase())) {
      option.style.display = 'block';
    } else {
      option.style.display = 'none';
    }
  });
});