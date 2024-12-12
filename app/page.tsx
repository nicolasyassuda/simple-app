import Image from 'next/image'; // Import the Image component for optimized images
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Header with improved styling */}
      <header className="bg-white shadow-md py-6 px-8 w-full">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
            Teste de Carga Kubernetes
          </h1>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto flex flex-col flex-grow justify-center items-center py-16 px-8">
        {/* Hero Section */}
        <section className="text-center md:text-left md:flex md:items-center">
          <div className="md:w-1/2 md:pr-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              Bem-vindo ao nosso Testador de Alto Tráfego e Carga do Kubernetes
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Esta é uma aplicação web simples para demonstrar como o Kubernetes pode escalar seu aplicativo para lidar com mais tráfego e carga.
            </p>
            <Link href={"https://kubernetes.io/docs/concepts/overview/"} prefetch={true} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Saiba Mais
            </Link>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/kubernetes.jpg"
              alt="Ilustração do Kubernetes"
              width={500}
              height={300}
              className="mx-auto"
            />
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 py-4 text-center text-white w-full">
      </footer>
    </div>
  );
}