<template>
  <div class="order-3">

    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col">
          </div>
          <div class="pagination-nav">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item"><router-link class="page-link" to="/order-2">Previous</router-link></li>
                <li class="page-item"><router-link class="page-link" to="/order-1">1</router-link></li>
                <li class="page-item"><router-link class="page-link" to="/order-2">2</router-link></li>
                <li class="page-item disabled"><router-link class="page-link" to="/order-3">3</router-link></li>
                <li class="page-item"><router-link class="page-link" to="/order-1">Next</router-link></li>
              </ul>
            </nav>
          </div>
          <div class="col">
          </div>
        </div>
      </div>
    <router-link to="order-table-2">
      Table 2
      <div class="progress">
        <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 60%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Commande prise</div>
      </div>
    </router-link>
    <router-link to="order-table-14">
      Table 14
      <div class="progress">
        <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Commande prise</div>
      </div>
    </router-link>

    </div>
  </div>
</template>
