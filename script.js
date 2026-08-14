(function () {
  document.querySelectorAll('.work-item-media').forEach(function (media) {
    var video = media.querySelector('video');
    if (!video) return;

    media.addEventListener('mouseenter', function () {
      media.classList.add('is-playing');
      video.currentTime = 0;
      video.play();
    });

    media.addEventListener('mouseleave', function () {
      media.classList.remove('is-playing');
      video.pause();
    });
  });
})();
