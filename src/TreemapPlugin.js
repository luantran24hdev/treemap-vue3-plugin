import Treemap from "./TreemapView.vue"
export default {
  install : (app, options) => {
    app.component("gf-treemap", Treemap);
  }
}