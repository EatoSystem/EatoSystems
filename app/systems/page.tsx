export default function SystemsPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">EatoSystems</h1>
        <p className="text-xl text-center mb-12">
          This is a simple systems page to test routing. If you can see this, the route is working correctly.
        </p>

        <div className="max-w-2xl mx-auto bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Debugging Information</h2>
          <p className="mb-4">
            Current path: <code className="bg-gray-200 px-2 py-1 rounded">/systems</code>
          </p>
          <p>
            If this page is displaying correctly, the basic routing is working. We can then add more complex
            functionality.
          </p>
        </div>
      </div>
    </div>
  )
}
