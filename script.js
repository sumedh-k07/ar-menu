fetch('data.json')
  .then(res => res.json())
  .then(data => {
    let menu = document.getElementById("menu");

    data.forEach(dish => {

      let modelURL = window.location.origin + "/" + dish.model;

      let arLink = `intent://arvr.google.com/scene-viewer/1.0?file=${modelURL}&mode=ar_only#Intent;scheme=https;package=com.google.android.googlequicksearchbox;end;`;

      menu.innerHTML += `
        <div class="card">
          <img src="${dish.image}">
          <h3>${dish.name}</h3>
          <p>${dish.price}</p>
          <span class="tag">${dish.tag}</span><br><br>

          <a href="${arLink}">
            <button>View in AR</button>
          </a>
        </div>
      `;
    });
  });