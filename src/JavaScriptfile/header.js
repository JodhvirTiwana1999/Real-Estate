export function setupScrollHeaderEffect() {
  const handleScroll = () => {
    const header = document.querySelector('header');
    console.log('HEADER:', header); 

    if (header && window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  };

  
  setTimeout(() => {
    window.addEventListener('scroll', handleScroll);
  }, 0);

  return () => window.removeEventListener('scroll', handleScroll);
}
