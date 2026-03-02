import { ref } from 'vue';

const isOffcanvasOpen = ref(false);

export const useOffcanvas = () => {
    const toggleOffcanvas = () => {
        isOffcanvasOpen.value = !isOffcanvasOpen.value;
    };

    const openOffcanvas = () => {
        isOffcanvasOpen.value = true;
    };

    const closeOffcanvas = () => {
        isOffcanvasOpen.value = false;
    };

    return {
        isOffcanvasOpen,
        toggleOffcanvas,
        openOffcanvas,
        closeOffcanvas
    };
};