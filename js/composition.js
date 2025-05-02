const canvas = document.getElementById('composition-canvas');
const ctx = canvas.getContext('2d');
let isPlaying = false;
let currentFrame = 0;

function drawComposition() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  ctx.font = "30px sans-serif";
  ctx.fillText("コンポジションビュー", 280, 270);
}

drawComposition();

document.getElementById('play-btn').addEventListener('click', () => {
  isPlaying = true;
  playTimeline();
});

document.getElementById('pause-btn').addEventListener('click', () => {
  isPlaying = false;
});

function playTimeline() {
  if (!isPlaying) return;
  currentFrame++;
  document.getElementById('timeline-slider').value = currentFrame % 100;
  drawComposition();
  requestAnimationFrame(playTimeline);
}
import { renderFrame } from './animation.js';

let startTime = null;
let isPlaying = false;
let ctx = null;

export function initComposition() {
  const canvas = document.getElementById("composition-canvas");
  ctx = canvas.getContext("2d");
}

export function playComposition() {
  isPlaying = true;
  startTime = performance.now();
  requestAnimationFrame(frameLoop);
}

function frameLoop(now) {
  if (!isPlaying) return;
  const currentTime = (now - startTime) / 1000;
  renderFrame(ctx, currentTime);
  requestAnimationFrame(frameLoop);
}

export function stopComposition() {
  isPlaying = false;
}
