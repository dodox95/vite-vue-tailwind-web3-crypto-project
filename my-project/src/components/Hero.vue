<template>
  <section class="text-white hero-banner">
    <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
      <div class="mx-auto max-w-3xl text-center">
        <h1 class="text-4xl font-extrabold sm:text-6xl">
         Change the world
          <span class="sm:block"> With AI now! </span>
        </h1>

        <p class="mx-auto mt-4 max-w-xl text-xl">
          Stake your coins and learn the AI models with other users. Join to the AI revolutionary. Don't be late this time.
        </p>

        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <a class="btn-primary" href="/get-started">
            Stake 
          </a>
          <a class="btn-secondary" href="/about">
            Buy Token
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-banner {
    background-image: url('/banner2.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
}

.btn-primary {
    display: block;
    padding: 15px 20px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent black background */
    color: white;
    font-size: 1.1rem; /* Increase font size */
    font-weight: bold;
    text-align: center;
    transition: background-color 0.3s ease;
}

.btn-primary:hover {
    background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
    color: black;
}

.btn-secondary {
    display: block;
    padding: 15px 20px;
    border-radius: 5px;
    border: 2px solid rgba(0, 0, 0, 0.7); /* Semi-transparent black border */
    color: rgba(255, 254, 254, 0.901); /* Semi-transparent black text */
    font-size: 1.1rem; /* Increase font size */
    font-weight: bold;
    text-align: center;
    transition: background-color 0.3s ease;
}

.btn-secondary:hover {
    background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
    color: rgb(20, 19, 19);
}
</style>
