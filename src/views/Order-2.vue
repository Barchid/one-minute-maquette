<template>
  <div class="order-2">

    <div class="content">

      <div class="container">
        <div class="row">
          <div class="col">
          </div>
          <div class="pagination-nav">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item"><router-link class="page-link" to="/order-1">Previous</router-link></li>
                <li class="page-item"><router-link class="page-link" to="/order-1">1</router-link></li>
                <li class="page-item disabled"><router-link class="page-link" to="/order-2">2</router-link></li>
                <li class="page-item"><router-link class="page-link" to="/order-3">3</router-link></li>
                <li class="page-item"><router-link class="page-link" to="order-3">Next</router-link></li>
              </ul>
            </nav>
          </div>
          <div class="col">
          </div>
        </div>
      </div>

    <router-link to="order-table-12">
      Table 12
      <div class="progress">
        <div class="progress-bar progress-bar-striped bg-striped" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Table à débarasser</div>
      </div>
    </router-link>
    <router-link to="order-table-7">
      Table 7
      <div class="progress">
        <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">Table installée</div>
      </div>
    </router-link>
    <router-link to="order-table-9">
      Table 9
      <div class="progress">
        <div class="progress-bar progress-bar-striped bg-striped" role="progressbar" style="width: 90%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">Addition à régler</div>
      </div>
    </router-link>
    <router-link to="order-table-11">
      Table 11
      <div class="progress">
        <div class="progress-bar progress-bar-striped bg-striped" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Table à servir</div>
      </div>
    </router-link>
    <router-link to="order-table-8">
      Table 8
      <div class="progress">
        <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Commande prise</div>
      </div>
    </router-link>
    <router-link to="order-table-10">
      Table 10
      <div class="progress">
        <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">En train d'être cuisiné</div>
      </div>
    </router-link>
    <router-link to="order-table-16">
      Table 16
      <div class="progress">
        <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 50%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">En train d'être cuisiné</div>
      </div>
    </router-link>
    <router-link to="order-table-4">
      Table 4
      <div class="progress">
        <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">En train d'être cuisiné</div>
      </div>
    </router-link>


    </div>
  </div>
</template>
