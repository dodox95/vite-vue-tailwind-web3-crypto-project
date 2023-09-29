<template>
<!-- component -->
<div class="antialiased w-full h-full bg-black text-gray-400 font-inter p-10">
    <div class="container px-4 mx-auto">
      <div>
        <div id="title" class="text-center my-10">
          <h1 class="font-bold text-4xl text-white">What you want to do?</h1>
          <p class="text-light text-gray-500 text-xl">
            Our offer
          </p>
        </div>
        <div
          class="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 pt-10"
        >
          <div
            id="plan"
            class="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
          >
            <div id="title" class="w-full py-5 border-b border-gray-800">
              <h2 class="font-bold text-3xl text-white">Metaverse</h2>
              <h3 class="font-normal text-indigo-500 text-xl mt-2">
                Find the job
              </h3>
            </div>
            <div id="content" class="">
              <div id="icon" class="my-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 mx-auto fill-stroke text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p class="text-gray-500 text-sm pt-2">
                  Perfect for people who looking for a job.
                </p>
              </div>
              <div id="contain" class="leading-8 mb-10 text-lg font-light">
                <ul>
                  <li>A work center in the Metaverse</li>
                  <li>1000 employers</li>
                  <li>Many jobs for IT workers</li>
                  <li>Meet people from IT sector</li>
                </ul>
                <div id="choose" class="w-full mt-10 px-6">
                  <a
                    href="#"
                    class="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white"
                    >Choose</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            id="plan"
            class="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
          >
            <div id="title" class="w-full py-5 border-b border-gray-800">
              <h2 class="font-bold text-3xl text-white">Staking</h2>
              <h3 class="font-normal text-indigo-500 text-xl mt-2">
                7<sup>%</sup>/month
              </h3>
            </div>
            <div id="content" class="">
              <div id="icon" class="my-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 mx-auto fill-stroke text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                <p class="text-gray-500 text-sm pt-2">
                  Perfect for people who love to earn from stake.
                </p>
              </div>
              <div id="contain" class="leading-8 mb-10 text-lg font-light">
                <ul>
                  <li>7% profit from staking</li>
                  <li>stake and earn</li>
                  <li>security stake platform</li>
                  <li>stake and train an AI model</li>
                </ul>
                <div id="choose" class="w-full mt-10 px-6">
                  <a
                    href="#"
                    class="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white"
                    >Choose</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: 'BelowAboveFooter',
    // any component logic or properties would go here
  }
  </script>
  
  <style scoped>
    /* If you have any component-specific styles, they would go here */
  </style>
  