import { layers } from './layers.js';

export function interpolateKeyframes(keyframes, currentTime) {
  let before = null, after = null;
  for (let i = 0; i < keyframes.length; i++) {
    if (keyframes[i].time <= currentTime) before = keyframes[i];
    if (keyframes[i].time > currentTime) {
      after = keyframes[i];
      break;
    }
  }
  if (!before) return after;
  if (!after) return before;

  const t = (currentTime - before.time) / (after.time - before.time);
  const result = {};
  for (const key in before) {
    if (key !== "time") {
      result[key] = before[key] + (after[key] - before[key]) * t;
    }
  }
  return result;
}

export function renderFrame(ctx, time) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  for (const layer of layers) {
    const pos = interpolateKeyframes(layer.keyframes.position, time);
    const opacityKf = interpolateKeyframes(layer.keyframes.opacity, time);
    const opacity = opacityKf?.value ?? 1;

    if (layer.visible) {
      ctx.globalAlpha = opacity;
      ctx.fillStyle = "#00ffff";
      ctx.font = "32px sans-serif";
      ctx.fillText(layer.name, pos.x, pos.y);
      ctx.globalAlpha = 1;
    }
  }
}
