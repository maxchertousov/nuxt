<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <nuxt-link
            exact
            no-prefetch
            active-class="active"
            class="nav-link"
            to="/"
          >
            Users
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link active-class="active" class="nav-link" to="/AddUser">
            Add User
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>