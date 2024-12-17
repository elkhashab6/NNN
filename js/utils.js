// Utility Functions
const utils = {
    formatCurrency: (amount) => {
        return `${Number(amount).toLocaleString('ar-EG')} ${CONFIG.DEFAULT_SETTINGS.CURRENCY}`;
    },

    formatDate: (date) => {
        return new Date(date).toLocaleDateString('ar-EG');
    },

    formatDateTime: (date) => {
        return new Date(date).toLocaleString('ar-EG');
    },

    generateId: () => {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    },

    showAlert: (type, message) => {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        document.querySelector('.main-content').insertAdjacentElement('afterbegin', alertDiv);
        setTimeout(() => alertDiv.remove(), 5000);
    },

    saveToStorage: (key, data) => {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Error saving to storage:', error);
            return false;
        }
    },

    getFromStorage: (key) => {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Error reading from storage:', error);
            return null;
        }
    },

    removeFromStorage: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Error removing from storage:', error);
            return false;
        }
    },

    clearStorage: () => {
        try {
            localStorage.clear();
            return true;
        } catch (error) {
            console.error('Error clearing storage:', error);
            return false;
        }
    },

    validateForm: (formData, rules) => {
        const errors = {};
        for (const [field, rule] of Object.entries(rules)) {
            const value = formData.get(field);
            if (rule.required && !value) {
                errors[field] = 'هذا الحقل مطلوب';
            } else if (rule.min && value < rule.min) {
                errors[field] = `القيمة يجب أن تكون أكبر من ${rule.min}`;
            } else if (rule.max && value > rule.max) {
                errors[field] = `القيمة يجب أن تكون أقل من ${rule.max}`;
            } else if (rule.pattern && !rule.pattern.test(value)) {
                errors[field] = rule.message || 'القيمة غير صالحة';
            }
        }
        return Object.keys(errors).length === 0 ? null : errors;
    },

    exportToCSV: (data, filename) => {
        const csvContent = "data:text/csv;charset=utf-8," + data;
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    },

    printElement: (element) => {
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>طباعة</title>');
        printWindow.document.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">');
        printWindow.document.write('</head><body >');
        printWindow.document.write(element.innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
            printWindow.print();
            printWindow.close();
        }, 1000);
    },

    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    calculateVAT: (amount, rate = 0.15) => {
        return amount * rate;
    },

    roundNumber: (number, decimals = 2) => {
        return Number(Math.round(number + 'e' + decimals) + 'e-' + decimals);
    },

    getPageName: () => {
        return window.location.hash.substring(1) || 'dashboard';
    },

    isValidEmail: (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },

    isValidPhone: (phone) => {
        return /^[+]?[\d\s-]{8,}$/.test(phone);
    },

    isValidURL: (url) => {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }
};
