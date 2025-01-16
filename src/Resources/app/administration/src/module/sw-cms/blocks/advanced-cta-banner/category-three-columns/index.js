import "./component";
import "./preview";

Shopware.Service("cmsService").registerCmsBlock({
  name: "advanced-cta-banner-category-three-columns",
  label: "sw-cms.blocks.general.ctaBannerCategoryThreeColumns.label",
  category: "advanced-cta-banner",
  component: "sw-cms-block-advanced-cta-banner-category-three-columns",
  previewComponent: "sw-cms-preview-advanced-cta-banner-category-three-columns",
  defaultConfig: {
    marginBottom: "20px",
    marginTop: "20px",
    marginLeft: "20px",
    marginRight: "20px",
    sizingMode: "boxed", // Ensure 'boxed' is the correct mode
  },
  slots: {
    one: {
      type: "advanced-cta-banner",
      default: {
        config: {
          elementType: {
            source: "static",
            value: "category", // Ensure the 'category' type is supported
          },
          height: {
            source: "static",
            value: "300px", // Ensure this value aligns with your design
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
    three: {
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