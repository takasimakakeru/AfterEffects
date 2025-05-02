const timelineBody = document.getElementById('timeline-body');
const timelineSlider = document.getElementById('timeline-slider');
window.layerData = [];

function renderLayers() {
  timelineBody.innerHTML = '';
  window.layerData.forEach((layer, i) => {
    const div = document.createElement('div');
    div.className = 'timeline-layer';
    div.textContent = `${layer.name} (${layer.start}s ～ ${layer.end}s)`;
    timelineBody.appendChild(div);
  });
}

// デモ用レイヤー追加
window.layerData.push({ name: 'テキスト', start: 0, end: 10 });
window.layerData.push({ name: '背景', start: 0, end: 15 });
renderLayers();
