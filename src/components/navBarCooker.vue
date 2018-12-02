<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Menu
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <router-link class="dropdown-item" to="/menu">Voir le menu</router-link>
        <div class="dropdown-divider"></div>
        <router-link class="dropdown-item disabled" to="/changeMenu">Modifier le Menu</router-link>
      </div>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Service
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <router-link class="dropdown-item" to="/order-1">Voir les commandes</router-link>
        <router-link class="dropdown-item disabled" to="pages/service/takeOrder">Prendre une commande</router-link>
        <div class="dropdown-divider"></div>
        <router-link class="dropdown-item disabled" to="pages/service/bill">Régler l'addition</router-link>
      </div>
    </li>

    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Cuisine
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <router-link class="dropdown-item" to="/cookerOrder">Voir les commandes</router-link>
        <router-link class="dropdown-item" to="/rolesCookers">Accéder aux rôles</router-link>
        <router-link class="dropdown-item" to="/unavailableDish">Plat indisponible</router-link>
        <div class="dropdown-divider"></div>
        <router-link class="dropdown-item disabled" to="/modifiedRoles">Modifier les rôles</router-link>
      </div>
    </li>
  </ul>
</div>
