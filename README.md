# Multilingual Django Project with Bootstrap 5

A multilingual Django project featuring support for Arabic, English, Swedish, and Turkish languages with Bootstrap 5 styling.

## Features

- **Multilingual Support**: Arabic, Swedish, English, Turkish
- **Dark Mode** with Bootstrap 5
- **Responsive Design** for all devices
- **Language Switcher** with flag icons
- **Right-to-Left (RTL) Support** for Arabic
- **Custom Font Sizing** for different languages
- **User Authentication System**
- **RESTful API** with Django REST Framework

## Project Structure

```
myproject/
├── core/                   # Core app for main site functionality
│   ├── templatetags/       # Custom template tags
│   │   └── form_helpers.py # Form field helpers
│   ├── templates/
│   │   ├── core/
│   │   │   ├── base.html   # Base template with language switcher and dark mode
│   │   │   ├── home.html
│   │   │   ├── about.html
│   │   │   └── contact.html
├── api/                    # REST API app
├── users/                  # User authentication app
├── myproject/              # Project settings
├── static/                 # Static files
│   ├── css/
│   │   └── custom.css
│   ├── scss/
│   │   └── custom.scss
│   ├── js/
│   │   └── main.js
│   │   └── language-switcher.js
│   ├── img/
│   └── flags/              # Flag icons for language switcher
├── locale/                 # Translation files
│   ├── ar/
│   ├── sv/
│   ├── en/
│   └── tr/
└── manage.py
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd myproject
   ```

2. Create a virtual environment and install dependencies:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. Install Node.js dependencies (optional, for SCSS):
   ```bash
   npm install
   ```

4. Build CSS files:
   ```bash
   npm run build:css
   ```

5. Run database migrations:
   ```bash
   python manage.py migrate
   ```

6. Compile translation messages:
   ```bash
   python manage.py compilemessages
   ```

7. Create a superuser:
   ```bash
   python manage.py createsuperuser
   ```

8. Run the development server:
   ```bash
   python manage.py runserver
   ```

## Working with Translations

### Adding a New Language

1. **Add the language to settings.py**:
   
   Open `myproject/settings.py` and add the new language code to the `LANGUAGES` list:
   ```python
   LANGUAGES = [
       ('en', _('English')),
       ('ar', _('Arabic')),
       ('sv', _('Swedish')),
       ('tr', _('Turkish')),
       ('fr', _('French')),  # Adding French as a new language
   ]
   ```

2. **Create the language directory structure**:
   ```bash
   mkdir -p locale/fr/LC_MESSAGES
   ```

3. **Generate translation files**:
   ```bash
   python manage.py makemessages -l fr
   ```
   This will create a `django.po` file in the `locale/fr/LC_MESSAGES/` directory.

4. **Edit the translation file**:
   
   Open `locale/fr/LC_MESSAGES/django.po` with a text editor and add translations for each message string:
   ```
   #: core/templates/core/home.html:12
   msgid "Welcome to our Multilingual Website"
   msgstr "Bienvenue sur notre site Web multilingue"
   ```

5. **Compile the translation file**:
   ```bash
   python manage.py compilemessages -l fr
   ```
   This creates a `django.mo` file that Django uses for translations.

6. **Add a flag icon**:
   
   Create or download an SVG flag for the new language and save it to `static/flags/fr.svg`

7. **Add custom font support** (if needed):
   
   Update `static/css/custom.css` or `static/scss/custom.scss` to add font specifications for the new language.

### Modifying Existing Translations

1. **Update translation files**:
   ```bash
   python manage.py makemessages -l ar -l en -l sv -l tr
   ```
   This will update all translation files with any new strings that need translating.

2. **Edit the translation files**:
   
   Open the specific language's `.po` file (e.g., `locale/ar/LC_MESSAGES/django.po`) and modify the translations as needed.

3. **Compile the updated translations**:
   ```bash
   python manage.py compilemessages
   ```

### Adding New Translatable Text

1. **In Templates**:
   
   Wrap any text that needs translation in `{% trans %}` tags or `{% blocktrans %}{% endblocktrans %}` blocks:
   ```html
   <h1>{% trans "Welcome" %}</h1>
   
   {% blocktrans %}
   This is a longer paragraph that needs to be translated as a whole.
   It can contain {{ variables }} and {% templatetags %}.
   {% endblocktrans %}
   ```

2. **In Python Code**:
   
   Use the translation function in Python files:
   ```python
   from django.utils.translation import gettext_lazy as _
   
   title = _("Welcome to our website")
   ```

3. **In JavaScript**:
   
   For JavaScript translations, you need to use Django's JavaScript catalog:
   
   Add to `urls.py`:
   ```python
   from django.views.i18n import JavaScriptCatalog
   
   urlpatterns = [
       # ...
       path('jsi18n/', JavaScriptCatalog.as_view(), name='javascript-catalog'),
   ]
   ```
   
   Include in template:
   ```html
   <script src="{% url 'javascript-catalog' %}"></script>
   <script>
     var translated_text = gettext("Welcome");
   </script>
   ```

4. **Update and compile translations**:
   ```bash
   python manage.py makemessages -a
   python manage.py compilemessages
   ```

### Translation Management Commands

- **Create/update translation files for all languages**:
  ```bash
  python manage.py makemessages -a
  ```

- **Create/update translation files for specific languages**:
  ```bash
  python manage.py makemessages -l ar -l fr
  ```

- **Create/update translation files with JavaScript support**:
  ```bash
  python manage.py makemessages -a --extension=html,txt,py,js
  ```

- **Compile all translation files**:
  ```bash
  python manage.py compilemessages
  ```

- **Compile specific language translation files**:
  ```bash
  python manage.py compilemessages -l ar
  ```

### Best Practices for Translations

1. **Use gettext_lazy for models and forms**:
   ```python
   from django.utils.translation import gettext_lazy as _
   
   class MyModel(models.Model):
       title = models.CharField(_("Title"), max_length=200)
   ```

2. **Use named placeholders in translations**:
   ```python
   # Instead of:
   _("Hello %s, you have %s messages") % (name, count)
   
   # Use:
   _("Hello %(name)s, you have %(count)s messages") % {'name': name, 'count': count}
   ```

3. **Handle pluralization properly**:
   ```html
   {% blocktrans count counter=list|length %}
   There is {{ counter }} item.
   {% plural %}
   There are {{ counter }} items.
   {% endblocktrans %}
   ```

4. **Consider context for ambiguous words**:
   ```python
   from django.utils.translation import pgettext
   
   month = pgettext("month name", "May")
   ```

5. **Avoid concatenating strings**:
   ```python
   # BAD:
   _("Hello") + " " + name
   
   # GOOD:
   _("Hello %(name)s") % {'name': name}
   ```

## Advanced Translation Features

### URL Translation

To translate URL patterns, use Django's `i18n_patterns`:

```python
# urls.py
from django.conf.urls.i18n import i18n_patterns
from django.urls import path

urlpatterns = [
    # Non-translatable URLs
    path('i18n/', include('django.conf.urls.i18n')),
]

urlpatterns += i18n_patterns(
    # Translatable URLs
    path(_('about/'), views.about, name='about'),
    path(_('contact/'), views.contact, name='contact'),
    prefix_default_language=True,
)
```

Don't forget to add URL translations to your `.po` files:

```
msgid "about/"
msgstr "a-propos/"
```

### Translating Model Content

For storing translated content in models, you can use third-party packages like `django-modeltranslation`:

1. Install the package:
   ```bash
   pip install django-modeltranslation
   ```

2. Add to `INSTALLED_APPS`:
   ```python
   INSTALLED_APPS = [
       # ...
       'modeltranslation',
       # ...
   ]
   ```

3. Create a `translation.py` file in your app:
   ```python
   from modeltranslation.translator import translator, TranslationOptions
   from .models import Article
   
   class ArticleTranslationOptions(TranslationOptions):
       fields = ('title', 'content')
   
   translator.register(Article, ArticleTranslationOptions)
   ```

4. Run migrations:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

### Setting up Language Detection

To automatically detect and set a user's preferred language:

1. Ensure `LocaleMiddleware` is in your `MIDDLEWARE` setting:
   ```python
   MIDDLEWARE = [
       # ...
       'django.middleware.locale.LocaleMiddleware',
       # ...
   ]
   ```

2. Configure language detection order in `settings.py`:
   ```python
   LANGUAGE_CODE = 'en'  # Default language
   
   # Order of language detection methods
   LOCALE_PATHS = (
       os.path.join(BASE_DIR, 'locale'),
   )
   ```

3. Use JavaScript to detect browser language (as shown in our `language-switcher.js`).

## Troubleshooting

### Language Switcher Not Working

1. Check browser console for errors
2. Ensure path in `next` input is correct
3. Verify that `set_language` URL is properly configured
4. Clear browser cache and cookies
5. Try using the direct form submission instead of JavaScript

### Compilation Errors

If you get errors with `compilemessages`:

1. Ensure GNU gettext is installed on your system
2. Check `.po` files for syntax errors
3. Ensure locale directories have correct permissions
4. Try running with verbose output:
   ```bash
   python manage.py compilemessages -v 2
   ```

### Translation Not Showing Up

1. Check if the compiled `.mo` file exists
2. Restart the Django server
3. Clear browser cache
4. Check that `USE_I18N = True` in settings
5. Verify language code in URL or cookie matches expected format

## License

MIT