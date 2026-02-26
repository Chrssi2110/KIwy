/**
 * KIWY Shared Components
 * Zentrale Datei für alle gemeinsamen UI-Komponenten.
 * Wird von jeder HTML-Seite eingebunden.
 */

// ── Tailwind Config ──────────────────────────────────────────────
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#F09539",
                secondary: "#8B4513",
                accent: "#FF9500",
                "background-light": "#FFFAF5",
                "background-dark": "#1F1A17",
                "surface-light": "#FFFFFF",
                "surface-dark": "#2A2520",
            },
            fontFamily: {
                display: ["Poppins", "sans-serif"],
                body: ["Nunito", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.75rem",
            },
        },
    },
};

// ── Detect current page ──────────────────────────────────────────
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

// ── Assistant Bar ────────────────────────────────────────────────
function renderAssistantBar() {
    const isChatbot = currentPage === 'chatbot.html';
    const barText = isChatbot
        ? 'Du chattest gerade mit dem KIWY Assistenten'
        : 'KIWY Assistent ist bereit, dir zu helfen!';
    const linkHref = isChatbot ? 'index.html' : 'chatbot.html';
    const linkIcon = isChatbot ? 'arrow_back' : 'arrow_forward';
    const linkText = isChatbot ? 'Zurück zur Übersicht' : 'Zum Chat';

    const el = document.getElementById('assistant-bar');
    if (!el) return;
    el.outerHTML = `
    <div class="bg-gradient-to-r from-primary to-[#d4812f] text-white py-2 px-4">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <div class="flex items-center gap-2">
                <span class="material-icons-outlined text-sm">smart_toy</span>
                <span class="text-sm font-medium">${barText}</span>
            </div>
            <a href="${linkHref}"
                class="flex items-center gap-1 text-sm font-medium hover:text-orange-200 transition-colors">
                <span class="material-icons-outlined text-sm">${linkIcon}</span>
                <span>${linkText}</span>
            </a>
        </div>
    </div>`;
}

// ── Navigation ───────────────────────────────────────────────────
function renderNavigation() {
    const navLinks = [
        { href: 'index.html', label: 'Übersicht', match: ['index.html', ''] },
        { href: 'firmen-wiki.html', label: 'Firmen-Wiki', match: ['firmen-wiki.html'] },
        { href: 'team-verzeichnis.html', label: 'Team-Verzeichnis', match: ['team-verzeichnis.html'] },
        { href: 'chatbot.html', label: 'KI-Assistent', match: ['chatbot.html'] },
    ];

    const activeClass = 'border-primary text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium';
    const inactiveClass = 'border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium';

    const linksHtml = navLinks.map(link => {
        const isActive = link.match.includes(currentPage);
        const cls = isActive ? activeClass : inactiveClass;
        return `<a class="${cls}" href="${link.href}">${link.label}</a>`;
    }).join('\n                        ');

    const isHomepage = currentPage === 'index.html' || currentPage === '';
    const logoHtml = isHomepage
        ? `<div class="flex items-center gap-2">
                            <span class="font-display font-bold text-3xl text-primary tracking-tight">KIWY</span>
                            <img src="kiwi-logo.png" alt="KIWY Kiwi" class="h-8 w-8 object-contain -ml-1">
                        </div>`
        : `<a href="index.html" class="flex items-center gap-2">
                            <span class="font-display font-bold text-3xl text-primary tracking-tight">KIWY</span>
                            <img src="kiwi-logo.png" alt="KIWY Kiwi" class="h-8 w-8 object-contain -ml-1">
                        </a>`;

    const el = document.getElementById('main-nav');
    if (!el) return;
    el.outerHTML = `
    <nav class="bg-surface-light dark:bg-surface-dark shadow-sm border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex">
                    <div class="flex-shrink-0 flex items-center gap-2">
                        ${logoHtml}
                    </div>
                    <div class="hidden sm:ml-8 sm:flex sm:space-x-8">
                        ${linksHtml}
                    </div>
                </div>
                <div class="flex items-center gap-4">
                    <a href="it-support.html"
                        class="p-2 rounded-full text-primary hover:bg-orange-50 dark:hover:bg-primary/20 transition-colors"
                        title="IT-Support">
                        <span class="material-icons-outlined">headset_mic</span>
                    </a>
                    <button
                        class="bg-surface-light dark:bg-surface-dark p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none relative">
                        <span class="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
                        <span class="material-icons-outlined">notifications</span>
                    </button>
                    <div class="flex items-center gap-3">
                        <img alt="User avatar"
                            class="h-8 w-8 rounded-full border border-gray-200 dark:border-gray-700 object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWhnYueVnA9O2Kjjfo_KCm8NhT5u1HVR84doUsfVgiM2fN_2T47IboAYpOyb6d1FLOLyzw5VjUyynvAi45dqRFkXpC4BMxebBsyFg0SwuimE31SVh5kCvx_wKSjx_wOHmuLpRoWLnAFJqdRpB3BPGfyEf6NAX8D2GSXbJWb1AjDA4hEjDHCTJp0NjD7qg7kxYd913ZU87VKWi_udUA5ToABPtqONf7xqLrLw9bDclll2-abu5cf9LZnQdWJrz99IvotNsI2xiggYOS" />
                        <div class="hidden md:block text-sm">
                            <p class="font-medium text-gray-700 dark:text-gray-200">Valerie Schneider</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">Produktdesigner</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>`;
}

// ── Footer ───────────────────────────────────────────────────────
function renderFooter() {
    const el = document.getElementById('main-footer');
    if (!el) return;
    el.outerHTML = `
    <footer class="border-t border-gray-200 dark:border-gray-800 bg-surface-light dark:bg-surface-dark mt-auto">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="flex items-center gap-2 mb-4 md:mb-0">
                    <span class="font-display font-bold text-lg text-primary tracking-tight">KIWY</span>
                    <span class="text-xs text-gray-500 dark:text-gray-400">© 2026 Internes Tool</span>
                </div>
                <div class="flex space-x-6">
                    <a class="text-gray-400 hover:text-gray-500 text-sm" href="#">Datenschutz</a>
                    <a class="text-gray-400 hover:text-gray-500 text-sm" href="#">Nutzungsbedingungen</a>
                    <a class="text-gray-400 hover:text-gray-500 text-sm" href="#">HR kontaktieren</a>
                </div>
            </div>
        </div>
    </footer>`;
}

// ── Dark Mode ────────────────────────────────────────────────────
function initDarkMode() {
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
    }

    // Toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'fixed bottom-4 left-4 z-50 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-[#d4812f] transition-colors focus:outline-none';
    toggleBtn.innerHTML = '<span class="material-icons-outlined block">dark_mode</span>';
    toggleBtn.onclick = () => {
        document.documentElement.classList.toggle('dark');
        const icon = toggleBtn.querySelector('span');
        if (document.documentElement.classList.contains('dark')) {
            icon.textContent = 'light_mode';
        } else {
            icon.textContent = 'dark_mode';
        }
    };
    document.body.appendChild(toggleBtn);
}

// ── Init all shared components ───────────────────────────────────
function initSharedComponents() {
    renderAssistantBar();
    renderNavigation();
    renderFooter();
    initDarkMode();
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', initSharedComponents);
