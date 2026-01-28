'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

interface WriteInputProps {
  disabled: boolean
  onSubmit: (answer: string) => void
}

export function WriteInput({ disabled, onSubmit }: WriteInputProps) {
  const [value, setValue] = useState('')

  const handleSubmit = () => {
    if (value.trim()) {
      onSubmit(value)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && value.trim()) {
      handleSubmit()
    }
  }

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        placeholder="Tapez votre réponse..."
        className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none disabled:bg-gray-50"
        onKeyPress={handleKeyPress}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
      />

      {!disabled && (
        <Button
          onClick={handleSubmit}
          disabled={!value.trim()}
          className="w-full"
          size="lg"
        >
          Vérifier
        </Button>
      )}
    </div>
  )
}
