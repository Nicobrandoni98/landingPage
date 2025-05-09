const apiKey = "AIzaSyAZVDZVtkwi7cnEQK3m5PZk_jI-uCHRSy0";
const channelId = "UCulzKEqyE73gXCUqTimbP4A";
const maxResults = 4;
const container = document.getElementById("youtube-videos");

const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.items.forEach((item) => {
      if (item.id.kind === "youtube#video") {
        const videoId = item.id.videoId;
        const title = item.snippet.title;
        const thumbnail = item.snippet.thumbnails.medium.url;
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

        const videoHTML = `
          <div class="group relative">
            <a href="${videoUrl}" target="_blank">
              <div class="w-full bg-gray-200 aspect-w-16 aspect-h-9 rounded-md overflow-hidden group-hover:opacity-75">
                <img src="${thumbnail}" alt="${title}" class="w-full h-full object-cover">
              </div>
              <div class="mt-4">
                <h3 class="text-sm text-gray-700">${title}</h3>
              </div>
            </a>
          </div>
        `;

        container.innerHTML += videoHTML;
      }
    });
  })
  .catch((error) => {
    console.error("Error al cargar los videos:", error);
  });
