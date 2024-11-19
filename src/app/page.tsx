import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/landing-page/cta-button";

export default function LandingPage() {
  return (
    <>
      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Create Beautiful Graphs for Excalidraw
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Generate professional-looking graphs and charts with ease. Perfect
              for presentations, documentation, and brainstorming sessions.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="">
                <CTAButton signedOutText="Get Started For Free" />
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Button asChild variant="outline" size="lg">
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Powerful Features for Graph Creation
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Everything you need to create stunning graphs for Excalidraw
              </p>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                    />
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900">
                  Multiple Graph Types
                </h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Create bar charts, line graphs, pie charts, and more with just
                  a few clicks.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                    />
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900">
                  Easy Data Input
                </h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Input your data quickly and easily with our intuitive
                  interface.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900">
                  Excalidraw Integration
                </h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Seamlessly export your graphs to Excalidraw for further
                  customization.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Ready to create amazing graphs?
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Join thousands of users who are already creating stunning
                visuals with GraphMaster.
              </p>
              <div className="mt-8">
                <CTAButton
                  signedOutText="Get Started for Free"
                  signedInText="Go to Dashboard Now"
                  buttonProps={{
                    size: "lg",
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-400">
            © 2024 GraphMaster. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
