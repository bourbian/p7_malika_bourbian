<template>
  <main class="main main--connect">
    <form class="w-75 align-items-center form-block d-flex m-auto shadow rounded">
      <div
        class="form-block--left d-flex flex-column justify-content-center block-demi-container p-3 text-right align-self-stretch"
      >
        <img class="logo align-self-end" src="../assets/icon-left-font.png" alt="Logo Groupomania" />
        <p>
          <small>
            Vous n'avez pas encore de compte,
            <router-link class="redirection-singup" to="/Signup">enregistrez-vous</router-link>
          </small>
        </p>
      </div>
      <div class="block-demi-container p-3">
        <div class="form-group">
          <label for="inputUsername">Nom de l'utilisateur</label>
          <input type="text" class="form-control" id="inputUsername" v-model="dataLogin.username" />
        </div>
        <div class="form-group">
          <label for="inputPassword">Mot de passe</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            autocomplete="on"
            v-model="dataLogin.password"
          />
        </div>
        <button @click.prevent="logIn" type="submit" class="btn btn-primary">Connexion</button>
      </div>
    </form>
  </main>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";


export default {
  name: "SignUp",
  data() {
    return {
      dataLogin: {
        username: null,
        password: null
      },
      msg: ""
    };
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {
    logIn() {
      if (
        //TO DO : Vérifier par Regex
        this.dataLogin.username !== null ||
        this.dataLogin.password !== null
      ) {
        axios
          .post("http://localhost:3000/api/user/login", this.dataLogin)
          .then(response => {
            localStorage.setItem('token',response.data.token)
             
            this.$router.push({name:"Wall"});
   
          })
          .catch(error => console.log(error));
      } else {
        console.log("oops !");
      }
    }
  }
};
</script>

<style >
.logo {
  width: 300px;
}
.main {
  text-align: center;
  font-size: 20px;
  
}
</style>
