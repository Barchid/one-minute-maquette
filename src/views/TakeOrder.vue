<template>
  <div class="takeOrder">
    <form method="post" action="traitement.php">
      <p>Numéro de la table<input type="text" name="table" value="14" style="width:30px;margin-left:10px;"/></p>

      <h3>Entrée</h3>

      <p><input type="text" name="entree1" value="0" style="width:30px;margin-right:10px;" />Croquette de crevette</p>
      <p><input type="text" name="entree2" value="0" style="width:30px;margin-right:10px;" />Os à la moelle, pain grillé, fleur de sel</p>
      <p><input type="text" name="entree3" value="0" style="width:30px;margin-right:10px;" />Salade d'été</p>
      <p><input type="text" name="entree4" value="0" style="width:30px;margin-right:10px;" />Croquant au Maroilles, effeuillée de chicon</p>

      <h3>Plat</h3>

      <p><input type="text" name="plat1" value="0" style="width:30px;margin-right:10px;" />Pièce de boeuf, sauce au poivre, frite, salade</p>
      <p><input type="text" name="plat2" value="0" style="width:30px;margin-right:10px;" />Poisson du marché, riz pilaf, légumes</p>
      <p><input type="text" name="plat3" value="0" style="width:30px;margin-right:10px;" />Carbonnade flammade, frites</p>
      <p><input type="text" name="plat4" value="0" style="width:30px;margin-right:10px;" />Suprème de poulet forestier, purée maison</p>
      <p><input type="text" name="plat5" value="0" style="width:30px;margin-right:10px;" />Fish & Chips, sauce cocktail,  sauce tartare et mesclun</p>

      <h3>Dessert</h3>

      <p><input type="text" name="dessert1" value="0" style="width:30px;margin-right:10px;" />Brioche façon pain-perdu au caramel au beurre salé</p>
      <p><input type="text" name="dessert2" value="0" style="width:30px;margin-right:10px;" />Tarte fine au pommes</p>
      <p><input type="text" name="dessert4" value="0" style="width:30px;margin-right:10px;" />Coupe de glace ou de sorbet (3 boules)</p>

      <router-link to="/order-3"><button type="submit" class="btn btn-primary" style="margin-bottom:30px;">Submit</button></router-link>
    </form>
  </div>
</template>
