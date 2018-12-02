<template>
  <div class="newCook">

    <form method="post" action="traitement.php">

      <p><input type="checkbox" checked="checked" style="margin-right:10px;"/>1x poisson du jour</p>

        <router-link to="/newRolesCookers"><button type="submit" class="btn btn-primary" style="margin-bottom:30px;">Ont été cuisinés</button></router-link>
      </form>
  </div>
</template>
