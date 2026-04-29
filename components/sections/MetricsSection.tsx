import { metrics } from "@/lib/constants/company"

/**
 * MetricsSection — key proof numbers.
 *
 * Design: Full-width brand (canvas) background, 4 large metrics in a row.
 * The dark section creates strong visual separation between lighter sections.
 */
export function MetricsSection() {
  return (
    <section className="bg-brand py-16 dark:bg-canvas lg:py-20">
      <div className="container-enterprise">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col items-center text-center">
              <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {metric.value}
                {metric.suffix && (
                  <span className="text-blue/80 dark:text-blue">{metric.suffix}</span>
                )}
              </p>
              <p className="mt-2 text-sm font-medium text-white/60">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
