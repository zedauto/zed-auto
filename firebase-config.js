/*
  ==========================================================
  ملف إعدادات Firebase — ZED AUTO
  ==========================================================
  هذا الملف يربط الموقع ولوحة التحكم بقاعدة بيانات مجانية على Firebase
  لتخزين المنتجات والصور بشكل حقيقي (وليس فقط على متصفحك).

  خطوات الحصول على القيم دي: راجع ملف "دليل النشر والتشغيل.md"
  المرفق معاك — فيه كل الخطوات بالصور والتفصيل.

  بعد ما تجيب القيم من Firebase Console، امسح الأمثلة اللي تحت
  وحطّ بياناتك الحقيقية بدلها، ثم اترك الملف بنفس الاسم "firebase-config.js"
  في نفس مجلد الموقع.
*/

const firebaseConfig = {
  apiKey: "AIzaSyAGGxHoHB-yjVt8vcBaDWRSkvDJGebKEbk",
  authDomain: "zed-auto.firebaseapp.com",
  projectId: "zed-auto",
  storageBucket: "zed-auto.firebasestorage.app",
  messagingSenderId: "322014719925",
  appId: "1:322014719925:web:f3f0dc5ce94ea1eb46f3fc"
};

// تهيئة Firebase وجعله متاحًا لباقي ملفات الموقع (index.html و admin.html)
try {
  firebase.initializeApp(firebaseConfig);
  window.firebaseDB = firebase.firestore();
  if (firebase.auth) {
    window.firebaseAuth = firebase.auth();
  }
  console.log('✅ تم الاتصال بقاعدة بيانات ZED AUTO بنجاح');
} catch (e) {
  console.warn('⚠️ لم يتم إعداد Firebase بعد — الموقع يعمل حالياً بالمنتجات الافتراضية فقط. راجع دليل النشر.', e);
}
