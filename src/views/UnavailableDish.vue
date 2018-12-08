<template>
  <div class="unavailableDish">
    <form method="post" action="traitement.php">

      <h2>Retirez les plats indisponibles</h2>
      <h3>Entrée</h3>

      <p>
        <input type="checkbox" class="entree1"checked="checked" style="margin-right:10px;" />
        <img src="../assets/menu/plat-1.jpg" alt="" style="width:50px;border:3px solid white;"/>
        Croquette de crevette</p>
      <p><input type="checkbox" class="entree2"checked="checked" style="margin-right:10px;" />
        <img src="../assets/menu/plat-2.jpg" alt="" style="width:50px;border:3px solid white;"/>
        Os à la moelle, pain grillé, fleur de sel</p>
      <p><input type="checkbox" class="entree3"checked="checked" style="margin-right:10px;" />
        <img src="../assets/menu/plat-3.jpg" alt="" style="width:50px;border:3px solid white;"/>
        Salade d'été</p>
      <p><input type="checkbox" class="entree4"checked="checked" style="margin-right:10px;" />
        <img src="../assets/menu/plat-4.jpg" alt="" style="width:50px;border:3px solid white;"/>
        Croquant au Maroilles, effeuillée de chicon</p>

      <h3>Plat</h3>

      <p><input type="checkbox" class="plat1"checked="checked" style="margin-right:10px;" />
        <img src="../assets/menu/plat-5.jpg" alt="" style="width:50px;border:3px solid white;"/>
        Pièce de boeuf, sauce au poivre, frite, salade</p>
      <p><input type="checkbox" class="plat2"checked="checked" style="margin-right:10px;" />
        <img src="../assets/menu/plat-6.jpg" alt="" style="width:50px;border:3px solid white;"/>
        Poisson du marché, riz pilaf, légumes</p>
      <p><input type="checkbox" class="plat3"checked="checked" style="margin-right:10px;" />
        <img src="../assets/menu/plat-7.jpg" alt="" style="width:50px;border:3px solid white;"/>
        Carbonnade flammade, frites</p>
      <p><input type="checkbox" class="plat4"checked="checked" style="margin-right:10px;" />
        <img src="../assets/menu/plat-8.jpg" alt="" style="width:50px;border:3px solid white;"/>
        Suprème de poulet forestier, purée maison</p>
      <p><input type="checkbox" class="plat5"checked="checked" style="margin-right:10px;" />
        <img src="../assets/menu/plat-9.jpg" alt="" style="width:50px;border:3px solid white;"/>
        Fish & Chips, sauce cocktail,  sauce tartare et mesclun</p>

      <h3>Dessert</h3>

      <p><input type="checkbox" class="dessert1"checked="checked" style="margin-right:10px;" />
        <img src="../assets/menu/plat-10.jpg" alt="" style="width:50px;border:3px solid white;"/>
        Brioche façon pain-perdu au caramel au beurre salé</p>
      <p><input type="checkbox" class="dessert2"checked="checked" style="margin-right:10px;" />
        <img src="../assets/menu/plat-11.jpg" alt="" style="width:50px;border:3px solid white;"/>
        Tarte fine au pommes</p>
          <p><input type="checkbox" class="dessert3"checked="checked" style="margin-right:10px;" />
        <img src="../assets/menu/plat-12.jpg" alt="" style="width:50px;border:3px solid white;"/>
        Coupe de glace ou de sorbet (3 boules)</p>

      <router-link to="/order-1"><button type="submit" class="btn btn-primary" style="margin-bottom:30px;">Submit</button></router-link>
    </form>
  </div>
</template>
