
  let shareIcons = document.querySelectorAll('#share_icon');
  let flyInModal = document.querySelector('#link_copied_div');
  
  shareIcons.forEach(function(shareIcon) {
    shareIcon.addEventListener('click', function(event) {
      event.preventDefault();
      const getLink = event.target.parentElement.getAttribute('href');
      const copyLinkToClipboard = navigator.clipboard.writeText(getLink)
      alert('Link copied to clipboard')
    });
  });
  





