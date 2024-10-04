import Link from "next/link";
import { ArrowLeft, Brain, Globe, Lock, Zap } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 p-8 text-white">
      <div className="mx-auto max-w-4xl">
        <nav className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg bg-white/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/20"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </nav>

        <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-lg">
          <h1 className="mb-6 text-center text-4xl font-bold">About AISK</h1>
          <p className="mb-8 text-center text-xl">
            AISK (AI Search Kit) is a cutting-edge tool that revolutionizes the
            way you interact with web content.
          </p>

          <div className="mb-12 grid gap-8 md:grid-cols-2">
            <FeatureCard
              icon={<Brain className="h-8 w-8" />}
              title="AI-Powered Analysis"
              description="Our advanced AI algorithms analyze web content to provide insightful answers to your questions."
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8" />}
              title="Universal Compatibility"
              description="AISK works with any website, giving you the power to query diverse sources of information."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="Lightning-Fast Results"
              description="Get instant answers to your questions, saving you time and enhancing your productivity."
            />
            <FeatureCard
              icon={<Lock className="h-8 w-8" />}
              title="Privacy-Focused"
              description="Your searches and queries are kept private and secure, ensuring your peace of mind."
            />
          </div>

          <div className="text-center">
            <h2 className="mb-4 text-2xl font-semibold">Ready to explore?</h2>
            <p className="mb-6">
              Start your journey with AISK and unlock a new way of interacting
              with web content.
            </p>
            <Link
              href="/"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-lg font-medium text-purple-600 transition-colors hover:bg-white/90"
            >
              Get Started
              <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm">
      <div className="mb-4 inline-block rounded-full bg-purple-400 p-3 text-purple-900">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
}
