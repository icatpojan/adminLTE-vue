<template>
<div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
               <h1>BARANG</h1>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            users: []
        };
    },
    created() {
        axios.get('http://localhost/users').then(response => {
            this.users = response.data.data;
        });
    }
};
</script>
