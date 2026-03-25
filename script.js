// script.js — Saffron & Smoke AR Menu

fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const menu = document.getElementById("menu");

    // 🔥 Replace with your GitHub Pages URL
    const baseURL = "https://sumedh-k07.github.io/ar-menu/";

    // Map tag text → CSS class for badge colour
    const tagClassMap = {
      "Chef's Special": "tag-chef",
      "Highly Ordered":  "tag-popular",
      "Healthy Choice":  "tag-healthy",
      "New":             "tag-new"
    };

    data.forEach((dish, i) => {
      const modelURL = baseURL + dish.model;

      // Google Scene Viewer intent URL
      const arLink =
        `intent://arvr.google.com/scene-viewer/1.0` +
        `?file=${encodeURIComponent(modelURL)}` +
        `&mode=ar_only&resizable=true&scale=0.5` +
        `#Intent;scheme=https;package=com.google.android.googlequicksearchbox;end;`;

      const tagClass = tagClassMap[dish.tag] || "tag-new";

      const card = document.createElement("div");
      card.className = "card";
      card.style.animationDelay = `${i * 0.06}s`;

      card.innerHTML = `
        <div class="card-img-wrap">
          <img src="${dish.image}" alt="${dish.name}" loading="lazy">
          <div class="tag-wrap">
            <span class="tag ${tagClass}">${dish.tag}</span>
          </div>
        </div>
        <div class="card-body">
          <div>
            <h3>${dish.name}</h3>
            <div class="card-price">${dish.price}</div>
          </div>
          <div class="ar-btn-wrap">
            <a href="${arLink}" class="ar-btn" aria-label="View ${dish.name} in AR">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
              View in AR
            </a>
          </div>
        </div>
      `;

      menu.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Error loading menu data:", err);
    document.getElementById("menu").innerHTML =
      `<p style="color:#7a7060;text-align:center;padding:3rem;grid-column:1/-1">
        Could not load menu. Make sure data.json is present.
      </p>`;
  });