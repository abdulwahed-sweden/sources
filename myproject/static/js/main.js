/**
 * ملف جافاسكريبت الرئيسي للمشروع متعدد اللغات
 * محسن للوضع الداكن وتحويل اللغة وتوافق الخطوط
 */

// تنفيذ الكود عند تحميل المستند
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة tooltips بوتستراب
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // تهيئة popovers بوتستراب
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
    
    // تهيئة وظيفة الوضع الداكن
    initDarkMode();
    
    // معالجة تعديلات RTL
    handleRTLAdjustments();
});

/**
 * تهيئة وظيفة الوضع الداكن
 */
function initDarkMode() {
    // التحقق من تفضيل السمة المحفوظ أو استخدام تفضيل نظام التشغيل
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // تطبيق الوضع الداكن إذا كان محفوظًا أو مفضلًا
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
        updateDarkModeIcons(true);
        
        // تحديث عناصر النماذج والنصوص للوضع الداكن
        updateFormElementsForDarkMode(true);
    }
    
    // وظيفة زر تبديل الوضع الداكن
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const isDarkMode = document.body.classList.contains('dark-mode');
            
            // تحديث واجهة المستخدم
            updateDarkModeIcons(isDarkMode);
            
            // تحديث عناصر النماذج والنصوص
            updateFormElementsForDarkMode(isDarkMode);
            
            // حفظ التفضيل في localStorage
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        });
    }
}

/**
 * تحديث أيقونات تبديل الوضع الداكن بناءً على الوضع الحالي
 */
function updateDarkModeIcons(isDarkMode) {
    const lightModeIcon = document.querySelector('.light-mode-icon');
    const darkModeIcon = document.querySelector('.dark-mode-icon');
    
    if (isDarkMode) {
        if (lightModeIcon) lightModeIcon.classList.add('d-none');
        if (darkModeIcon) darkModeIcon.classList.remove('d-none');
    } else {
        if (lightModeIcon) lightModeIcon.classList.remove('d-none');
        if (darkModeIcon) darkModeIcon.classList.add('d-none');
    }
}

/**
 * تحديث عناصر النماذج للوضع الداكن
 * هذه الوظيفة تضمن تطبيق ألوان النص الصحيحة
 */
function updateFormElementsForDarkMode(isDarkMode) {
    // تحديث فئات النص للنصوص والروابط
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, label, li, a');
    
    textElements.forEach(element => {
        if (isDarkMode) {
            // في الوضع الداكن، نضمن أن النص مرئي جيدًا
            if (element.tagName.toLowerCase() === 'a') {
                // لا نفعل شيئًا هنا، نستخدم CSS للتنسيق
            }
        } else {
            // في الوضع الفاتح، نزيل أي تنسيقات مضافة
            element.style.color = '';
        }
    });
    
    // تحديث عناصر النماذج
    const formElements = document.querySelectorAll('input, textarea, select');
    formElements.forEach(element => {
        if (isDarkMode) {
            element.classList.add('dark-form-element');
        } else {
            element.classList.remove('dark-form-element');
        }
    });
}

/**
 * معالجة تعديلات تخطيط RTL
 */
function handleRTLAdjustments() {
    // التحقق مما إذا كان التخطيط الحالي هو RTL
    const isRTL = document.documentElement.dir === 'rtl';
    if (!isRTL) return;
    
    // إصلاح القوائم المنسدلة في وضع RTL
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(dropdown => {
        dropdown.classList.add('dropdown-menu-end');
    });
    
    // إصلاح اتجاهات مجموعات الأزرار
    const buttonGroups = document.querySelectorAll('.btn-group');
    buttonGroups.forEach(group => {
        group.classList.add('flex-row-reverse');
    });
    
    // تصحيح المحاذاة لبعض العناصر في RTL
    const textEndElements = document.querySelectorAll('.text-end');
    textEndElements.forEach(element => {
        element.classList.remove('text-end');
        element.classList.add('text-start');
    });
    
    const textMdEndElements = document.querySelectorAll('.text-md-end');
    textMdEndElements.forEach(element => {
        element.classList.remove('text-md-end');
        element.classList.add('text-md-start');
    });
    
    // ضبط هوامش الأزرار والروابط
    const marginButtons = document.querySelectorAll('.me-3, .ms-3, .me-2, .ms-2');
    marginButtons.forEach(button => {
        if (button.classList.contains('me-3')) {
            button.classList.remove('me-3');
            button.classList.add('ms-3');
        } else if (button.classList.contains('ms-3')) {
            button.classList.remove('ms-3');
            button.classList.add('me-3');
        } else if (button.classList.contains('me-2')) {
            button.classList.remove('me-2');
            button.classList.add('ms-2');
        } else if (button.classList.contains('ms-2')) {
            button.classList.remove('ms-2');
            button.classList.add('me-2');
        }
    });
}