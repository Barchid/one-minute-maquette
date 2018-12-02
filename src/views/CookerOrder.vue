<template>
  <div class="cookerOrder">

    <form method="post" action="traitement.php">

      <p><input type="checkbox" checked="checked" style="margin-right:10px;"/> 2x tarte aux pommes
        <select>
          <option value="nobody"></option>
          <option selected="selected" value="patissier">Pâtissier</option>
          <option value="poissonier">Poissonier</option>
          <option value="boucher">Boucher</option>
          <option value="saucier">Saucier</option>

          <option value="Entremétier">Entremétier</option>
          <option value="gardeManger">Garde Manger</option>
          <option value="glacier">Glacier</option>
          <option value="barman">Barman</option>

          <option value="commis">Commis</option>
          <option value="tournant">Tournant</option>
          <option value="apprenti">Apprenti</option>
          <option value="rotisseur">Rôtisseur</option>
        </select>
      </p>
      <p><input type="checkbox" style="margin-right:10px;"/>1x poisson du jour
        <select>
          <option value="nobody"></option>
          <option value="patissier">Pâtissier</option>
          <option value="poissonier">Poissonier</option>
          <option value="boucher">Boucher</option>
          <option value="saucier">Saucier</option>

          <option value="Entremétier">Entremétier</option>
          <option value="gardeManger">Garde Manger</option>
          <option value="glacier">Glacier</option>
          <option value="barman">Barman</option>

          <option value="commis">Commis</option>
          <option value="tournant">Tournant</option>
          <option value="apprenti">Apprenti</option>
          <option value="rotisseur">Rôtisseur</option>
        </select>
      </p>


        <router-link to="/cook"><button type="submit" class="btn btn-primary" style="margin-bottom:30px;">En cours de préparation</button></router-link>
      </form>
    </form>
  </div>
</template>
