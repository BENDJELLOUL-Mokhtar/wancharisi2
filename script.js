// Array عام للملفات المحملة
let uploadedFilesArray = [];

// تهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تعيين التاريخ الحالي
    const currentDate = document.getElementById('currentDate');
    if (currentDate) {
        const today = new Date();
        currentDate.textContent = today.toLocaleDateString('ar-SA');
    }

    // تحميل صورة المدير
    initDirectorPhoto();

    // شريط التنقل
    initNavigation();

    // قسم تحميل الملفات
    initFileUpload();

    // قسم التحقق من النصوص
    initVerification();

    // قسم محرك الأفكار
    initAIEngine();

    // قسم مطابقة النوازل
    initMatching();

    // التمرير السلس
    initSmoothScroll();
});

// تهيئة صورة المدير
function initDirectorPhoto() {
    const directorPhoto = document.getElementById('directorPhoto');
    if (!directorPhoto) return;

    // محاولة تحميل الصورة
    directorPhoto.addEventListener('load', function() {
        this.classList.add('loaded');
        const placeholder = this.nextElementSibling;
        if (placeholder && placeholder.classList.contains('photo-placeholder')) {
            placeholder.style.display = 'none';
        }
    });

    // في حالة عدم وجود الصورة، عرض placeholder
    directorPhoto.addEventListener('error', function() {
        this.style.display = 'none';
        const placeholder = this.nextElementSibling;
        if (placeholder && placeholder.classList.contains('photo-placeholder')) {
            placeholder.style.display = 'flex';
        }
    });

    // محاولة التحميل
    const imageSrc = directorPhoto.getAttribute('src');
    if (imageSrc) {
        directorPhoto.src = imageSrc;
    }
}

// تهيئة شريط التنقل
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('menuToggle');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // السماح بالتنقل إلى الصفحات الأخرى (.html)
            // فقط منع السلوك الافتراضي للروابط التي تبدأ بـ # (أقسام في نفس الصفحة)
            if (href && href.startsWith('#')) {
                e.preventDefault();
                
                // التمرير إلى القسم
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
            
            // إزالة active من جميع الروابط
            navLinks.forEach(l => l.classList.remove('active'));
            
            // إضافة active للرابط المضغوط
            this.classList.add('active');
        });
    });

    // قائمة الهاتف المحمول
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            const navLinksContainer = document.querySelector('.nav-links');
            if (navLinksContainer) {
                navLinksContainer.style.display = 
                    navLinksContainer.style.display === 'flex' ? 'none' : 'flex';
            }
        });
    }
}

// تهيئة قسم تحميل الملفات
function initFileUpload() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const filesList = document.getElementById('filesList');
    
    // تحميل البيانات التجريبية
    const demoFiles = localStorage.getItem('wancharisi_demo_uploaded_files');
    if (demoFiles && uploadedFilesArray.length === 0) {
        uploadedFilesArray = JSON.parse(demoFiles);
    }

    if (!uploadArea || !fileInput) return;

    // السحب والإفلات
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.style.background = 'rgba(87, 197, 182, 0.1)';
    });

    uploadArea.addEventListener('dragleave', function(e) {
        e.preventDefault();
        this.style.background = '';
    });

    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        this.style.background = '';
        
        const files = e.dataTransfer.files;
        handleFiles(files);
    });

    // اختيار الملفات
    fileInput.addEventListener('change', function(e) {
        const files = e.target.files;
        handleFiles(files);
    });

    function handleFiles(files) {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            
            // التحقق من نوع الملف
            const validTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/tiff'];
            if (!validTypes.includes(file.type) && !file.name.match(/\.(pdf|jpg|jpeg|png|tiff)$/i)) {
                alert('نوع الملف غير مدعوم: ' + file.name);
                continue;
            }

            // إضافة الملف إلى القائمة
            uploadedFilesArray.push({
                name: file.name,
                size: formatFileSize(file.size),
                type: file.type,
                date: new Date().toLocaleDateString('ar-SA')
            });
        }

        displayUploadedFiles();
        updateDocumentSelect();
    }

    function displayUploadedFiles() {
        if (uploadedFilesArray.length === 0) {
            filesList.innerHTML = '<p class="no-files">لا توجد ملفات محملة حتى الآن</p>';
            return;
        }

        filesList.innerHTML = uploadedFilesArray.map((file, index) => `
            <div class="file-item" style="display: flex; justify-content: space-between; align-items: center; 
                 padding: 1rem; background: var(--light-bg); border-radius: 8px; margin-bottom: 0.5rem;">
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <i class="fas fa-file-alt" style="font-size: 2rem; color: var(--primary-color);"></i>
                    <div>
                        <div style="font-weight: bold; color: var(--primary-color);">${file.name}</div>
                        <div style="font-size: 0.9rem; color: var(--text-light);">
                            ${file.size} • ${file.date}
                        </div>
                    </div>
                </div>
                <div style="display: flex; gap: 0.5rem;">
                    <button onclick="addToLibrary(${index})" title="إضافة إلى المكتبة الرقمية"
                            style="background: var(--accent-color); color: white; border: none; 
                            padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer; font-weight: bold;">
                        <i class="fas fa-plus-circle"></i> إلى المكتبة
                    </button>
                    <button onclick="removeFile(${index})" style="background: var(--danger); color: white; 
                            border: none; padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer;">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    // تحديث قائمة الوثائق في قسم التحقق
    function updateDocumentSelect() {
        const docSelect = document.getElementById('docSelect');
        if (!docSelect) return;

        docSelect.innerHTML = '<option value="">-- اختر وثيقة --</option>' +
            uploadedFilesArray.map((file, index) => 
                `<option value="${index}">${file.name}</option>`
            ).join('');
    }

    // إزالة ملف
    window.removeFile = function(index) {
        uploadedFilesArray.splice(index, 1);
        displayUploadedFiles();
        updateDocumentSelect();
    };

    function formatFileSize(bytes) {
        if (bytes === 0) return '0 بايت';
        const k = 1024;
        const sizes = ['بايت', 'كيلوبايت', 'ميغابايت', 'جيجابايت'];
    
    // عرض الملفات التجريبية عند التحميل
    displayUploadedFiles();
    updateDocumentSelect();
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    }
}

// تهيئة قسم التحقق من النصوص
function initVerification() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const startVerificationBtn = document.getElementById('startVerification');

    // التبويبات
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // إزالة active من جميع الأزرار والتبويبات
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // إضافة active للزر والتبويب المستهدف
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // بدء التحقق
    if (startVerificationBtn) {
        startVerificationBtn.addEventListener('click', function() {
            const docSelect = document.getElementById('docSelect');
            
            if (!docSelect || !docSelect.value) {
                alert('الرجاء اختيار وثيقة للتحقق منها');
                return;
            }

            // محاكاة عملية التحقق
            simulateVerification();
        });
    }

    function simulateVerification() {
        const progressBars = document.querySelectorAll('.progress-fill');
        const authenticityScore = document.getElementById('authenticityScore');
        
        // إعادة تعيين التقدم
        progressBars.forEach(bar => {
            bar.style.width = '0%';
        });

        // محاكاة التقدم
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 20;
            
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                
                // عرض النتيجة النهائية
                if (authenticityScore) {
                    const score = 85 + Math.random() * 15;
                    authenticityScore.querySelector('.score-value').textContent = 
                        score.toFixed(1) + '%';
                }

                // إضافة إلى الأرشيف
                addToArchive();
            }

            progressBars.forEach(bar => {
                bar.style.width = Math.min(progress + Math.random() * 10, 100) + '%';
            });
        }, 500);
    }

    function addToArchive() {
        const archiveList = document.getElementById('archiveList');
        if (!archiveList) return;

        const docSelect = document.getElementById('docSelect');
        const selectedDoc = docSelect.options[docSelect.selectedIndex].text;

        const archiveItem = document.createElement('div');
        archiveItem.style.cssText = `
            padding: 1rem;
            background: var(--light-bg);
            border-radius: 8px;
            margin-bottom: 0.5rem;
            border-right: 4px solid var(--success);
        `;
        archiveItem.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <div style="font-weight: bold; color: var(--primary-color);">${selectedDoc}</div>
                    <div style="font-size: 0.9rem; color: var(--text-light);">
                        تم التحقق في: ${new Date().toLocaleDateString('ar-SA')}
                    </div>
                </div>
                <div style="display: flex; gap: 0.5rem;">
                    <button onclick="viewVerification()" style="background: var(--primary-color); color: white; 
                            border: none; padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer;">
                        <i class="fas fa-eye"></i> عرض
                    </button>
                    <button onclick="downloadVerification()" style="background: var(--success); color: white; 
                            border: none; padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer;">
                        <i class="fas fa-download"></i> تحميل
                    </button>
                </div>
            </div>
        `;

        if (archiveList.querySelector('.no-data')) {
            archiveList.innerHTML = '';
        }
        archiveList.appendChild(archiveItem);
    }

    window.viewVerification = function() {
        alert('سيتم فتح تقرير التحقق الكامل');
    };

    window.downloadVerification = function() {
        alert('سيتم تحميل تقرير التحقق');
    };
    
    // تحميل عمليات التحقق التجريبية
    loadDemoVerifications();
    
    function loadDemoVerifications() {
        const archiveList = document.getElementById('archiveList');
        if (!archiveList) return;
        
        const demoVerifications = localStorage.getItem('wancharisi_demo_verifications');
        if (!demoVerifications) return;
        
        const verifications = JSON.parse(demoVerifications);
        if (verifications.length === 0) return;
        
        archiveList.innerHTML = '';
        verifications.forEach(verification => {
            const statusColor = verification.status === 'completed' ? 'var(--success)' : '#ffc107';
            const statusText = verification.status === 'completed' ? 'مكتمل' : 'قيد المعالجة';
            
            const archiveItem = document.createElement('div');
            archiveItem.style.cssText = `
                padding: 1rem;
                background: var(--light-bg);
                border-radius: 8px;
                margin-bottom: 0.5rem;
                border-right: 4px solid ${statusColor};
            `;
            
            if (verification.status === 'completed') {
                archiveItem.innerHTML = `
                    <div style="display: flex; justify-content: space-between; align-items: start;">
                        <div style="flex: 1;">
                            <div style="font-weight: bold; color: var(--primary-color); margin-bottom: 0.5rem;">
                                ${verification.documentName}
                            </div>
                            <div style="font-size: 0.9rem; color: var(--text-light); margin-bottom: 0.8rem;">
                                تم التحقق في: ${verification.date}
                            </div>
                            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem; margin-bottom: 1rem;">
                                <div style="text-align: center; padding: 0.5rem; background: white; border-radius: 6px;">
                                    <div style="font-size: 0.75rem; color: #666; margin-bottom: 4px;">لغوي</div>
                                    <div style="font-weight: bold; color: var(--success);">${verification.results.linguistic.score}%</div>
                                </div>
                                <div style="text-align: center; padding: 0.5rem; background: white; border-radius: 6px;">
                                    <div style="font-size: 0.75rem; color: #666; margin-bottom: 4px;">فقهي</div>
                                    <div style="font-weight: bold; color: var(--success);">${verification.results.jurisprudential.score}%</div>
                                </div>
                                <div style="text-align: center; padding: 0.5rem; background: white; border-radius: 6px;">
                                    <div style="font-size: 0.75rem; color: #666; margin-bottom: 4px;">تاريخي</div>
                                    <div style="font-weight: bold; color: var(--success);">${verification.results.historical.score}%</div>
                                </div>
                                <div style="text-align: center; padding: 0.5rem; background: white; border-radius: 6px;">
                                    <div style="font-size: 0.75rem; color: #666; margin-bottom: 4px;">أصالة</div>
                                    <div style="font-weight: bold; color: var(--success);">${verification.results.authenticity.score}%</div>
                                </div>
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-right: 1rem;">
                            <button onclick="viewDemoVerification(${verification.id})" style="background: var(--primary-color); color: white; 
                                    border: none; padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer; white-space: nowrap;">
                                <i class="fas fa-eye"></i> عرض
                            </button>
                            <button onclick="downloadVerification()" style="background: var(--success); color: white; 
                                    border: none; padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer; white-space: nowrap;">
                                <i class="fas fa-download"></i> تحميل
                            </button>
                        </div>
                    </div>
                `;
            } else {
                archiveItem.innerHTML = `
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <div style="font-weight: bold; color: var(--primary-color);">${verification.documentName}</div>
                            <div style="font-size: 0.9rem; color: var(--text-light);">
                                ${statusText} - ${verification.progress}%
                            </div>
                            <div style="width: 200px; height: 8px; background: #e0e0e0; border-radius: 4px; margin-top: 0.5rem;">
                                <div style="width: ${verification.progress}%; height: 100%; background: #ffc107; border-radius: 4px;"></div>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            archiveList.appendChild(archiveItem);
        });
    }
    
    window.viewDemoVerification = function(id) {
        const demoVerifications = localStorage.getItem('wancharisi_demo_verifications');
        if (!demoVerifications) return;
        
        const verifications = JSON.parse(demoVerifications);
        const verification = verifications.find(v => v.id === id);
        if (!verification || !verification.results) return;
        
        alert(`تقرير التحقق الكامل:\n\n` +
              `📄 الوثيقة: ${verification.documentName}\n\n` +
              `🔤 التحقق اللغوي (${verification.results.linguistic.score}%):\n` +
              `   ${verification.results.linguistic.details}\n\n` +
              `⚖️ التحقق الفقهي (${verification.results.jurisprudential.score}%):\n` +
              `   ${verification.results.jurisprudential.details}\n\n` +
              `📜 التحقق التاريخي (${verification.results.historical.score}%):\n` +
              `   ${verification.results.historical.details}\n\n` +
              `✅ التحقق من الأصالة (${verification.results.authenticity.score}%):\n` +
              `   ${verification.results.authenticity.details}`
        );
    };
}

// تهيئة قسم محرك الأفكار
function initAIEngine() {
    const sendMessageBtn = document.getElementById('sendMessage');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');

    if (!sendMessageBtn || !chatInput || !chatMessages) return;

    // إرسال رسالة
    sendMessageBtn.addEventListener('click', sendMessage);
    
    // إرسال بالضغط على Enter
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    function sendMessage() {
        const message = chatInput.value.trim();
        
        if (!message) {
            alert('الرجاء كتابة رسالة');
            return;
        }

        // إضافة رسالة المستخدم
        addMessage(message, 'user');
        
        // مسح حقل الإدخال
        chatInput.value = '';

        // محاكاة رد الذكاء الاصطناعي
        setTimeout(() => {
            const aiResponse = generateAIResponse(message);
            addMessage(aiResponse, 'ai');
            
            // تحديث الإحصائيات
            updateStats();
        }, 1500);
    }

    function addMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message ' + type;
        
        if (type === 'ai') {
            messageDiv.innerHTML = `
                <div style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem;">
                    <span style="background: var(--accent-color); color: white; padding: 0.2rem 0.5rem; 
                          border-radius: 5px; font-size: 0.8rem;">
                        <i class="fas fa-robot"></i> الذكاء الاصطناعي
                    </span>
                    <span style="background: var(--primary-color); color: white; padding: 0.2rem 0.5rem; 
                          border-radius: 5px; font-size: 0.8rem;">
                        <i class="fas fa-user-graduate"></i> بمراجعة الخبراء
                    </span>
                </div>
                <p>${text}</p>
            `;
        } else {
            messageDiv.innerHTML = `<p>${text}</p>`;
        }

        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function generateAIResponse(userMessage) {
        const responses = [
            'بناءً على منهج الإمام الونشريسي في فقه النوازل، يمكن القول أن هذه المسألة تحتاج إلى تحليل دقيق للأصول والفروع المتعلقة بها...',
            'وفقاً لما ورد في المعيار المعرب، تناول الونشريسي مسألة مشابهة في القرن التاسع الهجري، حيث قاس...',
            'من خلال دراسة أسلوب الونشريسي في الاستنباط، نجد أنه يعتمد على القواعد الفقهية الكلية في المذهب المالكي...',
            'تم تحليل سؤالك بالتعاون بين الذكاء الاصطناعي والخبراء البشريين، والنتيجة هي...',
            'بالرجوع إلى مؤلفات الونشريسي وخاصة كتاب المعيار، نجد أن المسألة المطروحة لها نظائر في...'
        ];

        return responses[Math.floor(Math.random() * responses.length)];
    }

    function updateStats() {
        const analyzedTexts = document.getElementById('analyzedTexts');
        const generatedInsights = document.getElementById('generatedInsights');
        const expertReviews = document.getElementById('expertReviews');

        if (analyzedTexts) {
            const current = parseInt(analyzedTexts.textContent);
            analyzedTexts.textContent = current + 1;
        }

        if (generatedInsights) {
            const current = parseInt(generatedInsights.textContent);
            generatedInsights.textContent = current + Math.floor(Math.random() * 3) + 1;
        }

        if (expertReviews) {
            const current = parseInt(expertReviews.textContent);
            expertReviews.textContent = current + 1;
        }
    }
    
    // تحميل المحادثات التجريبية
    loadDemoMessages();
    
    function loadDemoMessages() {
        const demoMessages = localStorage.getItem('wancharisi_demo_ai_messages');
        if (!demoMessages) return;
        
        const messages = JSON.parse(demoMessages);
        if (messages.length === 0) return;
        
        chatMessages.innerHTML = '';
        messages.forEach(msg => {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message ' + msg.type;
            
            if (msg.type === 'ai') {
                let referencesHtml = '';
                if (msg.references && msg.references.length > 0) {
                    referencesHtml = `
                        <div style="margin-top: 0.8rem; padding: 0.8rem; background: rgba(26, 95, 122, 0.05); 
                             border-right: 3px solid var(--primary-color); border-radius: 6px;">
                            <div style="font-weight: bold; color: var(--primary-color); margin-bottom: 0.5rem;">
                                <i class="fas fa-book"></i> المراجع:
                            </div>
                            ${msg.references.map(ref => `
                                <div style="font-size: 0.9rem; color: #555; margin-bottom: 0.3rem;">
                                    • ${ref.book} - المجلد ${ref.volume}، ص${ref.pages}
                                </div>
                            `).join('')}
                        </div>
                    `;
                }
                
                messageDiv.innerHTML = `
                    <div style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem;">
                        <span style="background: var(--accent-color); color: white; padding: 0.2rem 0.5rem; 
                              border-radius: 5px; font-size: 0.8rem;">
                            <i class="fas fa-robot"></i> ${msg.sender}
                        </span>
                        <span style="color: #999; font-size: 0.75rem; align-self: center;">
                            ${new Date(msg.timestamp).toLocaleString('ar-SA', { 
                                hour: '2-digit', 
                                minute: '2-digit',
                                month: 'short',
                                day: 'numeric'
                            })}
                        </span>
                    </div>
                    <p style="white-space: pre-line;">${msg.content}</p>
                    ${referencesHtml}
                `;
            } else if (msg.type === 'expert') {
                messageDiv.innerHTML = `
                    <div style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem;">
                        <span style="background: #28a745; color: white; padding: 0.2rem 0.5rem; 
                              border-radius: 5px; font-size: 0.8rem;">
                            <i class="fas fa-user-graduate"></i> ${msg.sender}
                        </span>
                        ${msg.verified ? `
                            <span style="background: #17a2b8; color: white; padding: 0.2rem 0.5rem; 
                                  border-radius: 5px; font-size: 0.8rem;">
                                <i class="fas fa-check-circle"></i> معتمد
                            </span>
                        ` : ''}
                        <span style="color: #999; font-size: 0.75rem; align-self: center;">
                            ${new Date(msg.timestamp).toLocaleString('ar-SA', { 
                                hour: '2-digit', 
                                minute: '2-digit',
                                month: 'short',
                                day: 'numeric'
                            })}
                        </span>
                    </div>
                    <p>${msg.content}</p>
                `;
            } else {
                messageDiv.innerHTML = `
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                        <span style="font-weight: bold; color: var(--primary-color);">
                            <i class="fas fa-user"></i> ${msg.sender}
                        </span>
                        <span style="color: #999; font-size: 0.85rem;">
                            ${new Date(msg.timestamp).toLocaleString('ar-SA', { 
                                hour: '2-digit', 
                                minute: '2-digit',
                                month: 'short',
                                day: 'numeric'
                            })}
                        </span>
                    </div>
                    <p>${msg.content}</p>
                `;
            }
            
            chatMessages.appendChild(messageDiv);
        });
        
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // تحديث الإحصائيات بناءً على عدد الرسائل
        const analyzedTexts = document.getElementById('analyzedTexts');
        const generatedInsights = document.getElementById('generatedInsights');
        const expertReviews = document.getElementById('expertReviews');
        
        if (analyzedTexts) analyzedTexts.textContent = messages.filter(m => m.type === 'user').length;
        if (generatedInsights) generatedInsights.textContent = messages.filter(m => m.type === 'ai').length * 3;
        if (expertReviews) expertReviews.textContent = messages.filter(m => m.type === 'expert').length;
    }
}

// تهيئة قسم مطابقة النوازل
function initMatching() {
    const startMatchingBtn = document.getElementById('startMatching');
    const modernIssue = document.getElementById('modernIssue');

    if (!startMatchingBtn || !modernIssue) return;

    startMatchingBtn.addEventListener('click', function() {
        const issue = modernIssue.value.trim();
        
        if (!issue) {
            alert('الرجاء إدخال النازلة الرقمية المعاصرة');
            return;
        }

        // محاكاة عملية المطابقة
        performMatching(issue);
    });
    
    // تحميل نتائج المطابقة التجريبية
    loadDemoMatchingResults();
    
    function loadDemoMatchingResults() {
        const resultsContainer = document.getElementById('resultsContainer');
        if (!resultsContainer) return;
        
        const demoResults = localStorage.getItem('wancharisi_demo_matching_results');
        if (!demoResults) return;
        
        const matchingResults = JSON.parse(demoResults);
        if (matchingResults.length === 0) return;
        
        resultsContainer.innerHTML = '';
        matchingResults.forEach(result => {
            const resultCard = document.createElement('div');
            resultCard.style.cssText = `
                background: white;
                padding: 1.5rem;
                border-radius: 12px;
                margin-bottom: 1.5rem;
                box-shadow: var(--box-shadow);
                border-right: 5px solid var(--primary-color);
            `;
            
            const matchesHtml = result.matches.map(match => `
                <div style="background: #f8f9fa; padding: 1.2rem; border-radius: 8px; margin-top: 1rem;">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                        <h4 style="color: var(--primary-color); font-size: 1.2rem; margin: 0;">${match.title}</h4>
                        <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.5rem;">
                            <span style="background: ${getSimilarityColor(match.similarity)}; color: white; 
                                  padding: 0.3rem 0.8rem; border-radius: 20px; font-weight: bold;">
                                ${match.similarity}% تطابق
                            </span>
                            <span style="background: var(--accent-color); color: white; padding: 0.3rem 0.8rem; 
                                  border-radius: 20px; font-size: 0.85rem;">
                                ${match.type}
                            </span>
                        </div>
                    </div>
                    
                    <p style="color: var(--text-dark); margin-bottom: 1rem; line-height: 1.8;">
                        ${match.description}
                    </p>
                    
                    <div style="background: white; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;
                         border-right: 3px solid var(--primary-color);">
                        <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                            <i class="fas fa-book" style="color: var(--primary-color);"></i>
                            <strong style="color: var(--primary-color);">المرجع:</strong>
                        </div>
                        <p style="color: var(--text-dark); margin: 0;">${match.reference}</p>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, var(--primary-color), var(--accent-color)); 
                         padding: 1rem; border-radius: 8px; color: white;">
                        <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                            <i class="fas fa-gavel"></i>
                            <strong>الحكم الفقهي:</strong>
                        </div>
                        <p style="margin: 0;">${match.ruling}</p>
                    </div>
                    
                    <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                        <button onclick="viewDetails('${match.title}')" style="flex: 1; background: var(--primary-color); 
                                color: white; border: none; padding: 0.8rem; border-radius: 8px; cursor: pointer; 
                                font-weight: bold;">
                            <i class="fas fa-eye"></i> عرض التفاصيل الكاملة
                        </button>
                        <button onclick="exportResult('${match.title}')" style="flex: 1; background: var(--success); 
                                color: white; border: none; padding: 0.8rem; border-radius: 8px; cursor: pointer; 
                                font-weight: bold;">
                            <i class="fas fa-file-export"></i> تصدير النتيجة
                        </button>
                    </div>
                </div>
            `).join('');
            
            resultCard.innerHTML = `
                <div style="margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 2px solid #e0e0e0;">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.8rem;">
                        <h3 style="color: var(--primary-color); margin: 0;">
                            <i class="fas fa-balance-scale"></i> النازلة المعاصرة:
                        </h3>
                        <span style="background: #e3f2fd; color: var(--primary-color); padding: 0.3rem 0.8rem; 
                              border-radius: 15px; font-size: 0.85rem;">
                            <i class="fas fa-calendar-alt"></i> ${result.date}
                        </span>
                    </div>
                    <p style="color: #555; font-size: 1.05rem; line-height: 1.6; margin: 0;">
                        ${result.modernIssue}
                    </p>
                </div>
                ${matchesHtml}
            `;
            
            resultsContainer.appendChild(resultCard);
        });
    }
    
    function getSimilarityColor(similarity) {
        if (similarity >= 90) {
            return '#28a745';
        } else if (similarity >= 80) {
            return '#5cb85c';
        } else if (similarity >= 70) {
            return '#ffc107';
        }
        return '#ff9800';
    }
}

function performMatching(issue) {
    const resultsContainer = document.getElementById('resultsContainer');
    
    if (!resultsContainer) return;

    // عرض شاشة التحميل
    resultsContainer.innerHTML = `
        <div style="text-align: center; padding: 3rem;">
            <i class="fas fa-spinner fa-spin" style="font-size: 3rem; color: var(--primary-color);"></i>
            <p style="margin-top: 1rem; color: var(--text-light);">جاري البحث عن النوازل المشابهة...</p>
        </div>
    `;

    // محاكاة المطابقة
    setTimeout(() => {
        displayMatchingResults(issue);
    }, 2000);
}

function displayMatchingResults(issue) {
    const resultsContainer = document.getElementById('resultsContainer');
    
    const results = [
        {
            title: 'نازلة البيوع الغائبة',
            similarity: 92,
            type: 'مطابقة متشابهة',
            description: 'تناول الونشريسي في المعيار مسألة البيوع التي لم ير فيها المشتري السلعة، وهي تشابه التجارة الإلكترونية الحديثة',
            reference: 'المعيار المعرب، ج5، ص234',
            ruling: 'يجوز البيع إذا وُصفت السلعة وصفاً دقيقاً يرفع الجهالة'
        },
        {
            title: 'نازلة الوكالة في البيع والشراء',
            similarity: 88,
            type: 'قياس فقهي',
            description: 'المنصات الإلكترونية تعمل كوكيل بين البائع والمشتري، وقد بحث الونشريسي أحكام الوكالة بتفصيل',
            reference: 'المعيار المعرب، ج8، ص156',
            ruling: 'تصح الوكالة بشروط معينة منها العلم بالسلعة وتحديد الثمن'
        },
        {
            title: 'نازلة القبض الحكمي',
            similarity: 85,
            type: 'مطابقة القواعد الفقهية',
            description: 'التسليم الرقمي للمنتجات يمكن قياسه على القبض الحكمي الذي ذكره الونشريسي',
            reference: 'المعيار المعرب، ج6، ص89',
            ruling: 'يُعتبر القبض الحكمي كافياً إذا تمكن المشتري من التصرف في المبيع'
        }
    ];

    resultsContainer.innerHTML = results.map(result => `
        <div style="background: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; 
             box-shadow: var(--box-shadow); border-right: 5px solid var(--primary-color);">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                <h4 style="color: var(--primary-color); font-size: 1.3rem;">${result.title}</h4>
                <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.5rem;">
                    <span style="background: ${getSimilarityColor(result.similarity)}; color: white; 
                          padding: 0.3rem 0.8rem; border-radius: 20px; font-weight: bold;">
                        ${result.similarity}% تطابق
                    </span>
                    <span style="background: var(--accent-color); color: white; padding: 0.3rem 0.8rem; 
                          border-radius: 20px; font-size: 0.85rem;">
                        ${result.type}
                    </span>
                </div>
            </div>
            
            <p style="color: var(--text-dark); margin-bottom: 1rem; line-height: 1.8;">
                ${result.description}
            </p>
            
            <div style="background: var(--light-bg); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                    <i class="fas fa-book" style="color: var(--primary-color);"></i>
                    <strong style="color: var(--primary-color);">المرجع:</strong>
                </div>
                <p style="color: var(--text-dark);">${result.reference}</p>
            </div>
            
            <div style="background: linear-gradient(135deg, var(--primary-color), var(--accent-color)); 
                 padding: 1rem; border-radius: 8px; color: white;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                    <i class="fas fa-gavel"></i>
                    <strong>الحكم الفقهي:</strong>
                </div>
                <p>${result.ruling}</p>
            </div>
            
            <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                <button onclick="viewDetails('${result.title}')" style="flex: 1; background: var(--primary-color); 
                        color: white; border: none; padding: 0.8rem; border-radius: 8px; cursor: pointer; 
                        font-weight: bold;">
                    <i class="fas fa-eye"></i> عرض التفاصيل الكاملة
                </button>
                <button onclick="exportResult('${result.title}')" style="flex: 1; background: var(--success); 
                        color: white; border: none; padding: 0.8rem; border-radius: 8px; cursor: pointer; 
                        font-weight: bold;">
                    <i class="fas fa-download"></i> تصدير النتيجة
                </button>
            </div>
        </div>
    `).join('');
}

function getSimilarityColor(percentage) {
    if (percentage >= 90) return '#27ae60';
    if (percentage >= 75) return '#f39c12';
    return '#e74c3c';
}

window.viewDetails = function(title) {
    alert('سيتم عرض التفاصيل الكاملة للنازلة: ' + title);
};

window.exportResult = function(title) {
    alert('سيتم تصدير نتيجة المطابقة: ' + title);
};

// ملء مثال
window.fillExample = function(element) {
    const modernIssue = document.getElementById('modernIssue');
    const title = element.querySelector('h4').textContent;
    const description = element.querySelector('p').textContent;
    
    if (modernIssue) {
        modernIssue.value = description;
        
        // التمرير إلى حقل الإدخال
        modernIssue.scrollIntoView({ behavior: 'smooth', block: 'center' });
        modernIssue.focus();
    }
};

// التمرير السلس
function initSmoothScroll() {
    // مراقبة التمرير لتحديث شريط التنقل
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// تصدير دوال عامة
window.removeFile = window.removeFile || function() {};
window.viewVerification = window.viewVerification || function() {};
window.downloadVerification = window.downloadVerification || function() {};
window.viewDetails = window.viewDetails || function() {};
window.exportResult = window.exportResult || function() {};
window.fillExample = window.fillExample || function() {};

// ========================================
// نظام التكامل بين المكتبة الرقمية وقسم التحميل
// ========================================

// تهيئة عرض الصفحات المستخرجة في قسم التحميل
function initExtractedPages() {
    const extractedList = document.getElementById('extractedList');
    if (!extractedList) return;

    // التحقق من وجود معامل في URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('action') === 'view-extracts') {
        // التمرير إلى قسم الصفحات المستخرجة
        setTimeout(() => {
            const section = document.getElementById('extractedPagesSection');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                section.style.animation = 'highlight 2s ease';
            }
        }, 500);
    }

    displayExtractedPages();
}

// عرض الصفحات المستخرجة
function displayExtractedPages() {
    const extractedList = document.getElementById('extractedList');
    if (!extractedList) return;

    const extracts = SharedData.getExtractedPages();
    
    if (extracts.length === 0) {
        extractedList.innerHTML = `
            <div style="text-align: center; padding: 3rem; background: #f8f9fa; border-radius: 10px;">
                <i class="fas fa-inbox" style="font-size: 4rem; color: #ccc; margin-bottom: 1rem;"></i>
                <p class="no-files">لا توجد صفحات مستخرجة حتى الآن</p>
                <p style="color: #666; margin-top: 1rem;">
                    قم باستخراج صفحات من 
                    <a href="library.html" style="color: var(--primary-color); font-weight: bold;">المكتبة الرقمية</a>
                    لمعالجتها هنا
                </p>
            </div>
        `;
        return;
    }

    extractedList.innerHTML = extracts.map(extract => {
        const statusInfo = getExtractStatusInfo(extract.status);
        return `
            <div class="extract-card" style="background: white; padding: 1.5rem; border-radius: 12px; 
                 margin-bottom: 1.5rem; box-shadow: var(--box-shadow); border-right: 5px solid ${statusInfo.color};">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                    <div style="flex: 1;">
                        <h4 style="color: var(--primary-color); margin-bottom: 0.5rem;">
                            <i class="fas fa-book"></i> ${extract.bookTitle}
                        </h4>
                        <div style="color: #666; font-size: 0.9rem; margin-bottom: 0.5rem;">
                            <i class="fas fa-file-alt"></i> 
                            من الصفحة ${extract.startPage} إلى ${extract.endPage} 
                            (${extract.totalPages} صفحة)
                        </div>
                        <div style="color: #999; font-size: 0.85rem;">
                            <i class="fas fa-clock"></i> ${formatDate(extract.timestamp)}
                        </div>
                    </div>
                    <span style="background: ${statusInfo.color}; color: white; padding: 0.4rem 0.8rem; 
                          border-radius: 20px; font-size: 0.85rem; white-space: nowrap;">
                        <i class="${statusInfo.icon}"></i> ${statusInfo.label}
                    </span>
                </div>
                
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem;">
                    ${extract.status === 'pending' ? `
                        <button onclick="processExtract(${extract.id})" 
                                style="background: var(--primary-color); color: white; border: none; 
                                padding: 0.6rem 1rem; border-radius: 8px; cursor: pointer; font-weight: bold;">
                            <i class="fas fa-cog"></i> بدء المعالجة
                        </button>
                        <button onclick="viewExtractInLibrary('${extract.filename}')" 
                                style="background: var(--secondary-color); color: white; border: none; 
                                padding: 0.6rem 1rem; border-radius: 8px; cursor: pointer;">
                            <i class="fas fa-eye"></i> عرض في المكتبة
                        </button>
                    ` : ''}
                    ${extract.status === 'processed' ? `
                        <button onclick="archiveExtract(${extract.id})" 
                                style="background: var(--accent-color); color: white; border: none; 
                                padding: 0.6rem 1rem; border-radius: 8px; cursor: pointer;">
                            <i class="fas fa-archive"></i> أرشفة
                        </button>
                    ` : ''}
                    <button onclick="deleteExtract(${extract.id})" 
                            style="background: #dc3545; color: white; border: none; 
                            padding: 0.6rem 1rem; border-radius: 8px; cursor: pointer;">
                        <i class="fas fa-trash"></i> حذف
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// الحصول على معلومات حالة الاستخراج
function getExtractStatusInfo(status) {
    const statusMap = {
        'pending': { label: 'في الانتظار', color: '#ffc107', icon: 'fas fa-clock' },
        'processed': { label: 'تم المعالجة', color: '#28a745', icon: 'fas fa-check-circle' },
        'archived': { label: 'مؤرشف', color: '#6c757d', icon: 'fas fa-archive' }
    };
    return statusMap[status] || statusMap['pending'];
}

// معالجة الصفحات المستخرجة
window.processExtract = function(id) {
    // محاكاة المعالجة
    const confirmed = confirm('هل تريد بدء معالجة هذه الصفحات؟\n\nسيتم تطبيق التعرف الضوئي (OCR) والفهرسة التلقائية.');
    
    if (confirmed) {
        // تحديث الحالة
        SharedData.updateExtractStatus(id, 'processed');
        displayExtractedPages();
        
        alert('✅ تم بدء المعالجة بنجاح!\n\nسيتم إشعارك عند اكتمال العملية.');
    }
};

// عرض في المكتبة
window.viewExtractInLibrary = function(filename) {
    window.location.href = `library.html?book=${encodeURIComponent(filename)}`;
};

// أرشفة الصفحات
window.archiveExtract = function(id) {
    SharedData.updateExtractStatus(id, 'archived');
    displayExtractedPages();
    alert('✅ تم أرشفة الصفحات بنجاح!');
};

// حذف الصفحات المستخرجة
window.deleteExtract = function(id) {
    if (confirm('هل أنت متأكد من حذف هذه الصفحات المستخرجة؟')) {
        SharedData.deleteExtractedPages(id);
        displayExtractedPages();
    }
};

// إضافة ملف محمل إلى المكتبة
window.addToLibrary = function(fileIndex) {
    const file = uploadedFilesArray[fileIndex];
    if (!file) return;
    
    // طلب معلومات الكتاب
    const title = prompt('أدخل عنوان الكتاب:', file.name.replace(/\.(pdf|jpg|jpeg|png|tiff)$/i, ''));
    if (!title) return;
    
    const author = prompt('أدخل اسم المؤلف:', 'الإمام أحمد بن يحيى الونشريسي');
    const category = prompt('أدخل التصنيف:', 'فقه');
    
    // حفظ في النظام
    const savedBook = SharedData.saveUploadedBook({
        title: title,
        author: author,
        category: category,
        filename: file.name,
        fileSize: file.size,
        pages: 'غير معروف'
    });
    
    const proceed = confirm(
        `✅ تم حفظ الكتاب بنجاح!\n\n` +
        `العنوان: ${title}\n` +
        `المؤلف: ${author}\n\n` +
        `هل تريد الانتقال إلى المكتبة الرقمية؟`
    );
    
    if (proceed) {
        window.location.href = 'library.html';
    }
};

// تهيئة النظام عند تحميل الصفحة
if (document.getElementById('extractedList')) {
    document.addEventListener('DOMContentLoaded', initExtractedPages);
}

// عرض إشعار إذا كانت هناك عناصر معلقة
document.addEventListener('DOMContentLoaded', function() {
    const counts = SharedData.getPendingCounts();
    if (counts.total > 0 && window.location.pathname.includes('upload.html')) {
        setTimeout(() => {
            const badge = document.createElement('div');
            badge.style.cssText = `
                position: fixed;
                top: 80px;
                left: 20px;
                background: #dc3545;
                color: white;
                padding: 10px 15px;
                border-radius: 20px;
                font-weight: bold;
                box-shadow: 0 4px 10px rgba(220, 53, 69, 0.3);
                z-index: 1000;
                cursor: pointer;
            `;
            badge.innerHTML = `<i class="fas fa-bell"></i> ${counts.extracts} صفحة مستخرجة`;
            badge.onclick = function() {
                document.getElementById('extractedPagesSection').scrollIntoView({ behavior: 'smooth' });
            };
            document.body.appendChild(badge);
        }, 1000);
    }
});
