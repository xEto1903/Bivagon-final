<template>
  <div class="homepage-container">
    <!-- Header -->
    <Header />

    <!-- Fırsat Ürünleri -->
    <div class="content">
      <FırsatÜrünleri />
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import FırsatÜrünleri from "~/components/FırsatÜrünleri.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped>
/* Sayfa genel düzeni */
.homepage-container {
  display: flex;
  flex-direction: column;
  min-height: 200vh; /* Sayfanın tüm ekranı kaplamasını sağlar */
  background-color: #ffffff; /* Beyaz arka plan */
}

/* Fırsat Ürünleri içeriği */
.content {
  display: flex;
  justify-content: center; /* Ortada hizalama */
  padding: 400px;
  background-color: #f9f9f9; /* Hafif gri arka plan */
}

.content > div {
  max-width: 1200px; /* İçerik genişliği */
  width: 100%;
}
</style>
