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
        case 'reports':
            initializeReports();
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
        case 'settings':
            initializeSettings();
            break;
    }
}

function initializeComponents() {
    // Initialize all global components and event listeners
    initializeCharts();
    initializeCustomers();
    initializeSuppliers();
    initializeInventory();
    initializeAccounts();
    initializeFinancial();
    initializePayroll();
    initializeAssets();
    initializeBudget();
    initializeCosts();
    initializeDebts();
    initializeSettings();
    
    // Setup event listeners for navigation
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
    `;

    // Update dashboard data
    updateDashboardStats();
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

    // Update charts
    updateCharts();
}
