const shareIcon = document.querySelector('#share-icon');
const cardFooter = document.querySelector('.card-footer');
const authorInfo = document.querySelector('.author-info');
const cardShare = document.querySelector('.card-share');
const shareArrow = document.querySelector('#share-arrow');

shareIcon.addEventListener('click', function() {

  // **** handle sharing styles for mobile layout ****
  
  if (cardShare.classList.contains('hidden')) { // if sharing is hidden
    // toggle hidden class for share/author info
    cardShare.classList.remove('hidden');
    authorInfo.classList.add('hidden');
    // change card footer bg color to dark
    cardFooter.classList.add('bg-dark__footer');

    // toggle share icon bg color
    shareIcon.classList.add('bg-dark__share');
    shareIcon.classList.remove('bg-light__share');
    // toggle share arrow color
    shareArrow.classList.add('share-arrow-active')
    shareArrow.classList.remove('share-arrow-default')
  } else {
    // toggle hidden class for share/author info
    cardShare.classList.add('hidden');
    authorInfo.classList.remove('hidden');
    // remove dark bg from card footer
    cardFooter.classList.remove('bg-dark__footer');

    // toggle share icon bg color
    shareIcon.classList.add('bg-light__share');
    shareIcon.classList.remove('bg-dark__share');
    // toggle share arrow color
    shareArrow.classList.remove('share-arrow-active');
    shareArrow.classList.add('share-arrow-default')
  }

})

