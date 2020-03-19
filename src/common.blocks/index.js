function importAll(el) {
  el.keys().forEach(el)
}

importAll(require.context('./', true, /\.(js|scss|png|jpe?g|gif|svg)$/))

// importAll(require.context('./', true, /\.(js|scss)$/));
