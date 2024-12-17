<?php
header('Content-Type: application/json');
require_once 'functions.php';

$action = isset($_POST['action']) ? cleanInput($_POST['action']) : '';
$response = ['status' => 'error', 'message' => 'Invalid action'];

switch($action) {
    case 'save_account':
        $data = [
            'category' => cleanInput($_POST['category']),
            'subcategory' => cleanInput($_POST['subcategory']),
            'name' => cleanInput($_POST['name']),
            'value' => floatval($_POST['value'])
        ];
        
        if(saveAccount($data['category'], $data['subcategory'], $data['name'], $data['value'])) {
            $response = ['status' => 'success', 'message' => 'تم حفظ الحساب بنجاح'];
        }
        break;
        
    case 'save_salary':
        $data = [
            'employee_name' => cleanInput($_POST['employee_name']),
            'basic_salary' => floatval($_POST['basic_salary']),
            'allowances' => floatval($_POST['allowances']),
            'overtime' => floatval($_POST['overtime']),
            'deductions' => floatval($_POST['deductions']),
            'insurance' => floatval($_POST['insurance']),
            'net_salary' => floatval($_POST['net_salary']),
            'payment_date' => cleanInput($_POST['payment_date'])
        ];
        
        if(saveSalary($data)) {
            $response = ['status' => 'success', 'message' => 'تم حفظ الراتب بنجاح'];
        }
        break;
        
    case 'save_fixed_asset':
        $data = [
            'name' => cleanInput($_POST['name']),
            'category' => cleanInput($_POST['category']),
            'purchase_date' => cleanInput($_POST['purchase_date']),
            'cost' => floatval($_POST['cost']),
            'depreciation_rate' => floatval($_POST['depreciation_rate']),
            'accumulated_depreciation' => floatval($_POST['accumulated_depreciation']),
            'net_value' => floatval($_POST['net_value'])
        ];
        
        if(saveFixedAsset($data)) {
            $response = ['status' => 'success', 'message' => 'تم حفظ الأصل الثابت بنجاح'];
        }
        break;
        
    case 'save_budget':
        $data = [
            'name' => cleanInput($_POST['name']),
            'type' => cleanInput($_POST['type']),
            'period' => cleanInput($_POST['period']),
            'amount' => floatval($_POST['amount']),
            'actual_amount' => floatval($_POST['actual_amount']),
            'variance' => floatval($_POST['variance']),
            'start_date' => cleanInput($_POST['start_date']),
            'end_date' => cleanInput($_POST['end_date'])
        ];
        
        if(saveBudget($data)) {
            $response = ['status' => 'success', 'message' => 'تم حفظ الموازنة بنجاح'];
        }
        break;
        
    case 'save_cost':
        $data = [
            'category' => cleanInput($_POST['category']),
            'description' => cleanInput($_POST['description']),
            'amount' => floatval($_POST['amount']),
            'date' => cleanInput($_POST['date']),
            'reference_no' => cleanInput($_POST['reference_no'])
        ];
        
        if(saveCost($data)) {
            $response = ['status' => 'success', 'message' => 'تم حفظ التكلفة بنجاح'];
        }
        break;
        
    case 'save_debt_due':
        $data = [
            'type' => cleanInput($_POST['type']),
            'party_name' => cleanInput($_POST['party_name']),
            'amount' => floatval($_POST['amount']),
            'due_date' => cleanInput($_POST['due_date']),
            'status' => cleanInput($_POST['status']),
            'notes' => cleanInput($_POST['notes'])
        ];
        
        if(saveDebtDue($data)) {
            $response = ['status' => 'success', 'message' => 'تم حفظ الدين/المستحق بنجاح'];
        }
        break;
        
    case 'generate_balance_sheet':
        $date = cleanInput($_POST['date']);
        $data = generateBalanceSheet($date);
        if($data) {
            $response = ['status' => 'success', 'data' => $data];
        }
        break;
        
    case 'generate_income_statement':
        $start_date = cleanInput($_POST['start_date']);
        $end_date = cleanInput($_POST['end_date']);
        $data = generateIncomeStatement($start_date, $end_date);
        if($data) {
            $response = ['status' => 'success', 'data' => $data];
        }
        break;
        
    case 'save_setting':
        $category = cleanInput($_POST['category']);
        $key = cleanInput($_POST['key']);
        $value = cleanInput($_POST['value']);
        if(saveSetting($category, $key, $value)) {
            $response = ['status' => 'success', 'message' => 'تم حفظ الإعداد بنجاح'];
        }
        break;
        
    case 'get_setting':
        $category = cleanInput($_POST['category']);
        $key = cleanInput($_POST['key']);
        $value = getSetting($category, $key);
        if($value !== null) {
            $response = ['status' => 'success', 'data' => $value];
        }
        break;
}

echo json_encode($response);
?>
