<template>
  <div class="changeMenu">

    <form class="" action="index.html" method="post">

      Entrée
      <div class="container">

        <div class="row">
          <div class="col">
            <input type="checkbox" checked="checked" style="display:inline-block;margin-left:10px;"/>
            Croquette de crevette
          </div>
          <div class="col">
            7€
          </div>
        </div>

        <div class="row">
          <div class="col">
            <input type="checkbox" checked="checked" style="display:inline-block;margin-left:10px;"/>
            Os à la moelle, pain grillé, fleur de sel
          </div>
          <div class="col">
            9€
          </div>
        </div>

        <div class="row">
          <div class="col">
            <input type="checkbox" style="display:inline-block;margin-left:10px;"/>
            Salade d'été
          </div>
          <div class="col">
            6€
          </div>
        </div>

        <div class="row">
          <div class="col">
            <input type="checkbox" checked="checked" style="display:inline-block;margin-left:10px;"/>
            Corolles au Maroilles, effeuillée de chicon
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
            <input type="checkbox" checked="checked" style="display:inline-block;margin-left:10px;"/>
            Pièce de boeuf, sauce au poivre, frite, salade
          </div>
          <div class="col">
            15€
          </div>
        </div>

        <div class="row">
          <div class="col">
            <input type="checkbox" checked="checked" style="display:inline-block;margin-left:10px;"/>
            Poisson du marché, riz pilaf, légumes
          </div>
          <div class="col">
            13€
          </div>
        </div>

        <div class="row">
          <div class="col">
            <input type="checkbox" checked="checked" style="display:inline-block;margin-left:10px;"/>
            Carbonnade flammade, frites
          </div>
          <div class="col">
            14€
          </div>
        </div>

        <div class="row">
          <div class="col">
            <input type="checkbox" checked="checked" style="display:inline-block;margin-left:10px;"/>
            Suprème de poulet forestier, purée maison
          </div>
          <div class="col">
            14€
          </div>
        </div>

        <div class="row">
          <div class="col">
            <input type="checkbox" checked="checked" style="display:inline-block;margin-left:10px;"/>
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
            <input type="checkbox" checked="checked" style="display:inline-block;margin-left:10px;"/>
            Brioche façon pain-perdu au caramel au beurre salé
          </div>
          <div class="col">
            6€
          </div>
        </div>

        <div class="row">
          <div class="col">
            <input type="checkbox" checked="checked" style="display:inline-block;margin-left:10px;"/>
            Tarte fine au pommes
          </div>
          <div class="col">
            6€
          </div>
        </div>

        <div class="row">
          <div class="col">
            <input type="checkbox" checked="checked" style="display:inline-block;margin-left:10px;"/>
            Coupe de glace ou de sorbet (3 boules)
          </div>
          <div class="col">
            6€
          </div>
        </div>
      </div>
      <div style="color:grey;margin:10px;">
        Ajouter une entrée
        <p>
          Nom du plat <textarea style="width:400px;height:30px;display:inline-block;margin-left:10px;">Foie gras poêlé, pain grillé, confiture d'oignon</textarea>
          Prix  <textarea  style="width:50px;height:30px;display:inline-block;margin-left:10px;">9€</textarea>
        </p>
      </div>
      <div style="color:grey;margin:10px;">
        Ajouter un plat
        <p>
          Nom du plat <textarea style="width:400px;height:30px;display:inline-block;margin-left:10px;"></textarea>
          Prix  <textarea  style="width:50px;height:30px;display:inline-block;margin-left:10px;"></textarea>
        </p>
      </div>
      <div style="color:grey;margin:10px;">
        Ajouter un dessert
        <p>
          Nom du plat <textarea style="width:400px;height:30px;display:inline-block;margin-left:10px;"></textarea>
          Prix  <textarea  style="width:50px;height:30px;display:inline-block;margin-left:10px;"></textarea>
        </p>
      </div>
      <router-link to="/new-menu"><button type="submit" class="btn btn-primary" style="margin-bottom:30px;">Valider le menu</button></router-link>

    </form>
  </div>
</template>
