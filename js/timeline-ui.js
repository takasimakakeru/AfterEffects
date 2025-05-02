import { layers } from './layers.js';

const timeline = document.getElementById("timeline");
const tracksContainer = document.getElementById("tracks");
const scrubber = document.getElementById("scrubber");

const secondsToPixels = 100;
let currentTime = 0;

export function initTimeline() {
  tracksContainer.innerHTML = '';

  layers.forEach((layer, i) => {
    const track = document.createElement("div");
    track.className = "track";
    track.style.top = `${i * 40}px`;

    const label = document.createElement("div");
    label.className = "track-label";
    label.innerText = layer.name;

    track.appendChild(label);

    // キーフレーム表示
    for (const prop in layer.keyframes) {
      layer.keyframes[prop].forEach(kf => {
        const dot = document.createElement("div");
        dot.className = "keyframe";
        dot.style.left = `${kf.time * secondsToPixels}px`;
        dot.style.top = "20px";
        dot.title = `${prop} @ ${kf.time}s`;
        dot.onclick = (e) => {
          e.stopPropagation();
          alert(`編集: ${prop} @ ${kf.time}s`);
        };
        track.appendChild(dot);
      });
    }

    tracksContainer.appendChild(track);
  });

  timeline.onclick = (e) => {
    const rect = timeline.getBoundingClientRect();
    currentTime = (e.clientX - rect.left) / secondsToPixels;
    scrubber.style.left = `${currentTime * secondsToPixels}px`;
  };
}
