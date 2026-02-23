export default function QuickNotes() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-5">
      <h2 className="font-semibold">Apuntes</h2>
      <p className="mt-1 text-sm text-slate-400">
        Cosas rápidas para no perder el hilo.
      </p>

      <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm text-slate-200 leading-relaxed">
        <ul className="list-disc pl-5 space-y-2">
          <li>El panel debe ser estático, pero verse limpio y moderno.</li>
          <li>Siguiente: Dockerfile + Nginx para servir el build.</li>
          <li>Después: Husky en pre-commit (lint + formato).</li>
          <li>Al final: GitHub Actions desplegando a Elastic Beanstalk.</li>
        </ul>
      </div>
    </div>
  )
}