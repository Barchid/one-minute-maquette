<template>
  <div class="cookerOrderFinished">
    <form method="post" action="traitement.php">


      <h4 style="margin-top:30px;color:#007bff;text-align:center;">Préparations en trains d'être cuisinés</h4>
      <select>
        <option value="nobody"></option>
        <option  value="patissier">Marc</option>
        <option value="poissonier" selected="selected">Jean</option>
        <option value="boucher">Isabelle</option>
        <option value="saucier">Marie</option>

        <option value="Entremétier">Sandra</option>
        <option value="gardeManger">André</option>
        <option value="glacier">Rodolphe</option>
        <option value="barman">Henri</option>

        <option value="commis">Luc</option>
        <option value="tournant">Elise</option>
        <option value="apprenti">Sophie</option>
        <option value="rotisseur">Julie</option>
      </select>
    </p>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <h5>Entrée</h5>

          <p style="margin-bottom:0px"><input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
            <img src="../assets/menu/plat-1.jpg" alt="" style="width:50px;border:3px solid white;"/>
            <span style="font-weight:bold">1</span>    Croquette de crevette
          </p>
          <p style="margin-bottom:0px"><input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
            <img src="../assets/menu/plat-2.jpg" alt="" style="width:50px;border:3px solid white;"/>
            <span style="font-weight:bold">1</span>    Os à la moelle
          </p>
          <p style="margin-bottom:0px"><input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
            <img src="../assets/menu/plat-3.jpg" alt="" style="width:50px;border:3px solid white;"/>
            <span style="font-weight:bold">1</span>    Salade d'été
          </p>
          <p style="margin-bottom:0px"><input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
            <img src="../assets/menu/plat-4.jpg" alt="" style="width:50px;border:3px solid white;"/>
            <span style="font-weight:bold">1</span>    Corolles au Maroilles
          </p>

           </div>
          <div class="col-sm">
            <h5>Plat</h5>

            <p style="margin-bottom:0px"><input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              <img src="../assets/menu/plat-5.jpg" alt="" style="width:50px;border:3px solid white;"/>
              <span style="font-weight:bold">1</span>  Pièce de boeuf
            </p>
            <p style="margin-bottom:0px"><input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              <img src="../assets/menu/plat-6.jpg" alt="" style="width:50px;border:3px solid white;"/>
              <span style="font-weight:bold">0</span>      Poisson du marché
            </p>
            <p style="margin-bottom:0px"><input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              <img src="../assets/menu/plat-7.jpg" alt="" style="width:50px;border:3px solid white;"/>
              <span style="font-weight:bold">1</span>      Carbonnade flammade, frites
            </p>
            <p style="margin-bottom:0px"><input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              <img src="../assets/menu/plat-8.jpg" alt="" style="width:50px;border:3px solid white;"/>
              <span style="font-weight:bold">1</span>    Suprème de poulet forestier
            </p>
            <p style="margin-bottom:0px"><input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
              <img src="../assets/menu/plat-9.jpg" alt="" style="width:50px;border:3px solid white;"/>
              <span style="font-weight:bold">0</span>  Fish & Chips, sauce cocktail
            </p>

  </div>
            <div class="col-sm">

              <h5>Dessert</h5>

              <p style="margin-bottom:0px"><input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
                <img src="../assets/menu/plat-10.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <span style="font-weight:bold">1</span>    Brioche façon pain-perdu
              </p>
              <p style="margin-bottom:0px"><input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
                <img src="../assets/menu/plat-11.jpg" alt="" style="width:50px;border:3px solid white;"/>
                <span style="font-weight:bold">1</span>    Tarte fine au pommes
              </p>

 </div>


            </div>
          </div>


          <div style="margin:10px;padding:10px; border:1px solid grey; border-radius:5px;text-align:center">
            Listes des plats cuisinés :
          <div class="row" >
            <div class="col-sm" style="margin:10px;border:1px solid grey; border-radius:5px;text-align:center">
              <span style="font-weight:bold">2</span> Poisson du marché
            </div>
            <div class="col-sm" style="margin:10px;border:1px solid grey; border-radius:5px;text-align:center">
            <span style="font-weight:bold">3</span> Fish & Chips
            </div>

            <div class="col-sm" style="margin:0px;padding:0px; margin-top:30px;">

            </div>
            <div class="col-sm" style="margin:0px;padding:0px; margin-top:30px;">

            </div>
            <div class="col-sm" style="margin:0px;padding:0px; margin-top:30px;">

            </div>
            <div class="col-sm" style="margin:0px;padding:0px; margin-top:30px;">

            </div>


          </div>
        </div>
          <router-link to="/newRolesCookers"><button type="submit" class="btn btn-primary">Ont été cuisinée</button></router-link>
        </form>
      </form>
    </div>
  </template>
