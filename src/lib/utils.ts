export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ')
}

export function calculateLevel(xp: number): number {
  return Math.floor(xp / 100) + 1
}

export function calculateXpEarned(baseXp: number, score: number, totalQuestions: number): number {
  const accuracy = score / totalQuestions
  return Math.round(baseXp * accuracy)
}
