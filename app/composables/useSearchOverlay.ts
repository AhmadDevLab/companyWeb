import { ref } from 'vue';

const isSearchOpen = ref(false);

export const useSearchOverlay = () => {
    const toggleSearch = () => {
        isSearchOpen.value = !isSearchOpen.value;
    };

    const openSearch = () => {
        console.log('Opening search overlay');
        isSearchOpen.value = true;
    };

    const closeSearch = () => {
        isSearchOpen.value = false;
    };

    return {
        isSearchOpen,
        toggleSearch,
        openSearch,
        closeSearch
    };
};