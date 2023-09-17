export function onReadListChange(callback) {
  function getReadList() {
    const readList = JSON.parse(window.localStorage.getItem('readList') || '[]')
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

export function saveInStorage(keyword, items) {
  window.localStorage.setItem(keyword, JSON.stringify(items))
}