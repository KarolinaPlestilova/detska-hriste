<template>
  <!-- Easy HTML stránka o projektu, troška povídání pro zaplnění informací -->
  <div>
    <article class="projekt">
      <h1>O projektu</h1>
      <p>S dětmi ven! je webová stránka, která vznikla na konci Digitální akademie: web. Autorkami jsou Radka a Kája, dvě matky, které řeší podobné problémy. Přály jsme si aplikaci, která by nám byla oporou ve vyhledávání venkovních aktivit pro naše ratolesti. Naše mapa je rozdělena na kraje v České republice a přehledným způsobem vám nabídne aktivity, které ve zvoleném regionu můžete podniknout.</p>
    </article>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  font-family: "Rubik", sans-serif;
  margin: 0;
  font-size: 20px;
  line-height: 1.5;
}
.projekt h1 {
  font-weight: 500;
  text-align: center;
  color: #ff790b;
}
p {
  word-break: break-word;
  white-space: normal;
  margin-left: 150px;
  margin-right: 150px;
}
</style>