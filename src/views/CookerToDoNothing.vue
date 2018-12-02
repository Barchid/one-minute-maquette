<template>
  <div class="cookerToDoNothing">
    <div class="alert alert-info alert-dismissible fade show" role="alert">
      <strong>Rien à cuisiner.</strong> Aucun plat n'est à préparer pour vous.
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Nouvelle commande !</strong> Une nouvelle commande a été ajoutée au <strong>Pâtissier</strong>.
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <div class="content">
      <h3> Membres du personnel</h3>
      <div class="container">
        <div class="row">
          <div class="col-md">
            <router-link to="/cookerToDoNothing">
              <img style="width:100px;"src="../assets/membre-cuisine-1.jpg" alt="">
              Saucier
            </router-link>
          </div>
          <div class="col-md">
            <router-link to="/cookerToDoNothing">
              <img style="width:100px;"src="../assets/membre-cuisine-2.jpg" alt="">
              Rôtisseur
            </router-link>

          </div>
          <div class="col-md">
            <router-link to="/cookerToDoNothing">
              <img style="width:100px;"src="../assets/membre-cuisine-3.jpg" alt="">
              Boucher

            </router-link>

          </div>
          <div class="col-md">
            <router-link to="/cookerToDoNothing">
              <img style="width:100px;"src="../assets/membre-cuisine-4.jpg" alt="">
              Poissonnier
            </router-link>

          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <router-link to="/cookerToDoNothing">
              <img style="width:100px;"src="../assets/membre-cuisine-5.jpg" alt="">
              Entremétier
            </router-link>

          </div>
          <div class="col-md">
            <router-link to="/cookerToDoNothing">
              <img style="width:100px;"src="../assets/membre-cuisine-6.jpg" alt="">
              Garde manger
            </router-link>

          </div>
          <div class="col-md">
            <router-link to="/cookerOrder">
              <img style="width:100px;"src="../assets/membre-cuisine-7.jpg" alt="">
              Pâtissier
            </router-link>

          </div>
          <div class="col-md">
            <router-link to="/cookerToDoNothing">
              <img style="width:100px;"src="../assets/membre-cuisine-8.jpg" alt="">
              Glacier
            </router-link>

          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <router-link to="/cookerToDoNothing">
              <img style="width:100px;"src="../assets/membre-cuisine-9.jpg" alt="">
              Barman
            </router-link>

          </div>
          <div class="col-md">
            <router-link to="/cookerToDoNothing">
              <img style="width:100px;"src="../assets/membre-cuisine-10.jpg" alt="">
              Commis
            </router-link>

          </div>
          <div class="col-md">
            <router-link to="/cookerToDoNothing">
              <img style="width:100px;"src="../assets/membre-cuisine-11.jpg" alt="">
              Tournant
            </router-link>

          </div>
          <div class="col-md">
            <router-link to="/cookerToDoNothing">
              <img style="width:100px;"src="../assets/membre-cuisine-12.jpg" alt="">
              Apprenti
            </router-link>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
