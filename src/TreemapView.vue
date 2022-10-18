<script setup>
/**
 * DEPENDENCIES
 * 
 */
import { ref, computed } from "vue";
import {treemap, hierarchy} from "d3-hierarchy";

/**
 * PROPERTIES
 * 
 */
const props = defineProps([ "width", "height", "background", "data", "margin", "color"]);
const chartName = "simplestack";
/**
 * CONFIG
 * 
 */

// DEFAULT VALUES
//
const defaultMargin = ref({top : 10, right : 10, bottom : 50, left : 50});
const defaultHeight = ref(400);
const defaultWidth  = ref(400);
const defaultColor      = ref('black');
const defaultBackground = ref("white");
// PROPERTIES
//
const width      = computed( () => props.width || defaultWidth.value)
const height     = computed( () => props.height || defaultHeight.value)
const background = computed( () => props.background || defaultBackground.value)
const margin     = computed( () => props.margin || defaultMargin.value)
const color      = computed( () => props.color || defaultColor.value)


const nodes = hierarchy({
  name: "root",
  children: [
    {name: "child #1"},
    {
      name: "child #2",
      children: [
        {name: "grandchild #1"},
        {name: "grandchild #2"},
        {name: "grandchild #3"}
      ]
    }
  ]
})

</script>
<template>
  <div :class="`gf_${chartName}_container`">
    <h1></h1>
    <pre>
      {{nodes}}
    </pre>
    <svg
      ref="svg"
      xmlns="http://www.w3.org/2000/svg"
      :style="{ background: background }"
      version="1.2"
      baseProfile="tiny"
      width="100%"
      height="100%"
      :viewBox="`0 0 ${width} ${height}`"
      stroke-linecap="round"
      stroke-linejoin="round"
      :class="`gf_${chartName}_svg`">
    </svg>
  </div>
</template>