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
  var tv = document.querySelector('.game-tv');
  if (!tv) return;

  var clips = Array.prototype.slice.call(tv.querySelectorAll('.game-clip'));
  var channelNum = tv.querySelector('.game-tv-channel-num');
  var channelTitle = tv.querySelector('.game-tv-channel-title');
  var staticEl = tv.querySelector('.tv-static');
  var current = 0;
  var staticTimeout = null;

  function showChannel(index) {
    clips[current].classList.remove('is-active');
    clips[current].querySelector('video').pause();

    current = (index + clips.length) % clips.length;

    var clip = clips[current];
    clip.classList.add('is-active');
    var video = clip.querySelector('video');
    video.currentTime = 0;
    video.play();

    channelNum.textContent = clip.getAttribute('data-channel');
    channelTitle.textContent = clip.getAttribute('data-title');

    if (staticEl) {
      clearTimeout(staticTimeout);
      staticEl.classList.add('is-switching');
      staticTimeout = setTimeout(function () {
        staticEl.classList.remove('is-switching');
      }, 260);
    }
  }

  tv.querySelectorAll('.game-tv-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      showChannel(current + parseInt(btn.getAttribute('data-dir'), 10));
    });
  });
})();
