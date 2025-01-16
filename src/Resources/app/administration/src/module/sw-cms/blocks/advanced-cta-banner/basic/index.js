import "./component";
import "./preview";

Shopware.Service("cmsService").registerCmsBlock({
  name: "advanced-cta-banner-basic",
  label: "sw-cms.blocks.general.ctaBannerbasic.label",
  category: "advanced-cta-banner",
  component: "sw-cms-block-advanced-cta-banner-basic",
  previewComponent: "sw-cms-preview-advanced-cta-banner-basic",
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
            value: "cta",
          },
          height: {
            source: "static",
            value: "250px",
          },
          mediaActive: {
            source: "static",
            value: true,
          },
          videoActive: {
            source: "static",
            value: false,
          },
        },
      },
    },
  },
});
