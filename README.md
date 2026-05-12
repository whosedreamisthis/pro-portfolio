# Pro-Portfolio

A modern, responsive, and feature-rich professional portfolio website built with Next.js 16 and React 19. This project showcases a developer's skills, experience, projects, and client reviews with a clean and professional UI.

## 🚀 Features

- **Responsive Design**: Fully optimized for all screen sizes.
- **Dark/Light Mode**: Seamless theme switching using `next-themes`.
- **Project Showcase**: Displaying multiple projects with tech stacks and links.
- **Experience & Education**: Timeline-based section for career and academic history.
- **Skill Categories**: Organized technical skills across Frontend, Backend, and Tools.
- **Contact Form**: Integrated with **Resend** for email delivery.
- **Testimonials/Reviews**: Carousel of client feedback.
- **Animations**: Smooth scroll and entrance animations using **AOS** and **Tailwind CSS**.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Email Service**: [Resend](https://resend.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/)
- **Animation**: [AOS (Animate on Scroll)](https://michalsnik.github.io/aos/)

## 🏁 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm / yarn / pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd pro-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Resend API key:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable React components.
  - `home/`: Components specific to the homepage (Hero, About, Projects, etc.).
  - `ui/`: Base UI components (Button, Card, Input, etc.).
  - `navbar/`: Navigation components.
- `data/`: Centralized data file (`data.ts`) for easy content updates.
- `lib/`: Utility functions and configurations.
- `public/`: Static assets like images and icons.

## 📝 License

This project is licensed under the MIT License.
