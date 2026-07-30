# Pop-Up Video style fact bubbles

Archived from `games.html` on 2026-07-26 in favor of hover-to-play video
previews on the Games page. Kept here in case we want it again (e.g. for
the Looking Glass page, or a future "featured" treatment).

## What it does

Small speech-bubble callouts auto-pop over a video at staggered intervals,
VH1 Pop-Up Video style — cycling through 2-3 facts per clip, appearing at
different corners, never overlapping each other.

## HTML (one example clip, repeat per fact set)

```html
<div class="game-clip is-active" data-channel="1" data-title="Love Self">
  <video src="images/loveself-loop.mp4" autoplay muted loop playsinline></video>
  <div class="popup-bubble popup-3 pos-tr">Love Self — made for Graffiti Games, Play NYC 2020</div>
  <div class="popup-bubble popup-3 pos-tl" style="animation-delay:5.5s">Inspired by bell hooks&rsquo; <em>All About Love</em></div>
  <div class="popup-bubble popup-3 pos-tr" style="animation-delay:11s">Designed by Michelle &middot; dev with Laurenz Riklin</div>
</div>
```

- Wrapping element needs `position:relative` (e.g. `.game-clip`).
- `popup-3` = three bubbles cycling over 16.5s (5.5s apart); `popup-2` = two bubbles over 11s (5.5s apart).
- `pos-tl` / `pos-tr` / `pos-bl` / `pos-br` place each bubble in a corner — pick corners that don't cover the game's own on-screen HUD.

## CSS

```css
.game-clip{
  position:relative;
}

@keyframes popup-cycle{
  0%, 100%{ opacity:0; transform:scale(.85) translateY(6px); }
  8%, 22%{ opacity:1; transform:scale(1) translateY(0); }
  30%{ opacity:0; transform:scale(.9) translateY(-4px); }
}

.popup-bubble{
  position:absolute;
  max-width:220px;
  background:#E8DCC8;
  color:#3C3226;
  border:1.5px solid #8B7355;
  border-radius:14px;
  padding:10px 14px;
  font-family:var(--sans);
  font-size:12px;
  font-weight:600;
  line-height:1.4;
  box-shadow:0 4px 10px rgba(0,0,0,.18);
  z-index:3;
  pointer-events:none;
  animation-name:popup-cycle;
  animation-iteration-count:infinite;
  animation-timing-function:ease-out;
}

.popup-bubble::after{
  content:"";
  position:absolute;
  width:12px;
  height:12px;
  background:#E8DCC8;
  border-right:1.5px solid #8B7355;
  border-bottom:1.5px solid #8B7355;
  bottom:-7px;
  left:20px;
  transform:rotate(45deg);
}

.popup-3{ animation-duration:16.5s; }
.popup-2{ animation-duration:11s; }

.pos-tl{ top:14px; left:14px; }
.pos-tr{ top:14px; right:14px; }
.pos-bl{ bottom:14px; left:14px; }
.pos-br{ bottom:14px; right:14px; }
```
