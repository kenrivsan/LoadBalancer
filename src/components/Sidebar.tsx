export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-64 md:flex-col border-r border-slate-800 bg-slate-950">
      <div className="px-6 py-5">
        <div className="text-lg font-semibold tracking-tight">LoadBalancer</div>
        <div className="text-xs text-slate-400">Panel • Tarea 03</div>
      </div>

      <nav className="px-3 py-2 space-y-1">
        {["Inicio", "Proyectos", "Notas", "Ajustes"].map((item) => (
          <a
            key={item}
            href="#"
            className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-900 hover:text-white transition"
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="mt-auto px-6 py-5 text-xs text-slate-400">
        © 2026 • Interfaz estática
      </div>
    </aside>
  )
}