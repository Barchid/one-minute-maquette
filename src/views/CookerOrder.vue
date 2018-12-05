<template>
  <div class="cookerOrder">
    <form method="post" action="traitement.php">

      <p><input type="checkbox" checked="checked" style="margin-right:10px;"/> 2x tarte aux pommes
        <select>
          <option value="nobody"></option>
          <option selected="selected" value="patissier">Rodolphe</option>
        </select>
      </p>


        <router-link to="/cook"><button type="submit" class="btn btn-primary" style="margin-bottom:30px;">En cours de préparation</button></router-link>
      </form>
    </form>
  </div>
</template>
