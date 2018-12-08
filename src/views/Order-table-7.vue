<template>
  <div class="order-table-7">
    <h4 style="margin-bottom:30px;">Commande de la table 7</h4>
    <div class="progress" style="margin-bottom:30px;">
      <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">Table installée</div>
    </div>
    <router-link to="/accueil"><button type="submit" class="btn btn-primary" style="margin-bottom:10px;margin-right:10px">Valider les modifications</button></router-link>
    <router-link to="/order-table-7"><button type="submit" class="btn btn-primary" style="margin-bottom:10px;margin-right:10px">Imprimer l'addition</button></router-link>
<router-link to="/accueil"><button type="submit" class="btn btn-primary bg-danger" style="margin-bottom:10px;border-color:red">Supprimer la commande</button></router-link>

    <div class="container">
      <div class="row">
        <div class="col-l" style="margin-right:30px;">

          <form method="post" action="traitement.php">
            <h4 style="margin-top:30px;color:#007bff;text-align:center;">Commande</h4>
            <h5 style="margin-top:30px;width:500px;">Entrée</h5>
          ...


            <h5>Plat</h5>
          ...



            <h5>Dessert</h5>

          ...


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

    <p >Prix de l'addition : 0€</p>
    <router-link to="/order-table-7"><button type="submit" class="btn btn-primary disabled" style="margin-bottom:30px;">Rien à payer</button></router-link>


  </div>


</template>
