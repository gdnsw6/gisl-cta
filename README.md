# Advanced Call-to-Action Banner Plugin

### Version: 1.0.0

**Author**: [Golden Info Systems](https://www.goldeninfosystems.com)  
**License**: MIT

---

## Overview

The **Advanced Call-to-Action Banner** plugin is designed to enhance customer engagement on your Shopware store by allowing you to display customizable call-to-action banners. These banners are versatile and can be used for various purposes, such as promotions, product inquiries, newsletter signups, and more.

---

## Features

- **Customizable Banners**: Easily create and display banners tailored to your business needs.
- **Multi-Language Support**: Fully compatible with English and German languages.
- **Responsive Design**: Optimized for all devices, ensuring a seamless user experience.
- **User-Friendly Interface**: Intuitive configuration options for quick setup.
- **Engagement Tracking**: Monitor customer interactions with your call-to-action banners.

---

## Installation

### Via Admin Panel

1. Navigate to **Extensions** > **My Extensions** in the Shopware Admin.
2. Click **Upload Extension** and select the plugin's `.zip` file.
3. Install and activate the plugin.

### Via Composer

1. Run the following command in your Shopware project directory:
   ```bash
   composer require gisl/advanced-call-to-action-banner
   ```
2. Refresh the plugin list:
   ```bash
   php bin/console plugin:refresh
   ```
3. Install and activate the plugin:
   ```bash
   php bin/console plugin:install --activate AdvancedCallToActionBanner
   ```

---

## Configuration

1. After activating the plugin, navigate to the **Extensions** section in the Admin panel.
2. Select **Advanced Call-to-Action Banner** to access the configuration page.
3. Customize your banners:
   - Add text, images, or buttons.
   - Choose display conditions (e.g., homepage, specific categories, or products).
   - Configure visibility options.

---

## Screenshots

### Admin Panel Configuration

![Admin Panel Configuration](src/Resources/screenshots/admin-config.png)

### Example Banner Display

![Example Banner](src/Resources/screenshots/banner-display.png)

---

## Support

For any issues or inquiries, please contact our support team:  
🌐 [Support Page](https://www.goldeninfosystems.com/support)  
✉️ [Email Support](mailto:support@goldeninfosystems.com)

---

## Changelog

### Version 1.0.0

- Initial release
- Added customizable banner functionality
- Multi-language support
- Responsive design for all devices

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## About

Developed by [Golden Info Systems](https://www.goldeninfosystems.com), this plugin empowers merchants to create engaging experiences for their customers and drive conversions effectively.
