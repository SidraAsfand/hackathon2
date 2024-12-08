import Image from "next/image";
function ErrorPage() {
  return (
    <div>
      
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Image
          src="/images/404.png"
          alt="404"
          width={600}
          height={600}
        />
        <h1 className="text-2xl font-bold">Page Not Found</h1>
        <p className="text-gray-600">Sorry&apos; we couldn&apos;t find the page.</p>
      </div>
      
    </div>
  );
}

export default ErrorPage;