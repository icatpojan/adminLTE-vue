<template>
<div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header py-3">
                        <div class="d-flex justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">DAFTAR STATUS</h6>
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
                                        <th>NAMA STATUS</th>
                                        <th>AKSI</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="status in statuss" :key="status.id">
                                        <td>{{ status.status_produk }}</td>
                                        <td class="text-center">
                                            <form>
                                                <button @click.prevent="StatusDelete(status.id)" class="btn btn-outline-danger btn-sm mt-1 mr-2">
                                                    <i class="	fas fa-trash-alt"></i>
                                                </button>
                                                <button type="button" @click.prevent="StatusShow(status.id)" class="btn btn-outline-primary btn-sm mt-1" data-toggle="modal" data-target="#exampleModal">
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
                                                            <div class="modal-body">
                                                                <form @submit.prevent="StatusUpdate(statusShow.id)">
                                                                    <div class="modal-body">
                                                                        <div class="row mb-2">
                                                                            <div class="col">
                                                                                <input type="text" class="form-control" v-model="statusShow.status_produk" placeholder="Masukkan nama Status" />
                                                                                <span v-if="errors.status_produk" style="color: red; float: left">{{errors.status_produk[0]}}</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                                                            Close
                                                                        </button>
                                                                        <button type="submit" class="btn btn-md btn-success mr-2">
                                                                            SIMPAN
                                                                        </button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
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
import modal from "./Modal/Status";
import $ from "jquery";

export default {
    components: {
        modal
    },
    data() {
        return {
            isModalVisible: false,
            statuss: [],
            errors: [],
            statusShow: []
        };
    },
    created() {
        axios.get("http://localhost/status").then(response => {
            this.statuss = response.data.data;
        });
    },
    methods: {
        openModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        StatusDelete(id) {
            axios
                .delete(`http://localhost/status/${id}`)
                .then(response => {
                    this.statuss.splice(this.statuss.indexOf(id), 1);
                    console.log(response);
                })
                .catch(error => {
                    console.log(error.response);
                });
        },
        StatusShow(id) {
            axios.get(`http://localhost/status/${id}`)
                .then(response => {
                    this.statusShow = response.data.data;
                    console.log(response);
                })
                .catch(error => {
                    console.log(error.response);
                });
        },
        StatusUpdate(id) {
            axios
                .post(`http://localhost/status/${id}`, this.statusShow)
                .then(response => {
                    axios.get("http://localhost/status").then(response => {
                        this.statuss = response.data.data;
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
