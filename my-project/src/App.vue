<template>
  <div>
    <Navbar /> <!-- READY / NEED TO CONNECT ONLY REDIRECTS. -->
    <Hero /> <!-- complited just connect only redirects. -->
    <Banner /> <!-- ready / connect whitepaper button -->
    <CenterCard /> <!-- COMPLeted.-->
    <BelowCenterCard /> <!-- COMPLeted.-->
    <AboveFooter /> <!-- COMPLeted.-->
    <FooterOne /> <!-- COMPLeted.-->
    <BelowAboveFooter /> <!-- COMPLeted.-->

    <Tokenomy /> <!-- COMPLeted.-->


    <Cards /> <!-- COMPLeted.-->


    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import WalletModal from './components/WalletModal.vue'
import Hero from './components/Hero.vue' 
import CenterCard from './components/CenterCard.vue'
import BelowCenterCard from './components/BelowCenterCard.vue'
import AboveFooter from './components/AboveFooter.vue'
import BelowAboveFooter from './components/BelowAboveFooter.vue'
import FooterOne from './components/FooterOne.vue'
import Cards from './components/Cards.vue'
import Banner from './components/Banner.vue'
import Tokenomy from './components/Tokenomy.vue' 

const isModalOpen = ref(false)
const connectedWallet = ref(null)

function openModal() {
  isModalOpen.value = true
}

function handleWalletConnection(walletName) {
  connectedWallet.value = walletName
  isModalOpen.value = false
}
</script>

<style scoped>

</style>
