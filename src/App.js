import { Counter } from '@/components/Counter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Simple Counter App',
  description: 'A minimal counter application built with Next.js',
  viewport: 'width=device-width, initial-scale=1',
};

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Simple Counter
          </h1>
          <p className="text-gray-600">
            Click the buttons below to increment or decrement the counter
          </p>
        </header>
        
        <section className="bg-white rounded-lg shadow-md p-6">
          <Counter />
        </section>
        
        <footer className="text-center mt-8 text-sm text-gray-500">
          Built with Next.js 15 and TypeScript
        </footer>
      </div>
    </main>
  );
}