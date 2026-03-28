
# المعمل الافتراضي – Virtual Lab

<p align="center">
  <img src="images/cu_logo.ico" alt="شعار المعمل" width="120">
</p>

<p align="center">
  <strong>منصة تعليمية تفاعلية تحتوي على تجارب محاكاة في الفيزياء، الرياضيات، والعلوم.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white"/>
</p>

---

## 📖 عن المشروع

**المعمل الافتراضي** هو موقع ويب يهدف إلى تسهيل التعليم التفاعلي من خلال تقديم مجموعة من التجارب العلمية والرياضية في بيئة محاكاة. يمكن للطلاب والمعلمين استكشاف المفاهيم بطريقة بصرية وتفاعلية دون الحاجة إلى تجهيزات معملية حقيقية.

يحتوي الموقع على:
- تصنيفات للتجارب: **العلوم**، **الفيزياء**، **الرياضيات**، و**الكل**.
- شريط بحث للوصول السريع إلى التجارب.
- إمكانية التبديل بين عرض **الشبكة** و**القائمة**.
- **الوضع الليلي** (Dark Mode) مع حفظ التفضيل.
- تصميم متجاوب يحاكي تجربة سطح المكتب على الهواتف (مع تمرير أفقي).

---

## ✨ المميزات

- **واجهة مستخدم عربية بالكامل** (من اليمين لليسار).
- **عرض جميع التجارب** عند تحميل الصفحة.
- **فلترة حسب المادة** عبر أزرار التصنيف (صور مصغرة + عنوان).
- **بحث فوري** – يبرز النتائج ويتمركز إليها.
- **حفظ تفضيلات المستخدم** (الوضع المظلم، العرض الشبكي/القائمة) عبر Local Storage.
- **روابط مستقرة** – تمت إعادة تسمية الملفات والمجلدات بأسماء إنجليزية لضمان التوافق مع GitHub Pages.
- **صفحات تجارب منفصلة** يمكن تعديلها لاحقاً لتصبح روابط حقيقية.

---

## 🚀 كيفية الاستخدام

1. **استنساخ المشروع**  
   ```bash
   git clone https://github.com/your-username/virtual-lab.git
   ```
2. **تعديل الروابط**  
   داخل ملف `index.html`، تأكد من أن مسارات التجارب (`href`) تشير إلى الملفات الفعلية على جهازك أو على GitHub.
3. **رفع الملفات إلى GitHub**  
   تأكد من رفع جميع مجلدات التجارب مع الصور الخاصة بها.
4. **تفعيل GitHub Pages**  
   اذهب إلى `Settings > Pages` واختر الفرع الرئيسي كـ Source، وسيتم نشر الموقع على رابط مثل `https://your-username.github.io/virtual-lab/`.

---

## 📁 هيكل المشروع

```
virtual-lab/
├── index.html                     # الصفحة الرئيسية
├── images/                        # صور الشعار والخلفيات
│   ├── picher/
│   │   ├── logo.png
│   │   ├── Chemistry.png
│   │   ├── Physical.png
│   │   └── Math.png
│   ├── cu_logo.ico
│   └── bb.png
├── newton-first-law/              # تجارب الفيزياء
│   ├── niotan1_all.html
│   └── niotan-1.png
├── reflection-1/                  # تجربة الانعكاس
├── math/                          # تجارب الرياضيات
│   ├── tafatol/
│   ├── sinn/
│   └── ...
├── human-plant/                   # تجارب العلوم
├── oxygen-cycle/
└── ...                            # باقي المجلدات
```

**ملاحظة:** أسماء المجلدات والملفات تحولت إلى إنجليزية لضمان عدم تعارض مع GitHub Pages.

---

## 🛠 التقنيات المستخدمة

- **HTML5** – بناء هيكل الصفحات.
- **CSS3** – التصميم، المتغيرات، الوضع المظلم، شبكات المرونة.
- **JavaScript (ES6)** – منطق التصفية، البحث، تبديل العرض، حفظ الإعدادات.
- **Font Awesome** – أيقونات إضافية.

---

## 📝 كيفية إضافة تجارب جديدة

1. أضف مجلد التجربة في المسار المناسب (مثلاً ضمن `physics/` أو `math/` أو `science/`).
2. ضع ملف `index.html` للتجربة داخل المجلد مع الصور المطلوبة.
3. افتح `index.html` الرئيسي وأضف عنصر `li` جديد في القسم المناسب (الفيزياء، الرياضيات، العلوم) مع تحديث `href` ومسار الصورة.
4. أعِد رفع الملفات إلى GitHub.

**مثال لإضافة تجربة فيزياء جديدة:**
```html
<li>
  <a class="tile" href="./new-experiment/index.html">
    <div class="image-holder"><img src="new-experiment/thumbnail.png" alt="وصف"></div>
    <div class="information">
      <div class="title-holder"><span class="title">اسم التجربة</span></div>
      <div class="icons">...</div>
    </div>
  </a>
</li>
```

---

## 🌐 العيش المباشر (Live Demo)

يمكنك مشاهدة الموقع مباشرة عبر الرابط التالي (بعد تفعيل GitHub Pages):  
[https://your-username.github.io/virtual-lab/](https://your-username.github.io/virtual-lab/)

---

## 🤝 المساهمة

نرحب بالمساهمات! إذا أردت إضافة تجارب جديدة أو تحسين التصميم:
1. عمل Fork للمشروع.
2. إنشاء فرع جديد (`git checkout -b feature/amazing-feature`).
3. تنفيذ التغييرات.
4. رفع التغييرات (`git push origin feature/amazing-feature`).
5. فتح Pull Request.

---

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة **MIT** – يمكن استخدامه وتعديله بحرية للأغراض التعليمية وغير التجارية.

---

## 📧 التواصل

للاستفسارات أو الدعم:
- البريد الإلكتروني: info@virtuallab.edu  
- أو عبر منصة GitHub Issues.

---

<p align="center">تم تصميم وتطوير الموقع بواسطة فريق المعمل الافتراضي – وزارة التربية والتعليم، الجمهورية اليمنية.</p>
```
