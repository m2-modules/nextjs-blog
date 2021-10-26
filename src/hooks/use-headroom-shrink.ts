import { RefObject, useEffect } from 'react'

function toggleHeadroom(event: Event) {
  const root: HTMLDivElement | null =
    document.querySelector<HTMLDivElement>('#__next')
  if (!root) return
  if (!event.currentTarget) return

  if ((event.currentTarget as HTMLElement).scrollTop > 0) {
    root.classList.add('shrink-headroom')
  } else {
    root.classList.remove('shrink-headroom')
  }
}

function useHeadroomShrink(ref: RefObject<HTMLElement>): void {
  useEffect(() => {
    const element: HTMLElement | null = ref.current
    if (!element) return
    element.addEventListener('scroll', toggleHeadroom)

    return () => element.removeEventListener('scroll', toggleHeadroom)
  }, [ref])
}

export default useHeadroomShrink
