<template>
<div class="modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-">Modal TIPE</h4>
                <button type="button" class="btn btn-sm" v-on:click="closeModal">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form @submit.prevent="TipeStore">
                    <div class="row mb-2">
                        <div class="col">
                            <input type="text" class="form-control" v-model="tipe.produk_tipe" placeholder="Masukkan nama Tipe">
                            <span v-if="errors.produk_tipe" style="color: red; float: left">{{errors.produk_tipe[0]}}</span>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col">
                            <select v-model="tipe.kategori_id" class="form-control">
                                <!-- <option disabled value="">Please select one</option> -->
                                <option  v-for="kategori in kategoris" :key="kategori.id" v-bind:value="kategori.id">
                                    {{ kategori.produk_kategori }}
                                    </option>
                            </select>
                            <!-- <input type="number" class="form-control" v-model="tipe.kategori_id" placeholder="Masukkan kategori">
                            <span v-if="errors.kategori_id" style="color: red; float: left">{{errors.kategori_id[0]}}</span> -->
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
            kategoris: [],
            tipe: {},
            errors: [],
        };
    },
    created() {
        axios.get('http://localhost/kategori').then(response => {
            this.kategoris = response.data.data;
        });
    },
    methods: {
        closeModal() {
            this.$emit("close-modal");
        },
        TipeStore() {
            axios.post("http://localhost/tipe", this.tipe)
                .then(response => {
                    this.$router.go('/tipe');
                    console.log(response.data.data);
                })
                .catch(error => {
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
