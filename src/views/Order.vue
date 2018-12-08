<template>
  <div class="order">
    <h4 style="margin-bottom:30px;">Commande de la table</h4>

    <div class="container">
      <div class="row">
        <div class="col">

          <form method="post" action="traitement.php">

            <h5 style="margin-top:30px;">Entrée</h5>

            <p>
              <input type="button" value="-" style="color:white; background-color:red; border-color:white;margin:5px;height:30px;width:30px"/>
              <span style="font-weight: bold;">1</span>
              Croquette de crevette
              <span style="font-weight: bold;color:#007bff">
                7€
              </span>
            </p>
            <p>
              <input type="button" value="-" style="color:white; background-color:red; border-color:white;margin:5px;height:30px;width:30px"/>
              <span style="font-weight: bold;">2</span>
              Os à la moelle, pain grillé, fleur de sel
              <span style="font-weight: bold;color:#007bff">9€</span>
            </p>
            <p><input type="button" value="-" style="color:white; background-color:red; border-color:white;margin:5px;height:30px;width:30px"/>
              <span style="font-weight: bold;">1</span>
              Salade d'été
              <span style="font-weight: bold;color:#007bff">6€</span>
            </p>
            <p><input type="button" value="-" style="color:white; background-color:red; border-color:white;margin:5px;height:30px;width:30px"/>
              <span style="font-weight: bold;">2</span>
              Croquant au Maroilles, effeuillée de chicon
              <span style="font-weight: bold;color:#007bff">8€</span>
            </p>

            <h5>Plat</h5>

            <p><input type="button" value="-" style="color:white; background-color:red; border-color:white;margin:5px;height:30px;width:30px"/>
              <span style="font-weight: bold;">2</span>
            Pièce de boeuf, sauce au poivre, frite, salade
              <span style="font-weight: bold;color:#007bff">15€</span>

            </p>
            <p><input type="button" value="-" style="color:white; background-color:red; border-color:white;margin:5px;height:30px;width:30px"/>
              <span style="font-weight: bold;">1</span>
              Poisson du marché, riz pilaf, légumes
              <span style="font-weight: bold;color:#007bff">13€</span>

            </p>
            <p><input type="button" value="-" style="color:white; background-color:red; border-color:white;margin:5px;height:30px;width:30px"/>
              <span style="font-weight: bold;">1</span>
           Carbonnade flammade, frites
              <span style="font-weight: bold;color:#007bff">14€</span>

            </p>
            <p><input type="button" value="-" style="color:white; background-color:red; border-color:white;margin:5px;height:30px;width:30px"/>
              <span style="font-weight: bold;">1</span>
           Suprème de poulet forestier, purée maison
              <span style="font-weight: bold;color:#007bff">14€</span>

            </p>
            <p><input type="button" value="-" style="color:white; background-color:red; border-color:white;margin:5px;height:30px;width:30px"/>
              <span style="font-weight: bold;">1</span>
               Fish & Chips, sauce cocktail,  sauce tartare et mesclun
              <span style="font-weight: bold;color:#007bff">12€</span>

            </p>

            <h5>Dessert</h5>

            <p><input type="button" value="-" style="color:white; background-color:red; border-color:white;margin:5px;height:30px;width:30px"/>
              <span style="font-weight: bold;">1</span>
              Brioche façon pain-perdu au caramel au beurre salé
              <span style="font-weight: bold;color:#007bff">6€</span>

            </p>
            <p><input type="button" value="-" style="color:white; background-color:red; border-color:white;margin:5px;height:30px;width:30px"/>
              <span style="font-weight: bold;">3</span>
            Tarte fine au pommes
              <span style="font-weight: bold;color:#007bff">6€</span>

            </p>
            <p><input type="button" value="-" style="color:white; background-color:red; border-color:white;margin:5px;height:30px;width:30px"/>
              <span style="font-weight: bold;">2</span>
             Coupe de glace ou de sorbet (3 boules)
              <span style="font-weight: bold;color:#007bff">6€</span>

            </p>

          </form>


        </div>

        <div class="col">
          <form method="post" action="traitement.php">

            <h5 style="margin-top:30px;">Entrée</h5>

            <p><input type="button" value="+" style="color:white; background-color:green; border-color:white;margin:5px;height:30px;width:30px"/>Croquette de crevette</p>
            <p><input type="button" value="+" style="color:white; background-color:green; border-color:white;margin:5px;height:30px;width:30px"/>Os à la moelle, pain grillé, fleur de sel</p>
            <p><input type="button" value="+" style="color:white; background-color:green; border-color:white;margin:5px;height:30px;width:30px"/>Salade d'été</p>
            <p><input type="button" value="+" style="color:white; background-color:green; border-color:white;margin:5px;height:30px;width:30px"/>Corolles au Maroilles, confiture d'oignon</p>

            <h5>Plat</h5>

            <p><input type="button" value="+" style="color:white; background-color:green; border-color:white;margin:5px;height:30px;width:30px"/>Pièce de boeuf, sauce au poivre, frite, salade</p>
            <p><input type="button" value="+" style="color:white; background-color:green; border-color:white;margin:5px;height:30px;width:30px"/>Poisson du marché, riz pilaf, légumes</p>
            <p><input type="button" value="+" style="color:white; background-color:green; border-color:white;margin:5px;height:30px;width:30px"/>Carbonnade flammade, frites</p>
            <p><input type="button" value="+" style="color:white; background-color:green; border-color:white;margin:5px;height:30px;width:30px"/>Suprème de poulet forestier, purée maison</p>
            <p><input type="button" value="+" style="color:white; background-color:green; border-color:white;margin:5px;height:30px;width:30px"/>Fish & Chips, sauce cocktail,  sauce tartare et mesclun</p>

            <h5>Dessert</h5>

            <p><input type="button" value="+" style="color:white; background-color:green; border-color:white;margin:5px;height:30px;width:30px"/>Brioche façon pain-perdu au caramel au beurre salé</p>
            <p><input type="button" value="+" style="color:white; background-color:green; border-color:white;margin:5px;height:30px;width:30px"/>Tarte fine au pommes</p>
            <p><input type="button" value="+" style="color:white; background-color:green; border-color:white;margin:5px;height:30px;width:30px"/>Coupe de glace ou de sorbet (3 boules)</p>

          </form>
        </div>
      </div>
    </div>

    <h4>Addition</h4>

    <p >Prix de l'addition : 166€</p>
    <router-link to="/billPaid"><button type="submit" class="btn btn-primary" style="margin-bottom:30px;">Payer l'addition</button></router-link>


  </div>


</template>
