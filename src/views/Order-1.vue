<template>
  <div class="order-1">

    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col">
          </div>
          <div class="pagination-nav">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item"><router-link class="page-link" to="/order-3">Previous</router-link></li>
                <li class="page-item disabled"><router-link class="page-link" to="/order-1">1</router-link></li>
                <li class="page-item"><router-link class="page-link" to="/order-2">2</router-link></li>
                <li class="page-item"><router-link class="page-link" to="/order-3">3</router-link></li>
                <li class="page-item"><router-link class="page-link" to="/order-2">Next</router-link></li>
              </ul>
            </nav>
          </div>
          <div class="col">
          </div>
        </div>
      </div>
      <router-link to="order">
        Table 3
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 40%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">Plat Indisponible</div>
        </div>
      </router-link>

      <router-link to="order">
        Table 6
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width:30%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Plat Indisponible</div>
        </div>
      </router-link>
      <router-link to="order">
        Table 1
        <div class="progress">
          <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">Table installée</div>
        </div>
      </router-link>
      <router-link to="order">
        Table 5
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-striped" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Table à servir</div>
        </div>
      </router-link>
      <router-link to="order">
        Table 18
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-striped" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Addition a régler</div>
        </div>
      </router-link>
      <router-link to="order">
        Table 17
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-striped" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Table à servir</div>
        </div>
      </router-link>
      <router-link to="order">
        Table 13
        <div class="progress">
          <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">Table installée</div>
        </div>
      </router-link>
      <router-link to="order">
        Table 15
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-striped" role="progressbar" style="width: 90%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">Addition à régler</div>
        </div>
      </router-link>

    </div>

  </div>
</template>
