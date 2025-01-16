import "./component";
import "./preview";

Shopware.Service("cmsService").registerCmsBlock({
  name: "advanced-multi-slider-three",
  label: "sw-cms.blocks.general.multiSliderThree.label",
  category: "advanced-cta-banner",
  component: "sw-cms-block-advanced-multi-slider-three",
  previewComponent: "sw-cms-preview-advanced-multi-slider-three",
  defaultConfig: {
    marginBottom: "0",
    marginTop: "0",
    marginLeft: "0",
    marginRight: "0",
    sizingMode: "boxed",
  },
  slots: {
    one: {
      type: "advanced-cta-banner",
    },
    two: {
      type: "advanced-cta-banner",
    },
    three: {
      type: "advanced-cta-banner",
    },
  },
});
