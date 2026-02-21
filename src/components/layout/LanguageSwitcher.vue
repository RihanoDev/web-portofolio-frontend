<template>
  <div class="relative z-50" ref="dropdownRef">
    <!-- Language Dropdown Button -->
    <button @click="isOpen = !isOpen" class="relative overflow-hidden group flex items-center space-x-2 px-3 py-2 rounded-lg hover:scale-105 transition-all duration-300 focus:outline-none lang-selector-btn" :title="currentLanguageName">
      <!-- Languages Icon -->
      <Languages class="w-4 h-4" style="color: var(--color-accent)" />

      <!-- current Language (hidden on mobile) -->
      <span class="hidden sm:block text-sm font-medium uppercase" style="color: var(--color-text-primary)">{{ locale }}</span>

      <!-- Dropdown Arrow -->
      <ChevronDown class="w-4 h-4 transition-transform duration-200" style="color: var(--color-text-secondary)" :class="{ 'rotate-180': isOpen }" />
    </button>

    <!-- Dropdown Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div v-if="isOpen" class="absolute right-0 mt-2 w-48 rounded-xl shadow-lg z-[9999] overflow-hidden mobile-dropdown lang-dropdown">
        <div class="p-2">
          <div class="text-xs font-semibold uppercase tracking-wide px-3 py-2" style="color: var(--color-text-secondary)">
            {{ $t("nav.language") || "Language" }}
          </div>

          <div class="space-y-1">
            <button
              v-for="lang in languages"
              :key="lang.code"
              @click="toggleLocale(lang.code)"
              class="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 group focus:outline-none lang-option"
              :class="{ 'lang-option-selected': locale === lang.code }"
            >
              <!-- Flag/Icon -->
              <span class="text-lg">{{ lang.flag }}</span>

              <!-- Language Name -->
              <div class="flex-1 text-left">
                <div class="text-sm font-medium" style="color: var(--color-text-primary)">{{ lang.name }}</div>
              </div>

              <!-- Selected Indicator -->
              <Check v-if="locale === lang.code" class="w-4 h-4" style="color: var(--color-accent)" />
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Languages, ChevronDown, Check } from "lucide-vue-next";
import { ref, computed, onMounted, onUnmounted } from "vue";

const { locale } = useI18n();
const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "id", name: "Indonesia", flag: "🇮🇩" },
];

const currentLanguageName = computed(() => {
  return languages.find((l) => l.code === locale.value)?.name || "Language";
});

const toggleLocale = (code: string) => {
  locale.value = code;
  localStorage.setItem("locale", code);
  isOpen.value = false;
};

const handleClickOutside = (event: Event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.lang-selector-btn {
  background-color: rgba(var(--color-secondary-rgb), 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.lang-selector-btn:hover {
  background-color: rgba(var(--color-secondary-rgb), 0.9);
  border-color: rgba(var(--accent-rgb), 0.3);
}

.lang-dropdown {
  background-color: rgba(var(--color-secondary-rgb), 0.95);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.lang-option:hover {
  background-color: rgba(var(--color-tertiary-rgb), 0.5);
}

.lang-option-selected {
  background-color: rgba(var(--color-tertiary-rgb), 0.6);
}

/* Light theme adaptations */
[data-theme="light"] .lang-dropdown,
[data-theme="light-blue"] .lang-dropdown {
  background-color: rgba(255, 255, 255, 0.95) !important;
  border-color: rgba(0, 0, 0, 0.1) !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;
}

[data-theme="light"] .lang-selector-btn,
[data-theme="light-blue"] .lang-selector-btn {
  background-color: rgba(255, 255, 255, 0.8) !important;
  border-color: rgba(0, 0, 0, 0.1) !important;
}

[data-theme="light"] .lang-selector-btn:hover,
[data-theme="light-blue"] .lang-selector-btn:hover {
  background-color: rgba(255, 255, 255, 0.9) !important;
  border-color: rgba(var(--accent-rgb), 0.3) !important;
}

[data-theme="light"] .lang-option:hover,
[data-theme="light-blue"] .lang-option:hover {
  background-color: rgba(0, 0, 0, 0.05) !important;
}

[data-theme="light"] .lang-option-selected,
[data-theme="light-blue"] .lang-option-selected {
  background-color: rgba(0, 0, 0, 0.08) !important;
}

/* Mobile-specific adjustments for lang selector */
@media (max-width: 768px) {
  .mobile-dropdown {
    position: static !important;
    width: 100% !important;
    margin-top: 0.5rem !important;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    max-height: 200px;
    overflow-y: auto;
  }
}

</style>
