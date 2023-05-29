const observeIntersection = (ref, options) => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in')
        observer.unobserve(entry.target)
      }
    })
  }, options)

  if (ref.current) {
    observer.observe(ref.current)
  }

  return observer
}

export default observeIntersection
