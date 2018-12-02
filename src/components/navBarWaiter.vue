<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item dropdown">
          <router-link to="/" class="nav-link dropdown-toggle">Menu</router-link>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <router-link to="/" class="nav-link dropdown-toggle">Voir le menu</router-link>
        <router-link to="/" class="nav-link dropdown-toggle disabled">Modifier le menu</router-link>
      </div>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Service
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item disabled" href="pages/service/nouvelle-commande.html">Prendre une commande</a>
        <a class="dropdown-item disabled" href="pages/service/commandes-1.html">Voir les commandes</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item disabled" href="pages/service/addition.html">Régler l'addition</a>
      </div>
    </li>

    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Cuisine
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <router-link class="dropdown-item" to="/">Voir les commandes</router-link>
        <div class="dropdown-divider"></div>
        <router-link class="dropdown-item disabled" to="/">Accéder aux rôles</router-link>
        <router-link class="dropdown-item disabled" to="/">Modifier les rôles</router-link>
      </div>
    </li>
  </ul>
</div>
