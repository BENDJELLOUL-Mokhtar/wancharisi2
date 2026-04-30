// ملف البيانات الافتراضية التوضيحية
// يتم تحميله تلقائياً عند أول زيارة لإظهار أمثلة للمستخدم

const DemoData = {
    // مفتاح للتحقق من أن البيانات تم تحميلها
    DEMO_KEY: 'wancharisi_demo_loaded',
    
    // التحقق إذا كانت البيانات التجريبية محملة
    isDemoLoaded: function() {
        return localStorage.getItem(this.DEMO_KEY) === 'true';
    },
    
    // تحميل جميع البيانات التجريبية
    loadAllDemoData: function() {
        if (this.isDemoLoaded()) {
            console.log('البيانات التجريبية محملة مسبقاً');
            return false;
        }
        
        this.loadUploadedFiles();
        this.loadExtractedPages();
        this.loadVerifications();
        this.loadAIConversations();
        this.loadMatchingResults();
        
        localStorage.setItem(this.DEMO_KEY, 'true');
        console.log('تم تحميل جميع البيانات التجريبية بنجاح');
        return true;
    },
    
    // تحميل ملفات افتراضية في قسم التحميل
    loadUploadedFiles: function() {
        const demoFiles = [
            {
                name: 'مخطوط_إيضاح_المسالك_نسخة_قديمة.pdf',
                size: '12.5 ميجابايت',
                type: 'application/pdf',
                date: new Date(2026, 3, 15).toLocaleDateString('ar-SA')
            },
            {
                name: 'صورة_المعيار_المعرب_ج1_ص45-67.pdf',
                size: '4.8 ميجابايت',
                type: 'application/pdf',
                date: new Date(2026, 3, 20).toLocaleDateString('ar-SA')
            },
            {
                name: 'نازلة_التجارة_الإلكترونية_تحليل.pdf',
                size: '2.3 ميجابايت',
                type: 'application/pdf',
                date: new Date(2026, 3, 25).toLocaleDateString('ar-SA')
            },
            {
                name: 'مخطوط_النوازل_الجامعة_ص120-145.pdf',
                size: '6.7 ميجابايت',
                type: 'application/pdf',
                date: new Date(2026, 3, 28).toLocaleDateString('ar-SA')
            }
        ];
        
        localStorage.setItem('wancharisi_demo_uploaded_files', JSON.stringify(demoFiles));
    },
    
    // تحميل صفحات مستخرجة افتراضية
    loadExtractedPages: function() {
        const demoExtracts = [
            {
                id: Date.now() - 86400000 * 3, // قبل 3 أيام
                bookId: 1,
                bookTitle: 'المعيار المعرب والجامع المغرب',
                startPage: 45,
                endPage: 67,
                totalPages: 23,
                filename: 'Noor-Book.com  المعيار المعرب ج 2 3 .pdf',
                timestamp: new Date(2026, 3, 27).toISOString(),
                status: 'processed'
            },
            {
                id: Date.now() - 86400000 * 2, // قبل يومين
                bookId: 4,
                bookTitle: 'النوازل الجامعة',
                startPage: 120,
                endPage: 145,
                totalPages: 26,
                filename: 'Noor-Book.com  النوازل الجامعة أو نوازل الجامع 3 .pdf',
                timestamp: new Date(2026, 3, 28).toISOString(),
                status: 'processed'
            },
            {
                id: Date.now() - 86400000, // قبل يوم
                bookId: 2,
                bookTitle: 'إيضاح المسالك إلى قواعد الإمام مالك',
                startPage: 89,
                endPage: 112,
                totalPages: 24,
                filename: 'Noor-Book.com  إيضاح المسالك إلى قواعد الإمام أبي عبد الله مالك ت الغرياني.pdf',
                timestamp: new Date(2026, 3, 29).toISOString(),
                status: 'pending'
            }
        ];
        
        localStorage.setItem('wancharisi_extracted_pages', JSON.stringify(demoExtracts));
    },
    
    // تحميل عمليات تحقق افتراضية
    loadVerifications: function() {
        const demoVerifications = [
            {
                id: 1,
                documentName: 'مخطوط_إيضاح_المسالك_نسخة_قديمة.pdf',
                date: new Date(2026, 3, 27).toLocaleDateString('ar-SA'),
                status: 'completed',
                results: {
                    linguistic: {
                        score: 95,
                        errors: 3,
                        warnings: 7,
                        details: 'النص سليم لغوياً مع بعض الاختلافات في الإملاء القديم'
                    },
                    jurisprudential: {
                        score: 92,
                        verified: true,
                        references: 12,
                        details: 'الأحكام الفقهية متوافقة مع المذهب المالكي'
                    },
                    historical: {
                        score: 88,
                        period: 'القرن التاسع الهجري',
                        authenticity: 'عالية',
                        details: 'التوثيق التاريخي للنص موثوق'
                    },
                    authenticity: {
                        score: 94,
                        confidence: 'عالية جداً',
                        comparison: 'تطابق 94% مع النسخ المعتمدة',
                        details: 'النص أصيل ومطابق للمصادر المعتمدة'
                    }
                }
            },
            {
                id: 2,
                documentName: 'صورة_المعيار_المعرب_ج1_ص45-67.pdf',
                date: new Date(2026, 3, 28).toLocaleDateString('ar-SA'),
                status: 'completed',
                results: {
                    linguistic: {
                        score: 89,
                        errors: 8,
                        warnings: 15,
                        details: 'توجد بعض الأخطاء في نسخ النص من الصورة'
                    },
                    jurisprudential: {
                        score: 96,
                        verified: true,
                        references: 23,
                        details: 'النوازل الفقهية موثقة بشكل ممتاز'
                    },
                    historical: {
                        score: 93,
                        period: 'القرن التاسع الهجري',
                        authenticity: 'عالية جداً',
                        details: 'النص من المصادر الأصلية'
                    },
                    authenticity: {
                        score: 97,
                        confidence: 'عالية جداً',
                        comparison: 'تطابق 97% مع النسخة المحققة',
                        details: 'نص أصلي من نسخة موثوقة'
                    }
                }
            },
            {
                id: 3,
                documentName: 'مخطوط_النوازل_الجامعة_ص120-145.pdf',
                date: new Date(2026, 3, 29).toLocaleDateString('ar-SA'),
                status: 'in_progress',
                progress: 65
            }
        ];
        
        localStorage.setItem('wancharisi_demo_verifications', JSON.stringify(demoVerifications));
    },
    
    // تحميل محادثات افتراضية لمحرك الأفكار
    loadAIConversations: function() {
        const demoMessages = [
            {
                id: 1,
                type: 'user',
                content: 'ما هو موقف الإمام الونشريسي من التجارة الإلكترونية المعاصرة؟',
                timestamp: new Date(2026, 3, 29, 10, 30).toISOString(),
                sender: 'المستخدم'
            },
            {
                id: 2,
                type: 'ai',
                content: 'بناءً على منهج الإمام الونشريسي في "المعيار المعرب"، يمكن القول أن التجارة الإلكترونية تخضع لنفس القواعد الفقهية للبيع والشراء التقليدي، مع مراعاة خصوصيات العصر الرقمي.\n\nالنقاط الرئيسية:\n١. القبول والإيجاب: يتحقق عبر الوسائل الإلكترونية\n٢. القبض الحكمي: يتم بالتمكن من التحميل أو الاستلام\n٣. الغرر: يجب تجنب الغموض في وصف المنتجات\n\nللمزيد من التفاصيل، راجع "المعيار" ج6، ص89-102',
                timestamp: new Date(2026, 3, 29, 10, 31).toISOString(),
                sender: 'النظام الذكي',
                references: [
                    { book: 'المعيار المعرب', volume: 6, pages: '89-102' }
                ]
            },
            {
                id: 3,
                type: 'expert',
                content: 'إضافة من الخبير: يمكن أيضاً الاستفادة من قواعد البيع بالوصف والبيع السلمي في تطبيقات التجارة الإلكترونية الحديثة.',
                timestamp: new Date(2026, 3, 29, 10, 35).toISOString(),
                sender: 'د. محمد الفقيه',
                verified: true
            },
            {
                id: 4,
                type: 'user',
                content: 'ما حكم العملات الرقمية (Bitcoin) في ضوء فقه النوازل؟',
                timestamp: new Date(2026, 3, 29, 14, 20).toISOString(),
                sender: 'المستخدم'
            },
            {
                id: 5,
                type: 'ai',
                content: 'العملات الرقمية نازلة معاصرة تحتاج إلى تأصيل فقهي دقيق. من منظور منهج الونشريسي:\n\n١. التكييف الفقهي:\n   - هل هي عملة أم سلعة؟\n   - القياس على الصرف والمبادلة\n\n٢. الشروط الشرعية:\n   - التقابض في المجلس\n   - عدم الربا والميسر\n   - وضوح المعاملة\n\n٣. المخاطر المحتملة:\n   - الغرر الفاحش\n   - التلاعب والاحتيال\n   - التقلبات الحادة\n\nالرأي الراجح: الحاجة لمزيد من الدراسة والاجتهاد الجماعي',
                timestamp: new Date(2026, 3, 29, 14, 22).toISOString(),
                sender: 'النظام الذكي',
                references: [
                    { book: 'المعيار المعرب', volume: 5, pages: '234-267' },
                    { book: 'النوازل الجامعة', volume: 2, pages: '156-178' }
                ]
            }
        ];
        
        localStorage.setItem('wancharisi_demo_ai_messages', JSON.stringify(demoMessages));
    },
    
    // تحميل نتائج مطابقة افتراضية
    loadMatchingResults: function() {
        const demoResults = [
            {
                id: 1,
                modernIssue: 'عقود الاشتراك الشهري في الخدمات الرقمية (Netflix, Spotify)',
                date: new Date(2026, 3, 27).toLocaleDateString('ar-SA'),
                matches: [
                    {
                        title: 'إجارة المنافع المتجددة',
                        similarity: 92,
                        type: 'مطابقة القواعد الفقهية',
                        description: 'عقد الاشتراك الشهري يقاس على إجارة المنافع المتجددة التي ذكرها الونشريسي في باب الإجارة',
                        reference: 'المعيار المعرب، ج7، ص156',
                        ruling: 'جائز بشرط تحديد المدة والثمن، وإمكانية الانتفاع الفعلي بالخدمة'
                    }
                ]
            },
            {
                id: 2,
                modernIssue: 'التوقيع الإلكتروني في العقود الرقمية',
                date: new Date(2026, 3, 28).toLocaleDateString('ar-SA'),
                matches: [
                    {
                        title: 'الإشهاد والكتابة في المعاملات',
                        similarity: 88,
                        type: 'مطابقة الأحكام',
                        description: 'التوقيع الإلكتروني يحقق مقصد التوثيق والإثبات الذي تحدث عنه الونشريسي في كتاب الوثائق',
                        reference: 'المنهج الفائق، ج1، ص67-89',
                        ruling: 'يُعتبر حجة إذا كان موثوقاً ومؤمناً من التلاعب، ويحقق مقاصد التوثيق الشرعي'
                    }
                ]
            },
            {
                id: 3,
                modernIssue: 'التطبيب عن بُعد (Telemedicine)',
                date: new Date(2026, 3, 29).toLocaleDateString('ar-SA'),
                matches: [
                    {
                        title: 'عقد الإجارة على الأعمال',
                        similarity: 85,
                        type: 'قياس النوازل',
                        description: 'الاستشارة الطبية عن بعد تندرج تحت عقد الإجارة على العمل مع خصوصية التقنية الحديثة',
                        reference: 'النوازل الجامعة، ج2، ص234',
                        ruling: 'جائز بشروط: 1) القدرة على التشخيص الدقيق 2) عدم الضرر 3) تحديد الأجرة'
                    }
                ]
            }
        ];
        
        localStorage.setItem('wancharisi_demo_matching_results', JSON.stringify(demoResults));
    },
    
    // مسح جميع البيانات التجريبية
    clearAllDemoData: function() {
        localStorage.removeItem('wancharisi_demo_uploaded_files');
        localStorage.removeItem('wancharisi_demo_verifications');
        localStorage.removeItem('wancharisi_demo_ai_messages');
        localStorage.removeItem('wancharisi_demo_matching_results');
        localStorage.removeItem(this.DEMO_KEY);
        console.log('تم مسح جميع البيانات التجريبية');
    },
    
    // إعادة تحميل البيانات التجريبية
    reloadDemoData: function() {
        this.clearAllDemoData();
        this.loadAllDemoData();
        console.log('تم إعادة تحميل البيانات التجريبية');
    }
};

// تحميل البيانات التجريبية تلقائياً عند أول زيارة
document.addEventListener('DOMContentLoaded', function() {
    // التحميل التلقائي للبيانات التجريبية
    if (!DemoData.isDemoLoaded()) {
        console.log('جاري تحميل البيانات التجريبية لأول مرة...');
        DemoData.loadAllDemoData();
    }
});
