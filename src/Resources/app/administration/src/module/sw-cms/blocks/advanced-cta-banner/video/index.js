import "./component";
import "./preview";

Shopware.Service("cmsService").registerCmsBlock({
  name: "advanced-cta-banner-video",
  label: "sw-cms.blocks.general.ctaBannerVideo.label",
  category: "advanced-cta-banner",
  component: "sw-cms-block-advanced-cta-banner-video",
  previewComponent: "sw-cms-preview-advanced-cta-banner-video",
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
      default: {
        config: {
          elementType: {
            source: "static",
            value: "custom",
          },
          height: {
            source: "static",
            value: "500px",
          },
          mediaActive: {
            source: "static",
            value: true,
          },
          videoActive: {
            source: "static",
            value: true,
          },
          boxHorizontalAlign: {
            source: "static",
            value: "flex-start",
          },
        },
      },
    },
  },
});
