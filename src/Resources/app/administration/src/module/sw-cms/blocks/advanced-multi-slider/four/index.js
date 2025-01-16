import "./component";
import "./preview";

Shopware.Service("cmsService").registerCmsBlock({
  name: "advanced-multi-slider-four",
  label: "sw-cms.blocks.general.multiSliderFour.label",
  category: "advanced-cta-banner",
  component: "sw-cms-block-advanced-multi-slider-four",
  previewComponent: "sw-cms-preview-advanced-multi-slider-four",
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
    four: {
      type: "advanced-cta-banner",
    },
  },
});
