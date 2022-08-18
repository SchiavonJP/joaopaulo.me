<template>
<section class="mb-5">
    <h3 class="text-sky-800 font-bold text-2xl tracking-wider m-8" style="margin-left: 10px;">Skills</h3>
    <b class="text-black-800 font-bold text-md tracking-wider" style="margin-left: 10px;">Technical</b>
    <ul class="grid grid-flow-row-dense grid-cols-4 grid-rows-3  m-4">
        <li class="col-span-3 2xl:col-span-1" v-for="(skill,index) in skillInfo" :key="index">
            <div>
                <ve-progress :size="100" :progress="skill.rate">
                    <span slot="legend">{{skill.name}}</span>
                    <p slot="legend-caption">{{skill.rate}}%</p>
                </ve-progress>
            </div>
        </li>
        <div class="col-span-3">
            <b class="text-black-800 font-bold text-md tracking-wider">Others</b>
            <ul>
                <li class="tech-list-item badge bg-secondary badge-pill p-2" v-for="(skill,index) in otherSkillInfo" :key="index">
                    {{skill}}
                    <!-- <span class="badge bg-secondary badge-pill p-2 mb-2">{{skill.name}}</span> -->
                </li>
            </ul>
        </div>
        <div class="col-span-3">
            <b class="text-black-800 font-bold text-md tracking-wider">Professional</b>
            <ul>
                <li class="tech-list-item badge bg-secondary badge-pill p-2" v-for="(skill,index) in proSkillInfo" :key="index">
                    {{skill}}
                </li>
            </ul>
        </div>
    </ul>
</section>
</template>

<script>
export default {
    props: {
        skillInfo: {
            type: Object
        },
        otherSkillInfo: {
            type: Object
        },
        proSkillInfo: {
            type: Object
        }
    }
}
</script>

<style>

</style>
