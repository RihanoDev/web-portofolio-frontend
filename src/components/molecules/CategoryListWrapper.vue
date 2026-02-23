<template>
  <div class="category-wrapper relative z-50 mb-10">
    <div class="flex flex-wrap justify-center items-start gap-2">
      <button
        v-for="category in visibleCategories"
        :key="category"
        @click="selectCategory(category)"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none"
        :class="modelValue === category ? 'bg-gradient text-white shadow-lg border border-transparent' : 'category-btn'"
      >
        {{ category }}
      </button>

      <!-- Dropdown for More Categories -->
      <div v-if="hiddenCategories.length > 0" class="relative" ref="dropdownRef">
        <button
          @click="toggleDropdown"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-between gap-2 min-w-[140px] focus:outline-none"
          :class="isHiddenCategoryActive ? 'bg-gradient text-white shadow-lg border border-transparent' : 'category-btn'"
        >
          <span class="truncate max-w-[120px]" :class="{ 'text-white': isHiddenCategoryActive }">{{ isHiddenCategoryActive ? modelValue : 'More Categories' }}</span>
          <ChevronDown class="w-4 h-4 transition-transform duration-300 flex-shrink-0" :class="{ 'rotate-180': isDropdownOpen }" />
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
          <div
            v-if="isDropdownOpen"
            class="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 p-2 rounded-xl popup-dropdown z-[9999] flex flex-col"
            style="max-height: 400px"
          >
            <!-- Search Input -->
            <div class="mb-2 shrink-0">
              <div class="relative">
                <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search categories..."
                  class="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-sm text-primary focus:outline-none focus:border-accent transition-colors popup-search"
                />
              </div>
            </div>

            <!-- List Area -->
            <div class="flex-1 min-h-[50px] overflow-hidden flex">
              <!-- Scrollable Categories -->
              <div class="flex-1 overflow-y-auto pr-2 hide-scrollbar" ref="categoriesListRef" @scroll="onScroll">
                <!-- Searching State (Flat List) -->
                <div v-if="searchQuery">
                  <div v-if="filteredCategories.length === 0" class="p-4 text-center text-sm" style="color: var(--color-text-secondary);">
                    No categories found
                  </div>
                  <button
                    v-for="category in filteredCategories"
                    :key="category"
                    @click="selectCategory(category)"
                    class="px-4 py-2 w-full text-left rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none mb-1"
                    :class="modelValue === category ? 'bg-gradient text-white font-semibold' : 'text-secondary hover:bg-white/10 hover:text-primary dropdown-item'"
                  >
                    {{ category }}
                  </button>
                </div>
                
                <!-- Alphabetical Grouped State -->
                <div v-else>
                  <div v-for="group in groupedCategories" :key="group.letter" :id="'letter-' + group.letter" class="mb-2 group-section relative">
                    <div class="px-2 py-1 text-xs font-bold text-accent uppercase sticky top-0 z-10 backdrop-blur-md category-header rounded">
                      {{ group.letter }}
                    </div>
                    <button
                      v-for="category in group.items"
                      :key="category"
                      @click="selectCategory(category)"
                      class="px-4 py-2 w-full text-left rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none mb-1"
                      :class="modelValue === category ? 'bg-gradient text-white font-semibold' : 'text-secondary hover:bg-white/10 hover:text-primary dropdown-item'"
                    >
                      {{ category }}
                    </button>
                  </div>
                </div>
              </div>

              <!-- Alphabet Sidebar Index -->
              <div v-if="!searchQuery && availableLetters.length > 1" class="w-8 shrink-0 flex flex-col items-center border-l border-white/10 ml-2 py-1 overflow-y-auto hide-scrollbar">
                <button
                  v-for="letter in availableLetters"
                  :key="letter"
                  @click.stop="scrollToLetter(letter)"
                  class="text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold transition-all duration-200 mb-1.5 hover:scale-110 focus:outline-none"
                  :class="activeLetter === letter ? 'bg-gradient text-white shadow-md' : 'text-secondary hover:bg-white/10 hover:text-primary'"
                >
                  {{ letter }}
                </button>
              </div>
            </div>

          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { ChevronDown, Search } from 'lucide-vue-next';

const props = defineProps<{
  categories: string[];
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const visibleCategories = computed(() => props.categories.slice(0, 4));
const hiddenCategories = computed(() => props.categories.slice(4));
const isHiddenCategoryActive = computed(() => hiddenCategories.value.includes(props.modelValue));

const isDropdownOpen = ref(false);
const dropdownRef = ref(null);
const searchQuery = ref('');
const categoriesListRef = ref<HTMLElement | null>(null);
const activeLetter = ref('');

onClickOutside(dropdownRef, () => {
  if (isDropdownOpen.value) {
    isDropdownOpen.value = false;
  }
});

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
  if (isDropdownOpen.value) {
    searchQuery.value = '';
    nextTick(() => {
      if (categoriesListRef.value) {
        categoriesListRef.value.scrollTop = 0;
      }
      activeLetter.value = availableLetters.value[0] || '';
    });
  }
};

const selectCategory = (category: string) => {
  emit('update:modelValue', category);
  isDropdownOpen.value = false;
};

// Filtered categories for search
const filteredCategories = computed(() => {
  if (!searchQuery.value) return hiddenCategories.value;
  const lowerQuery = searchQuery.value.toLowerCase();
  return hiddenCategories.value.filter(cat => cat.toLowerCase().includes(lowerQuery));
});

// Grouped categories by alphabet
const groupedCategories = computed(() => {
  const groups: Record<string, string[]> = {};
  
  hiddenCategories.value.forEach(category => {
    let firstChar = category.charAt(0).toUpperCase();
    if (!/[A-Z]/.test(firstChar)) {
      firstChar = '#';
    }
    
    if (!groups[firstChar]) {
      groups[firstChar] = [];
    }
    groups[firstChar].push(category);
  });
  
  const sortedLetters = Object.keys(groups).sort((a, b) => {
    if (a === '#') return 1;
    if (b === '#') return -1;
    return a.localeCompare(b);
  });
  
  return sortedLetters.map(letter => ({
    letter,
    items: groups[letter].sort((a, b) => a.localeCompare(b))
  }));
});

const availableLetters = computed(() => groupedCategories.value.map(g => g.letter));

const scrollToLetter = (letter: string) => {
  activeLetter.value = letter;
  if (!categoriesListRef.value) return;
  
  const el = categoriesListRef.value.querySelector(`#letter-${letter}`) as HTMLElement;
  if (el) {
    categoriesListRef.value.scrollTo({
      top: el.offsetTop,
      behavior: 'smooth'
    });
  }
};

const onScroll = () => {
  if (!categoriesListRef.value || searchQuery.value) return;
  
  const containerTop = categoriesListRef.value.scrollTop;
  const sections = categoriesListRef.value.querySelectorAll('.group-section');
  
  let currentLetter = availableLetters.value[0] || '';
  
  sections.forEach((section) => {
    const el = section as HTMLElement;
    if (el.offsetTop - 50 <= containerTop) {
      currentLetter = el.id.replace('letter-', '');
    }
  });
  
  activeLetter.value = currentLetter;
};

</script>

<style scoped>
.category-wrapper {
  position: relative;
  z-index: 50; /* Ensure this is above other content but below fixed navbars */
}

/* Base Category Button */
.category-btn {
  background-color: rgba(var(--color-secondary-rgb), 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--color-text-secondary);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.category-btn:hover {
  color: var(--color-text-primary);
  border-color: rgba(var(--accent-rgb), 0.3);
}

/* Category Dropdown (Popup) */
.popup-dropdown {
  background-color: rgba(var(--color-secondary-rgb), 0.95);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  position: absolute; /* Never push content down */
}

.dropdown-item:hover {
  background-color: rgba(var(--color-tertiary-rgb), 0.5);
}

.popup-dropdown button:focus,
.popup-dropdown button:active {
  outline: none !important;
}

.category-header {
  background: rgba(var(--color-secondary-rgb), 0.8);
}

/* Custom Scrollbar for list */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(var(--accent-rgb), 0.3);
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(var(--accent-rgb), 0.5);
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Light Theme Adaptations */
[data-theme*="light"] .category-btn {
  background-color: rgba(255, 255, 255, 0.8);
  border-color: rgba(0, 0, 0, 0.1);
}

[data-theme*="light"] .category-btn:hover {
  background-color: rgba(255, 255, 255, 0.9);
}

[data-theme*="light"] .popup-dropdown {
  background-color: rgba(255, 255, 255, 0.95);
  border-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

[data-theme*="light"] .dropdown-item:hover,
[data-theme*="light"] .popup-search {
  background-color: rgba(0, 0, 0, 0.05);
  color: var(--color-text-primary);
}

[data-theme*="light"] .category-header {
  background: rgba(255, 255, 255, 0.9);
}
</style>
