<?php
require_once 'config.php';

// تعريف فئات الإعدادات
$settingsCategories = [
    'general' => [
        'company_name' => [
            'type' => 'text',
            'label' => 'اسم الشركة',
            'default' => ''
        ],
        'company_address' => [
            'type' => 'textarea',
            'label' => 'عنوان الشركة',
            'default' => ''
        ],
        'tax_number' => [
            'type' => 'text',
            'label' => 'الرقم الضريبي',
            'default' => ''
        ],
        'fiscal_year_start' => [
            'type' => 'date',
            'label' => 'بداية السنة المالية',
            'default' => date('Y-01-01')
        ],
        'currency' => [
            'type' => 'select',
            'label' => 'العملة الرئيسية',
            'options' => [
                'SAR' => 'ريال سعودي',
                'USD' => 'دولار أمريكي',
                'EUR' => 'يورو',
                'GBP' => 'جنيه إسترليني',
                'AED' => 'درهم إماراتي'
            ],
            'default' => 'SAR'
        ]
    ],
    'accounting' => [
        'default_account_type' => [
            'type' => 'select',
            'label' => 'نوع الحساب الافتراضي',
            'options' => [
                'asset' => 'أصول',
                'liability' => 'خصوم',
                'equity' => 'حقوق ملكية',
                'revenue' => 'إيرادات',
                'expense' => 'مصروفات'
            ],
            'default' => 'asset'
        ],
        'vat_rate' => [
            'type' => 'number',
            'label' => 'نسبة ضريبة القيمة المضافة',
            'default' => '15'
        ],
        'depreciation_method' => [
            'type' => 'select',
            'label' => 'طريقة حساب الإهلاك',
            'options' => [
                'straight_line' => 'القسط الثابت',
                'declining_balance' => 'القسط المتناقص',
                'sum_of_years' => 'مجموع سنوات الاستخدام'
            ],
            'default' => 'straight_line'
        ],
        'cost_center_enabled' => [
            'type' => 'boolean',
            'label' => 'تفعيل مراكز التكلفة',
            'default' => true
        ]
    ],
    'reports' => [
        'balance_sheet_layout' => [
            'type' => 'select',
            'label' => 'تنسيق الميزانية العمومية',
            'options' => [
                'standard' => 'قياسي',
                'detailed' => 'مفصل',
                'comparative' => 'مقارن'
            ],
            'default' => 'standard'
        ],
        'income_statement_period' => [
            'type' => 'select',
            'label' => 'فترة قائمة الدخل',
            'options' => [
                'monthly' => 'شهري',
                'quarterly' => 'ربع سنوي',
                'yearly' => 'سنوي'
            ],
            'default' => 'monthly'
        ],
        'decimal_places' => [
            'type' => 'number',
            'label' => 'عدد الخانات العشرية',
            'default' => '2'
        ],
        'show_zero_balances' => [
            'type' => 'boolean',
            'label' => 'إظهار الأرصدة الصفرية',
            'default' => false
        ]
    ],
    'users' => [
        'session_timeout' => [
            'type' => 'number',
            'label' => 'مدة الجلسة (بالدقائق)',
            'default' => '30'
        ],
        'password_expiry_days' => [
            'type' => 'number',
            'label' => 'مدة صلاحية كلمة المرور (بالأيام)',
            'default' => '90'
        ],
        'failed_login_attempts' => [
            'type' => 'number',
            'label' => 'عدد محاولات تسجيل الدخول الفاشلة المسموح بها',
            'default' => '5'
        ],
        'two_factor_auth' => [
            'type' => 'boolean',
            'label' => 'تفعيل المصادقة الثنائية',
            'default' => false
        ]
    ],
    'backup' => [
        'auto_backup' => [
            'type' => 'boolean',
            'label' => 'تفعيل النسخ الاحتياطي التلقائي',
            'default' => true
        ],
        'backup_frequency' => [
            'type' => 'select',
            'label' => 'تكرار النسخ الاحتياطي',
            'options' => [
                'daily' => 'يومي',
                'weekly' => 'أسبوعي',
                'monthly' => 'شهري'
            ],
            'default' => 'daily'
        ],
        'backup_retention_days' => [
            'type' => 'number',
            'label' => 'مدة الاحتفاظ بالنسخ الاحتياطية (بالأيام)',
            'default' => '30'
        ],
        'backup_path' => [
            'type' => 'text',
            'label' => 'مسار النسخ الاحتياطي',
            'default' => 'backups/'
        ]
    ],
    'integration' => [
        'api_enabled' => [
            'type' => 'boolean',
            'label' => 'تفعيل واجهة برمجة التطبيقات (API)',
            'default' => false
        ],
        'api_key' => [
            'type' => 'text',
            'label' => 'مفتاح API',
            'default' => ''
        ],
        'webhook_url' => [
            'type' => 'text',
            'label' => 'رابط Webhook',
            'default' => ''
        ],
        'sync_frequency' => [
            'type' => 'select',
            'label' => 'تكرار المزامنة',
            'options' => [
                'realtime' => 'فوري',
                'hourly' => 'كل ساعة',
                'daily' => 'يومي'
            ],
            'default' => 'daily'
        ]
    ]
];

// دالة للحصول على قيمة إعداد معين
function getSetting($category, $key) {
    global $conn;
    $sql = "SELECT setting_value FROM settings WHERE category = ? AND setting_key = ?";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "ss", $category, $key);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    $row = mysqli_fetch_assoc($result);
    return $row ? $row['setting_value'] : getDefaultSetting($category, $key);
}

// دالة للحصول على القيمة الافتراضية لإعداد معين
function getDefaultSetting($category, $key) {
    global $settingsCategories;
    return isset($settingsCategories[$category][$key]['default']) 
        ? $settingsCategories[$category][$key]['default'] 
        : null;
}

// دالة لحفظ إعداد معين
function saveSetting($category, $key, $value) {
    global $conn;
    $sql = "INSERT INTO settings (category, setting_key, setting_value) 
            VALUES (?, ?, ?) 
            ON DUPLICATE KEY UPDATE setting_value = ?";
    
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "ssss", $category, $key, $value, $value);
    return mysqli_stmt_execute($stmt);
}

// دالة للحصول على جميع الإعدادات في فئة معينة
function getCategorySettings($category) {
    global $conn;
    $sql = "SELECT setting_key, setting_value FROM settings WHERE category = ?";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "s", $category);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    
    $settings = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $settings[$row['setting_key']] = $row['setting_value'];
    }
    return $settings;
}

// دالة لإعادة تعيين إعدادات فئة معينة إلى القيم الافتراضية
function resetCategorySettings($category) {
    global $settingsCategories, $conn;
    
    if (!isset($settingsCategories[$category])) {
        return false;
    }
    
    $success = true;
    foreach ($settingsCategories[$category] as $key => $setting) {
        $defaultValue = $setting['default'];
        if (!saveSetting($category, $key, $defaultValue)) {
            $success = false;
        }
    }
    return $success;
}

// دالة للتحقق من صحة قيمة الإعداد
function validateSettingValue($category, $key, $value) {
    global $settingsCategories;
    
    if (!isset($settingsCategories[$category][$key])) {
        return false;
    }
    
    $setting = $settingsCategories[$category][$key];
    
    switch ($setting['type']) {
        case 'number':
            return is_numeric($value);
        
        case 'boolean':
            return is_bool($value) || $value === '0' || $value === '1';
        
        case 'select':
            return isset($setting['options'][$value]);
        
        case 'date':
            return strtotime($value) !== false;
        
        case 'text':
        case 'textarea':
            return true; // يمكن إضافة المزيد من التحقق حسب الحاجة
        
        default:
            return false;
    }
}

// دالة لتصدير الإعدادات
function exportSettings() {
    global $settingsCategories, $conn;
    
    $export = [];
    foreach ($settingsCategories as $category => $settings) {
        $export[$category] = getCategorySettings($category);
    }
    
    return json_encode($export, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
}

// دالة لاستيراد الإعدادات
function importSettings($jsonSettings) {
    global $settingsCategories;
    
    $settings = json_decode($jsonSettings, true);
    if (!$settings) {
        return false;
    }
    
    $success = true;
    foreach ($settings as $category => $categorySettings) {
        if (isset($settingsCategories[$category])) {
            foreach ($categorySettings as $key => $value) {
                if (isset($settingsCategories[$category][$key]) && 
                    validateSettingValue($category, $key, $value)) {
                    if (!saveSetting($category, $key, $value)) {
                        $success = false;
                    }
                }
            }
        }
    }
    
    return $success;
}
?>
