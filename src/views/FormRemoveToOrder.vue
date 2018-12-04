<template>
  <div class="formRemoveToOrder">

    <form class="" action="index.html" method="post">

      <h5>Supprimer des préparations dans la commande</h5>
      Entrée
      <div class="container">

        <div class="row">
          <div class="col">
            <input type="checkbox"  style="display:inline-block;margin-left:10px;"/>
            Croquette de crevette
          </div>
          <div class="col">
            7€
          </div>
        </div>

        <div class="row">
          <div class="col">
            <input type="checkbox"  style="display:inline-block;margin-left:10px;"/>
            Os à la moelle, pain grillé, fleur de sel
          </div>
          <div class="col">
            9€
          </div>
        </div>

        <div class="row">
          <div class="col">
            <input type="checkbox"  style="display:inline-block;margin-left:10px;"/>
            Os à la moelle, pain grillé, fleur de sel
          </div>
          <div class="col">
            9€
          </div>
        </div>

        <div class="row">
          <div class="col">
            <input type="checkbox" checked="checked" style="display:inline-block;margin-left:10px;"/>
            Salade d'été
          </div>
          <div class="col">
            6€
          </div>
        </div>

        <div class="row">
          <div class="col">
            <input type="checkbox"  style="display:inline-block;margin-left:10px;"/>
            Croquant au Maroilles, effeuillée de chicon
          </div>
          <div class="col">
            8€
          </div>
        </div>

        <div class="row">
          <div class="col">
            <input type="checkbox"  style="display:inline-block;margin-left:10px;"/>
            Croquant au Maroilles, effeuillée de chicon
          </div>
          <div class="col">
            8€
          </div>
        </div>
      </div>

      Plat
      <div class="container">

        <div class="row">
          <div class="col">
            <input type="checkbox"  style="display:inline-block;margin-left:10px;"/>
            Pièce de boeuf, sauce au poivre, frite, salade
          </div>
          <div class="col">
            15€
          </div>
        </div>

        <div class="row">
          <div class="col">
            <input type="checkbox" checked="checked" style="display:inline-block;margin-left:10px;"/>
            Pièce de boeuf, sauce au poivre, frite, salade
          </div>
          <div class="col">
            15€
          </div>
        </div>

        <div class="row">
          <div class="col">
            <input type="checkbox"  style="display:inline-block;margin-left:10px;"/>
            Poisson du marché, riz pilaf, légumes
          </div>
          <div class="col">
            13€
          </div>
        </div>

        <div class="row">
          <div class="col">
            <input type="checkbox"  style="display:inline-block;margin-left:10px;"/>
            Carbonnade flammade, frites
          </div>
          <div class="col">
            14€
          </div>
        </div>

        <div class="row">
          <div class="col">
            <input type="checkbox"  style="display:inline-block;margin-left:10px;"/>
            Suprème de poulet forestier, purée maison
          </div>
          <div class="col">
            14€
          </div>
        </div>

        <div class="row">
          <div class="col">
            <input type="checkbox"  style="display:inline-block;margin-left:10px;"/>
            Fish & Chips, sauce cocktail,  sauce tartare et mesclun
          </div>
          <div class="col">
            12€
          </div>
        </div>
      </div>

      Dessert

      <div class="container">

        <div class="row">
          <div class="col">
            <input type="checkbox"  style="display:inline-block;margin-left:10px;"/>
            Brioche façon pain-perdu au caramel au beurre salé
          </div>
          <div class="col">
            6€
          </div>
        </div>

        <div class="row">
          <div class="col">
            <input type="checkbox"  style="display:inline-block;margin-left:10px;"/>
            Tarte fine au pommes
          </div>
          <div class="col">
            6€
          </div>
        </div>

        <div class="row">
          <div class="col">
            <input type="checkbox"  style="display:inline-block;margin-left:10px;"/>
            Tarte fine au pommes
          </div>
          <div class="col">
            6€
          </div>
        </div>

        <div class="row">
          <div class="col">
            <input type="checkbox"  style="display:inline-block;margin-left:10px;"/>
            Tarte fine au pommes
          </div>
          <div class="col">
            6€
          </div>
        </div>

        <div class="row">
          <div class="col">
            <input type="checkbox"  style="display:inline-block;margin-left:10px;"/>
            Coupe de glace ou de sorbet (3 boules)
          </div>
          <div class="col">
            6€
          </div>
        </div>

        <div class="row">
          <div class="col">
            <input type="checkbox"  style="display:inline-block;margin-left:10px;"/>
            Coupe de glace ou de sorbet (3 boules)
          </div>
          <div class="col">
            6€
          </div>
        </div>

      </div>

      <router-link to="/removeToOrder"><button type="submit" class="btn btn-primary" style="margin-top:30px;margin-bottom:30px;">Supprimer les préparations</button></router-link>

    </form>
  </div>
</template>
