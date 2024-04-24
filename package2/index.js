console.table({
  'Time Stamp': new Date().getTime(),
  'OS': navigator['platform'],
  'Browser': navigator['appCodeName'],
  'Language': navigator['language'],
});

console.log(`Package 2 says Hi!`);