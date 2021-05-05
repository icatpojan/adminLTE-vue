<template>
<div class="modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-">Modal Gudang</h4>
                <button type="button" class="btn btn-sm" v-on:click="closeModal">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form @submit.prevent="GudangStore">
                    <div class="row mb-2">
                        <div class="col">
                            <input type="text" class="form-control" v-model="gudang.nama_gudang" placeholder="Masukkan nama gudang">
                            <span v-if="errors.nama_gudang" style="color: red; float: left">{{errors.nama_gudang[0]}}</span>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col">
                            <input type="text" class="form-control" v-model="gudang.alamat" placeholder="Masukkan alamat">
                            <span v-if="errors.alamat" style="color: red; float: left">{{errors.alamat[0]}}</span>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col">
                            <input type="text" class="form-control" v-model="gudang.no_hp" placeholder="Masukkan nomer hp">
                            <span v-if="errors.no_hp" style="color: red; float: left">{{errors.no_hp[0]}}</span>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col">
                            <input type="text" class="form-control" v-model="gudang.email" placeholder="Masukkan email">
                            <span v-if="errors.email" style="color: red; float: left">{{errors.email[0]}}</span>
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
            gudang: {},
            errors: [],

        };
    },
    methods: {
        closeModal() {
            this.$emit("close-modal");
        },
        GudangStore() {
            axios.post("http://localhost/gudang", this.gudang)
                .then(response => {
                    this.$router.go('/gudang');
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
