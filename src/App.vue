<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark fixed-top">
      <router-link to="/">
        <img src="./assets/burger-flat.png" width="30px" height="30px" class="d-inline-block align-top" alt=""/>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
                <router-link to="/" class="nav-link dropdown-toggle">Menu</router-link>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link to="/" class="nav-link dropdown-toggle">Voir le menu</router-link>
              <router-link to="/" class="nav-link dropdown-toggle">Modifier le menu</router-link>
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
              <router-link class="dropdown-item" to="/">Voir les commandes</router-link>
              <div class="dropdown-divider"></div>
              <router-link class="dropdown-item" to="/">Accéder aux rôles</router-link>
              <router-link class="dropdown-item" to="/">Modifier les rôles</router-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <br/>
    <br/>
    <br/>
    <router-view/>
  </div>
</template>
