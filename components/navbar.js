let navbar = () => {
  return `
    <header class="header">
      <div class="logo left">
        <i id="menu" class="material-icons">menu</i>
        <img
          src="https://www.freecodecamp.org/news/content/images/2022/01/yt-logo.png"
        />
      </div>

      <div class="search center">
        <form action="">
          <input type="text" placeholder="Search" id="search_term" />
          <button  id="bb1" ><i class="material-icons">search</i></button>
        </form>
        <i class="material-icons mic">mic</i>
      </div>

      <div class="icons right">
        <i class="material-icons">videocam</i>
        <i class="material-icons">apps</i>
        <i class="material-icons">notifications</i>
        <i class="material-icons display-this">account_circle</i>
      </div>
    </header>
    <main>
      <div id="side" class="side-bar">
        <div class="nav">
          <a class="nav-link active">
            <i class="material-icons">home</i>
            <span>Home</span>
          </a>
          <a class="nav-link">
            <i class="material-icons">local_fire_department</i>
            <span>Trending</span>
          </a>
          <a class="nav-link">
            <i class="material-icons">subscriptions</i>
            <span>Subscriptions</span>
          </a>
        </div>
        <hr />
        <a class="nav-link">
          <i class="material-icons">library_add_check</i>
          <span>Library</span>
        </a>
        <a class="nav-link">
          <i class="material-icons">history</i>
          <span>History</span>
        </a>
        <a class="nav-link">
          <i class="material-icons">play_arrow</i>
          <span>Your Videos</span>
        </a>
        <a class="nav-link">
          <i class="material-icons">watch_later</i>
          <span>Watch Later</span>
        </a>
        <a class="nav-link">
          <i class="material-icons">thumb_up</i>
          <span>Liked Videos</span>
        </a>
      </div>
      <div class="content" id="container"></div>
    </main>
    `;
};

export default navbar;
