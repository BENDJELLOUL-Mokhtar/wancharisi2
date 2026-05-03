// نظام الترجمة الثنائي (عربي - إنجليزي)
// Bilingual Translation System (Arabic - English)

const translations = {
    ar: {
        // Navigation
        nav_home: "الرئيسية",
        nav_library: "المكتبة الرقمية",
        nav_asjp: "مقالات ASJP",
        nav_upload: "تحميل المؤلفات",
        nav_verification: "التحقق من النصوص",
        nav_ai_engine: "محرك الأفكار",
        nav_matching: "مطابقة النوازل",
        
        // Main Page
        site_title: "الإمام أحمد بن يحيى الونشريسي",
        site_subtitle: "مشروع رقمي شامل لأعمال الإمام الونشريسي",
        hero_title: "مرحباً بكم في المنصة الرقمية للإمام الونشريسي",
        hero_description: "استكشف التراث الفقهي الغني للإمام أحمد بن يحيى الونشريسي من خلال مكتبة رقمية شاملة وأدوات بحثية متقدمة",
        explore_library: "استكشف المكتبة",
        
        // About Section
        about_title: "عن المشروع",
        about_description: "يهدف هذا المشروع إلى جمع وتوثيق ونشر أعمال الإمام أحمد بن يحيى الونشريسي، أحد أعلام الفقه المالكي في المغرب الإسلامي. نوفر مكتبة رقمية شاملة، أدوات بحث متقدمة، ومحرك ذكاء اصطناعي لتحليل النوازل الفقهية.",
        
        // Services Section
        services_title: "خدماتنا",
        service1_title: "المكتبة الرقمية",
        service1_desc: "مجموعة شاملة من مؤلفات الونشريسي والدراسات المتعلقة بها",
        service2_title: "تحميل المؤلفات",
        service2_desc: "رفع وتحميل المخطوطات والدراسات الجديدة",
        service3_title: "التحقق من النصوص",
        service3_desc: "أدوات متقدمة للتحقق من صحة النصوص",
        service4_title: "محرك الأفكار",
        service4_desc: "ذكاء اصطناعي لتحليل القضايا الفقهية",
        service5_title: "مطابقة النوازل",
        service5_desc: "مقارنة وتحليل النوازل الفقهية",
        service6_title: "مقالات ASJP",
        service6_desc: "تنظيم المقالات البحثية من البوابة الجزائرية",
        
        // Statistics
        stats_title: "إحصائيات المشروع",
        stats_books: "كتاب",
        stats_studies: "دراسة",
        stats_nawazil: "نازلة",
        stats_researchers: "باحث",
        
        // Features
        features_title: "مميزات المنصة",
        feature1_title: "بحث متقدم",
        feature1_desc: "أدوات بحث قوية للعثور على المحتوى بسهولة",
        feature2_title: "تحليل ذكي",
        feature2_desc: "محرك ذكاء اصطناعي لتحليل النصوص الفقهية",
        feature3_title: "واجهة سهلة",
        feature3_desc: "تصميم حديث وسهل الاستخدام",
        feature4_title: "محتوى موثوق",
        feature4_desc: "مصادر محققة ومراجعة من قبل الخبراء",
        
        // Footer
        footer_about: "عن المشروع",
        footer_about_text: "منصة رقمية شاملة لدراسة وتوثيق أعمال الإمام الونشريسي",
        footer_quick_links: "روابط سريعة",
        footer_contact: "تواصل معنا",
        footer_email: "البريد الإلكتروني",
        footer_phone: "الهاتف",
        footer_address: "العنوان",
        footer_copyright: "جميع الحقوق محفوظة © 2026 - مشروع الإمام الونشريسي",
        
        // Library Page
        library_title: "المكتبة الرقمية",
        library_subtitle: "مجموعة شاملة من مؤلفات الإمام الونشريسي والدراسات المتعلقة بها",
        search_placeholder: "ابحث في المكتبة...",
        filter_all: "الكل",
        filter_books: "الكتب",
        filter_articles: "المقالات",
        filter_theses: "الرسائل الجامعية",
        filter_manuscripts: "المخطوطات",
        sort_title: "العنوان",
        sort_author: "المؤلف",
        sort_year_new: "الأحدث",
        sort_year_old: "الأقدم",
        category: "التصنيف",
        author: "المؤلف",
        year: "السنة",
        pages: "الصفحات",
        publisher: "الناشر",
        language: "اللغة",
        keywords: "الكلمات المفتاحية",
        description: "الوصف",
        view_study: "عرض",
        download_study: "تحميل",
        edit_study: "تعديل",
        delete_study: "حذف",
        no_results: "لا توجد نتائج",
        
        // Upload Page
        upload_title: "تحميل المؤلفات والدراسات",
        upload_subtitle: "ساهم في إثراء المكتبة الرقمية بتحميل المخطوطات والدراسات",
        upload_form_title: "نموذج تحميل الدراسة",
        upload_type: "نوع المؤلف",
        upload_type_book: "كتاب",
        upload_type_article: "مقال",
        upload_type_thesis: "رسالة جامعية",
        upload_type_manuscript: "مخطوط",
        upload_title_label: "عنوان المؤلف",
        upload_author_label: "اسم المؤلف",
        upload_year_label: "سنة النشر",
        upload_pages_label: "عدد الصفحات",
        upload_publisher_label: "دار النشر",
        upload_category_label: "التصنيف",
        upload_category_fiqh: "فقه",
        upload_category_usul: "أصول الفقه",
        upload_category_fatwas: "فتاوى",
        upload_category_nawazil: "نوازل",
        upload_category_biography: "سيرة وتراجم",
        upload_category_other: "أخرى",
        upload_description_label: "وصف المؤلف",
        upload_language_label: "اللغة",
        upload_language_ar: "العربية",
        upload_language_fr: "الفرنسية",
        upload_language_en: "الإنجليزية",
        upload_keywords_label: "الكلمات المفتاحية",
        upload_url_label: "رابط المؤلف",
        upload_file_label: "ملف المؤلف (PDF)",
        upload_submit: "تحميل الدراسة",
        upload_required: "هذا الحقل مطلوب",
        
        // Review Section
        review_section_title: "الدراسات المحملة (قيد المراجعة)",
        review_pending: "قيد المراجعة",
        review_add_to_library: "إضافة للمكتبة",
        review_delete: "حذف",
        review_discussion: "النقاش والتعليقات",
        review_add_comment: "إضافة تعليق",
        review_submit_comment: "إرسال",
        
        // Expert Reports
        expert_reports_title: "تقارير الخبراء",
        expert_generate_human: "إنشاء تقرير خبير بشري",
        expert_generate_ai: "إنشاء جميع تقارير الذكاء الاصطناعي",
        expert_no_reports: "لا توجد تقارير بعد",
        expert_rating: "التقييم",
        expert_strengths: "نقاط القوة",
        expert_weaknesses: "نقاط الضعف",
        expert_suggestions: "الاقتراحات",
        expert_recommendation: "التوصية",
        expert_export_pdf: "تصدير كـ PDF",
        expert_print: "طباعة",
        expert_summary: "تقرير ملخص",
        
        // ASJP Articles Page
        asjp_title: "مقالات ASJP عن الونشريسي",
        asjp_subtitle: "تنظيم وإدارة المقالات من البوابة الجزائرية للمجلات العلمية",
        asjp_portal_link: "زيارة بوابة ASJP",
        asjp_search_link: "البحث المباشر",
        asjp_stats_total: "إجمالي المقالات",
        asjp_stats_authors: "عدد الباحثين",
        asjp_stats_latest: "أحدث سنة نشر",
        asjp_stats_links: "مقالات بروابط",
        asjp_form_title: "إضافة مقال جديد",
        asjp_url: "رابط المقال",
        asjp_title_label: "عنوان المقال",
        asjp_author_label: "اسم الباحث",
        asjp_journal: "اسم المجلة",
        asjp_year_label: "سنة النشر",
        asjp_volume: "المجلد",
        asjp_issue: "العدد",
        asjp_pages_label: "الصفحات",
        asjp_abstract: "الملخص",
        asjp_keywords_label: "الكلمات المفتاحية",
        asjp_language_label: "اللغة",
        asjp_save_article: "حفظ المقال",
        asjp_articles_list: "قائمة المقالات",
        asjp_search_placeholder: "ابحث في المقالات...",
        asjp_filter_year: "تصفية حسب السنة",
        asjp_all_years: "جميع السنوات",
        asjp_filter_language: "تصفية حسب اللغة",
        asjp_all_languages: "جميع اللغات",
        asjp_export_all: "تصدير الكل للمكتبة",
        asjp_export_json: "تنزيل JSON",
        asjp_view_article: "عرض",
        asjp_edit_article: "تعديل",
        asjp_export_article: "تصدير",
        asjp_delete_article: "حذف",
        asjp_published_in: "منشور في",
        asjp_no_articles: "لا توجد مقالات بعد",
        asjp_guide_title: "دليل الاستخدام",
        asjp_guide_step1: "ابحث عن 'الونشريسي' في",
        asjp_guide_step2: "انسخ بيانات المقال من الموقع",
        asjp_guide_step3: "أضف البيانات في النموذج أعلاه",
        asjp_guide_step4: "صدّر المقالات للمكتبة الرقمية",
        
        // Edit Modal
        edit_modal_title: "تعديل الدراسة",
        edit_close: "إغلاق",
        edit_save: "حفظ التعديلات",
        
        // Notifications
        notification_success: "تم بنجاح!",
        notification_added_to_library: "تمت الإضافة للمكتبة",
        notification_deleted: "تم الحذف",
        notification_updated: "تم التحديث",
        notification_error: "حدث خطأ",
        
        // Common
        search: "بحث",
        filter: "تصفية",
        sort: "ترتيب",
        close: "إغلاق",
        save: "حفظ",
        cancel: "إلغاء",
        edit: "تعديل",
        delete: "حذف",
        view: "عرض",
        download: "تحميل",
        export: "تصدير",
        loading: "جاري التحميل...",
        confirm_delete: "هل أنت متأكد من الحذف؟"
    },
    
    en: {
        // Navigation
        nav_home: "Home",
        nav_library: "Digital Library",
        nav_asjp: "ASJP Articles",
        nav_upload: "Upload Works",
        nav_verification: "Text Verification",
        nav_ai_engine: "Ideas Engine",
        nav_matching: "Nawazil Matching",
        
        // Main Page
        site_title: "Imam Ahmad ibn Yahya Al-Wansharisi",
        site_subtitle: "Comprehensive Digital Platform for Imam Al-Wansharisi's Works",
        hero_title: "Welcome to Al-Wansharisi Digital Platform",
        hero_description: "Explore the rich jurisprudential heritage of Imam Ahmad ibn Yahya Al-Wansharisi through a comprehensive digital library and advanced research tools",
        explore_library: "Explore Library",
        
        // About Section
        about_title: "About the Project",
        about_description: "This project aims to collect, document, and disseminate the works of Imam Ahmad ibn Yahya Al-Wansharisi, one of the leading scholars of Maliki jurisprudence in the Islamic Maghreb. We provide a comprehensive digital library, advanced research tools, and an AI engine for analyzing jurisprudential issues.",
        
        // Services Section
        services_title: "Our Services",
        service1_title: "Digital Library",
        service1_desc: "Comprehensive collection of Al-Wansharisi's works and related studies",
        service2_title: "Upload Works",
        service2_desc: "Upload and share new manuscripts and studies",
        service3_title: "Text Verification",
        service3_desc: "Advanced tools for verifying text authenticity",
        service4_title: "Ideas Engine",
        service4_desc: "AI-powered analysis of jurisprudential issues",
        service5_title: "Nawazil Matching",
        service5_desc: "Compare and analyze jurisprudential cases",
        service6_title: "ASJP Articles",
        service6_desc: "Organize research articles from Algerian portal",
        
        // Statistics
        stats_title: "Project Statistics",
        stats_books: "Books",
        stats_studies: "Studies",
        stats_nawazil: "Nawazil",
        stats_researchers: "Researchers",
        
        // Features
        features_title: "Platform Features",
        feature1_title: "Advanced Search",
        feature1_desc: "Powerful search tools to find content easily",
        feature2_title: "Smart Analysis",
        feature2_desc: "AI engine for analyzing jurisprudential texts",
        feature3_title: "Easy Interface",
        feature3_desc: "Modern and user-friendly design",
        feature4_title: "Reliable Content",
        feature4_desc: "Verified sources reviewed by experts",
        
        // Footer
        footer_about: "About",
        footer_about_text: "Comprehensive digital platform for studying and documenting Imam Al-Wansharisi's works",
        footer_quick_links: "Quick Links",
        footer_contact: "Contact Us",
        footer_email: "Email",
        footer_phone: "Phone",
        footer_address: "Address",
        footer_copyright: "All Rights Reserved © 2026 - Al-Wansharisi Project",
        
        // Library Page
        library_title: "Digital Library",
        library_subtitle: "Comprehensive collection of Imam Al-Wansharisi's works and related studies",
        search_placeholder: "Search in library...",
        filter_all: "All",
        filter_books: "Books",
        filter_articles: "Articles",
        filter_theses: "Theses",
        filter_manuscripts: "Manuscripts",
        sort_title: "Title",
        sort_author: "Author",
        sort_year_new: "Newest",
        sort_year_old: "Oldest",
        category: "Category",
        author: "Author",
        year: "Year",
        pages: "Pages",
        publisher: "Publisher",
        language: "Language",
        keywords: "Keywords",
        description: "Description",
        view_study: "View",
        download_study: "Download",
        edit_study: "Edit",
        delete_study: "Delete",
        no_results: "No results found",
        
        // Upload Page
        upload_title: "Upload Works and Studies",
        upload_subtitle: "Contribute to enriching the digital library by uploading manuscripts and studies",
        upload_form_title: "Study Upload Form",
        upload_type: "Work Type",
        upload_type_book: "Book",
        upload_type_article: "Article",
        upload_type_thesis: "Thesis",
        upload_type_manuscript: "Manuscript",
        upload_title_label: "Work Title",
        upload_author_label: "Author Name",
        upload_year_label: "Publication Year",
        upload_pages_label: "Number of Pages",
        upload_publisher_label: "Publisher",
        upload_category_label: "Category",
        upload_category_fiqh: "Jurisprudence",
        upload_category_usul: "Principles of Jurisprudence",
        upload_category_fatwas: "Fatwas",
        upload_category_nawazil: "Nawazil",
        upload_category_biography: "Biography",
        upload_category_other: "Other",
        upload_description_label: "Work Description",
        upload_language_label: "Language",
        upload_language_ar: "Arabic",
        upload_language_fr: "French",
        upload_language_en: "English",
        upload_keywords_label: "Keywords",
        upload_url_label: "Work URL",
        upload_file_label: "Work File (PDF)",
        upload_submit: "Upload Study",
        upload_required: "This field is required",
        
        // Review Section
        review_section_title: "Uploaded Studies (Under Review)",
        review_pending: "Under Review",
        review_add_to_library: "Add to Library",
        review_delete: "Delete",
        review_discussion: "Discussion & Comments",
        review_add_comment: "Add Comment",
        review_submit_comment: "Submit",
        
        // Expert Reports
        expert_reports_title: "Expert Reports",
        expert_generate_human: "Generate Human Expert Report",
        expert_generate_ai: "Generate All AI Reports",
        expert_no_reports: "No reports yet",
        expert_rating: "Rating",
        expert_strengths: "Strengths",
        expert_weaknesses: "Weaknesses",
        expert_suggestions: "Suggestions",
        expert_recommendation: "Recommendation",
        expert_export_pdf: "Export as PDF",
        expert_print: "Print",
        expert_summary: "Summary Report",
        
        // ASJP Articles Page
        asjp_title: "ASJP Articles about Al-Wansharisi",
        asjp_subtitle: "Organize and manage articles from the Algerian Scientific Journals Portal",
        asjp_portal_link: "Visit ASJP Portal",
        asjp_search_link: "Direct Search",
        asjp_stats_total: "Total Articles",
        asjp_stats_authors: "Number of Researchers",
        asjp_stats_latest: "Latest Publication Year",
        asjp_stats_links: "Articles with Links",
        asjp_form_title: "Add New Article",
        asjp_url: "Article URL",
        asjp_title_label: "Article Title",
        asjp_author_label: "Researcher Name",
        asjp_journal: "Journal Name",
        asjp_year_label: "Publication Year",
        asjp_volume: "Volume",
        asjp_issue: "Issue",
        asjp_pages_label: "Pages",
        asjp_abstract: "Abstract",
        asjp_keywords_label: "Keywords",
        asjp_language_label: "Language",
        asjp_save_article: "Save Article",
        asjp_articles_list: "Articles List",
        asjp_search_placeholder: "Search in articles...",
        asjp_filter_year: "Filter by Year",
        asjp_all_years: "All Years",
        asjp_filter_language: "Filter by Language",
        asjp_all_languages: "All Languages",
        asjp_export_all: "Export All to Library",
        asjp_export_json: "Download JSON",
        asjp_view_article: "View",
        asjp_edit_article: "Edit",
        asjp_export_article: "Export",
        asjp_delete_article: "Delete",
        asjp_published_in: "Published in",
        asjp_no_articles: "No articles yet",
        asjp_guide_title: "Usage Guide",
        asjp_guide_step1: "Search for 'Al-Wansharisi' in",
        asjp_guide_step2: "Copy article data from the website",
        asjp_guide_step3: "Add the data in the form above",
        asjp_guide_step4: "Export articles to the digital library",
        
        // Edit Modal
        edit_modal_title: "Edit Study",
        edit_close: "Close",
        edit_save: "Save Changes",
        
        // Notifications
        notification_success: "Success!",
        notification_added_to_library: "Added to library",
        notification_deleted: "Deleted",
        notification_updated: "Updated",
        notification_error: "An error occurred",
        
        // Common
        search: "Search",
        filter: "Filter",
        sort: "Sort",
        close: "Close",
        save: "Save",
        cancel: "Cancel",
        edit: "Edit",
        delete: "Delete",
        view: "View",
        download: "Download",
        export: "Export",
        loading: "Loading...",
        confirm_delete: "Are you sure you want to delete?"
    }
};

// نظام إدارة اللغة
// Language Management System

class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('wancharisi_language') || 'ar';
        this.initLanguage();
    }
    
    initLanguage() {
        // تطبيق اللغة على الصفحة
        this.applyLanguage(this.currentLang);
        
        // تحديث زر اللغة
        this.updateLanguageButton();
        
        // إضافة مستمع للأحداث
        this.attachEventListeners();
    }
    
    applyLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('wancharisi_language', lang);
        
        // تطبيق اتجاه النص
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        
        // تطبيق الترجمة على جميع العناصر
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                // تحديد نوع العنصر
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.type === 'submit' || element.type === 'button') {
                        element.value = translations[lang][key];
                    } else {
                        element.placeholder = translations[lang][key];
                    }
                } else if (element.tagName === 'SELECT') {
                    // للعناصر select، نترجم العنوان فقط
                    element.setAttribute('aria-label', translations[lang][key]);
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        
        // تطبيق الترجمة على العناصر بـ placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });
        
        // تطبيق الترجمة على title attributes
        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            if (translations[lang] && translations[lang][key]) {
                element.title = translations[lang][key];
            }
        });
    }
    
    toggleLanguage() {
        const newLang = this.currentLang === 'ar' ? 'en' : 'ar';
        this.applyLanguage(newLang);
        this.updateLanguageButton();
    }
    
    updateLanguageButton() {
        const langBtn = document.getElementById('languageToggle');
        if (langBtn) {
            langBtn.textContent = this.currentLang === 'ar' ? 'EN' : 'عربي';
            langBtn.setAttribute('aria-label', 
                this.currentLang === 'ar' ? 'Switch to English' : 'التبديل للعربية'
            );
        }
    }
    
    attachEventListeners() {
        const langBtn = document.getElementById('languageToggle');
        if (langBtn) {
            langBtn.addEventListener('click', () => this.toggleLanguage());
        }
    }
    
    getCurrentLanguage() {
        return this.currentLang;
    }
    
    translate(key) {
        return translations[this.currentLang]?.[key] || key;
    }
}

// تهيئة نظام اللغة عند تحميل الصفحة
// Initialize language system on page load
let languageManager;

document.addEventListener('DOMContentLoaded', function() {
    languageManager = new LanguageManager();
});

// دالة مساعدة للوصول السريع للترجمة
// Helper function for quick translation access
function t(key) {
    return languageManager ? languageManager.translate(key) : key;
}
