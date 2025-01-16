import "./component";
import "./preview";

Shopware.Service("cmsService").registerCmsBlock({
  name: "advanced-cta-banner-category-two-columns",
  label: "sw-cms.blocks.general.ctaBannerCategoryTwoColumns.label",
  category: "advanced-cta-banner",
  component: "sw-cms-block-advanced-cta-banner-category-two-columns",
  previewComponent: "sw-cms-preview-advanced-cta-banner-category-two-columns",
  defaultConfig: {
    marginBottom: "20px",
    marginTop: "20px",
    marginLeft: "20px",
    marginRight: "20px",
    sizingMode: "boxed",
  },
  slots: {
    one: {
      type: "advanced-cta-banner",
      default: {
        config: {
          elementType: {
            source: "static",
            value: "category",
          },
          height: {
            source: "static",
            value: "300px",
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
            value: "category",
          },
          height: {
            source: "static",
            value: "300px",
          },
        },
      },
    },
  },
});
