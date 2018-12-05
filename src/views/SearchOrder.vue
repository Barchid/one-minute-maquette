<template>
  <div class="searchOrder">
    <form method="post" action="traitement.php">

      <p>Numéro de la table<input type="text" name="table" value="18" style="width:30px;margin-left:10px;"/></p>

      <router-link to="/order"><button type="submit" class="btn btn-primary" style="margin-bottom:30px;">Submit</button></router-link>
    </form>
  </div>
</template>
