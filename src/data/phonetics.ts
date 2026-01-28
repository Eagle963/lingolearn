export interface PhoneticSound {
  symbol: string
  example: string
  audio?: string
}

export const vowels: PhoneticSound[] = [
  { symbol: 'ɑ', example: 'hot' },
  { symbol: 'æ', example: 'cat' },
  { symbol: 'ʌ', example: 'but' },
  { symbol: 'ɛ', example: 'bed' },
  { symbol: 'eɪ', example: 'say' },
  { symbol: 'ɜ', example: 'bird' },
  { symbol: 'ɪ', example: 'ship' },
  { symbol: 'i', example: 'sheep' },
  { symbol: 'ə', example: 'about' },
  { symbol: 'oʊ', example: 'boat' },
  { symbol: 'ʊ', example: 'foot' },
  { symbol: 'u', example: 'food' },
  { symbol: 'aʊ', example: 'cow' },
  { symbol: 'aɪ', example: 'time' },
  { symbol: 'ɔɪ', example: 'boy' },
]

export const consonants: PhoneticSound[] = [
  { symbol: 'b', example: 'book' },
  { symbol: 'tʃ', example: 'chair' },
  { symbol: 'd', example: 'day' },
  { symbol: 'f', example: 'fish' },
  { symbol: 'g', example: 'go' },
  { symbol: 'h', example: 'home' },
  { symbol: 'dʒ', example: 'job' },
  { symbol: 'k', example: 'key' },
  { symbol: 'l', example: 'lion' },
  { symbol: 'm', example: 'moon' },
  { symbol: 'n', example: 'nose' },
  { symbol: 'ŋ', example: 'sing' },
  { symbol: 'p', example: 'pig' },
  { symbol: 'r', example: 'red' },
  { symbol: 's', example: 'see' },
  { symbol: 'ʒ', example: 'measure' },
  { symbol: 'ʃ', example: 'shoe' },
  { symbol: 't', example: 'time' },
  { symbol: 'ð', example: 'then' },
  { symbol: 'θ', example: 'think' },
  { symbol: 'v', example: 'very' },
  { symbol: 'w', example: 'water' },
  { symbol: 'j', example: 'yes' },
  { symbol: 'z', example: 'zoo' },
]
