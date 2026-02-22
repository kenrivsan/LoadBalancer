const activity = [
  { time: "10:05", text: "Creaste la rama assignment-03" },
  { time: "10:18", text: "Inicializaste Vite + React (TS)" },
  { time: "10:30", text: "Configuraste Tailwind CSS" },
  { time: "10:45", text: "Empezaste los componentes del panel" },
  { time: "11:10", text: "Preparando Docker y el pipeline" },
]

export default function ActivityFeed() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/30">
      <div className="px-5 py-4 border-b border-slate-800">
        <h2 className="font-semibold">Últimos cambios</h2>
        <p className="text-sm text-slate-400">Línea de tiempo (estática).</p>
      </div>

      <div className="p-5 space-y-4">
        {activity.map((a) => (
          <div key={a.time} className="flex gap-3">
            <div className="w-12 text-xs text-slate-400">{a.time}</div>
            <div className="flex-1 text-sm">{a.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}