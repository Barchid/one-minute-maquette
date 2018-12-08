<template>
  <div class="container">



    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark fixed-top">
      <router-link to="/">
        <img src="./assets/burger-flat.png" width="30px" height="30px" class="d-inline-block align-top" alt=""/>
      </router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Menu
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">

              <router-link class="dropdown-item" to="/menu">Voir le menu</router-link>
    <!--          <router-link class="dropdown-item" to="/menu">Voir les catégories</router-link>
              <router-link class="dropdown-item" to="/all-menus">Voir les menus</router-link>-->
              <div class="dropdown-divider"></div>
              <router-link class="dropdown-item" to="/bossMenu">Page administration Menu</router-link>


            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Service
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/order-1">Voir les commandes</router-link>
              <router-link class="dropdown-item" to="/takeOrder">Prendre une commande</router-link>
              <div class="dropdown-divider"></div>
              <router-link class="dropdown-item" to="/searchOrder">Recherche une commande</router-link>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Cuisine
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/rolesCookers">Accéder aux rôles</router-link>
              <router-link class="dropdown-item" to="/CookerOrder">Cuisiner une préparation</router-link>
              <router-link class="dropdown-item" to="/cookerOrderFinished">Terminer une préparation</router-link>
              <router-link class="dropdown-item" to="/unavailableDish">Plat indisponible</router-link>
              <div class="dropdown-divider"></div>
              <router-link class="dropdown-item" to="/changeRolesCookers">Modifier les rôles</router-link>
            </div>
          </li>
        </ul>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
    <br/>
    <br/>
    <br/>
    <router-view/>
  </div>
</template>
window.$ = require('jquery')
window.JQuery = require('jquery')
