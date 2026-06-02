<script setup>
const frameworks = [
  { name: 'React',   madeBy: 'Meta',    description: 'UI library; component-based; JSX; unidirectional data flow.' },
  { name: 'Angular', madeBy: 'Google',  description: 'Full MVC framework; TypeScript-first; two-way binding via NgModel.' },
  { name: 'Vue',     madeBy: 'Community', description: 'Progressive framework; gentle learning curve; Options & Composition API.' },
]

for(let fw of frameworks){
    console.log(fw.name)
    console.log(fw.madeBy)
    console.log(fw.description)
}


</script>

<template>
    <section class="frameworks-overview">
        <h2>UI Frameworks at a Glance</h2>
        <div class="framework-grid">
            <div 
                v-for="fw in frameworks"
                class="framework-card"
                :key="fw.name"
                :class="{ highlight : fw.name === 'Vue' }"
            >
                <span class="fw-name"> {{ fw.name }}</span>
                <span class="fw-made">{{ fw.madeBy }}</span>
                <span class="fw-desc">{{ fw.description }}</span>
            </div>
        </div>
    </section>
</template>
