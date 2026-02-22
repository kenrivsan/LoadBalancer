export default function Topbar() {
  const today = new Date().toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  return (
    <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-xl font-semibold">Resumen</h1>
          <p className="text-sm text-slate-400">{today}</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block text-right">
            <div className="text-sm font-medium">asus</div>
            <div className="text-xs text-slate-400">Entorno local</div>
          </div>
          <div className="h-10 w-10 rounded-full bg-slate-800 grid place-items-center text-sm font-semibold">
            A
          </div>
        </div>
      </div>
    </header>
  )
}