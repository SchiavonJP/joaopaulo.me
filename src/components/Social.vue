<template>
<div class="w-5/12 pr-20 sm:pr-28">
    <div class="flex flex-wrap justify-end gap-2">
    <!-- svg source https://simpleicons.org/ -->
        <button
            class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
            v-for="(social,index) in socialInfo" :key="index"
        >
            <a 
            :href="social.link"
            target="_blank"
            >
                <svg class="w-4 h-4 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:h-10 xl:w-10 fill-current" 
                role="img" 
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <title>{{social.name}}</title>
                <path :d="social.svgPath"/>
                </svg>
            </a>
        </button>
    </div>
</div>
</template>

<script>
export default {
    props: {
        socialInfo: {
            type: Object
        },
    }
}
</script>

<style>

</style>
