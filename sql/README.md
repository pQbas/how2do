# Examples of SQL

```SQL
SELECT "paisEmbarque","puertoEmbarque" FROM public."T_BillOfLading"
WHERE "paisEmbarque" = 'COLOMBIA'
ORDER BY "idBl" ASC
```

```SQL
SELECT
	"T_CostosExtras"."asumidoPor" AS assumes,
	"T_CostosExtras".estado AS stat,
	"T_CostosExtras".solicitante AS solicitante
FROM public."T_CostosExtras"
WHERE "idCostosExtras" = 166
```

```SQL
SELECT "depositoTemporal", "T_OrdendeTrabajo"."numeroOT", "T_OrdendeTrabajo"."tipoOperacion" FROM public."T_DetallesGenerales"
LEFT JOIN public."T_OrdendeTrabajo" ON "T_OrdendeTrabajo"."idOrdenT" = "T_DetallesGenerales"."idOrdenT_id"
WHERE "T_DetallesGenerales"."depositoTemporal" IS NOT NULL
ORDER BY "idDt" ASC
```