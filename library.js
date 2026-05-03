// قائمة الكتب في المكتبة (مؤلفات الونشريسي)
const books = [
    {
        id: 1,
        title: 'المعيار المعرب والجامع المغرب',
        subtitle: 'عن فتاوى أهل إفريقية والأندلس والمغرب',
        author: 'الإمام أحمد بن يحيى الونشريسي',
        volumes: '13 مجلد',
        pages: '6000+',
        description: 'موسوعة ضخمة في النوازل الفقهية، تجمع فتاوى علماء المالكية في المغرب والأندلس',
        filename: 'Noor-Book.com  المعيار المعرب ج 2 3 .pdf',
        category: 'فقه النوازل'
    },
    {
        id: 2,
        title: 'إيضاح المسالك إلى قواعد الإمام مالك',
        subtitle: 'تحقيق: الغرياني',
        author: 'الإمام أحمد بن يحيى الونشريسي',
        volumes: '1 مجلد',
        pages: '400+',
        description: 'كتاب في القواعد الفقهية على مذهب الإمام مالك، يوضح المسالك والطرق الفقهية',
        filename: 'Noor-Book.com  إيضاح المسالك إلى قواعد الإمام أبي عبد الله مالك ت الغرياني.pdf',
        category: 'القواعد الفقهية'
    },
    {
        id: 3,
        title: 'المنهج الفائق والمنهل الرائق',
        subtitle: 'والمعنى اللائق بآداب الموثق وأحكام الوثائق',
        author: 'الإمام أحمد بن يحيى الونشريسي',
        volumes: '2 مجلد',
        pages: '800+',
        description: 'موسوعة في علم الوثائق والمحررات الشرعية، يتناول آداب التوثيق وأحكامه',
        filename: 'Noor-Book.com  المنهج الفائق والمنهل الرائق والمعنى اللائق بآداب الموثق وأحكام الوثائق 2 .pdf',
        category: 'الوثائق والمحررات'
    },
    {
        id: 4,
        title: 'النوازل الجامعة',
        subtitle: 'أو نوازل الجامع',
        author: 'الإمام أحمد بن يحيى الونشريسي',
        volumes: '3 مجلدات',
        pages: '1200+',
        description: 'مجموع النوازل والفتاوى الفقهية التي جمعها الإمام الونشريسي',
        filename: 'Noor-Book.com  النوازل الجامعة أو نوازل الجامع 3 .pdf',
        category: 'فقه النوازل'
    },
    {
        id: 5,
        title: 'عدة البروق في جمع ما في المذهب من الجموع والفروق',
        subtitle: 'في الفقه المالكي',
        author: 'الإمام أحمد بن يحيى الونشريسي',
        volumes: '2 مجلد',
        pages: '600+',
        description: 'كتاب في الفروق الفقهية والجموع في المذهب المالكي',
        filename: 'Noor-Book.com  عدة البروق في جمع ما في المذهب من الجموع والفروق 2 .pdf',
        category: 'الفروق الفقهية'
    },
    {
        id: 6,
        title: 'وفيات الونشريسي',
        subtitle: 'تراجم وسير',
        author: 'الإمام أحمد بن يحيى الونشريسي',
        volumes: '2 مجلد',
        pages: '500+',
        description: 'كتاب في التراجم والسير، يتناول وفيات العلماء والأعلام',
        filename: 'Noor-Book.com  وفيات الونشريسي 2 .pdf',
        category: 'التراجم والسير'
    }
];

// قائمة الدراسات والأبحاث عن الونشريسي
const studies = [
    {
        id: 1,
        title: 'الإمام الونشريسي وجهوده الفقهية',
        author: 'د. محمد العلمي',
        type: 'كتاب',
        year: '2020',
        pages: '350',
        description: 'دراسة شاملة عن حياة الإمام الونشريسي ومنهجه الفقهي ومكانته العلمية في المدرسة المالكية',
        publisher: 'دار الكتب العلمية',
        category: 'دراسات عامة',
        url: '', // يضاف لاحقاً
        filename: '', // يضاف لاحقاً
        hasFile: false
    },
    {
        id: 2,
        title: 'منهج الونشريسي في المعيار المعرب',
        author: 'د. عبد الرحمن الجيلاني',
        type: 'مقال',
        year: '2019',
        pages: '45',
        description: 'بحث يتناول المنهج الذي اتبعه الونشريسي في تأليف كتابه المعيار المعرب وطريقة جمعه للفتاوى',
        publisher: 'مجلة الدراسات الفقهية',
        category: 'دراسات منهجية',
        url: '',
        filename: '',
        hasFile: false
    },
    {
        id: 3,
        title: 'النوازل الفقهية عند الونشريسي وأثرها المعاصر',
        author: 'د. فاطمة الزهراء بن علي',
        type: 'أطروحة دكتوراه',
        year: '2021',
        pages: '500',
        description: 'دراسة أكاديمية تحليلية للنوازل الفقهية في المعيار وإمكانية الاستفادة منها في حل القضايا المعاصرة',
        publisher: 'جامعة الزيتونة',
        category: 'دراسات فقهية',
        url: '',
        filename: '',
        hasFile: false
    },
    {
        id: 4,
        title: 'الونشريسي والحياة الاجتماعية في المغرب الإسلامي',
        author: 'د. أحمد التازي',
        type: 'كتاب',
        year: '2018',
        pages: '280',
        description: 'دراسة تاريخية اجتماعية تستخرج من فتاوى المعيار صورة الحياة الاجتماعية والاقتصادية في عصر الونشريسي',
        publisher: 'منشورات كلية الآداب',
        category: 'دراسات تاريخية',
        url: '',
        filename: '',
        hasFile: false
    },
    {
        id: 5,
        title: 'القواعد الفقهية في كتاب إيضاح المسالك',
        author: 'د. محمد الغرياني',
        type: 'مقال',
        year: '2022',
        pages: '60',
        description: 'تحليل للقواعد الفقهية التي استنبطها الونشريسي من مذهب الإمام مالك وطريقة عرضها',
        publisher: 'مجلة البحوث الفقهية المعاصرة',
        category: 'دراسات فقهية',
        url: '',
        filename: '',
        hasFile: false
    },
    {
        id: 6,
        title: 'أعمال الملتقى الدولي حول الإمام الونشريسي',
        author: 'مجموعة باحثين',
        type: 'ملتقى',
        year: '2023',
        pages: '800',
        description: 'مجموع أعمال الملتقى الدولي المنعقد بتلمسان حول الإمام الونشريسي وإسهاماته العلمية',
        publisher: 'جامعة تلمسان',
        category: 'ملتقيات ومؤتمرات',
        url: '',
        filename: '',
        hasFile: false
    }
];

// متغيرات عارض PDF
let pdfDoc = null;
let pageNum = 1;
let pageRendering = false;
let pageNumPending = null;
let scale = 1.5;
let currentBookPath = '';

// تهيئة المكتبة
document.addEventListener('DOMContentLoaded', function() {
    renderBooks();
    renderStudies();
    initViewer();
});

// عرض الكتب في الشبكة
function renderBooks() {
    const booksGrid = document.getElementById('booksGrid');
    
    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <div class="book-cover">
                <div class="book-icon">
                    <i class="fas fa-book"></i>
                </div>
                <div class="book-title">${book.title}</div>
            </div>
            <div class="book-info">
                <div class="book-meta">
                    <span><i class="fas fa-book-open"></i> ${book.volumes}</span>
                    <span><i class="fas fa-file-pdf"></i> ${book.pages} صفحة</span>
                </div>
                <p class="book-description">${book.description}</p>
                <div class="book-actions">
                    <button class="btn-view" onclick="openBook(${book.id})">
                        <i class="fas fa-eye"></i>
                        عرض الكتاب
                    </button>
                    <button class="btn-download" onclick="downloadBook(${book.id})">
                        <i class="fas fa-download"></i>
                    </button>
                </div>
            </div>
        `;
        
        booksGrid.appendChild(bookCard);
    });
}

// دالة مساعدة لجلب جميع الدراسات (التجريبية + المضافة من نظام الرفع)
function getAllStudies() {
    const libraryStudies = JSON.parse(localStorage.getItem('wancharisi_library_studies') || '[]');
    return [...studies, ...libraryStudies];
}

// عرض الدراسات في الشبكة
function renderStudies() {
    const studiesGrid = document.getElementById('studiesGrid');
    if (!studiesGrid) return; // إذا لم يكن العنصر موجوداً بعد
    
    // جلب جميع الدراسات
    const allStudies = getAllStudies();
    
    // مسح المحتوى السابق
    studiesGrid.innerHTML = '';
    
    allStudies.forEach(study => {
        const studyCard = document.createElement('div');
        studyCard.className = 'study-card';
        
        // تحديد أيقونة حسب نوع الدراسة
        let icon = 'fa-book';
        if (study.type === 'مقال') icon = 'fa-file-alt';
        else if (study.type === 'أطروحة دكتوراه') icon = 'fa-graduation-cap';
        else if (study.type === 'ملتقى') icon = 'fa-users';
        
        // إضافة معرف الدراسة للبطاقة
        studyCard.setAttribute('data-study-id', study.id);
        
        studyCard.innerHTML = `
            <div class="study-header" data-type="${study.type}">
                <div class="study-icon">
                    <i class="fas ${icon}"></i>
                </div>
                <div class="study-type-badge">${study.type}</div>
            </div>
            <div class="study-content">
                <h3 class="study-title">${study.title}</h3>
                <div class="study-meta">
                    <span><i class="fas fa-user"></i> ${study.author}</span>
                    <span><i class="fas fa-calendar"></i> ${study.year}</span>
                </div>
                <div class="study-meta">
                    <span><i class="fas fa-file-pdf"></i> ${study.pages} صفحة</span>
                    <span><i class="fas fa-tag"></i> ${study.category}</span>
                </div>
                <p class="study-description">${study.description}</p>
                <div class="study-publisher">
                    <i class="fas fa-building"></i> ${study.publisher}
                </div>
                ${study.url ? `
                <div class="study-url">
                    <i class="fas fa-link"></i> <a href="${study.url}" target="_blank" rel="noopener noreferrer">الرابط الإلكتروني</a>
                </div>
                ` : ''}
                <div class="study-actions">
                    ${study.hasFile ? `
                        <button class="btn-study-view" onclick="openStudy(${study.id})">
                            <i class="fas fa-eye"></i> عرض
                        </button>
                        <button class="btn-study-download" onclick="downloadStudy(${study.id})">
                            <i class="fas fa-download"></i> تحميل
                        </button>
                    ` : `
                        <button class="btn-study-request" onclick="requestStudy(${study.id})">
                            <i class="fas fa-envelope"></i> طلب النسخة
                        </button>
                    `}
                    ${study.isUploaded ? `
                        <button class="btn-study-edit" onclick="editStudy(${study.id})">
                            <i class="fas fa-edit"></i> تعديل
                        </button>
                        <button class="btn-study-delete" onclick="deleteStudy(${study.id})">
                            <i class="fas fa-trash"></i> حذف
                        </button>
                    ` : ''}
                </div>
            </div>
        `;
        
        studiesGrid.appendChild(studyCard);
    });
}

// طلب نسخة من دراسة
function requestStudy(studyId) {
    const allStudies = getAllStudies();
    const study = allStudies.find(s => s.id === studyId);
    if (!study) return;
    
    // عرض نموذج طلب
    const userEmail = prompt(`طلب نسخة من:\n"${study.title}"\n\nالرجاء إدخال بريدك الإلكتروني ليتم إرسال الدراسة عند توفرها:`);
    
    if (userEmail && validateEmail(userEmail)) {
        // حفظ الطلب (يمكن إرساله إلى خادم لاحقاً)
        const request = {
            studyId: study.id,
            studyTitle: study.title,
            userEmail: userEmail,
            requestDate: new Date().toISOString()
        };
        
        // حفظ في localStorage مؤقتاً
        let requests = JSON.parse(localStorage.getItem('wancharisi_study_requests') || '[]');
        requests.push(request);
        localStorage.setItem('wancharisi_study_requests', JSON.stringify(requests));
        
        alert(`✅ تم تسجيل طلبك بنجاح!\n\nسيتم إرسال الدراسة إلى: ${userEmail}\nعند توفرها.`);
    } else if (userEmail) {
        alert('⚠️ البريد الإلكتروني غير صحيح. الرجاء المحاولة مرة أخرى.');
    }
}

// التحقق من صحة البريد الإلكتروني
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// فتح دراسة
function openStudy(studyId) {
    const allStudies = getAllStudies();
    const study = allStudies.find(s => s.id === studyId);
    if (!study || !study.hasFile) return;
    
    // التحقق من نوع الدراسة
    if (study.fileData) {
        // دراسة مرفوعة - استخدام fileData (base64)
        window.open(study.fileData, '_blank');
    } else {
        // دراسة تجريبية - استخدام المسار الفعلي
        const studyPath = `الدراسات عن الونشريسي/${study.filename}`;
        window.open(studyPath, '_blank');
    }
}

// تحميل دراسة
function downloadStudy(studyId) {
    const allStudies = getAllStudies();
    const study = allStudies.find(s => s.id === studyId);
    if (!study || !study.hasFile) return;
    
    // إنشاء رابط تحميل
    const link = document.createElement('a');
    
    // التحقق من نوع الدراسة
    if (study.fileData) {
        // دراسة مرفوعة - استخدام fileData (base64)
        link.href = study.fileData;
    } else {
        // دراسة تجريبية - استخدام المسار الفعلي
        link.href = `الدراسات عن الونشريسي/${study.filename}`;
    }
    
    link.download = study.filename;
    
    // تتبع التحميلات
    let downloads = JSON.parse(localStorage.getItem('wancharisi_downloads') || '[]');
    downloads.push({
        studyId: study.id,
        studyTitle: study.title,
        downloadDate: new Date().toISOString(),
        type: 'study'
    });
    localStorage.setItem('wancharisi_downloads', JSON.stringify(downloads));
    
    // تنفيذ التحميل
    link.click();
    
    // رسالة نجاح
    showDownloadNotification(study.title);
}

// إظهار إشعار التحميل
function showDownloadNotification(title) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%);
        color: white;
        padding: 20px 30px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 350px;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 15px;">
            <i class="fas fa-check-circle" style="font-size: 24px;"></i>
            <div>
                <div style="font-weight: bold; margin-bottom: 5px;">جاري التحميل...</div>
                <div style="font-size: 14px; opacity: 0.9;">${title}</div>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // إزالة الإشعار بعد 3 ثواني
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// فتح الكتاب في عارض PDF
async function openBook(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;
    
    // تحديث عنوان العارض
    document.getElementById('viewerTitle').textContent = book.title;
    
    // مسار الكتاب
    currentBookPath = `مؤلفات الونشريسي/${book.filename}`;
    
    // إظهار العارض
    document.getElementById('bookViewer').classList.add('active');
    
    // تحميل PDF
    try {
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        
        const loadingTask = pdfjsLib.getDocument(currentBookPath);
        pdfDoc = await loadingTask.promise;
        
        document.getElementById('totalPages').textContent = pdfDoc.numPages;
        pageNum = 1;
        
        // عرض الصفحة الأولى
        renderPage(pageNum);
    } catch (error) {
        console.error('خطأ في تحميل الكتاب:', error);
        alert('عذراً، حدث خطأ في تحميل الكتاب. تأكد من وجود الملف في المسار الصحيح.');
        closeViewer();
    }
}

// عرض صفحة من PDF
function renderPage(num) {
    pageRendering = true;
    
    pdfDoc.getPage(num).then(function(page) {
        const canvas = document.getElementById('pdfCanvas');
        const ctx = canvas.getContext('2d');
        const viewport = page.getViewport({ scale: scale });
        
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        
        const renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };
        
        const renderTask = page.render(renderContext);
        
        renderTask.promise.then(function() {
            pageRendering = false;
            
            if (pageNumPending !== null) {
                renderPage(pageNumPending);
                pageNumPending = null;
            }
        });
    });
    
    // تحديث رقم الصفحة
    document.getElementById('currentPage').textContent = num;
    
    // تحديث أزرار التنقل
    document.getElementById('prevPage').disabled = (num <= 1);
    document.getElementById('nextPage').disabled = (num >= pdfDoc.numPages);
}

// طلب عرض صفحة
function queueRenderPage(num) {
    if (pageRendering) {
        pageNumPending = num;
    } else {
        renderPage(num);
    }
}

// الصفحة السابقة
function onPrevPage() {
    if (pageNum <= 1) return;
    pageNum--;
    queueRenderPage(pageNum);
}

// الصفحة التالية
function onNextPage() {
    if (pageNum >= pdfDoc.numPages) return;
    pageNum++;
    queueRenderPage(pageNum);
}

// تكبير
function zoomIn() {
    scale += 0.25;
    queueRenderPage(pageNum);
}

// تصغير
function zoomOut() {
    if (scale <= 0.5) return;
    scale -= 0.25;
    queueRenderPage(pageNum);
}

// ملء الشاشة
function toggleFullscreen() {
    const viewer = document.getElementById('bookViewer');
    
    if (!document.fullscreenElement) {
        viewer.requestFullscreen().catch(err => {
            console.error('خطأ في الدخول لوضع ملء الشاشة:', err);
        });
    } else {
        document.exitFullscreen();
    }
}

// إغلاق العارض
function closeViewer() {
    document.getElementById('bookViewer').classList.remove('active');
    pdfDoc = null;
    pageNum = 1;
    scale = 1.5;
    currentBookPath = '';
}

// تحميل الكتاب
function downloadBook(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;
    
    const link = document.createElement('a');
    link.href = `مؤلفات الونشريسي/${book.filename}`;
    link.download = book.filename;
    link.click();
}

// تهيئة العارض والأحداث
function initViewer() {
    // زر الإغلاق
    document.getElementById('closeViewer').addEventListener('click', closeViewer);
    
    // أزرار التنقل
    document.getElementById('prevPage').addEventListener('click', onPrevPage);
    document.getElementById('nextPage').addEventListener('click', onNextPage);
    
    // أزرار التكبير والتصغير
    document.getElementById('zoomIn').addEventListener('click', zoomIn);
    document.getElementById('zoomOut').addEventListener('click', zoomOut);
    
    // زر ملء الشاشة
    document.getElementById('fullscreen').addEventListener('click', toggleFullscreen);
    
    // اختصارات لوحة المفاتيح
    document.addEventListener('keydown', function(e) {
        if (!document.getElementById('bookViewer').classList.contains('active')) return;
        
        switch(e.key) {
            case 'ArrowRight':
                onPrevPage();
                break;
            case 'ArrowLeft':
                onNextPage();
                break;
            case '+':
            case '=':
                zoomIn();
                break;
            case '-':
                zoomOut();
                break;
            case 'Escape':
                closeViewer();
                break;
            case 'f':
            case 'F':
                toggleFullscreen();
                break;
        }
    });
    
    // زر استخراج الصفحات
    document.getElementById('extractPages').addEventListener('click', openExtractModal);
    
    // modal الاستخراج
    document.getElementById('closeExtract').addEventListener('click', closeExtractModal);
    document.getElementById('cancelExtract').addEventListener('click', closeExtractModal);
    document.getElementById('confirmExtract').addEventListener('click', confirmExtraction);
    
    // checkbox استخدام الصفحة الحالية
    document.getElementById('useCurrentPage').addEventListener('change', function(e) {
        if (e.target.checked) {
            document.getElementById('startPageInput').value = pageNum;
        }
    });
}

// فتح modal الاستخراج
function openExtractModal() {
    if (!pdfDoc) return;
    
    const modal = document.getElementById('extractModal');
    const book = books.find(b => currentBookPath.includes(b.filename));
    
    if (!book) {
        alert('خطأ: لم يتم العثور على معلومات الكتاب');
        return;
    }
    
    // تعبئة المعلومات
    document.getElementById('extractBookTitle').textContent = book.title;
    document.getElementById('extractTotalPages').textContent = pdfDoc.numPages;
    document.getElementById('extractCurrentPage').textContent = pageNum;
    
    // تعيين القيم الافتراضية
    document.getElementById('startPageInput').value = pageNum;
    document.getElementById('endPageInput').value = Math.min(pageNum + 9, pdfDoc.numPages);
    document.getElementById('startPageInput').max = pdfDoc.numPages;
    document.getElementById('endPageInput').max = pdfDoc.numPages;
    document.getElementById('useCurrentPage').checked = true;
    
    modal.style.display = 'flex';
}

// إغلاق modal الاستخراج
function closeExtractModal() {
    document.getElementById('extractModal').style.display = 'none';
}

// تأكيد الاستخراج
function confirmExtraction() {
    const startPage = parseInt(document.getElementById('startPageInput').value);
    const endPage = parseInt(document.getElementById('endPageInput').value);
    
    // التحقق من الصحة
    if (isNaN(startPage) || isNaN(endPage)) {
        alert('الرجاء إدخال أرقام صفحات صحيحة');
        return;
    }
    
    if (startPage < 1 || startPage > pdfDoc.numPages) {
        alert('رقم صفحة البداية غير صحيح');
        return;
    }
    
    if (endPage < 1 || endPage > pdfDoc.numPages) {
        alert('رقم صفحة النهاية غير صحيح');
        return;
    }
    
    if (startPage > endPage) {
        alert('صفحة البداية يجب أن تكون أقل من أو تساوي صفحة النهاية');
        return;
    }
    
    const totalPages = endPage - startPage + 1;
    if (totalPages > 100) {
        if (!confirm(`سيتم استخراج ${totalPages} صفحة. هل تريد المتابعة؟`)) {
            return;
        }
    }
    
    // الحصول على معلومات الكتاب
    const book = books.find(b => currentBookPath.includes(b.filename));
    
    // حفظ البيانات
    const extractedData = SharedData.saveExtractedPages({
        bookId: book.id,
        bookTitle: book.title,
        startPage: startPage,
        endPage: endPage,
        totalPages: totalPages,
        filename: book.filename
    });
    
    // إغلاق modal
    closeExtractModal();
    
    // رسالة نجاح
    const proceed = confirm(
        `✅ تم استخراج ${totalPages} صفحة بنجاح!\n\n` +
        `من الصفحة ${startPage} إلى ${endPage}\n` +
        `من كتاب: ${book.title}\n\n` +
        `هل تريد الانتقال إلى قسم تحميل المؤلفات لمعالجة الصفحات المستخرجة؟`
    );
    
    if (proceed) {
        // الانتقال إلى قسم التحميل
        window.location.href = 'upload.html?action=view-extracts';
    }
}

// متغيرات البحث
let currentSearchTerm = '';
let currentFilter = 'all';
let searchTimeout = null;

// تهيئة فلاتر الدراسات
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // إزالة active من كل الأزرار
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // إضافة active للزر المختار
            this.classList.add('active');
            
            // الحصول على الفلتر
            const filter = this.getAttribute('data-filter');
            currentFilter = filter;
            
            // تطبيق الفلتر مع البحث الحالي
            applyFiltersAndSearch();
        });
    });

    // تهيئة صندوق البحث
    initSearchBox();
});

// تهيئة صندوق البحث
function initSearchBox() {
    const searchInput = document.getElementById('studiesSearchInput');
    const clearBtn = document.getElementById('clearSearchBtn');
    
    if (!searchInput) return;
    
    // البحث أثناء الكتابة
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.trim();
        
        // إظهار/إخفاء زر المسح
        if (searchTerm) {
            clearBtn.classList.add('active');
        } else {
            clearBtn.classList.remove('active');
        }
        
        // تأخير البحث قليلاً لتحسين الأداء
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            currentSearchTerm = searchTerm;
            applyFiltersAndSearch();
        }, 300);
    });
    
    // زر مسح البحث
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            searchInput.value = '';
            currentSearchTerm = '';
            clearBtn.classList.remove('active');
            applyFiltersAndSearch();
            searchInput.focus();
        });
    }
    
    // البحث عند الضغط على Enter
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            currentSearchTerm = searchInput.value.trim();
            applyFiltersAndSearch();
        }
    });
}

// تطبيق الفلاتر والبحث معاً
function applyFiltersAndSearch() {
    const studyCards = document.querySelectorAll('.study-card');
    const noResults = document.getElementById('noResults');
    const searchResultsInfo = document.getElementById('searchResultsInfo');
    const resultsCount = document.getElementById('resultsCount');
    const resultsText = document.getElementById('resultsText');
    
    let visibleCount = 0;
    const searchLower = currentSearchTerm.toLowerCase();
    
    studyCards.forEach(card => {
        const studyType = card.querySelector('.study-header').getAttribute('data-type');
        const studyId = parseInt(card.getAttribute('data-study-id'));
        
        // الحصول على بيانات الدراسة
        const allStudies = getAllStudies();
        const study = allStudies.find(s => s.id === studyId);
        if (!study) return;
        
        // فحص الفلتر
        const matchesFilter = currentFilter === 'all' || studyType === currentFilter;
        
        // فحص البحث
        let matchesSearch = true;
        if (currentSearchTerm) {
            matchesSearch = 
                study.title.toLowerCase().includes(searchLower) ||
                study.author.toLowerCase().includes(searchLower) ||
                study.description.toLowerCase().includes(searchLower) ||
                study.publisher.toLowerCase().includes(searchLower) ||
                study.category.toLowerCase().includes(searchLower) ||
                study.type.toLowerCase().includes(searchLower);
        }
        
        // إظهار أو إخفاء البطاقة
        if (matchesFilter && matchesSearch) {
            card.style.display = 'flex';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 10);
            visibleCount++;
            
            // تمييز النتائج عند البحث
            if (currentSearchTerm) {
                card.classList.add('highlight');
                highlightSearchTerms(card, currentSearchTerm);
            } else {
                card.classList.remove('highlight');
                removeHighlights(card);
            }
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.classList.remove('highlight');
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
    
    // إظهار/إخفاء رسالة عدم وجود نتائج
    if (visibleCount === 0) {
        noResults.classList.add('active');
        searchResultsInfo.classList.remove('active');
    } else {
        noResults.classList.remove('active');
        
        // إظهار معلومات النتائج عند البحث
        if (currentSearchTerm) {
            searchResultsInfo.classList.add('active');
            resultsCount.textContent = `${visibleCount} ${visibleCount === 1 ? 'نتيجة' : visibleCount === 2 ? 'نتيجتان' : 'نتائج'}`;
            resultsText.textContent = `تم العثور على ${visibleCount} ${visibleCount === 1 ? 'دراسة' : visibleCount === 2 ? 'دراستان' : 'دراسات'} تحتوي على "${currentSearchTerm}"`;
        } else {
            searchResultsInfo.classList.remove('active');
        }
    }
}

// تمييز كلمات البحث في البطاقة
function highlightSearchTerms(card, searchTerm) {
    const elements = card.querySelectorAll('.study-title, .study-description, .study-meta, .study-publisher');
    const searchLower = searchTerm.toLowerCase();
    
    elements.forEach(element => {
        const originalText = element.getAttribute('data-original-text') || element.textContent;
        if (!element.getAttribute('data-original-text')) {
            element.setAttribute('data-original-text', originalText);
        }
        
        // تمييز النص
        const regex = new RegExp(`(${escapeRegex(searchTerm)})`, 'gi');
        const highlightedText = originalText.replace(regex, '<span class="highlight-text">$1</span>');
        element.innerHTML = highlightedText;
    });
}

// إزالة التمييز
function removeHighlights(card) {
    const elements = card.querySelectorAll('.study-title, .study-description, .study-meta, .study-publisher');
    
    elements.forEach(element => {
        const originalText = element.getAttribute('data-original-text');
        if (originalText) {
            element.textContent = originalText;
        }
    });
}

// تنظيف النص للبحث الآمن
function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// تصفية الدراسات حسب النوع (للتوافق مع الكود القديم)
function filterStudies(type) {
    currentFilter = type;
    applyFiltersAndSearch();
}

// ===== إدارة الدراسات المرفوعة (تعديل/حذف) =====

// تعديل دراسة
function editStudy(studyId) {
    const allStudies = getAllStudies();
    const study = allStudies.find(s => s.id === studyId && s.isUploaded);
    
    if (!study) {
        alert('⚠️ لا يمكن تعديل هذه الدراسة');
        return;
    }

    // ملء النموذج ببيانات الدراسة
    document.getElementById('editStudyId').value = study.id;
    document.getElementById('editStudyType').value = study.type;
    document.getElementById('editStudyTitle').value = study.title;
    document.getElementById('editStudyAuthor').value = study.author;
    document.getElementById('editStudyYear').value = study.year;
    document.getElementById('editStudyPages').value = study.pages;
    document.getElementById('editStudyPublisher').value = study.publisher;
    document.getElementById('editStudyCategory').value = study.category;
    document.getElementById('editStudyDescription').value = study.description;
    document.getElementById('editStudyLanguage').value = study.language || 'العربية';
    document.getElementById('editStudyKeywords').value = study.keywords || '';
    document.getElementById('editStudyUrl').value = study.url || '';

    // فتح Modal
    openEditModal();
}

// حذف دراسة
function deleteStudy(studyId) {
    const allStudies = getAllStudies();
    const study = allStudies.find(s => s.id === studyId && s.isUploaded);
    
    if (!study) {
        alert('⚠️ لا يمكن حذف هذه الدراسة');
        return;
    }

    // تأكيد الحذف
    const confirmDelete = confirm(`🗑️ هل أنت متأكد من حذف هذه الدراسة؟\n\n"${study.title}"\n\n⚠️ هذا الإجراء لا يمكن التراجع عنه!`);
    
    if (!confirmDelete) return;

    // حذف من localStorage
    let libraryStudies = JSON.parse(localStorage.getItem('wancharisi_library_studies') || '[]');
    libraryStudies = libraryStudies.filter(s => s.id !== studyId);
    localStorage.setItem('wancharisi_library_studies', JSON.stringify(libraryStudies));

    // حذف من الدراسات المرفوعة أيضاً (إن وُجدت)
    let uploadedStudies = JSON.parse(localStorage.getItem('wancharisi_uploaded_studies') || '[]');
    uploadedStudies = uploadedStudies.filter(s => s.id !== studyId);
    localStorage.setItem('wancharisi_uploaded_studies', JSON.stringify(uploadedStudies));

    // إظهار رسالة نجاح
    showSuccessNotification('✅ تم حذف الدراسة بنجاح');

    // إعادة تحميل الدراسات
    renderStudies();
}

// فتح Modal التعديل
function openEditModal() {
    document.getElementById('editModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // منع التمرير في الخلفية
}

// إغلاق Modal التعديل
function closeEditModal() {
    document.getElementById('editModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // استعادة التمرير
    document.getElementById('editStudyForm').reset();
}

// حفظ تعديلات الدراسة
function saveStudyEdit(event) {
    event.preventDefault();

    const studyId = parseInt(document.getElementById('editStudyId').value);
    
    // جمع البيانات المحدثة
    const updatedData = {
        type: document.getElementById('editStudyType').value,
        title: document.getElementById('editStudyTitle').value,
        author: document.getElementById('editStudyAuthor').value,
        year: document.getElementById('editStudyYear').value,
        pages: document.getElementById('editStudyPages').value || 'غير محدد',
        publisher: document.getElementById('editStudyPublisher').value,
        category: document.getElementById('editStudyCategory').value,
        description: document.getElementById('editStudyDescription').value,
        language: document.getElementById('editStudyLanguage').value,
        keywords: document.getElementById('editStudyKeywords').value,
        url: document.getElementById('editStudyUrl').value
    };

    // تحديث في localStorage
    let libraryStudies = JSON.parse(localStorage.getItem('wancharisi_library_studies') || '[]');
    const studyIndex = libraryStudies.findIndex(s => s.id === studyId);
    
    if (studyIndex !== -1) {
        // الاحتفاظ بالبيانات الأخرى (fileData, id, etc.)
        libraryStudies[studyIndex] = {
            ...libraryStudies[studyIndex],
            ...updatedData
        };
        localStorage.setItem('wancharisi_library_studies', JSON.stringify(libraryStudies));

        // تحديث في الدراسات المرفوعة أيضاً (إن وُجدت)
        let uploadedStudies = JSON.parse(localStorage.getItem('wancharisi_uploaded_studies') || '[]');
        const uploadedIndex = uploadedStudies.findIndex(s => s.id === studyId);
        if (uploadedIndex !== -1) {
            uploadedStudies[uploadedIndex] = {
                ...uploadedStudies[uploadedIndex],
                ...updatedData
            };
            localStorage.setItem('wancharisi_uploaded_studies', JSON.stringify(uploadedStudies));
        }

        // إظهار رسالة نجاح
        showSuccessNotification('✅ تم حفظ التعديلات بنجاح');

        // إغلاق Modal وإعادة تحميل الدراسات
        closeEditModal();
        renderStudies();

        // إعادة تطبيق الفلاتر والبحث
        applyFiltersAndSearch();
    } else {
        alert('❌ حدث خطأ في حفظ التعديلات');
    }
}

// إظهار رسالة نجاح
function showSuccessNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
        color: white;
        padding: 20px 30px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        z-index: 10000;
        font-size: 16px;
        font-weight: bold;
        animation: slideIn 0.3s ease, slideOut 0.3s ease 2.7s;
    `;
    notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// إغلاق Modal عند النقر خارجه
window.onclick = function(event) {
    const modal = document.getElementById('editModal');
    if (event.target === modal) {
        closeEditModal();
    }
}

