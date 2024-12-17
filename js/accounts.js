// Accounts Tree Management
const ACCOUNT_TYPES = {
    ASSETS: 'أصول',
    LIABILITIES: 'خصوم',
    EXPENSES: 'مصروفات',
    REVENUES: 'إيرادات',
    EQUITY: 'حقوق ملكية'
};

function initializeAccounts() {
    const accountsPage = document.getElementById('accounts');
    accountsPage.innerHTML = `
        <div class="row mb-4">
            <div class="col">
                <h2>شجرة الحسابات</h2>
                <hr>
            </div>
        </div>

        <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <div id="accountsTree">
                            <!-- الأصول -->
                            <div class="account-group mb-4">
                                <h3>الأصول</h3>
                                
                                <!-- الأصول المتداولة -->
                                <div class="account-subgroup ms-4 mb-3">
                                    <h4>الأصول المتداولة</h4>
                                    <div class="account-item ms-4">
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                            <span>نقدية</span>
                                            <input type="number" class="form-control form-control-sm w-25" placeholder="القيمة">
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                            <span>عملاء</span>
                                            <input type="number" class="form-control form-control-sm w-25" placeholder="القيمة">
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                            <span>استثمارات قصيرة الأجل</span>
                                            <input type="number" class="form-control form-control-sm w-25" placeholder="القيمة">
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                            <span>مخزون</span>
                                            <input type="number" class="form-control form-control-sm w-25" placeholder="القيمة">
                                        </div>
                                    </div>
                                </div>

                                <!-- الأصول غير المتداولة -->
                                <div class="account-subgroup ms-4">
                                    <h4>الأصول غير المتداولة</h4>
                                    <div class="account-item ms-4">
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                            <span>استثمارات طويلة الأجل</span>
                                            <input type="number" class="form-control form-control-sm w-25" placeholder="القيمة">
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                            <span>أصول غير ملموسة</span>
                                            <input type="number" class="form-control form-control-sm w-25" placeholder="القيمة">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- الخصوم والالتزامات -->
                            <div class="account-group mb-4">
                                <h3>الخصوم والالتزامات</h3>
                                
                                <!-- خصوم طويلة الأجل -->
                                <div class="account-subgroup ms-4 mb-3">
                                    <h4>خصوم طويلة الأجل</h4>
                                    <div class="account-item ms-4">
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                            <span>قروض طويلة الأجل</span>
                                            <input type="number" class="form-control form-control-sm w-25" placeholder="القيمة">
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                            <span>التزامات ضريبية مؤجلة</span>
                                            <input type="number" class="form-control form-control-sm w-25" placeholder="القيمة">
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                            <span>التزامات التقاعد</span>
                                            <input type="number" class="form-control form-control-sm w-25" placeholder="القيمة">
                                        </div>
                                    </div>
                                </div>

                                <!-- التزامات متداولة قصيرة الأجل -->
                                <div class="account-subgroup ms-4">
                                    <h4>التزامات متداولة قصيرة الأجل</h4>
                                    <div class="account-item ms-4">
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                            <span>قروض قصيرة الأجل</span>
                                            <input type="number" class="form-control form-control-sm w-25" placeholder="القيمة">
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                            <span>رواتب وأجور الموظفين</span>
                                            <input type="number" class="form-control form-control-sm w-25" placeholder="القيمة">
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                            <span>الموردين والدائنين</span>
                                            <input type="number" class="form-control form-control-sm w-25" placeholder="القيمة">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- حقوق الملكية -->
                            <div class="account-group mb-4">
                                <h3>حقوق الملكية</h3>
                                <div class="account-item ms-4">
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <span>رأس المال والتغيرات</span>
                                        <input type="number" class="form-control form-control-sm w-25" placeholder="القيمة">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <span>الاحتياطات النقدية</span>
                                        <input type="number" class="form-control form-control-sm w-25" placeholder="القيمة">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <span>الأرباح المحتجزة</span>
                                        <input type="number" class="form-control form-control-sm w-25" placeholder="القيمة">
                                    </div>
                                </div>
                            </div>

                            <!-- الإيرادات -->
                            <div class="account-group mb-4">
                                <h3>الإيرادات</h3>
                                <div class="account-item ms-4">
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <span>إيرادات المبيعات</span>
                                        <input type="number" class="form-control form-control-sm w-25" placeholder="القيمة">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <span>إيرادات متنوعة</span>
                                        <input type="number" class="form-control form-control-sm w-25" placeholder="القيمة">
                                    </div>
                                </div>
                            </div>

                            <!-- المصروفات -->
                            <div class="account-group">
                                <h3>المصروفات</h3>
                                <div class="account-item ms-4">
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <span>مصروفات إدارية</span>
                                        <input type="number" class="form-control form-control-sm w-25" placeholder="القيمة">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <span>مصروفات تشغيلية</span>
                                        <input type="number" class="form-control form-control-sm w-25" placeholder="القيمة">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <span>مصروفات بيعية</span>
                                        <input type="number" class="form-control form-control-sm w-25" placeholder="القيمة">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h4>الإجماليات</h4>
                        <hr>
                        <div class="mb-3">
                            <label class="form-label">إجمالي الأصول</label>
                            <h5 id="totalAssets">0</h5>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">إجمالي الخصوم</label>
                            <h5 id="totalLiabilities">0</h5>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">إجمالي حقوق الملكية</label>
                            <h5 id="totalEquity">0</h5>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">إجمالي الإيرادات</label>
                            <h5 id="totalRevenue">0</h5>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">إجمالي المصروفات</label>
                            <h5 id="totalExpenses">0</h5>
                        </div>
                        <hr>
                        <div>
                            <label class="form-label">صافي الربح</label>
                            <h4 id="netIncome">0</h4>
                        </div>
                    </div>
                </div>

                <div class="card mt-4">
                    <div class="card-body">
                        <h4>الإجراءات</h4>
                        <hr>
                        <button class="btn btn-primary w-100 mb-2" onclick="saveAccountsData()">حفظ التغييرات</button>
                        <button class="btn btn-success w-100 mb-2" onclick="exportAccountsToExcel()">تصدير إلى Excel</button>
                        <button class="btn btn-info w-100" onclick="printAccountsTree()">طباعة شجرة الحسابات</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Initialize event listeners
    initializeAccountsListeners();
    loadAccountsData();
}

function initializeAccountsListeners() {
    // Add event listeners for all input fields to update totals
    document.querySelectorAll('#accountsTree input').forEach(input => {
        input.addEventListener('input', updateTotals);
    });
}

function updateTotals() {
    // Calculate totals for each section
    const totalAssets = calculateSectionTotal('الأصول');
    const totalLiabilities = calculateSectionTotal('الخصوم والالتزامات');
    const totalEquity = calculateSectionTotal('حقوق الملكية');
    const totalRevenue = calculateSectionTotal('الإيرادات');
    const totalExpenses = calculateSectionTotal('المصروفات');

    // Update the display
    document.getElementById('totalAssets').textContent = utils.formatCurrency(totalAssets);
    document.getElementById('totalLiabilities').textContent = utils.formatCurrency(totalLiabilities);
    document.getElementById('totalEquity').textContent = utils.formatCurrency(totalEquity);
    document.getElementById('totalRevenue').textContent = utils.formatCurrency(totalRevenue);
    document.getElementById('totalExpenses').textContent = utils.formatCurrency(totalExpenses);

    // Calculate and update net income
    const netIncome = totalRevenue - totalExpenses;
    document.getElementById('netIncome').textContent = utils.formatCurrency(netIncome);
}

function calculateSectionTotal(sectionTitle) {
    let total = 0;
    const section = Array.from(document.querySelectorAll('.account-group')).find(group => 
        group.querySelector('h3').textContent === sectionTitle
    );
    
    if (section) {
        section.querySelectorAll('input').forEach(input => {
            total += Number(input.value) || 0;
        });
    }
    
    return total;
}

function saveAccountsData() {
    const accountsData = {};
    document.querySelectorAll('#accountsTree .account-item').forEach(item => {
        const category = item.closest('.account-group').querySelector('h3').textContent;
        const subcategory = item.closest('.account-subgroup')?.querySelector('h4')?.textContent;
        
        item.querySelectorAll('.d-flex').forEach(row => {
            const accountName = row.querySelector('span').textContent;
            const value = row.querySelector('input').value || 0;
            
            if (!accountsData[category]) {
                accountsData[category] = {};
            }
            
            if (subcategory) {
                if (!accountsData[category][subcategory]) {
                    accountsData[category][subcategory] = {};
                }
                accountsData[category][subcategory][accountName] = Number(value);
            } else {
                accountsData[category][accountName] = Number(value);
            }
        });
    });

    utils.saveToStorage('accountsData', accountsData);
    utils.showAlert('success', 'تم حفظ البيانات بنجاح');
}

function loadAccountsData() {
    const accountsData = utils.getFromStorage('accountsData');
    if (!accountsData) return;

    // Populate the form with saved data
    Object.entries(accountsData).forEach(([category, data]) => {
        Object.entries(data).forEach(([key, value]) => {
            if (typeof value === 'object') {
                // Handle subcategories
                Object.entries(value).forEach(([accountName, amount]) => {
                    const input = findAccountInput(category, key, accountName);
                    if (input) input.value = amount;
                });
            } else {
                // Handle direct accounts
                const input = findAccountInput(category, null, key);
                if (input) input.value = value;
            }
        });
    });

    // Update totals after loading data
    updateTotals();
}

function findAccountInput(category, subcategory, accountName) {
    const categorySection = Array.from(document.querySelectorAll('.account-group')).find(group => 
        group.querySelector('h3').textContent === category
    );
    
    if (!categorySection) return null;

    if (subcategory) {
        const subcategorySection = Array.from(categorySection.querySelectorAll('.account-subgroup')).find(subgroup => 
            subgroup.querySelector('h4').textContent === subcategory
        );
        
        if (!subcategorySection) return null;

        return Array.from(subcategorySection.querySelectorAll('.d-flex')).find(row => 
            row.querySelector('span').textContent === accountName
        )?.querySelector('input');
    } else {
        return Array.from(categorySection.querySelectorAll('.d-flex')).find(row => 
            row.querySelector('span').textContent === accountName
        )?.querySelector('input');
    }
}

function exportAccountsToExcel() {
    const accountsData = [];
    
    // Add headers
    accountsData.push(['الحساب', 'القيمة']);
    
    // Add data rows
    document.querySelectorAll('#accountsTree .account-group').forEach(group => {
        const category = group.querySelector('h3').textContent;
        accountsData.push([category, '']);
        
        group.querySelectorAll('.account-subgroup').forEach(subgroup => {
            const subcategory = subgroup.querySelector('h4').textContent;
            accountsData.push(['  ' + subcategory, '']);
            
            subgroup.querySelectorAll('.d-flex').forEach(row => {
                const accountName = row.querySelector('span').textContent;
                const value = row.querySelector('input').value || '0';
                accountsData.push(['    ' + accountName, value]);
            });
        });
        
        group.querySelectorAll('.account-item').forEach(item => {
            if (!item.closest('.account-subgroup')) {
                item.querySelectorAll('.d-flex').forEach(row => {
                    const accountName = row.querySelector('span').textContent;
                    const value = row.querySelector('input').value || '0';
                    accountsData.push(['  ' + accountName, value]);
                });
            }
        });
    });
    
    // Convert to CSV
    const csv = accountsData.map(row => row.join(',')).join('\n');
    
    // Download file
    utils.exportToCSV(csv, 'شجرة_الحسابات.csv');
}

function printAccountsTree() {
    const printContent = document.getElementById('accountsTree').cloneNode(true);
    
    // Remove input fields and replace with span elements
    printContent.querySelectorAll('input').forEach(input => {
        const span = document.createElement('span');
        span.textContent = utils.formatCurrency(Number(input.value) || 0);
        input.parentNode.replaceChild(span, input);
    });
    
    // Print the content
    utils.printElement(printContent);
}

// Initialize accounts on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeAccounts();
});
