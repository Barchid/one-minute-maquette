<template>
  <div class="veganMenu">
    <h4 style="margin-bottom:30px;">Page d'administration du Menu d'été</h4>

    <router-link to="/accueil"><button type="submit" class="btn btn-primary" style="margin-bottom:10px;margin-right:10px">Valider les modifications</button></router-link>
    <router-link to="/accueil"><button type="submit" class="btn btn-primary bg-success" style="margin-bottom:10px;border-color:green;margin-right:10px">Rendre actif</button></router-link>
    <router-link to="/accueil"><button type="submit" class="btn btn-primary bg-danger" style="margin-bottom:10px;border-color:red">Supprimer le menu</button></router-link>

    <div class="container">
      <div class="row">
        <div class="col-l" style="margin-right:30px;">

          <form method="post" action="traitement.php">
            <h4 style="margin-top:30px;color:#007bff;text-align:center;">Menu d'été</h4>


            <h5 style="margin-top:30px;">Entrée</h5>

            <p style="margin-bottom:0px"><img src="../assets/menu/plat-1.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-danger" value="-" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>Croquette de crevette</p>
            <p style="margin-bottom:0px"><img src="../assets/menu/plat-2.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-danger" value="-" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>Os à la moelle, pain grillé, fleur de sel</p>
            <p style="margin-bottom:0px"><img src="../assets/menu/plat-3.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-danger" value="-" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>Salade d'été</p>
            <p style="margin-bottom:0px"><img src="../assets/menu/plat-4.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-danger" value="-" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>Corolles au Maroilles, confiture d'oignon</p>

            <h5>Plat</h5>

            <p style="margin-bottom:0px"><img src="../assets/menu/plat-5.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-danger" value="-" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>Pièce de boeuf, sauce au poivre, frite, salade</p>
            <p style="margin-bottom:0px"><img src="../assets/menu/plat-6.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-danger" value="-" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>Poisson du marché, riz pilaf, légumes</p>
            <p style="margin-bottom:0px"><img src="../assets/menu/plat-7.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-danger" value="-" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>Carbonnade flammade, frites</p>
            <p style="margin-bottom:0px"><img src="../assets/menu/plat-8.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-danger" value="-" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>Suprème de poulet forestier, purée maison</p>
            <p style="margin-bottom:0px"><img src="../assets/menu/plat-9.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-danger" value="-" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>Fish & Chips, sauce cocktail,  sauce tartare et mesclun</p>

            <h5>Dessert</h5>

            <p style="margin-bottom:0px"><img src="../assets/menu/plat-10.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-danger" value="-" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>Brioche façon pain-perdu au caramel au beurre salé</p>
            <p style="margin-bottom:0px"><img src="../assets/menu/plat-11.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-danger" value="-" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>Tarte fine au pommes</p>
            <p style="margin-bottom:0px"><img src="../assets/menu/plat-12.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <input type="button" class="bg-danger" value="-" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>Coupe de glace ou de sorbet (3 boules)</p>

          </form>


        </div>

        <div class="col-l">
          <form method="post" action="traitement.php">
            <h4 style="margin-top:30px;color:#007bff;text-align:center;">Recettes disponibles</h4>

            <h5 style="margin-top:30px;">Entrée</h5>

            <p style="margin-bottom:0px"><img src="../assets/menu/plat-1.jpg" alt="" style="width:50px;border:3px solid white;"/>
              <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              Croquette de crevette
            </p>
            <p style="margin-bottom:0px"><img src="../assets/menu/plat-2.jpg" alt="" style="width:50px;border:3px solid white;"/>
              <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              Os à la moelle, pain grillé, fleur de sel
            </p>
            <p style="margin-bottom:0px"><img src="../assets/menu/plat-3.jpg" alt="" style="width:50px;border:3px solid white;"/>
              <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              Salade d'été
            </p>
            <p style="margin-bottom:0px"><img src="../assets/menu/plat-4.jpg" alt="" style="width:50px;border:3px solid white;"/>
              <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              Corolles au Maroilles, confiture d'oignon
            </p>

            <p style="margin-bottom:0px">
              <img src="../assets/menu/plat-1-1.jpg" alt="" style="width:50px;border:3px solid white;"/>
              <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              Salade du jour, houmous (vegan)
            </p>
            <p style="margin-bottom:0px">
              <img src="../assets/menu/plat-2-1.jpg" alt="" style="width:50px;border:3px solid white;"/>
              <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              Salade de quinoa, lentilles corail (vegan)
            </p>
            <p style="margin-bottom:0px">
              <img src="../assets/menu/plat-3.jpg" alt="" style="width:50px;border:3px solid white;"/>
              <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              Salade d'été aux crevettes
            </p>
            <p style="margin-bottom:0px">
              <img src="../assets/menu/plat-4-1.jpg" alt="" style="width:50px;border:3px solid white;"/>
              <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              Soupe du jour (vegan)
            </p>
            <h5>Plat</h5>

            <p style="margin-bottom:0px"><img src="../assets/menu/plat-5.jpg" alt="" style="width:50px;border:3px solid white;"/>
              <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              Pièce de boeuf, sauce au poivre, frite, salade
            </p>
            <p style="margin-bottom:0px"><img src="../assets/menu/plat-6.jpg" alt="" style="width:50px;border:3px solid white;"/>
              <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              Poisson du marché, riz pilaf, légumes
            </p>
            <p style="margin-bottom:0px"><img src="../assets/menu/plat-7.jpg" alt="" style="width:50px;border:3px solid white;"/>
              <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              Carbonnade flammade, frites
            </p>
            <p style="margin-bottom:0px"><img src="../assets/menu/plat-8.jpg" alt="" style="width:50px;border:3px solid white;"/>
              <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              Suprème de poulet forestier, purée maison
            </p>
            <p style="margin-bottom:0px"><img src="../assets/menu/plat-9.jpg" alt="" style="width:50px;border:3px solid white;"/>
              <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              Fish & Chips, sauce cocktail,  sauce tartare et mesclun
            </p>
            <p style="margin-bottom:0px">
              <img src="../assets/menu/plat-5-1.jpg" alt="" style="width:50px;border:3px solid white;"/>
              <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              Hamburger Vegan (vegan)
            </p>
            <p style="margin-bottom:0px">
              <img src="../assets/menu/plat-6.jpg" alt="" style="width:50px;border:3px solid white;"/>
              <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              Poêlée de noix de saint-Jacques
            </p>
            <p style="margin-bottom:0px">
              <img src="../assets/menu/plat-7-1.jpg" alt="" style="width:50px;border:3px solid white;"/>
              <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              Gratin d'aubergine (vegan)
            </p>
            <p style="margin-bottom:0px">
              <img src="../assets/menu/plat-8-1.jpg" alt="" style="width:50px;border:3px solid white;"/>
              <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              Pomme de Terre au four (vegan)

            </p>
            <p style="margin-bottom:0px">
              <img src="../assets/menu/plat-9-1.jpg" alt="" style="width:50px;border:3px solid white;"/>
              <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              Lasagnes de légumes (vegan)

            </p>

            <h5>Dessert</h5>

            <p style="margin-bottom:0px"><img src="../assets/menu/plat-10.jpg" alt="" style="width:50px;border:3px solid white;"/>
              <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              Brioche façon pain-perdu au caramel au beurre salé
            </p>
            <p style="margin-bottom:0px"><img src="../assets/menu/plat-11.jpg" alt="" style="width:50px;border:3px solid white;"/>
              <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              Tarte fine au pommes
            </p>
            <p style="margin-bottom:0px"><img src="../assets/menu/plat-12.jpg" alt="" style="width:50px;border:3px solid white;"/>
              <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              Coupe de glace ou de sorbet (3 boules)
            </p>

            <p style="margin-bottom:0px">
              <img src="../assets/menu/plat-10-1.jpg" alt="" style="width:50px;border:3px solid white;"/>
              <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              Fondant au chocolat (vegan)
            </p>

            <p style="margin-bottom:0px">
              <img src="../assets/menu/plat-12-1.jpg" alt="" style="width:50px;border:3px solid white;"/>
              <input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              Crêpe au chocolat (vegan)
            </p>
          </form>
        </div>
      </div>
    </div>

  </div>


</template>
