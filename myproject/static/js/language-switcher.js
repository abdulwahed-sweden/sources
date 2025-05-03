
document.addEventListener('DOMContentLoaded', function() {
    // إضافة معالجات أحداث لأزرار اللغة بشكل مباشر
    const languageButtons = document.querySelectorAll('.language-btn');
    const languageForm = document.getElementById('language-form');
    
    if (languageButtons.length > 0 && languageForm) {
        languageButtons.forEach(button => {
            button.addEventListener('click', function() {
                const selectedLang = this.value;
                
                // إنشاء عنصر إدخال مخفي للغة
                const langInput = document.createElement('input');
                langInput.type = 'hidden';
                langInput.name = 'language';
                langInput.value = selectedLang;
                
                // إزالة أي إدخالات لغة سابقة
                const prevLangInputs = languageForm.querySelectorAll('input[name="language"]');
                prevLangInputs.forEach(input => input.remove());
                
                // إضافة اللغة المحددة
                languageForm.appendChild(langInput);
                
                // إرسال النموذج
                languageForm.submit();
            });
        });
    }
});
