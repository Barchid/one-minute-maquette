<template>
  <div class="allMenu">
    <div class="content">
      <form method="post" action="traitement.php">

        <p>
        <router-link to="/newRolesCookers" style="margin-right:30px;">


          <button type="submit" class="btn btn-primary bg-success"   style="border:none" >
            <img src="../assets/menu/plat-3.jpg" alt="" style="width:100px;border:3px solid white;"/> Menu d'été</button>
        </router-link>


          <router-link to="/newRolesCookers" style="margin-right:30px;">

            <button type="submit" class="btn btn-primary"   style="border:none" >
              <img src="../assets/menu/plat-4-1.jpg" alt="" style="width:100px;border:3px solid white;"/> Menu d'hiver</button>
          </router-link>


          <router-link to="/newRolesCookers" style="margin-right:30px;">
          <button type="submit" class="btn btn-primary"  style="border:none" >
            <img src="../assets/menu/plat-5-1.jpg" alt="" style="width:100px;border:3px solid white;"/>

            Menu Vegan
          </button>
        </router-link>
        </p>
        </form>
    </div>
  </div>
</template>
