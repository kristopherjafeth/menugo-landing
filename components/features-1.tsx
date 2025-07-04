import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Settings2, Sparkles, Zap } from "lucide-react";
import { ReactNode } from "react";

export default function Features() {
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Beneficios
          </h2>
          <p className="mt-4">Qué obtendrás con nuestra solución tecnológica</p>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Zap className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Recibe pedidos por WhatsApp</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">
                Aproveche WhatsApp, que tiene más de 300 millones de usuarios
                activos en todo el mundo.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Settings2 className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">
                Ahorra Tiempo y Dinero con tu tienda online
              </h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Reduce las horas que dedicas a gestionar tu negocio.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Sparkles className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Sin comisiones por Ventas</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                No cobramos comisión por ventas realizas, ofrece un mejor
                servicio con tu tienda independiente
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Sparkles className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">
                Evita aglomeraciones en tu negocio
              </h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Puedes reducir los tiempos de espera en tu negocio, ofreciendo
                que te hagan pedidos online
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Sparkles className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">
                Ofrece una mejor Experiencia de Compra
              </h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Hacer un pedido desde tu tienda online, es totalmente fácil,
                rápido y seguro.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Sparkles className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">
                Habla con tus clientes sin intermediarios
              </h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Puedes brindar un servicio más cercano y con buena atención al
                cliente.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Sparkles className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">
                Puedes mantener tu catálogo actualizado
              </h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Modifica Nombres, Categorías, Precios, Promociones fácilmente al
                instante
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Sparkles className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Aumenta tu Alcance</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Puedes llegar a muchos más clientes con u nuevo canal de ventas
                online, pruébalo por 15 días GRATIS
              </p>
            </CardContent>
          </Card>

                  <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Sparkles className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Aumenta tu Alcance</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Puedes llegar a muchos más clientes con u nuevo canal de ventas
                online, pruébalo por 15 días GRATIS
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="bg-radial to-background absolute inset-0 from-transparent to-75%"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
