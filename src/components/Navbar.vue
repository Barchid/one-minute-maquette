<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navigation</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Menu
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="pages/menu.html">Voir le menu</a>
              <a class="dropdown-item disabled" href="#">Modifier le menu</a>
              <div class="dropdown-divider"></div>
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
              <a class="dropdown-item disabled" href="pages/cuisine/commandes-1.html">Voir les commandes</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item disabled" href="pages/cuisine/cuisine.html">Accéder aux rôles</a>
              <a class="dropdown-item disabled" href="#">Modifier les rôles</a>
            </div>
          </li>

        </ul>
        <form class="form-inline my-2 my-lg-0">
          <a class="form-control mr-sm-2" href="#">Connexion</a>
        </form>
      </div>
    </nav>
</template>
