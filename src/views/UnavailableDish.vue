<template>
  <div class="unavailableDish">
    <form method="post" action="traitement.php">

      <h2>Retirez les plats indisponibles</h2>
      <h3>Entrée</h3>

      <p><input type="checkbox" class="entree1"checked="checked" style="margin-right:10px;" />Croquette de crevette</p>
      <p><input type="checkbox" class="entree2"checked="checked" style="margin-right:10px;" />Os à la moelle, pain grillé, fleur de sel</p>
      <p><input type="checkbox" class="entree3"checked="checked" style="margin-right:10px;" />Salade d'été</p>
      <p><input type="checkbox" class="entree4"checked="checked" style="margin-right:10px;" />Croquant au Maroilles, effeuillée de chicon</p>

      <h3>Plat</h3>

      <p><input type="checkbox" class="plat1"checked="checked" style="margin-right:10px;" />Pièce de boeuf, sauce au poivre, frite, salade</p>
      <p><input type="checkbox" class="plat2"checked="checked" style="margin-right:10px;" />Poisson du marché, riz pilaf, légumes</p>
      <p><input type="checkbox" class="plat3"checked="checked" style="margin-right:10px;" />Carbonnade flammade, frites</p>
      <p><input type="checkbox" class="plat4"checked="checked" style="margin-right:10px;" />Suprème de poulet forestier, purée maison</p>
      <p><input type="checkbox" class="plat5"checked="checked" style="margin-right:10px;" />Fish & Chips, sauce cocktail,  sauce tartare et mesclun</p>

      <h3>Dessert</h3>

      <p><input type="checkbox" class="dessert1"checked="checked" style="margin-right:10px;" />Brioche façon pain-perdu au caramel au beurre salé</p>
      <p><input type="checkbox" class="dessert2"checked="checked" style="margin-right:10px;" />Tarte fine au pommes</p>
      <p><input type="checkbox" class="dessert3"checked="checked" style="margin-right:10px;" />Salade d'été</p>
      <p><input type="checkbox" class="dessert4"checked="checked" style="margin-right:10px;" />Coupe de glace ou de sorbet (3 boules)</p>

      <router-link to="/order-1"><button type="submit" class="btn btn-primary" style="margin-bottom:30px;">Submit</button></router-link>
    </form>
  </div>
</template>
