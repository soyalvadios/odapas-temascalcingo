"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type MenuKey = "servicios" | "informacion" | null;

type MenuNode = {
  id: string;
  label: string;
  href?: string;
  children?: MenuNode[];
};

const lgcgMenu: MenuNode[] = [
  {
    id: "reglamentacion",
    label: "Reglamentación",
    children: [
      { id: "reglamento-interno", label: "Reglamento Interno", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/REGLAMENTO-INTERNO-ODAPAS-1.pdf" },
      { id: "organigrama", label: "Organigrama", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ORGANIGRAMA-ODAPAS.pdf" },
      { id: "manual-procedimientos", label: "Manual de Procedimientos", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/MANUAL-DE-PROCEDIMIENTOS-1.pdf" },
      { id: "manual-organizacion", label: "Manual de Organización", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/MANUAL-DE-ORGANIZACION-1.pdf" },
    ],
  },
  {
    id: "reportes-trimestrales",
    label: "Reportes Trimestrales",
    children: [
      {
        id: "pt-2025",
        label: "Primer Trimestre 2025",
        children: [
          {
            id: "pt-2025-inventario",
            label: "Inventario",
            children: [
              { id: "pt-2025-rmbi", label: "RMBI2025202503", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/RMBI2025202503.pdf" },
              { id: "pt-2025-rmbm", label: "RMBM2025202503", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/RMBM2025202503.pdf" },
              { id: "pt-2025-rmbmbc", label: "RMBMBC2025202503", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/RMBMBC2025202503.pdf" },
            ],
          },
          {
            id: "pt-2025-ldf",
            label: "Ley de Disciplina",
            children: [
              { id: "pt-2025-balance", label: "Balance presupuestario-LDF", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Balance-presupuestario-LDF.pdf" },
              { id: "pt-2025-ingresos-det", label: "Estado Analítico de Ingresos Detallado-LDF", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Estado-Analitico-de-Ingrsos-Detallado-LDF.pdf" },
              { id: "pt-2025-admin", label: "Estado Analítico del Ejercicio del Presupuesto de Egresos Detallado-LDF Clasificación Administrativa", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Estado-Analitico-del-ejercicio-del-Presupuesto-de-Egreos-Detallado-LDF-CLASIFICACION-ADMINISTRTIVA-.pdf" },
              { id: "pt-2025-funcional", label: "Estado Analítico del Ejercicio del Presupuesto de Egresos Detallado-LDF Clasificación Funcional", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Estado-Analitico-del-ejercicio-del-Presupuesto-de-Egreos-Detallado-LDF-CLASIFICACION-FUNCIONAL-FINALIDAD-Y-FUNCION-.pdf" },
              { id: "pt-2025-serv-pers", label: "Estado Analítico del Ejercicio del Presupuesto de Egresos Detallado-LDF Servicios Personales por Categoría", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Estado-Analitico-del-ejercicio-del-Presupuesto-de-Egreos-Detallado-LDF-CLASIFICACION-PERSONALES-POR-CATEGORIA-.pdf" },
              { id: "pt-2025-objeto", label: "Estado Analítico del Ejercicio del Presupuesto de Egresos Detallado-LDF por Objeto del Gasto", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Estado-Analitico-del-ejercicio-del-Presupuesto-de-Egreos-Detallado-LDF-CLASIFICACION-POR-OBJETO-DEL-GASTO-CAPITULO-Y-CONCEPTO-.pdf" },
            ],
          },
          { id: "pt-2025-pbrm", label: "PbRM", children: [{ id: "pt-2025-pbrm-file", label: "PbRM08b2025202503", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/PbRM08b2025202503.pdf" }] },
          { id: "pt-2025-manual", label: "Manual Único de Contabilidad Gubernamental", children: [{ id: "pt-2025-manual-file", label: "Manual Único de Contabilidad Gubernamental", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/manual_unico_de_contabilidad_gubernamental-1.pdf" }] },
          {
            id: "pt-2025-titulo-iv",
            label: "Título IV",
            children: [
              {
                id: "pt-2025-t4-egresos",
                label: "Estado Analítico del Ejercicio del Presupuesto de Egresos",
                children: [
                  { id: "pt-2025-t4-admin", label: "Clasificación Administrativa", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Estado-Anali%CC%81tico-del-Ejercicio-del-Presupuesto-de-Egresos-con-base-en-la-Clasificacio%CC%81n-Administrativa.pdf" },
                  { id: "pt-2025-t4-economica", label: "Clasificación Económica (por Tipo de Gasto)", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Estado-Anali%CC%81tico-del-Ejercicio-del-Presupuesto-de-Egresos-con-base-en-la-Clasificacio%CC%81n-Econo%CC%81mica-por-Tipo-de-Gasto.pdf" },
                  { id: "pt-2025-t4-funcional", label: "Clasificación Funcional", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Estado-Anali%CC%81tico-del-Ejercicio-del-Presupuesto-de-Egresos-con-base-en-la-Clasificacio%CC%81n-Funcional.pdf" },
                  { id: "pt-2025-t4-objeto", label: "Clasificación por Objeto del Gasto", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Estado-Anali%CC%81tico-del-Ejercicio-del-Presupuesto-de-Egresos-con-base-en-la-Clasificacio%CC%81n-por-Objeto-del-Gasto.pdf" },
                  { id: "pt-2025-t4-programatica", label: "Gasto por Categoría Programática", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Gasto-por-Categoria-Programatica-1.pdf" },
                ],
              },
              {
                id: "pt-2025-t4-contable",
                label: "Información Contable",
                children: [
                  { id: "pt-2025-t4-ayudas", label: "Ayudas y Subsidios", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/ayudas-y-subsidios.pdf" },
                  { id: "pt-2025-t4-diario", label: "Diario General de Pólizas", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Diario-Geral-de-Polizas-1.pdf" },
                  { id: "pt-2025-t4-endeudamiento", label: "Endeudamiento Neto", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Endeudamiento-Neto-3.pdf" },
                  { id: "pt-2025-t4-cambios", label: "Estado de Cambios en la Situación Financiera", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Esta-de-Cambios-en-la-Situacion-Financiera.pdf" },
                  { id: "pt-2025-t4-deuda", label: "Estado Analítico de la Deuda y Otros Pasivos", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Estado-Analitico-de-la-Deuda-y-Otros-Pasivos-1.pdf" },
                  { id: "pt-2025-t4-activo", label: "Estado Analítico del Activo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Estado-Analitico-del-Activo.pdf" },
                  { id: "pt-2025-t4-actividades", label: "Estado de Actividades", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Estado-de-Actividades-1-1.pdf" },
                  { id: "pt-2025-t4-flujos", label: "Estado de Flujos de Efectivo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Estado-de-Flujos-de-Efectivo-1.pdf" },
                  { id: "pt-2025-t4-situacion", label: "Estado de Situación Financiera", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Estado-de-Situacion-Financiera-1.pdf" },
                  { id: "pt-2025-t4-variacion", label: "Estado de Variación en la Hacienda Pública", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Estado-de-Variacion-en-la-Hacienda-Publica.pdf" },
                  { id: "pt-2025-t4-notas", label: "Notas a los Estados Financieros", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/NOTAS-A-LOS-ESTADOS-FINANCUEROS.pdf" },
                  { id: "pt-2025-t4-pasivos", label: "Pasivos Contingentes", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Pasivos-Contingentes.pdf" },
                  { id: "pt-2025-t4-inversion", label: "Proyectos de Inversión", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Proyectos-de-Inversio%CC%81n.pdf" },
                ],
              },
              {
                id: "pt-2025-t4-presupuestaria",
                label: "Información Presupuestaria",
                children: [
                  { id: "pt-2025-t4-pres-endeudamiento", label: "Endeudamiento Neto", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Endeudamiento-Neto-4.pdf" },
                  { id: "pt-2025-t4-pres-ingresos", label: "Estado Analítico de Ingresos", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Estado-Analitico-de-Ingresos-1.pdf" },
                ],
              },
            ],
          },
          {
            id: "pt-2025-titulo-v",
            label: "Título V",
            children: [
              {
                id: "pt-2025-t5-informacion",
                label: "Información",
                children: [
                  { id: "pt-2025-t5-ayudas", label: "Ayudas y Subsidios", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/ayudas-y-subsidios-1.pdf" },
                  { id: "pt-2025-t5-intereses", label: "Intereses de la Deuda", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Intereses-de-la-Deuda-1.pdf" },
                  { id: "pt-2025-t5-endeudamiento", label: "Publica el Endeudamiento Neto", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Publica-el-Endeudamiento-Neto.pdf" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "st-2025",
        label: "Segundo Trimestre 2025",
        children: [
          { id: "st-2025-inventario", label: "Inventario", children: [
            { id: "st-2025-rmbi", label: "RMBI2025202506", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/RMBI2025202506-1.pdf" },
            { id: "st-2025-rmbm", label: "RMBM2025202506", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/RMBM2025202506-1.pdf" },
            { id: "st-2025-rmbmbc", label: "RMBMBC2025202506", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/RMBMBC2025202506-1.pdf" },
            { id: "st-2025-rmbmi", label: "RMBMI2025202506", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/RMBMI2025202506.pdf" },
          ]},
          { id: "st-2025-ldf", label: "Ley de Disciplina Financiera", children: [
            { id: "st-2025-balance", label: "Balance Presupuestario - LDF", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/BALANCE-PRESUPUESTARIO-LDF-1.pdf" },
            { id: "st-2025-ingresos-det", label: "Estado Analítico de Ingresos Detallado - LDF", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/ESTADO-ANALITICO-DE-INGRESOS-DETALLADO-LDF-1.pdf" },
            { id: "st-2025-deuda", label: "Estado Analítico de la Deuda Pública y Otros Pasivos - LDF", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/ESTADO-ANALITICO-DE-LA-DEUDA-PUBLICA-Y-OTROS-PASIVOS-LDF-1.pdf" },
            { id: "st-2025-admin", label: "Egresos Detallado - LDF Clasificación Administrativa", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/ESTADO-ANALITICO-DEL-EJERCICIO-DEL-PRESUPUESTO-DE-EGRESOS-DETALLADO-LDF-CLASIFICACION-ADMINISTRATIVA-1.pdf" },
            { id: "st-2025-funcional", label: "Egresos Detallado - LDF Clasificación Funcional", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/ESTADO-ANALITICO-DEL-EJERCICIO-DEL-PRESUPUESTO-DE-EGRESOS-DETALLADO-LDF-CLASIFICACION-FUNCIONAL-1.pdf" },
            { id: "st-2025-objeto", label: "Egresos Detallado - LDF Clasificación por Objeto del Gasto", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/ESTADO-ANALITICO-DEL-EJERCICIO-DEL-PRESUPUESTO-DE-EGRESOS-DETALLADO-LDF-CLASIFICACION-POR-OBJETO-DEL-GASTO-1.pdf" },
            { id: "st-2025-situacion-det", label: "Estado de Situación Financiera Detallado - LDF", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/ESTADO-DE-SITUACION-FINANCIERA-DETALLADO-LDF-1.pdf" },
          ]},
          { id: "st-2025-pbrm", label: "PbRM", children: [{ id: "st-2025-pbrm-file", label: "Fichas Técnicas de Seguimiento de Indicadores", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/Fichas-Tecnicas-de-Seguimiento-de-Indicadores.pdf" }] },
          { id: "st-2025-manual", label: "Manual Único de Contabilidad Gubernamental", children: [{ id: "st-2025-manual-file", label: "Manual Único de Contabilidad Gubernamental", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/MANUAL-UNICO-DE-CONTABILIDAD-GUBERNAMENTAL.pdf" }] },
          {
            id: "st-2025-titulo-iv",
            label: "Título IV",
            children: [
              { id: "st-2025-t4-informacion", label: "Información", children: [{ id: "st-2025-t4-acumulado", label: "Estado de Actividades Acumulado", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/ESTADO-DE-ACTIVIDADES-ACUMULADO.pdf" }] },
              { id: "st-2025-t4-contable", label: "Información Contable", children: [
                { id: "st-2025-t4-diario", label: "Diario General Pólizas", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/DIARIO-GENERAL-POLIZAS.pdf" },
                { id: "st-2025-t4-deuda", label: "Estado Analítico de la Deuda y Otros Pasivos", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/ESTADO-ANALITICO-DE-LA-DEUDA-Y-OTROS-PASIVOS-1.pdf" },
                { id: "st-2025-t4-activo", label: "Estado Analítico del Activo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/ESTADO-ANALITICO-DEL-ACTIVO-1.pdf" },
                { id: "st-2025-t4-actividades", label: "Estado de Actividades", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/ESTADO-DE-ACTIVIDADES-1.pdf" },
                { id: "st-2025-t4-cambios", label: "Estado de Cambios en la Situación Financiera", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/ESTADO-DE-CAMBIOS-EN-LA-SITUACION-FINANCIERA-1.pdf" },
                { id: "st-2025-t4-flujos", label: "Estado de Flujos de Efectivo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/ESTADO-DE-FLUJOS-DE-EFECTIVO-1.pdf" },
                { id: "st-2025-t4-situacion", label: "Estado de Situación Financiera", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/ESTADO-DE-SITUACION-FINANCIERA-1.pdf" },
                { id: "st-2025-t4-variacion", label: "Estado de Variación en la Hacienda Pública", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/ESTADO-DE-VARIACION-EN-LA-HACIENDA-PUBLICA-1.pdf" },
                { id: "st-2025-t4-notas", label: "Notas a los Estados Financieros", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/NOTAS-A-LOS-ESTADOS-FINANCIEROS-1.pdf" },
                { id: "st-2025-t4-pasivos", label: "Pasivos Contingentes", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/PASIVOS-CONTINGENTES.pdf" },
              ]},
              { id: "st-2025-t4-presupuestaria", label: "Información Presupuestaria", children: [
                { id: "st-2025-t4-ingresos", label: "Estado Analítico de Ingresos", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/ESTADO-ANALITICO-DE-INGRESOS-1.pdf" },
                { id: "st-2025-t4-objeto", label: "Clasificación por Objeto del Gasto", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/ESTADO-ANALITICO-DEL-EJERCICIO-DEL-PRESUPUESTO-DE-EGRESOS-CLASIFICIACION-POR-OBJETO-DEL-GASTO-CAPITULO-Y-CONCEPTO.pdf" },
                { id: "st-2025-t4-admin", label: "Clasificación Administrativa", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/ESTADO-ANALITICO-DEL-EJERCICIO-DEL-PRESUPUESTO-DE-EGRESOS-CLASIFICACION-ADMINISTRATIVA-1.pdf" },
                { id: "st-2025-t4-economica", label: "Clasificación Económica (por Tipo de Gasto)", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/ESTADO-ANALITICO-DEL-EJERCICIO-DEL-PRESUPUESTO-DE-EGRESOS-CLASIFICACION-ECONOMICA-POR-TIPO-DE-GASTO.pdf" },
                { id: "st-2025-t4-funcional", label: "Clasificación Funcional (Finalidad y Función)", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/ESTADO-ANALITICO-DEL-EJERCICIO-DEL-PRESUPUESTO-DE-EGRESOS-CLASIFICACION-FUNCIONAL-FINALIDAD-Y-FUNCION.pdf" },
              ]},
              { id: "st-2025-t4-programatica", label: "Información Programática", children: [{ id: "st-2025-t4-gasto", label: "Gasto por Categoría Programática", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/GASTO-POR-CATEGORIA-PROGRAMATICA-1.pdf" }] },
            ],
          },
          { id: "st-2025-titulo-v", label: "Título V", children: [{ id: "st-2025-t5-info", label: "Información", children: [
            { id: "st-2025-t5-ayudas", label: "Ayudas y Subsidios", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/AYUDAS-Y-SUBSIDIOS-1.pdf" },
            { id: "st-2025-t5-endeudamiento", label: "Endeudamiento Neto", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/ENDEUDAMIENTO-NETO-1.pdf" },
            { id: "st-2025-t5-intereses", label: "Intereses de la Deuda", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/INTERESES-DE-LA-DEUDA.pdf" },
            { id: "st-2025-t5-proyectos", label: "Programas de Proyectos de Inversión", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/PROGRAMAS-DE-PROYECTOS-DE-INVERSION.pdf" },
            { id: "st-2025-t5-sistema", label: "Sistema de Contabilidad Gubernamental", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/SISTEMA-DE-CONTABILIDAD-GUBERNAMENTAL.pdf" },
          ]}] },
        ],
      },
      {
        id: "tt-2025",
        label: "Tercer Trimestre 2025",
        children: [
          { id: "tt-2025-titulo-iv", label: "Título IV", children: [
            { id: "tt-2025-t4-contable", label: "Información Contable", children: [
              { id: "tt-2025-acum", label: "Estado de Actividades Acumulado", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-DE-ACTIVIDADES-ACUMULADO.pdf" },
              { id: "tt-2025-notas", label: "Notas a los Estados Financieros", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/NOTAS-A-LOS-ESTADOS-FINANCIEROS.pdf" },
              { id: "tt-2025-diario", label: "Diario General de Pólizas", href: "https://drive.google.com/file/d/12yPsmMHGIkrA5y2g_5jokQ50UnCPkeZY/view?usp=sharing" },
              { id: "tt-2025-flujos", label: "Estado de Flujos de Efectivo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-DE-FLUJOS-DE-EFECTIVO.pdf" },
              { id: "tt-2025-cambios", label: "Estado de Cambios en la Situación Financiera", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-DE-CAMBIOS-EN-LA-SITUACION-FINANCIERA-1.pdf" },
              { id: "tt-2025-deuda", label: "Estado Analítico de la Deuda y Otros Pasivos", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-ANALITICO-DE-LA-DEUDA-Y-OTROS-PASIVOS-1.pdf" },
              { id: "tt-2025-activo", label: "Estado Analítico del Activo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-ANALITICO-DEL-ACTIVO-1.pdf" },
              { id: "tt-2025-actividades", label: "Estado de Actividades", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-DE-ACTIVIDADES.pdf" },
              { id: "tt-2025-situacion", label: "Estado de Situación Financiera", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-DE-SITUACION-FINANCIERA.pdf" },
              { id: "tt-2025-pasivos", label: "Informe sobre Pasivos Contingentes", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/INFORME-SOBRE-PASIVOS-CONTINGENTES.pdf" },
            ]},
            { id: "tt-2025-ldf", label: "Ley de Disciplina Financiera", children: [
              { id: "tt-2025-ldf-objeto", label: "Clasificación por Objeto del Gasto", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO3.pdf" },
              { id: "tt-2025-ldf-funcional", label: "Clasificación Funcional (Finalidad y Función)", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-ANALTICIO-DEL-EJERCICICIO-DEL-PRESUPUESTO-DE-EGRESOS-DETALLADO-LDF-CLASIFICACION-FUNCIONAL-FINALIDAD-Y-FUNCION.pdf" },
              { id: "tt-2025-ldf-admin", label: "Clasificación Administrativa", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-ANALITICO-DEL-EJERCICIO-DEL-PRESUPUESTO-DE-EGRESOS-DETALLADO-LDF-CLASIFICACION-ADMINISTRATIVA.pdf" },
              { id: "tt-2025-ldf-ingresos", label: "Estado Analítico de Ingresos Detallado-LDF", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-ANALITICO-DE-INGRESOS-DETALLADO-LDF.pdf" },
              { id: "tt-2025-ldf-balance", label: "Balance Presupuestario-LDF", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/BALANCE-PRESUPUESTARIO-LDF.pdf" },
              { id: "tt-2025-ldf-deuda", label: "Informe Analítico de la Deuda Pública y Otros Pasivos - LDF", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/INFORME-ANALITICO-DE-LA-DEUDA-PUBLICA-Y-OTROS-PASIVOS-LDF.pdf" },
              { id: "tt-2025-ldf-situacion", label: "Estado de Situación Financiera Detallado-LDF", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-DE-SITUACION-FINANCIERA-DETALLADO-LDF.pdf" },
            ]},
            { id: "tt-2025-presupuestaria", label: "Información Presupuestaria", children: [
              { id: "tt-2025-pres-funcional", label: "Clasificación Funcional (Finalidad y Función)", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-ANALITICO-DEL-EJERCICIO-DEL-PREPUESTO-DE-EGRESOS-CLASIFICACION-FUNCIONAL-FINALIDAD-Y-FUNCION.pdf" },
              { id: "tt-2025-pres-admin", label: "Clasificación Administrativa", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-ANALITICO-DEL-EJERCICIO-DEL-PRESUPUESTO-DE-EGRESOS-CLASIFICACION-ADMINISTRATIVA.pdf" },
              { id: "tt-2025-pres-economica", label: "Clasificación Económica (por Tipo de Gasto)", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-ANALITICO-DEL-EJERCICIO-DEL-PREPRESUPUESTO-DE-EGRESOS-CLASIFICACION-ECONOMICA-POR-TIPO-DE-GASTO.pdf" },
              { id: "tt-2025-pres-objeto", label: "Clasificación por Objeto del Gasto", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-ANALITICO-DEL-EJERCICIO-DEL-PRESUPUESTO-DE-EGRESOS-CALSIFICACION-POR-OBJETO-DEL-GASTO-CAPITULO-Y-CONCEPTO.pdf" },
              { id: "tt-2025-pres-ingresos", label: "Estado Analítico de Ingresos", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-ANALITICO-DE-INGRESOS.pdf" },
            ]},
            { id: "tt-2025-programatica", label: "Información Programática", children: [{ id: "tt-2025-gasto", label: "Gasto por Categoría Programática", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/GASTO-POR-CATEGORIA-PROGRAMATICA2.pdf" }] },
          ]},
          { id: "tt-2025-manual", label: "Manual Único de Contabilidad Gubernamental", children: [{ id: "tt-2025-manual-file", label: "Manual Único de Contabilidad Gubernamental", href: "https://drive.google.com/file/d/1tStzjmeVW-9Ov-G3miHdZpcGvEKv597f/view?usp=sharing" }] },
          { id: "tt-2025-pbrm", label: "PbRM", children: [{ id: "tt-2025-pbrm-file", label: "PbRM", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/PbRM.pdf" }] },
          { id: "tt-2025-inventarios", label: "Inventarios", children: [
            { id: "tt-2025-rmbmbc", label: "RMBMBC2025202509", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/RMBMBC2025202509.pdf" },
            { id: "tt-2025-rmbm", label: "RMBM2025202509", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/RMBM2025202509.pdf" },
            { id: "tt-2025-rmbi", label: "RMBI2025202509", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/RMBI2025202509.pdf" },
          ]},
          { id: "tt-2025-titulo-v", label: "Título V", children: [{ id: "tt-2025-t5-info", label: "Información", children: [
            { id: "tt-2025-ayudas", label: "Ayudas y Subsidios", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/AYUDAS-Y-SUBSIDIOS-1.pdf" },
            { id: "tt-2025-endeudamiento", label: "Endeudamiento Neto", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ENDEUDAMIENTO-NETO-2.pdf" },
            { id: "tt-2025-intereses", label: "Intereses de la Deuda", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/INTERESES-DE-LA-DEUDA.pdf" },
            { id: "tt-2025-proyectos", label: "Programas y Proyectos de Inversión", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/PROGRAMAS-Y-PROYECTOS-DE-INVERSION-2.pdf" },
          ]}] },
        ],
      },
      {
        id: "ct-2025",
        label: "Cuarto Trimestre 2025",
        children: [
          { id: "ct-2025-titulo-v", label: "Título V", children: [{ id: "ct-2025-info", label: "Información", children: [{ id: "ct-2025-ayudas", label: "Ayudas y Subsidios", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2026/02/AYUDAS-Y-SUBSIDIOS.pdf" }] }] },
          { id: "ct-2025-inventarios", label: "Inventarios", children: [{ id: "ct-2025-bienes", label: "Bienes Muebles e Inmuebles", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2026/02/BIENES-MUEBLES-E-INMUEBLES.pdf" }] },
        ],
      },
      {
        id: "ct-2024",
        label: "Cuarto Trimestre 2024",
        children: [
          { id: "ct-2024-inventario", label: "Inventario", children: [{ id: "ct-2024-ibmbc", label: "IBMBC2025202412", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/IBMBC2025202412.pdf" }] },
          { id: "ct-2024-ldf", label: "Ley de Disciplina", children: [
            { id: "ct-2024-balance", label: "Balance Presupuestario", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/balance_presupuestario.pdf" },
            { id: "ct-2024-ingresos-det", label: "Estado Analítico de Ingresos Detallado", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/estado_analitico_de_ingresos_detallado.pdf" },
            { id: "ct-2024-admin", label: "Clasificación Administrativa", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/estado_analitico_del_ejercicio_del_presupuesto_de_egresos_clasificacion_administrativa.pdf" },
            { id: "ct-2024-servicios", label: "Servicios Personales por Categoría", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/estado_analitico_del_ejercicio_del_presupuesto_de_egresos_clasificacion_de_servicios_personales_por_categoria.pdf" },
            { id: "ct-2024-funcional", label: "Clasificación Funcional", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/estado_analitico_del_ejercicio_del_presupuesto_de_egresos_clasificacion_funcional.pdf" },
            { id: "ct-2024-objeto", label: "Clasificación por Objeto del Gasto", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/estado_analitico_del_ejercicio_del_presupuesto_de_egresos_clasificacion_por_objeto_de_gasto.pdf" },
          ]},
          { id: "ct-2024-pbrm", label: "PbRM", children: [{ id: "ct-2024-pbrm-file", label: "PbRM08b2025202412", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/PbRM08b2025202412.pdf" }] },
          { id: "ct-2024-manual", label: "Manual Único de Contabilidad Gubernamental", children: [{ id: "ct-2024-manual-file", label: "Manual único de contabilidad gubernamental", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/manual_unico_de_contabilidad_gubernamental.pdf" }] },
          { id: "ct-2024-titulo-iv", label: "Título IV", children: [
            { id: "ct-2024-t4-egresos", label: "Estado Analítico del Ejercicio del Presupuesto de Egresos", children: [
              { id: "ct-2024-t4-admin", label: "Clasificación Administrativa", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Clasificacion-Administrativa.pdf" },
              { id: "ct-2024-t4-economica", label: "Clasificación Económica", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Clasificacion-Economica.pdf" },
              { id: "ct-2024-t4-funcional", label: "Clasificación Funcional", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Clasificacion-Funcional.pdf" },
              { id: "ct-2024-t4-objeto", label: "Clasificación por Objeto del Gasto", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Clasificacion-por-Objeto-deL-Gasto.pdf" },
              { id: "ct-2024-t4-programatica", label: "Gasto por Categoría Programática", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Gasto-por-Categoria-Programatica.pdf" },
            ]},
            { id: "ct-2024-t4-contable", label: "Información Contable", children: [
              { id: "ct-2024-t4-ayudas", label: "Ayuda y Subsidios", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/AYUDA-Y-SUBSIDIOS.pdf" },
              { id: "ct-2024-t4-diario", label: "Diario General de Pólizas", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Diario-Geral-de-Polizas.pdf" },
              { id: "ct-2024-t4-endeudamiento", label: "Endeudamiento Neto", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Endeudamiento-Neto.pdf" },
              { id: "ct-2024-t4-cambios", label: "Estado de Cambios en la Situación Financiera", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Esta-de-Cambios-en-la-Situacion-Financiera-.pdf" },
              { id: "ct-2024-t4-deuda", label: "Estado Analítico de la Deuda y Otros Pasivos", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Estado-Analitico-de-la-Deuda-y-Otros-Pasivos.pdf" },
              { id: "ct-2024-t4-activo", label: "Estado Analítico del Activo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Estado-Analitico-del-Activo-.pdf" },
              { id: "ct-2024-t4-actividades", label: "Estado de Actividades", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Estado-de-Actividades-.pdf" },
              { id: "ct-2024-t4-flujos", label: "Estado de Flujos de Efectivo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Estado-de-Flujos-de-Efectivo.pdf" },
              { id: "ct-2024-t4-situacion", label: "Estado de Situación Financiera", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Estado-de-Situacion-Financiera.pdf" },
              { id: "ct-2024-t4-variacion", label: "Estado de Variación en la Hacienda Pública", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Estado-de-Variacion-en-la-Hacienda-Publica-.pdf" },
              { id: "ct-2024-t4-pasivos", label: "Informe sobre Pasivos Contingentes", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/INFORME-SOBRE-PASIVOS-CONTINGENTES-1.pdf" },
              { id: "ct-2024-t4-notas", label: "Notas a los Estados Financieros", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/NOTAS-A-LOS-ESTADOS-FINANCIEROS-2.pdf" },
              { id: "ct-2024-t4-proyectos", label: "Programas y Proyectos de Inversión", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/PROGRAMAS-Y-PROYECTOS-DE-INVERCION.pdf" },
            ]},
            { id: "ct-2024-t4-presupuestaria", label: "Información Presupuestaria", children: [
              { id: "ct-2024-t4-pres-endeudamiento", label: "Endeudamiento Neto", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Endeudamiento-Neto-1.pdf" },
              { id: "ct-2024-t4-pres-ingresos", label: "Estado Analítico de Ingresos", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Estado-Analitico-de-Ingresos.pdf" },
            ]},
          ]},
          { id: "ct-2024-titulo-v", label: "Título V", children: [{ id: "ct-2024-t5-info", label: "Información", children: [
            { id: "ct-2024-t5-intereses", label: "Intereses de la Deuda", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Intereses-de-la-Deuda.pdf" },
            { id: "ct-2024-t5-ayudas", label: "Ayudas y Subsidios", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Ayudas-Y-Subsidios.pdf" },
            { id: "ct-2024-t5-endeudamiento", label: "Endeudamiento Neto", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Endeudamiento-Neto-2.pdf" },
          ]}] },
        ],
      },
    ],
  },
  {
    id: "presupuestos",
    label: "Presupuestos",
    children: [
      { id: "presupuesto-2026", label: "Presupuesto 2026", children: [
        { id: "presupuesto-2026-egresos", label: "Carátula del Presupuesto de Egresos", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2026/02/CARATULA-DEL-PRESUPUESTO-DE-EGRESOS.pdf" },
        { id: "presupuesto-2026-ingresos", label: "Carátula del Presupuesto de Ingresos", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2026/02/CARATULA-DEL-PRESUPUESTO-DE-INGRESOS.pdf" },
      ]},
      { id: "presupuesto-2025", label: "Presupuesto 2025", children: [
        { id: "presupuesto-2025-egresos", label: "Carátula del Presupuesto de Egresos Ejercicio 2025", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/CARATULA-DEL-PRESUPUESTO-DE-EGRESOS-EJERCICIO-2025.pdf" },
        { id: "presupuesto-2025-ingresos", label: "Carátula del Presupuesto de Ingresos Ejercicio 2025", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/CARATULA-DEL-PRESUPUESTO-DE-INGRESOS-EJERCICIO-2025.pdf" },
      ]},
      { id: "presupuesto-2024", label: "Presupuesto 2024", children: [
        { id: "presupuesto-2024-egresos", label: "Carátula del Presupuesto de Egresos Ejercicio 2024", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/CARATULA-DEL-PRESUPUESTO-DE-EGRESOS-EJERCICIO-2024.pdf" },
        { id: "presupuesto-2024-ingresos", label: "Carátula del Presupuesto de Ingresos Ejercicio 2024", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/CARATULA-DEL-PRESUPUESTO-DE-INGRESOS-EJERCICIO-2024.pdf" },
      ]},
      { id: "presupuesto-2023", label: "Presupuesto 2023", children: [
        { id: "presupuesto-2023-egresos", label: "Carátula del Presupuesto de Egresos Ejercicio 2023", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/CARATULA-DEL-PRESUPUESTO-DE-EGRESOS-EJERCICIO-2023.pdf" },
        { id: "presupuesto-2023-ingresos", label: "Carátula del Presupuesto de Ingresos Ejercicio 2023", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/CARATULA-DEL-PRESUPUESTO-DE-INGRESOS-EJERCICIO-2023.pdf" },
      ]},
      { id: "presupuesto-2022", label: "Presupuesto 2022", children: [
        { id: "presupuesto-2022-ingresos", label: "Carátula del Presupuesto de Ingresos 2022", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/CARATULA-DEL-PRESUPUESTO-DE-INGRESOS-2022.pdf" },
        { id: "presupuesto-2022-egresos", label: "Carátula de Presupuesto de Egresos 2022", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/CARATULA-DE-PRESUPUESTO-DE-EGRESOS-2022.pdf" },
      ]},
    ],
  },
  {
    id: "cuenta-publica",
    label: "Cuenta Pública",
    children: [
      { id: "cuenta-publica-2024", label: "Cuenta Pública 2024", children: [
        { id: "cp-2024-balance", label: "Balance Presupuestario", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/BALANCE-PRESUPUESTARIO.pdf" },
        { id: "cp-2024-diario", label: "Diario General de Pólizas", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/DIARIO-GENERAL-DE-POLIZAS.pdf" },
        { id: "cp-2024-detallado", label: "Estado Analítico del Ejercicio del Presupuesto de Egresos Detallado", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-ANALITICO-DEL-EJERCICIO-DEL-PRESUPUESTO-DE-EGRESOS-DETALLADO.pdf" },
        { id: "cp-2024-deuda", label: "Estado Analítico de la Deuda y Otros Pasivos", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-ANALITICO-DE-LA-DEUDA-Y-OTROS-PASIVOS.pdf" },
        { id: "cp-2024-ejercicio", label: "Estado Analítico del Ejercicio del Presupuesto de Egresos", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-ANALITICO-DEL-EJERCICIO-DEL-PRESUPUESTO-DE-EGRESOS.pdf" },
        { id: "cp-2024-ingresos-det", label: "Estado Analítico de Ingresos Detallado", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-ANALITICO-DE-INGRESOS-DETALLADO.pdf" },
        { id: "cp-2024-activo", label: "Estado Analítico del Activo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-ANALITICO-DEL-ACTIVO.pdf" },
        { id: "cp-2024-actividades", label: "Estado de Actividades Comparativo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-DE-ACTIVIDADES-COMPARATIVO.pdf" },
        { id: "cp-2024-cambios", label: "Estado de Cambios en la Situación Financiera", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-DE-CAMBIOS-EN-LA-SITUACION-FINANCIERA.pdf" },
        { id: "cp-2024-flujo", label: "Estado de Flujo de Efectivo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-DE-FLUJO-DE-EFECTIVO.pdf" },
        { id: "cp-2024-situacion", label: "Estado de Situación Financiera", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-DE-SITUACION-FINACIERA.pdf" },
        { id: "cp-2024-situacion-comp", label: "Estado de Situación Financiera Comparativo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-DE-SITUACION-FINANCIERA-COMPARATIVO.pdf" },
        { id: "cp-2024-variacion", label: "Estado de Variación de la Hacienda Pública", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-DE-VARIACION-DE-LA-HACIENDA-PUBLICA.pdf" },
      ]},
      { id: "cuenta-publica-2023", label: "Cuenta Pública 2023", children: [
        { id: "cp-2023-situacion", label: "Estado de Situación Financiera", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-DE-SITUACION-FINANCIERA.pdf" },
        { id: "cp-2023-diario", label: "Diario General de Pólizas", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/DIARIO-GENERAL-DE-POLIZAS.pdf" },
        { id: "cp-2023-servicios", label: "Servicios Personales por Categoría", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-ANALITICO-DEL-EJERCICIO-DEL-PRESUPUESTO-DE-EGRESOS-DETALLADO-LDF-CLASIFICACION-DE-SERVICIOS-PERSONALES-POR-CATEGORIA.pdf" },
        { id: "cp-2023-objeto", label: "Estado Analítico del Ejercicio del Presupuesto de Egresos por Objeto del Gasto", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-ANALITICO-DEL-EJERCICIO-DEL-PRESUPUESTO-DE-EGRESOS-POR-OBJETO-DEL-GASTO-CAPITULO-Y-CONCEPTO.pdf" },
        { id: "cp-2023-deuda", label: "Estado Analítico de la Deuda y Otros Pasivos", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-ANALITCO-DE-LA-DEUDA-Y-OTROS-PASIVOS.pdf" },
        { id: "cp-2023-balance", label: "Balance Presupuestario-LDF", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/BALANCE-PRESUPUESTARIO-LDF-1.pdf" },
        { id: "cp-2023-activo", label: "Estado Analítico del Activo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-ANALITICO-DEL-ACTIVO.pdf" },
        { id: "cp-2023-actividades", label: "Estado de Actividades Comparativo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-DE-ACTIVIDADES-COMPARATIVO.pdf" },
        { id: "cp-2023-ingresos", label: "Estado Analítico de Ingresos", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-ANALITICO-DE-INGRESOS.pdf" },
        { id: "cp-2023-ingresos-det", label: "Estado Analítico de Ingresos Detallado-LDF", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-ANALITICO-DE-INGRESOS-DETALLADO-LDF.pdf" },
        { id: "cp-2023-cambios", label: "Estado de Cambios en la Situación Financiera", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-DE-CAMBIOS-EN-LA-SITUACION-FINANCIERA.pdf" },
        { id: "cp-2023-flujos", label: "Estado de Flujos de Efectivo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-DE-FLUJOS-DE-EFECTIVO.pdf" },
        { id: "cp-2023-situacion-comp", label: "Estado de Situación Financiera Comparativo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-DE-SITUACION-FINANCIERA-COMPARATIVO.pdf" },
        { id: "cp-2023-variacion", label: "Estado de Variación en la Hacienda Pública", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-DE-VARIACION-EN-LA-HACIENDA-PUBLICA.pdf" },
      ]},
      { id: "cuenta-publica-2022", label: "Cuenta Pública 2022", children: [
        { id: "cp-2022-servicios", label: "Servicios Personales por Categoría", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-ANALITICO-DEL-EJERCICIO-DEL-PRESUPUESTO-DE-EGRESOS-DETALLADO-LDF-CLASIFICACION-DE-SERVICIOS-PERSONALES-POR-CATEGORIA-2.pdf" },
        { id: "cp-2022-ingresos-det", label: "Estado Analítico de Ingresos Detallado LDF", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-ANALITICO-DE-INGRESOS-DETALLADO-LDF-1.pdf" },
        { id: "cp-2022-balance", label: "Balance Presupuestario LDF", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/BALANCE-PRESUPUESTARIO-LDF-1.pdf" },
        { id: "cp-2022-objeto", label: "Clasificación por Objeto del Gasto", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-ANALITICO-DEL-EJERCICIO-DEL-PRESUPUESTO-DE-EGRESOS-CALSIFICACION-POR-OBJETO-DEL-GASTO-CAPITULO-Y-CONCEPTO.pdf" },
        { id: "cp-2022-diario", label: "Diario General de Pólizas", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/DIARIO-GENERAL-DE-POLIZAS-1.pdf" },
        { id: "cp-2022-situacion", label: "Estado de Situación Financiera", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-DE-SITUACION-FINANCIERA-1.pdf" },
        { id: "cp-2022-cambios", label: "Estado de Cambios en la Situación Financiera", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-DE-CAMBIOS-EN-LA-SITUACION-FINANCIERA-1.pdf" },
        { id: "cp-2022-activo", label: "Estado Analítico del Activo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-ANALITICO-DEL-ACTIVO-1.pdf" },
        { id: "cp-2022-situacion-comp", label: "Estado de Situación Financiera Comparativo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-DE-SITUACION-FINANCIERA-COMPARATIVO-1.pdf" },
        { id: "cp-2022-deuda", label: "Estado Analítico de la Deuda y Otros Pasivos", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-ANALITICO-DE-LA-DEUDA-Y-OTROS-PASIVOS.pdf" },
        { id: "cp-2022-flujos", label: "Estado de Flujos de Efectivo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-DE-FLUJOS-DE-EFECTIVO-1.pdf" },
        { id: "cp-2022-variacion", label: "Estado de Variación en la Hacienda Pública", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-DE-VARIACION-EN-LA-HACIENDA-PUBLICA-1.pdf" },
      ]},
      { id: "cuenta-publica-2021", label: "Cuenta Pública 2021", children: [
        { id: "cp-2021-ingresos-det", label: "Estado Analítico de Ingresos Detallado LDF", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-ANALITICO-DE-INGRESOS-DETALLADO-LDF-3.pdf" },
        { id: "cp-2021-balance", label: "Balance Presupuestario LDF", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/BALANCE-PRESUPUESTARIO-LDF-3.pdf" },
        { id: "cp-2021-situacion-det", label: "Estado de Situación Financiera Detallado LDF", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-DE-SITUACION-FINANCIERA-DETALLADO-LDF-1.pdf" },
        { id: "cp-2021-flujos", label: "Estado de Flujos de Efectivo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-DE-FLUJOS-DE-EFECTIVO-5.pdf" },
        { id: "cp-2021-cambios", label: "Estado de Cambios en la Situación Financiera", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-DE-CAMBIOS-EN-LA-SITUACION-FINANCIERA-4.pdf" },
        { id: "cp-2021-activo", label: "Estado Analítico del Activo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-ANALITICO-DEL-ACTIVO-5.pdf" },
        { id: "cp-2021-variacion", label: "Estado de Variación de la Hacienda Pública", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-DE-VARIACION-DE-LA-HACIENDA-PUBLICA.pdf" },
        { id: "cp-2021-actividades", label: "Estado de Actividades Comparativo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-DE-ACTIVIDADES-COMPARATIVO-2.pdf" },
        { id: "cp-2021-situacion-comp", label: "Estado de Situación Financiera Comparativo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-DE-SITUACION-FINANCIERA-COMPARATIVO-3.pdf" },
        { id: "cp-2021-objeto", label: "Clasificación por Objeto del Gasto", href: "https://drive.google.com/file/d/1YysjwPiCK0qWBCi0oWFoAyS1zEtTJKm3/view?usp=sharing" },
      ]},
      { id: "cuenta-publica-2020", label: "Cuenta Pública 2020", children: [
        { id: "cp-2020-situacion-comp", label: "Estado de Situación Financiera Comparativo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-DE-SITUACION-FINANCIERA-COMPARATIVO-4.pdf" },
        { id: "cp-2020-activo", label: "Estado Analítico del Activo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-ANALITICO-DEL-ACTIVO-6.pdf" },
        { id: "cp-2020-variacion", label: "Estado de Variación en la Hacienda Pública", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-DE-VARIACION-EN-LA-HACIENDA-PUBLICA-5.pdf" },
        { id: "cp-2020-deuda", label: "Estado Analítico de la Deuda y Otros Pasivos", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-ANALITICO-DE-LA-DEUDA-Y-OTROS-PASIVOS-6.pdf" },
        { id: "cp-2020-flujos", label: "Estado de Flujos de Efectivo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-DE-FLUJOS-DE-EFECTIVO-6.pdf" },
        { id: "cp-2020-cambios", label: "Estado de Cambios en la Situación Financiera", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-DE-CAMBIOS-EN-LA-SITUACION-FINANCIERA-5.pdf" },
        { id: "cp-2020-actividades", label: "Estado de Actividades Comparativo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-DE-ACTIVIDADES-COMPARATIVO-3.pdf" },
        { id: "cp-2020-objeto", label: "Clasificación por Objeto del Gasto", href: "https://drive.google.com/file/d/1F0yG7JF25GVi0xX_QrlXGdV5IUtd4_xR/view?usp=sharing" },
      ]},
    ],
  },
];

type TreeProps = {
  items: MenuNode[];
  openNodes: Record<string, boolean>;
  toggleNode: (id: string) => void;
  closeAll: () => void;
  depth?: number;
};

function TreeMenu({ items, openNodes, toggleNode, closeAll, depth = 0 }: TreeProps) {
  return (
    <div className={`lgcgTreeLevel depth-${depth}`}>
      {items.map((item) => {
        const hasChildren = Boolean(item.children?.length);
        const isOpen = Boolean(openNodes[item.id]);

        if (hasChildren) {
          return (
            <div key={item.id} className={`lgcgNode ${isOpen ? "open" : ""}`}>
              <button
                type="button"
                className="lgcgTrigger"
                onClick={() => toggleNode(item.id)}
                aria-expanded={isOpen}
              >
                <span>{item.label}</span>
                <span className="caret">{isOpen ? "▾" : "▸"}</span>
              </button>
              <div className="lgcgChildren">
                <TreeMenu
                  items={item.children ?? []}
                  openNodes={openNodes}
                  toggleNode={toggleNode}
                  closeAll={closeAll}
                  depth={depth + 1}
                />
              </div>
            </div>
          );
        }

        return (
          <a
            key={item.id}
            href={item.href}
            className="lgcgLeaf"
            target="_blank"
            rel="noreferrer"
            onClick={closeAll}
          >
            {item.label}
          </a>
        );
      })}
    </div>
  );
}

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [openNodes, setOpenNodes] = useState<Record<string, boolean>>({});

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 900) setMobileOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenMenu(null);
        setOpenNodes({});
      }
    }
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [mobileOpen]);

  function toggleMainMenu(menu: MenuKey) {
    setOpenMenu((current) => (current === menu ? null : menu));
  }

  function toggleNode(id: string) {
    setOpenNodes((current) => ({ ...current, [id]: !current[id] }));
  }

  function closeAll() {
    setMobileOpen(false);
    setOpenMenu(null);
    setOpenNodes({});
  }

  const infoOpen = useMemo(() => openMenu === "informacion", [openMenu]);

  return (
    <header className="header">
      <div className="container headerRow">
        <Link href="/" aria-label="Inicio" className="brand" onClick={closeAll}>
          <Image
            src="/banner.png"
            alt="ODAPAS Temascalcingo"
            width={220}
            height={60}
            priority
            className="brandLogo"
          />
        </Link>

        <>
            <button
              type="button"
              className={`menuToggle ${mobileOpen ? "active" : ""}`}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              onClick={() => {
                setMobileOpen((prev) => !prev);
                setOpenMenu(null);
              }}
            >
              <span />
              <span />
              <span />
            </button>

            <nav className="navShell" aria-label="Navegación principal">
              <div className="nav">
                <Link href="/" className="navLink" onClick={closeAll}>
                  Inicio
                </Link>

                <div
                  className={`navItem dropdown ${openMenu === "servicios" ? "open" : ""}`}
                  onMouseEnter={() => !mobileOpen && setOpenMenu("servicios")}
                  onMouseLeave={() => !mobileOpen && setOpenMenu(null)}
                >
                  <button
                    type="button"
                    className="navLink navButton"
                    onClick={() => toggleMainMenu("servicios")}
                    aria-expanded={openMenu === "servicios"}
                  >
                    Servicios <span className="caret">▾</span>
                  </button>

                  <div className="dropdownMenu megaMenu">
                    <div className="megaCol">
                      <div className="megaTitle">Trámites y atención</div>
                      <Link href="/pagar" className="dropdownLink" onClick={closeAll}>Pagar servicio</Link>
                      <Link href="/consultar" className="dropdownLink" onClick={closeAll}>Consultar adeudo</Link>
                      <Link href="/reportar" className="dropdownLink" onClick={closeAll}>Reportar fuga o incidencia</Link>
                    </div>
                    <div className="megaCol">
                      <div className="megaTitle">Información útil</div>
                      <Link href="/ubicaciones" className="dropdownLink" onClick={closeAll}>Ubicación oficial</Link>
                      <Link href="/cultura-agua" className="dropdownLink" onClick={closeAll}>Cultura del agua</Link>
                      <Link href="/noticias" className="dropdownLink" onClick={closeAll}>Noticias y avisos</Link>
                      <Link href="/contacto" className="dropdownLink" onClick={closeAll}>Contacto</Link>
                    </div>
                  </div>
                </div>

                <div
                  className={`navItem dropdown ${infoOpen ? "open" : ""}`}
                  onMouseEnter={() => !mobileOpen && setOpenMenu("informacion")}
                  onMouseLeave={() => !mobileOpen && setOpenMenu(null)}
                >
                  <button
                    type="button"
                    className="navLink navButton"
                    onClick={() => toggleMainMenu("informacion")}
                    aria-expanded={infoOpen}
                  >
                    Información <span className="caret">▾</span>
                  </button>

                  <div className="dropdownMenu compactMenu lgcgScrollableMenu">
                    <Link href="/quienes-somos" className="dropdownLink" onClick={closeAll}>¿Quiénes somos?</Link>
                    <Link href="/transparencia" className="dropdownLink" onClick={closeAll}>Transparencia</Link>

                    <div className="lgcgPanel">
                      <div className="lgcgPanelTitle">LGCG</div>
                      <div className="lgcgScrollArea">
                        <TreeMenu
                          items={lgcgMenu}
                          openNodes={openNodes}
                          toggleNode={toggleNode}
                          closeAll={closeAll}
                        />
                      </div>
                    </div>

                    <Link href="/contacto" className="dropdownLink" onClick={closeAll}>Contacto</Link>
                  </div>
                </div>

                <Link href="/pagar" className="navLink navLinkAccent" onClick={closeAll}>
                  Pagar
                </Link>
              </div>
            </nav>

            {mobileOpen && (
              <div className="mobileMenu" aria-label="Menú móvil">
                <div className="mobileMenu__header">
                  <Link href="/" aria-label="Inicio" className="mobileMenu__brand" onClick={closeAll}>
                    <Image
                      src="/banner.png"
                      alt="ODAPAS Temascalcingo"
                      width={220}
                      height={60}
                      priority
                      className="brandLogo"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </Link>

                  <button
                    type="button"
                    className="mobileMenu__close"
                    aria-label="Cerrar menú"
                    onClick={closeAll}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>

                <div className="mobileMenu__body">
                  <div className="mobileMenu__panel">
                    <div className="nav">
                      <Link href="/" className="navLink" onClick={closeAll}>
                        Inicio
                      </Link>

                      <div className={`navItem dropdown ${openMenu === "servicios" ? "open" : ""}`}>
                        <button
                          type="button"
                          className="navLink navButton"
                          onClick={() => toggleMainMenu("servicios")}
                          aria-expanded={openMenu === "servicios"}
                        >
                          Servicios <span className="caret">▾</span>
                        </button>

                        <div className="dropdownMenu megaMenu">
                          <div className="megaCol">
                            <div className="megaTitle">Trámites y atención</div>
                            <Link href="/pagar" className="dropdownLink" onClick={closeAll}>Pagar servicio</Link>
                            <Link href="/consultar" className="dropdownLink" onClick={closeAll}>Consultar adeudo</Link>
                            <Link href="/reportar" className="dropdownLink" onClick={closeAll}>Reportar fuga o incidencia</Link>
                          </div>
                          <div className="megaCol">
                            <div className="megaTitle">Información útil</div>
                            <Link href="/ubicaciones" className="dropdownLink" onClick={closeAll}>Ubicación oficial</Link>
                            <Link href="/cultura-agua" className="dropdownLink" onClick={closeAll}>Cultura del agua</Link>
                            <Link href="/noticias" className="dropdownLink" onClick={closeAll}>Noticias y avisos</Link>
                            <Link href="/contacto" className="dropdownLink" onClick={closeAll}>Contacto</Link>
                          </div>
                        </div>
                      </div>

                      <div className={`navItem dropdown ${infoOpen ? "open" : ""}`}>
                        <button
                          type="button"
                          className="navLink navButton"
                          onClick={() => toggleMainMenu("informacion")}
                          aria-expanded={infoOpen}
                        >
                          Información <span className="caret">▾</span>
                        </button>

                        <div className="dropdownMenu compactMenu lgcgScrollableMenu">
                          <Link href="/quienes-somos" className="dropdownLink" onClick={closeAll}>¿Quiénes somos?</Link>
                          <Link href="/transparencia" className="dropdownLink" onClick={closeAll}>Transparencia</Link>

                          <div className="lgcgPanel">
                            <div className="lgcgPanelTitle">LGCG</div>
                            <div className="lgcgScrollArea">
                              <TreeMenu
                                items={lgcgMenu}
                                openNodes={openNodes}
                                toggleNode={toggleNode}
                                closeAll={closeAll}
                              />
                            </div>
                          </div>

                          <Link href="/contacto" className="dropdownLink" onClick={closeAll}>Contacto</Link>
                        </div>
                      </div>

                      <Link href="/pagar" className="navLink navLinkAccent" onClick={closeAll}>
                        Pagar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </>

      </div>
    </header>
  );
}
