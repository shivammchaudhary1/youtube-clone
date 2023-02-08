import navbar from "../components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

const showClickedVideos = () => {
  let data = localStorage.getItem("clicked_videos");
  let { videoId } = JSON.parse(data);

  let iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
  iframe.width = "560";
  iframe.height = "315";
  iframe.setAttribute("allowfullscreen", true);

  let video_div = document.getElementById("container");
  video_div.append(iframe);
};
showClickedVideos();
