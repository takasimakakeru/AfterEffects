document.getElementById('import-btn').addEventListener('click', () => {
    alert('メディアのインポートはまだ未実装です！');
  });
  
  document.getElementById('new-project').addEventListener('click', () => {
    localStorage.removeItem('aeweb_project');
    location.reload();
  });
  
  document.getElementById('save-project').addEventListener('click', () => {
    const data = {
      layers: window.layerData || [],
      effects: window.effectData || [],
    };
    localStorage.setItem('aeweb_project', JSON.stringify(data));
    alert('プロジェクトを保存しました！');
  });
  
  document.getElementById('load-project').addEventListener('click', () => {
    const data = localStorage.getItem('aeweb_project');
    if (data) {
      const parsed = JSON.parse(data);
      window.layerData = parsed.layers;
      window.effectData = parsed.effects;
      renderLayers();
      renderEffects();
      alert('プロジェクトを読み込みました！');
    } else {
      alert('保存されたプロジェクトがありません。');
    }
  });
  