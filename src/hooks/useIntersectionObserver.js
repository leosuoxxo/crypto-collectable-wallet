import { useEffect } from 'react'

// a hook of intersection observer API

export const useIntersectionObserver = ({
  root,
  target,
  onIntersect,
  threshold = 0,
  rootMargin = '0px',
  enabled = true,
}) => {
  useEffect(() => {
    if (!enabled) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting && onIntersect()
      },
      {
        root: root && root.current,
        rootMargin,
        threshold,
      },
    )

    const el = target && target.current

    if (!el) {
      return
    }

    observer.observe(el)

    return () => {
      observer.unobserve(el)
    }
  }, [target.current, enabled])
}
