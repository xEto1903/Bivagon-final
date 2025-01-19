import { initializeApp } from "firebase/app";
 
export default defineNuxtPlugin(() => {
  // Firebase tarafından verilen kodu buraya ekleyin
  const firebaseConfig = {
    apiKey: "AIzaSyCpo8kw8Q0xzqMLk7wvCIa-eCHIFhHGick",
    authDomain: "bivagon-final-668ce.firebaseapp.com",
    projectId: "bivagon-final-668ce",
    storageBucket: "bivagon-final-668ce.firebasestorage.app",
    messagingSenderId: "811535399173",
    appId: "1:811535399173:web:98a27ec89340f94eeb5f6c"
  };
 
  // Firebase uygulamasını başlat
  const firebaseApp = initializeApp(firebaseConfig);
 
  // Firebase'i Nuxt içine sağlayın
  return {
    provide: {
      firebase: firebaseApp,
    },
  };
});