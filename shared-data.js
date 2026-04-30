// ملف مشترك لإدارة البيانات بين المكتبة الرقمية وقسم التحميل

// نظام إدارة البيانات المشتركة
const SharedData = {
    // مفاتيح التخزين
    KEYS: {
        EXTRACTED_PAGES: 'wancharisi_extracted_pages',
        UPLOADED_BOOKS: 'wancharisi_uploaded_books',
        PENDING_EXTRACTS: 'wancharisi_pending_extracts'
    },

    // حفظ صفحات مستخرجة من المكتبة
    saveExtractedPages: function(data) {
        const extracts = this.getExtractedPages();
        extracts.push({
            id: Date.now(),
            bookId: data.bookId,
            bookTitle: data.bookTitle,
            startPage: data.startPage,
            endPage: data.endPage,
            totalPages: data.totalPages,
            filename: data.filename,
            timestamp: new Date().toISOString(),
            status: 'pending' // pending, processed, archived
        });
        localStorage.setItem(this.KEYS.EXTRACTED_PAGES, JSON.stringify(extracts));
        return extracts[extracts.length - 1];
    },

    // الحصول على الصفحات المستخرجة
    getExtractedPages: function() {
        const data = localStorage.getItem(this.KEYS.EXTRACTED_PAGES);
        return data ? JSON.parse(data) : [];
    },

    // حذف صفحات مستخرجة
    deleteExtractedPages: function(id) {
        let extracts = this.getExtractedPages();
        extracts = extracts.filter(item => item.id !== id);
        localStorage.setItem(this.KEYS.EXTRACTED_PAGES, JSON.stringify(extracts));
    },

    // تحديث حالة الصفحات المستخرجة
    updateExtractStatus: function(id, status) {
        const extracts = this.getExtractedPages();
        const index = extracts.findIndex(item => item.id === id);
        if (index !== -1) {
            extracts[index].status = status;
            extracts[index].updatedAt = new Date().toISOString();
            localStorage.setItem(this.KEYS.EXTRACTED_PAGES, JSON.stringify(extracts));
        }
    },

    // حفظ كتاب محمل جديد
    saveUploadedBook: function(data) {
        const books = this.getUploadedBooks();
        books.push({
            id: Date.now(),
            title: data.title,
            author: data.author || 'غير محدد',
            category: data.category || 'عام',
            pages: data.pages || 'غير معروف',
            filename: data.filename,
            fileSize: data.fileSize,
            uploadDate: new Date().toISOString(),
            status: 'uploaded', // uploaded, verified, published
            addedToLibrary: false
        });
        localStorage.setItem(this.KEYS.UPLOADED_BOOKS, JSON.stringify(books));
        return books[books.length - 1];
    },

    // الحصول على الكتب المحملة
    getUploadedBooks: function() {
        const data = localStorage.getItem(this.KEYS.UPLOADED_BOOKS);
        return data ? JSON.parse(data) : [];
    },

    // تحديث حالة الكتاب المحمل
    updateUploadedBookStatus: function(id, updates) {
        const books = this.getUploadedBooks();
        const index = books.findIndex(item => item.id === id);
        if (index !== -1) {
            Object.assign(books[index], updates);
            books[index].updatedAt = new Date().toISOString();
            localStorage.setItem(this.KEYS.UPLOADED_BOOKS, JSON.stringify(books));
        }
    },

    // حذف كتاب محمل
    deleteUploadedBook: function(id) {
        let books = this.getUploadedBooks();
        books = books.filter(item => item.id !== id);
        localStorage.setItem(this.KEYS.UPLOADED_BOOKS, JSON.stringify(books));
    },

    // وضع علامة على الكتاب كمضاف للمكتبة
    markAsAddedToLibrary: function(id) {
        this.updateUploadedBookStatus(id, { addedToLibrary: true, status: 'published' });
    },

    // الحصول على عدد العناصر المعلقة
    getPendingCounts: function() {
        const extracts = this.getExtractedPages().filter(e => e.status === 'pending');
        const uploads = this.getUploadedBooks().filter(b => !b.addedToLibrary);
        return {
            extracts: extracts.length,
            uploads: uploads.length,
            total: extracts.length + uploads.length
        };
    },

    // مسح جميع البيانات (للصيانة)
    clearAll: function() {
        if (confirm('هل أنت متأكد من حذف جميع البيانات المؤقتة؟')) {
            localStorage.removeItem(this.KEYS.EXTRACTED_PAGES);
            localStorage.removeItem(this.KEYS.UPLOADED_BOOKS);
            localStorage.removeItem(this.KEYS.PENDING_EXTRACTS);
            return true;
        }
        return false;
    },

    // تصدير البيانات
    exportData: function() {
        return {
            extractedPages: this.getExtractedPages(),
            uploadedBooks: this.getUploadedBooks(),
            exportDate: new Date().toISOString()
        };
    },

    // استيراد البيانات
    importData: function(data) {
        if (data.extractedPages) {
            localStorage.setItem(this.KEYS.EXTRACTED_PAGES, JSON.stringify(data.extractedPages));
        }
        if (data.uploadedBooks) {
            localStorage.setItem(this.KEYS.UPLOADED_BOOKS, JSON.stringify(data.uploadedBooks));
        }
    }
};

// دالة مساعدة لتنسيق التاريخ
function formatDate(isoString) {
    const date = new Date(isoString);
    return date.toLocaleDateString('ar-SA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// دالة مساعدة لتنسيق حجم الملف
function formatFileSize(bytes) {
    if (bytes === 0) return '0 بايت';
    const k = 1024;
    const sizes = ['بايت', 'كيلوبايت', 'ميجابايت', 'جيجابايت'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}
