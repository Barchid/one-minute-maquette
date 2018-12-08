<template>
  <div class="order-table-1">
    <h4 style="margin-bottom:30px;">Page d'administration du Menu</h4>
    <form method="post" action="bossMenu">
      <h4 style="margin-bottom:30px;color:#007bff;text-align:center;">Menus</h4>

      <p>
        <router-link to="/summerMenu" style="margin-right:30px;">


          <button type="submit" class="btn btn-primary bg-success"   style="border:none" >
            <img src="../assets/menu/plat-3.jpg" alt="" style="width:100px;border:3px solid white;"/> Menu d'été</button>
          </router-link>


          <router-link to="/winterMenu" style="margin-right:30px;">

            <button type="submit" class="btn btn-primary"   style="border:none" >
              <img src="../assets/menu/plat-4-1.jpg" alt="" style="width:100px;border:3px solid white;"/> Menu d'hiver</button>
            </router-link>


            <router-link to="/veganMenu" style="margin-right:30px;">
              <button type="submit" class="btn btn-primary"  style="border:none" >
                <img src="../assets/menu/plat-5-1.jpg" alt="" style="width:100px;border:3px solid white;"/> Menu Vegan</button>
              </router-link>
              <router-link to="/newMenu" style="margin-right:30px;">
                <button type="submit" class="btn btn-primary"  style="border:none" >
                  <img src="../assets/menu/plat-new.jpg" alt="" style="width:100px;border:3px solid white;"/>

                  Ajouter un menu
                </button>
              </router-link>
            </p>

            <h4 style="margin-top:30px;color:#007bff;text-align:center;">Catégories</h4>

            <div class="btn btn-primary disabled"  style="border:none; margin:10px;" >
              Supprimer
            </div>
            <div class="btn btn-primary disabled"  style="border:none; margin:10px;" >
              Ajouter
            </div>
            <p>

              <div class="btn btn-primary disabled"   style="border:none; margin-right:10px;" >
                <img src="../assets/menu/plat-6.jpg" alt="" style="width:100px;border:3px solid white;"/> Poisson
              </div>

              <div class="btn btn-primary disabled" style="border:none; margin-right:10px;" >
                <img src="../assets/menu/plat-5.jpg" alt="" style="width:100px;border:3px solid white;"/> Viande
              </div>


              <div class="btn btn-primary disabled"  style="border:none; margin-right:10px;" >
                <img src="../assets/menu/plat-11.jpg" alt="" style="width:100px;border:3px solid white;"/> Pâttiserie
              </div>
              <div class="btn btn-primary disabled"  style="border:none; margin-right:10px;" >
                <img src="../assets/menu/plat-12.jpg" alt="" style="width:100px;border:3px solid white;"/>

                Glace
              </div>

              <button type="submit" class="btn btn-primary disabled"  style="border:none" >
                <img src="../assets/menu/plat-5-1.jpg" alt="" style="width:100px;border:3px solid white;"/> Vegan
              </button>
            </p>


            <h4 style="margin-top:30px;color:#007bff;text-align:center;">Préparations</h4>

            <div class="btn btn-primary disabled"  style="border:none; margin:10px;" >
              Supprimer
            </div>
            <div class="btn btn-primary disabled"  style="border:none; margin:10px;" >
              Ajouter
            </div>
            <div class="container">
              <div class="row">
                <div class="col-sm">
                  <h5>Entrée</h5>

                  <p style="margin-bottom:0px"><img src="../assets/menu/plat-1.jpg" alt="" style="width:50px;border:3px solid white;"/>
                    Croquette de crevette
                  </p>
                  <p style="margin-bottom:0px"><img src="../assets/menu/plat-2.jpg" alt="" style="width:50px;border:3px solid white;"/>
                    Os à la moelle, pain grillé, fleur de sel
                  </p>
                  <p style="margin-bottom:0px"><img src="../assets/menu/plat-3.jpg" alt="" style="width:50px;border:3px solid white;"/>
                    Salade d'été
                  </p>
                  <p style="margin-bottom:0px"><img src="../assets/menu/plat-4.jpg" alt="" style="width:50px;border:3px solid white;"/>
                    Corolles au Maroilles
                  </p>

                  <p style="margin-bottom:0px">
                    <img src="../assets/menu/plat-1-1.jpg" alt="" style="width:50px;border:3px solid white;"/>
                    Salade du jour, houmous (vegan)
                  </p>
                  <p style="margin-bottom:0px">
                    <img src="../assets/menu/plat-2-1.jpg" alt="" style="width:50px;border:3px solid white;"/>
                    Salade de quinoa, lentilles corail (vegan)
                  </p>
                  <p style="margin-bottom:0px">
                    <img src="../assets/menu/plat-3.jpg" alt="" style="width:50px;border:3px solid white;"/>
                    Salade d'été aux crevettes
                  </p>
                  <p style="margin-bottom:0px">
                    <img src="../assets/menu/plat-4-1.jpg" alt="" style="width:50px;border:3px solid white;"/>
                    Soupe du jour (vegan)
                  </p>    </div>
                  <div class="col-sm">
                    <h5>Plat</h5>

                    <p style="margin-bottom:0px"><img src="../assets/menu/plat-5.jpg" alt="" style="width:50px;border:3px solid white;"/>
                      Pièce de boeuf, sauce au poivre, frite
                    </p>
                    <p style="margin-bottom:0px"><img src="../assets/menu/plat-6.jpg" alt="" style="width:50px;border:3px solid white;"/>
                      Poisson du marché, riz pilaf, légumes
                    </p>
                    <p style="margin-bottom:0px"><img src="../assets/menu/plat-7.jpg" alt="" style="width:50px;border:3px solid white;"/>
                      Carbonnade flammade, frites
                    </p>
                    <p style="margin-bottom:0px"><img src="../assets/menu/plat-8.jpg" alt="" style="width:50px;border:3px solid white;"/>
                      Suprème de poulet forestier
                    </p>
                    <p style="margin-bottom:0px"><img src="../assets/menu/plat-9.jpg" alt="" style="width:50px;border:3px solid white;"/>
                      Fish & Chips, sauce cocktail
                    </p>
                    <p style="margin-bottom:0px">
                      <img src="../assets/menu/plat-5-1.jpg" alt="" style="width:50px;border:3px solid white;"/>
                      Hamburger Vegan (vegan)
                    </p>
                    <p style="margin-bottom:0px">
                      <img src="../assets/menu/plat-6.jpg" alt="" style="width:50px;border:3px solid white;"/>
                      Poêlée de noix de saint-Jacques
                    </p>
                    <p style="margin-bottom:0px">
                      <img src="../assets/menu/plat-7-1.jpg" alt="" style="width:50px;border:3px solid white;"/>
                      Gratin d'aubergine (vegan)
                    </p>
                    <p style="margin-bottom:0px">
                      <img src="../assets/menu/plat-8-1.jpg" alt="" style="width:50px;border:3px solid white;"/>
                      Pomme de Terre au four (vegan)

                    </p>
                    <p style="margin-bottom:0px">
                      <img src="../assets/menu/plat-9-1.jpg" alt="" style="width:50px;border:3px solid white;"/>
                      Lasagnes de légumes (vegan)

                    </p>    </div>
                    <div class="col-sm">

                      <h5>Dessert</h5>

                      <p style="margin-bottom:0px"><img src="../assets/menu/plat-10.jpg" alt="" style="width:50px;border:3px solid white;"/>
                        Brioche façon pain-perdu
                      </p>
                      <p style="margin-bottom:0px"><img src="../assets/menu/plat-11.jpg" alt="" style="width:50px;border:3px solid white;"/>
                        Tarte fine au pommes
                      </p>
                      <p style="margin-bottom:0px"><img src="../assets/menu/plat-12.jpg" alt="" style="width:50px;border:3px solid white;"/>
                        Coupe de glace ou de sorbet (3 boules)
                      </p>

                      <p style="margin-bottom:0px">
                        <img src="../assets/menu/plat-10-1.jpg" alt="" style="width:50px;border:3px solid white;"/>
                        Fondant au chocolat (vegan)
                      </p>

                      <p style="margin-bottom:0px">
                        <img src="../assets/menu/plat-12-1.jpg" alt="" style="width:50px;border:3px solid white;"/>
                        Crêpe au chocolat (vegan)
                      </p>    </div>
                    </div>
                  </div>



                </form>
              </div>


            </template>
