<?php
header('Content-Type: application/json');
require_once 'settings.php';

$action = isset($_POST['action']) ? cleanInput($_POST['action']) : '';
$response = ['status' => 'error', 'message' => 'Invalid action'];

switch($action) {
    case 'get_setting':
        $category = cleanInput($_POST['category']);
        $key = cleanInput($_POST['key']);
        
        $value = getSetting($category, $key);
        if ($value !== null) {
            $response = [
                'status' => 'success',
                'data' => $value
            ];
        }
        break;
        
    case 'save_setting':
        $category = cleanInput($_POST['category']);
        $key = cleanInput($_POST['key']);
        $value = cleanInput($_POST['value']);
        
        if (validateSettingValue($category, $key, $value)) {
            if (saveSetting($category, $key, $value)) {
                $response = [
                    'status' => 'success',
                    'message' => 'تم حفظ الإعداد بنجاح'
                ];
            } else {
                $response = [
                    'status' => 'error',
                    'message' => 'فشل في حفظ الإعداد'
                ];
            }
        } else {
            $response = [
                'status' => 'error',
                'message' => 'قيمة غير صالحة للإعداد'
            ];
        }
        break;
        
    case 'get_category_settings':
        $category = cleanInput($_POST['category']);
        $settings = getCategorySettings($category);
        
        $response = [
            'status' => 'success',
            'data' => $settings
        ];
        break;
        
    case 'reset_category':
        $category = cleanInput($_POST['category']);
        
        if (resetCategorySettings($category)) {
            $response = [
                'status' => 'success',
                'message' => 'تم إعادة تعيين إعدادات الفئة بنجاح'
            ];
        } else {
            $response = [
                'status' => 'error',
                'message' => 'فشل في إعادة تعيين الإعدادات'
            ];
        }
        break;
        
    case 'export_settings':
        $settings = exportSettings();
        
        $response = [
            'status' => 'success',
            'data' => $settings
        ];
        break;
        
    case 'import_settings':
        $jsonSettings = $_POST['settings'];
        
        if (importSettings($jsonSettings)) {
            $response = [
                'status' => 'success',
                'message' => 'تم استيراد الإعدادات بنجاح'
            ];
        } else {
            $response = [
                'status' => 'error',
                'message' => 'فشل في استيراد الإعدادات'
            ];
        }
        break;
}

echo json_encode($response, JSON_UNESCAPED_UNICODE);
?>
