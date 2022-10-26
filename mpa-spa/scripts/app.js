const menu = `
<nav class="navbar navbar-expand-lg bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="index.html">MPA-SPA</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-link active" aria-current="page" href="index.html">Home</a>
      <a class="nav-link" href="contact.html">Contact</a>
      <a class="nav-link" href="sign-in.html">Sign In</a>
      <a class="nav-link" href="about.html">About</a>
    </div>
  </div>
</div>
</nav>
`;

const prargraphe = `
    <p>Copyright Simplon 2022</p>
`;

const header = document.getElementById("header");
header.innerHTML= menu;

const footer = document.getElementById("footer");
footer.innerHTML = prargraphe;

//console.log(menu)