const thumbsUp = document.getElementById('thumbs-up');

  thumbsUp.addEventListener('mouseover', function() {
    document.getElementById('tooltip').style.display = 'block';
  });

  thumbsUp.addEventListener('mouseout', function() {
    document.getElementById('tooltip').style.display = 'none';
  });