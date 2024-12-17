// Application Configuration
const CONFIG = {
    APP_NAME: 'النظام المحاسبي المتكامل',
    VERSION: '1.0.0',
    CURRENCY: 'ج.م',
    DATE_FORMAT: 'DD/MM/YYYY',
    STORAGE_KEYS: {
        INVOICES: 'invoices',
        INVENTORY: 'inventory',
        CUSTOMERS: 'customers',
        SUPPLIERS: 'suppliers',
        SETTINGS: 'settings',
        ACCOUNTS: 'accounts',
        FINANCIAL: 'financial',
        PAYROLL: 'payroll',
        ASSETS: 'assets',
        BUDGET: 'budget',
        COSTS: 'costs',
        DEBTS: 'debts'
    },
    
    DEFAULT_SETTINGS: {
        COMPANY_NAME: 'شركتي',
        COMPANY_ADDRESS: 'العنوان',
        COMPANY_PHONE: 'رقم الهاتف',
        COMPANY_EMAIL: 'البريد الإلكتروني',
        COMPANY_WEBSITE: 'الموقع الإلكتروني',
        COMPANY_VAT: 'الرقم الضريبي',
        CURRENCY: 'ريال',
        LANGUAGE: 'ar',
        THEME: 'light',
        DECIMAL_PLACES: 2,
        DATE_FORMAT: 'DD/MM/YYYY',
        TIME_FORMAT: 'HH:mm:ss',
        TIMEZONE: 'Asia/Riyadh'
    },
    
    API: {
        BASE_URL: '',
        ENDPOINTS: {
            LOGIN: '/login',
            REGISTER: '/register',
            RESET_PASSWORD: '/reset-password'
        }
    },
    
    CHART_COLORS: {
        PRIMARY: '#3498db',
        SECONDARY: '#2ecc71',
        SUCCESS: '#27ae60',
        DANGER: '#e74c3c',
        WARNING: '#f1c40f',
        INFO: '#3498db',
        LIGHT: '#ecf0f1',
        DARK: '#2c3e50'
    }
};
