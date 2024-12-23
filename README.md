/smacks-app
├── /public
│   ├── /images
│   │   ├── logo.png
│   │   ├── menu-item1.jpg
│   │   ├── menu-item2.jpg
│   │   └── ...
│   ├── favicon.ico
│   └── manifest.json
├── /src
│   ├── /components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MenuItem.tsx
│   │   ├── AllergyAlert.tsx
│   │   ├── LanguageSelector.tsx
│   │   └── NotificationManager.tsx
│   ├── /pages
│   │   ├── index.tsx           # Homepage with truck location
│   │   ├── menu.tsx            # Menu page with items and filters
│   │   ├── order.tsx           # Pre-order form with payment options
│   │   ├── notifications.tsx   # Manage notification preferences
│   │   ├── about.tsx           # About page with details about SMACKS
│   │   └── api
│   │       ├── menu.ts         # API route to fetch menu data
│   │       ├── location.ts     # API route for real-time location
│   │       └── orders.ts       # API route to handle orders
│   ├── /styles
│   │   ├── globals.css
│   │   ├── layout.module.css
│   │   ├── menu.module.css
│   │   └── order.module.css
│   ├── /utils
│   │   ├── api.ts              # Utility for API calls
│   │   ├── language.ts         # Multi-language helper
│   │   └── notifications.ts    # Notification helper
│   ├── /data
│   │   ├── menu.json           # Local menu data (backup)
│   │   ├── languages.json      # Language content mapping
│   │   └── hours.json          # Operating hours schedule
│   └── app.tsx                 # Root app entry point
├── package.json
├── tsconfig.json
├── .eslintrc.js
├── .prettierrc
└── README.md
Explanation:
Public Folder:

Stores static assets like images, favicon, and PWA manifest.
Components:

Modular components such as MenuItem, LanguageSelector, and AllergyAlert for reusable functionality.
Pages:

Dedicated routes for homepage, menu, pre-order, and notifications.
API folder to handle backend logic.
Styles:

CSS files for global and module-specific styling.
Utils:

Helper files for multi-language support, notifications, and API communication.
Data:

Local JSON files for backup and initial content.
#   s m a c k s - a p p  
 