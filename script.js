(function () {
  var frame = document.querySelector('.lede-swim');
  var img = document.querySelector('.lede-swim-img');
  if (!frame || !img) return;

  var maxOffset = 22;
  var hoverScale = 1.35;

  function setTransform(x, y, scale) {
    img.style.transform =
      'translate(calc(-50% + ' + x + 'px), calc(-50% + ' + y + 'px)) scale(' + scale + ')';
  }

  frame.addEventListener('mouseenter', function () {
    frame.classList.add('is-hover');
  });

  frame.addEventListener('mousemove', function (e) {
    var rect = frame.getBoundingClientRect();
    var x = (e.clientX - rect.left) / rect.width - 0.5;
    var y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(x * maxOffset * 2, y * maxOffset * 2, hoverScale);
  });

  frame.addEventListener('mouseleave', function () {
    frame.classList.remove('is-hover');
    setTransform(0, 0, 1);
  });
})();

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
