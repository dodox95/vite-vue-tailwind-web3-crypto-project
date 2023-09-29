<template>
    <div class="sticky-navbar bg-gray-900">
        <nav class="flex px-4 border-b md:shadow-lg items-center relative">
            <a href="/" class="text-white logo-container">
                <div class="text-lg font-bold md:py-0 py-4 d-flex">
                    <img src="/ai.png" alt="Logo" class="logo-img">
                    <span class="brand-name">VITE AI</span>
                </div>
            </a>

            <ul v-if="isMenuOpen || screenIsLarge" :class="{ 'bg-gray-900': isMenuOpen }" class="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
                <li>
                    <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-900 text-white">
                        <span>Tokenomy</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-900 text-white">
                        <span>Roadmap</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-900 text-white">
                        <span>About us</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-900 text-white">
                        <span>Buy Token</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-900 text-white">
                        <span>Stake</span>
                    </a>
                </li>
                <li class="relative parent">
                    <a href="#" class="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-900 space-x-2 text-white">
                        <span>Documents</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current pt-1" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                    </a>
                    <ul class="child transition duration-300 md:absolute top-full right-0 md:w-48 gray-900 md:shadow-lg md:rounded-b">
                        <li>
                            <a href="#" class="flex px-4 py-3 hover:gray-900 text-white">
                                Whitepaper
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex px-4 py-3 hover:gray-900 text-white">
                                Lightpaper
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <WalletModal class="flex md:inline-flex p-3 items-center hover:gray-900 text-white" />
                </li>
            </ul>

            <div @click="toggleMenu" class="ml-auto md:hidden text-gray-500 cursor-pointer">
                <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
            </div>
        </nav>
    </div>
</template>

  
<script>
import WalletModal from './WalletModal.vue'

export default {
    name: 'Navbar',
    data() {
        return {
            isMenuOpen: false,       // state of the mobile menu (open/close)
            screenIsLarge: false    // checks if the screen size is above the breakpoint (md)
        }
    },
    mounted() {
        this.checkScreenSize();
        window.addEventListener('resize', this.checkScreenSize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.checkScreenSize);
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        checkScreenSize() {
            this.screenIsLarge = window.innerWidth >= 768;  // checks against tailwind's md breakpoint
        }
    },
    components: {
        WalletModal
    }
}
</script>

<style scoped>
@media only screen and (min-width: 768px) {
    .parent:hover .child {
        opacity: 1;
        height: auto;
        overflow: visible;
        transform: translateY(0);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15); /* shadow for depth */
    }
    .child {
        opacity: 0;
        height: 0;
        overflow: hidden;
        transform: translateY(-10%);
        transition: all 0.3s ease; /* smooth transition */
        border-radius: 5px; /* rounded corners */
    }
}

.sticky-navbar {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: all 0.3s ease;
}

.d-flex {
    display: flex;
    align-items: center; 
}

.logo-img {
    max-width: 100%;
    height: 60px;
    margin-right: 15px; 
}

.brand-name {
    font-family: 'Roboto', sans-serif;
    font-weight: 700; 
    font-size: 1.5em;
    letter-spacing: 1px; 
}

/* Additional stylings for a modern look */
ul {
    border-radius: 5px; /* rounded corners */
}

a {
    transition: all 0.2s ease; /* smooth transition */
    border-radius: 3px; /* rounded corners */
}

li a:hover {
    transform: translateY(-3px); /* subtle move up on hover for depth */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* shadow for depth */
}

/* icon styling */
svg {
    vertical-align: middle; /* align with text */
    transition: all 0.2s ease; /* smooth transition */
}

/* Adjustments for mobile */
@media only screen and (max-width: 768px) {
    ul {
        padding: 15px; /* padding for better spacing */
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15); /* shadow for depth */
    }

    li {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* subtle dividers between items */
    }

    li:last-child {
        border-bottom: none;
    }
}
@media only screen and (min-width: 768px) {
    .parent:hover .child {
        opacity: 1;
        height: auto;
        overflow: visible;
        transform: translateY(0);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15); /* shadow for depth */
    }
    .child {
        opacity: 0;
        height: 0;
        overflow: hidden;
        transform: translateY(-10%);
        transition: all 0.3s ease; /* smooth transition */
        border-radius: 5px; /* rounded corners */
    }
}

.sticky-navbar {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: all 0.3s ease;
}

.d-flex {
    display: flex;
    align-items: center; 
}

.logo-img {
    max-width: 100%;
    height: 60px;
    margin-right: 15px; 
}

.brand-name {
    font-family: 'Roboto', sans-serif;
    font-weight: 700; 
    font-size: 1.5em;
    letter-spacing: 1px; 
}

/* Additional stylings for a modern look */
ul {
    border-radius: 5px; /* rounded corners */
}

a {
    transition: all 0.2s ease; /* smooth transition */
    border-radius: 3px; /* rounded corners */
}

li a:hover {
    transform: translateY(-3px); /* subtle move up on hover for depth */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* shadow for depth */
}

/* icon styling */
svg {
    vertical-align: middle; /* align with text */
    transition: all 0.2s ease; /* smooth transition */
}

/* Adjustments for mobile */
@media only screen and (max-width: 768px) {
    ul {
        padding: 15px; /* padding for better spacing */
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15); /* shadow for depth */
    }

    li {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* subtle dividers between items */
    }

    li:last-child {
        border-bottom: none;
    }
}

</style>
