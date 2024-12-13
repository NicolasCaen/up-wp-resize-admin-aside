<?php
/**
 * Plugin Name: NG1 Flex Admin
 * Description: Rend la sidebar de l'admin WordPress redimensionnable
 * Version: 1.0.0
 * Author: NG1
 */

if (!defined('ABSPATH')) {
    exit;
}

class Ng1FlexAdmin {
    private static $instance = null;
    private $plugin_path;
    private $plugin_url;

    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    private function __construct() {
        $this->plugin_path = plugin_dir_path(__FILE__);
        $this->plugin_url = plugin_dir_url(__FILE__);
        
        add_action('admin_enqueue_scripts', [$this, 'enqueueAdminScripts']);
    }

    public function enqueueAdminScripts() {
        if (!is_admin()) {
            return;
        }

        $js_file = 'assets/js/flex-admin-aside.js';
        $js_path = $this->plugin_path . $js_file;

        if (file_exists($js_path)) {
            wp_enqueue_script(
                'ng1-flex-admin',
                $this->plugin_url . $js_file,
                [],
                filemtime($js_path),
                true
            );
        }
    }

    private function __clone() {}

    public function __wakeup() {
        throw new \Exception("Cannot unserialize singleton");
    }
}

// Initialisation
Ng1FlexAdmin::getInstance();
