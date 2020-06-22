<template>
  <!-- Easy HTML stránka o projektu, troška povídání pro zaplnění informací -->
  <div>
    <article class="projekt">
      <h1>O projektu</h1>
      <p>
        S dětmi ven! je webová stránka, která vznikla na konci Digitální
        akademie: web. Autorkami jsou Radka a Kája, dvě matky, které řeší
        podobné problémy. Přály jsme si aplikaci, která by nám byla oporou ve
        vyhledávání venkovních aktivit pro naše ratolesti. Naše mapa je
        rozdělena na kraje v České republice a přehledným způsobem vám nabídne
        aktivity, které ve zvoleném regionu můžete podniknout.
        Jak to celé funguje? No v reálném světě hodně často hledáme aktivity pro naše malé ratolosti a dochází nápady.
        Chtěly jsme si ale nejen naše oblíbená místa uchovat v nějakém pěkném přehledu a mít je dostupná pro své kamarádky, známé nebo i známé známých. Proto jsme se rozhodly právě pro mapu dětských hřišt a dalších aktivit. Pustupně ji budeme vylepšovat a také ji využívat k prohlubování našich "kódících" znalostí.
      </p>
    </article>
    <img class="obrazek-projekt-1" src="assets/img/Kluk_na_rukou.png" alt="Kreslený kluk na rukou" />
    <img class="obrazek-projekt-2" src="assets/img/Holka_ruzova.png" alt="Kreslená děvečka" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  line-height: 1.5;
}
.projekt h1 {
  font-weight: 500;
  text-align: center;
  color: #ff790b;
  margin-bottom: 30px;
}
p {
  word-break: break-word;
  white-space: normal;
  margin-left: 200px;
  margin-right: 200px;
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 30px;
  position: relative;
}

.obrazek-projekt-1 {
  position: absolute;
  right: 50px;
  bottom: 80px;
  width: 10%;
  max-width: 100%;
  height: auto;
}
.obrazek-projekt-2 {
  position: absolute;
  left: 60px;
  bottom: 10px;
  width: 10%;
  max-width: 100%;
  height: auto;
}
</style>
