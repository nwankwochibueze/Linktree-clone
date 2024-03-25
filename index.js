// let shareIcon = document.querySelector('#share_icon')
// let flyInModal = document.querySelector('#link_copied_div')


//   shareIcon.addEventListener('click', function(event){
//     event.preventDefault();
//     flyInModal.classList.remove('link_copied_div');
//     flyInModal.classList.add('link_copied_div_new');

//     setTimeout(function() {
//     flyInModal.classList.remove('link_copied_div_new');
//     flyInModal.classList.add('link_copied_div');
//     }, 2000);
//   })
  let shareIcons = document.querySelectorAll('#share_icon');
  let flyInModal = document.querySelector('#link_copied_div');
  
  shareIcons.forEach(function(shareIcon) {
    shareIcon.addEventListener('click', function(event) {
      event.preventDefault();
      const getLink = event.target.parentElement.getAttribute('href');
      const copyLinkToClipboard = navigator.clipboard.writeText(getLink)
      alert('Link copied to clipboard')
      // setTimeout(function() {
      // flyInModal.classList.remove('link_copied_div_new');
      // flyInModal.classList.add('link_copied_div');
      // }, 2000);
    });
  });
  





