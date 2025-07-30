// app/services/[service]/page.tsx
import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header'; // Adjust path if needed
import Footer from '@/components/Footer'; // Adjust path if needed

interface Params {
  service: string;
}

interface Props {
  params: Params;
}

const serviceContent = {
  'it-governance': {
    title: 'IT Governance and Strategy',
    content: (
      <>
        <h2 className="text-2xl font-semibold mb-2 text-cyan-500">IT Governance and Strategy</h2>
        <p>
          Almost every aspect of a business relies on IT in one way or another, and a proper IT governance structure would enable organizations to use it in an efficient, safe, and compliant manner...
        </p>
        <ul>
          <li>Enterprise Architecture (TOGAF)</li>
          <li>COBIT</li>
          <li>COSO</li>
          <li>BSC (Balanced Score Card)</li>
          <li>NIST</li>
        </ul>
      </>
    ),
    image: 'https://res.cloudinary.com/daggx9p24/image/upload/v1753870672/13454919_5234330_nzmpme.jpg',
  },
  'grc': {
    title: 'GRC - Governance, Risk and Compliance',
    content: (
      <>
        <h2 className="text-2xl font-semibold mb-2 text-cyan-500">GRC - Governance, Risk and Compliance</h2>
        <p>
          GRC is a sign of commitment of every successful organization promoting responsibility, accountability and trust...
        </p>
        <ul>
          <li>ISO 9001</li>
          <li>ISO 27001</li>
        </ul>
      </>
    ),
    image: 'https://res.cloudinary.com/daggx9p24/image/upload/v1753870672/13454919_5234330_nzmpme.jpg',
  },
  'automotive-security': {
    title: 'Automotive Security',
    content: (
      <>
        <h2 className="text-2xl font-semibold mb-2 text-cyan-500">Automotive Security</h2>
        <p>Connectivity is a cornerstone for a new business model...</p>
        <ul>
          <li>ISO 21464</li>
        </ul>
      </>
    ),
    image: 'https://res.cloudinary.com/daggx9p24/image/upload/v1753870672/13454919_5234330_nzmpme.jpg',
  },
  'cyber-security': {
    title: 'Cyber Security Assessment',
    content: (
      <>
        <h2 className="text-2xl font-semibold mb-2 text-cyan-500">Cyber Security Assessment</h2>
        <p>With the current advanced technologies, business can get more than ever from the IT resource...</p>
        <ul>
          <li>Risk Assessment</li>
        </ul>
      </>
    ),
    image: 'https://res.cloudinary.com/daggx9p24/image/upload/v1753870672/13454919_5234330_nzmpme.jpgcyber-security.png',
  },
  'ai-consulting': {
    title: 'AI Consulting',
    content: (
      <>
        <h2 className="text-2xl font-semibold mb-2 text-cyan-500">AI Consulting</h2>
        <p>The AI revolution has begun!! Using AI is no longer a choice; it's a necessity...</p>
        <ul>
          <li>Assessment of current technology</li>
        </ul>
      </>
    ),
    image: 'https://res.cloudinary.com/daggx9p24/image/upload/v1753870672/13454919_5234330_nzmpme.jpg',
  },
  'erp-advisory': {
    title: 'ERP Advisory and Health Check',
    content: (
      <>
        <h2 className="text-2xl font-semibold mb-2 text-cyan-500">ERP Advisory and Health Check</h2>
        <p>Selecting suitable Enterprise Resource Planning (ERP) solution is a haunting exercise for many of the companies </p>
        <ul>
          <li>Assessment of business processes</li>
        </ul>
      </>
    ),
    image: 'https://res.cloudinary.com/daggx9p24/image/upload/v1753870672/13454919_5234330_nzmpme.jpg',
  },
  'training': {
    title: 'Training and Coaching',
    content: (
      <>
        <h2 className="text-2xl font-semibold mb-2 text-cyan-500">Training and Coaching</h2>
        <p>Training and Coaching</p>
        <ul>
          <li>Coaching</li>
        </ul>
      </>
    ),
    image: 'https://res.cloudinary.com/daggx9p24/image/upload/v1753870672/13454919_5234330_nzmpme.jpg',
  },
};

export async function generateMetadata({ params }: { params: { service: string } }): Promise<Metadata> {
  const { service } = params;
  const pageContent = serviceContent[service as keyof typeof serviceContent];

  if (!pageContent) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: pageContent.title || 'Service Page',
  };
}

const ServicePage: React.FC<Props> = ({ params }) => {
  const { service } = params;
  const pageContent = serviceContent[service as keyof typeof serviceContent];

  if (!pageContent) {
    notFound();
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800">{pageContent.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            {pageContent.content}
          </div>
          {pageContent.image && (
            <div>
              <img src={pageContent.image} alt={pageContent.title} className="rounded-lg shadow-md" />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicePage;