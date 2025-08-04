import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatRelativeTime(date: string | Date) {
  const now = new Date()
  const target = new Date(date)
  const diffInMs = target.getTime() - now.getTime()
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

  if (diffInDays < 0) {
    return 'Unlocked'
  } else if (diffInDays === 0) {
    return 'Unlocks today'
  } else if (diffInDays === 1) {
    return 'Unlocks tomorrow'
  } else {
    return `Unlocks in ${diffInDays} days`
  }
}

export function getFileExtension(filename: string) {
  return filename.split('.').pop()?.toLowerCase() || ''
}

export function getFileIcon(extension: string) {
  const iconMap: Record<string, string> = {
    jpg: '🖼️',
    jpeg: '🖼️',
    png: '🖼️',
    gif: '🖼️',
    webp: '🖼️',
    mp4: '🎥',
    mov: '🎥',
    avi: '🎥',
    mp3: '🎵',
    wav: '🎵',
    m4a: '🎵',
    pdf: '📄',
    doc: '📄',
    docx: '📄',
    txt: '📄',
  }
  return iconMap[extension] || '📎'
}
