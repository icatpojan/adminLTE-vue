<template>
<div class="modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-">Modal KATEGORI</h4>
                <button type="button" class="btn btn-sm" v-on:click="closeModal">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form @submit.prevent="KetegoriStore">
                    <div class="row mb-2">
                        <div class="col">
                            <input type="text" class="form-control" v-model="kategori.produk_kategori" placeholder="Masukkan nama kategori">
                            <span v-if="errors.produk_kategori" style="color: red; float: left">{{errors.produk_kategori[0]}}</span>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-md btn-success mr-2">SIMPAN</button>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    name: "modal",
    data() {
        return {
            kategori: {},
            errors: [],
        };
    },
    methods: {
        closeModal() {
            this.$emit("close-modal");
        },
        KetegoriStore() {
            axios.post("http://localhost/kategori", this.kategori)
                .then(response => {
                    this.$router.go('/kategori');
                    console.log(response.data.data);
                }).catch(error => {
                    console.log(error.response.data);
                    this.errors = error.response.data;
                });

        }
    }
};
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: block;
    overflow: hidden;
    outline: 0;
    background-color: rgba(0, 0, 0, 0.6);
}
</style>
