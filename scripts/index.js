import navbar from "../components/navbar.js";

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

let searchVideos = async (e) => {
  e.preventDefault();
  try {
    const API_KEY = "AIzaSyBWmUxInR3ApURrDliPZPBEk07q3yyOBxI";

    let search_term = document.getElementById("search_term").value;
    console.log(search_term);

    let response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search_term}&key=${API_KEY}`
    );

    let data = await response.json();
    let actual_data = data.items;
    // console.log(actual_data);
    appendVideos(actual_data);
    // console.log(data);
  } catch (err) {
    console.log("error");
  }
};

let bb1 = document.getElementById("bb1");
bb1.addEventListener("click", searchVideos);

const container = document.getElementById("container");

const appendVideos = (data) => {
  container.innerHTML = null;
  data.forEach(({ snippet, id: { videoId } }) => {
    let div = document.createElement("div");
    div.className = "video";

    let title = document.createElement("h3");
    title.innerText = snippet.title;

    let channel_name = document.createElement("p");
    channel_name.innerText = snippet.channelTitle;

    let thumbnail = document.createElement("img");
    thumbnail.src = snippet.thumbnails.high.url;

    div.append(thumbnail, title, channel_name);

    div.onclick = () => {
      // console.log(videoId);
      let data = {
        snippet: snippet,
        videoId: videoId,
      };

      data = JSON.stringify(data);
      localStorage.setItem("clicked_videos", data);
      window.location.href = "video.html";
    };

    container.append(div);
  });
};

// Sorting button appending
let sorting = () => {
  let master_button = document.createElement("div");
  master_button.id = "master";

  let btn1 = document.createElement("button");
  let btn2 = document.createElement("button");
  let btn3 = document.createElement("button");

  btn1.id = "btn1";
  btn2.id = "btn2";
  btn3.id = "btn3";

  btn1.innerText = "Sort By Views";
  btn2.innerText = "Sort By Popularity";
  btn3.innerText = "Sort Alphabatically";

  master_button.append(btn1, btn2, btn3);

  document.getElementById("side").append(master_button);
};
sorting();

//Sort Alphabatically
document.getElementById("btn3").onclick = () => {
  let alphabet = () => {
    let searchVideos = async () => {
      try {
        const API_KEY = "AIzaSyBWmUxInR3ApURrDliPZPBEk07q3yyOBxI";

        let search_term = document.getElementById("search_term").value;

        let response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=title&q=${search_term}&key=${API_KEY}`
        );

        let data = await response.json();
        let actual_data = data.items;
        // console.log(actual_data);
        appendVideos(actual_data);
        // console.log(data);
      } catch (err) {
        console.log("error");
      }
    };
    searchVideos();
  };

  alphabet();
};

document.getElementById("btn2").onclick = () => {
  let Popular = () => {
    let searchVideos = async () => {
      try {
        const API_KEY = "AIzaSyBWmUxInR3ApURrDliPZPBEk07q3yyOBxI";

        let search_term = document.getElementById("search_term").value;

        let response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search_term}&key=${API_KEY}`
        );

        let data = await response.json();
        let actual_data = data.items;
        // console.log(actual_data);
        appendVideos(actual_data);
        // console.log(data);
      } catch (err) {
        console.log("error");
      }
    };
    searchVideos();
  };
  Popular();
};

//Sort By Views
document.getElementById("btn1").onclick = () => {
  // console.log("hi");

  let views = () => {
    let searchVideos = async () => {
      try {
        const API_KEY = "AIzaSyBWmUxInR3ApURrDliPZPBEk07q3yyOBxI";

        let search_term = document.getElementById("search_term").value;

        let response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=viewCount&q=${search_term}&key=${API_KEY}`
        );

        let data = await response.json();
        let actual_data = data.items;
        // console.log(actual_data);
        appendVideos(actual_data);
        // console.log(data);
      } catch (err) {
        console.log("error");
      }
    };
    searchVideos();
  };
  views();
};

// Save clicked videos to local storage
