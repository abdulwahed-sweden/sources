# Multilingual Django Project with Bootstrap 5

مشروع Django متعدد اللغات مع Bootstrap 5 يدعم الواجهات العربية والإنجليزية والسويدية والتركية

## المميزات

- **دعم تعدد اللغات**: العربية، السويدية، الإنجليزية، التركية
- **الوضع المظلم** مع Bootstrap 5
- **تصميم متجاوب** لجميع الأجهزة
- **مبدل لغة** مع أيقونات الأعلام
- **دعم اليمين إلى اليسار (RTL)** للغة العربية
- **أحجام خط مخصصة** للنص العربي
- **نظام مصادقة المستخدمين**
- **واجهة برمجة تطبيقات RESTful** مع Django REST Framework

## هيكل المشروع

```
myproject/
├── core/                   # تطبيق Core للوظائف الرئيسية للموقع
│   ├── templatetags/       # وسوم القوالب المخصصة
│   │   └── form_helpers.py # مساعدات حقول النماذج
│   ├── templates/
│   │   ├── core/
│   │   │   ├── base.html   # قالب أساسي مع مبدل اللغة والوضع المظلم
│   │   │   ├── home.html
│   │   │   ├── about.html
│   │   │   └── contact.html
├── api/                    # تطبيق REST API
├── users/                  # تطبيق مصادقة المستخدمين
├── myproject/              # إعدادات المشروع
├── static/                 # الملفات الثابتة
│   ├── css/
│   │   └── custom.css
│   ├── scss/
│   │   └── custom.scss
│   ├── js/
│   │   └── main.js
│   ├── img/
│   └── flags/              # أيقونات الأعلام لمبدل اللغة
├── locale/                 # ملفات الترجمة
│   ├── ar/
│   ├── sv/
│   ├── en/
│   └── tr/
└── manage.py
```

## التثبيت

1. استنساخ المستودع:
   ```bash
   git clone <repository-url>
   cd myproject
   ```

2. إنشاء بيئة افتراضية وتثبيت التبعيات:
   ```bash
   python -m venv venv
   source venv/bin/activate  # على Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. تثبيت تبعيات Node.js (اختياري، لاستخدام SCSS):
   ```bash
   npm install
   ```

4. بناء ملفات CSS:
   ```bash
   npm run build:css
   ```

5. تشغيل ترحيلات قاعدة البيانات:
   ```bash
   python manage.py migrate
   ```

6. تجميع ملفات الترجمة:
   ```bash
   python manage.py compilemessages
   ```

7. إنشاء مستخدم مشرف:
   ```bash
   python manage.py createsuperuser
   ```

8. تشغيل خادم التطوير:
   ```bash
   python manage.py runserver
   ```

## التطوير

### العمل مع Bootstrap و SCSS

لمراقبة التغييرات في ملفات SCSS وإعادة البناء تلقائيًا:
```bash
npm run watch:css
```

### إضافة لغات جديدة

1. أضف اللغة إلى إعداد `LANGUAGES` في `settings.py`
2. أنشئ ملفات الترجمة:
   ```bash
   python manage.py makemessages -l <language_code>
   ```
3. حرر ملف `.po` في دليل `locale/<language_code>/LC_MESSAGES/`
4. قم بتجميع الرسائل:
   ```bash
   python manage.py compilemessages
   ```
5. أضف ملف SVG للعلم في `static/flags/<language_code>.svg`

## ملاحظات بخصوص التحويل من Tailwind إلى Bootstrap

تم تحويل هذا المشروع من Tailwind CSS إلى Bootstrap 5 مع الحفاظ على جميع الميزات:

1. **ميزات Bootstrap الرئيسية المستخدمة**:
   - نظام الشبكة المرن باستخدام فئات `container`, `row`, `col`
   - مكونات البطاقات `card` و الأزرار `button` و النماذج `form`
   - دعم RTL متكامل من خلال نسخة Bootstrap ذات الاتجاه اليمين إلى اليسار
   - مكونات التنقل والقوائم المنسدلة

2. **تعديلات CSS المخصصة**:
   - تم الحفاظ على دعم الخط العربي المخصص
   - تطبيق تنسيقات الوضع المظلم على مكونات Bootstrap
   - إضافة تعديلات RTL لضمان تجربة مستخدم سلسة باللغة العربية

3. **تغييرات JavaScript**:
   - استبدال Alpine.js بـ vanilla JavaScript
   - استخدام مكونات Bootstrap المدمجة بدلاً من العناصر المخصصة
   - الحفاظ على وظيفة تبديل الوضع المظلم ودعم RTL

## الاستفادة من ميزات Bootstrap

- **قوالب موحدة**: تستخدم جميع القوالب فئات Bootstrap القياسية
- **دعم RTL**: البناء باستخدام CSS خاص بـ RTL من Bootstrap
- **نماذج منسقة مسبقًا**: واجهة مستخدم متسقة للنماذج مع التحقق من الصحة
- **تجاوب بسيط**: نظام شبكة أسهل في الفهم والتطبيق

## الترخيص

MIT