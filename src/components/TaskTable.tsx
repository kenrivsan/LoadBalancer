const tasks = [
  { name: "Terminar el diseño del panel", status: "En progreso", priority: "Alta" },
  { name: "Configurar Tailwind", status: "Hecho", priority: "Media" },
  { name: "Dockerizar la aplicación", status: "Pendiente", priority: "Alta" },
  { name: "Configurar Husky (pre-commit)", status: "Pendiente", priority: "Media" },
  { name: "Pipeline en GitHub Actions", status: "Pendiente", priority: "Alta" },
  { name: "Despliegue en Beanstalk", status: "Pendiente", priority: "Alta" },
]

function Badge({ children }: { children: string }) {
  const base =
    "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium border"

  if (children === "Hecho")
    return (
      <span
        className={`${base} border-emerald-500/30 text-emerald-300 bg-emerald-500/10`}
      >
        {children}
      </span>
    )

  if (children === "En progreso")
    return (
      <span
        className={`${base} border-sky-500/30 text-sky-300 bg-sky-500/10`}
      >
        {children}
      </span>
    )

  return (
    <span
      className={`${base} border-amber-500/30 text-amber-300 bg-amber-500/10`}
    >
      {children}
    </span>
  )
}

export default function TaskTable() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/30">
      <div className="px-5 py-4 border-b border-slate-800">
        <h2 className="font-semibold">Tareas</h2>
        <p className="text-sm text-slate-400">Lista estática para la tarea.</p>
      </div>

      <div className="p-5 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-slate-400">
            <tr>
              <th className="text-left font-medium py-2">Tarea</th>
              <th className="text-left font-medium py-2">Estado</th>
              <th className="text-left font-medium py-2">Prioridad</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((t) => (
              <tr key={t.name} className="border-t border-slate-800/60">
                <td className="py-3">{t.name}</td>
                <td className="py-3">
                  <Badge>{t.status}</Badge>
                </td>
                <td className="py-3 text-slate-300">{t.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}