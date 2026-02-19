import Header from "@/components/gide/header"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex flex-col items-center justify-center px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight text-foreground text-balance">
          Welcome to Gide
        </h1>
        <p className="mt-4 text-lg text-muted-foreground text-center max-w-xl text-pretty">
          Your platform is ready. Start building something great.
        </p>
      </main>
    </div>
  )
}
