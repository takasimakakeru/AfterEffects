const effectContainer = document.getElementById('effect-controls');
window.effectData = [
  { name: '不透明度', value: 100 },
  { name: '位置', value: '960x540' },
];

function renderEffects() {
  effectContainer.innerHTML = '';
  window.effectData.forEach(effect => {
    const div = document.createElement('div');
    div.textContent = `${effect.name}: ${effect.value}`;
    div.classList.add('effect-control');
    effectContainer.appendChild(div);
  });
}

renderEffects();
