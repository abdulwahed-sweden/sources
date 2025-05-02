# Multilingual Django Project with Tailwind CSS

A Django project template with multi-language support, Tailwind CSS integration, dark mode, and responsive design.

## Features

- **Multi-language support**: Arabic, Swedish, English, Turkish
- **Dark mode** with Tailwind CSS
- **Responsive design** for all devices
- **Language switcher** with flag icons
- **Right-to-left (RTL) support** for Arabic
- **Custom font sizing** for Arabic text
- **User authentication** system
- **RESTful API** with Django REST Framework

## Project Structure

```
myproject/
├── core/                   # Core app for main site functionality
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
│   │   └── tailwind-output.css
│   ├── js/
│   │   └── main.js
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

3. Install Node.js dependencies:
   ```bash
   npm install
   ```

4. Build the Tailwind CSS:
   ```bash
   npm run build:css
   ```

5. Run the database migrations:
   ```bash
   python manage.py migrate
   ```

6. Compile the translation files:
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

## Development

### Working with Tailwind CSS

To watch for changes in the CSS files and automatically rebuild:
```bash
npm run watch:css
```

### Adding New Languages

1. Add the language to the `LANGUAGES` setting in `settings.py`
2. Create translation files:
   ```bash
   python manage.py makemessages -l <language_code>
   ```
3. Edit the `.po` file in the `locale/<language_code>/LC_MESSAGES/` directory
4. Compile messages:
   ```bash
   python manage.py compilemessages
   ```
5. Add a flag SVG file in `static/flags/<language_code>.svg`

## License

MIT