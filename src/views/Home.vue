<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
/* 
Jan Ken Pon Erreur,
Mister-e-vent outils (debug vs code, cypress, ng prime + tailwind, formly)
9h-10h: Jan Ken Pon
10h-11h: Debug Vs code
*/
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Hello" />
  </div>
</template>
