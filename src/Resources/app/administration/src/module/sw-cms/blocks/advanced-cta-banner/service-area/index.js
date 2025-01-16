import "./component";
import "./preview";

Shopware.Service("cmsService").registerCmsBlock({
  name: "advanced-cta-banner-service-area",
  label: "sw-cms.blocks.general.ctaBannerServiceArea.label",
  category: "advanced-cta-banner",
  component: "sw-cms-block-advanced-cta-banner-service-area",
  previewComponent: "sw-cms-preview-advanced-cta-banner-service-area",
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
            value: "200px",
          },
          iconActive: {
            source: "static",
            value: true,
          },
          btnActive: {
            source: "static",
            value: false,
          },
          mediaActive: {
            source: "static",
            value: false,
          },
        },
      },
    },
    two: {
      type: "advanced-cta-banner",
      default: {
        config: {
          elementType: {
            source: "static",
            value: "cta",
          },
          height: {
            source: "static",
            value: "200px",
          },
          iconActive: {
            source: "static",
            value: true,
          },
          btnActive: {
            source: "static",
            value: false,
          },
          mediaActive: {
            source: "static",
            value: false,
          },
        },
      },
    },
    three: {
      type: "advanced-cta-banner",
      default: {
        config: {
          elementType: {
            source: "static",
            value: "cta",
          },
          height: {
            source: "static",
            value: "200px",
          },
          iconActive: {
            source: "static",
            value: true,
          },
          btnActive: {
            source: "static",
            value: false,
          },
          mediaActive: {
            source: "static",
            value: false,
          },
        },
      },
    },
    four: {
      type: "advanced-cta-banner",
      default: {
        config: {
          elementType: {
            source: "static",
            value: "cta",
          },
          height: {
            source: "static",
            value: "200px",
          },
          iconActive: {
            source: "static",
            value: true,
          },
          btnActive: {
            source: "static",
            value: false,
          },
          mediaActive: {
            source: "static",
            value: false,
          },
        },
      },
    },
  },
});
