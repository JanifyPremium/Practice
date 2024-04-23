<template>
  <div>
    <h1>Provisions Rechner</h1>
<table class="provision">
    <ul><input type="number" class="Umsatz" id="Umsatz" >Umsatz</ul>
    <ul><input type="number" class="Fixum" id="Fixum">Fixum</ul>
    <ul><button type="submit" class="submitbutton" id="buttonsubmit">Submit</button></ul>
    <ul><output type="number" class="outputProvision" id="outputProvision">zustehende Provision: </output> </ul>
    <ul><output type="number" class="outputEndgehalt" id="outputEndgehalt">Endgehalt: </output> </ul>
</table>
  </div>
</template>


<style scoped>
h1{
  display: flexbox;
  justify-content: center;
  align-items: center;
}
 .provision{
  display: flexbox;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}

.submitbutton{
  width: fit-content;
}
</style>
