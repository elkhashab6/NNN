// Accounts Tree Management
const accountTree = {
    assets: {
        name: "الأصول",
        class: "main-category bg-primary text-white",
        subcategories: {
            currentAssets: {
                name: "الأصول المتداولة",
                class: "sub-category bg-info text-white",
                accounts: {
                    cash: {
                        name: "النقدية",
                        value: 0,
                        currency: "جنيه مصري",
                        class: "account-item"
                    },
                    accountsReceivable: {
                        name: "العملاء",
                        value: 0,
                        currency: "جنيه مصري",
                        class: "account-item"
                    },
                    shortTermInvestments: {
                        name: "استثمارات قصيرة الأجل",
                        value: 0,
                        currency: "جنيه مصري",
                        class: "account-item"
                    },
                    inventory: {
                        name: "المخزون",
                        value: 0,
                        currency: "جنيه مصري",
                        class: "account-item"
                    }
                }
            },
            nonCurrentAssets: {
                name: "الأصول غير المتداولة",
                class: "sub-category bg-info text-white",
                accounts: {
                    longTermInvestments: {
                        name: "استثمارات طويلة الأجل",
                        value: 0,
                        currency: "جنيه مصري",
                        class: "account-item"
                    },
                    intangibleAssets: {
                        name: "أصول غير ملموسة",
                        value: 0,
                        currency: "جنيه مصري",
                        class: "account-item"
                    }
                }
            }
        }
    },
    liabilities: {
        name: "الخصوم والالتزامات",
        class: "main-category bg-danger text-white",
        subcategories: {
            longTermLiabilities: {
                name: "خصوم طويلة الأجل",
                class: "sub-category bg-warning text-dark",
                accounts: {
                    longTermLoans: {
                        name: "قروض طويلة الأجل",
                        value: 0,
                        currency: "جنيه مصري",
                        class: "account-item"
                    },
                    deferredTax: {
                        name: "التزامات ضريبية مؤجلة",
                        value: 0,
                        currency: "جنيه مصري",
                        class: "account-item"
                    },
                    pensionLiabilities: {
                        name: "التزامات التقاعد",
                        value: 0,
                        currency: "جنيه مصري",
                        class: "account-item"
                    }
                }
            },
            currentLiabilities: {
                name: "التزامات متداولة قصيرة الأجل",
                class: "sub-category bg-warning text-dark",
                accounts: {
                    shortTermLoans: {
                        name: "قروض قصيرة الأجل",
                        value: 0,
                        currency: "جنيه مصري",
                        class: "account-item"
                    },
                    salariesPayable: {
                        name: "رواتب وأجور الموظفين",
                        value: 0,
                        currency: "جنيه مصري",
                        class: "account-item"
                    },
                    accountsPayable: {
                        name: "الموردين والدائنين",
                        value: 0,
                        currency: "جنيه مصري",
                        class: "account-item"
                    }
                }
            }
        }
    },
    equity: {
        name: "حقوق الملكية",
        class: "main-category bg-success text-white",
        accounts: {
            capital: {
                name: "رأس المال والتغيرات",
                value: 0,
                currency: "جنيه مصري",
                class: "account-item"
            },
            reserves: {
                name: "الاحتياطات النقدية",
                value: 0,
                currency: "جنيه مصري",
                class: "account-item"
            },
            retainedEarnings: {
                name: "الأرباح المحتجزة",
                value: 0,
                currency: "جنيه مصري",
                class: "account-item"
            }
        }
    },
    revenue: {
        name: "الإيرادات",
        class: "main-category bg-info text-white",
        accounts: {
            salesRevenue: {
                name: "إيرادات المبيعات",
                value: 0,
                currency: "جنيه مصري",
                class: "account-item"
            },
            otherRevenue: {
                name: "إيرادات متنوعة",
                value: 0,
                currency: "جنيه مصري",
                class: "account-item"
            }
        }
    },
    expenses: {
        name: "المصروفات",
        class: "main-category bg-secondary text-white",
        accounts: {
            administrativeExpenses: {
                name: "مصروفات إدارية",
                value: 0,
                currency: "جنيه مصري",
                class: "account-item"
            },
            operatingExpenses: {
                name: "مصروفات تشغيلية",
                value: 0,
                currency: "جنيه مصري",
                class: "account-item"
            },
            sellingExpenses: {
                name: "مصروفات بيعية",
                value: 0,
                currency: "جنيه مصري",
                class: "account-item"
            }
        }
    },
    financialReports: {
        name: "التقارير المالية",
        class: "main-category bg-purple text-white",
        accounts: {
            salaries: {
                name: "الرواتب",
                value: 0,
                currency: "جنيه مصري",
                class: "account-item"
            },
            fixedAssets: {
                name: "الأصول الثابتة",
                value: 0,
                currency: "جنيه مصري",
                class: "account-item"
            },
            budgets: {
                name: "الموازنات",
                value: 0,
                currency: "جنيه مصري",
                class: "account-item"
            },
            costs: {
                name: "التكاليف",
                value: 0,
                currency: "جنيه مصري",
                class: "account-item"
            },
            debtsAndDues: {
                name: "الديون والمستحقات",
                value: 0,
                currency: "جنيه مصري",
                class: "account-item"
            }
        }
    }
};

const reports = {
    name: "التقارير",
    types: {
        balanceSheet: {
            name: "الميزانية العمومية",
            period: ["سنوي", "ربع سنوي", "شهري"]
        },
        incomeStatement: {
            name: "قائمة الدخل",
            period: ["سنوي", "ربع سنوي", "شهري"]
        },
        cashFlow: {
            name: "التدفقات النقدية",
            period: ["سنوي", "ربع سنوي", "شهري"]
        },
        trialBalance: {
            name: "ميزان المراجعة",
            period: ["شهري"]
        },
        vatReport: {
            name: "تقرير ضريبة القيمة المضافة",
            period: ["شهري"]
        },
        profitabilityAnalysis: {
            name: "تحليل الربحية",
            period: ["سنوي", "ربع سنوي"]
        }
    }
};

const settings = {
    name: "الإعدادات",
    categories: {
        general: {
            name: "إعدادات عامة",
            settings: {
                companyInfo: "معلومات الشركة",
                fiscalYear: "السنة المالية",
                currency: "العملة",
                language: "اللغة"
            }
        },
        accounting: {
            name: "إعدادات المحاسبة",
            settings: {
                chartOfAccounts: "دليل الحسابات",
                accountingBasis: "أساس المحاسبة (نقدي/استحقاق)",
                vatSettings: "إعدادات ضريبة القيمة المضافة",
                defaultAccounts: "الحسابات الافتراضية"
            }
        },
        users: {
            name: "إدارة المستخدمين",
            settings: {
                userRoles: "صلاحيات المستخدمين",
                accessControl: "التحكم في الوصول",
                auditLog: "سجل المراجعة"
            }
        },
        backup: {
            name: "النسخ الاحتياطي",
            settings: {
                autoBackup: "النسخ الاحتياطي التلقائي",
                backupLocation: "موقع النسخ الاحتياطي",
                backupSchedule: "جدول النسخ الاحتياطي"
            }
        },
        integration: {
            name: "التكامل",
            settings: {
                bankFeeds: "تغذية البنك",
                apiIntegration: "تكامل API",
                importExport: "استيراد/تصدير البيانات"
            }
        }
    }
};

function formatCurrency(value) {
    return new Intl.NumberFormat('ar-EG', {
        style: 'currency',
        currency: 'EGP',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value);
}

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
                            ${renderAccountTree(accountTree)}
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

function renderAccountTree(tree) {
    let html = '';
    Object.keys(tree).forEach(category => {
        html += `
            <div class="account-group ${tree[category].class}">
                <h3>${tree[category].name}</h3>
        `;
        if (tree[category].subcategories) {
            Object.keys(tree[category].subcategories).forEach(subcategory => {
                html += `
                    <div class="account-subgroup ${tree[category].subcategories[subcategory].class}">
                        <h4>${tree[category].subcategories[subcategory].name}</h4>
                `;
                Object.keys(tree[category].subcategories[subcategory].accounts).forEach(account => {
                    html += `
                        <div class="account-item ${tree[category].subcategories[subcategory].accounts[account].class}">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <span>${tree[category].subcategories[subcategory].accounts[account].name}</span>
                                <input type="number" class="form-control form-control-sm w-25" placeholder="القيمة" value="${tree[category].subcategories[subcategory].accounts[account].value}">
                            </div>
                        </div>
                    `;
                });
                html += `
                    </div>
                `;
            });
        } else {
            Object.keys(tree[category].accounts).forEach(account => {
                html += `
                    <div class="account-item ${tree[category].accounts[account].class}">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <span>${tree[category].accounts[account].name}</span>
                            <input type="number" class="form-control form-control-sm w-25" placeholder="القيمة" value="${tree[category].accounts[account].value}">
                        </div>
                    </div>
                `;
            });
        }
        html += `
            </div>
        `;
    });
    return html;
}

function initializeAccountsListeners() {
    // Add event listeners for all input fields to update totals
    document.querySelectorAll('#accountsTree input').forEach(input => {
        input.addEventListener('input', updateTotals);
    });
}

function updateTotals() {
    // Calculate totals for each section
    const totalAssets = calculateSectionTotal('assets');
    const totalLiabilities = calculateSectionTotal('liabilities');
    const totalEquity = calculateSectionTotal('equity');
    const totalRevenue = calculateSectionTotal('revenue');
    const totalExpenses = calculateSectionTotal('expenses');

    // Update the display
    document.getElementById('totalAssets').textContent = formatCurrency(totalAssets);
    document.getElementById('totalLiabilities').textContent = formatCurrency(totalLiabilities);
    document.getElementById('totalEquity').textContent = formatCurrency(totalEquity);
    document.getElementById('totalRevenue').textContent = formatCurrency(totalRevenue);
    document.getElementById('totalExpenses').textContent = formatCurrency(totalExpenses);

    // Calculate and update net income
    const netIncome = totalRevenue - totalExpenses;
    document.getElementById('netIncome').textContent = formatCurrency(netIncome);
}

function calculateSectionTotal(section) {
    let total = 0;
    Object.keys(accountTree[section].accounts).forEach(account => {
        total += Number(accountTree[section].accounts[account].value) || 0;
    });
    if (accountTree[section].subcategories) {
        Object.keys(accountTree[section].subcategories).forEach(subcategory => {
            Object.keys(accountTree[section].subcategories[subcategory].accounts).forEach(account => {
                total += Number(accountTree[section].subcategories[subcategory].accounts[account].value) || 0;
            });
        });
    }
    return total;
}

async function saveAccountsData() {
    const accounts = {};
    document.querySelectorAll('#accountsTree input').forEach(input => {
        const category = input.closest('.account-group').querySelector('h3').textContent;
        const subcategory = input.closest('.account-subgroup')?.querySelector('h4')?.textContent;
        const name = input.closest('.account-item').querySelector('span').textContent;
        const value = parseFloat(input.value) || 0;
        
        const data = {
            category: category,
            subcategory: subcategory || '',
            name: name,
            value: value
        };
        
        await saveData('save_account', data);
    });
}

async function loadAccountsData() {
    try {
        const response = await fetch('php/api.php?action=get_accounts');
        const data = await response.json();
        
        if(data.status === 'success') {
            data.data.forEach(account => {
                const input = findAccountInput(account.category, account.subcategory, account.name);
                if(input) {
                    input.value = account.value;
                }
            });
            
            updateTotals();
        }
    } catch(error) {
        console.error('Error:', error);
        showAlert('error', 'حدث خطأ أثناء تحميل البيانات');
    }
}

async function exportAccountsToExcel() {
    try {
        const response = await fetch('php/api.php?action=export_excel');
        const blob = await response.blob();
        
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'accounts_' + new Date().toISOString().split('T')[0] + '.xlsx';
        document.body.appendChild(a);
        a.click();
        a.remove();
    } catch(error) {
        console.error('Error:', error);
        showAlert('error', 'حدث خطأ أثناء تصدير البيانات');
    }
}

function printAccountsTree() {
    const printWindow = window.open('', '_blank');
    const printContent = document.getElementById('accountsTree').cloneNode(true);
    
    // تحويل حقول الإدخال إلى نصوص
    printContent.querySelectorAll('input').forEach(input => {
        const span = document.createElement('span');
        span.textContent = formatCurrency(Number(input.value) || 0);
        input.parentNode.replaceChild(span, input);
    });
    
    printWindow.document.write(`
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
            <title>شجرة الحسابات</title>
            <link href="css/bootstrap.min.css" rel="stylesheet">
            <link href="css/style.css" rel="stylesheet">
            <style>
                @media print {
                    .no-print { display: none; }
                }
            </style>
        </head>
        <body>
            <div class="container mt-4">
                <h2>شجرة الحسابات</h2>
                <hr>
                ${printContent.outerHTML}
            </div>
            <script>window.print(); window.close();</script>
        </body>
        </html>
    `);
}

// دوال التعامل مع API
async function saveData(action, data) {
    try {
        const formData = new FormData();
        formData.append('action', action);
        
        // إضافة البيانات إلى FormData
        Object.keys(data).forEach(key => {
            formData.append(key, data[key]);
        });
        
        const response = await fetch('php/api.php', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        if(result.status === 'success') {
            showAlert('success', result.message);
        } else {
            showAlert('error', result.message);
        }
        return result;
    } catch(error) {
        console.error('Error:', error);
        showAlert('error', 'حدث خطأ أثناء حفظ البيانات');
        return { status: 'error', message: error.message };
    }
}

// دالة عرض الرسائل
function showAlert(type, message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type === 'success' ? 'success' : 'danger'} alert-dismissible fade show`;
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    document.querySelector('.container').insertBefore(alertDiv, document.querySelector('.container').firstChild);
    
    // إخفاء التنبيه بعد 3 ثواني
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}

function findAccountInput(category, subcategory, name) {
    const accountGroups = document.querySelectorAll('.account-group');
    for (const group of accountGroups) {
        if (group.querySelector('h3').textContent === category) {
            const subgroup = group.querySelector(`.account-subgroup h4:contains(${subcategory})`);
            if (subgroup) {
                const accountItem = subgroup.closest('.account-subgroup').querySelector(`.account-item span:contains(${name})`);
                if (accountItem) {
                    return accountItem.closest('.account-item').querySelector('input');
                }
            } else {
                const accountItem = group.querySelector(`.account-item span:contains(${name})`);
                if (accountItem) {
                    return accountItem.closest('.account-item').querySelector('input');
                }
            }
        }
    }
    return null;
}

function renderReports() {
    let html = '<div class="reports-section">';
    
    // عرض التقارير المالية
    html += `<h3>التقارير المالية</h3>`;
    Object.keys(reports.types).forEach(type => {
        html += `
            <div class="report-item">
                <h4>${reports.types[type].name}</h4>
                <div class="report-periods">
                    ${reports.types[type].period.map(p => `
                        <button class="btn btn-sm btn-outline-primary m-1" onclick="generateReport('${type}', '${p}')">
                            ${p}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    return html;
}

function generateReport(type, period) {
    console.log(`Generating ${type} report for ${period} period`);
    // هنا يتم إضافة منطق إنشاء التقرير
}

function renderSettings() {
    let html = '<div class="settings-section">';
    
    Object.keys(settings.categories).forEach(category => {
        html += `
            <div class="setting-category">
                <h4>${settings.categories[category].name}</h4>
                <div class="setting-items">
                    ${Object.entries(settings.categories[category].settings).map(([key, value]) => `
                        <div class="setting-item">
                            <span>${value}</span>
                            <button class="btn btn-sm btn-outline-secondary" onclick="editSetting('${category}', '${key}')">
                                تعديل
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    return html;
}

function editSetting(category, setting) {
    console.log(`Editing ${setting} in ${category}`);
    // هنا يتم إضافة منطق تعديل الإعدادات
}

// Initialize accounts on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeAccounts();
});
