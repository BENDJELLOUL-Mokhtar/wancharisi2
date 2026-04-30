// قاعدة بيانات النوازل التاريخية ومقابلاتها الرقمية المعاصرة
// بناءً على منهج الإمام الونشريسي في المعيار المعرب

const NawazilDatabase = {
    // النوازل التاريخية ومقابلاتها الرقمية
    nawazil: [
        {
            id: 1,
            historicalCase: {
                title: "عقود الإجارة على المنافع غير المحسوسة",
                description: "بحث الونشريسي في جواز استئجار المنافع التي لا تُقبض باليد كتعليم القرآن والعلوم",
                reference: "المعيار المعرب، ج8، ص134-156",
                ruling: "جواز الإجارة على المنافع غير المحسوسة بضوابط شرعية"
            },
            digitalCase: {
                title: "الاشتراك في خدمات البث الرقمي (Netflix, Shahid, OSN)",
                description: "دفع رسوم شهرية للوصول إلى محتوى رقمي غير ملموس",
                examples: ["منصات الفيديو", "البث الموسيقي", "الكتب الإلكترونية"]
            },
            matching: {
                type: "مطابقة دقيقة",
                similarity: 95,
                reasoning: "كلاهما إجارة على منفعة غير محسوسة بمقابل معلوم لمدة محددة",
                conditions: ["أن يكون المحتوى حلالاً", "العقد واضح ومحدد", "القدرة على الاستفادة"]
            }
        },
        {
            id: 2,
            historicalCase: {
                title: "إثبات العقود بالكتابة والوثائق",
                description: "بحث الونشريسي شروط صحة الوثائق المكتوبة وحجيتها في الإثبات",
                reference: "المنهج الفائق والمنهل الرائق، ج1، ص78-112",
                ruling: "صحة الإثبات بالكتابة مع توفر شروط التوثيق"
            },
            digitalCase: {
                title: "التوقيع الإلكتروني في العقود والمعاملات",
                description: "استخدام توقيع رقمي مشفر لإبرام العقود عن بُعد",
                examples: ["العقود البنكية", "عقود العمل", "المعاملات الحكومية"]
            },
            matching: {
                type: "مطابقة دقيقة",
                similarity: 92,
                reasoning: "كلاهما وسيلة لإثبات العقد والتوثيق، الفرق في الوسيلة لا المقصد",
                conditions: ["الأمان الرقمي", "عدم قابلية التزوير", "إمكانية التحقق"]
            }
        },
        {
            id: 3,
            historicalCase: {
                title: "البيع بالسلم والاستصناع",
                description: "بيع سلعة موصوفة في الذمة بثمن معجل",
                reference: "المعيار المعرب، ج5، ص211-245",
                ruling: "جواز بيع السلم والاستصناع بشروط محددة"
            },
            digitalCase: {
                title: "الطلب المسبق للمنتجات الرقمية (Pre-order)",
                description: "شراء برامج أو ألعاب إلكترونية قبل إصدارها",
                examples: ["الألعاب الإلكترونية", "البرامج", "الدورات التعليمية"]
            },
            matching: {
                type: "مطابقة بالقياس",
                similarity: 88,
                reasoning: "قياس على بيع السلم: دفع الثمن معجلاً لسلعة موصوفة تُسلم آجلاً",
                conditions: ["وصف دقيق للمنتج", "تحديد موعد التسليم", "ضمان القدرة على التسليم"]
            }
        },
        {
            id: 4,
            historicalCase: {
                title: "أجرة الطبيب على المعاينة والمعالجة",
                description: "حكم أخذ الأجرة على الطب والاستشارة الطبية",
                reference: "المعيار المعرب، ج10، ص234-258",
                ruling: "جواز أخذ الأجرة على الطب مع مراعاة الأمانة"
            },
            digitalCase: {
                title: "الاستشارة الطبية عن بُعد (Telemedicine)",
                description: "تقديم الاستشارات الطبية عبر الإنترنت",
                examples: ["تطبيقات الصحة", "استشارات الفيديو", "الوصفات الإلكترونية"]
            },
            matching: {
                type: "مطابقة متشابهة",
                similarity: 87,
                reasoning: "نفس الخدمة الطبية لكن بوسيلة حديثة",
                conditions: ["الكفاءة المهنية", "الدقة في التشخيص", "حفظ الخصوصية"]
            }
        },
        {
            id: 5,
            historicalCase: {
                title: "الوكالة في البيع والشراء",
                description: "توكيل شخص للتجارة نيابة عن الموكل",
                reference: "المعيار المعرب، ج7، ص89-123",
                ruling: "جواز الوكالة بأجر أو بدون أجر بشروط"
            },
            digitalCase: {
                title: "التسوق عبر المنصات الإلكترونية (Amazon, Noon)",
                description: "المنصة كوسيط بين البائع والمشتري",
                examples: ["التجارة الإلكترونية", "التطبيقات", "خدمات التوصيل"]
            },
            matching: {
                type: "مطابقة متشابهة",
                similarity: 85,
                reasoning: "المنصة تعمل كوكيل/وسيط بين الطرفين مقابل عمولة",
                conditions: ["وضوح الصلاحيات", "الأمانة", "حفظ الحقوق"]
            }
        },
        {
            id: 6,
            historicalCase: {
                title: "الجعالة والمسابقات بجائزة",
                description: "وضع جائزة لمن يحقق أمراً معيناً",
                reference: "المعيار المعرب، ج6، ص178-201",
                ruling: "جواز الجعالة في الأمور المباحة بضوابط"
            },
            digitalCase: {
                title: "المسابقات الإلكترونية والجوائز الرقمية",
                description: "مسابقات على وسائل التواصل أو الألعاب بجوائز",
                examples: ["مسابقات الألعاب الإلكترونية", "جوائز المحتوى", "التحديات"]
            },
            matching: {
                type: "مطابقة دقيقة",
                similarity: 90,
                reasoning: "نفس مفهوم الجعالة: جائزة لمن يحقق إنجازاً معيناً",
                conditions: ["إباحة المسابقة", "وضوح الشروط", "عدالة التحكيم"]
            }
        },
        {
            id: 7,
            historicalCase: {
                title: "الشركة والمضاربة في التجارة",
                description: "اشتراك عدة أشخاص في رأس المال أو العمل",
                reference: "المعيار المعرب، ج7، ص267-312",
                ruling: "جواز الشركة والمضاربة بأنواعها بشروط"
            },
            digitalCase: {
                title: "التمويل الجماعي (Crowdfunding)",
                description: "جمع تمويل من عدة مستثمرين لمشروع معين",
                examples: ["منصات الاستثمار", "تمويل الشركات الناشئة", "المشاريع الخيرية"]
            },
            matching: {
                type: "مطابقة بالقياس",
                similarity: 83,
                reasoning: "قياس على المضاربة: اجتماع رأس المال من متعددين لمشروع",
                conditions: ["وضوح نسب الأرباح", "الشفافية", "العدالة في التوزيع"]
            }
        },
        {
            id: 8,
            historicalCase: {
                title: "الرهن والضمانات في الديون",
                description: "وضع ضمان عيني لاستيفاء الدين",
                reference: "المعيار المعرب، ج6، ص445-478",
                ruling: "جواز الرهن لتوثيق الحقوق"
            },
            digitalCase: {
                title: "الضمانات الرقمية في المعاملات الإلكترونية",
                description: "أنظمة الدفع الآمنة والضمانات الإلكترونية",
                examples: ["PayPal", "الضمان البنكي الإلكتروني", "Escrow Services"]
            },
            matching: {
                type: "مطابقة متشابهة",
                similarity: 86,
                reasoning: "كلاهما ضمان لحفظ الحقوق في المعاملات",
                conditions: ["الأمان", "إمكانية التنفيذ", "وضوح الشروط"]
            }
        },
        {
            id: 9,
            historicalCase: {
                title: "الصرف وتبديل العملات",
                description: "أحكام بيع النقود بعضها ببعض",
                reference: "المعيار المعرب، ج5، ص334-367",
                ruling: "جواز الصرف بشروط: المناجزة، التقابض في المجلس"
            },
            digitalCase: {
                title: "تحويل العملات الرقمية والإلكترونية",
                description: "تبادل العملات عبر المنصات الإلكترونية",
                examples: ["تحويل العملات", "البيتكوين", "المحافظ الإلكترونية"]
            },
            matching: {
                type: "مطابقة بالقواعد",
                similarity: 80,
                reasoning: "تطبيق قواعد الصرف على العملات الرقمية مع مراعاة الخصوصية",
                conditions: ["التقابض الإلكتروني الفوري", "التكافؤ في القيمة", "خلوها من الربا"]
            }
        },
        {
            id: 10,
            historicalCase: {
                title: "الاستئجار للتعليم ونشر العلم",
                description: "أخذ الأجرة على التعليم والتدريس",
                reference: "المعيار المعرب، ج8، ص201-234",
                ruling: "جواز أخذ الأجرة على التعليم في غير العلوم الشرعية الأساسية"
            },
            digitalCase: {
                title: "الدورات التعليمية والمحتوى التعليمي المدفوع",
                description: "بيع الدورات والكورسات الإلكترونية",
                examples: ["Udemy", "Coursera", "منصات التعليم الإلكتروني"]
            },
            matching: {
                type: "مطابقة دقيقة",
                similarity: 93,
                reasoning: "نفس الإجارة على التعليم، الوسيلة الرقمية لا تغير الحكم",
                conditions: ["جودة المحتوى", "الالتزام بالمنهج", "حفظ الحقوق الفكرية"]
            }
        },
        {
            id: 11,
            historicalCase: {
                title: "الإجارة على حفظ الأموال والودائع",
                description: "أخذ أجرة على حفظ الأمانات",
                reference: "المعيار المعرب، ج8، ص367-389",
                ruling: "جواز أخذ الأجرة على الحفظ بضوابط"
            },
            digitalCase: {
                title: "خدمات التخزين السحابي المدفوعة",
                description: "الدفع مقابل حفظ البيانات على السحابة",
                examples: ["Google Drive", "iCloud", "Dropbox Premium"]
            },
            matching: {
                type: "مطابقة دقيقة",
                similarity: 94,
                reasoning: "إجارة على حفظ الأموال (البيانات كأموال معنوية)",
                conditions: ["الأمان", "الخصوصية", "ضمان عدم الضياع"]
            }
        },
        {
            id: 12,
            historicalCase: {
                title: "الهبة والعطية بشرط العوض",
                description: "إعطاء شيء مقابل الحصول على آخر دون عقد بيع صريح",
                reference: "المعيار المعرب، ج6، ص512-534",
                ruling: "الهبة بشرط العوض كالبيع في الأحكام"
            },
            digitalCase: {
                title: "المحتوى المجاني مقابل البيانات الشخصية",
                description: "تطبيقات وخدمات مجانية تستخدم بيانات المستخدم",
                examples: ["Facebook", "Instagram", "التطبيقات المجانية"]
            },
            matching: {
                type: "مطابقة بالقواعد",
                similarity: 78,
                reasoning: "معاوضة ضمنية: الخدمة مقابل البيانات",
                conditions: ["وضوح الشروط", "حق الاطلاع", "إمكانية السحب"]
            }
        }
    ],

    // الحصول على نازلة بالمعرف
    getNazila: function(id) {
        return this.nawazil.find(n => n.id === id);
    },

    // البحث في النوازل
    search: function(keyword) {
        return this.nawazil.filter(n => 
            n.historicalCase.title.includes(keyword) ||
            n.digitalCase.title.includes(keyword) ||
            n.historicalCase.description.includes(keyword) ||
            n.digitalCase.description.includes(keyword)
        );
    },

    // الحصول على نوازل بنسبة تطابق معينة
    getBysimilarity: function(minSimilarity) {
        return this.nawazil.filter(n => n.matching.similarity >= minSimilarity);
    },

    // الحصول على نوازل بنوع مطابقة معين
    getByMatchingType: function(type) {
        return this.nawazil.filter(n => n.matching.type === type);
    },

    // الحصول على نوازل عشوائية
    getRandom: function(count = 3) {
        const shuffled = [...this.nawazil].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
};

// تصدير للاستخدام في الملفات الأخرى
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NawazilDatabase;
}
