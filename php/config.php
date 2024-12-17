<?php
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'accounting_system');

// إنشاء الاتصال
$conn = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD);

// التحقق من الاتصال
if($conn === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

// إنشاء قاعدة البيانات إذا لم تكن موجودة
$sql = "CREATE DATABASE IF NOT EXISTS " . DB_NAME;
if(mysqli_query($conn, $sql)){
    mysqli_select_db($conn, DB_NAME);
} else {
    echo "ERROR: Could not create database $sql. " . mysqli_error($conn);
}

// إنشاء الجداول
$tables = [
    "CREATE TABLE IF NOT EXISTS accounts (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        category VARCHAR(50) NOT NULL,
        subcategory VARCHAR(50),
        name VARCHAR(100) NOT NULL,
        value DECIMAL(15,2) DEFAULT 0,
        currency VARCHAR(20) DEFAULT 'جنيه مصري',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )",
    
    "CREATE TABLE IF NOT EXISTS salaries (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        employee_name VARCHAR(100) NOT NULL,
        basic_salary DECIMAL(15,2) DEFAULT 0,
        allowances DECIMAL(15,2) DEFAULT 0,
        overtime DECIMAL(15,2) DEFAULT 0,
        deductions DECIMAL(15,2) DEFAULT 0,
        insurance DECIMAL(15,2) DEFAULT 0,
        net_salary DECIMAL(15,2) DEFAULT 0,
        payment_date DATE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )",
    
    "CREATE TABLE IF NOT EXISTS fixed_assets (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        category VARCHAR(50) NOT NULL,
        purchase_date DATE,
        cost DECIMAL(15,2) DEFAULT 0,
        depreciation_rate DECIMAL(5,2) DEFAULT 0,
        accumulated_depreciation DECIMAL(15,2) DEFAULT 0,
        net_value DECIMAL(15,2) DEFAULT 0,
        status VARCHAR(20) DEFAULT 'active'
    )",
    
    "CREATE TABLE IF NOT EXISTS budgets (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        type VARCHAR(50) NOT NULL,
        period VARCHAR(20) NOT NULL,
        amount DECIMAL(15,2) DEFAULT 0,
        actual_amount DECIMAL(15,2) DEFAULT 0,
        variance DECIMAL(15,2) DEFAULT 0,
        start_date DATE,
        end_date DATE,
        status VARCHAR(20) DEFAULT 'active'
    )",
    
    "CREATE TABLE IF NOT EXISTS costs (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        category VARCHAR(50) NOT NULL,
        description TEXT,
        amount DECIMAL(15,2) DEFAULT 0,
        date DATE,
        reference_no VARCHAR(50),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )",
    
    "CREATE TABLE IF NOT EXISTS debts_dues (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        type VARCHAR(50) NOT NULL,
        party_name VARCHAR(100) NOT NULL,
        amount DECIMAL(15,2) DEFAULT 0,
        due_date DATE,
        status VARCHAR(20) DEFAULT 'pending',
        notes TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )",
    
    "CREATE TABLE IF NOT EXISTS settings (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        category VARCHAR(50) NOT NULL,
        setting_key VARCHAR(50) NOT NULL,
        setting_value TEXT,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )",
    
    "CREATE TABLE IF NOT EXISTS users (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(20) NOT NULL,
        status VARCHAR(20) DEFAULT 'active',
        last_login TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )",
    
    "CREATE TABLE IF NOT EXISTS audit_log (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        user_id INT,
        action VARCHAR(50) NOT NULL,
        table_name VARCHAR(50),
        record_id INT,
        old_value TEXT,
        new_value TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
    )"
];

foreach($tables as $sql){
    if(!mysqli_query($conn, $sql)){
        echo "ERROR: Could not execute $sql. " . mysqli_error($conn);
    }
}
?>
