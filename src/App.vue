<template>
<div class="wrapper">
    <Topbar/>
    <Sidebar/>
    <!-- Content Wrapper. Contains page content -->

    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">{{ title }}</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">

                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <div id="app">
            <div id="nav">
                  <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link>
            </div>
            <router-view />
        </div>
    </div>
    <!-- /.content-wrapper -->
    <aside class="control-sidebar control-sidebar-dark">
        <!-- Control Sidebar -->
        <!-- Control sidebar content goes here -->
    </aside>
    <!-- /.control-sidebar -->

    <!-- Main Footer -->
    <footer class="main-footer">
        <strong>Copyright &copy; 2014-2020 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
        <div class="float-right d-none d-sm-inline-block">
            <b>Version</b> 3.1.0-rc
        </div>
    </footer>
</div>
<!-- ./wrapper -->
</template>

<script>
import Topbar from '@/components/Topbar.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
   name: 'App',
  components: {
    Topbar,
    Sidebar
  }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
