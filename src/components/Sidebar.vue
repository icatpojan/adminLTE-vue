<template>
<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <img src="img/logo.png" alt="Kapal Logo" class="brand-link" style="background-color: white;">

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-5 pb-2 mb-3 d-flex">
            <div class="image">
                <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
            </div>
            <div class="info">
                <a href="#" class="d-block">ADMIN</a>
            </div>
        </div>

        <!-- SidebarSearch Form -->
        <!-- Sidebar Menu -->
        <nav class="mt-1">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <!-- Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library -->
                <li class="nav-item">
                    <router-link to="/" class="nav-link">
                        <i class="nav-icon fa fa-cubes"></i>
                        <p>
                            Home
                        </p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/user" class="nav-link">
                        <i class="nav-icon fa fa-users"></i>
                        <p>
                            User
                        </p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/gudang" class="nav-link">
                        <i class="nav-icon fas fa-dragon"></i>
                        <p>
                            Gudang
                        </p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fa fa-industry"></i>
                        <p>
                            Produk
                            <i class="fas fa-angle-left right"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <router-link to="/barang" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Barang</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/kategori" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Kategori</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/tipe" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Tipe</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/status" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Status</p>
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>
</template>

<script>
export default {
    name: 'Sidebar',
}
</script>
