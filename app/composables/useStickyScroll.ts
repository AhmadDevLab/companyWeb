import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useStickyScroll(offset = 250) {
    const isSticky = ref(false)
    let ticking = false

    const handleScroll = () => {
        if (ticking) return

        ticking = true

        requestAnimationFrame(() => {
            isSticky.value = window.scrollY > offset
            ticking = false
        })
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll)
    })

    return { isSticky }
}