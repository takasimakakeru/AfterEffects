const projectList = document.getElementById('project-list');

function addProjectItem(name) {
  const li = document.createElement('li');
  li.textContent = name;
  li.classList.add('project-item');
  projectList.appendChild(li);
}

addProjectItem("動画ファイル.mp4");
addProjectItem("テキストレイヤー");
