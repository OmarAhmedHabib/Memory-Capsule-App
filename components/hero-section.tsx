'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Lock, Share2, Clock } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-purple-950/20 dark:via-background dark:to-pink-950/20">
      <div className="container mx-auto px-4 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Preserve Your{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Precious Memories
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                Create beautiful time capsules with your memories, photos, and messages. 
                Set a future date to unlock them and relive those special moments.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/create"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 text-sm font-medium text-white shadow-lg transition-all hover:shadow-xl"
              >
                Create Your First Capsule
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                View Dashboard
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium">Set Future Dates</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium">Secure Storage</span>
              </div>
              <div className="flex items-center space-x-2">
                <Share2 className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium">Share with Friends</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium">Timed Unlock</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 blur-3xl opacity-30" />
              <div className="relative rounded-2xl bg-white/80 p-8 shadow-2xl backdrop-blur-sm dark:bg-gray-900/80">
                <div className="space-y-4">
                  <div className="h-4 w-32 rounded bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800" />
                  <div className="space-y-2">
                    <div className="h-3 w-full rounded bg-gray-200 dark:bg-gray-700" />
                    <div className="h-3 w-4/5 rounded bg-gray-200 dark:bg-gray-700" />
                    <div className="h-3 w-3/5 rounded bg-gray-200 dark:bg-gray-700" />
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="h-8 w-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                    <div className="text-sm text-gray-500">Unlocks: Dec 25, 2025</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
