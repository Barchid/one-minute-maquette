<template>
  <div class="order-table-4">
    <h4 style="margin-bottom:30px;">Commande de la table 4</h4>
    <div class="progress" style="margin-bottom:30px;">
      <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">En train d'être cuisiné</div>
    </div>
    <router-link to="/accueil"><button type="submit" class="btn btn-primary" style="margin-bottom:10px;margin-right:10px">Valider les modifications</button></router-link>
    <router-link to="/order-table-4"><button type="submit" class="btn btn-primary" style="margin-bottom:10px;margin-right:10px">Imprimer l'addition</button></router-link>
  <router-link to="/accueil"><button type="submit" class="btn btn-primary bg-danger" style="margin-bottom:10px;border-color:red">Supprimer la commande</button></router-link>

    <div class="container">
      <div class="row">
        <div class="col-l" style="margin-right:30px;">

          <form method="post" action="traitement.php">
            <h4 style="margin-top:30px;color:#007bff;text-align:center;">Commande</h4>

            <h5 style="margin-top:30px;">Entrée</h5>

            <p style="margin-bottom:0px">
              <img src="../assets/menu/plat-1.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-danger" value="-" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              <span style="font-weight: bold;">1</span>
              Croquette de crevette
              <span style="font-weight: bold;color:#007bff">
                7€
              </span>
            </p>
            <p style="margin-bottom:0px">
              <img src="../assets/menu/plat-2.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-danger" value="-" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              <span style="font-weight: bold;">2</span>
              Os à la moelle, pain grillé, fleur de sel
              <span style="font-weight: bold;color:#007bff">9€</span>
            </p>
            <p style="margin-bottom:0px">
              <img src="../assets/menu/plat-3.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-danger" value="-" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              <span style="font-weight: bold;">1</span>
              Salade d'été
              <span style="font-weight: bold;color:#007bff">6€</span>
            </p>
            <p style="margin-bottom:0px">
              <img src="../assets/menu/plat-4.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-danger" value="-" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              <span style="font-weight: bold;">2</span>
              Corolles au Maroilles, effeuillée de chicon
              <span style="font-weight: bold;color:#007bff">8€</span>
            </p>

            <h5>Plat</h5>

            <p style="margin-bottom:0px">
              <img src="../assets/menu/plat-5.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-danger" value="-" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              <span style="font-weight: bold;">2</span>
              Pièce de boeuf, sauce au poivre, frite, salade
              <span style="font-weight: bold;color:#007bff">15€</span>

            </p>
            <p style="margin-bottom:0px">
              <img src="../assets/menu/plat-6.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-danger" value="-" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              <span style="font-weight: bold;">1</span>
              Poisson du marché, riz pilaf, légumes
              <span style="font-weight: bold;color:#007bff">13€</span>

            </p>
            <p style="margin-bottom:0px">
              <img src="../assets/menu/plat-7.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-danger" value="-" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              <span style="font-weight: bold;">1</span>
              Carbonnade flammade, frites
              <span style="font-weight: bold;color:#007bff">14€</span>

            </p>
            <p style="margin-bottom:0px">
              <img src="../assets/menu/plat-8.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-danger" value="-" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              <span style="font-weight: bold;">1</span>
              Suprème de poulet forestier, purée maison
              <span style="font-weight: bold;color:#007bff">14€</span>

            </p>
            <p style="margin-bottom:0px">
              <img src="../assets/menu/plat-9.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-danger" value="-" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              <span style="font-weight: bold;">1</span>
              Fish & Chips, sauce cocktail,  sauce tartare et mesclun
              <span style="font-weight: bold;color:#007bff">12€</span>

            </p>

            <h5>Dessert</h5>

            <p style="margin-bottom:0px">
              <img src="../assets/menu/plat-10.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-danger" value="-" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              <span style="font-weight: bold;">1</span>
              Brioche façon pain-perdu au caramel au beurre salé
              <span style="font-weight: bold;color:#007bff">6€</span>

            </p>
            <p style="margin-bottom:0px">
              <img src="../assets/menu/plat-11.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-danger" value="-" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              <span style="font-weight: bold;">3</span>
              Tarte fine au pommes
              <span style="font-weight: bold;color:#007bff">6€</span>

            </p>
            <p style="margin-bottom:0px">
              <img src="../assets/menu/plat-12.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-danger" value="-" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              <span style="font-weight: bold;">2</span>
              Coupe de glace ou de sorbet (3 boules)
              <span style="font-weight: bold;color:#007bff">6€</span>

            </p>

          </form>


        </div>

        <div class="col-l">
          <form method="post" action="traitement.php">
            <h4 style="margin-top:30px;color:#007bff;text-align:center;">Menu</h4>

            <h5 style="margin-top:30px;">Entrée</h5>

            <p style="margin-bottom:0px"><img src="../assets/menu/plat-1.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>Croquette de crevette</p>
            <p style="margin-bottom:0px"><img src="../assets/menu/plat-2.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>Os à la moelle, pain grillé, fleur de sel</p>
            <p style="margin-bottom:0px"><img src="../assets/menu/plat-3.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>Salade d'été</p>
            <p style="margin-bottom:0px"><img src="../assets/menu/plat-4.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>Corolles au Maroilles, confiture d'oignon</p>

            <h5>Plat</h5>

            <p style="margin-bottom:0px"><img src="../assets/menu/plat-5.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>Pièce de boeuf, sauce au poivre, frite, salade</p>
            <p style="margin-bottom:0px"><img src="../assets/menu/plat-6.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>Poisson du marché, riz pilaf, légumes</p>
            <p style="margin-bottom:0px"><img src="../assets/menu/plat-7.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>Carbonnade flammade, frites</p>
            <p style="margin-bottom:0px"><img src="../assets/menu/plat-8.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>Suprème de poulet forestier, purée maison</p>
            <p style="margin-bottom:0px"><img src="../assets/menu/plat-9.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>Fish & Chips, sauce cocktail,  sauce tartare et mesclun</p>

            <h5>Dessert</h5>

            <p style="margin-bottom:0px"><img src="../assets/menu/plat-10.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>Brioche façon pain-perdu au caramel au beurre salé</p>
            <p style="margin-bottom:0px"><img src="../assets/menu/plat-11.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>Tarte fine au pommes</p>
            <p style="margin-bottom:0px"><img src="../assets/menu/plat-12.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>Coupe de glace ou de sorbet (3 boules)</p>

          </form>
        </div>
      </div>
    </div>


    <h4>Addition</h4>

    <p >Prix de l'addition : 166€</p>
    <router-link to="/billPaid"><button type="submit" class="btn btn-primary" style="margin-bottom:30px;">Payer l'addition</button></router-link>


  </div>


</template>
