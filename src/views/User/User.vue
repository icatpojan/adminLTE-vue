<template>
<div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header py-3">
                        <div class="d-flex justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">DAFTAR USER</h6>
                            <button type="submit" class="btn-outline-primary btn-sm f-right" @click="openModal">
                                <i class="fas fa-user-plus"></i>
                            </button>
                            <modal v-show="isModalVisible" @close-modal="closeModal" />
                        </div>
                    </div>
                    <div class="card-body">
                        <!-- <router-link :class="['btn btn-md btn-success mb-2']" to="/create">TAMBAH user</router-link> -->
                        <table id="example1" class="table table-bordered table-striped">
                            <thead class="thead-dark">
                                <tr>
                                    <th>NAMA</th>
                                    <th>TIPE</th>
                                    <th>AKSI</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="user in users" :key="user.id">
                                    <td>{{ user.nama_user }}</td>
                                    <td>{{ user.tipe_user.tipe_user }}</td>
                                    <td class="text-center">
                                        <form>
                                            <button @click.prevent="UserDelete(user.id)" class="btn btn-outline-danger btn-sm mt-1 mr-2">
                                                <i class="	fas fa-trash-alt"></i>
                                            </button>
                                            <button type="button" @click.prevent="UserShow(user.id)" class="btn btn-outline-primary btn-sm mt-1" data-toggle="modal" data-target="#exampleModal">
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
                                                            <form @submit.prevent="UserUpdate(userShow.id)">
                                                                <div class="modal-body">
                                                                    <div class="row mb-2">
                                                                        <div class="col">
                                                                            <input type="text" class="form-control" v-model="userShow.nama_user" placeholder="Masukkan nama user" />
                                                                            <select v-model="userShow.tipe_user" class="form-control mt-2">
                                                                                <option v-bind:value="1">admin</option>
                                                                                <option v-bind:value="2">user</option>
                                                                            </select>
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
</template>

<script>
import axios from "axios";
import modal from "./Modal";
import $ from "jquery";

export default {
    components: {
        modal
    },
    data() {
        return {
            isModalVisible: false,
            users: [],
            userShow: [],
        };
    },
    created() {
        axios.get("http://localhost/user").then(response => {
            this.users = response.data.data;
        });
    },
    methods: {
        openModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        UserDelete(id) {
            axios
                .delete(`http://localhost/user/${id}`)
                .then(response => {
                    this.users.splice(this.users.indexOf(id), 1);
                    console.log(response);
                })
                .catch(error => {
                    console.log(error.response);
                });
        },
        UserShow(id) {
            axios
                .get(`http://localhost/user/${id}`)
                .then(response => {
                    this.userShow = response.data.data;
                    console.log(response);
                })
                .catch(error => {
                    console.log(error.response);
                });
        },
        UserUpdate(id) {
            axios
                .post(`http://localhost/user/${id}`, this.userShow)
                .then(response => {
                    axios.get("http://localhost/user").then(response => {
                        this.users = response.data.data;
                    });
                    $("[data-dismiss=modal]").trigger({
                        type: "click"
                    });
                    console.log(response);
                })
                .catch(error => {
                    this.validation = error.response.data.data;
                });
        }
    }
};
</script>
