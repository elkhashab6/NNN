// Main Application Logic
document.addEventListener('DOMContentLoaded', () => {
    // Load initial page content
    loadPageContent('dashboard');
    
    // Initialize all components
    initializeComponents();
});

function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[href="#${pageId}"]`).classList.add('active');
    
    // Load page content if needed
    loadPageContent(pageId);
}

function loadPageContent(pageId) {
    const page = document.getElementById(pageId);
    if (!page) return;

    // Add loading indicator
    page.innerHTML = '<div class="text-center"><div class="spinner-border" role="status"></div></div>';
    
    switch(pageId) {
        case 'dashboard':
            initializeDashboard();
            break;
        case 'invoices':
            initializeInvoices();
            break;
        case 'inventory':
            initializeInventory();
            break;
        case 'customers':
            initializeCustomers();
            break;
        case 'suppliers':
            initializeSuppliers();
            break;
        case 'accounts':
            initializeAccounts();
            break;
        case 'financial':
            initializeFinancial();
            break;
        case 'payroll':
            initializePayroll();
            break;
        case 'assets':
            initializeAssets();
            break;
        case 'budget':
            initializeBudget();
            break;
        case 'costs':
            initializeCosts();
            break;
        case 'debts':
            initializeDebts();
            break;
        case 'reports':
            initializeReports();
            break;
        case 'settings':
            initializeSettings();
            break;
    }
}

function initializeComponents() {
    // Initialize all global components and event listeners
    setupNavigationListeners();
}

function initializeDashboard() {
    const dashboard = document.getElementById('dashboard');
    dashboard.innerHTML = `
        <div class="row mb-4">
            <div class="col">
                <h2>لوحة التحكم</h2>
                <hr>
            </div>
        </div>
        
        <!-- Quick Stats -->
        <div class="row mb-4">
            <div class="col-md-3">
                <div class="card stats-card">
                    <div class="card-body">
                        <h5 class="card-title">المبيعات اليومية</h5>
                        <h3 class="mb-0" id="dailySales">0</h3>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card stats-card">
                    <div class="card-body">
                        <h5 class="card-title">المخزون</h5>
                        <h3 class="mb-0" id="totalInventory">0</h3>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card stats-card">
                    <div class="card-body">
                        <h5 class="card-title">العملاء</h5>
                        <h3 class="mb-0" id="totalCustomers">0</h3>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card stats-card">
                    <div class="card-body">
                        <h5 class="card-title">الموردين</h5>
                        <h3 class="mb-0" id="totalSuppliers">0</h3>
                    </div>
                </div>
            </div>
        </div>

        <!-- Charts -->
        <div class="row">
            <div class="col-md-6 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">المبيعات الشهرية</h5>
                        <canvas id="salesChart"></canvas>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">توزيع المنتجات</h5>
                        <canvas id="productsChart"></canvas>
                    </div>
                </div>
            </div>
        </div>

        <!-- Recent Activities -->
        <div class="row">
            <div class="col-md-6 mb-4">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title mb-0">آخر الفواتير</h5>
                    </div>
                    <div class="card-body">
                        <div class="list-group list-group-flush" id="recentInvoices">
                            <div class="list-group-item">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 class="mb-0">فاتورة #1001</h6>
                                        <small class="text-muted">عميل: أحمد محمد</small>
                                    </div>
                                    <div class="text-end">
                                        <h6 class="mb-0">1,500 ريال</h6>
                                        <small class="text-muted">اليوم</small>
                                    </div>
                                </div>
                            </div>
                            <div class="list-group-item">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 class="mb-0">فاتورة #1000</h6>
                                        <small class="text-muted">عميل: محمد علي</small>
                                    </div>
                                    <div class="text-end">
                                        <h6 class="mb-0">2,300 ريال</h6>
                                        <small class="text-muted">أمس</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-4">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title mb-0">المنتجات الأكثر مبيعاً</h5>
                    </div>
                    <div class="card-body">
                        <div class="list-group list-group-flush" id="topProducts">
                            <div class="list-group-item">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 class="mb-0">لابتوب HP</h6>
                                        <small class="text-muted">الكمية: 5</small>
                                    </div>
                                    <div class="text-end">
                                        <h6 class="mb-0">15,000 ريال</h6>
                                        <small class="text-success">↑ 15%</small>
                                    </div>
                                </div>
                            </div>
                            <div class="list-group-item">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 class="mb-0">طابعة Canon</h6>
                                        <small class="text-muted">الكمية: 3</small>
                                    </div>
                                    <div class="text-end">
                                        <h6 class="mb-0">4,500 ريال</h6>
                                        <small class="text-danger">↓ 5%</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Update dashboard data
    updateDashboardStats();
    initializeCharts();
}

function setupNavigationListeners() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('href').substring(1);
            showPage(pageId);
        });
    });
}

function updateDashboardStats() {
    // Update quick stats
    document.getElementById('dailySales').textContent = utils.formatCurrency(Math.random() * 10000);
    document.getElementById('totalInventory').textContent = Math.floor(Math.random() * 1000);
    document.getElementById('totalCustomers').textContent = Math.floor(Math.random() * 100);
    document.getElementById('totalSuppliers').textContent = Math.floor(Math.random() * 50);
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Show dashboard by default
    showPage('dashboard');

    // Setup hash change listener
    window.addEventListener('hashchange', function() {
        const pageId = window.location.hash.substring(1) || 'dashboard';
        showPage(pageId);
    });
});
