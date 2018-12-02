<template>
  <div class="bill-table-18">
    <h2>Addition de la table 18</h2>

    <form method="post" action="traitement.php">

    <h3>Entrée</h3>

    <p><span style="font-weight: bold;">7€</span> 1x Croquette de crevette</p>
    <p><span style="font-weight: bold;">9€</span> 2x Os à la moelle, pain grillé, fleur de sel</p>
    <p><span style="font-weight: bold;">6€</span> 1x Salade d'été</p>
    <p><span style="font-weight: bold;">8€</span> 2x Croquant au Maroilles, effeuillée de chicon</p>

    <h3>Plat</h3>

    <p><span style="font-weight: bold;">15€</span> 2x Pièce de boeuf, sauce au poivre, frite, salade</p>
    <p><span style="font-weight: bold;">13€</span> 1x Poisson du marché, riz pilaf, légumes</p>
    <p><span style="font-weight: bold;">14€</span> 1x Carbonnade flammade, frites</p>
    <p><span style="font-weight: bold;">14€</span> 1x Suprème de poulet forestier, purée maison</p>
    <p><span style="font-weight: bold;">12€</span> 1x Fish & Chips, sauce cocktail,  sauce tartare et mesclun</p>

    <h3>Dessert</h3>

    <p><span style="font-weight: bold;">6€</span> 1x Brioche façon pain-perdu au caramel au beurre salé</p>
    <p><span style="font-weight: bold;">6€</span> 3x Tarte fine au pommes</p>
    <p><span style="font-weight: bold;">6€</span> 2x Coupe de glace ou de sorbet (3 boules)</p>


          <router-link to="/billPaid"><button type="submit" class="btn btn-primary" style="margin-bottom:30px;">Payer 166€</button></router-link>
        </form>
  </div>
</template>
