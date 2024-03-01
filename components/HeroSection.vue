<template>
  <div class="container-fluid flex flex-col mx-auto w-full h-screen p-4">
    <!-- Container flessibile per gli elementi -->
    <div class="flex flex-col flex-grow">
      <!-- Prima riga -->
      <div class="flex flex-grow">
        <!-- Elemento a sinistra -->
        <div class="w-1/2">
          <div class="text-black">Ultime notizie</div>
        </div>
        <!-- Elemento a destra -->
        <div class="w-1/2">
          <div class="text-black">Lista attività</div>
        </div>
      </div>
      <!-- NuxtPage riempirà lo spazio rimanente -->
      <NuxtPage class="flex-grow" />
    </div>
  </div>
</template>
