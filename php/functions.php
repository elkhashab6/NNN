<?php
require_once 'config.php';

// دوال الحسابات
function saveAccount($category, $subcategory, $name, $value) {
    global $conn;
    $sql = "INSERT INTO accounts (category, subcategory, name, value) 
            VALUES (?, ?, ?, ?) 
            ON DUPLICATE KEY UPDATE value = ?";
    
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "sssdd", $category, $subcategory, $name, $value, $value);
    return mysqli_stmt_execute($stmt);
}

function getAccounts() {
    global $conn;
    $sql = "SELECT * FROM accounts ORDER BY category, subcategory, name";
    $result = mysqli_query($conn, $sql);
    return mysqli_fetch_all($result, MYSQLI_ASSOC);
}

// دوال الرواتب
function saveSalary($data) {
    global $conn;
    $sql = "INSERT INTO salaries (employee_name, basic_salary, allowances, overtime, deductions, insurance, net_salary, payment_date) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "sdddddds", 
        $data['employee_name'], 
        $data['basic_salary'],
        $data['allowances'],
        $data['overtime'],
        $data['deductions'],
        $data['insurance'],
        $data['net_salary'],
        $data['payment_date']
    );
    return mysqli_stmt_execute($stmt);
}

// دوال الأصول الثابتة
function saveFixedAsset($data) {
    global $conn;
    $sql = "INSERT INTO fixed_assets (name, category, purchase_date, cost, depreciation_rate, accumulated_depreciation, net_value) 
            VALUES (?, ?, ?, ?, ?, ?, ?)";
    
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "sssdddd",
        $data['name'],
        $data['category'],
        $data['purchase_date'],
        $data['cost'],
        $data['depreciation_rate'],
        $data['accumulated_depreciation'],
        $data['net_value']
    );
    return mysqli_stmt_execute($stmt);
}

// دوال الموازنات
function saveBudget($data) {
    global $conn;
    $sql = "INSERT INTO budgets (name, type, period, amount, actual_amount, variance, start_date, end_date) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "sssdddss",
        $data['name'],
        $data['type'],
        $data['period'],
        $data['amount'],
        $data['actual_amount'],
        $data['variance'],
        $data['start_date'],
        $data['end_date']
    );
    return mysqli_stmt_execute($stmt);
}

// دوال التكاليف
function saveCost($data) {
    global $conn;
    $sql = "INSERT INTO costs (category, description, amount, date, reference_no) 
            VALUES (?, ?, ?, ?, ?)";
    
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "ssdss",
        $data['category'],
        $data['description'],
        $data['amount'],
        $data['date'],
        $data['reference_no']
    );
    return mysqli_stmt_execute($stmt);
}

// دوال الديون والمستحقات
function saveDebtDue($data) {
    global $conn;
    $sql = "INSERT INTO debts_dues (type, party_name, amount, due_date, status, notes) 
            VALUES (?, ?, ?, ?, ?, ?)";
    
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "ssdsss",
        $data['type'],
        $data['party_name'],
        $data['amount'],
        $data['due_date'],
        $data['status'],
        $data['notes']
    );
    return mysqli_stmt_execute($stmt);
}

// دوال التقارير
function generateBalanceSheet($date) {
    global $conn;
    $sql = "SELECT 
                SUM(CASE WHEN category = 'assets' THEN value ELSE 0 END) as total_assets,
                SUM(CASE WHEN category = 'liabilities' THEN value ELSE 0 END) as total_liabilities,
                SUM(CASE WHEN category = 'equity' THEN value ELSE 0 END) as total_equity
            FROM accounts
            WHERE created_at <= ?";
    
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "s", $date);
    mysqli_stmt_execute($stmt);
    return mysqli_stmt_get_result($stmt)->fetch_assoc();
}

function generateIncomeStatement($start_date, $end_date) {
    global $conn;
    $sql = "SELECT 
                SUM(CASE WHEN category = 'revenue' THEN value ELSE 0 END) as total_revenue,
                SUM(CASE WHEN category = 'expenses' THEN value ELSE 0 END) as total_expenses
            FROM accounts
            WHERE created_at BETWEEN ? AND ?";
    
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "ss", $start_date, $end_date);
    mysqli_stmt_execute($stmt);
    return mysqli_stmt_get_result($stmt)->fetch_assoc();
}

// دوال الإعدادات
function saveSetting($category, $key, $value) {
    global $conn;
    $sql = "INSERT INTO settings (category, setting_key, setting_value) 
            VALUES (?, ?, ?) 
            ON DUPLICATE KEY UPDATE setting_value = ?";
    
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "ssss", $category, $key, $value, $value);
    return mysqli_stmt_execute($stmt);
}

function getSetting($category, $key) {
    global $conn;
    $sql = "SELECT setting_value FROM settings WHERE category = ? AND setting_key = ?";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "ss", $category, $key);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    $row = mysqli_fetch_assoc($result);
    return $row ? $row['setting_value'] : null;
}

// دوال المستخدمين
function saveUser($username, $password, $role) {
    global $conn;
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    $sql = "INSERT INTO users (username, password, role) VALUES (?, ?, ?)";
    
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "sss", $username, $hashed_password, $role);
    return mysqli_stmt_execute($stmt);
}

function logAudit($user_id, $action, $table_name, $record_id, $old_value, $new_value) {
    global $conn;
    $sql = "INSERT INTO audit_log (user_id, action, table_name, record_id, old_value, new_value) 
            VALUES (?, ?, ?, ?, ?, ?)";
    
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "ississ", 
        $user_id, 
        $action, 
        $table_name, 
        $record_id, 
        json_encode($old_value), 
        json_encode($new_value)
    );
    return mysqli_stmt_execute($stmt);
}

// دالة لتنظيف المدخلات
function cleanInput($data) {
    global $conn;
    return mysqli_real_escape_string($conn, trim($data));
}
?>
