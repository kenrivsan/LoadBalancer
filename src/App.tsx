import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
import StatCard from "./components/StatCard"
import TaskTable from "./components/TaskTable"
import ActivityFeed from "./components/ActivityFeed"
import QuickNotes from "./components/QuickNotes"

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex">
        <Sidebar />

        <main className="flex-1">
          <Topbar />

          <div className="px-6 pb-10">
            {/* Tarjetas KPI */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard title="Tareas completadas" value="18" hint="+3 hoy" />
              <StatCard title="Pendientes" value="7" hint="2 de alta prioridad" />
              <StatCard title="Horas de enfoque" value="12.5" hint="Esta semana" />
              <StatCard title="Meta semanal" value="70%" hint="Vas bien" />
            </section>

            {/* Contenido principal */}
            <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
              <div className="xl:col-span-2 space-y-6">
                <TaskTable />
                <QuickNotes />
              </div>

              <div className="space-y-6">
                <ActivityFeed />
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App