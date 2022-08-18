<template>
<section class="mb-5">
    <h3 class="text-sky-800 font-bold text-2xl tracking-wider" style="margin-left: 10px;">Work Experience</h3>
    <ul class="timeline">
        <li v-for="(exp,index) in experinceInfo" :key="index" class="timeline-item rounded ml-3 p-4 shadow">
            <div class="timeline-arrow"></div>
            <p class="font-mono">{{exp.position}}</p>
            <p class="font-bold">{{exp.workAt}}</p>
            <span class="italic">{{exp.duration}}</span>
            <p v-if="exp.description != null && exp.description != undefined" class="mt-2" v-html="exp.description"></p>
            <div v-if="exp.techs.length > 0">
                <span class="font-bold">Technologies used:</span>
                <ul class="tech-list pt-2">
                    <li class="tech-list-item" v-for="(tech,index) in exp.techs" :key="index">
                        <span class="badge bg-secondary badge-pill p-2">{{tech}}</span>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</section>
</template>

<script>
export default {
    props: {
        experinceInfo: {
            type: Object,
        }
    }
}
</script>

<style>
</style>