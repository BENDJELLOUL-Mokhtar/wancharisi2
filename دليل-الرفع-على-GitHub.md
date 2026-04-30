# دليل رفع المنصة على GitHub

## الحالة الحالية ✅

تم بنجاح:
- ✅ تهيئة Git repository
- ✅ إضافة جميع الملفات (27 ملف)
- ✅ عمل commit أولي
- ✅ تكوين الفرع الرئيسي (main)

---

## خطوات الرفع على GitHub

### 1️⃣ إنشاء Repository على GitHub

1. افتح [GitHub.com](https://github.com)
2. سجل الدخول إلى حسابك (أو أنشئ حساب جديد)
3. انقر على زر **"+"** في الأعلى ← **"New repository"**

### 2️⃣ إعدادات Repository المقترحة

**معلومات Repository:**
- **Repository name:** `wancharisi-platform` (أو أي اسم تفضله)
- **Description:** `منصة الإمام أحمد بن يحيى الونشريسي الرقمية - تطبيق منهج فقه النوازل على النوازل الرقمية المعاصرة`
- **Visibility:** 
  - ✅ **Public** (إذا أردت أن تكون المنصة متاحة للجميع)
  - 🔒 **Private** (إذا أردت إبقاءها خاصة)

**خيارات إضافية:**
- ⚠️ **لا تُفعّل** "Add a README file" (لأن لديك README موجود)
- ⚠️ **لا تُفعّل** "Add .gitignore" (لأن لديك .gitignore موجود)
- ⚠️ **لا تُفعّل** "Choose a license" (يمكنك إضافتها لاحقاً)

4. انقر على **"Create repository"**

---

### 3️⃣ ربط Repository المحلي بـ GitHub

بعد إنشاء Repository، ستظهر لك تعليمات GitHub. استخدم هذه الأوامر في VS Code Terminal:

#### الطريقة الأولى (HTTPS):
```powershell
# استبدل USERNAME باسم مستخدمك على GitHub
# استبدل REPO_NAME باسم Repository الذي أنشأته

git remote add origin https://github.com/USERNAME/REPO_NAME.git
git push -u origin main
```

#### الطريقة الثانية (SSH - إذا كان لديك SSH key):
```powershell
git remote add origin git@github.com:USERNAME/REPO_NAME.git
git push -u origin main
```

---

### 4️⃣ التحقق من الرفع

بعد تنفيذ الأوامر بنجاح:
1. افتح صفحة Repository على GitHub
2. ستجد جميع الملفات موجودة
3. ملف [README.md](README.md) سيظهر تلقائياً في الصفحة الرئيسية

---

## ⚠️ تنبيهات مهمة

### حجم ملفات PDF

لاحظت أن مجلد "مؤلفات الونشريسي" يحتوي على ملفات PDF. GitHub لديه قيود:
- **الحد الأقصى لحجم الملف:** 100 MB
- **الحد الأقصى المُوصى به:** 50 MB

**إذا كانت الملفات كبيرة:**

**الخيار 1: استبعاد ملفات PDF (مؤقتاً)**
```powershell
# إضافة ملفات PDF إلى .gitignore
echo "مؤلفات الونشريسي/*.pdf" >> .gitignore

# إزالة ملفات PDF من Git (لكن تبقى محلياً)
git rm --cached "مؤلفات الونشريسي/*.pdf"

# عمل commit جديد
git commit -m "استبعاد ملفات PDF الكبيرة"
git push
```

**الخيار 2: استخدام Git LFS (Large File Storage)**
```powershell
# تثبيت Git LFS (إذا لم يكن مثبتاً)
git lfs install

# تتبع ملفات PDF
git lfs track "مؤلفات الونشريسي/*.pdf"

# إضافة ملف .gitattributes
git add .gitattributes

# عمل commit
git commit -m "إضافة Git LFS لملفات PDF"
git push
```

**الخيار 3: رفع PDF على خدمة تخزين سحابية**
- رفع الملفات على Google Drive / OneDrive / Dropbox
- استبدال الملفات المحلية بروابط التحميل في الكود

---

## 🌐 تفعيل GitHub Pages (لعرض المنصة أونلاين)

بعد رفع المشروع، يمكنك تفعيل GitHub Pages لجعل المنصة متاحة على الإنترنت:

### الخطوات:

1. في صفحة Repository على GitHub
2. اذهب إلى **Settings** (الإعدادات)
3. في القائمة الجانبية، اختر **Pages**
4. في **Source**:
   - اختر Branch: **main**
   - اختر Folder: **/ (root)**
5. انقر **Save**
6. انتظر بضع دقائق

### رابط المنصة:
```
https://USERNAME.github.io/REPO_NAME/
```

سيكون بإمكان أي شخص زيارة المنصة عبر هذا الرابط!

---

## 📝 أوامر Git مفيدة للمستقبل

### رفع تحديثات جديدة:
```powershell
git add .
git commit -m "وصف التحديث"
git push
```

### التحقق من الحالة:
```powershell
git status
```

### عرض السجل:
```powershell
git log --oneline
```

### إنشاء فرع جديد:
```powershell
git checkout -b feature-name
```

### دمج الفروع:
```powershell
git checkout main
git merge feature-name
```

---

## 🔐 المصادقة (Authentication)

عند تنفيذ `git push` لأول مرة، قد يطلب منك GitHub:

### HTTPS:
- **Username:** اسم مستخدم GitHub
- **Password:** استخدم **Personal Access Token** (ليس كلمة المرور العادية)

**لإنشاء Personal Access Token:**
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token
3. اختر الصلاحيات: `repo` (full control)
4. انسخ Token واحفظه (لن يظهر مرة أخرى!)

### SSH:
إذا كنت تفضل SSH، اتبع دليل GitHub لإعداد SSH Keys.

---

## 📞 الدعم

إذا واجهت أي مشكلة:
1. تحقق من رسائل الخطأ في Terminal
2. راجع [GitHub Docs](https://docs.github.com)
3. تواصل مع الدعم الفني

---

## ✅ قائمة التحقق

- [ ] إنشاء repository على GitHub
- [ ] ربط repository المحلي بـ GitHub
- [ ] رفع الملفات (git push)
- [ ] التحقق من ظهور الملفات على GitHub
- [ ] (اختياري) تفعيل GitHub Pages
- [ ] (اختياري) إضافة LICENSE
- [ ] (اختياري) إضافة CONTRIBUTING.md
- [ ] (اختياري) إضافة وصف وموضوعات للـ repository

---

**آخر تحديث:** 30 أبريل 2026
**الحالة:** ✅ جاهز للرفع على GitHub
