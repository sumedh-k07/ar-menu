fetch('data.json')
  .then(res => res.json())
  .then(data => {
    let menu = document.getElementById("menu");

    // 🔥 IMPORTANT: Replace with your GitHub Pages URL
    const baseURL = "https://sumedh-k07.github.io/ar-menu/";

    data.forEach(dish => {

      // ✅ Correct full model URL
      let modelURL = baseURL + dish.model;

      // 🔍 Debug (you can remove later)
      console.log("Model URL:", modelURL);

      // ✅ Fixed AR Link (with scale + resizable)
      let arLink = `intent://arvr.google.com/scene-viewer/1.0?file=${modelURL}&mode=ar_only&resizable=true&scale=0.5#Intent;scheme=https;package=com.google.android.googlequicksearchbox;end;`;

      menu.innerHTML += `
        <div class="card">
          <img src="${dish.image}" alt="${dish.name}">
          <h3>${dish.name}</h3>
          <p>${dish.price}</p>
          <span class="tag">${dish.tag}</span><br><br>

          <a href="${arLink}">
            <button>View in AR</button>
          </a>
        </div>
      `;
    });
  })
  .catch(error => {
    console.error("Error loading data:", error);
  });