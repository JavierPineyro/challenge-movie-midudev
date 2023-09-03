export function onReadListChange(callback) {
  function getReadList() {
    const readList = JSON.parse(localStorage.getItem('readList')) ?? '[]'
    callback(readList)
  }
  function onStorage(event) {
    if (event.key === 'readList') {
      getReadList()
    }
  }

  window.addEventListener('storage', onStorage)
  getReadList()

  return () => window.removeEventListener('storage', onStorage)
}
