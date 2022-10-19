<script setup>
/**
 * DEPENDENCIES
 * 
 */
import { ref, computed } from "vue";
import { hierarchy, treemap} from "d3-hierarchy";

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


const nodes  = computed( () => !props.data ? null : hierarchy({ name: "root", children: props.data}))
const tree   = computed( () => treemap().size([width.value, height.value]).padding(10).paddingOuter(0) )
const items  = computed( () => !nodes.value ? null : tree.value(nodes.value.sum( d => d.value) ).descendants() )


</script>
<template>
  <div :class="`gf_${chartName}_container`">
    <h1></h1>
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

      <g v-if="items">
        <rect v-for="(item, i) of items" 
          :x="item.x0"
          :y="item.y0"
          :fill="item.data.color || background" 
          :width="item.x1 - item.x0" 
          :height="item.y1 - item.y0"
        :key="`rect-${i}`">
        </rect>
      </g>
    </svg>
  </div>
</template>