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
    id: "reglamento-interno",
    label: "Reglamento Interno ODAPAS",
    href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/REGLAMENTO-INTERNO-ODAPAS-1.pdf",
  },
  {
    id: "organigrama",
    label: "Organigrama ODAPAS",
    href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ORGANIGRAMA-ODAPAS.pdf",
  },
  {
    id: "manual-procedimientos",
    label: "Manual de Procedimientos",
    href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/MANUAL-DE-PROCEDIMIENTOS-1.pdf",
  },
  {
    id: "manual-organizacion",
    label: "Manual de Organización",
    href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/MANUAL-DE-ORGANIZACION-1.pdf",
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
            id: "pt-2025-ldf", label: "Ley de Disciplina",
            children: [
              { id: "pt-2025-balance", label: "Balance presupuestario-LDF", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Balance-presupuestario-LDF.pdf" },
              { id: "pt-2025-ingresos-det", label: "Estado Analítico de Ingresos Detallado-LDF", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Estado-Analitico-de-Ingrsos-Detallado-LDF.pdf" },
              { id: "pt-2025-admin", label: "Egresos Detallado-LDF Clasificación Administrativa", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Estado-Analitico-del-ejercicio-del-Presupuesto-de-Egreos-Detallado-LDF-CLASIFICACION-ADMINISTRTIVA-.pdf" },
              { id: "pt-2025-funcional", label: "Egresos Detallado-LDF Clasificación Funcional", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Estado-Analitico-del-ejercicio-del-Presupuesto-de-Egreos-Detallado-LDF-CLASIFICACION-FUNCIONAL-FINALIDAD-Y-FUNCION-.pdf" },
              { id: "pt-2025-serv-pers", label: "Egresos Detallado-LDF Servicios Personales por Categoría", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Estado-Analitico-del-ejercicio-del-Presupuesto-de-Egreos-Detallado-LDF-CLASIFICACION-PERSONALES-POR-CATEGORIA-.pdf" },
              { id: "pt-2025-objeto", label: "Egresos Detallado-LDF por Objeto del Gasto", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/Estado-Analitico-del-ejercicio-del-Presupuesto-de-Egreos-Detallado-LDF-CLASIFICACION-POR-OBJETO-DEL-GASTO-CAPITULO-Y-CONCEPTO-.pdf" },
            ],
          },
          { id: "pt-2025-pbrm", label: "PbRM", children: [{ id: "pt-2025-pbrm-file", label: "PbRM08b2025202503", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/PbRM08b2025202503.pdf" }] },
          { id: "pt-2025-manual", label: "Manual Único de Contabilidad Gubernamental", children: [{ id: "pt-2025-manual-file", label: "Manual Único de Contabilidad Gubernamental", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/manual_unico_de_contabilidad_gubernamental-1.pdf" }] },
        ],
      },
      {
        id: "st-2025", label: "Segundo Trimestre 2025",
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
          ]},
          { id: "st-2025-manual", label: "Manual Único de Contabilidad Gubernamental", children: [{ id: "st-2025-manual-file", label: "Manual Único de Contabilidad Gubernamental", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/08/MANUAL-UNICO-DE-CONTABILIDAD-GUBERNAMENTAL.pdf" }] },
        ],
      },
      {
        id: "tt-2025", label: "Tercer Trimestre 2025",
        children: [
          { id: "tt-2025-titulo-iv", label: "Título IV", children: [
            { id: "tt-2025-contable", label: "Información Contable", children: [
              { id: "tt-2025-activ-acum", label: "Estado de Actividades Acumulado", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-DE-ACTIVIDADES-ACUMULADO.pdf" },
              { id: "tt-2025-notas", label: "Notas a los Estados Financieros", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/NOTAS-A-LOS-ESTADOS-FINANCIEROS.pdf" },
              { id: "tt-2025-flujos", label: "Estado de Flujos de Efectivo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-DE-FLUJOS-DE-EFECTIVO.pdf" },
            ]},
          ]},
          { id: "tt-2025-manual", label: "Manual Único de Contabilidad Gubernamental", children: [{ id: "tt-2025-manual-file", label: "Manual Único de Contabilidad Gubernamental", href: "https://drive.google.com/file/d/1tStzjmeVW-9Ov-G3miHdZpcGvEKv597f/view?usp=sharing" }] },
        ],
      },
      {
        id: "ct-2025", label: "Cuarto Trimestre 2025",
        children: [
          { id: "ct-2025-titulo-v", label: "Título V", children: [
            { id: "ct-2025-t5-info", label: "Información", children: [
              { id: "ct-2025-ayudas", label: "Ayudas y Subsidios", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2026/02/AYUDAS-Y-SUBSIDIOS.pdf" },
            ]},
          ]},
          { id: "ct-2025-inventarios", label: "Inventarios", children: [
            { id: "ct-2025-bienes", label: "Bienes Muebles e Inmuebles", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2026/02/BIENES-MUEBLES-E-INMUEBLES.pdf" },
          ]},
        ],
      },
      {
        id: "ct-2024", label: "Cuarto Trimestre 2024",
        children: [
          { id: "ct-2024-inventario", label: "Inventario", children: [
            { id: "ct-2024-ibmbc", label: "IBMBC2025202412", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/IBMBC2025202412.pdf" },
          ]},
          { id: "ct-2024-ldf", label: "Ley de Disciplina", children: [
            { id: "ct-2024-balance", label: "Balance Presupuestario", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/balance_presupuestario.pdf" },
            { id: "ct-2024-ingresos-det", label: "Estado analítico de ingresos detallado", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/07/estado_analitico_de_ingresos_detallado.pdf" },
          ]},
        ],
      },
    ],
  },
  {
    id: "presupuestos", label: "Presupuestos",
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
    ],
  },
  {
    id: "cuenta-publica", label: "Cuenta Pública",
    children: [
      { id: "cuenta-publica-2024", label: "Cuenta Pública 2024", children: [
        { id: "cp-2024-balance", label: "Balance Presupuestario", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/BALANCE-PRESUPUESTARIO.pdf" },
        { id: "cp-2024-diario", label: "Diario General de Pólizas", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/DIARIO-GENERAL-DE-POLIZAS.pdf" },
        { id: "cp-2024-situacion", label: "Estado de Situación Financiera", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-DE-SITUACION-FINACIERA.pdf" },
        { id: "cp-2024-actividades", label: "Estado de Actividades Comparativo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-DE-ACTIVIDADES-COMPARATIVO.pdf" },
        { id: "cp-2024-variacion", label: "Estado de Variación de la Hacienda Pública", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/10/ESTADO-DE-VARIACION-DE-LA-HACIENDA-PUBLICA.pdf" },
      ]},
      { id: "cuenta-publica-2023", label: "Cuenta Pública 2023", children: [
        { id: "cp-2023-situacion", label: "Estado de Situación Financiera", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-DE-SITUACION-FINANCIERA.pdf" },
        { id: "cp-2023-balance", label: "Balance Presupuestario-LDF", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/BALANCE-PRESUPUESTARIO-LDF.pdf" },
        { id: "cp-2023-actividades", label: "Estado de Actividades Comparativo", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-DE-ACTIVIDADES-COMPARATIVO.pdf" },
      ]},
      { id: "cuenta-publica-2022", label: "Cuenta Pública 2022", children: [
        { id: "cp-2022-balance", label: "Balance Presupuestario LDF", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/BALANCE-PRESUPUESTARIO-LDF-1.pdf" },
        { id: "cp-2022-situacion", label: "Estado de Situación Financiera", href: "https://temascalcingo.gob.mx/pagina/wp-content/uploads/2025/11/ESTADO-DE-SITUACION-FINANCIERA-1.pdf" },
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
