export interface PhoneticSound {
  symbol: string
  example: string
  pronunciation: string // How to pronounce the sound in isolation
}

export const vowels: PhoneticSound[] = [
  { symbol: 'ɑ', example: 'hot', pronunciation: 'ah' },
  { symbol: 'æ', example: 'cat', pronunciation: 'aah' },
  { symbol: 'ʌ', example: 'but', pronunciation: 'uh' },
  { symbol: 'ɛ', example: 'bed', pronunciation: 'eh' },
  { symbol: 'eɪ', example: 'say', pronunciation: 'ay' },
  { symbol: 'ɜ', example: 'bird', pronunciation: 'er' },
  { symbol: 'ɪ', example: 'ship', pronunciation: 'ih' },
  { symbol: 'i', example: 'sheep', pronunciation: 'ee' },
  { symbol: 'ə', example: 'about', pronunciation: 'uh' },
  { symbol: 'oʊ', example: 'boat', pronunciation: 'oh' },
  { symbol: 'ʊ', example: 'foot', pronunciation: 'oo' },
  { symbol: 'u', example: 'food', pronunciation: 'oo' },
  { symbol: 'aʊ', example: 'cow', pronunciation: 'ow' },
  { symbol: 'aɪ', example: 'time', pronunciation: 'eye' },
  { symbol: 'ɔɪ', example: 'boy', pronunciation: 'oy' },
]

export const consonants: PhoneticSound[] = [
  { symbol: 'b', example: 'book', pronunciation: 'b' },
  { symbol: 'tʃ', example: 'chair', pronunciation: 'ch' },
  { symbol: 'd', example: 'day', pronunciation: 'd' },
  { symbol: 'f', example: 'fish', pronunciation: 'f' },
  { symbol: 'g', example: 'go', pronunciation: 'g' },
  { symbol: 'h', example: 'home', pronunciation: 'h' },
  { symbol: 'dʒ', example: 'job', pronunciation: 'j' },
  { symbol: 'k', example: 'key', pronunciation: 'k' },
  { symbol: 'l', example: 'lion', pronunciation: 'l' },
  { symbol: 'm', example: 'moon', pronunciation: 'm' },
  { symbol: 'n', example: 'nose', pronunciation: 'n' },
  { symbol: 'ŋ', example: 'sing', pronunciation: 'ng' },
  { symbol: 'p', example: 'pig', pronunciation: 'p' },
  { symbol: 'r', example: 'red', pronunciation: 'r' },
  { symbol: 's', example: 'see', pronunciation: 's' },
  { symbol: 'ʒ', example: 'measure', pronunciation: 'zh' },
  { symbol: 'ʃ', example: 'shoe', pronunciation: 'sh' },
  { symbol: 't', example: 'time', pronunciation: 't' },
  { symbol: 'ð', example: 'then', pronunciation: 'th' },
  { symbol: 'θ', example: 'think', pronunciation: 'th' },
  { symbol: 'v', example: 'very', pronunciation: 'v' },
  { symbol: 'w', example: 'water', pronunciation: 'w' },
  { symbol: 'j', example: 'yes', pronunciation: 'y' },
  { symbol: 'z', example: 'zoo', pronunciation: 'z' },
]
