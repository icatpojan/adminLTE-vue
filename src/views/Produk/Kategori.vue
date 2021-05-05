<template>
<div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header py-3">
                        <div class="d-flex justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">DAFTAR KATEGORI</h6>
                            <button type="submit" class="btn-outline-primary btn-sm f-right" @click="openModal">
                                <i class="fas fa-user-plus"></i>
                            </button>
                            <modal v-show="isModalVisible" @close-modal="closeModal" />
                        </div>
                    </div>
                    <div class="card-body">

                        <!-- <router-link :class="['btn btn-md btn-success mb-2']" to="/create">TAMBAH user</router-link> -->
                        <hr />
                        <div class="table-responsive mt-2">
                            <table id="example1" class="table table-bordered table-striped">
                                <thead class="thead-dark">
                                    <tr>
                                        <th>NAMA KATEGORI</th>
                                        <th>AKSI</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="kategori in kategoris" :key="kategori.id">
                                        <td>{{ kategori.produk_kategori }}</td>
                                        <td class="text-center">
                                            <button @click.prevent="KategoriDelete(kategori.id)" class="btn btn-outline-danger btn-sm mt-1 mr-2">
                                                <i class="	fas fa-trash-alt"></i>
                                            </button>
                                            <button type="button" @click.prevent="KategoriShow(kategori.id)" class="btn btn-outline-primary btn-sm mt-1" data-toggle="modal" data-target="#exampleModal">
                                                <i class="	fas fa-tools"></i>
                                            </button>
                                            <!-- Modal -->
                                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="exampleModalLabel">
                                                                Modal title
                                                            </h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <form @submit.prevent="KategoriUpdate(kategoriShow.id)">
                                                            <div class="modal-body">
                                                                <div class="row mb-2">
                                                                    <div class="col">
                                                                        <input type="text" class="form-control" v-model="kategoriShow.produk_kategori" placeholder="Masukkan nama kategori">
                                                                        <span v-if="errors.produk_kategori" style="color: red; float: left">{{errors.produk_kategori[0]}}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                                                    Close
                                                                </button>
                                                                <!-- <button type="button" class="btn btn-primary">
                                                                    Save changes
                                                                </button> -->
                                                                <button type="submit" class="btn btn-md btn-success mr-2">SIMPAN</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
import modal from './Modal/Kategori';
import $ from 'jquery'

export default {
    components: {
        modal,
    },
    data() {
        return {
            errors: [],
            isModalVisible: false,
            kategoris: [],
            kategoriShow: []
        };
    },
    created() {
        axios.get('http://localhost/kategori').then(response => {
            this.kategoris = response.data.data;
        });
    },
    methods: {
        openModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        KategoriDelete(id) {
            axios.delete(`http://localhost/kategori/${id}`)
                .then(response => {
                    this.kategoris.splice(this.kategoris.indexOf(id), 1);
                    console.log(response);
                }).catch(error => {
                    console.log(error.response);
                });
        },
        KategoriShow(id) {
            axios.get(`http://localhost/kategori/${id}`)
                .then(response => {
                    this.kategoriShow = response.data.data;
                    console.log(response);
                }).catch(error => {
                    console.log(error.response);
                });
        },
        KategoriUpdate(id) {
            axios.post(`http://localhost/kategori/${id}`, this.kategoriShow)
                .then((response) => {
                    axios.get('http://localhost/kategori').then(response => {
                        this.kategoris = response.data.data;
                    });
                    $("[data-dismiss=modal]").trigger({
                        type: "click"
                    });
                    console.log(response);
                }).catch(error => {
                    console.log(error.response.data);
                    this.errors = error.response.data;
                });
        }
    }
};
</script>
