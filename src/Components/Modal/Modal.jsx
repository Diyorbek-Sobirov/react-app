function Modal({isOpen, setIsOpen}) {
  const modalClickHandler = (e) => {
    if (e.target.matches('.modal--open')) {
      setIsOpen(false)
    }
  }
  return <div onClick={modalClickHandler} className={`modal ${isOpen ? 'modal--open' : ''}`}>
    <div className={`modal__content ${isOpen ? 'modal__content--open' : ''}`}>Modal Content</div>
  </div>
}

export default Modal