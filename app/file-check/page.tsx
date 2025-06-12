import fs from "fs"
import path from "path"

export default function FileCheckPage() {
  // This function will be executed at build time on the server
  const publicDir = path.join(process.cwd(), "public")
  const systemsDir = path.join(publicDir, "images", "systems")

  let systemFiles: string[] = []
  let publicFiles: string[] = []

  try {
    // Check if the systems directory exists
    if (fs.existsSync(systemsDir)) {
      systemFiles = fs.readdirSync(systemsDir)
    }

    // Get some files from the public directory for comparison
    if (fs.existsSync(publicDir)) {
      publicFiles = fs.readdirSync(publicDir).slice(0, 10) // Just get the first 10 files
    }
  } catch (error) {
    console.error("Error reading directory:", error)
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">File System Check</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">System Image Files</h2>
          <p className="text-sm text-gray-500 mb-4">Path: /public/images/systems/</p>

          {systemFiles.length > 0 ? (
            <ul className="list-disc pl-5 space-y-2">
              {systemFiles.map((file, index) => (
                <li key={index} className="text-sm font-mono">
                  {file}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-red-500">No files found in systems directory</p>
          )}
        </div>

        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Public Directory Files (Sample)</h2>
          <p className="text-sm text-gray-500 mb-4">Path: /public/</p>

          {publicFiles.length > 0 ? (
            <ul className="list-disc pl-5 space-y-2">
              {publicFiles.map((file, index) => (
                <li key={index} className="text-sm font-mono">
                  {file}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-red-500">No files found in public directory</p>
          )}
        </div>
      </div>
    </div>
  )
}
