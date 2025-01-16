import template from "./index.html.twig";
import "./index.scss";

const { Component } = Shopware;

Component.register("sw-cms-preview-advanced-multi-slider-five", {
  template,
  computed: {
    assetFilter() {
      return Shopware.Filter.getByName("asset");
    },
  },
});
