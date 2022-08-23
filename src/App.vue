<template>
  <div class="banner-home">
    <!-- NavBar -->
    <nav
      class="container px-6 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <div class="relative w-16 h-16">
          <img
            class="rounded-full border border-gray-100 shadow-sm"
            src="./assets/avatar.png"
            alt="user image"
          />
        </div>
        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex md:hidden">
          <button
            type="button"
            class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col items-end mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <li class="menu-button"><a href="#">Home</a></li>
        <li class="menu-button"><a href="#resume" v-smooth-scroll>Resume</a></li>
        <li class="menu-button">
          <a href="#work" v-smooth-scroll>Works</a>
        </li>
        <li class="menu-button"><a href="#about" v-smooth-scroll>About</a></li>
      </ul>
    </nav>
    <!-- End Navbar -->
    <div class="flex">
    
      <div class="container-fluid flex items-center">
        <div class="w-11/12 space-y-5 md:space-y-10">
          <h3
            class="hello-button text-gray-700 w-fit md:py-3 md:px-5 py-1 px-2 rounded-lg 3xl:text-3xl 2xl:text-xl lg:text-xl md:text-md text-sm font-semibold font-work_sans"
          >
            👋 Hey,
          </h3>
          <h1
            class="3xl:text-9xl 2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-3xl text-2xl font-Eczar font-bold leading-tight text-white-700"
          >
            It's
            <a
              href="https://www.linkedin.com/in/joao-paulo-schiavon"
              target="_blank"
              class="text-orange-500 hover:underline"
            >
              João 'Schiva' </a
            >🦊<br />Developer and Lifelong Learner
          </h1>

          <div class="md:flex gap-1 md:gap-10">
            <button class="text-white bg-gray-800 submit-button hidden md:block">
              <a href="#resume" v-smooth-scroll>
                View My Resume
              </a>
            </button>
            <button
              class="text-white-800 border-4 border-gray-800 submit-button mb-5 md:mb-0"
            >
              <a href="#about" v-smooth-scroll>
                Contact Me
              </a>
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="banner-2 md:flex md:justify-evenly" id="resume">
    <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
      <h4 class="project-title item">Who am I?</h4>
      <p class="font-work_sans">
        {{ data.generalInfo.whoAmI }}
      </p>
      <Education :educationInfo="data.educationInfo" />
      <Skill :skillInfo="data.skillInfo" :otherSkillInfo="data.otherSkillInfo" :proSkillInfo="data.proSkillInfo" />
    </div>
    <div class="flex">
        <Experience :experinceInfo="data.experinceInfo" />
    </div>
  </div>

  <!-- Ideia - Make a dynamic banner with diffents phases -->
  <div class="banner-home flex h-full items-center" id="about">
    <div class="container-fluid  w-7/12 p-12">
      <p class="text-white md:text-6xl text-2xl font-Eczar mb-5 font-bold">
        Wabi-Sabi (侘寂)
      </p>
      <p class="text-white text-xl md:text-2xl  font-Eczar mb-5 font-bold">
        The aesthetic is sometimes described as one of appreciating beauty that is "imperfect, impermanent, and incomplete" in nature.
      </p>
      <a class="underline hello-button text-gray-700 w-fit md:py-3 md:px-5 py-1 px-2 rounded-lg 3xl:text-3xl 2xl:text-xl lg:text-xl md:text-md text-sm font-semibold font-work_sans"
        >📧 hey@joaopaulo.me</a
      >
    </div>
    <Social :socialInfo="data.socialMediaInfo" />
  </div>
</template>
<script>
  import Experience from './components/Experience.vue'
  import Education from './components/Education.vue'
  import Skill from './components/Skill.vue'
  import Social from './components/Social.vue'

  import data from './data/data'
  export default {
    components: {
        Experience,
        Education,
        Skill,
        Social
    },
    data() {
      return {
        data: data,
        showMenu: false,
      }
    },
  }
</script>
