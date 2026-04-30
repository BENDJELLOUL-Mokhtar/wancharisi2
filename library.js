// قائمة الكتب في المكتبة
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
