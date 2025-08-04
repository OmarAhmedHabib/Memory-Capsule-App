# Memory Capsule - Next.js Web App

A beautiful Next.js web application for creating and sharing time capsules with your precious memories.

## 🚀 Features

- **User Authentication**: Sign up with email, Google, or other providers
- **Create Time Capsules**: Upload memories (text, images, audio, videos)
- **Future Unlock**: Set specific dates or conditions for capsule unlock
- **Smart Notifications**: Email and push notifications when capsules unlock
- **Share with Friends**: Create shared capsules or keep them private
- **Dark/Light Mode**: Seamless theme switching with beautiful UI
- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Clean, minimal design with smooth animations

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Storage**: Supabase Storage
- **Email**: SendGrid API
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd memory-capsule
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```

4. **Configure Supabase**
   - Create a new Supabase project
   - Set up authentication providers
   - Create storage buckets for media files
   - Update environment variables

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🏗 Project Structure

```
memory-capsule/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── dashboard/
│   ├── create/
│   ├── login/
│   └── api/
├── components/
│   ├── ui/
│   ├── navbar.tsx
│   ├── hero-section.tsx
│   ├── features-section.tsx
│   └── footer.tsx
├── lib/
│   ├── supabase.ts
│   └── utils.ts
├── public/
└── README.md
```

## 🎯 Key Pages

- **Landing Page** (`/`) - Hero section, features, and CTA
- **Dashboard** (`/dashboard`) - View all your capsules
- **Create Capsule** (`/create`) - Upload and configure new capsules
- **View Capsule** (`/capsule/[id]`) - View individual capsule details
- **Login/Register** (`/login`, `/register`) - Authentication pages

## 🔧 API Routes

- `/api/auth/*` - Authentication endpoints
- `/api/capsules/*` - CRUD operations for capsules
- `/api/notifications/*` - Email and push notification endpoints
- `/api/upload/*` - File upload handling

## 🎨 Design System

- **Colors**: Purple and pink gradient theme
- **Typography**: Inter font family
- **Components**: Reusable UI components with variants
- **Animations**: Smooth transitions with Framer Motion
- **Responsive**: Mobile-first design approach

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** with automatic CI/CD

### Manual Deployment

```bash
npm run build
npm run start
```

## 📊 Database Schema

```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Capsules table
CREATE TABLE capsules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  content JSONB,
  unlock_date TIMESTAMP WITH TIME ZONE NOT NULL,
  is_unlocked BOOLEAN DEFAULT FALSE,
  is_shared BOOLEAN DEFAULT FALSE,
  share_token TEXT UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Media table
CREATE TABLE media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  capsule_id UUID REFERENCES capsules(id) ON DELETE CASCADE,
  file_name TEXT NOT NULL,
  file_type TEXT NOT NULL,
  file_size INTEGER,
  file_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🔐 Authentication Setup

1. **Supabase Auth** configuration
2. **OAuth providers** (Google, GitHub, etc.)
3. **Email verification** setup
4. **Password reset** functionality

## 📧 Email Notifications

- **SendGrid** integration for email delivery
- **Email templates** for capsule unlock notifications
- **Scheduled notifications** using Vercel Cron Jobs

## 🎨 Customization

- **Theme colors** can be customized in `tailwind.config.ts`
- **Animations** can be adjusted in component files
- **Content** can be modified in component files
- **Styling** uses Tailwind CSS utility classes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@memorycapsule.app or join our Discord community.
