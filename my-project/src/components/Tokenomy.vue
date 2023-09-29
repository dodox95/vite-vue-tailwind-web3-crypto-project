<template>
  <section class="bg-gray-900 dark:bg-gray-900">
    <div class="container bg-gray-900 mx-auto w-full h-full py-10">
      <h2 class="text-3xl text-white text-center mb-8">VITE AI $VITE Roadmap</h2>
      <div class="relative wrap overflow-hidden p-10 h-full">
        <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style="left: 50%"></div>
        
        <!-- right timeline -->
        <div class="mb-8 flex justify-between items-center w-full right-timeline">
          <div class="order-1 w-5/12"></div>
          <div class="z-20 flex items-center order-1 bg-blue-500 shadow-xl w-8 h-8 rounded-full">
            <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
          </div>
          <div class="order-1 bg-blue-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 class="mb-3 font-bold text-blue-900 text-xl">Initial Idea</h3>
            <p class="text-sm leading-snug tracking-wide text-blue-800">VITE AI inception and drafting of the whitepaper begins.</p>
          </div>
        </div>

        <!-- left timeline -->
        <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div class="order-1 w-5/12"></div>
          <div class="z-20 flex items-center order-1 bg-green-500 shadow-xl w-8 h-8 rounded-full">
            <h1 class="mx-auto text-white font-semibold text-lg">2</h1>
          </div>
          <div class="order-1 bg-green-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 class="mb-3 font-bold text-green-900 text-xl">Prototype Development</h3>
            <p class="text-sm leading-snug tracking-wide text-green-800">Development of the initial VITE AI prototype, alpha testing starts.</p>
          </div>
        </div>
        
        <!-- right timeline -->
        <div class="mb-8 flex justify-between items-center w-full right-timeline">
          <div class="order-1 w-5/12"></div>
          <div class="z-20 flex items-center order-1 bg-purple-500 shadow-xl w-8 h-8 rounded-full">
            <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
          </div>
          <div class="order-1 bg-purple-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 class="mb-3 font-bold text-purple-900 text-xl">Public Beta</h3>
            <p class="text-sm leading-snug tracking-wide text-purple-800">Release of public beta for users to test and provide feedback.</p>
          </div>
        </div>

        <!-- left timeline -->
        <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div class="order-1 w-5/12"></div>
          <div class="z-20 flex items-center order-1 bg-orange-500 shadow-xl w-8 h-8 rounded-full">
            <h1 class="mx-auto text-white font-semibold text-lg">4</h1>
          </div>
          <div class="order-1 bg-orange-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 class="mb-3 font-bold text-orange-900 text-xl">Mainnet Launch</h3>
            <p class="text-sm leading-snug tracking-wide text-orange-800">Launch of the VITE AI mainnet and token distribution.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Tokenomy'
}
</script>

<style scoped>
  .container {
    padding: 3rem 1.5rem;
  }
</style>
