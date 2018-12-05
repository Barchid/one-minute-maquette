<template>
  <div class="removeToOrder">
    <h4 style="margin-bottom:30px;">Commande de la table</h4>

    <form method="post" action="traitement.php">

      <router-link to="/formAddToOrder"><button type="submit" class="btn btn-primary" style="margin-right:30px;">Ajouter une préparation</button></router-link>
      <router-link to="/formRemoveToOrder"><button type="submit" class="btn btn-primary" style="margin-right:30px;">Supprimer une préparation</button></router-link>

      <h5 style="margin-top:30px;">Entrée</h5>

      <p><span style="font-weight: bold;">7€</span> 1x Croquette de crevette</p>
      <p><span style="font-weight: bold;">9€</span> 3x Os à la moelle, pain grillé, fleur de sel</p>
      <p><span style="font-weight: bold;">6€</span> 1x Salade d'été</p>
      <p><span style="font-weight: bold;">8€</span> 2x Croquant au Maroilles, effeuillée de chicon</p>

      <h5>Plat</h5>

      <p><span style="font-weight: bold;">15€</span> 2x Pièce de boeuf, sauce au poivre, frite, salade</p>
      <p><span style="font-weight: bold;">13€</span> 1x Poisson du marché, riz pilaf, légumes</p>
      <p><span style="font-weight: bold;">14€</span> 1x Carbonnade flammade, frites</p>
      <p><span style="font-weight: bold;">14€</span> 1x Suprème de poulet forestier, purée maison</p>
      <p><span style="font-weight: bold;">12€</span> 1x Fish & Chips, sauce cocktail,  sauce tartare et mesclun</p>

      <h5>Dessert</h5>

      <p><span style="font-weight: bold;">6€</span> 1x Brioche façon pain-perdu au caramel au beurre salé</p>
      <p><span style="font-weight: bold;">6€</span> 3x Tarte fine au pommes</p>
      <p><span style="font-weight: bold;">6€</span> 2x Coupe de glace ou de sorbet (3 boules)</p>

      <h4>Addition</h4>

      <p >Prix de l'addition : 166€</p>
      <router-link to="/billPaid"><button type="submit" class="btn btn-primary" style="margin-bottom:30px;">Payer l'addition</button></router-link>


    </form>
  </div>
</template>
