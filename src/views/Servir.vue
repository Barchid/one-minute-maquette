<template>
  <div class="servir">
    <form method="post" action="traitement.php">


      <h4 style="margin-top:30px;color:#007bff;text-align:center;">Parties de commandes à servir</h4>

    </p>
    <div class="container">
      <div class="row">
        <div class="col-sm">

          <p style="margin-bottom:0px"><input type="button" class="bg-danger" value="-" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
            Entrées table 5
          </p>


        </div>
        <div class="col-sm">

          <p style="margin-bottom:0px"><input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
            Plats table 17
          </p>

        </div>
        <div class="col-sm">

          <p style="margin-bottom:0px"><input type="button" class="bg-success" value="+" style="color:white; cursor: pointer;  border:none; text-decoration: none;margin:5px;height:30px;width:30px"/>
            Desserts table 11
          </p>

        </div>


      </div>
    </div>


    <div style="margin:10px;padding:10px; border:1px solid grey; border-radius:5px;text-align:center">
      Listes des parties de commande à servir :
      <div class="row" >


        <div class="col-sm" style="margin:0px;padding:0px; margin-top:30px;">
          <p style="margin:10px;padding:0px; margin-top:30px;" >Table 5 : 1 Croquette de crevette, 2 Os à la moelle, 1 Salade d'été, 2 Corolles au Maroilles</p>
        </div>
        <div class="col-sm" style="margin:0px;padding:0px; margin-top:30px;">

        </div>
        <div class="col-sm" style="margin:0px;padding:0px; margin-top:30px;">

        </div>
        <div class="col-sm" style="margin:0px;padding:0px; margin-top:30px;">

        </div>


      </div>
    </div>
    <router-link to="/order-1"><button type="submit" class="btn btn-primary">Vont être servies</button></router-link>
  </form>
</form>
</div>
</template>
