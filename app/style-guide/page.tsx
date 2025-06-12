import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-8">EatoSystems Style Guide</h1>

        <section className="mb-16">
          <h2 className="mb-6">Color Palette</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="h-32 bg-primary"></div>
              <div className="p-4 bg-white">
                <h4 className="mb-2">Primary (Eato Green)</h4>
                <p className="text-sm font-mono">#2F8F2F</p>
                <p className="text-sm mt-2">Used for all CTAs and primary actions.</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="h-32 bg-accent-orange"></div>
              <div className="p-4 bg-white">
                <h4 className="mb-2">Accent Orange (Earthy Orange)</h4>
                <p className="text-sm font-mono">#D9822B</p>
                <p className="text-sm mt-2">Warm, energetic accent for hover states, highlights, key stats.</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="h-32 bg-accent-charcoal"></div>
              <div className="p-4 bg-white">
                <h4 className="mb-2">Accent Charcoal (Deep Charcoal)</h4>
                <p className="text-sm font-mono">#2A2A2A</p>
                <p className="text-sm mt-2">Neutral, sophisticated accent for text and links.</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="mb-4">Usage Examples</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="mb-4">Buttons</h4>
                <div className="flex flex-wrap gap-4">
                  <Button className="btn-primary">Primary Button</Button>
                  <Button className="bg-accent-orange text-white hover:bg-primary">Accent Button</Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Outline Button
                  </Button>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="mb-4">Links</h4>
                <div className="space-y-2">
                  <div>
                    <Link href="#" className="link-default">
                      Default Link Style
                    </Link>
                  </div>
                  <div>
                    <Link href="#" className="text-primary hover:text-accent-orange hover:underline transition-colors">
                      Alternative Link Style
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="mb-4">Highlights</h4>
                <div className="space-y-4">
                  <p>
                    This text contains a <span className="highlight-green">green highlight</span> for important
                    information.
                  </p>
                  <p>
                    This text contains an <span className="highlight-orange">orange highlight</span> for emphasis.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="mb-4">Statistics</h4>
                <div className="space-y-4">
                  <p>
                    Growth increased by <span className="stat-green">47%</span> this quarter.
                  </p>
                  <p>
                    Customer satisfaction is at <span className="stat-orange">92%</span> approval.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6">Typography</h2>

          <div className="space-y-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="mb-2 text-sm text-gray-500">Heading 1 (48px / 1.2 line-height / 700 weight)</div>
              <h1>The quick brown fox jumps over the lazy dog</h1>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="mb-2 text-sm text-gray-500">Heading 2 (36px / 1.3 line-height / 600 weight)</div>
              <h2>The quick brown fox jumps over the lazy dog</h2>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="mb-2 text-sm text-gray-500">Heading 3 (28px / 1.4 line-height / 600 weight)</div>
              <h3>The quick brown fox jumps over the lazy dog</h3>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="mb-2 text-sm text-gray-500">Heading 4 (20px / 1.5 line-height / 700 weight)</div>
              <h4>The quick brown fox jumps over the lazy dog</h4>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="mb-2 text-sm text-gray-500">Body Text (16px / 1.75 line-height / 400 weight)</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu
                sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla
                enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat
                nisl ut dapibus.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="mb-2 text-sm text-gray-500">Small Text (14px / 1.6 line-height / 400 weight)</div>
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu
                sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
              </small>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="mb-4">Typography Usage Examples</h3>

            <div className="p-6 bg-gray-50 rounded-lg mt-6">
              <h4 className="mb-4">Emphasis</h4>
              <p>
                Regular text with <span className="emphasis">emphasized text</span> for important points.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg mt-6">
              <h4 className="mb-4">Complete Example</h4>
              <div className="space-y-4">
                <h2>EatoSystems: Regenerative Food Infrastructure</h2>
                <h3>Building a Sustainable Future</h3>
                <p>
                  EatoSystems represents a revolutionary approach to global food systems, addressing the entire food
                  ecosystem with sustainability and regeneration at its core. Our comprehensive suite of systems is
                  designed to transform how food is produced, moved, financed, and governed.
                </p>
                <p>
                  Growth in regenerative agriculture has increased by <span className="stat-green">47%</span> since the
                  implementation of our <span className="emphasis">EatoBotics</span> system, while reducing water usage
                  by <span className="stat-orange">32%</span> across pilot regions.
                </p>
                <div className="mt-4">
                  <Button className="btn-primary mr-4">Learn More</Button>
                  <Link href="#" className="link-default">
                    View Case Studies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
