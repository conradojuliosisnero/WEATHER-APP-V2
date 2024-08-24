"use client";
import { TriangleAlertIcon } from "@/assets/svgs";
import { Button } from "@/components/ui/Button/Button";

export default function Error() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gradient-to-br from-cielo-claro to-atardecer px-4 py-12 sm:px-6 lg:px-8 text-white">
      <div className="mx-auto max-w-md text-center">
        <TriangleAlertIcon className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 text-3xl font-bold tracking-tightsm:text-4xl">
          Error
        </h1>
        <p className="mt-4 text-muted-foreground text-slate-600">
          Ha ocurrido un error al intentar obtener los datos meteorológicos. Por
          favor, intenta de nuevo más tarde.
        </p>
        <div className="mt-6">
          <Button onClick={() => window.location.reload()} name={"Reintentar"}/>
        </div>
      </div>
    </div>
  );
}
