'use client'
import { motion } from 'framer-motion'
import { Calendar, Lock, Share2, Bell, Image, Clock } from 'lucide-react'

const features = [
  {
    icon: Calendar,
    title: 'Future Unlock',
    description: 'Set specific dates or conditions for when your memories should be revealed.',
  },
  {
    icon: Lock,
    title: 'Secure Storage',
    description: 'Your memories are encrypted and stored securely with end-to-end encryption.',
  },
  {
    icon: Share2,
    title: 'Share with Loved Ones',
    description: 'Create shared capsules with friends and family for collective memories.',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Get notified when your capsules unlock via email or push notifications.',
  },
  {
    icon: Image,
    title: 'Multiple Media Types',
    description: 'Upload photos, videos, audio recordings, or text messages to your capsules.',
  },
  {
    icon: Clock,
    title: 'Countdown Timer',
    description: 'Watch the countdown to your memory unlock with beautiful animations.',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to preserve memories
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Create, share, and unlock memories with our comprehensive feature set
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
