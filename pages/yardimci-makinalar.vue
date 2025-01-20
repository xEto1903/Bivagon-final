<template>
    <div class="yardimci-makinalar-container">
      <!-- Header -->
      <Header />
  
      <!-- İçerik -->
      <div class="content">
        <aside class="sidebar">
          <Filtreler />
        </aside>
        <main class="main-content">
          <YardimciMakinalar />
        </main>
      </div>
  
      <!-- En Çok Ziyaret Edilenler -->
      <section class="visited-products">
        
        <EnCokZiyaretEdilenler />
      </section>
  
      <!-- Footer -->
      <Footer />
    </div>
  </template>



  
  <script setup>
  import Header from "~/components/Header.vue";
  import Filtreler from "~/components/Filtreler.vue";
  import YardimciMakinalar from "~/components/YardımcıMakinalar.vue";
  import Footer from "~/components/Footer.vue";
  import EnCokZiyaretEdilenler from "~/components/En Çok Ziyaret Edilen Ürünler.vue";
  </script>
  
  <style scoped>
  /* Sayfa düzeni */
  .yardimci-makinalar-container {
    display: flex;
    flex-direction: column;
    min-height: 300vh;
    background-color: #ffffff;
  }
  
/* İçerik düzeni */
.content {
    display: flex;
    flex: 1;
    padding: 20px;
    gap: 20px; /* Filtreler ve ana içerik arasındaki boşluk */
    background-color: #f9f9f9; /* Hafif gri arka plan */
  }
  
  .sidebar {
    flex: 0 0 250px; /* Yan menü genişliği */
  }
  
  .main-content {
    flex: 1;
  }
  
  /* En Çok Ziyaret Edilenler Bölümü */
  .visited-products {
    margin-top: 40px;
    padding: 20px;
    background-color: #ffffff;
    text-align: center;
  }
  
  .visited-products h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .visited-products > div {
    display: flex;
    justify-content: center;
  }
  </style>
  